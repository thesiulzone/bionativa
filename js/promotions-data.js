/**
 * BIONATIVA LAB - Datos y Configuración Base de Promociones
 * Estructura declarativa predeterminada cargada cuando no existe configuración en localStorage.
 * Todas las fechas están en formato ISO compatible con el navegador.
 */

window.BIONATIVA_PROMOTIONS_DEFAULT = {
  version: "1.0.0",
  lastUpdated: "2026-11-25T23:00:00.000Z",
  
  // Campaña Principal Activa para Portada y Ticker
  activeCampaign: {
    id: "semana-bionativa-2026",
    name: "Semana BioNativa",
    description: "Promociones especiales en productos seleccionados y packs de bienestar.",
    status: "active", // "active" | "paused" | "scheduled" | "expired"
    startDate: "2026-11-20T00:00:00",
    endDate: "2026-12-15T23:59:59",
    highlightOnHome: true,
    bannerBadge: "CAMPAÑA ACTIVA",
    bannerTagline: "Ahorro directo en pureza certificada con COA",
    metrics: {
      impressions: 1240,
      clicks: 315,
      conversions: 42,
      revenueGenerated: 5420.50
    }
  },

  // Descuentos Directos por Producto Individual o Categoría
  productDiscounts: [
    {
      id: "promo-creatina-1kg",
      campaignId: "semana-bionativa-2026",
      targetType: "product", // "product" | "category"
      targetId: "creatina-monohidratada",
      targetName: "Creatina Monohidratada 100% Pura (Bolsa 1 kg)",
      variantId: "bolsa-1kg",
      regularPrice: 85.40,
      promoPrice: 74.90,
      discountPercent: 12,
      badge: "12% OFF • Semana BioNativa",
      enabled: true
    },
    {
      id: "promo-citrato-magnesio",
      campaignId: "semana-bionativa-2026",
      targetType: "product",
      targetId: "citrato-de-magnesio",
      targetName: "Citrato de Magnesio Grado USP (Bolsa 1 kg)",
      variantId: "bolsa-1kg",
      regularPrice: 22.40,
      promoPrice: 19.49,
      discountPercent: 13,
      badge: "13% OFF • Bienestar",
      enabled: true
    },
    {
      id: "promo-categoria-magnesio",
      campaignId: "semana-bionativa-2026",
      targetType: "category",
      targetId: "magnesio-bienestar",
      targetName: "Categoría Magnesio & Sueño",
      discountPercent: 10,
      badge: "10% OFF Magnesio",
      enabled: false
    }
  ],

  // Ofertas por Volumen (Compra Múltiple / Quantity Breaks)
  volumeOffers: [
    {
      id: "vol-creatina-2pack",
      productId: "creatina-monohidratada",
      productName: "Creatina Monohidratada 1 kg",
      minQuantity: 2,
      discountType: "percent", // "percent" | "fixed_amount"
      discountValue: 10, // 10% de descuento al llevar 2 o más
      label: "Descuento por 2 unidades (10% OFF)",
      badge: "Ahorro x2",
      enabled: true
    },
    {
      id: "vol-citrato-3pack",
      productId: "citrato-de-magnesio",
      productName: "Citrato de Magnesio 1 kg",
      minQuantity: 3,
      discountType: "percent",
      discountValue: 15, // 15% de descuento al llevar 3 o más
      label: "Pack Familiar 3 unidades (15% OFF)",
      badge: "Ahorro x3",
      enabled: true
    }
  ],

  // Combos de Productos (Packs Sinergia con Precio Especial)
  combos: [
    {
      id: "combo-deportivo-fuerza",
      name: "Combo Deportivo Fuerza & Recuperación",
      badge: "Combo Deportivo",
      shortDescription: "Creatina Monohidratada 1kg + Proteína WPC80 1kg",
      description: "Sinergia de alta biodisponibilidad para síntesis de ATP celular y reparación muscular acelerada.",
      items: [
        { productId: "creatina-monohidratada", variantId: "bolsa-1kg", name: "Creatina Monohidratada 1kg", regularPrice: 85.40 },
        { productId: "proteina-suero-leche-80", variantId: "bolsa-1kg", name: "Proteína Whey WPC80 1kg", regularPrice: 131.60 }
      ],
      regularTotalPrice: 217.00,
      comboPrice: 217.00,
      savings: 0,
      image: "img/products/creatina-monohidratada-bolsa-1kg.jpg",
      enabled: false
    },
    {
      id: "combo-sueno-profundo",
      name: "Pack Sueño Profundo & Cero Estrés",
      badge: "Pack Bienestar",
      shortDescription: "Glicinato de Magnesio 1kg + Citrato de Magnesio 1kg",
      description: "Doble modulación del sistema nervioso parasimpático y relajación neuromuscular antes del descanso.",
      items: [
        { productId: "glicinato-de-magnesio", variantId: "bolsa-1kg", name: "Glicinato de Magnesio 1kg", regularPrice: 49.00 },
        { productId: "citrato-de-magnesio", variantId: "bolsa-1kg", name: "Citrato de Magnesio 1kg", regularPrice: 22.40 }
      ],
      regularTotalPrice: 71.40,
      comboPrice: 71.40,
      savings: 0,
      image: "img/products/citrato-de-magnesio-bolsa-1kg.jpg",
      enabled: false
    },
    {
      id: "combo-articular-longevidad",
      name: "Pack Salud Articular & Longevidad",
      badge: "Pack Articular",
      shortDescription: "Colágeno Hidrolizado 1kg + Citrato de Magnesio 1kg",
      description: "Regeneración de cartílagos, tendones y absorción mineral óptima para movilidad sin dolor.",
      items: [
        { productId: "colageno-hidrolizado", variantId: "bolsa-1kg", name: "Colágeno Hidrolizado 1kg", regularPrice: 56.00 },
        { productId: "citrato-de-magnesio", variantId: "bolsa-1kg", name: "Citrato de Magnesio 1kg", regularPrice: 22.40 }
      ],
      regularTotalPrice: 78.40,
      comboPrice: 78.40,
      savings: 0,
      image: "img/products/colageno-hidrolizado-peptidos-bolsa-1kg.jpg",
      enabled: false
    }
  ],

  // Códigos de Descuento (Cupones)
  coupons: [
    {
      code: "SEMANABIONATIVA",
      label: "Cupón Especial Semana BioNativa (-10%)",
      discountType: "percent", // "percent" | "fixed_amount"
      discountValue: 10,
      minSpend: 90.00,
      startDate: "2026-11-20T00:00:00",
      endDate: "2026-12-15T23:59:59",
      maxUses: 500,
      usedCount: 42,
      enabled: true
    },
    {
      code: "CLIENTEPRO",
      label: "Cupón Cliente Recurrente (S/ 15 de Ahorro)",
      discountType: "fixed_amount",
      discountValue: 15.00,
      minSpend: 130.00,
      startDate: "2026-01-01T00:00:00",
      endDate: "2027-12-31T23:59:59",
      maxUses: 1000,
      usedCount: 79,
      enabled: true
    },
    {
      code: "BIENVENIDA10",
      label: "Descuento Primera Compra (10% OFF)",
      discountType: "percent",
      discountValue: 10,
      minSpend: 80.00,
      startDate: "2026-01-01T00:00:00",
      endDate: "2027-12-31T23:59:59",
      maxUses: 5000,
      usedCount: 153,
      enabled: true
    }
  ],

  // Slides del Carrusel Principal (Hero · Propuesta "03 · Oferta directa")
  heroSlides: [
    {
      id: "hero-slide-pack-rutina",
      badge: "Pack más pedido",
      title: "Tu rutina, mejor equipada",
      description: "Pack de Creatina Monohidratada 100% Pura (1 kg) + Proteína de Suero de Leche 80% WPC80 (1 kg), grado USP.",
      currentPrice: 206.50,
      regularPrice: 217.00,
      savingsLabel: "Ahorra S/ 10.50",
      buttonText: "Comprar pack",
      actionType: "bundle",
      actionValue: "fuerza",
      variantId: "bolsa-1kg",
      image: "img/products/creatina-monohidratada-bolsa-1kg.jpg",
      imageAlt: "Creatina Monohidratada 100% Pura 1 kg BioNativa LAB",
      secondaryImage: "img/products/proteina-suero-leche-80-pote-1kg.jpg",
      secondaryImageAlt: "Proteína de Suero WPC80 1 kg BioNativa LAB",
      enabled: true
    },
    {
      id: "hero-slide-creatina-1kg",
      badge: "12% OFF · Semana BioNativa",
      title: "Creatina 100% Pura",
      description: "Creatina monohidratada micronizada 200 Mesh en bolsa de 1 kg, con certificado COA por lote.",
      currentPrice: 74.90,
      regularPrice: 85.40,
      savingsLabel: "Ahorra S/ 10.50",
      buttonText: "Comprar creatina",
      actionType: "product",
      actionValue: "creatina-monohidratada",
      variantId: "bolsa-1kg",
      image: "img/products/creatina-monohidratada-pote-1kg.jpg",
      imageAlt: "Creatina Monohidratada 100% Pura BioNativa LAB",
      secondaryImage: "",
      secondaryImageAlt: "",
      enabled: true
    },
    {
      id: "hero-slide-magnesio-1kg",
      badge: "Alta absorción",
      title: "Descanso sin molestias",
      description: "Bisglicinato de Magnesio quelado en bolsa de 1 kg, fórmula de alta asimilación sin efecto laxante.",
      currentPrice: 49.00,
      regularPrice: 0,
      savingsLabel: "",
      buttonText: "Comprar magnesio",
      actionType: "product",
      actionValue: "glicinato-de-magnesio",
      variantId: "bolsa-1kg",
      image: "img/products/glicinato-de-magnesio-bolsa-1kg.jpg",
      imageAlt: "Bisglicinato de Magnesio 1 kg BioNativa LAB",
      secondaryImage: "",
      secondaryImageAlt: "",
      enabled: true
    }
  ]
};
