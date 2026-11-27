import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const rootDir = process.cwd();
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(rootDir, "js/products-data.js"), "utf8"), ctx);
const products = ctx.window.BIONATIVA_PRODUCTS || vm.runInContext("BIONATIVA_PRODUCTS", ctx);

const catalogMaster = [];
const inventoryMaster = {};
const coaLotsMaster = [];

const nowIso = "2026-11-26T22:15:00-05:00";

for (const p of products) {
  const isProfit = p.brand === "profit-pharma" || p.category === "distribuidor-autorizado";
  const brand = isProfit ? "profit-pharma" : "bionativa-lab";
  const firstSku = p.variants?.[0]?.sku || `${isProfit ? "PF" : "BIO"}-${p.id.slice(0, 4).toUpperCase()}`;
  const skuMaster = firstSku.split("-").slice(0, 2).join("-");

  const rawSpecs = p.technicalSpecs || {};
  const isInjectable = (p.presentationsSummary || p.unit || "").toLowerCase().includes("inyectable") ||
    (p.variants || []).some(v => v.name.toLowerCase().includes("vial") || v.name.toLowerCase().includes("inyectable"));

  const technicalSpecs = {
    chemicalForm: rawSpecs.chemicalForm || rawSpecs["Composición"] || p.composition || p.shortName,
    composition: p.composition || rawSpecs["Composición"] || "100% principio activo declarado",
    grade: rawSpecs.grade || (isProfit ? "Estándar Farmacéutico Profit Pharma" : "Grado Farmacéutico USP / FCC"),
    appearance: rawSpecs.appearance || (isInjectable ? "Solución estéril homogénea" : "Polvo fino homogéneo"),
    solubility: rawSpecs.solubility || (isInjectable ? "N/A (Solución lista para uso)" : "Soluble en líquidos a temperatura ambiente"),
    meshOrConcentration: rawSpecs.mesh || rawSpecs["Composición"] || (isInjectable ? "Concentración estándar de línea" : "200 Mesh"),
    casNumber: rawSpecs.casNumber ?? null,
    allergens: isProfit
      ? ["Uso profesional / revisar excipientes de fórmula"]
      : ["Libre de gluten", "Libre de lactosa"]
  };

  const rawDosage = p.dosage || {};
  const dosage = {
    administrationRoute: isInjectable ? "parenteral" : "oral",
    recommendedAmount: typeof rawDosage.recommendedGrams === "number" && rawDosage.recommendedGrams > 0 ? rawDosage.recommendedGrams : 1,
    unit: rawDosage.unit || (isInjectable ? "vial" : "g"),
    frequencyText: rawDosage.frequencyText || (isProfit ? "Según protocolo profesional" : "1 vez al día"),
    scoopEquivalent: rawDosage.scoopEquivalent || (isInjectable ? "1 vial / dosis indicada" : "1 cucharadita dosificadora"),
    timingText: rawDosage.timingText || (isProfit ? "Bajo evaluación y protocolo médico" : "En ayunas o post-entrenamiento"),
    ...(typeof rawDosage.minDose === "number" ? { minDose: rawDosage.minDose } : {}),
    ...(typeof rawDosage.maxDose === "number" ? { maxDose: rawDosage.maxDose } : {})
  };

  const rawResp = p.responsibleUse || {};
  const warnings = Array.isArray(rawResp.warnings) && rawResp.warnings.length >= 2
    ? rawResp.warnings
    : [
        "No superar la dosis diaria recomendada.",
        "Consulte a su médico en caso de embarazo, lactancia o condición clínica."
      ];

  const responsibleUse = {
    instructions: rawResp.instructions || p.howToUse || "Seguir indicaciones de uso del envase.",
    warnings,
    storage: rawResp.storage || "Mantener en lugar fresco (< 25°C) y seco.",
    shelfLifeMonths: isProfit ? 24 : 36
  };

  const hasCoaFile = Boolean(p.coaPdf && fs.existsSync(path.join(rootDir, p.coaPdf)));
  let lotId = null;

  if (hasCoaFile) {
    const code = skuMaster.replace(/^BIO-|^PF-/, "").replace(/[^a-z0-9]/gi, "").toUpperCase();
    lotId = `BN-${code}-2026-01`;
    coaLotsMaster.push({
      lotId,
      productId: p.id,
      variantIds: (p.variants || []).map(v => v.id),
      supplierLot: `SUP-${code}-2609`,
      manufacturer: p.origin || "Laboratorio Certificado",
      manufactureDate: "2026-09-01",
      expiryDate: "2029-09-01",
      analysisDate: "2026-09-10",
      assayMethod: "HPLC / USP",
      purityResult: p.coaPurity || "99.9% Verificado",
      coaPdf: p.coaPdf,
      status: "active"
    });
  }

  const variants = (p.variants || []).map((v, idx) => {
    const webPrice = Number(v.price);
    const regularPrice = idx === 0 && typeof p.regularPrice === "number" && p.regularPrice >= webPrice
      ? p.regularPrice
      : null;

    inventoryMaster[v.sku] = {
      productId: p.id,
      variantId: v.id,
      warehouse: "lima-principal",
      stockAvailable: 25,
      stockReserved: 0,
      minStockAlert: 5,
      allowBackorder: false,
      activeLotId: lotId,
      updatedAt: nowIso
    };

    return {
      id: v.id,
      sku: v.sku,
      name: v.name,
      weight: v.weight || v.name,
      packagingType: v.packagingType || "envase",
      format: v.format || v.name,
      netWeightGrams: typeof v.weightGrams === "number" ? v.weightGrams : null,
      netVolumeMl: null,
      isBulk: Boolean(v.isBulk),
      active: true,
      image: v.image || p.image,
      pricing: {
        currency: "PEN",
        regularPrice,
        webPrice,
        wholesalePrice: null,
        igvIncluded: true,
        updatedAt: "2026-11-26"
      }
    };
  });

  catalogMaster.push({
    id: p.id,
    skuMaster,
    brand,
    name: p.name,
    shortName: p.shortName,
    category: p.category,
    categoryName: p.categoryName,
    ...(p.subCategory ? { subCategory: p.subCategory } : {}),
    ...(p.subCategoryName ? { subCategoryName: p.subCategoryName } : {}),
    ...(p.badge ? { badge: p.badge } : {}),
    rating: p.rating,
    reviewsCount: p.reviewsCount,
    image: p.image,
    ...(p.presentationSheet ? { presentationSheet: p.presentationSheet } : {}),
    hasVariants: Boolean(p.hasVariants),
    defaultVariant: p.defaultVariant || variants[0]?.id,
    ...(p.presentationsSummary ? { presentationsSummary: p.presentationsSummary } : {}),
    unit: p.unit,
    origin: p.origin,
    coaRequired: hasCoaFile,
    coaCertified: Boolean(p.coaCertified),
    coaPurity: p.coaPurity || "Verificado",
    ...(p.regularPrice ? { regularPrice: p.regularPrice } : {}),
    ...(p.discountBadge ? { discountBadge: p.discountBadge } : {}),
    ...(p.highlightBadge ? { highlightBadge: p.highlightBadge } : {}),
    description: p.description,
    benefits: p.benefits || [],
    howToUse: p.howToUse,
    composition: p.composition,
    faqs: p.faqs || [],
    technicalSpecs,
    dosage,
    responsibleUse,
    variants,
    complementaryProductIds: p.complementaryProductIds || []
  });
}

fs.mkdirSync(path.join(rootDir, "data"), { recursive: true });
fs.writeFileSync(path.join(rootDir, "data/catalog.master.json"), JSON.stringify(catalogMaster, null, 2), "utf8");
fs.writeFileSync(path.join(rootDir, "data/inventory.master.json"), JSON.stringify(inventoryMaster, null, 2), "utf8");
fs.writeFileSync(path.join(rootDir, "data/coa-lots.master.json"), JSON.stringify(coaLotsMaster, null, 2), "utf8");

console.log(`✔ Migración inicial completada: ${catalogMaster.length} productos, ${Object.keys(inventoryMaster).length} SKUs, ${coaLotsMaster.length} lotes COA.`);
