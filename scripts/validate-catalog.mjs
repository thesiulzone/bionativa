import fs from "node:fs";
import path from "node:path";

const REQUIRED_PRODUCT_FIELDS = [
  "id",
  "skuMaster",
  "brand",
  "name",
  "shortName",
  "category",
  "origin",
  "description"
];

const REQUIRED_TECH_SPECS = [
  "chemicalForm",
  "composition",
  "grade",
  "appearance",
  "solubility",
  "meshOrConcentration"
];

const REQUIRED_DOSAGE = [
  "administrationRoute",
  "recommendedAmount",
  "unit",
  "frequencyText",
  "scoopEquivalent",
  "timingText"
];

const REQUIRED_RESPONSIBLE_USE = [
  "instructions",
  "storage"
];

const VALID_BRANDS = new Set(["bionativa-lab", "profit-pharma"]);
const VALID_ROUTES = new Set(["oral", "topical", "parenteral"]);
const VALID_LOT_STATUSES = new Set(["active", "quarantine", "exhausted", "expired"]);

/**
 * Valida la integridad de la plantilla obligatoria de ficha técnica y de la fuente única (SSOT).
 * Lanza un Error con el listado completo de incumplimientos si encuentra fallos.
 */
export function validateCatalog({ catalog, inventory, coaLots, rootDir = process.cwd(), referenceDate = new Date() }) {
  const errors = [];

  if (!Array.isArray(catalog) || catalog.length === 0) {
    errors.push("catalog.master.json debe ser un arreglo no vacío de productos.");
  }
  if (!inventory || typeof inventory !== "object" || Array.isArray(inventory)) {
    errors.push("inventory.master.json debe ser un objeto indexado por SKU.");
  }
  if (!Array.isArray(coaLots)) {
    errors.push("coa-lots.master.json debe ser un arreglo de lotes.");
  }

  if (errors.length > 0) {
    throw new Error(`Errores estructurales en SSOT:\n- ${errors.join("\n- ")}`);
  }

  const productIds = new Set();
  const skus = new Set();
  const lotsById = new Map();

  for (const lot of coaLots) {
    if (!lot.lotId || typeof lot.lotId !== "string") {
      errors.push("Lote sin lotId válido en coa-lots.master.json.");
      continue;
    }
    if (lotsById.has(lot.lotId)) {
      errors.push(`lotId duplicado en coa-lots.master.json: ${lot.lotId}`);
    }
    lotsById.set(lot.lotId, lot);

    if (!VALID_LOT_STATUSES.has(lot.status)) {
      errors.push(`Lote ${lot.lotId} tiene status inválido: ${lot.status}`);
    }
    if (!lot.productId) {
      errors.push(`Lote ${lot.lotId} no tiene productId.`);
    }
    if (!lot.expiryDate || Number.isNaN(Date.parse(lot.expiryDate))) {
      errors.push(`Lote ${lot.lotId} tiene expiryDate inválida: ${lot.expiryDate}`);
    }
    if (!lot.coaPdf) {
      errors.push(`Lote ${lot.lotId} no especifica coaPdf.`);
    } else if (!fs.existsSync(path.join(rootDir, lot.coaPdf))) {
      errors.push(`Archivo COA no encontrado en disco para lote ${lot.lotId}: ${lot.coaPdf}`);
    }
  }

  for (const product of catalog) {
    const pid = product.id || "<sin-id>";

    if (productIds.has(pid)) {
      errors.push(`ID de producto duplicado: ${pid}`);
    }
    productIds.add(pid);

    for (const field of REQUIRED_PRODUCT_FIELDS) {
      if (typeof product[field] !== "string" || product[field].trim() === "") {
        errors.push(`[${pid}] Falta campo obligatorio de identificación: ${field}`);
      }
    }

    if (!VALID_BRANDS.has(product.brand)) {
      errors.push(`[${pid}] brand inválido (${product.brand}). Valores permitidos: bionativa-lab, profit-pharma`);
    }

    if (typeof product.coaRequired !== "boolean") {
      errors.push(`[${pid}] coaRequired debe ser boolean.`);
    }

    // Validar technicalSpecs
    const specs = product.technicalSpecs;
    if (!specs || typeof specs !== "object") {
      errors.push(`[${pid}] Falta bloque technicalSpecs.`);
    } else {
      for (const field of REQUIRED_TECH_SPECS) {
        if (typeof specs[field] !== "string" || specs[field].trim() === "") {
          errors.push(`[${pid}] Falta campo obligatorio en technicalSpecs: ${field}`);
        }
      }
      if (!("casNumber" in specs)) {
        errors.push(`[${pid}] technicalSpecs debe incluir casNumber (string o null).`);
      }
      if (!Array.isArray(specs.allergens) || specs.allergens.length === 0) {
        errors.push(`[${pid}] technicalSpecs.allergens debe ser un arreglo con al menos 1 elemento.`);
      }
    }

    // Validar dosage
    const dosage = product.dosage;
    if (!dosage || typeof dosage !== "object") {
      errors.push(`[${pid}] Falta bloque dosage.`);
    } else {
      if (!VALID_ROUTES.has(dosage.administrationRoute)) {
        errors.push(`[${pid}] dosage.administrationRoute inválido: ${dosage.administrationRoute}`);
      }
      for (const field of REQUIRED_DOSAGE) {
        const val = dosage[field];
        if (field === "recommendedAmount") {
          if (typeof val !== "number" || val <= 0) {
            errors.push(`[${pid}] dosage.recommendedAmount debe ser número > 0.`);
          }
        } else if (typeof val !== "string" || val.trim() === "") {
          errors.push(`[${pid}] Falta campo obligatorio en dosage: ${field}`);
        }
      }
    }

    // Validar responsibleUse
    const resp = product.responsibleUse;
    if (!resp || typeof resp !== "object") {
      errors.push(`[${pid}] Falta bloque responsibleUse.`);
    } else {
      for (const field of REQUIRED_RESPONSIBLE_USE) {
        if (typeof resp[field] !== "string" || resp[field].trim() === "") {
          errors.push(`[${pid}] Falta campo obligatorio en responsibleUse: ${field}`);
        }
      }
      if (!Array.isArray(resp.warnings) || resp.warnings.length < 2) {
        errors.push(`[${pid}] responsibleUse.warnings debe contener al menos 2 advertencias.`);
      }
      if (typeof resp.shelfLifeMonths !== "number" || resp.shelfLifeMonths <= 0) {
        errors.push(`[${pid}] responsibleUse.shelfLifeMonths debe ser número > 0.`);
      }
    }

    // Validar presentaciones, precios e inventario
    if (!Array.isArray(product.variants) || product.variants.length === 0) {
      errors.push(`[${pid}] Debe tener al menos 1 presentación en variants[].`);
    } else {
      for (const variant of product.variants) {
        if (!variant.id || !variant.sku || !variant.name) {
          errors.push(`[${pid}] Presentación incompleta (requiere id, sku, name).`);
          continue;
        }
        if (skus.has(variant.sku)) {
          errors.push(`[${pid}] SKU duplicado: ${variant.sku}`);
        }
        skus.add(variant.sku);

        const pricing = variant.pricing;
        if (!pricing || pricing.currency !== "PEN" || typeof pricing.webPrice !== "number" || pricing.webPrice <= 0) {
          errors.push(`[${pid}/${variant.sku}] pricing inválido (requiere currency='PEN' y webPrice > 0).`);
        } else if (typeof pricing.regularPrice === "number" && pricing.regularPrice < pricing.webPrice) {
          errors.push(`[${pid}/${variant.sku}] regularPrice (${pricing.regularPrice}) no puede ser menor que webPrice (${pricing.webPrice}).`);
        }

        // Inventario
        const inv = inventory[variant.sku];
        if (variant.active !== false) {
          if (!inv) {
            errors.push(`[${pid}/${variant.sku}] Falta registro de inventario en inventory.master.json.`);
          } else {
            if (typeof inv.stockAvailable !== "number" || inv.stockAvailable < 0) {
              errors.push(`[${pid}/${variant.sku}] stockAvailable inválido.`);
            }
            if (typeof inv.stockReserved !== "number" || inv.stockReserved < 0) {
              errors.push(`[${pid}/${variant.sku}] stockReserved inválido.`);
            }
            if (inv.activeLotId) {
              const lot = lotsById.get(inv.activeLotId);
              if (!lot) {
                errors.push(`[${pid}/${variant.sku}] activeLotId '${inv.activeLotId}' no existe en coa-lots.master.json.`);
              } else {
                if (lot.productId !== pid) {
                  errors.push(`[${pid}/${variant.sku}] activeLotId '${inv.activeLotId}' pertenece a otro producto (${lot.productId}).`);
                }
                if (lot.status !== "active") {
                  errors.push(`[${pid}/${variant.sku}] activeLotId '${inv.activeLotId}' no está activo (status=${lot.status}).`);
                }
                if (Date.parse(lot.expiryDate) < referenceDate.getTime()) {
                  errors.push(`[${pid}/${variant.sku}] activeLotId '${inv.activeLotId}' está vencido (${lot.expiryDate}).`);
                }
              }
            } else if (product.coaRequired) {
              errors.push(`[${pid}/${variant.sku}] Producto con coaRequired=true requiere activeLotId en inventario.`);
            }
          }
        }
      }
    }

    if (product.coaRequired) {
      const hasActiveLot = coaLots.some(
        lot => lot.productId === pid && lot.status === "active" && Date.parse(lot.expiryDate) >= referenceDate.getTime()
      );
      if (!hasActiveLot) {
        errors.push(`[${pid}] Producto con coaRequired=true no tiene ningún lote activo vigente en coa-lots.master.json.`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Validación de catálogo fallida (${errors.length} errores):\n- ${errors.join("\n- ")}`);
  }

  return {
    productsCount: catalog.length,
    skusCount: skus.size,
    lotsCount: coaLots.length
  };
}

if (import.meta.url === `file://${path.resolve(process.argv[1] || "")}` || process.argv[1]?.endsWith("validate-catalog.mjs")) {
  const rootDir = process.cwd();
  const catalog = JSON.parse(fs.readFileSync(path.join(rootDir, "data/catalog.master.json"), "utf8"));
  const inventory = JSON.parse(fs.readFileSync(path.join(rootDir, "data/inventory.master.json"), "utf8"));
  const coaLots = JSON.parse(fs.readFileSync(path.join(rootDir, "data/coa-lots.master.json"), "utf8"));
  const summary = validateCatalog({ catalog, inventory, coaLots, rootDir });
  console.log(`✔ Validación SSOT exitosa: ${summary.productsCount} productos, ${summary.skusCount} SKUs, ${summary.lotsCount} lotes COA.`);
}
