/**
 * BIONATIVA LAB - Catálogo Oficial de Productos
 * Optimizado para SEO, AEO y GEO
 * Actualizado con Presentaciones Oficiales, Trazabilidad COA, Dosis Farmacopéicas y Especificaciones Técnicas
 * Moneda: Soles Peruanos (PEN - S/)
 */

const BIONATIVA_PRODUCTS = [
  {
    "id": "creatina-monohidratada",
    "name": "Creatina Monohidratada 100% Pura",
    "shortName": "Creatina Monohidratada",
    "category": "fuerza-deporte",
    "categoryName": "Fuerza y Rendimiento Deportivo",
    "badge": "Más Vendido",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "img/products/creatina-monohidratada-pote-1kg.jpg",
    "hasVariants": true,
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 85.4,
        "weight": "1 kg",
        "format": "Bolsa Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-CRE-BOL-1K",
        "image": "img/products/creatina-monohidratada-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 100.65,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-CRE-POT-1K",
        "image": "img/products/creatina-monohidratada-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "caja-25kg",
        "name": "Caja Industrial 25 kg (Por Mayor / Granel)",
        "price": 1749.9,
        "weight": "25 kg",
        "format": "Caja Corrugada Industrial (S/ 70.00/kg Mayorista)",
        "packagingType": "industrial-caja",
        "sku": "BIO-CRE-IND-25K",
        "image": "img/products/industrial/creatina-monohidratada-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "price": 85.4,
    "unit": "1KG",
    "origin": "Materia Prima Americana Grado Farmacéutico (USP)",
    "coaCertified": true,
    "coaPurity": "99.8% Purity HPLC Tested",
    "description": "Creatina monohidratada micronizada de máxima solubilidad y pureza. Sin maltodextrina, sin saborizantes ni aditivos químicos. Optimiza la producción de ATP celular para incrementar la fuerza explosiva, potencia y regeneración muscular.",
    "benefits": [
      "Aumenta la fuerza explosiva y resistencia anaeróbica en entrenamientos intensos.",
      "Mejora notablemente el rendimiento físico y la potencia en series de alta exigencia.",
      "Acelera la recuperación muscular post-entrenamiento previniendo el catabolismo."
    ],
    "howToUse": "Tomar 5g diarios (una cucharadita dosificadora) disueltos en 250ml de agua o zumo de frutas. Puede consumirse antes o después de entrenar, o por la mañana en días de descanso. No requiere fase de carga.",
    "composition": "100% Creatina Monohidratada micronizada (200 mesh). Libre de gluten, libre de lactosa, vegano.",
    "faqs": [
      {
        "q": "¿Cuál es el mejor momento para tomar la creatina monohidratada?",
        "a": "La creatina funciona por acumulación celular en los depósitos de fosfocreatina. Lo más importante es la constancia diaria (5g al día). Se recomienda tomarla post-entrenamiento con una fuente de carbohidratos simples para maximizar su captación, o junto al desayuno en días de descanso."
      },
      {
        "q": "¿La creatina retiene líquidos o daña los riñones?",
        "a": "En personas sanas, la evidencia científica demuestra que la creatina es el suplemento más seguro del mundo. La retención hídrica es intracelular (dentro del miocito), lo cual favorece la síntesis proteica y el volumen celular, no es retención subcutánea ni hinchazón."
      }
    ],
    "coaPdf": "docs/coa/coa-creatina-monohidratada.pdf",
    "regularPrice": 98,
    "discountBadge": "-13% WEB",
    "highlightBadge": "🔥 MÁS VENDIDO",
    "dosage": {
      "recommendedGrams": 5,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1 cucharadita dosificadora (5g)",
      "timingText": "Post-entrenamiento o por la mañana con agua o zumo",
      "minDose": 3,
      "maxDose": 10
    },
    "technicalSpecs": {
      "chemicalForm": "Creatina Monohidrato Micronizada",
      "casNumber": "6020-87-7",
      "mesh": "200 Mesh (Micronizado)",
      "grade": "USP Grade (Farmacopea EE.UU.)",
      "solubility": "Alta solubilidad en líquidos a temperatura ambiente",
      "appearance": "Polvo cristalino blanco ultra fino"
    },
    "responsibleUse": {
      "instructions": "Disolver 5g en 250ml de agua o zumo. Mantener una hidratación adecuada (mínimo 2 litros de agua diarios).",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "No requiere fase de carga para ser efectiva.",
        "Consulte a su médico en caso de afección renal preexistente."
      ],
      "storage": "Mantener en lugar fresco (< 25°C) y seco con el envase herméticamente cerrado."
    },
    "complementaryProductIds": [
      "proteina-suero-leche-80",
      "citrato-de-magnesio",
      "glutamina-pura"
    ]
  },
  {
    "id": "proteina-suero-leche-80",
    "name": "Proteína de Suero de Leche 80% (Whey Protein WPC80)",
    "shortName": "Proteína de Suero 80%",
    "category": "fuerza-deporte",
    "categoryName": "Fuerza y Rendimiento Deportivo",
    "badge": "Grado Americano",
    "rating": 4.8,
    "reviewsCount": 112,
    "image": "img/products/proteina-suero-leche-80-pote-1kg.jpg",
    "hasVariants": true,
    "price": 131.6,
    "unit": "1KG",
    "origin": "Materia Prima Americana (Wisconsin, USA)",
    "coaCertified": true,
    "coaPurity": "80.2% Proteína real por porción",
    "description": "Concentrado de proteína de suero de leche (WPC 80) obtenido por ultrafiltración a baja temperatura. Conserva todas las fracciones bioactivas (inmunoglobulinas, lactoferrina) con un perfil completo de aminoácidos esenciales y BCAAs naturales.",
    "benefits": [
      "Aumenta la masa muscular magra y repara el tejido muscular tras el ejercicio.",
      "De rápida digestión y absorción biológica sin pesadez estomacal.",
      "Excelente para recuperación física y como aporte proteico puro en desayunos o batidos."
    ],
    "howToUse": "Disolver 30g (1 scoop o 2 cucharadas soperas colmadas) en 250-300ml de agua, leche vegetal o tu batido favorito inmediatamente después de entrenar o entre comidas.",
    "composition": "Concentrado de proteína de suero de leche 80% instantáneo con lecitina de girasol no transgénica. Sin azúcar añadida, sin gomas espesantes.",
    "faqs": [
      {
        "q": "¿Por qué elegir Proteína WPC 80 pura sin saborizantes?",
        "a": "Nuestra proteína WPC80 contiene 100% materia prima americana sin rellenos como gomas, maltodextrina o sucralosa. Obtienes más gramos de proteína neta por tu dinero y puedes mezclarla con frutas, café o avena sin sabores químicos artificiales."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 131.6,
        "weight": "1 kg",
        "format": "Bolsa Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-WPC-BOL-1K",
        "image": "img/products/proteina-suero-leche-80-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 155.1,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-WPC-POT-1K",
        "image": "img/products/proteina-suero-leche-80-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "saco-20kg",
        "name": "Saco Industrial 20 kg (Mayorista / Granel)",
        "price": 2240,
        "weight": "20 kg",
        "format": "Saco Kraft Multicapa de Alta Resistencia",
        "packagingType": "industrial-saco",
        "sku": "BIO-WPC-IND-20K",
        "image": "img/products/industrial/proteina-suero-leche-80-20kg.jpg",
        "isBulk": true,
        "weightGrams": 20000
      }
    ],
    "coaPdf": "docs/coa/coa-whey-protein-80.pdf",
    "regularPrice": 149,
    "discountBadge": "-12% WEB",
    "highlightBadge": "💪 80% PROTEÍNA REAL",
    "dosage": {
      "recommendedGrams": 30,
      "unit": "g",
      "frequencyText": "1 a 2 veces al día",
      "scoopEquivalent": "1 scoop colmado o 2 cucharadas soperas (30g)",
      "timingText": "Inmediatamente post-entrenamiento o en el desayuno",
      "minDose": 25,
      "maxDose": 60
    },
    "technicalSpecs": {
      "chemicalForm": "Concentrado de Proteína de Suero de Leche (WPC 80)",
      "casNumber": "91079-57-1",
      "mesh": "Instantáneo (Ultrafiltrado en frío)",
      "grade": "Grado Alimentario USP / FCC",
      "solubility": "Disolución rápida con agitador o shaker",
      "appearance": "Polvo cremoso marfil claro, sabor lácteo neutro"
    },
    "responsibleUse": {
      "instructions": "Batir 30g en 250ml de agua, leche vegetal o batido.",
      "warnings": [
        "Contiene derivados lácteos.",
        "No utilizar como única fuente de nutrición.",
        "Acompañar de un estilo de vida activo y balanceado."
      ],
      "storage": "Cerrar bien el cierre hermético / tapa tras cada uso para evitar humedad."
    },
    "complementaryProductIds": [
      "creatina-monohidratada",
      "glutamina-pura",
      "l-carnitina-base"
    ]
  },
  {
    "id": "glutamina-pura",
    "name": "L-Glutamina Pura Micronizada",
    "shortName": "Glutamina 100% Pura",
    "category": "fuerza-deporte",
    "categoryName": "Fuerza y Rendimiento Deportivo",
    "badge": "Salud Intestinal & Músculo",
    "rating": 4.8,
    "reviewsCount": 76,
    "image": "img/products/glutamina-pura-pote-1kg.jpg",
    "hasVariants": true,
    "price": 68.6,
    "unit": "1KG",
    "origin": "Materia Prima Americana Grado Fermentación Vegetal",
    "coaCertified": true,
    "coaPurity": "99.8% Grado USP",
    "description": "L-Glutamina pura de origen vegetal por fermentación natural. El aminoácido más abundante en el músculo y el combustible primordial de los enterocitos (células del intestino) y el sistema inmune.",
    "benefits": [
      "Evita la pérdida y degradación de masa muscular (anticatabólico).",
      "Mejora la permeabilidad y salud intestinal (alivia digestiones pesadas y colon irritable).",
      "Refuerza las defensas del cuerpo ante entrenamientos de alto volumen o estrés físico."
    ],
    "howToUse": "Tomar 5g a 10g diarios. Se sugiere 5g antes de dormir para regeneración nocturna y 5g post-entrenamiento o en ayunas para soporte digestivo.",
    "composition": "100% L-Glutamina pura en polvo sin aditivos.",
    "faqs": [
      {
        "q": "¿La glutamina ayuda a la gastritis y permeabilidad intestinal?",
        "a": "Sí. La glutamina es el nutriente preferido por la mucosa intestinal para regenerar las uniones estrechas celulares, aliviando síntomas de acidez, hinchazón y síndrome de intestino permeable."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 68.6,
        "weight": "1 kg",
        "format": "Bolsa de Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-GLU-BOL-1K",
        "image": "img/products/glutamina-pura-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 80.85,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-GLU-POT-1K",
        "image": "img/products/glutamina-pura-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "caja-25kg",
        "name": "Caja Industrial 25 kg (Mayorista / Granel)",
        "price": 1450,
        "weight": "25 kg",
        "format": "Caja Corrugada Industrial con Doble Barrera Hermética",
        "packagingType": "industrial-caja",
        "sku": "BIO-GLU-IND-25K",
        "image": "img/products/industrial/glutamina-pura-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "dosage": {
      "recommendedGrams": 5,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1 cucharadita dosificadora (5g)",
      "timingText": "Antes de dormir o inmediatamente después de entrenar",
      "minDose": 5,
      "maxDose": 15
    },
    "technicalSpecs": {
      "chemicalForm": "L-Glutamina Fermentada Pura",
      "casNumber": "56-85-9",
      "mesh": "200 Mesh",
      "grade": "Grado Farmacéutico USP",
      "solubility": "Excelente dispersión en agua templada o fría",
      "appearance": "Polvo cristalino blanco, inodoro"
    },
    "responsibleUse": {
      "instructions": "Mezclar 5g en 200ml de agua en ayunas o post-entreno.",
      "warnings": [
        "No combinar con bebidas hirviendo.",
        "Consultar con especialista si padece problemas hepáticos."
      ],
      "storage": "Guardar en sitio fresco y seco protegido de la luz."
    },
    "complementaryProductIds": [
      "creatina-monohidratada",
      "proteina-suero-leche-80",
      "colageno-hidrolizado"
    ]
  },
  {
    "id": "arginina-pura",
    "name": "L-Arginina Pura Grado USP",
    "shortName": "L-Arginina Pura",
    "category": "fuerza-deporte",
    "categoryName": "Fuerza y Rendimiento Deportivo",
    "badge": "Óxido Nítrico & Circulación",
    "rating": 4.7,
    "reviewsCount": 64,
    "image": "img/products/arginina-pura-pote-1kg.jpg",
    "hasVariants": true,
    "price": 57.4,
    "unit": "1KG",
    "origin": "Materia Prima Americana Grado Farmacéutico",
    "coaCertified": true,
    "coaPurity": "99.5% Purity",
    "description": "Precursor natural directo del óxido nítrico (NO). Dilata los vasos sanguíneos, optimiza la llegada de nutrientes y oxígeno al tejido muscular y apoya la salud cardiovascular.",
    "benefits": [
      "Mejora notablemente la circulación sanguínea y el bombeo muscular.",
      "Aumenta la resistencia física y reduce la fatiga durante sesiones exigentes.",
      "Favorece la oxigenación celular y la eliminación de desechos metabólicos."
    ],
    "howToUse": "Tomar 3g a 5g unos 30-45 minutos antes del entrenamiento con agua o bebida cítrica rica en vitamina C.",
    "composition": "100% L-Arginina Base Grado USP puro sin saborizantes.",
    "faqs": [
      {
        "q": "¿Qué beneficios aporta la arginina a la vascularización?",
        "a": "Al convertirse en óxido nítrico en el endotelio, relaja las paredes arteriales, disminuye la presión y permite mayor flujo sanguíneo, traduciéndose en mayor congestión muscular y mejor oxigenación."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 57.4,
        "weight": "1 kg",
        "format": "Bolsa Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-ARG-BOL-1K",
        "image": "img/products/arginina-pura-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 67.65,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-ARG-POT-1K",
        "image": "img/products/arginina-pura-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "tambor-25kg",
        "name": "Tambor Industrial 25 kg (Mayorista / Granel)",
        "price": 1220,
        "weight": "25 kg",
        "format": "Tambor de Fibra Kraft con Aro Metálico",
        "packagingType": "industrial-tambor",
        "sku": "BIO-ARG-IND-25K",
        "image": "img/products/industrial/arginina-pura-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "dosage": {
      "recommendedGrams": 3,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1/2 cucharadita dosificadora (3g)",
      "timingText": "30 a 45 minutos antes de la sesión de entrenamiento",
      "minDose": 2,
      "maxDose": 6
    },
    "technicalSpecs": {
      "chemicalForm": "L-Arginina Base Pura",
      "casNumber": "74-79-3",
      "mesh": "100-120 Mesh",
      "grade": "Grado Farmacéutico USP",
      "solubility": "Soluble en agua (pH ligeramente alcalino)",
      "appearance": "Polvo blanco cristalino"
    },
    "responsibleUse": {
      "instructions": "Disolver 3g en agua con unas gotas de limón para optimizar palatabilidad.",
      "warnings": [
        "Personas con hipotensión arterial deben consultar a su médico.",
        "No superar la dosis sugerida."
      ],
      "storage": "Conservar protegido de la humedad ambiental."
    },
    "complementaryProductIds": [
      "creatina-monohidratada",
      "l-carnitina-base",
      "ascorbato-de-sodio"
    ]
  },
  {
    "id": "proteina-soya-vegetal",
    "name": "Aislado de Proteína de Soya 90% No-GMO",
    "shortName": "Proteína de Soya 100% Vegetal",
    "category": "fuerza-deporte",
    "categoryName": "Fuerza y Rendimiento Deportivo",
    "badge": "100% Vegano",
    "rating": 4.7,
    "reviewsCount": 89,
    "image": "img/products/proteina-soya-vegetal-pote-1kg.jpg",
    "hasVariants": true,
    "price": 35,
    "unit": "1KG",
    "origin": "Materia Prima Americana No-GMO",
    "coaCertified": true,
    "coaPurity": "90% Proteína Vegetal Aislada",
    "description": "Proteína vegetal pura extraída de soya no transgénica. Contiene todos los 9 aminoácidos esenciales, con altísimo contenido de glutamina y arginina natural. Textura suave ideal para batidos y repostería fitness.",
    "benefits": [
      "Proteína 100% vegetal de alto valor biológico y digestión limpia.",
      "Ayuda a equilibrar el perfil lipídico y reducir el colesterol LDL.",
      "Favorece el tono muscular y la saciedad prolongada sin grasas añadidas."
    ],
    "howToUse": "Mezclar 30g en 300ml de agua, bebida vegetal, licuados de frutas o bowls de avena.",
    "composition": "Aislado de proteína de soya 90% no transgénica sin aditivos.",
    "faqs": [
      {
        "q": "¿La proteína de soya es apta para personas intolerantes a la lactosa?",
        "a": "Absolutamente, es 100% libre de lácteos, libre de lactosa y 100% vegetal, haciéndola muy suave para el estómago."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 35,
        "weight": "1 kg",
        "format": "Bolsa Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-SOY-BOL-1K",
        "image": "img/products/proteina-soya-vegetal-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 41.25,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-SOY-POT-1K",
        "image": "img/products/proteina-soya-vegetal-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "saco-25kg",
        "name": "Saco Industrial 25 kg (Mayorista / Granel)",
        "price": 900,
        "weight": "25 kg",
        "format": "Saco Kraft Multicapa de Alta Resistencia",
        "packagingType": "industrial-saco",
        "sku": "BIO-SOY-IND-25K",
        "image": "img/products/industrial/proteina-soya-vegetal-20kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "coaPdf": "docs/coa/coa-proteina-soya.pdf",
    "regularPrice": 42,
    "discountBadge": "-17% WEB",
    "highlightBadge": "🌱 90% AISLADO VEGANO",
    "dosage": {
      "recommendedGrams": 30,
      "unit": "g",
      "frequencyText": "1 a 2 tomas diarias",
      "scoopEquivalent": "2 cucharadas soperas colmadas (30g)",
      "timingText": "Post-entreno, desayunos o meriendas proteicas",
      "minDose": 20,
      "maxDose": 50
    },
    "technicalSpecs": {
      "chemicalForm": "Aislado de Proteína de Soya 90% (SPI 90)",
      "casNumber": "9010-10-0",
      "mesh": "100 Mesh",
      "grade": "Grado Alimentario USP / FCC",
      "solubility": "Dispersable en licuadora o shaker con líquido frío",
      "appearance": "Polvo fino color beige natural, 100% vegetal"
    },
    "responsibleUse": {
      "instructions": "Licuar o batir enérgicamente con 300ml de agua o bebida vegetal.",
      "warnings": [
        "Contiene soya.",
        "Apto para dietas veganas y vegetarianas."
      ],
      "storage": "Conservar en ambiente seco y fresco."
    },
    "complementaryProductIds": [
      "creatina-monohidratada",
      "espirulina-pura",
      "ascorbato-de-sodio"
    ]
  },
  {
    "id": "colageno-hidrolizado",
    "name": "Péptidos Bioactivos de Colágeno Hidrolizado Puro (Tipo I & III)",
    "shortName": "Péptidos Bioactivos de Colágeno",
    "category": "salud-articular",
    "categoryName": "Salud Articular, Belleza y Vitalidad",
    "badge": "Top Ventas Articular",
    "rating": 4.9,
    "reviewsCount": 165,
    "image": "img/products/colageno-hidrolizado-bolsa-1kg.jpg",
    "hasVariants": true,
    "price": 56,
    "unit": "1KG",
    "origin": "Materia Prima Americana (Bovino Pastoreo)",
    "coaCertified": true,
    "coaPurity": "Péptidos bioactivos de bajo peso molecular (<3000 Da)",
    "description": "Péptidos de colágeno bioactivos hidrolizados enzimáticamente. Al tener un peso molecular ultrabajo, se absorbe en más del 90% en el tracto digestivo estimulando la producción natural de colágeno en piel, cartílagos y ligamentos.",
    "benefits": [
      "Rejuvenece la elasticidad de la piel, hidrata y fortalece la hebra capilar.",
      "Fortalece uñas quebradizas y previene su debilitamiento.",
      "Protege y regenera cartílagos, aliviando el desgaste articular por edad o impacto deportivo."
    ],
    "howToUse": "Disolver 10g a 15g (1 cucharada sopera) en café, té, zumos cítricos o agua en las mañanas. Al ser hidrolizado, se disuelve al instante sin alterar el sabor.",
    "composition": "100% Péptidos de colágeno hidrolizado bovino tipo I y III. Sin azúcar, sin maltodextrina.",
    "faqs": [
      {
        "q": "¿A partir de qué edad se recomienda tomar colágeno?",
        "a": "A partir de los 25 a 30 años la producción endógena de colágeno decae a un ritmo de 1.5% anual. La suplementación diaria mantiene la turgencia cutánea y la salud de las articulaciones."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 56,
        "weight": "1 kg",
        "format": "Bolsa de Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-COL-BOL-1K",
        "image": "img/products/colageno-hidrolizado-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 66,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-COL-POT-1K",
        "image": "img/products/colageno-hidrolizado-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "saco-20kg",
        "name": "Saco Industrial 20 kg (Mayorista / Granel)",
        "price": 1050,
        "weight": "20 kg",
        "format": "Saco Industrial Kraft Multicapa Hermético",
        "packagingType": "industrial-saco",
        "sku": "BIO-COL-IND-20K",
        "image": "img/products/industrial/colageno-hidrolizado-20kg.jpg",
        "isBulk": true,
        "weightGrams": 20000
      }
    ],
    "coaPdf": "docs/coa/coa-colageno-hidrolizado.pdf",
    "regularPrice": 68,
    "discountBadge": "-18% WEB",
    "highlightBadge": "✨ PÉPTIDOS BIOACTIVOS",
    "dosage": {
      "recommendedGrams": 10,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1 cucharada sopera colmada (10g)",
      "timingText": "En ayunas por la mañana o antes de dormir",
      "minDose": 5,
      "maxDose": 15
    },
    "technicalSpecs": {
      "chemicalForm": "Péptidos Bioactivos de Colágeno Bovino Tipo I y III",
      "casNumber": "9007-34-5",
      "mesh": "Instantáneo aglomerado (< 3000 Daltons)",
      "grade": "Grado Farmacéutico y Nutracéutico USP",
      "solubility": "Disolución instantánea y transparente en frío o caliente",
      "appearance": "Polvo blanco granular fino, sin olor residual"
    },
    "responsibleUse": {
      "instructions": "Mezclar 10g en café, zumo, té o agua. Para máxima absorción, combinar con Vitamina C.",
      "warnings": [
        "Uso continuado mínimo de 60 a 90 días para comprobar beneficios articulares y en la piel."
      ],
      "storage": "Mantener en recipiente seco, cerrado contra la humedad."
    },
    "complementaryProductIds": [
      "ascorbato-de-sodio",
      "glucosamina-sulfato",
      "citrato-de-magnesio"
    ]
  },
  {
    "id": "glucosamina-sulfato",
    "name": "Sulfato de Glucosamina Grado Farmacéutico",
    "shortName": "Sulfato de Glucosamina",
    "category": "salud-articular",
    "categoryName": "Salud Articular, Belleza y Vitalidad",
    "badge": "Articulaciones & Cartílago",
    "rating": 4.8,
    "reviewsCount": 94,
    "image": "img/products/glucosamina-sulfato-pote-1kg.jpg",
    "hasVariants": true,
    "price": 60.2,
    "unit": "1KG",
    "origin": "Materia Prima Americana Certificada",
    "coaCertified": true,
    "coaPurity": "99.2% Pureza HPLC",
    "description": "Componente esencial de los glucosaminoglicanos y proteoglicanos del cartílago articular y líquido sinovial. Ideal para deportistas con alto impacto articular y personas con osteoartritis o rigidez matutina.",
    "benefits": [
      "Protege y estimula la síntesis de cartílago articular nuevo.",
      "Reduce significativamente la inflamación y el dolor articular crónico.",
      "Mejora la flexibilidad, rango de movimiento y lubricación de rodillas y hombros."
    ],
    "howToUse": "Tomar 1.5g diarios (media cucharadita) disuelta en agua junto con el almuerzo o desayuno.",
    "composition": "Sulfato de glucosamina puro grado USP.",
    "faqs": [
      {
        "q": "¿Se puede combinar la glucosamina con el colágeno?",
        "a": "Sí, es la sinergia ideal. El colágeno aporta la estructura proteica del tejido conectivo y la glucosamina promueve la retención del líquido sinovial lubricante."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 60.2,
        "weight": "1 kg",
        "format": "Bolsa de Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-GLS-BOL-1K",
        "image": "img/products/glucosamina-sulfato-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 70.95,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-GLS-POT-1K",
        "image": "img/products/glucosamina-sulfato-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "caja-25kg",
        "name": "Caja Industrial 25 kg (Mayorista / Granel)",
        "price": 1280,
        "weight": "25 kg",
        "format": "Caja Corrugada Industrial con Doble Barrera Hermética",
        "packagingType": "industrial-caja",
        "sku": "BIO-GLS-IND-25K",
        "image": "img/products/industrial/glucosamina-sulfato-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "coaPdf": "docs/coa/coa-glucosamina-sulfato.pdf",
    "regularPrice": 72,
    "discountBadge": "-16% WEB",
    "highlightBadge": "🦴 SALUD ARTICULAR",
    "dosage": {
      "recommendedGrams": 1.5,
      "unit": "g",
      "frequencyText": "1 vez al día con alimento",
      "scoopEquivalent": "1/2 cucharadita dosificadora (1.5g)",
      "timingText": "Junto al almuerzo o comida principal",
      "minDose": 1,
      "maxDose": 2
    },
    "technicalSpecs": {
      "chemicalForm": "Sulfato de D-Glucosamina 2KCl",
      "casNumber": "38899-05-7",
      "mesh": "80-100 Mesh",
      "grade": "Grado Farmacéutico USP",
      "solubility": "Completamente soluble en agua",
      "appearance": "Cristales blancos limpios y homogéneos"
    },
    "responsibleUse": {
      "instructions": "Tomar disuelto en agua durante las comidas.",
      "warnings": [
        "Personas con alergia a mariscos y crustáceos deben consultar a su médico.",
        "Monitorear en pacientes diabéticos."
      ],
      "storage": "Conservar cerrado en ambiente templado y seco."
    },
    "complementaryProductIds": [
      "sulfato-de-condroitina",
      "colageno-hidrolizado",
      "ascorbato-de-sodio"
    ]
  },
  {
    "id": "ascorbato-de-sodio",
    "name": "Ascorbato de Sodio Grado Farmacéutico (Vitamina C No Ácida)",
    "shortName": "Ascorbato de Sodio (Vitamina C)",
    "category": "salud-articular",
    "categoryName": "Salud Articular, Belleza y Vitalidad",
    "badge": "Vitamina C Alcalina",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "img/products/ascorbato-de-sodio-pote-1kg.jpg",
    "hasVariants": true,
    "price": 98,
    "unit": "1KG",
    "origin": "Materia Prima Americana Grado USP / FCC",
    "coaCertified": true,
    "coaPurity": "99.8% Grado Farmacéutico",
    "description": "Forma amortiguada (tamponada) y no ácida de la Vitamina C. Con un pH neutro entre 7.0 y 8.0, permite megadosis de antioxidantes sin irritar el estómago, acidez gástrica ni reflujo.",
    "benefits": [
      "Refuerza potentemente el sistema inmunitario contra virus y patógenos.",
      "Cofactor imprescindible para la síntesis de colágeno endógeno en piel y tendones.",
      "Vitamina C 100% amigable con estómagos sensibles, gastritis o reflujo."
    ],
    "howToUse": "Tomar 1g a 2g al día (un tercio a media cucharadita cafetera) diluido en medio vaso de agua.",
    "composition": "100% Ascorbato de Sodio puro grado USP. Sin excipientes.",
    "faqs": [
      {
        "q": "¿Cuál es la diferencia entre Ácido Ascórbico y Ascorbato de Sodio?",
        "a": "El ácido ascórbico tiene un pH muy ácido (2.5) que puede provocar ardor en estómagos sensibles. El ascorbato de sodio tiene pH neutro (7.4), se asimila con mayor suavidad y permite mayor tolerancia digestiva."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 98,
        "weight": "1 kg",
        "format": "Bolsa de Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-ASC-BOL-1K",
        "image": "img/products/ascorbato-de-sodio-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 115.5,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-ASC-POT-1K",
        "image": "img/products/ascorbato-de-sodio-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "caja-25kg",
        "name": "Caja Industrial 25 kg (Mayorista / Granel)",
        "price": 2050,
        "weight": "25 kg",
        "format": "Caja Corrugada Industrial con Doble Barrera Hermética",
        "packagingType": "industrial-caja",
        "sku": "BIO-ASC-IND-25K",
        "image": "img/products/industrial/ascorbato-de-sodio-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "regularPrice": 115,
    "discountBadge": "-15% WEB",
    "highlightBadge": "🍊 VITAMINA C ALCALINA",
    "dosage": {
      "recommendedGrams": 1,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1/4 a 1/2 cucharadita (1000mg)",
      "timingText": "Por la mañana con el desayuno o junto al colágeno",
      "minDose": 0.5,
      "maxDose": 2
    },
    "technicalSpecs": {
      "chemicalForm": "L-Ascorbato de Sodio (Vitamina C no ácida)",
      "casNumber": "134-03-2",
      "mesh": "100 Mesh cristalino",
      "grade": "Grado Farmacéutico USP / FCC",
      "solubility": "Muy soluble en agua (pH neutro 7.0 - 7.5)",
      "appearance": "Polvo cristalino blanco a ligeramente amarillento"
    },
    "responsibleUse": {
      "instructions": "Disolver 1g en agua o zumo. No produce acidez estomacal.",
      "warnings": [
        "Aporta aproximadamente 111mg de sodio por cada gramo."
      ],
      "storage": "Proteger de la luz y el aire para prevenir oxidación."
    },
    "complementaryProductIds": [
      "colageno-hidrolizado",
      "espirulina-pura",
      "citrato-de-magnesio"
    ]
  },
  {
    "id": "espirulina-pura",
    "name": "Espirulina Azul-Verde Orgánica en Polvo",
    "shortName": "Espirulina Pura 100%",
    "category": "salud-articular",
    "categoryName": "Salud Articular, Belleza y Vitalidad",
    "badge": "Superfood Nutritivo",
    "rating": 4.8,
    "reviewsCount": 88,
    "image": "img/products/espirulina-pura-bolsa-1kg.jpg",
    "hasVariants": true,
    "price": 91,
    "unit": "1KG",
    "origin": "Cultivo Certificado Grado Americano",
    "coaCertified": true,
    "coaPurity": "100% Arthrospira platensis seca y micronizada",
    "description": "Microalga catalogada como uno de los alimentos más densos en nutrientes del planeta por la OMS y la NASA. Fuente excepcional de ficocianina, hierro de fácil asimilación, clorofila y aminoácidos.",
    "benefits": [
      "Súper concentrado de nutrientes, hierro y proteínas naturales.",
      "Potente escudo antioxidante y desintoxicante de metales pesados.",
      "Refuerza la energía vital y el sistema inmune combatiendo la anemia y fatiga."
    ],
    "howToUse": "Tomar 3g a 5g al día (1 cucharadita) añadida a batidos verdes, jugos de frutas o bowls matutinos.",
    "composition": "100% Espirulina pura deshidratada en frío sin conservantes.",
    "faqs": [
      {
        "q": "¿Ayuda la espirulina a subir la hemoglobina?",
        "a": "Sí, es una de las fuentes naturales más biodisponibles de hierro quelado vegetal y ficocianina, que estimulan la producción de glóbulos rojos."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 91,
        "weight": "1 kg",
        "format": "Bolsa Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-ESP-BOL-1K",
        "image": "img/products/espirulina-pura-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 107.25,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-ESP-POT-1K",
        "image": "img/products/espirulina-pura-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "tambor-25kg",
        "name": "Tambor Industrial 25 kg (Mayorista / Granel)",
        "price": 2000,
        "weight": "25 kg",
        "format": "Tambor de Fibra Kraft con Aro Metálico",
        "packagingType": "industrial-tambor",
        "sku": "BIO-ESP-IND-25K",
        "image": "img/products/industrial/espirulina-pura-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "coaPdf": "docs/coa/coa-espirulina-pura.pdf",
    "regularPrice": 105,
    "discountBadge": "-13% WEB",
    "highlightBadge": "🌿 SUPERALIMENTO 100%",
    "dosage": {
      "recommendedGrams": 3,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1 cucharadita de té (3g)",
      "timingText": "Por la mañana en batidos verdes o zumos cítricos",
      "minDose": 2,
      "maxDose": 6
    },
    "technicalSpecs": {
      "chemicalForm": "Arthrospira platensis 100% Pura",
      "casNumber": "223749-75-5",
      "mesh": "Micro-fino 120 Mesh",
      "grade": "Grado Nutracéutico / Alimentario",
      "solubility": "Dispersión uniforme en líquidos y batidos",
      "appearance": "Polvo verde oscuro profundo con aroma vegetal marino suave"
    },
    "responsibleUse": {
      "instructions": "Incorporar a licuados, bowls o agua de piña.",
      "warnings": [
        "No apto para personas con fenilcetonuria.",
        "Consultar en caso de patologías tiroideas."
      ],
      "storage": "Mantener herméticamente sellado en lugar oscuro."
    },
    "complementaryProductIds": [
      "ascorbato-de-sodio",
      "te-verde-extracto",
      "colageno-hidrolizado"
    ]
  },
  {
    "id": "te-verde-extracto",
    "name": "Té Verde Puro en Polvo Grado EGCG",
    "shortName": "Té Verde Concentrado",
    "category": "salud-articular",
    "categoryName": "Salud Articular, Belleza y Vitalidad",
    "badge": "Metabolismo & Longevidad",
    "rating": 4.8,
    "reviewsCount": 57,
    "image": "img/products/te-verde-extracto-bolsa-1kg.jpg",
    "hasVariants": true,
    "price": 194.6,
    "unit": "1KG",
    "origin": "Materia Prima Americana Estandarizada",
    "coaCertified": true,
    "coaPurity": "Alto contenido de Polifenoles y Epigalocatequina (EGCG)",
    "description": "Extracto concentrado de Camellia sinensis con altísima concentración de catequinas y antioxidantes celulares. Estimula la termogénesis natural y protege las células contra el daño oxidativo y el envejecimiento prematuro.",
    "benefits": [
      "Acelera el gasto metabólico favoreciendo la oxidación de grasas.",
      "Extraordinario poder antioxidante para salud cardiovascular y celular.",
      "Aporta energía limpia y concentración mental sostenida sin nerviosismo."
    ],
    "howToUse": "Disolver 1g a 2g en agua caliente o fría (té helado) preferentemente por la mañana o antes de la actividad física.",
    "composition": "100% Extracto de hojas de Camellia sinensis estandarizado en catequinas.",
    "faqs": [
      {
        "q": "¿Cuándo es mejor tomar el té verde para acelerar el metabolismo?",
        "a": "Por las mañanas en ayunas o 30 minutos antes del ejercicio físico para optimizar la utilización de ácidos grasos como fuente de energía."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 194.6,
        "weight": "1 kg",
        "format": "Bolsa Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-TEV-BOL-1K",
        "image": "img/products/te-verde-extracto-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 229.35,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-TEV-POT-1K",
        "image": "img/products/te-verde-extracto-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "tambor-25kg",
        "name": "Tambor Industrial 25 kg (Mayorista / Granel)",
        "price": 4100,
        "weight": "25 kg",
        "format": "Tambor de Fibra Kraft con Aro Metálico",
        "packagingType": "industrial-tambor",
        "sku": "BIO-TEV-IND-25K",
        "image": "img/products/industrial/te-verde-extracto-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "dosage": {
      "recommendedGrams": 1,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1/4 cucharadita dosificadora (1g)",
      "timingText": "Por la mañana o 30 minutos antes de actividad física",
      "minDose": 0.5,
      "maxDose": 1.5
    },
    "technicalSpecs": {
      "chemicalForm": "Extracto de Camellia sinensis estandarizado (>50% Polifenoles, >30% EGCG)",
      "casNumber": "84650-60-2",
      "mesh": "80 Mesh",
      "grade": "Grado Alimentario / Nutracéutico",
      "solubility": "Soluble en agua templada o caliente",
      "appearance": "Polvo fino marrón verdoso característico"
    },
    "responsibleUse": {
      "instructions": "Disolver en agua tibia o mezclar en bebidas pre-entreno.",
      "warnings": [
        "Contiene cafeína / teína natural.",
        "Evitar tomar de noche."
      ],
      "storage": "Conservar en lugar fresco protegido de la luz."
    },
    "complementaryProductIds": [
      "l-carnitina-base",
      "espirulina-pura",
      "creatina-monohidratada"
    ]
  },
  {
    "id": "citrato-de-magnesio",
    "name": "Citrato de Magnesio Puro Grado USP (Alta Biodisponibilidad)",
    "shortName": "Citrato de Magnesio",
    "category": "estres-descanso",
    "categoryName": "Manejo del Estrés, Descanso y Minerales",
    "badge": "Estrella Digestiva & Músculo",
    "rating": 4.9,
    "reviewsCount": 220,
    "image": "img/products/citrato-de-magnesio-pote-1kg.jpg",
    "hasVariants": true,
    "price": 22.4,
    "unit": "1KG",
    "origin": "Materia Prima Americana Grado USP",
    "coaCertified": true,
    "coaPurity": "15%-16% Magnesio elemental biodisponible",
    "description": "El magnesio más popular y efectivo para regular el tránsito intestinal, relajar los músculos y combatir calambres nocturnos. Su unión a ácido cítrico garantiza una excelente asimilación en el organismo.",
    "benefits": [
      "Mejora notablemente el tránsito digestivo combatiendo el estreñimiento de forma suave.",
      "Alivia eficazmente calambres musculares, contracturas y fatiga física.",
      "Favorece la relajación muscular y ayuda a conciliar un sueño reparador."
    ],
    "howToUse": "Tomar 2g a 3g (media cucharadita dosificadora) disueltos en un vaso de agua tibia o al tiempo, preferentemente por la noche antes de dormir.",
    "composition": "100% Citrato de Magnesio anhidro grado USP. Sin saborizantes ni rellenos.",
    "faqs": [
      {
        "q": "¿Qué diferencia hay entre el Citrato y el Glicinato de Magnesio?",
        "a": "El Citrato de Magnesio tiene una acción relajante muscular y activa el tránsito intestinal (ideal si tienes estreñimiento o calambres). El Glicinato de Magnesio está unido al aminoácido glicina, no tiene efecto laxante y cruza la barrera hematoencefálica, siendo el mejor para insomnio severo, estrés y ansiedad."
      },
      {
        "q": "¿Por qué Bionativa Lab ofrece 1kg de Citrato de Magnesio a este precio?",
        "a": "Al importar directamente materia prima americana certificada a granel y eliminar intermediarios, ofrecemos máxima pureza grado farmacéutico a un costo accesible para toda la familia en Perú."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 22.4,
        "weight": "1 kg",
        "format": "Bolsa de Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-CMG-BOL-1K",
        "image": "img/products/citrato-de-magnesio-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 26.4,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-CMG-POT-1K",
        "image": "img/products/citrato-de-magnesio-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "caja-25kg",
        "name": "Caja Industrial 25 kg (Mayorista / Granel)",
        "price": 470,
        "weight": "25 kg",
        "format": "Caja Corrugada Industrial con Doble Barrera Hermética",
        "packagingType": "industrial-caja",
        "sku": "BIO-CMG-IND-25K",
        "image": "img/products/industrial/citrato-de-magnesio-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "coaPdf": "docs/coa/coa-citrato-magnesio.pdf",
    "regularPrice": 28,
    "discountBadge": "-20% WEB",
    "highlightBadge": "🔥 MÁS VENDIDO",
    "dosage": {
      "recommendedGrams": 2.5,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1/2 cucharadita dosificadora (2.5g = ~400mg Magnesio elemental)",
      "timingText": "Por la noche 45 a 60 minutos antes de dormir",
      "minDose": 1.5,
      "maxDose": 3.5
    },
    "technicalSpecs": {
      "chemicalForm": "Citrato de Magnesio Tribásico Anhidro",
      "casNumber": "3344-18-2",
      "mesh": "80-100 Mesh",
      "grade": "Grado Farmacéutico USP / FCC",
      "solubility": "Excelente solubilidad en agua a temperatura ambiente",
      "appearance": "Polvo blanco fino de sabor cítrico suave"
    },
    "responsibleUse": {
      "instructions": "Disolver 2.5g en un vaso con 200ml de agua tibia o fría.",
      "warnings": [
        "Ajustar a 1.5g si se presentan evacuaciones blandas.",
        "Consultar con médico en caso de insuficiencia renal."
      ],
      "storage": "Cerrar inmediatamente para evitar que absorba humedad ambiental."
    },
    "complementaryProductIds": [
      "citrato-de-potasio",
      "ashwagandha-pura",
      "colageno-hidrolizado"
    ]
  },
  {
    "id": "glicinato-de-magnesio",
    "name": "Bisglicinato / Glicinato de Magnesio Quelado de Máxima Asimilación",
    "shortName": "Glicinato de Magnesio",
    "category": "estres-descanso",
    "categoryName": "Manejo del Estrés, Descanso y Minerales",
    "badge": "Sueño Profundo & Cero Laxante",
    "rating": 5,
    "reviewsCount": 198,
    "image": "img/products/glicinato-de-magnesio-pote-1kg.jpg",
    "hasVariants": true,
    "price": 49,
    "unit": "1KG",
    "origin": "Materia Prima Americana Grado Quelado Puro",
    "coaCertified": true,
    "coaPurity": "Bisglicinato 100% quelado grado terapéutico",
    "description": "La forma más avanzada y delicada de magnesio. Al estar unido a dos moléculas de glicina, no causa efecto laxante ni malestar gástrico. Cruza con facilidad hacia el sistema nervioso central promoviendo relajación cerebral profunda y sueño REM.",
    "benefits": [
      "Máxima biodisponibilidad y absorción celular sin provocar diarrea o cólicos.",
      "Relaja profundamente el sistema nervioso central reduciendo el cortisol.",
      "Combate el insomnio, los despertares nocturnos y la fatiga mental matutina."
    ],
    "howToUse": "Tomar 2g a 3g diluidos en agua 45 a 60 minutos antes de acostarse a dormir.",
    "composition": "100% Bisglicinato de Magnesio quelado puro.",
    "faqs": [
      {
        "q": "¿Por qué el Glicinato es el mejor magnesio para personas con estómago delicado?",
        "a": "A diferencia de otras sales minerales que absorben agua en el colon, el enlace de quelación protege al magnesio para que se absorba por las vías de los dipéptidos, eliminando cualquier molestia digestiva."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 49,
        "weight": "1 kg",
        "format": "Bolsa de Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-GMG-BOL-1K",
        "image": "img/products/glicinato-de-magnesio-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 57.75,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-GMG-POT-1K",
        "image": "img/products/glicinato-de-magnesio-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "caja-25kg",
        "name": "Caja Industrial 25 kg (Mayorista / Granel)",
        "price": 1190,
        "weight": "25 kg",
        "format": "Caja Corrugada Industrial con Doble Barrera Hermética",
        "packagingType": "industrial-caja",
        "sku": "BIO-GMG-IND-25K",
        "image": "img/products/industrial/glicinato-de-magnesio-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "coaPdf": "docs/coa/coa-bisglicinato-magnesio.pdf",
    "regularPrice": 58,
    "discountBadge": "-15% WEB",
    "highlightBadge": "🌙 NOBLE & QUELADO",
    "dosage": {
      "recommendedGrams": 2.5,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1/2 cucharadita dosificadora (2.5g)",
      "timingText": "Por la noche 30 a 60 minutos antes de acostarse",
      "minDose": 1.5,
      "maxDose": 3.5
    },
    "technicalSpecs": {
      "chemicalForm": "Bisglicinato de Magnesio Quelado 100% Puro",
      "casNumber": "14783-68-7",
      "mesh": "80-100 Mesh",
      "grade": "Grado Farmacéutico USP",
      "solubility": "Soluble en agua, alta tolerancia gastrointestinal",
      "appearance": "Polvo blanco cristalino sin efecto laxante"
    },
    "responsibleUse": {
      "instructions": "Tomar disuelto en agua antes de acostarse.",
      "warnings": [
        "Ideal para personas con sensibilidad digestiva.",
        "No exceder la dosis diaria recomendada."
      ],
      "storage": "Conservar en lugar seco a menos de 25°C."
    },
    "complementaryProductIds": [
      "ashwagandha-pura",
      "citrato-de-potasio",
      "creatina-monohidratada"
    ]
  },
  {
    "id": "cloruro-de-magnesio",
    "name": "Cloruro de Magnesio Hexahidratado Grado USP Cristalino",
    "shortName": "Cloruro de Magnesio",
    "category": "estres-descanso",
    "categoryName": "Manejo del Estrés, Descanso y Minerales",
    "badge": "Huesos & Purificación",
    "rating": 4.8,
    "reviewsCount": 140,
    "image": "img/products/cloruro-de-magnesio-pote-1kg.jpg",
    "hasVariants": true,
    "price": 20.3,
    "unit": "1KG",
    "origin": "Materia Prima Americana Grado Farmacéutico",
    "coaCertified": true,
    "coaPurity": "99.0% - 101.0% Grado USP",
    "description": "La sal clásica de magnesio más tradicional en Perú. Altamente biodisponible y desintoxicante. Aporta iones de cloro y magnesio esenciales para el equilibrio electrolítico, la fijación de calcio en huesos y el alivio articular.",
    "benefits": [
      "Fortalece el sistema óseo y estimula la correcta fijación del calcio.",
      "Ayuda a depurar toxinas de la sangre y activar enzimas metabólicas.",
      "Alivia la fatiga crónica, dolores de articulaciones y rigidez muscular."
    ],
    "howToUse": "Preparación tradicional: Disolver 33g (aprox. 3 cucharadas) en 1 litro de agua hervida fría en jarra de vidrio. Beber 1 copita (50ml) por la mañana o noche.",
    "composition": "100% Cloruro de Magnesio hexahidratado puro grado farmacéutico.",
    "faqs": [
      {
        "q": "¿Cómo se debe guardar el cloruro de magnesio en polvo?",
        "a": "Al ser una sal higroscópica (atrae humedad del ambiente), debe mantenerse en su envase bien sellado en un lugar seco y fresco, o preparar la solución líquida en refrigeración."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 20.3,
        "weight": "1 kg",
        "format": "Bolsa de Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-CLMG-BOL-1K",
        "image": "img/products/cloruro-de-magnesio-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 23.93,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-CLMG-POT-1K",
        "image": "img/products/cloruro-de-magnesio-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "caja-25kg",
        "name": "Caja Industrial 25 kg (Mayorista / Granel)",
        "price": 425,
        "weight": "25 kg",
        "format": "Caja Corrugada Industrial con Doble Barrera Hermética",
        "packagingType": "industrial-caja",
        "sku": "BIO-CLMG-IND-25K",
        "image": "img/products/industrial/cloruro-de-magnesio-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "regularPrice": 25,
    "discountBadge": "-19% WEB",
    "highlightBadge": "⚡ SAL MINERAL PURA",
    "dosage": {
      "recommendedGrams": 2,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1/2 cucharadita rasa (2g) o para salmuera",
      "timingText": "En ayunas o por la tarde disuelto en agua",
      "minDose": 1,
      "maxDose": 3
    },
    "technicalSpecs": {
      "chemicalForm": "Cloruro de Magnesio Hexahidratado",
      "casNumber": "7791-18-6",
      "mesh": "Cristales / Escamas",
      "grade": "Grado Farmacéutico USP / FCC",
      "solubility": "Extremadamente soluble en agua",
      "appearance": "Cristales blancos translúcidos o escamas incoloras"
    },
    "responsibleUse": {
      "instructions": "Disolver 2g en un vaso de agua con unas gotas de limón para atenuar el sabor amargo.",
      "warnings": [
        "Sabor amargo mineral natural.",
        "Contraindicado en caso de diarreas agudas o insuficiencia renal."
      ],
      "storage": "Altamente delicuescente: mantener el envase hermético."
    },
    "complementaryProductIds": [
      "citrato-de-potasio",
      "colageno-hidrolizado",
      "ascorbato-de-sodio"
    ]
  },
  {
    "id": "citrato-de-potasio",
    "name": "Citrato de Potasio Puro Grado USP",
    "shortName": "Citrato de Potasio",
    "category": "estres-descanso",
    "categoryName": "Manejo del Estrés, Descanso y Minerales",
    "badge": "Equilibrio Renal & Presión",
    "rating": 4.9,
    "reviewsCount": 110,
    "image": "img/products/citrato-de-potasio-pote-1kg.jpg",
    "hasVariants": true,
    "price": 21,
    "unit": "1KG",
    "origin": "Materia Prima Americana Grado USP / FCC",
    "coaCertified": true,
    "coaPurity": "99.5% Purity",
    "description": "Sal potásica que alcaliniza la orina y equilibra el exceso de sodio en la dieta moderna. Mineral electrolítico indispensable para la regulación de la tensión arterial y la prevención de la formación de cristales renales.",
    "benefits": [
      "Ayuda a regular los niveles de presión arterial contrarrestando el sodio.",
      "Previene la formación de cálculos renales de oxalato cálcico y ácido úrico.",
      "Mejora la función muscular y la conductividad del sistema nervioso."
    ],
    "howToUse": "Tomar 2g diarios (media cucharadita) disueltos en un vaso abundante de agua junto con una comida principal.",
    "composition": "100% Citrato de Potasio monohidratado puro grado USP.",
    "faqs": [
      {
        "q": "¿Por qué se recomienda combinar Citrato de Potasio con Magnesio?",
        "a": "El potasio y el magnesio trabajan juntos en la bomba sodio-potasio de todas las células del cuerpo. Juntos potencian la hidratación celular, previenen calambres y regulan el ritmo cardíaco."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 21,
        "weight": "1 kg",
        "format": "Bolsa de Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-CPOT-BOL-1K",
        "image": "img/products/citrato-de-potasio-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 24.75,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-CPOT-POT-1K",
        "image": "img/products/citrato-de-potasio-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "caja-25kg",
        "name": "Caja Industrial 25 kg (Mayorista / Granel)",
        "price": 440,
        "weight": "25 kg",
        "format": "Caja Corrugada Industrial con Doble Barrera Hermética",
        "packagingType": "industrial-caja",
        "sku": "BIO-CPOT-IND-25K",
        "image": "img/products/industrial/citrato-de-potasio-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "dosage": {
      "recommendedGrams": 2,
      "unit": "g",
      "frequencyText": "1 vez al día con alimento",
      "scoopEquivalent": "1/2 cucharadita dosificadora (2g = ~760mg Potasio elemental)",
      "timingText": "Durante el almuerzo o cena con abundante líquido",
      "minDose": 1,
      "maxDose": 3
    },
    "technicalSpecs": {
      "chemicalForm": "Citrato de Potasio Monohidratado",
      "casNumber": "6100-05-6",
      "mesh": "Granular fino / 80 Mesh",
      "grade": "Grado Farmacéutico USP / FCC",
      "solubility": "Completamente soluble en agua",
      "appearance": "Polvo cristalino blanco o granular inodoro"
    },
    "responsibleUse": {
      "instructions": "Disolver siempre en un vaso grande de agua (mínimo 250ml) y consumir junto con comidas.",
      "warnings": [
        "Contraindicado en insuficiencia renal severa o hiperpotasemia.",
        "No tomar con el estómago completamente vacío."
      ],
      "storage": "Guardar en envase cerrado en ambiente seco."
    },
    "complementaryProductIds": [
      "citrato-de-magnesio",
      "sal-de-epsom",
      "glicinato-de-magnesio"
    ]
  },
  {
    "id": "sal-de-epsom",
    "name": "Sal de Epsom (Sulfato de Magnesio Grado USP Puro)",
    "shortName": "Sal de Epsom",
    "category": "estres-descanso",
    "categoryName": "Manejo del Estrés, Descanso y Minerales",
    "badge": "Baños Terapéuticos & Detox",
    "rating": 4.9,
    "reviewsCount": 175,
    "image": "img/products/sal-de-epsom-pote-1kg.jpg",
    "hasVariants": true,
    "price": 12.5,
    "unit": "1KG",
    "origin": "Materia Prima Americana Grado USP",
    "coaCertified": true,
    "coaPurity": "99.9% Sulfato de Magnesio Heptahidratado USP",
    "description": "Sulfato de magnesio puro para baños de inmersión relajantes, pediluvios y desintoxicación corporal. El magnesio se absorbe de forma transdérmica relajando los músculos sobrecargados y aliviando el estrés acumulado.",
    "benefits": [
      "Relaja profundamente músculos cansados tras entrenamientos intensos.",
      "Reduce drásticamente el estrés mental y la tensión nerviosa en baños tibios.",
      "Favorece la desintoxicación dérmica y alivia la inflamación en pies hinchados."
    ],
    "howToUse": "Para tina de baño: Añadir 1 a 2 tazas de sal en agua caliente e sumergirse 20 minutos. Para pies cansados: Añadir media taza en un recipiente con agua tibia y reposar los pies por 15 minutos.",
    "composition": "100% Sulfato de Magnesio heptahidratado grado USP libre de fragancias o químicos sintéticos.",
    "faqs": [
      {
        "q": "¿La sal de Epsom se puede usar para baños de pies después de trabajar?",
        "a": "Es el uso más recomendado y reconfortante. En solo 15 minutos relaja la musculatura plantar, reduce la hinchazón y mejora la circulación de retorno."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 12.5,
        "weight": "1 kg",
        "format": "Bolsa de Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-EPS-BOL-1K",
        "image": "img/products/sal-de-epsom-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 14.73,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-EPS-POT-1K",
        "image": "img/products/sal-de-epsom-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "caja-25kg",
        "name": "Caja Industrial 25 kg (Mayorista / Granel)",
        "price": 260,
        "weight": "25 kg",
        "format": "Caja Corrugada Industrial con Doble Barrera Hermética",
        "packagingType": "industrial-caja",
        "sku": "BIO-EPS-IND-25K",
        "image": "img/products/industrial/sal-de-epsom-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "regularPrice": 16,
    "discountBadge": "-22% WEB",
    "highlightBadge": "🛁 PURIFICACIÓN PURA",
    "dosage": {
      "recommendedGrams": 5,
      "unit": "g",
      "frequencyText": "Uso oral esporádico o 100g-250g para baños",
      "scoopEquivalent": "1 cucharadita para consumo oral / 1 taza para tina",
      "timingText": "Tardes o noches en baño de inmersión relajante",
      "minDose": 3,
      "maxDose": 10
    },
    "technicalSpecs": {
      "chemicalForm": "Sulfato de Magnesio Heptahidratado (Sal de Epsom)",
      "casNumber": "10034-99-8",
      "mesh": "Cristalino homogéneo",
      "grade": "Grado Farmacéutico USP",
      "solubility": "Alta solubilidad en agua tibia o caliente",
      "appearance": "Cristales blancos aciculares brillantes"
    },
    "responsibleUse": {
      "instructions": "Disolver en agua caliente para baños de inmersión o pediluvios desinflamantes.",
      "warnings": [
        "En uso oral en dosis elevadas tiene efecto laxante osmótico rápido.",
        "Uso oral únicamente bajo orientación médica."
      ],
      "storage": "Conservar en recipiente sellado para evitar eflorescencia."
    },
    "complementaryProductIds": [
      "citrato-de-magnesio",
      "cloruro-de-magnesio"
    ]
  },
  {
    "id": "ashwagandha-pura",
    "name": "Ashwagandha KSM / Withania Somnifera Pura Estandarizada",
    "shortName": "Ashwagandha Pura",
    "category": "estres-descanso",
    "categoryName": "Manejo del Estrés, Descanso y Minerales",
    "badge": "Adaptógeno Anti-Estrés",
    "rating": 4.9,
    "reviewsCount": 153,
    "image": "img/products/ashwagandha-pura-pote-1kg.jpg",
    "hasVariants": true,
    "price": 124.6,
    "unit": "1KG",
    "origin": "Materia Prima Americana Estandarizada",
    "coaCertified": true,
    "coaPurity": "Alto porcentaje de Whitanólidos bioactivos",
    "description": "El adaptógeno ayurvédico rey para regular el eje hipotálamo-hipófisis-adrenal (HHA). Disminuye los niveles de cortisol circulante, modula la respuesta ante situaciones de tensión, mejora la claridad mental y el sueño profundo.",
    "benefits": [
      "Reduce eficazmente el estrés crónico, la ansiedad y el agobio cotidiano.",
      "Mejora la calidad del sueño profundo sin provocar letargo diurno.",
      "Aumenta la vitalidad, resistencia física y energía sostenida durante el día."
    ],
    "howToUse": "Tomar 3g al día (1 cucharadita) disuelta en leche tibia con canela (fórmula Moon Milk nocturna), agua o batidos.",
    "composition": "100% Extracto de raíz de Withania Somnifera estandarizado. Libre de pesticidas y conservantes.",
    "faqs": [
      {
        "q": "¿En cuánto tiempo se sienten los efectos de la Ashwagandha?",
        "a": "Como adaptógeno natural, sus efectos moduladores del cortisol y relajación se aprecian desde los primeros 7 a 14 días de uso continuo y constante."
      }
    ],
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 124.6,
        "weight": "1 kg",
        "format": "Bolsa Polietileno Sellada (Formato Ahorro)",
        "packagingType": "bolsa",
        "sku": "BIO-ASH-BOL-1K",
        "image": "img/products/ashwagandha-pura-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 146.85,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-ASH-POT-1K",
        "image": "img/products/ashwagandha-pura-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "tambor-25kg",
        "name": "Tambor Industrial 25 kg (Mayorista / Granel)",
        "price": 2750,
        "weight": "25 kg",
        "format": "Tambor de Fibra Kraft con Aro Metálico",
        "packagingType": "industrial-tambor",
        "sku": "BIO-ASH-IND-25K",
        "image": "img/products/industrial/ashwagandha-pura-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "regularPrice": 142,
    "discountBadge": "-12% WEB",
    "highlightBadge": "🧘 ADAPTÓGENO PURO",
    "dosage": {
      "recommendedGrams": 1,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1/4 cucharadita dosificadora (1000mg)",
      "timingText": "Por la noche con una infusión caliente o leche dorada",
      "minDose": 0.5,
      "maxDose": 2
    },
    "technicalSpecs": {
      "chemicalForm": "Withania somnifera Raíz en Polvo Pura",
      "casNumber": "90147-43-6",
      "mesh": "100 Mesh boticario",
      "grade": "Grado Nutracéutico Puro",
      "solubility": "Dispersable en líquidos calientes o tibios",
      "appearance": "Polvo fino color arena con aroma terroso herbal"
    },
    "responsibleUse": {
      "instructions": "Mezclar en leche tibia, té o batido nocturno.",
      "warnings": [
        "No consumir durante el embarazo o lactancia.",
        "Consultar si se consumen sedantes o inmunosupresores."
      ],
      "storage": "Mantener en lugar seco y fresco, protegido de la luz."
    },
    "complementaryProductIds": [
      "citrato-de-magnesio",
      "glicinato-de-magnesio"
    ]
  },
  {
    "id": "sulfato-de-condroitina",
    "name": "Sulfato de Condroitina 100% Puro Grado Farmacéutico",
    "shortName": "Sulfato de Condroitina",
    "category": "salud-articular",
    "categoryName": "Salud Articular, Belleza y Vitalidad",
    "badge": "Regenerador Articular",
    "rating": 4.8,
    "reviewsCount": 52,
    "image": "img/products/sulfato-de-condroitina-pote-1kg.jpg",
    "hasVariants": true,
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 145,
        "weight": "1 kg",
        "format": "Bolsa Polietileno Sellada (Grado Alimentario)",
        "packagingType": "bolsa",
        "sku": "BIO-CON-BOL-1K",
        "image": "img/products/sulfato-de-condroitina-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 170.89,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-CON-POT-1K",
        "image": "img/products/sulfato-de-condroitina-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "tambor-25kg",
        "name": "Tambor Industrial 25 kg (Mayorista / Granel)",
        "price": 3100,
        "weight": "25 kg",
        "format": "Tambor de Fibra Kraft con Aro Metálico",
        "packagingType": "industrial-tambor",
        "sku": "BIO-CON-IND-25K",
        "image": "img/products/industrial/sulfato-de-condroitina-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "price": 145,
    "unit": "1KG",
    "origin": "Materia Prima Importada Certificada (Bovina)",
    "coaCertified": true,
    "coaPurity": "99.0% Pureza Titulada HPLC",
    "description": "Componente estructural clave de la matriz extracelular del cartílago. Aporta elasticidad, retiene agua en el tejido conectivo y actúa en sinergia con la glucosamina para frenar el desgaste articular y mejorar la movilidad.",
    "benefits": [
      "Frena la degeneración del cartílago articular en rodillas y columna.",
      "Estimula la síntesis endógena de proteoglicanos y ácido hialurónico.",
      "Alivia el dolor, rigidez y pérdida de flexibilidad articular crónica."
    ],
    "howToUse": "Tomar 1g a 1.2g diarios (media cucharadita dosificadora) disuelto en agua o jugo, idealmente junto con Glucosamina.",
    "composition": "100% Sulfato de Condroitina sódica pura grado farmacéutico.",
    "faqs": [
      {
        "q": "¿Cuál es el beneficio de tomar condroitina con glucosamina?",
        "a": "Es la combinación con mayor respaldo científico para el alivio del dolor osteoarticular. La glucosamina estimula la matriz de cartílago y la condroitina bloquea las enzimas líticas destructoras del tejido articular."
      }
    ],
    "dosage": {
      "recommendedGrams": 1.2,
      "unit": "g",
      "frequencyText": "1 vez al día con comidas",
      "scoopEquivalent": "1/2 cucharadita dosificadora (1200mg)",
      "timingText": "Junto al almuerzo con abundante agua",
      "minDose": 0.8,
      "maxDose": 1.5
    },
    "technicalSpecs": {
      "chemicalForm": "Sulfato de Condroitina Sódica Bovina (>90%)",
      "casNumber": "9007-28-7",
      "mesh": "80 Mesh",
      "grade": "Grado Farmacéutico USP",
      "solubility": "Soluble en agua formando una solución ligeramente viscosa",
      "appearance": "Polvo fino blanco a crema pálido"
    },
    "responsibleUse": {
      "instructions": "Disolver en agua o mezclar con zumo junto con Glucosamina.",
      "warnings": [
        "Consultar con médico en caso de terapia con anticoagulantes."
      ],
      "storage": "Almacenar bien cerrado en ambiente seco."
    },
    "complementaryProductIds": [
      "glucosamina-sulfato",
      "colageno-hidrolizado",
      "ascorbato-de-sodio"
    ]
  },
  {
    "id": "l-carnitina-base",
    "name": "L-Carnitina Base Pura Grado USP (Metabolismo y Definición)",
    "shortName": "L-Carnitina Base",
    "category": "fuerza-deporte",
    "categoryName": "Fuerza y Rendimiento Deportivo",
    "badge": "Metabolismo & Energía",
    "rating": 4.8,
    "reviewsCount": 68,
    "image": "img/products/l-carnitina-base-pote-1kg.jpg",
    "hasVariants": true,
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 78,
        "weight": "1 kg",
        "format": "Bolsa Polietileno Sellada (Grado Alimentario)",
        "packagingType": "bolsa",
        "sku": "BIO-CAR-BOL-1K",
        "image": "img/products/l-carnitina-base-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 91.93,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-CAR-POT-1K",
        "image": "img/products/l-carnitina-base-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "tambor-25kg",
        "name": "Tambor Industrial 25 kg (Mayorista / Granel)",
        "price": 1650,
        "weight": "25 kg",
        "format": "Tambor de Fibra Kraft con Aro Metálico",
        "packagingType": "industrial-tambor",
        "sku": "BIO-CAR-IND-25K",
        "image": "img/products/industrial/l-carnitina-base-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "price": 78,
    "unit": "1KG",
    "origin": "Materia Prima Americana Grado Farmacéutico",
    "coaCertified": true,
    "coaPurity": "99.5% Purity HPLC Tested",
    "description": "Aminoácido transportador fundamental que moviliza los ácidos grasos de cadena larga hacia el interior de las mitocondrias celulares, donde son oxidados para transformarse en ATP y energía biológica.",
    "benefits": [
      "Favorece el uso de depósitos grasos como combustible metabólico.",
      "Incrementa la resistencia aeróbica y reduce la acumulación de lactato.",
      "Optimiza la recuperación muscular post-ejercicio y protege el endotelio."
    ],
    "howToUse": "Tomar 2g a 3g unos 30-45 minutos antes de la sesión de entrenamiento aeróbico o cardiovascular en agua o bebida ligera.",
    "composition": "100% L-Carnitina Base pura grado USP sin saborizantes ni aditivos.",
    "faqs": [
      {
        "q": "¿La L-Carnitina base es higroscópica?",
        "a": "Sí, es una materia prima que absorbe humedad del aire con rapidez. Mantener el envase herméticamente cerrado o refrigerar en épocas húmedas."
      }
    ],
    "dosage": {
      "recommendedGrams": 2,
      "unit": "g",
      "frequencyText": "1 vez al día",
      "scoopEquivalent": "1/2 cucharadita dosificadora (2000mg)",
      "timingText": "30 a 45 minutos antes del entrenamiento cardiovascular",
      "minDose": 1,
      "maxDose": 3
    },
    "technicalSpecs": {
      "chemicalForm": "L-Carnitina Base Pura (Levocarnitina)",
      "casNumber": "541-15-1",
      "mesh": "80 Mesh",
      "grade": "Grado Farmacéutico USP",
      "solubility": "Altamente soluble en agua",
      "appearance": "Polvo cristalino blanco higroscópico"
    },
    "responsibleUse": {
      "instructions": "Disolver en agua antes del entrenamiento.",
      "warnings": [
        "Materia prima muy higroscópica: cerrar la tapa inmediatamente tras usar.",
        "No tomar tarde en la noche si causa activación."
      ],
      "storage": "Mantener con desecante y cerrado herméticamente."
    },
    "complementaryProductIds": [
      "te-verde-extracto",
      "creatina-monohidratada",
      "arginina-pura"
    ]
  },
  {
    "id": "stevia-pura",
    "name": "Extracto de Stevia Pura Rebaudiana (Glucósidos de Esteviol)",
    "shortName": "Stevia Pura en Polvo",
    "category": "salud-articular",
    "categoryName": "Salud Articular, Belleza y Vitalidad",
    "badge": "Cero Azúcar & Kcal",
    "rating": 4.9,
    "reviewsCount": 84,
    "image": "img/products/stevia-pura-pote-1kg.jpg",
    "hasVariants": true,
    "defaultVariant": "bolsa-1kg",
    "variants": [
      {
        "id": "bolsa-1kg",
        "name": "Bolsa de Polietileno 1 kg",
        "price": 160,
        "weight": "1 kg",
        "format": "Bolsa Polietileno Sellada (Grado Alimentario)",
        "packagingType": "bolsa",
        "sku": "BIO-STE-BOL-1K",
        "image": "img/products/stevia-pura-bolsa-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "pote-1kg",
        "name": "Pote Plastificado 1 kg",
        "price": 188.57,
        "weight": "1 kg",
        "format": "Pote HDPE Blanco Boticario con Precinto",
        "packagingType": "pote",
        "sku": "BIO-STE-POT-1K",
        "image": "img/products/stevia-pura-pote-1kg.jpg",
        "weightGrams": 1000
      },
      {
        "id": "tambor-25kg",
        "name": "Tambor Industrial 25 kg (Mayorista / Granel)",
        "price": 3400,
        "weight": "25 kg",
        "format": "Tambor de Fibra Kraft con Aro Metálico",
        "packagingType": "industrial-tambor",
        "sku": "BIO-STE-IND-25K",
        "image": "img/products/industrial/stevia-pura-25kg.jpg",
        "isBulk": true,
        "weightGrams": 25000
      }
    ],
    "price": 160,
    "unit": "1KG",
    "origin": "Materia Prima Natural Estandarizada",
    "coaCertified": true,
    "coaPurity": "98% Glucósidos de Esteviol Totales",
    "description": "Edulcorante natural de altísima potencia extraído de hojas de Stevia Rebaudiana. Con un poder endulzante hasta 300 veces superior a la sacarosa tradicional, sin calorías, sin impacto en el índice glucémico ni sabor residual amargo.",
    "benefits": [
      "Poder endulzante puro 100% natural sin elevar glucosa ni insulina.",
      "Cero calorías: indispensable en dietas cetogénicas, diabéticas o control de peso.",
      "Excelente estabilidad térmica en bebidas frías, calientes y repostería fitness."
    ],
    "howToUse": "Dosis micrométrica: una pizca mínima (0.05g a 0.1g) equivale a una cucharada sopera de azúcar común.",
    "composition": "100% Extracto de Stevia rebaudiana estandarizado en glucósidos de esteviol purificados.",
    "faqs": [
      {
        "q": "¿Tiene sabor amargo al final?",
        "a": "Al tratarse de extracto purificado de alta concentración en rebaudiósido, el amargor residual característico de hojas crudas es mínimo o inexistente."
      }
    ],
    "dosage": {
      "recommendedGrams": 0.1,
      "unit": "g",
      "frequencyText": "A gusto como endulzante",
      "scoopEquivalent": "Una pizca minúscula (punta de un cuchillo = 100mg)",
      "timingText": "Al preparar café, batidos, infusiones o postres",
      "minDose": 0.05,
      "maxDose": 0.5
    },
    "technicalSpecs": {
      "chemicalForm": "Glucósidos de Esteviol Puros (Rebaudioside A >98%)",
      "casNumber": "57817-89-7",
      "mesh": "100 Mesh ultra fino",
      "grade": "Grado Alimentario USP / FCC",
      "solubility": "Instantáneamente soluble en líquidos fríos o calientes",
      "appearance": "Polvo blanco fino de dulzor puro sin amargor"
    },
    "responsibleUse": {
      "instructions": "Usar cantidades mínimas: su poder endulzante es 300 veces superior al azúcar común.",
      "warnings": [
        "0 calorías, 0 índice glucémico. Apto para diabéticos y dietas keto."
      ],
      "storage": "Conservar en frasco hermético en lugar seco."
    },
    "complementaryProductIds": [
      "proteina-suero-leche-80",
      "proteina-soya-vegetal",
      "te-verde-extracto"
    ]
  },
  {
    "id": "profit-cocktail-energix",
    "name": "COCKTAIL ENERGIX — Profit Pharma",
    "shortName": "COCKTAIL ENERGIX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 25,
    "image": "img/products/profit-pharma/01_ORTO_Cocktail_Energix.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/01_ORTO_Cocktail_Energix.png",
    "hasVariants": false,
    "defaultVariant": "solucion-inyectable-vial-x-50ml",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-50ml",
        "name": "Solución inyectable - Vial x 50ml",
        "price": 93.5,
        "weight": "Solución inyectable - Vial x 50ml",
        "format": "Glutatión 100mg, Nad+ 100mg, Alfa Lipoico 100mg, Vitamina C 15g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-01-01",
        "image": "img/products/profit-pharma/01_ORTO_Cocktail_Energix.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 50ml",
    "price": 93.5,
    "unit": "Solución inyectable - Vial x 50ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Integra la coenzima NAD+ para la restauración del ADN, con los antioxidantes Glutatión, Ácido Alfa Lipoico y Vitamina C.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Glutatión 100mg, Nad+ 100mg, Alfa Lipoico 100mg, Vitamina C 15g.",
      "Presentación disponible: Solución inyectable - Vial x 50ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Glutatión 100mg, Nad+ 100mg, Alfa Lipoico 100mg, Vitamina C 15g",
    "faqs": [
      {
        "q": "¿El producto COCKTAIL ENERGIX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 50ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "Glutatión 100mg, Nad+ 100mg, Alfa Lipoico 100mg, Vitamina C 15g",
      "Presentaciones": "Solución inyectable - Vial x 50ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-cocktail-energix-pro",
    "name": "COCKTAIL ENERGIX PRO — Profit Pharma",
    "shortName": "COCKTAIL ENERGIX PRO",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 26,
    "image": "img/products/profit-pharma/02_ORTO_Cocktail_Energix_Pro.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/02_ORTO_Cocktail_Energix_Pro.png",
    "hasVariants": false,
    "defaultVariant": "solucion-inyectable-vial-x-50ml",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-50ml",
        "name": "Solución inyectable - Vial x 50ml",
        "price": 120.5,
        "weight": "Solución inyectable - Vial x 50ml",
        "format": "Glutatión 100mg, Nad+ 100mg, Alfa Lipoico 100mg, Vitamina C 25g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-02-01",
        "image": "img/products/profit-pharma/02_ORTO_Cocktail_Energix_Pro.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 50ml",
    "price": 120.5,
    "unit": "Solución inyectable - Vial x 50ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Integra la coenzima NAD+ para la restauración del ADN, con los antioxidantes Glutatión, Ácido Alfa Lipoico y Vitamina C de 25g.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Glutatión 100mg, Nad+ 100mg, Alfa Lipoico 100mg, Vitamina C 25g.",
      "Presentación disponible: Solución inyectable - Vial x 50ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Glutatión 100mg, Nad+ 100mg, Alfa Lipoico 100mg, Vitamina C 25g",
    "faqs": [
      {
        "q": "¿El producto COCKTAIL ENERGIX PRO es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 50ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "Glutatión 100mg, Nad+ 100mg, Alfa Lipoico 100mg, Vitamina C 25g",
      "Presentaciones": "Solución inyectable - Vial x 50ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-cocktail-nadmax",
    "name": "COCKTAIL NADMAX — Profit Pharma",
    "shortName": "COCKTAIL NADMAX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 27,
    "image": "img/products/profit-pharma/03_ORTO_Cocktail_Nadmax.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/03_ORTO_Cocktail_Nadmax.png",
    "hasVariants": false,
    "defaultVariant": "solucion-inyectable-vial-x-10ml",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-10ml",
        "name": "Solución inyectable - Vial x 10ml",
        "price": 47.5,
        "weight": "Solución inyectable - Vial x 10ml",
        "format": "Nad+ 250mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-03-01",
        "image": "img/products/profit-pharma/03_ORTO_Cocktail_Nadmax.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 10ml",
    "price": 47.5,
    "unit": "Solución inyectable - Vial x 10ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Solución parenteral de NAD+ en alta concentración, diseñada para la reprogramación metabólica y la reparación integral del ADN.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Nad+ 250mg.",
      "Presentación disponible: Solución inyectable - Vial x 10ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Nad+ 250mg",
    "faqs": [
      {
        "q": "¿El producto COCKTAIL NADMAX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 10ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "Nad+ 250mg",
      "Presentaciones": "Solución inyectable - Vial x 10ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-cocktail-vitamax",
    "name": "COCKTAIL VITAMAX — Profit Pharma",
    "shortName": "COCKTAIL VITAMAX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 28,
    "image": "img/products/profit-pharma/04_ORTO_Cocktail_Vitamax.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/04_ORTO_Cocktail_Vitamax.png",
    "hasVariants": false,
    "defaultVariant": "solucion-inyectable-vial-x-50ml",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-50ml",
        "name": "Solución inyectable - Vial x 50ml",
        "price": 93.5,
        "weight": "Solución inyectable - Vial x 50ml",
        "format": "Alfa Lipoico 100mg, Glutatión 60mg, Biotina 20mg, Vitamina C 15g, Coenzima Q10 10mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-04-01",
        "image": "img/products/profit-pharma/04_ORTO_Cocktail_Vitamax.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 50ml",
    "price": 93.5,
    "unit": "Solución inyectable - Vial x 50ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Orientado a favorecer la vitalidad y el metabolismo energético, proporcionando soporte antioxidante y contribuyendo al mantenimiento saludable de la piel y el cabello.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Alfa Lipoico 100mg, Glutatión 60mg, Biotina 20mg, Vitamina C 15g, Coenzima Q10 10mg.",
      "Presentación disponible: Solución inyectable - Vial x 50ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Alfa Lipoico 100mg, Glutatión 60mg, Biotina 20mg, Vitamina C 15g, Coenzima Q10 10mg",
    "faqs": [
      {
        "q": "¿El producto COCKTAIL VITAMAX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 50ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "Alfa Lipoico 100mg, Glutatión 60mg, Biotina 20mg, Vitamina C 15g, Coenzima Q10 10mg",
      "Presentaciones": "Solución inyectable - Vial x 50ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-cocktail-multimax",
    "name": "COCKTAIL MULTIMAX — Profit Pharma",
    "shortName": "COCKTAIL MULTIMAX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 29,
    "image": "img/products/profit-pharma/05_ORTO_Cocktail_Multimax.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/05_ORTO_Cocktail_Multimax.png",
    "hasVariants": false,
    "defaultVariant": "solucion-inyectable-vial-x-10ml",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-10ml",
        "name": "Solución inyectable - Vial x 10ml",
        "price": 52.9,
        "weight": "Solución inyectable - Vial x 10ml",
        "format": "Vitamina A 10000 ui, Vitamina D 1000 ui, Vitamina C 50mg, Complejo B 30mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-05-01",
        "image": "img/products/profit-pharma/05_ORTO_Cocktail_Multimax.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 10ml",
    "price": 52.9,
    "unit": "Solución inyectable - Vial x 10ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Diseñado para complementar las necesidades nutricionales del organismo y contribuir al mantenimiento de las funciones metabólicas, físicas y fisiológicas normales.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Vitamina A 10000 ui, Vitamina D 1000 ui, Vitamina C 50mg, Complejo B 30mg.",
      "Presentación disponible: Solución inyectable - Vial x 10ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Vitamina A 10000 ui, Vitamina D 1000 ui, Vitamina C 50mg, Complejo B 30mg",
    "faqs": [
      {
        "q": "¿El producto COCKTAIL MULTIMAX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 10ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "Vitamina A 10000 ui, Vitamina D 1000 ui, Vitamina C 50mg, Complejo B 30mg",
      "Presentaciones": "Solución inyectable - Vial x 10ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-for-men",
    "name": "FOR MEN — Profit Pharma",
    "shortName": "FOR MEN",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 30,
    "image": "img/products/profit-pharma/06_ORTO_For_Men.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/06_ORTO_For_Men.png",
    "hasVariants": false,
    "defaultVariant": "solucion-inyectable-vial-x-50ml",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-50ml",
        "name": "Solución inyectable - Vial x 50ml",
        "price": 93.5,
        "weight": "Solución inyectable - Vial x 50ml",
        "format": "Arginina 100mg, Vitamina C 10% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-06-01",
        "image": "img/products/profit-pharma/06_ORTO_For_Men.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 50ml",
    "price": 93.5,
    "unit": "Solución inyectable - Vial x 50ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Orientado al bienestar integral del hombre adulto, brindando soporte para el metabolismo, la vitalidad y el adecuado funcionamiento del organismo.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Arginina 100mg, Vitamina C 10%.",
      "Presentación disponible: Solución inyectable - Vial x 50ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Arginina 100mg, Vitamina C 10%",
    "faqs": [
      {
        "q": "¿El producto FOR MEN es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 50ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "Arginina 100mg, Vitamina C 10%",
      "Presentaciones": "Solución inyectable - Vial x 50ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-glutamax",
    "name": "GLUTAMAX — Profit Pharma",
    "shortName": "GLUTAMAX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 31,
    "image": "img/products/profit-pharma/07_ORTO_Glutamax.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/07_ORTO_Glutamax.png",
    "hasVariants": true,
    "defaultVariant": "solucion-inyectable-vial-x-10ml-glutation-100mg",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-10ml-glutation-100mg",
        "name": "Solución inyectable - Vial x 10ml (Glutatión 100mg)",
        "price": 82.5,
        "weight": "Solución inyectable - Vial x 10ml (Glutatión 100mg)",
        "format": "Glutatión 100mg, Carnosina 10mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-07-01",
        "image": "img/products/profit-pharma/07_ORTO_Glutamax.png"
      },
      {
        "id": "solucion-inyectable-vial-x-10ml-glutation-300mg",
        "name": "Solución inyectable - Vial x 10ml (Glutatión 300mg)",
        "price": 95.9,
        "weight": "Solución inyectable - Vial x 10ml (Glutatión 300mg)",
        "format": "Glutatión 300mg, Carnosina 10mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-07-02",
        "image": "img/products/profit-pharma/07_ORTO_Glutamax.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 10ml (Glutatión 100mg) • Solución inyectable - Vial x 10ml (Glutatión 300mg)",
    "price": 82.5,
    "unit": "Solución inyectable - Vial x 10ml (Glutatión 100mg)",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Enfocado en el soporte de las defensas antioxidantes del organismo y la protección de las células frente al estrés oxidativo.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Glutatión 100mg, Carnosina 10mg | Glutatión 300mg, Carnosina 10mg.",
      "Presentación disponible: Solución inyectable - Vial x 10ml (Glutatión 100mg) • Solución inyectable - Vial x 10ml (Glutatión 300mg)."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Glutatión 100mg, Carnosina 10mg | Glutatión 300mg, Carnosina 10mg",
    "faqs": [
      {
        "q": "¿El producto GLUTAMAX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 10ml (Glutatión 100mg) • Solución inyectable - Vial x 10ml (Glutatión 300mg)."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "Glutatión 100mg, Carnosina 10mg | Glutatión 300mg, Carnosina 10mg",
      "Presentaciones": "Solución inyectable - Vial x 10ml (Glutatión 100mg) • Solución inyectable - Vial x 10ml (Glutatión 300mg)",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-profit-c-ala",
    "name": "PROFIT C + ALA — Profit Pharma",
    "shortName": "PROFIT C + ALA",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 32,
    "image": "img/products/profit-pharma/08_ORTO_Profit_C_ALA.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/08_ORTO_Profit_C_ALA.png",
    "hasVariants": true,
    "defaultVariant": "solucion-inyectable-vial-x-50ml-vit-c-7-5g-ala-60mg",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-50ml-vit-c-7-5g-ala-60mg",
        "name": "Solución inyectable - Vial x 50ml (Vit. C 7.5g + ALA 60mg)",
        "price": 50.9,
        "weight": "Solución inyectable - Vial x 50ml (Vit. C 7.5g + ALA 60mg)",
        "format": "ALA 60mg, Vitamina C 7.5g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-08-01",
        "image": "img/products/profit-pharma/08_ORTO_Profit_C_ALA.png"
      },
      {
        "id": "solucion-inyectable-vial-x-50ml-vit-c-10g-ala-60mg",
        "name": "Solución inyectable - Vial x 50ml (Vit. C 10g + ALA 60mg)",
        "price": 51.5,
        "weight": "Solución inyectable - Vial x 50ml (Vit. C 10g + ALA 60mg)",
        "format": "ALA 60mg, Vitamina C 10g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-08-02",
        "image": "img/products/profit-pharma/08_ORTO_Profit_C_ALA.png"
      },
      {
        "id": "solucion-inyectable-vial-x-50ml-vit-c-15g-ala-60mg",
        "name": "Solución inyectable - Vial x 50ml (Vit. C 15g + ALA 60mg)",
        "price": 64.9,
        "weight": "Solución inyectable - Vial x 50ml (Vit. C 15g + ALA 60mg)",
        "format": "ALA 60mg, Vitamina C 15g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-08-03",
        "image": "img/products/profit-pharma/08_ORTO_Profit_C_ALA.png"
      },
      {
        "id": "solucion-inyectable-vial-x-50ml-vit-c-25g-ala-60mg",
        "name": "Solución inyectable - Vial x 50ml (Vit. C 25g + ALA 60mg)",
        "price": 81.5,
        "weight": "Solución inyectable - Vial x 50ml (Vit. C 25g + ALA 60mg)",
        "format": "ALA 60mg, Vitamina C 25g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-08-04",
        "image": "img/products/profit-pharma/08_ORTO_Profit_C_ALA.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 50ml (Vit. C 7.5g + ALA 60mg) • Solución inyectable - Vial x 50ml (Vit. C 10g + ALA 60mg) • Solución inyectable - Vial x 50ml (Vit. C 15g + ALA 60mg) (+1)",
    "price": 50.9,
    "unit": "Solución inyectable - Vial x 50ml (Vit. C 7.5g + ALA 60mg)",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Solución parenteral de alta potencia que combina la acción inmunoprotectora de la Vitamina C con la capacidad regenerativa del Ácido Alfa Lipoico.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: ALA 60mg, Vitamina C 7.5g | ALA 60mg, Vitamina C 10g | ALA 60mg, Vitamina C 15g | ALA 60mg, Vitamina C 25g.",
      "Presentación disponible: Solución inyectable - Vial x 50ml (Vit. C 7.5g + ALA 60mg) • Solución inyectable - Vial x 50ml (Vit. C 10g + ALA 60mg) • Solución inyectable - Vial x 50ml (Vit. C 15g + ALA 60mg) (+1)."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "ALA 60mg, Vitamina C 7.5g | ALA 60mg, Vitamina C 10g | ALA 60mg, Vitamina C 15g | ALA 60mg, Vitamina C 25g",
    "faqs": [
      {
        "q": "¿El producto PROFIT C + ALA es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 50ml (Vit. C 7.5g + ALA 60mg) • Solución inyectable - Vial x 50ml (Vit. C 10g + ALA 60mg) • Solución inyectable - Vial x 50ml (Vit. C 15g + ALA 60mg) (+1)."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "ALA 60mg, Vitamina C 7.5g | ALA 60mg, Vitamina C 10g | ALA 60mg, Vitamina C 15g | ALA 60mg, Vitamina C 25g",
      "Presentaciones": "Solución inyectable - Vial x 50ml (Vit. C 7.5g + ALA 60mg) • Solución inyectable - Vial x 50ml (Vit. C 10g + ALA 60mg) • Solución inyectable - Vial x 50ml (Vit. C 15g + ALA 60mg) (+1)",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-profit-c",
    "name": "PROFIT C — Profit Pharma",
    "shortName": "PROFIT C",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 33,
    "image": "img/products/profit-pharma/09_ORTO_Profit_C.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/09_ORTO_Profit_C.png",
    "hasVariants": true,
    "defaultVariant": "solucion-inyectable-vial-x-50ml-vit-c-7-5g",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-50ml-vit-c-7-5g",
        "name": "Solución inyectable - Vial x 50ml (Vit. C 7.5g)",
        "price": 48.9,
        "weight": "Solución inyectable - Vial x 50ml (Vit. C 7.5g)",
        "format": "Vitamina C 7.5g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-09-01",
        "image": "img/products/profit-pharma/09_ORTO_Profit_C.png"
      },
      {
        "id": "solucion-inyectable-vial-x-50ml-vit-c-10g",
        "name": "Solución inyectable - Vial x 50ml (Vit. C 10g)",
        "price": 50.9,
        "weight": "Solución inyectable - Vial x 50ml (Vit. C 10g)",
        "format": "Vitamina C 10g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-09-02",
        "image": "img/products/profit-pharma/09_ORTO_Profit_C.png"
      },
      {
        "id": "solucion-inyectable-vial-x-50ml-vit-c-15g",
        "name": "Solución inyectable - Vial x 50ml (Vit. C 15g)",
        "price": 63.5,
        "weight": "Solución inyectable - Vial x 50ml (Vit. C 15g)",
        "format": "Vitamina C 15g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-09-03",
        "image": "img/products/profit-pharma/09_ORTO_Profit_C.png"
      },
      {
        "id": "solucion-inyectable-vial-x-50ml-vit-c-25g",
        "name": "Solución inyectable - Vial x 50ml (Vit. C 25g)",
        "price": 79.9,
        "weight": "Solución inyectable - Vial x 50ml (Vit. C 25g)",
        "format": "Vitamina C 25g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-09-04",
        "image": "img/products/profit-pharma/09_ORTO_Profit_C.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 50ml (Vit. C 7.5g) • Solución inyectable - Vial x 50ml (Vit. C 10g) • Solución inyectable - Vial x 50ml (Vit. C 15g) (+1)",
    "price": 48.9,
    "unit": "Solución inyectable - Vial x 50ml (Vit. C 7.5g)",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Acción inmunoprotectora de la Vitamina C para mejor recuperación corporal.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Vitamina C 7.5g | Vitamina C 10g | Vitamina C 15g | Vitamina C 25g.",
      "Presentación disponible: Solución inyectable - Vial x 50ml (Vit. C 7.5g) • Solución inyectable - Vial x 50ml (Vit. C 10g) • Solución inyectable - Vial x 50ml (Vit. C 15g) (+1)."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Vitamina C 7.5g | Vitamina C 10g | Vitamina C 15g | Vitamina C 25g",
    "faqs": [
      {
        "q": "¿El producto PROFIT C es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 50ml (Vit. C 7.5g) • Solución inyectable - Vial x 50ml (Vit. C 10g) • Solución inyectable - Vial x 50ml (Vit. C 15g) (+1)."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "Vitamina C 7.5g | Vitamina C 10g | Vitamina C 15g | Vitamina C 25g",
      "Presentaciones": "Solución inyectable - Vial x 50ml (Vit. C 7.5g) • Solución inyectable - Vial x 50ml (Vit. C 10g) • Solución inyectable - Vial x 50ml (Vit. C 15g) (+1)",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-cocktail-lipomax",
    "name": "COCKTAIL LIPOMAX — Profit Pharma",
    "shortName": "COCKTAIL LIPOMAX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 34,
    "image": "img/products/profit-pharma/10_ORTO_Cocktail_Lipomax.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/10_ORTO_Cocktail_Lipomax.png",
    "hasVariants": false,
    "defaultVariant": "solucion-inyectable-vial-x-50ml",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-50ml",
        "name": "Solución inyectable - Vial x 50ml",
        "price": 93.5,
        "weight": "Solución inyectable - Vial x 50ml",
        "format": "L-Carnitina 100mg, Alfa Lipoico 100mg, Vitamina C 100mg, Glutatión 60mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-10-01",
        "image": "img/products/profit-pharma/10_ORTO_Cocktail_Lipomax.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 50ml",
    "price": 93.5,
    "unit": "Solución inyectable - Vial x 50ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Fusiona el transporte energético de la L-Carnitina con la potencia regenerativa del Glutatión, el Ácido Alfa Lipoico y la Vitamina C.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: L-Carnitina 100mg, Alfa Lipoico 100mg, Vitamina C 100mg, Glutatión 60mg.",
      "Presentación disponible: Solución inyectable - Vial x 50ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "L-Carnitina 100mg, Alfa Lipoico 100mg, Vitamina C 100mg, Glutatión 60mg",
    "faqs": [
      {
        "q": "¿El producto COCKTAIL LIPOMAX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 50ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "L-Carnitina 100mg, Alfa Lipoico 100mg, Vitamina C 100mg, Glutatión 60mg",
      "Presentaciones": "Solución inyectable - Vial x 50ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-dolomax",
    "name": "DOLOMAX — Profit Pharma",
    "shortName": "DOLOMAX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 35,
    "image": "img/products/profit-pharma/11_ORTO_Dolomax.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/11_ORTO_Dolomax.png",
    "hasVariants": false,
    "defaultVariant": "solucion-inyectable-vial-x-50ml",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-50ml",
        "name": "Solución inyectable - Vial x 50ml",
        "price": 95.9,
        "weight": "Solución inyectable - Vial x 50ml",
        "format": "Procaína 500mg, Vitamina C 10g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-11-01",
        "image": "img/products/profit-pharma/11_ORTO_Dolomax.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 50ml",
    "price": 95.9,
    "unit": "Solución inyectable - Vial x 50ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Potente analgésico y desinflamatorio sistémico, donde la procaína ayuda a repolarizar las células para estabilizar el sistema nervioso y reducir el dolor crónico.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Procaína 500mg, Vitamina C 10g.",
      "Presentación disponible: Solución inyectable - Vial x 50ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Procaína 500mg, Vitamina C 10g",
    "faqs": [
      {
        "q": "¿El producto DOLOMAX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 50ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "Procaína 500mg, Vitamina C 10g",
      "Presentaciones": "Solución inyectable - Vial x 50ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-ultra-b12",
    "name": "ULTRA B12 — Profit Pharma",
    "shortName": "ULTRA B12",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 36,
    "image": "img/products/profit-pharma/12_ORTO_Ultra_B12.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/12_ORTO_Ultra_B12.png",
    "hasVariants": false,
    "defaultVariant": "solucion-inyectable-vial-x-10ml",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-10ml",
        "name": "Solución inyectable - Vial x 10ml",
        "price": 50.9,
        "weight": "Solución inyectable - Vial x 10ml",
        "format": "Cianocobalamina 500 ui • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-12-01",
        "image": "img/products/profit-pharma/12_ORTO_Ultra_B12.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 10ml",
    "price": 50.9,
    "unit": "Solución inyectable - Vial x 10ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Diseñada para realizar una restauración crítica de la función neurológica y la optimización de la síntesis de glóbulos rojos.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Cianocobalamina 500 ui.",
      "Presentación disponible: Solución inyectable - Vial x 10ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Cianocobalamina 500 ui",
    "faqs": [
      {
        "q": "¿El producto ULTRA B12 es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 10ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "Cianocobalamina 500 ui",
      "Presentaciones": "Solución inyectable - Vial x 10ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-cocktail-max-b",
    "name": "COCKTAIL MAX B — Profit Pharma",
    "shortName": "COCKTAIL MAX B",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "ortomolecular",
    "subCategoryName": "Línea Ortomolecular",
    "badge": "Ortomolecular",
    "rating": 4.9,
    "reviewsCount": 37,
    "image": "img/products/profit-pharma/13_ORTO_Cocktail_Max_B.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/13_ORTO_Cocktail_Max_B.png",
    "hasVariants": false,
    "defaultVariant": "solucion-inyectable-vial-x-10ml",
    "variants": [
      {
        "id": "solucion-inyectable-vial-x-10ml",
        "name": "Solución inyectable - Vial x 10ml",
        "price": 50.9,
        "weight": "Solución inyectable - Vial x 10ml",
        "format": "B3 Nicotinamida 40mg, B1 Tiamina HCL 10mg, B5 Dex Pantenol 6mg, B2 Riboflavina 5.53mg, B6 Piridoxina HCL 4mg, B8 Biotina 500ug, B12 Cianocobalamina 8ug • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-13-01",
        "image": "img/products/profit-pharma/13_ORTO_Cocktail_Max_B.png"
      }
    ],
    "presentationsSummary": "Solución inyectable - Vial x 10ml",
    "price": 50.9,
    "unit": "Solución inyectable - Vial x 10ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Solución que integra vitaminas para la restauración integral del sistema nervioso y la optimización del ciclo energético.",
    "benefits": [
      "Línea Ortomolecular Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: B3 Nicotinamida 40mg, B1 Tiamina HCL 10mg, B5 Dex Pantenol 6mg, B2 Riboflavina 5.53mg, B6 Piridoxina HCL 4mg, B8 Biotina 500ug, B12 Cianocobalamina 8ug.",
      "Presentación disponible: Solución inyectable - Vial x 10ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "B3 Nicotinamida 40mg, B1 Tiamina HCL 10mg, B5 Dex Pantenol 6mg, B2 Riboflavina 5.53mg, B6 Piridoxina HCL 4mg, B8 Biotina 500ug, B12 Cianocobalamina 8ug",
    "faqs": [
      {
        "q": "¿El producto COCKTAIL MAX B es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Solución inyectable - Vial x 10ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Ortomolecular",
      "Composición": "B3 Nicotinamida 40mg, B1 Tiamina HCL 10mg, B5 Dex Pantenol 6mg, B2 Riboflavina 5.53mg, B6 Piridoxina HCL 4mg, B8 Biotina 500ug, B12 Cianocobalamina 8ug",
      "Presentaciones": "Solución inyectable - Vial x 10ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-enzifit-individual",
    "name": "ENZIFIT (Individual: Lipasa / Hialuronidasa / Colagenasa) — Profit Pharma",
    "shortName": "ENZIFIT (Individual: Lipasa / Hialuronidasa / Colagenasa)",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "mesoterapia",
    "subCategoryName": "Línea Mesoterapia",
    "badge": "Mesoterapia",
    "rating": 4.9,
    "reviewsCount": 38,
    "image": "img/products/profit-pharma/14_MESO_Enzifit_Individuales.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/14_MESO_Enzifit_Individuales.png",
    "hasVariants": true,
    "defaultVariant": "vial-inyectable-individual",
    "variants": [
      {
        "id": "vial-inyectable-individual",
        "name": "Vial inyectable individual",
        "price": 66.5,
        "weight": "Vial inyectable individual",
        "format": "Lipasa 2000ui / Hialuronidasa 2000ui / Colagenasa 2000ui • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-14-01",
        "image": "img/products/profit-pharma/14_MESO_Enzifit_Individuales.png"
      },
      {
        "id": "kit-03-viales-inyectables",
        "name": "Kit 03 viales inyectables",
        "price": 174.5,
        "weight": "Kit 03 viales inyectables",
        "format": "Lipasa 2000ui / Hialuronidasa 2000ui / Colagenasa 2000ui • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-14-02",
        "image": "img/products/profit-pharma/14_MESO_Enzifit_Individuales.png"
      }
    ],
    "presentationsSummary": "Vial inyectable individual • Kit 03 viales inyectables",
    "price": 66.5,
    "unit": "Vial inyectable individual",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Enzimas individuales: Lipasa (grasa localizada), Hialuronidasa (degrada ácido hialurónico) o Colagenasa (flacidez, cicatrices y arrugas).",
    "benefits": [
      "Línea Mesoterapia Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Lipasa 2000ui / Hialuronidasa 2000ui / Colagenasa 2000ui.",
      "Presentación disponible: Vial inyectable individual • Kit 03 viales inyectables."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Lipasa 2000ui / Hialuronidasa 2000ui / Colagenasa 2000ui",
    "faqs": [
      {
        "q": "¿El producto ENZIFIT (Individual: Lipasa / Hialuronidasa / Colagenasa) es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Vial inyectable individual • Kit 03 viales inyectables."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Mesoterapia",
      "Composición": "Lipasa 2000ui / Hialuronidasa 2000ui / Colagenasa 2000ui",
      "Presentaciones": "Vial inyectable individual • Kit 03 viales inyectables",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-cocktail-enzifit",
    "name": "COCKTAIL ENZIFIT — Profit Pharma",
    "shortName": "COCKTAIL ENZIFIT",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "mesoterapia",
    "subCategoryName": "Línea Mesoterapia",
    "badge": "Mesoterapia",
    "rating": 4.9,
    "reviewsCount": 39,
    "image": "img/products/profit-pharma/15_MESO_Cocktail_Enzifit.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/15_MESO_Cocktail_Enzifit.png",
    "hasVariants": true,
    "defaultVariant": "1-vial-x-10ml",
    "variants": [
      {
        "id": "1-vial-x-10ml",
        "name": "1 vial x 10ml",
        "price": 79.9,
        "weight": "1 vial x 10ml",
        "format": "Hialuronidasa 2000ui, Colagenasa 2000ui, Lipasa 2000ui • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-15-01",
        "image": "img/products/profit-pharma/15_MESO_Cocktail_Enzifit.png"
      },
      {
        "id": "kit-3-viales-x-10ml",
        "name": "Kit 3 viales x 10ml",
        "price": 214.9,
        "weight": "Kit 3 viales x 10ml",
        "format": "Hialuronidasa 2000ui, Colagenasa 2000ui, Lipasa 2000ui • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-15-02",
        "image": "img/products/profit-pharma/15_MESO_Cocktail_Enzifit.png"
      }
    ],
    "presentationsSummary": "1 vial x 10ml • Kit 3 viales x 10ml",
    "price": 79.9,
    "unit": "1 vial x 10ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Actúa de forma sinérgica para descomponer grasa, reducir la retención de líquidos y eliminar fibrosis o mejorar la firmeza de la piel.",
    "benefits": [
      "Línea Mesoterapia Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Hialuronidasa 2000ui, Colagenasa 2000ui, Lipasa 2000ui.",
      "Presentación disponible: 1 vial x 10ml • Kit 3 viales x 10ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Hialuronidasa 2000ui, Colagenasa 2000ui, Lipasa 2000ui",
    "faqs": [
      {
        "q": "¿El producto COCKTAIL ENZIFIT es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: 1 vial x 10ml • Kit 3 viales x 10ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Mesoterapia",
      "Composición": "Hialuronidasa 2000ui, Colagenasa 2000ui, Lipasa 2000ui",
      "Presentaciones": "1 vial x 10ml • Kit 3 viales x 10ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-tricarnifit",
    "name": "TRICARNIFIT — Profit Pharma",
    "shortName": "TRICARNIFIT",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "mesoterapia",
    "subCategoryName": "Línea Mesoterapia",
    "badge": "Mesoterapia",
    "rating": 4.9,
    "reviewsCount": 40,
    "image": "img/products/profit-pharma/16_MESO_Tricarnifit.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/16_MESO_Tricarnifit.png",
    "hasVariants": true,
    "defaultVariant": "1-vial-x-10ml",
    "variants": [
      {
        "id": "1-vial-x-10ml",
        "name": "1 vial x 10ml",
        "price": 52.9,
        "weight": "1 vial x 10ml",
        "format": "L-Carnitina 10%, Cafeína 2%, Silicio orgánico 2% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-16-01",
        "image": "img/products/profit-pharma/16_MESO_Tricarnifit.png"
      },
      {
        "id": "kit-3-viales-x-10ml",
        "name": "Kit 3 viales x 10ml",
        "price": 79.9,
        "weight": "Kit 3 viales x 10ml",
        "format": "L-Carnitina 10%, Cafeína 2%, Silicio orgánico 2% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-16-02",
        "image": "img/products/profit-pharma/16_MESO_Tricarnifit.png"
      }
    ],
    "presentationsSummary": "1 vial x 10ml • Kit 3 viales x 10ml",
    "price": 52.9,
    "unit": "1 vial x 10ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Cóctel lipolítico y reafirmante de alta concentración con silicio orgánico, diseñado para su uso en medicina estética y mesoterapia corporal.",
    "benefits": [
      "Línea Mesoterapia Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: L-Carnitina 10%, Cafeína 2%, Silicio orgánico 2%.",
      "Presentación disponible: 1 vial x 10ml • Kit 3 viales x 10ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "L-Carnitina 10%, Cafeína 2%, Silicio orgánico 2%",
    "faqs": [
      {
        "q": "¿El producto TRICARNIFIT es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: 1 vial x 10ml • Kit 3 viales x 10ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Mesoterapia",
      "Composición": "L-Carnitina 10%, Cafeína 2%, Silicio orgánico 2%",
      "Presentaciones": "1 vial x 10ml • Kit 3 viales x 10ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-dicarnetin",
    "name": "DICARNETIN — Profit Pharma",
    "shortName": "DICARNETIN",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "mesoterapia",
    "subCategoryName": "Línea Mesoterapia",
    "badge": "Mesoterapia",
    "rating": 4.9,
    "reviewsCount": 41,
    "image": "img/products/profit-pharma/17_MESO_Dicarnetin.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/17_MESO_Dicarnetin.png",
    "hasVariants": true,
    "defaultVariant": "1-vial-x-10ml",
    "variants": [
      {
        "id": "1-vial-x-10ml",
        "name": "1 vial x 10ml",
        "price": 39.5,
        "weight": "1 vial x 10ml",
        "format": "L-Carnitina 20%, Cafeína 2% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-17-01",
        "image": "img/products/profit-pharma/17_MESO_Dicarnetin.png"
      },
      {
        "id": "kit-3-viales-x-10ml",
        "name": "Kit 3 viales x 10ml",
        "price": 66.5,
        "weight": "Kit 3 viales x 10ml",
        "format": "L-Carnitina 20%, Cafeína 2% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-17-02",
        "image": "img/products/profit-pharma/17_MESO_Dicarnetin.png"
      }
    ],
    "presentationsSummary": "1 vial x 10ml • Kit 3 viales x 10ml",
    "price": 39.5,
    "unit": "1 vial x 10ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Cóctel lipolítico y reafirmante de alta concentración, diseñado para su uso en medicina estética y mesoterapia corporal.",
    "benefits": [
      "Línea Mesoterapia Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: L-Carnitina 20%, Cafeína 2%.",
      "Presentación disponible: 1 vial x 10ml • Kit 3 viales x 10ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "L-Carnitina 20%, Cafeína 2%",
    "faqs": [
      {
        "q": "¿El producto DICARNETIN es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: 1 vial x 10ml • Kit 3 viales x 10ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Mesoterapia",
      "Composición": "L-Carnitina 20%, Cafeína 2%",
      "Presentaciones": "1 vial x 10ml • Kit 3 viales x 10ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-adipox",
    "name": "ADIPOX — Profit Pharma",
    "shortName": "ADIPOX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "mesoterapia",
    "subCategoryName": "Línea Mesoterapia",
    "badge": "Mesoterapia",
    "rating": 4.9,
    "reviewsCount": 42,
    "image": "img/products/profit-pharma/18_MESO_Adipox.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/18_MESO_Adipox.png",
    "hasVariants": true,
    "defaultVariant": "1-vial-10",
    "variants": [
      {
        "id": "1-vial-10",
        "name": "1 vial (10%)",
        "price": 25.9,
        "weight": "1 vial (10%)",
        "format": "L-Carnitina 10% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-18-01",
        "image": "img/products/profit-pharma/18_MESO_Adipox.png"
      },
      {
        "id": "kit-3-viales-10",
        "name": "Kit 3 viales (10%)",
        "price": 52.9,
        "weight": "Kit 3 viales (10%)",
        "format": "L-Carnitina 10% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-18-02",
        "image": "img/products/profit-pharma/18_MESO_Adipox.png"
      },
      {
        "id": "1-vial-20",
        "name": "1 vial (20%)",
        "price": 39.5,
        "weight": "1 vial (20%)",
        "format": "L-Carnitina 20% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-18-03",
        "image": "img/products/profit-pharma/18_MESO_Adipox.png"
      },
      {
        "id": "kit-3-viales-20",
        "name": "Kit 3 viales (20%)",
        "price": 66.5,
        "weight": "Kit 3 viales (20%)",
        "format": "L-Carnitina 20% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-18-04",
        "image": "img/products/profit-pharma/18_MESO_Adipox.png"
      }
    ],
    "presentationsSummary": "1 vial (10%) • Kit 3 viales (10%) • 1 vial (20%) (+1)",
    "price": 25.9,
    "unit": "1 vial (10%)",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Mayor actividad con potente activador celular que combate la flacidez y transporta ácidos grasos.",
    "benefits": [
      "Línea Mesoterapia Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: L-Carnitina 10% | L-Carnitina 20%.",
      "Presentación disponible: 1 vial (10%) • Kit 3 viales (10%) • 1 vial (20%) (+1)."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "L-Carnitina 10% | L-Carnitina 20%",
    "faqs": [
      {
        "q": "¿El producto ADIPOX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: 1 vial (10%) • Kit 3 viales (10%) • 1 vial (20%) (+1)."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Mesoterapia",
      "Composición": "L-Carnitina 10% | L-Carnitina 20%",
      "Presentaciones": "1 vial (10%) • Kit 3 viales (10%) • 1 vial (20%) (+1)",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-silifit",
    "name": "SILIFIT — Profit Pharma",
    "shortName": "SILIFIT",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "mesoterapia",
    "subCategoryName": "Línea Mesoterapia",
    "badge": "Mesoterapia",
    "rating": 4.9,
    "reviewsCount": 24,
    "image": "img/products/profit-pharma/19_MESO_Silifit.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/19_MESO_Silifit.png",
    "hasVariants": true,
    "defaultVariant": "1-vial-5",
    "variants": [
      {
        "id": "1-vial-5",
        "name": "1 vial (5%)",
        "price": 25.9,
        "weight": "1 vial (5%)",
        "format": "Silicio orgánico 5% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-19-01",
        "image": "img/products/profit-pharma/19_MESO_Silifit.png"
      },
      {
        "id": "kit-3-viales-5",
        "name": "Kit 3 viales (5%)",
        "price": 52.9,
        "weight": "Kit 3 viales (5%)",
        "format": "Silicio orgánico 5% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-19-02",
        "image": "img/products/profit-pharma/19_MESO_Silifit.png"
      },
      {
        "id": "1-vial-10",
        "name": "1 vial (10%)",
        "price": 52.9,
        "weight": "1 vial (10%)",
        "format": "Silicio orgánico 10% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-19-03",
        "image": "img/products/profit-pharma/19_MESO_Silifit.png"
      },
      {
        "id": "kit-3-viales-10",
        "name": "Kit 3 viales (10%)",
        "price": 79.9,
        "weight": "Kit 3 viales (10%)",
        "format": "Silicio orgánico 10% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-19-04",
        "image": "img/products/profit-pharma/19_MESO_Silifit.png"
      }
    ],
    "presentationsSummary": "1 vial (5%) • Kit 3 viales (5%) • 1 vial (10%) (+1)",
    "price": 25.9,
    "unit": "1 vial (5%)",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Favorece la firmeza y elasticidad de la piel, complementando protocolos estéticos orientados al cuidado y mantenimiento de una piel más tersa y saludable.",
    "benefits": [
      "Línea Mesoterapia Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Silicio orgánico 5% | Silicio orgánico 10%.",
      "Presentación disponible: 1 vial (5%) • Kit 3 viales (5%) • 1 vial (10%) (+1)."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Silicio orgánico 5% | Silicio orgánico 10%",
    "faqs": [
      {
        "q": "¿El producto SILIFIT es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: 1 vial (5%) • Kit 3 viales (5%) • 1 vial (10%) (+1)."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Mesoterapia",
      "Composición": "Silicio orgánico 5% | Silicio orgánico 10%",
      "Presentaciones": "1 vial (5%) • Kit 3 viales (5%) • 1 vial (10%) (+1)",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-lipofit",
    "name": "LIPOFIT — Profit Pharma",
    "shortName": "LIPOFIT",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "mesoterapia",
    "subCategoryName": "Línea Mesoterapia",
    "badge": "Mesoterapia",
    "rating": 4.9,
    "reviewsCount": 25,
    "image": "img/products/profit-pharma/20_MESO_Lipofit.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/20_MESO_Lipofit.png",
    "hasVariants": false,
    "defaultVariant": "kit-3-viales-x-10ml",
    "variants": [
      {
        "id": "kit-3-viales-x-10ml",
        "name": "Kit 3 viales x 10ml",
        "price": 79.9,
        "weight": "Kit 3 viales x 10ml",
        "format": "Ampelopsina 7% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-20-01",
        "image": "img/products/profit-pharma/20_MESO_Lipofit.png"
      }
    ],
    "presentationsSummary": "Kit 3 viales x 10ml",
    "price": 79.9,
    "unit": "Kit 3 viales x 10ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Reductor activo de grasa localizada + Anticelulítico. Solución profesional de alto modelado corporal.",
    "benefits": [
      "Línea Mesoterapia Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Ampelopsina 7%.",
      "Presentación disponible: Kit 3 viales x 10ml."
    ],
    "howToUse": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
    "composition": "Ampelopsina 7%",
    "faqs": [
      {
        "q": "¿El producto LIPOFIT es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Kit 3 viales x 10ml."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Mesoterapia",
      "Composición": "Ampelopsina 7%",
      "Presentaciones": "Kit 3 viales x 10ml",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Uso profesional bajo protocolo de sueroterapia o medicina estética. Administrar según evaluación médica.",
      "warnings": [
        "Producto de uso profesional / supervisión médica especializada.",
        "No administrar en embarazo o lactancia sin autorización médica.",
        "Conservar en lugar fresco y protegido de la luz (< 25°C)."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-creatina",
    "name": "CREATINA — Profit Pharma",
    "shortName": "CREATINA",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "suplementos",
    "subCategoryName": "Línea Suplementos",
    "badge": "Suplementos",
    "rating": 4.9,
    "reviewsCount": 26,
    "image": "img/products/profit-pharma/21_SUP_Creatina.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/21_SUP_Creatina.png",
    "hasVariants": true,
    "defaultVariant": "pote-x-300gr",
    "variants": [
      {
        "id": "pote-x-300gr",
        "name": "Pote x 300gr",
        "price": 74.9,
        "weight": "Pote x 300gr",
        "format": "Creatina monohidratada 100% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-21-01",
        "image": "img/products/profit-pharma/21_SUP_Creatina.png"
      },
      {
        "id": "pote-x-500gr",
        "name": "Pote x 500gr",
        "price": 87.9,
        "weight": "Pote x 500gr",
        "format": "Creatina monohidratada 100% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-21-02",
        "image": "img/products/profit-pharma/21_SUP_Creatina.png"
      },
      {
        "id": "pote-x-1kg",
        "name": "Pote x 1kg",
        "price": 109.9,
        "weight": "Pote x 1kg",
        "format": "Creatina monohidratada 100% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-21-03",
        "image": "img/products/profit-pharma/21_SUP_Creatina.png"
      }
    ],
    "presentationsSummary": "Pote x 300gr • Pote x 500gr • Pote x 1kg",
    "price": 74.9,
    "unit": "Pote x 300gr",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Contribuye al rendimiento físico y al desarrollo de la fuerza y masa muscular. Ideal para complementar la recuperación y el entrenamiento deportivo.",
    "benefits": [
      "Línea Suplementos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Creatina monohidratada 100%.",
      "Presentación disponible: Pote x 300gr • Pote x 500gr • Pote x 1kg."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Creatina monohidratada 100%",
    "faqs": [
      {
        "q": "¿El producto CREATINA es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Pote x 300gr • Pote x 500gr • Pote x 1kg."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Suplementos",
      "Composición": "Creatina monohidratada 100%",
      "Presentaciones": "Pote x 300gr • Pote x 500gr • Pote x 1kg",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-queen-protein",
    "name": "QUEEN PROTEIN — Profit Pharma",
    "shortName": "QUEEN PROTEIN",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "suplementos",
    "subCategoryName": "Línea Suplementos",
    "badge": "Suplementos",
    "rating": 4.9,
    "reviewsCount": 27,
    "image": "img/products/profit-pharma/22_SUP_Queen_Protein.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/22_SUP_Queen_Protein.png",
    "hasVariants": true,
    "defaultVariant": "pote-x-300gr",
    "variants": [
      {
        "id": "pote-x-300gr",
        "name": "Pote x 300gr",
        "price": 66.5,
        "weight": "Pote x 300gr",
        "format": "Colágeno HDR 80%, Aguaje 20% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-22-01",
        "image": "img/products/profit-pharma/22_SUP_Queen_Protein.png"
      },
      {
        "id": "pote-x-500gr",
        "name": "Pote x 500gr",
        "price": 93.5,
        "weight": "Pote x 500gr",
        "format": "Colágeno HDR 80%, Aguaje 20% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-22-02",
        "image": "img/products/profit-pharma/22_SUP_Queen_Protein.png"
      },
      {
        "id": "pote-x-1kg",
        "name": "Pote x 1kg",
        "price": 120.5,
        "weight": "Pote x 1kg",
        "format": "Colágeno HDR 80%, Aguaje 20% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-22-03",
        "image": "img/products/profit-pharma/22_SUP_Queen_Protein.png"
      }
    ],
    "presentationsSummary": "Pote x 300gr • Pote x 500gr • Pote x 1kg",
    "price": 66.5,
    "unit": "Pote x 300gr",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Aporta colágeno y proteínas que contribuyen al cuidado de la piel, ayudando a mantener su firmeza y elasticidad.",
    "benefits": [
      "Línea Suplementos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Colágeno HDR 80%, Aguaje 20%.",
      "Presentación disponible: Pote x 300gr • Pote x 500gr • Pote x 1kg."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Colágeno HDR 80%, Aguaje 20%",
    "faqs": [
      {
        "q": "¿El producto QUEEN PROTEIN es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Pote x 300gr • Pote x 500gr • Pote x 1kg."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Suplementos",
      "Composición": "Colágeno HDR 80%, Aguaje 20%",
      "Presentaciones": "Pote x 300gr • Pote x 500gr • Pote x 1kg",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-whey-protein",
    "name": "WHEY PROTEIN — Profit Pharma",
    "shortName": "WHEY PROTEIN",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "suplementos",
    "subCategoryName": "Línea Suplementos",
    "badge": "Suplementos",
    "rating": 4.9,
    "reviewsCount": 28,
    "image": "img/products/profit-pharma/23_SUP_Whey_Protein.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/23_SUP_Whey_Protein.png",
    "hasVariants": true,
    "defaultVariant": "pote-x-500gr",
    "variants": [
      {
        "id": "pote-x-500gr",
        "name": "Pote x 500gr",
        "price": 84.9,
        "weight": "Pote x 500gr",
        "format": "Proteína de Suero de leche 80% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-23-01",
        "image": "img/products/profit-pharma/23_SUP_Whey_Protein.png"
      },
      {
        "id": "pote-x-1kg",
        "name": "Pote x 1kg",
        "price": 149.9,
        "weight": "Pote x 1kg",
        "format": "Proteína de Suero de leche 80% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-23-02",
        "image": "img/products/profit-pharma/23_SUP_Whey_Protein.png"
      }
    ],
    "presentationsSummary": "Pote x 500gr • Pote x 1kg",
    "price": 84.9,
    "unit": "Pote x 500gr",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Fuente de proteína de alta calidad que contribuye al mantenimiento y desarrollo de la masa muscular, ideal para complementar la alimentación y el entrenamiento.",
    "benefits": [
      "Línea Suplementos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Proteína de Suero de leche 80%.",
      "Presentación disponible: Pote x 500gr • Pote x 1kg."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Proteína de Suero de leche 80%",
    "faqs": [
      {
        "q": "¿El producto WHEY PROTEIN es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Pote x 500gr • Pote x 1kg."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Suplementos",
      "Composición": "Proteína de Suero de leche 80%",
      "Presentaciones": "Pote x 500gr • Pote x 1kg",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-vegan-protein",
    "name": "VEGAN PROTEIN — Profit Pharma",
    "shortName": "VEGAN PROTEIN",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "suplementos",
    "subCategoryName": "Línea Suplementos",
    "badge": "Suplementos",
    "rating": 4.9,
    "reviewsCount": 29,
    "image": "img/products/profit-pharma/24_SUP_Vegan_Protein.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/24_SUP_Vegan_Protein.png",
    "hasVariants": true,
    "defaultVariant": "pote-x-500gr",
    "variants": [
      {
        "id": "pote-x-500gr",
        "name": "Pote x 500gr",
        "price": 66.5,
        "weight": "Pote x 500gr",
        "format": "Proteína de Soya Vegetal 100% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-24-01",
        "image": "img/products/profit-pharma/24_SUP_Vegan_Protein.png"
      },
      {
        "id": "pote-x-1kg",
        "name": "Pote x 1kg",
        "price": 79.9,
        "weight": "Pote x 1kg",
        "format": "Proteína de Soya Vegetal 100% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-24-02",
        "image": "img/products/profit-pharma/24_SUP_Vegan_Protein.png"
      }
    ],
    "presentationsSummary": "Pote x 500gr • Pote x 1kg",
    "price": 66.5,
    "unit": "Pote x 500gr",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Fuente de proteína vegetal que contribuye al mantenimiento y desarrollo de la masa muscular. Ideal para complementar la alimentación y los requerimientos proteicos diarios.",
    "benefits": [
      "Línea Suplementos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Proteína de Soya Vegetal 100%.",
      "Presentación disponible: Pote x 500gr • Pote x 1kg."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Proteína de Soya Vegetal 100%",
    "faqs": [
      {
        "q": "¿El producto VEGAN PROTEIN es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Pote x 500gr • Pote x 1kg."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Suplementos",
      "Composición": "Proteína de Soya Vegetal 100%",
      "Presentaciones": "Pote x 500gr • Pote x 1kg",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-lipolageno",
    "name": "LIPOLÁGENO — Profit Pharma",
    "shortName": "LIPOLÁGENO",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "suplementos",
    "subCategoryName": "Línea Suplementos",
    "badge": "Suplementos",
    "rating": 4.9,
    "reviewsCount": 30,
    "image": "img/products/profit-pharma/25_SUP_Lipolageno.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/25_SUP_Lipolageno.png",
    "hasVariants": true,
    "defaultVariant": "pote-x-300gr",
    "variants": [
      {
        "id": "pote-x-300gr",
        "name": "Pote x 300gr",
        "price": 93.5,
        "weight": "Pote x 300gr",
        "format": "L-Carnitina 5g, Colágeno 235g, Alfa Lipoico 5g, Vitamina C 5g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-25-01",
        "image": "img/products/profit-pharma/25_SUP_Lipolageno.png"
      },
      {
        "id": "pote-x-500gr",
        "name": "Pote x 500gr",
        "price": 120.5,
        "weight": "Pote x 500gr",
        "format": "L-Carnitina 5g, Colágeno 235g, Alfa Lipoico 5g, Vitamina C 5g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-25-02",
        "image": "img/products/profit-pharma/25_SUP_Lipolageno.png"
      },
      {
        "id": "pote-x-1kg",
        "name": "Pote x 1kg",
        "price": 174.5,
        "weight": "Pote x 1kg",
        "format": "L-Carnitina 5g, Colágeno 235g, Alfa Lipoico 5g, Vitamina C 5g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-25-03",
        "image": "img/products/profit-pharma/25_SUP_Lipolageno.png"
      }
    ],
    "presentationsSummary": "Pote x 300gr • Pote x 500gr • Pote x 1kg",
    "price": 93.5,
    "unit": "Pote x 300gr",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Fórmula que contribuye al cuidado de la piel y el tejido conectivo, al mantenimiento de las articulaciones y al metabolismo energético.",
    "benefits": [
      "Línea Suplementos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: L-Carnitina 5g, Colágeno 235g, Alfa Lipoico 5g, Vitamina C 5g.",
      "Presentación disponible: Pote x 300gr • Pote x 500gr • Pote x 1kg."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "L-Carnitina 5g, Colágeno 235g, Alfa Lipoico 5g, Vitamina C 5g",
    "faqs": [
      {
        "q": "¿El producto LIPOLÁGENO es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Pote x 300gr • Pote x 500gr • Pote x 1kg."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Suplementos",
      "Composición": "L-Carnitina 5g, Colágeno 235g, Alfa Lipoico 5g, Vitamina C 5g",
      "Presentaciones": "Pote x 300gr • Pote x 500gr • Pote x 1kg",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-colagemax",
    "name": "COLAGEMAX — Profit Pharma",
    "shortName": "COLAGEMAX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "suplementos",
    "subCategoryName": "Línea Suplementos",
    "badge": "Suplementos",
    "rating": 4.9,
    "reviewsCount": 31,
    "image": "img/products/profit-pharma/26_SUP_Colagemax.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/26_SUP_Colagemax.png",
    "hasVariants": true,
    "defaultVariant": "pote-x-300gr",
    "variants": [
      {
        "id": "pote-x-300gr",
        "name": "Pote x 300gr",
        "price": 60.9,
        "weight": "Pote x 300gr",
        "format": "Condroitina 285g, Glucosamina 6g, Colágeno HDR 6g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-26-01",
        "image": "img/products/profit-pharma/26_SUP_Colagemax.png"
      },
      {
        "id": "pote-x-500gr",
        "name": "Pote x 500gr",
        "price": 79.9,
        "weight": "Pote x 500gr",
        "format": "Condroitina 285g, Glucosamina 6g, Colágeno HDR 6g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-26-02",
        "image": "img/products/profit-pharma/26_SUP_Colagemax.png"
      },
      {
        "id": "pote-x-1kg",
        "name": "Pote x 1kg",
        "price": 106.9,
        "weight": "Pote x 1kg",
        "format": "Condroitina 285g, Glucosamina 6g, Colágeno HDR 6g • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-26-03",
        "image": "img/products/profit-pharma/26_SUP_Colagemax.png"
      }
    ],
    "presentationsSummary": "Pote x 300gr • Pote x 500gr • Pote x 1kg",
    "price": 60.9,
    "unit": "Pote x 300gr",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Favorece el mantenimiento del tejido conectivo y cartílago.",
    "benefits": [
      "Línea Suplementos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Condroitina 285g, Glucosamina 6g, Colágeno HDR 6g.",
      "Presentación disponible: Pote x 300gr • Pote x 500gr • Pote x 1kg."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Condroitina 285g, Glucosamina 6g, Colágeno HDR 6g",
    "faqs": [
      {
        "q": "¿El producto COLAGEMAX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Pote x 300gr • Pote x 500gr • Pote x 1kg."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Suplementos",
      "Composición": "Condroitina 285g, Glucosamina 6g, Colágeno HDR 6g",
      "Presentaciones": "Pote x 300gr • Pote x 500gr • Pote x 1kg",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-colagen-pro",
    "name": "COLAGEN PRO — Profit Pharma",
    "shortName": "COLAGEN PRO",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "suplementos",
    "subCategoryName": "Línea Suplementos",
    "badge": "Suplementos",
    "rating": 4.9,
    "reviewsCount": 32,
    "image": "img/products/profit-pharma/27_SUP_Colagen_Pro.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/27_SUP_Colagen_Pro.png",
    "hasVariants": true,
    "defaultVariant": "pote-x-300gr",
    "variants": [
      {
        "id": "pote-x-300gr",
        "name": "Pote x 300gr",
        "price": 52.9,
        "weight": "Pote x 300gr",
        "format": "Colágeno hidrolizado 100% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-27-01",
        "image": "img/products/profit-pharma/27_SUP_Colagen_Pro.png"
      },
      {
        "id": "pote-x-500gr",
        "name": "Pote x 500gr",
        "price": 66.5,
        "weight": "Pote x 500gr",
        "format": "Colágeno hidrolizado 100% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-27-02",
        "image": "img/products/profit-pharma/27_SUP_Colagen_Pro.png"
      },
      {
        "id": "pote-x-1kg",
        "name": "Pote x 1kg",
        "price": 94.9,
        "weight": "Pote x 1kg",
        "format": "Colágeno hidrolizado 100% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-27-03",
        "image": "img/products/profit-pharma/27_SUP_Colagen_Pro.png"
      }
    ],
    "presentationsSummary": "Pote x 300gr • Pote x 500gr • Pote x 1kg",
    "price": 52.9,
    "unit": "Pote x 300gr",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Estimula el colágeno en la piel y cabello. Fortalece huesos y articulaciones.",
    "benefits": [
      "Línea Suplementos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Colágeno hidrolizado 100%.",
      "Presentación disponible: Pote x 300gr • Pote x 500gr • Pote x 1kg."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Colágeno hidrolizado 100%",
    "faqs": [
      {
        "q": "¿El producto COLAGEN PRO es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Pote x 300gr • Pote x 500gr • Pote x 1kg."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Suplementos",
      "Composición": "Colágeno hidrolizado 100%",
      "Presentaciones": "Pote x 300gr • Pote x 500gr • Pote x 1kg",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-pack-profit-flex",
    "name": "PACK PROFIT FLEX — Profit Pharma",
    "shortName": "PACK PROFIT FLEX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "suplementos",
    "subCategoryName": "Línea Suplementos",
    "badge": "Suplementos",
    "rating": 4.9,
    "reviewsCount": 33,
    "image": "img/products/profit-pharma/28_SUP_Pack_Profit_Flex.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/28_SUP_Pack_Profit_Flex.png",
    "hasVariants": false,
    "defaultVariant": "2-potes-1-de-1kg-1-de-300g",
    "variants": [
      {
        "id": "2-potes-1-de-1kg-1-de-300g",
        "name": "2 potes: 1 de 1kg + 1 de 300g",
        "price": 133.9,
        "weight": "2 potes: 1 de 1kg + 1 de 300g",
        "format": "Colágeno HDR 100% + Creatina 100% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-28-01",
        "image": "img/products/profit-pharma/28_SUP_Pack_Profit_Flex.png"
      }
    ],
    "presentationsSummary": "2 potes: 1 de 1kg + 1 de 300g",
    "price": 133.9,
    "unit": "2 potes: 1 de 1kg + 1 de 300g",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Colágeno para el cuidado de la piel y articulaciones, creatina para potenciar tu energía y rendimiento físico.",
    "benefits": [
      "Línea Suplementos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Colágeno HDR 100% + Creatina 100%.",
      "Presentación disponible: 2 potes: 1 de 1kg + 1 de 300g."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Colágeno HDR 100% + Creatina 100%",
    "faqs": [
      {
        "q": "¿El producto PACK PROFIT FLEX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: 2 potes: 1 de 1kg + 1 de 300g."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Suplementos",
      "Composición": "Colágeno HDR 100% + Creatina 100%",
      "Presentaciones": "2 potes: 1 de 1kg + 1 de 300g",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-pack-profit-pro",
    "name": "PACK PROFIT PRO — Profit Pharma",
    "shortName": "PACK PROFIT PRO",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "suplementos",
    "subCategoryName": "Línea Suplementos",
    "badge": "Suplementos",
    "rating": 4.9,
    "reviewsCount": 34,
    "image": "img/products/profit-pharma/29_SUP_Pack_Profit_Pro.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/29_SUP_Pack_Profit_Pro.png",
    "hasVariants": false,
    "defaultVariant": "2-potes-1-de-1kg-1-de-300g",
    "variants": [
      {
        "id": "2-potes-1-de-1kg-1-de-300g",
        "name": "2 potes: 1 de 1kg + 1 de 300g",
        "price": 174.5,
        "weight": "2 potes: 1 de 1kg + 1 de 300g",
        "format": "Whey Protein 80% + Creatina 100% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-29-01",
        "image": "img/products/profit-pharma/29_SUP_Pack_Profit_Pro.png"
      }
    ],
    "presentationsSummary": "2 potes: 1 de 1kg + 1 de 300g",
    "price": 174.5,
    "unit": "2 potes: 1 de 1kg + 1 de 300g",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Combina proteína de alta calidad con creatina para apoyar el crecimiento muscular.",
    "benefits": [
      "Línea Suplementos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Whey Protein 80% + Creatina 100%.",
      "Presentación disponible: 2 potes: 1 de 1kg + 1 de 300g."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Whey Protein 80% + Creatina 100%",
    "faqs": [
      {
        "q": "¿El producto PACK PROFIT PRO es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: 2 potes: 1 de 1kg + 1 de 300g."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Suplementos",
      "Composición": "Whey Protein 80% + Creatina 100%",
      "Presentaciones": "2 potes: 1 de 1kg + 1 de 300g",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-pack-profit-green",
    "name": "PACK PROFIT GREEN — Profit Pharma",
    "shortName": "PACK PROFIT GREEN",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "suplementos",
    "subCategoryName": "Línea Suplementos",
    "badge": "Suplementos",
    "rating": 4.9,
    "reviewsCount": 35,
    "image": "img/products/profit-pharma/30_SUP_Pack_Profit_Green.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/30_SUP_Pack_Profit_Green.png",
    "hasVariants": false,
    "defaultVariant": "2-potes-1-de-1kg-1-de-300g",
    "variants": [
      {
        "id": "2-potes-1-de-1kg-1-de-300g",
        "name": "2 potes: 1 de 1kg + 1 de 300g",
        "price": 133.9,
        "weight": "2 potes: 1 de 1kg + 1 de 300g",
        "format": "Proteína vegetal 100% + Creatina 100% • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-30-01",
        "image": "img/products/profit-pharma/30_SUP_Pack_Profit_Green.png"
      }
    ],
    "presentationsSummary": "2 potes: 1 de 1kg + 1 de 300g",
    "price": 133.9,
    "unit": "2 potes: 1 de 1kg + 1 de 300g",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Apoya tu rendimiento, recuperación y objetivos fitness de manera equilibrada.",
    "benefits": [
      "Línea Suplementos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Proteína vegetal 100% + Creatina 100%.",
      "Presentación disponible: 2 potes: 1 de 1kg + 1 de 300g."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Proteína vegetal 100% + Creatina 100%",
    "faqs": [
      {
        "q": "¿El producto PACK PROFIT GREEN es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: 2 potes: 1 de 1kg + 1 de 300g."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Suplementos",
      "Composición": "Proteína vegetal 100% + Creatina 100%",
      "Presentaciones": "2 potes: 1 de 1kg + 1 de 300g",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-alfamax",
    "name": "ALFAMAX — Profit Pharma",
    "shortName": "ALFAMAX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "capsulas",
    "subCategoryName": "Línea Cápsulas",
    "badge": "Cápsulas",
    "rating": 4.9,
    "reviewsCount": 36,
    "image": "img/products/profit-pharma/31_CAPS_Alfamax.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/31_CAPS_Alfamax.png",
    "hasVariants": true,
    "defaultVariant": "frasco-x-30-capsulas-5mg-250mg",
    "variants": [
      {
        "id": "frasco-x-30-capsulas-5mg-250mg",
        "name": "Frasco x 30 cápsulas (5mg / 250mg)",
        "price": 79.9,
        "weight": "Frasco x 30 cápsulas (5mg / 250mg)",
        "format": "Tadalafilo 5mg, Arginina 250mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-31-01",
        "image": "img/products/profit-pharma/31_CAPS_Alfamax.png"
      },
      {
        "id": "frasco-x-60-capsulas-5mg-250mg",
        "name": "Frasco x 60 cápsulas (5mg / 250mg)",
        "price": 106.9,
        "weight": "Frasco x 60 cápsulas (5mg / 250mg)",
        "format": "Tadalafilo 5mg, Arginina 250mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-31-02",
        "image": "img/products/profit-pharma/31_CAPS_Alfamax.png"
      },
      {
        "id": "frasco-x-30-capsulas-10mg-400mg",
        "name": "Frasco x 30 cápsulas (10mg / 400mg)",
        "price": 93.5,
        "weight": "Frasco x 30 cápsulas (10mg / 400mg)",
        "format": "Tadalafilo 10mg, Arginina 400mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-31-03",
        "image": "img/products/profit-pharma/31_CAPS_Alfamax.png"
      },
      {
        "id": "frasco-x-60-capsulas-10mg-400mg",
        "name": "Frasco x 60 cápsulas (10mg / 400mg)",
        "price": 120.5,
        "weight": "Frasco x 60 cápsulas (10mg / 400mg)",
        "format": "Tadalafilo 10mg, Arginina 400mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-31-04",
        "image": "img/products/profit-pharma/31_CAPS_Alfamax.png"
      }
    ],
    "presentationsSummary": "Frasco x 30 cápsulas (5mg / 250mg) • Frasco x 60 cápsulas (5mg / 250mg) • Frasco x 30 cápsulas (10mg / 400mg) (+1)",
    "price": 79.9,
    "unit": "Frasco x 30 cápsulas (5mg / 250mg)",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Suplemento con potente refuerzo para el sistema circulatorio, enfocándose en la salud sexual y el rendimiento físico.",
    "benefits": [
      "Línea Cápsulas Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Tadalafilo 5mg, Arginina 250mg | Tadalafilo 10mg, Arginina 400mg.",
      "Presentación disponible: Frasco x 30 cápsulas (5mg / 250mg) • Frasco x 60 cápsulas (5mg / 250mg) • Frasco x 30 cápsulas (10mg / 400mg) (+1)."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Tadalafilo 5mg, Arginina 250mg | Tadalafilo 10mg, Arginina 400mg",
    "faqs": [
      {
        "q": "¿El producto ALFAMAX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Frasco x 30 cápsulas (5mg / 250mg) • Frasco x 60 cápsulas (5mg / 250mg) • Frasco x 30 cápsulas (10mg / 400mg) (+1)."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Cápsulas",
      "Composición": "Tadalafilo 5mg, Arginina 250mg | Tadalafilo 10mg, Arginina 400mg",
      "Presentaciones": "Frasco x 30 cápsulas (5mg / 250mg) • Frasco x 60 cápsulas (5mg / 250mg) • Frasco x 30 cápsulas (10mg / 400mg) (+1)",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-citrato-de-magnesio",
    "name": "CITRATO DE MAGNESIO — Profit Pharma",
    "shortName": "CITRATO DE MAGNESIO",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "capsulas",
    "subCategoryName": "Línea Cápsulas",
    "badge": "Cápsulas",
    "rating": 4.9,
    "reviewsCount": 37,
    "image": "img/products/profit-pharma/32_CAPS_Citrato_Magnesio.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/32_CAPS_Citrato_Magnesio.png",
    "hasVariants": false,
    "defaultVariant": "frasco-x-60-capsulas",
    "variants": [
      {
        "id": "frasco-x-60-capsulas",
        "name": "Frasco x 60 cápsulas",
        "price": 81.5,
        "weight": "Frasco x 60 cápsulas",
        "format": "Citrato de Magnesio 500mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-32-01",
        "image": "img/products/profit-pharma/32_CAPS_Citrato_Magnesio.png"
      }
    ],
    "presentationsSummary": "Frasco x 60 cápsulas",
    "price": 81.5,
    "unit": "Frasco x 60 cápsulas",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Ayuda a mantener el equilibrio electrolítico. Favorece la función muscular y nerviosa normal. Además contribuye a la salud ósea y al metabolismo energético.",
    "benefits": [
      "Línea Cápsulas Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Citrato de Magnesio 500mg.",
      "Presentación disponible: Frasco x 60 cápsulas."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Citrato de Magnesio 500mg",
    "faqs": [
      {
        "q": "¿El producto CITRATO DE MAGNESIO es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Frasco x 60 cápsulas."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Cápsulas",
      "Composición": "Citrato de Magnesio 500mg",
      "Presentaciones": "Frasco x 60 cápsulas",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-omega-3",
    "name": "OMEGA 3 — Profit Pharma",
    "shortName": "OMEGA 3",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "capsulas",
    "subCategoryName": "Línea Cápsulas",
    "badge": "Cápsulas",
    "rating": 4.9,
    "reviewsCount": 38,
    "image": "img/products/profit-pharma/33_CAPS_Omega_3.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/33_CAPS_Omega_3.png",
    "hasVariants": false,
    "defaultVariant": "frasco-x-60-capsulas",
    "variants": [
      {
        "id": "frasco-x-60-capsulas",
        "name": "Frasco x 60 cápsulas",
        "price": 66.5,
        "weight": "Frasco x 60 cápsulas",
        "format": "Ác. Eicosapentaenoico 1050mg, Ác. Docosahexaenoico 750mg, Vitamina E 15.09mg, Aceite de pescado 3000mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-33-01",
        "image": "img/products/profit-pharma/33_CAPS_Omega_3.png"
      }
    ],
    "presentationsSummary": "Frasco x 60 cápsulas",
    "price": 66.5,
    "unit": "Frasco x 60 cápsulas",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Ayuda a mantener la salud cardiovascular, la función cerebral y la visión.",
    "benefits": [
      "Línea Cápsulas Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Ác. Eicosapentaenoico 1050mg, Ác. Docosahexaenoico 750mg, Vitamina E 15.09mg, Aceite de pescado 3000mg.",
      "Presentación disponible: Frasco x 60 cápsulas."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Ác. Eicosapentaenoico 1050mg, Ác. Docosahexaenoico 750mg, Vitamina E 15.09mg, Aceite de pescado 3000mg",
    "faqs": [
      {
        "q": "¿El producto OMEGA 3 es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Frasco x 60 cápsulas."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Cápsulas",
      "Composición": "Ác. Eicosapentaenoico 1050mg, Ác. Docosahexaenoico 750mg, Vitamina E 15.09mg, Aceite de pescado 3000mg",
      "Presentaciones": "Frasco x 60 cápsulas",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-vigormax",
    "name": "VIGORMAX — Profit Pharma",
    "shortName": "VIGORMAX",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "capsulas",
    "subCategoryName": "Línea Cápsulas",
    "badge": "Cápsulas",
    "rating": 4.9,
    "reviewsCount": 39,
    "image": "img/products/profit-pharma/34_CAPS_Vigormax.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/34_CAPS_Vigormax.png",
    "hasVariants": true,
    "defaultVariant": "frasco-x-30-capsulas",
    "variants": [
      {
        "id": "frasco-x-30-capsulas",
        "name": "Frasco x 30 cápsulas",
        "price": 79.9,
        "weight": "Frasco x 30 cápsulas",
        "format": "Maca negra 500mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-34-01",
        "image": "img/products/profit-pharma/34_CAPS_Vigormax.png"
      },
      {
        "id": "frasco-x-60-capsulas",
        "name": "Frasco x 60 cápsulas",
        "price": 106.9,
        "weight": "Frasco x 60 cápsulas",
        "format": "Maca negra 500mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-34-02",
        "image": "img/products/profit-pharma/34_CAPS_Vigormax.png"
      }
    ],
    "presentationsSummary": "Frasco x 30 cápsulas • Frasco x 60 cápsulas",
    "price": 79.9,
    "unit": "Frasco x 30 cápsulas",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Suplemento de potente energizante natural y adaptógeno que ayuda al cuerpo a manejar el estrés físico y mental.",
    "benefits": [
      "Línea Cápsulas Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Maca negra 500mg.",
      "Presentación disponible: Frasco x 30 cápsulas • Frasco x 60 cápsulas."
    ],
    "howToUse": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
    "composition": "Maca negra 500mg",
    "faqs": [
      {
        "q": "¿El producto VIGORMAX es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Frasco x 30 cápsulas • Frasco x 60 cápsulas."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Cápsulas",
      "Composición": "Maca negra 500mg",
      "Presentaciones": "Frasco x 30 cápsulas • Frasco x 60 cápsulas",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Consumir según la porción recomendada en el envase, acompañado de agua o bebida de preferencia.",
      "warnings": [
        "No superar la dosis diaria recomendada.",
        "Complemento nutricional; no sustituye una alimentación equilibrada.",
        "Conservar en lugar fresco y seco con el envase bien cerrado."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-clembuterolmax-drops",
    "name": "CLEMBUTEROLMAX DROPS — Profit Pharma",
    "shortName": "CLEMBUTEROLMAX DROPS",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "anabolicos",
    "subCategoryName": "Línea Anabólicos",
    "badge": "Anabólicos",
    "rating": 4.9,
    "reviewsCount": 40,
    "image": "img/products/profit-pharma/35_ANAB_Clembuterolmax_Drops.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/35_ANAB_Clembuterolmax_Drops.png",
    "hasVariants": true,
    "defaultVariant": "drops-x-30ml",
    "variants": [
      {
        "id": "drops-x-30ml",
        "name": "Drops x 30ml",
        "price": 133.9,
        "weight": "Drops x 30ml",
        "format": "Clembuterol 20mcg (*por cada 20 gotas*) • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-35-01",
        "image": "img/products/profit-pharma/35_ANAB_Clembuterolmax_Drops.png"
      },
      {
        "id": "frasco-x-30-capsulas",
        "name": "Frasco x 30 cápsulas",
        "price": 93.5,
        "weight": "Frasco x 30 cápsulas",
        "format": "Clembuterol (Cápsulas) • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-35-02",
        "image": "img/products/profit-pharma/35_ANAB_Clembuterolmax_Drops.png"
      },
      {
        "id": "frasco-x-60-capsulas",
        "name": "Frasco x 60 cápsulas",
        "price": 133.9,
        "weight": "Frasco x 60 cápsulas",
        "format": "Clembuterol (Cápsulas) • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-35-03",
        "image": "img/products/profit-pharma/35_ANAB_Clembuterolmax_Drops.png"
      }
    ],
    "presentationsSummary": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
    "price": 93.5,
    "unit": "Drops x 30ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Ayuda a disminuir la retención de líquidos en el cuerpo.",
    "benefits": [
      "Línea Anabólicos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Clembuterol 20mcg (*por cada 20 gotas*) | Clembuterol (Cápsulas).",
      "Presentación disponible: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
    ],
    "howToUse": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
    "composition": "Clembuterol 20mcg (*por cada 20 gotas*) | Clembuterol (Cápsulas)",
    "faqs": [
      {
        "q": "¿El producto CLEMBUTEROLMAX DROPS es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Anabólicos",
      "Composición": "Clembuterol 20mcg (*por cada 20 gotas*) | Clembuterol (Cápsulas)",
      "Presentaciones": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
      "warnings": [
        "Producto dirigido exclusivamente a adultos mayores de 18 años.",
        "Se recomienda seguimiento profesional y control médico periódico.",
        "Mantener fuera del alcance de los niños."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-cardarinemax-drops",
    "name": "CARDARINEMAX DROPS — Profit Pharma",
    "shortName": "CARDARINEMAX DROPS",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "anabolicos",
    "subCategoryName": "Línea Anabólicos",
    "badge": "Anabólicos",
    "rating": 4.9,
    "reviewsCount": 41,
    "image": "img/products/profit-pharma/36_ANAB_Cardarinemax_Drops.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/36_ANAB_Cardarinemax_Drops.png",
    "hasVariants": true,
    "defaultVariant": "drops-x-30ml",
    "variants": [
      {
        "id": "drops-x-30ml",
        "name": "Drops x 30ml",
        "price": 268.9,
        "weight": "Drops x 30ml",
        "format": "Cardarine 20mg (*por cada 20 gotas*) • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-36-01",
        "image": "img/products/profit-pharma/36_ANAB_Cardarinemax_Drops.png"
      },
      {
        "id": "frasco-x-30-capsulas",
        "name": "Frasco x 30 cápsulas",
        "price": 160.9,
        "weight": "Frasco x 30 cápsulas",
        "format": "Cardarine 10mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-36-02",
        "image": "img/products/profit-pharma/36_ANAB_Cardarinemax_Drops.png"
      },
      {
        "id": "frasco-x-60-capsulas",
        "name": "Frasco x 60 cápsulas",
        "price": 268.9,
        "weight": "Frasco x 60 cápsulas",
        "format": "Cardarine 10mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-36-03",
        "image": "img/products/profit-pharma/36_ANAB_Cardarinemax_Drops.png"
      }
    ],
    "presentationsSummary": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
    "price": 160.9,
    "unit": "Drops x 30ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Potencia la energía y la resistencia, optimizando el rendimiento.",
    "benefits": [
      "Línea Anabólicos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Cardarine 20mg (*por cada 20 gotas*) | Cardarine 10mg.",
      "Presentación disponible: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
    ],
    "howToUse": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
    "composition": "Cardarine 20mg (*por cada 20 gotas*) | Cardarine 10mg",
    "faqs": [
      {
        "q": "¿El producto CARDARINEMAX DROPS es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Anabólicos",
      "Composición": "Cardarine 20mg (*por cada 20 gotas*) | Cardarine 10mg",
      "Presentaciones": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
      "warnings": [
        "Producto dirigido exclusivamente a adultos mayores de 18 años.",
        "Se recomienda seguimiento profesional y control médico periódico.",
        "Mantener fuera del alcance de los niños."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-ostarinemax-drops",
    "name": "OSTARINEMAX DROPS — Profit Pharma",
    "shortName": "OSTARINEMAX DROPS",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "anabolicos",
    "subCategoryName": "Línea Anabólicos",
    "badge": "Anabólicos",
    "rating": 4.9,
    "reviewsCount": 42,
    "image": "img/products/profit-pharma/37_ANAB_Ostarinemax_Drops.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/37_ANAB_Ostarinemax_Drops.png",
    "hasVariants": true,
    "defaultVariant": "drops-x-30ml",
    "variants": [
      {
        "id": "drops-x-30ml",
        "name": "Drops x 30ml",
        "price": 268.9,
        "weight": "Drops x 30ml",
        "format": "Ostarine 20mg (*por cada 20 gotas*) • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-37-01",
        "image": "img/products/profit-pharma/37_ANAB_Ostarinemax_Drops.png"
      },
      {
        "id": "frasco-x-30-capsulas",
        "name": "Frasco x 30 cápsulas",
        "price": 160.9,
        "weight": "Frasco x 30 cápsulas",
        "format": "Ostarine 10mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-37-02",
        "image": "img/products/profit-pharma/37_ANAB_Ostarinemax_Drops.png"
      },
      {
        "id": "frasco-x-60-capsulas",
        "name": "Frasco x 60 cápsulas",
        "price": 268.9,
        "weight": "Frasco x 60 cápsulas",
        "format": "Ostarine 10mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-37-03",
        "image": "img/products/profit-pharma/37_ANAB_Ostarinemax_Drops.png"
      }
    ],
    "presentationsSummary": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
    "price": 160.9,
    "unit": "Drops x 30ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Favorece el aumento de la masa muscular y al rendimiento.",
    "benefits": [
      "Línea Anabólicos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Ostarine 20mg (*por cada 20 gotas*) | Ostarine 10mg.",
      "Presentación disponible: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
    ],
    "howToUse": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
    "composition": "Ostarine 20mg (*por cada 20 gotas*) | Ostarine 10mg",
    "faqs": [
      {
        "q": "¿El producto OSTARINEMAX DROPS es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Anabólicos",
      "Composición": "Ostarine 20mg (*por cada 20 gotas*) | Ostarine 10mg",
      "Presentaciones": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
      "warnings": [
        "Producto dirigido exclusivamente a adultos mayores de 18 años.",
        "Se recomienda seguimiento profesional y control médico periódico.",
        "Mantener fuera del alcance de los niños."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-stanabolmax-drops",
    "name": "STANABOLMAX DROPS — Profit Pharma",
    "shortName": "STANABOLMAX DROPS",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "anabolicos",
    "subCategoryName": "Línea Anabólicos",
    "badge": "Anabólicos",
    "rating": 4.9,
    "reviewsCount": 24,
    "image": "img/products/profit-pharma/38_ANAB_Stanabolmax_Drops.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/38_ANAB_Stanabolmax_Drops.png",
    "hasVariants": true,
    "defaultVariant": "drops-x-30ml",
    "variants": [
      {
        "id": "drops-x-30ml",
        "name": "Drops x 30ml",
        "price": 268.9,
        "weight": "Drops x 30ml",
        "format": "Estanozolol 20mg (*por cada 20 gotas*) • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-38-01",
        "image": "img/products/profit-pharma/38_ANAB_Stanabolmax_Drops.png"
      },
      {
        "id": "frasco-x-30-capsulas",
        "name": "Frasco x 30 cápsulas",
        "price": 160.9,
        "weight": "Frasco x 30 cápsulas",
        "format": "Estanozolol 10mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-38-02",
        "image": "img/products/profit-pharma/38_ANAB_Stanabolmax_Drops.png"
      },
      {
        "id": "frasco-x-60-capsulas",
        "name": "Frasco x 60 cápsulas",
        "price": 268.9,
        "weight": "Frasco x 60 cápsulas",
        "format": "Estanozolol 10mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-38-03",
        "image": "img/products/profit-pharma/38_ANAB_Stanabolmax_Drops.png"
      }
    ],
    "presentationsSummary": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
    "price": 160.9,
    "unit": "Drops x 30ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Contribuye a mantener masa muscular y mejorar el desempeño deportivo.",
    "benefits": [
      "Línea Anabólicos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Estanozolol 20mg (*por cada 20 gotas*) | Estanozolol 10mg.",
      "Presentación disponible: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
    ],
    "howToUse": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
    "composition": "Estanozolol 20mg (*por cada 20 gotas*) | Estanozolol 10mg",
    "faqs": [
      {
        "q": "¿El producto STANABOLMAX DROPS es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Anabólicos",
      "Composición": "Estanozolol 20mg (*por cada 20 gotas*) | Estanozolol 10mg",
      "Presentaciones": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
      "warnings": [
        "Producto dirigido exclusivamente a adultos mayores de 18 años.",
        "Se recomienda seguimiento profesional y control médico periódico.",
        "Mantener fuera del alcance de los niños."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-musclemax-drops",
    "name": "MUSCLEMAX DROPS — Profit Pharma",
    "shortName": "MUSCLEMAX DROPS",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "anabolicos",
    "subCategoryName": "Línea Anabólicos",
    "badge": "Anabólicos",
    "rating": 4.9,
    "reviewsCount": 25,
    "image": "img/products/profit-pharma/39_ANAB_Musclemax_Drops.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/39_ANAB_Musclemax_Drops.png",
    "hasVariants": true,
    "defaultVariant": "drops-x-30ml",
    "variants": [
      {
        "id": "drops-x-30ml",
        "name": "Drops x 30ml",
        "price": 93.5,
        "weight": "Drops x 30ml",
        "format": "Tribulus Terrestris 20mg (*por cada 20 gotas*) • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-39-01",
        "image": "img/products/profit-pharma/39_ANAB_Musclemax_Drops.png"
      },
      {
        "id": "frasco-x-30-capsulas",
        "name": "Frasco x 30 cápsulas",
        "price": 66.5,
        "weight": "Frasco x 30 cápsulas",
        "format": "Tribulus Terrestris 700mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-39-02",
        "image": "img/products/profit-pharma/39_ANAB_Musclemax_Drops.png"
      },
      {
        "id": "frasco-x-60-capsulas",
        "name": "Frasco x 60 cápsulas",
        "price": 93.5,
        "weight": "Frasco x 60 cápsulas",
        "format": "Tribulus Terrestris 700mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-39-03",
        "image": "img/products/profit-pharma/39_ANAB_Musclemax_Drops.png"
      }
    ],
    "presentationsSummary": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
    "price": 66.5,
    "unit": "Drops x 30ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Potencia la energía y la resistencia, optimizando el rendimiento.",
    "benefits": [
      "Línea Anabólicos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Tribulus Terrestris 20mg (*por cada 20 gotas*) | Tribulus Terrestris 700mg.",
      "Presentación disponible: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
    ],
    "howToUse": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
    "composition": "Tribulus Terrestris 20mg (*por cada 20 gotas*) | Tribulus Terrestris 700mg",
    "faqs": [
      {
        "q": "¿El producto MUSCLEMAX DROPS es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Anabólicos",
      "Composición": "Tribulus Terrestris 20mg (*por cada 20 gotas*) | Tribulus Terrestris 700mg",
      "Presentaciones": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
      "warnings": [
        "Producto dirigido exclusivamente a adultos mayores de 18 años.",
        "Se recomienda seguimiento profesional y control médico periódico.",
        "Mantener fuera del alcance de los niños."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  },
  {
    "id": "profit-oxandrolonomax-drops",
    "name": "OXANDROLONOMAX DROPS — Profit Pharma",
    "shortName": "OXANDROLONOMAX DROPS",
    "category": "distribuidor-autorizado",
    "categoryName": "Distribuidor Autorizado • Profit Pharma",
    "subCategory": "anabolicos",
    "subCategoryName": "Línea Anabólicos",
    "badge": "Anabólicos",
    "rating": 4.9,
    "reviewsCount": 26,
    "image": "img/products/profit-pharma/40_ANAB_Oxandrolonomax_Drops.png",
    "presentationSheet": "img/products/profit-pharma/presentaciones/40_ANAB_Oxandrolonomax_Drops.png",
    "hasVariants": true,
    "defaultVariant": "drops-x-30ml",
    "variants": [
      {
        "id": "drops-x-30ml",
        "name": "Drops x 30ml",
        "price": 268.9,
        "weight": "Drops x 30ml",
        "format": "Oxandrolona 20mg (*por cada 20 gotas*) • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-40-01",
        "image": "img/products/profit-pharma/40_ANAB_Oxandrolonomax_Drops.png"
      },
      {
        "id": "frasco-x-30-capsulas",
        "name": "Frasco x 30 cápsulas",
        "price": 160.9,
        "weight": "Frasco x 30 cápsulas",
        "format": "Oxandrolona 10mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-40-02",
        "image": "img/products/profit-pharma/40_ANAB_Oxandrolonomax_Drops.png"
      },
      {
        "id": "frasco-x-60-capsulas",
        "name": "Frasco x 60 cápsulas",
        "price": 268.9,
        "weight": "Frasco x 60 cápsulas",
        "format": "Oxandrolona 10mg • Profit Pharma",
        "packagingType": "profit-pharma",
        "sku": "PF-40-03",
        "image": "img/products/profit-pharma/40_ANAB_Oxandrolonomax_Drops.png"
      }
    ],
    "presentationsSummary": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
    "price": 160.9,
    "unit": "Drops x 30ml",
    "origin": "Profit Pharma — Distribuidor Autorizado (Catálogo Oficial 2026)",
    "coaCertified": false,
    "coaPurity": "Distribuidor Autorizado Profit Pharma",
    "description": "Ayuda a preservar masa muscular en etapas de definición.",
    "benefits": [
      "Línea Anabólicos Profit Pharma — Distribuidor Autorizado.",
      "Principio activo: Oxandrolona 20mg (*por cada 20 gotas*) | Oxandrolona 10mg.",
      "Presentación disponible: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
    ],
    "howToUse": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
    "composition": "Oxandrolona 20mg (*por cada 20 gotas*) | Oxandrolona 10mg",
    "faqs": [
      {
        "q": "¿El producto OXANDROLONOMAX DROPS es original de Profit Pharma?",
        "a": "Sí. BioNativa LAB opera como distribuidor autorizado de la línea oficial Profit Pharma Catálogo 2026, entregando envases sellados de fábrica."
      },
      {
        "q": "¿Qué presentaciones están disponibles?",
        "a": "Disponible en: Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas."
      }
    ],
    "technicalSpecs": {
      "Marca": "Profit Pharma (Catálogo Oficial 2026)",
      "Línea": "Línea Anabólicos",
      "Composición": "Oxandrolona 20mg (*por cada 20 gotas*) | Oxandrolona 10mg",
      "Presentaciones": "Drops x 30ml • Frasco x 30 cápsulas • Frasco x 60 cápsulas",
      "Distribución": "Distribuidor Autorizado BioNativa LAB"
    },
    "responsibleUse": {
      "instructions": "Dosificación según protocolo deportivo avanzado. Consultar guía de uso responsable y asesoría especializada.",
      "warnings": [
        "Producto dirigido exclusivamente a adultos mayores de 18 años.",
        "Se recomienda seguimiento profesional y control médico periódico.",
        "Mantener fuera del alcance de los niños."
      ],
      "storage": "Mantener en lugar fresco (< 25°C), seco y protegido de la luz solar directa."
    },
    "complementaryProductIds": []
  }
];

if (typeof window !== 'undefined') {
  window.BIONATIVA_PRODUCTS = BIONATIVA_PRODUCTS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BIONATIVA_PRODUCTS };
}
