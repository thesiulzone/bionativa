import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { validateCatalog } from "./validate-catalog.mjs";

function computeStockStatus(inv) {
  if (!inv) return "out_of_stock";
  const net = inv.stockAvailable - inv.stockReserved;
  if (net <= 0 && !inv.allowBackorder) return "out_of_stock";
  if (net <= (inv.minStockAlert ?? 5)) return "low_stock";
  return "in_stock";
}

/**
 * Genera js/products-data.js y functions/_shared/catalog.js desde la fuente única (data/*.master.json).
 */
export function buildCatalogFiles(rootDir = process.cwd()) {
  const catalog = JSON.parse(fs.readFileSync(path.join(rootDir, "data/catalog.master.json"), "utf8"));
  const inventory = JSON.parse(fs.readFileSync(path.join(rootDir, "data/inventory.master.json"), "utf8"));
  const coaLots = JSON.parse(fs.readFileSync(path.join(rootDir, "data/coa-lots.master.json"), "utf8"));

  const summary = validateCatalog({ catalog, inventory, coaLots, rootDir });
  const lotsById = new Map(coaLots.map(lot => [lot.lotId, lot]));

  // 1. Generar bundle público para el navegador (js/products-data.js)
  const browserProducts = catalog.map(product => {
    const activeVariants = product.variants.filter(v => v.active !== false);
    const defaultVar = activeVariants.find(v => v.id === product.defaultVariant) || activeVariants[0];

    const mappedVariants = activeVariants.map(v => {
      const inv = inventory[v.sku];
      const lot = inv?.activeLotId ? lotsById.get(inv.activeLotId) : null;
      return {
        id: v.id,
        name: v.name,
        price: v.pricing.webPrice,
        regularPrice: v.pricing.regularPrice ?? undefined,
        weight: v.weight,
        format: v.format,
        packagingType: v.packagingType,
        sku: v.sku,
        image: v.image,
        isBulk: v.isBulk || undefined,
        weightGrams: v.netWeightGrams ?? undefined,
        volumeMl: v.netVolumeMl ?? undefined,
        stockStatus: computeStockStatus(inv),
        activeLotId: lot ? lot.lotId : null
      };
    });

    const primaryLot = mappedVariants[0]?.activeLotId ? lotsById.get(mappedVariants[0].activeLotId) : null;

    const out = {
      id: product.id,
      skuMaster: product.skuMaster,
      brand: product.brand,
      name: product.name,
      shortName: product.shortName,
      category: product.category,
      categoryName: product.categoryName,
      ...(product.subCategory ? { subCategory: product.subCategory } : {}),
      ...(product.subCategoryName ? { subCategoryName: product.subCategoryName } : {}),
      ...(product.badge ? { badge: product.badge } : {}),
      rating: product.rating,
      reviewsCount: product.reviewsCount,
      image: product.image,
      ...(product.presentationSheet ? { presentationSheet: product.presentationSheet } : {}),
      hasVariants: product.hasVariants,
      defaultVariant: product.defaultVariant,
      variants: mappedVariants,
      ...(product.presentationsSummary ? { presentationsSummary: product.presentationsSummary } : {}),
      price: defaultVar.pricing.webPrice,
      unit: product.unit,
      origin: product.origin,
      coaRequired: product.coaRequired,
      coaCertified: product.coaCertified,
      coaPurity: product.coaPurity,
      ...(primaryLot ? {
        coaPdf: primaryLot.coaPdf,
        activeLot: {
          lotId: primaryLot.lotId,
          expiryDate: primaryLot.expiryDate,
          analysisDate: primaryLot.analysisDate,
          purityResult: primaryLot.purityResult,
          assayMethod: primaryLot.assayMethod,
          coaPdf: primaryLot.coaPdf
        }
      } : (product.coaPdf ? { coaPdf: product.coaPdf } : {})),
      ...(product.regularPrice ? { regularPrice: product.regularPrice } : {}),
      ...(product.discountBadge ? { discountBadge: product.discountBadge } : {}),
      ...(product.highlightBadge ? { highlightBadge: product.highlightBadge } : {}),
      description: product.description,
      benefits: product.benefits,
      howToUse: product.howToUse,
      composition: product.composition,
      faqs: product.faqs,
      dosage: product.dosage,
      technicalSpecs: product.technicalSpecs,
      responsibleUse: product.responsibleUse,
      complementaryProductIds: product.complementaryProductIds || []
    };

    return out;
  });

  const browserHeader = `/**
 * BIONATIVA LAB - Catálogo Oficial de Productos (Generado desde Fuente Única SSOT)
 * NO EDITAR MANUALMENTE: Editar data/catalog.master.json, data/inventory.master.json o data/coa-lots.master.json
 * y ejecutar: node scripts/build-catalog.mjs
 * Moneda: Soles Peruanos (PEN - S/)
 */

const BIONATIVA_PRODUCTS = ${JSON.stringify(browserProducts, null, 2)};

if (typeof window !== "undefined") {
  window.BIONATIVA_PRODUCTS = BIONATIVA_PRODUCTS;
}
`;

  fs.writeFileSync(path.join(rootDir, "js/products-data.js"), browserHeader, "utf8");

  // 2. Generar módulo Edge/Worker (functions/_shared/catalog.js)
  const serverCatalog = catalog.map(product => {
    const activeVariants = product.variants.filter(v => v.active !== false);
    const defaultVar = activeVariants.find(v => v.id === product.defaultVariant) || activeVariants[0];
    return {
      id: product.id,
      name: product.name,
      category: product.category,
      variants: activeVariants.map(v => ({
        id: v.id,
        sku: v.sku,
        name: v.name,
        price: v.pricing.webPrice,
        stockAvailable: inventory[v.sku]?.stockAvailable ?? 0,
        stockReserved: inventory[v.sku]?.stockReserved ?? 0,
        allowBackorder: Boolean(inventory[v.sku]?.allowBackorder),
        activeLotId: inventory[v.sku]?.activeLotId ?? null
      })),
      price: defaultVar.pricing.webPrice
    };
  });

  const serverContent = `// Generado automáticamente desde data/catalog.master.json + data/inventory.master.json\nexport const CATALOG = ${JSON.stringify(serverCatalog)};\n`;
  fs.writeFileSync(path.join(rootDir, "functions/_shared/catalog.js"), serverContent, "utf8");

  return summary;
}

if (import.meta.url === `file://${path.resolve(process.argv[1] || "")}` || process.argv[1]?.endsWith("build-catalog.mjs")) {
  const rootDir = process.cwd();
  const summary = buildCatalogFiles(rootDir);
  console.log(`✔ Build SSOT completado: ${summary.productsCount} productos, ${summary.skusCount} SKUs, ${summary.lotsCount} lotes COA.`);
  try {
    execFileSync("python", [path.join(rootDir, "scripts/export-price-list.py")], { stdio: "inherit" });
  } catch (err) {
    console.warn("⚠ No se pudo regenerar el Excel Maestro automáticamente:", err.message);
  }
}
