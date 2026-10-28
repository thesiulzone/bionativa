/**
 * BIONATIVA LAB - Catálogo Oficial de Productos
 * Optimizado para SEO, AEO (Answer Engine Optimization) y GEO
 * Moneda: Soles Peruanos (PEN - S/)
 */

const BIONATIVA_PRODUCTS = [
  {
    id: "creatina-monohidratada",
    name: "Creatina Monohidratada 100% Pura",
    shortName: "Creatina Monohidratada",
    category: "fuerza-deporte",
    categoryName: "Fuerza y Rendimiento Deportivo",
    badge: "Más Vendido",
    rating: 4.9,
    reviewsCount: 148,
    image: "img/products/creatina-monohidratada-1kg.jpg",
    hasVariants: true,
    defaultVariant: "bolsa-1kg",
    variants: [
      { id: "bolsa-1kg", name: "Bolsa 1kg (Formato Ahorro)", price: 85.40, weight: "1kg", format: "Polvo Micronizado 200 Mesh", sku: "BIO-CRE-1000" },
      { id: "pote-600g", name: "Pote 600g (Edición Clásica)", price: 58.00, weight: "600g", format: "Polvo Micronizado", sku: "BIO-CRE-600" },
      { id: "pote-300g", name: "Pote 300g (Inicio / Práctico)", price: 35.00, weight: "300g", format: "Polvo Micronizado", sku: "BIO-CRE-300" },
      { id: "frasco-120cap", name: "Frasco 120 Cápsulas Vegetales", price: 48.00, weight: "120 Cápsulas", format: "Cápsulas vegetales 750mg", sku: "BIO-CRE-CAP" }
    ],
    price: 85.40,
    unit: "1KG",
    origin: "Materia Prima Americana Grado Farmacéutico (USP)",
    coaCertified: true,
    coaPurity: "99.9% Purity HPLC Tested",
    description: "Creatina monohidratada micronizada de máxima solubilidad y pureza. Sin maltodextrina, sin saborizantes ni aditivos químicos. Optimiza la producción de ATP celular para incrementar la fuerza explosiva, potencia y regeneración muscular.",
    benefits: [
      "Aumenta la fuerza explosiva y resistencia anaeróbica en entrenamientos intensos.",
      "Mejora notablemente el rendimiento físico y la potencia en series de alta exigencia.",
      "Acelera la recuperación muscular post-entrenamiento previniendo el catabolismo."
    ],
    howToUse: "Tomar 5g diarios (una cucharadita dosificadora) disueltos en 250ml de agua o zumo de frutas. Puede consumirse antes o después de entrenar, o por la mañana en días de descanso. No requiere fase de carga.",
    composition: "100% Creatina Monohidratada micronizada (200 mesh). Libre de gluten, libre de lactosa, vegano.",
    faqs: [
      {
        q: "¿Cuál es el mejor momento para tomar la creatina monohidratada?",
        a: "La creatina funciona por acumulación celular en los depósitos de fosfocreatina. Lo más importante es la constancia diaria (5g al día). Se recomienda tomarla post-entrenamiento con una fuente de carbohidratos simples para maximizar su captación, o junto al desayuno en días de descanso."
      },
      {
        q: "¿La creatina retiene líquidos o daña los riñones?",
        a: "En personas sanas, la evidencia científica demuestra que la creatina es el suplemento más seguro del mundo. La retención hídrica es intracelular (dentro del miocito), lo cual favorece la síntesis proteica y el volumen celular, no es retención subcutánea ni hinchazón."
      }
    ]
  },
  {
    id: "proteina-suero-leche-80",
    name: "Proteína de Suero de Leche 80% (Whey Protein WPC80)",
    shortName: "Proteína de Suero 80%",
    category: "fuerza-deporte",
    categoryName: "Fuerza y Rendimiento Deportivo",
    badge: "Grado Americano",
    rating: 4.8,
    reviewsCount: 112,
    image: "img/products/creatina-monohidratada-1kg.jpg",
    hasVariants: false,
    price: 131.60,
    unit: "1KG",
    origin: "Materia Prima Americana (Wisconsin, USA)",
    coaCertified: true,
    coaPurity: "80.2% Proteína real por porción",
    description: "Concentrado de proteína de suero de leche (WPC 80) obtenido por ultrafiltración a baja temperatura. Conserva todas las fracciones bioactivas (inmunoglobulinas, lactoferrina) con un perfil completo de aminoácidos esenciales y BCAAs naturales.",
    benefits: [
      "Aumenta la masa muscular magra y repara el tejido muscular tras el ejercicio.",
      "De rápida digestión y absorción biológica sin pesadez estomacal.",
      "Excelente para recuperación física y como aporte proteico puro en desayunos o batidos."
    ],
    howToUse: "Disolver 30g (1 scoop o 2 cucharadas soperas colmadas) en 250-300ml de agua, leche vegetal o tu batido favorito inmediatamente después de entrenar o entre comidas.",
    composition: "Concentrado de proteína de suero de leche 80% instantáneo con lecitina de girasol no transgénica. Sin azúcar añadida, sin gomas espesantes.",
    faqs: [
      {
        q: "¿Por qué elegir Proteína WPC 80 pura sin saborizantes?",
        a: "Nuestra proteína WPC80 contiene 100% materia prima americana sin rellenos como gomas, maltodextrina o sucralosa. Obtienes más gramos de proteína neta por tu dinero y puedes mezclarla con frutas, café o avena sin sabores químicos artificiales."
      }
    ]
  },
  {
    id: "glutamina-pura",
    name: "L-Glutamina Pura Micronizada",
    shortName: "Glutamina 100% Pura",
    category: "fuerza-deporte",
    categoryName: "Fuerza y Rendimiento Deportivo",
    badge: "Salud Intestinal & Músculo",
    rating: 4.8,
    reviewsCount: 76,
    image: "img/products/creatina-monohidratada-1kg.jpg",
    hasVariants: false,
    price: 68.60,
    unit: "1KG",
    origin: "Materia Prima Americana Grado Fermentación Vegetal",
    coaCertified: true,
    coaPurity: "99.8% Grado USP",
    description: "L-Glutamina pura de origen vegetal por fermentación natural. El aminoácido más abundante en el músculo y el combustible primordial de los enterocitos (células del intestino) y el sistema inmune.",
    benefits: [
      "Evita la pérdida y degradación de masa muscular (anticatabólico).",
      "Mejora la permeabilidad y salud intestinal (alivia digestiones pesadas y colon irritable).",
      "Refuerza las defensas del cuerpo ante entrenamientos de alto volumen o estrés físico."
    ],
    howToUse: "Tomar 5g a 10g diarios. Se sugiere 5g antes de dormir para regeneración nocturna y 5g post-entrenamiento o en ayunas para soporte digestivo.",
    composition: "100% L-Glutamina pura en polvo sin aditivos.",
    faqs: [
      {
        q: "¿La glutamina ayuda a la gastritis y permeabilidad intestinal?",
        a: "Sí. La glutamina es el nutriente preferido por la mucosa intestinal para regenerar las uniones estrechas celulares, aliviando síntomas de acidez, hinchazón y síndrome de intestino permeable."
      }
    ]
  },
  {
    id: "arginina-pura",
    name: "L-Arginina Pura Grado USP",
    shortName: "L-Arginina Pura",
    category: "fuerza-deporte",
    categoryName: "Fuerza y Rendimiento Deportivo",
    badge: "Óxido Nítrico & Circulación",
    rating: 4.7,
    reviewsCount: 64,
    image: "img/products/creatina-monohidratada-1kg.jpg",
    hasVariants: false,
    price: 57.40,
    unit: "1KG",
    origin: "Materia Prima Americana Grado Farmacéutico",
    coaCertified: true,
    coaPurity: "99.5% Purity",
    description: "Precursor natural directo del óxido nítrico (NO). Dilata los vasos sanguíneos, optimiza la llegada de nutrientes y oxígeno al tejido muscular y apoya la salud cardiovascular.",
    benefits: [
      "Mejora notablemente la circulación sanguínea y el bombeo muscular.",
      "Aumenta la resistencia física y reduce la fatiga durante sesiones exigentes.",
      "Favorece la oxigenación celular y la eliminación de desechos metabólicos."
    ],
    howToUse: "Tomar 3g a 5g unos 30-45 minutos antes del entrenamiento con agua o bebida cítrica rica en vitamina C.",
    composition: "100% L-Arginina Base Grado USP puro sin saborizantes.",
    faqs: [
      {
        q: "¿Qué beneficios aporta la arginina a la vascularización?",
        a: "Al convertirse en óxido nítrico en el endotelio, relaja las paredes arteriales, disminuye la presión y permite mayor flujo sanguíneo, traduciéndose en mayor congestión muscular y mejor oxigenación."
      }
    ]
  },
  {
    id: "proteina-soya-vegetal",
    name: "Aislado de Proteína de Soya 90% No-GMO",
    shortName: "Proteína de Soya 100% Vegetal",
    category: "fuerza-deporte",
    categoryName: "Fuerza y Rendimiento Deportivo",
    badge: "100% Vegano",
    rating: 4.7,
    reviewsCount: 89,
    image: "img/products/creatina-monohidratada-1kg.jpg",
    hasVariants: false,
    price: 35.00,
    unit: "1KG",
    origin: "Materia Prima Americana No-GMO",
    coaCertified: true,
    coaPurity: "90% Proteína Vegetal Aislada",
    description: "Proteína vegetal pura extraída de soya no transgénica. Contiene todos los 9 aminoácidos esenciales, con altísimo contenido de glutamina y arginina natural. Textura suave ideal para batidos y repostería fitness.",
    benefits: [
      "Proteína 100% vegetal de alto valor biológico y digestión limpia.",
      "Ayuda a equilibrar el perfil lipídico y reducir el colesterol LDL.",
      "Favorece el tono muscular y la saciedad prolongada sin grasas añadidas."
    ],
    howToUse: "Mezclar 30g en 300ml de agua, bebida vegetal, licuados de frutas o bowls de avena.",
    composition: "Aislado de proteína de soya 90% no transgénica sin aditivos.",
    faqs: [
      {
        q: "¿La proteína de soya es apta para personas intolerantes a la lactosa?",
        a: "Absolutamente, es 100% libre de lácteos, libre de lactosa y 100% vegetal, haciéndola muy suave para el estómago."
      }
    ]
  },
  {
    id: "colageno-hidrolizado",
    name: "Colágeno Hidrolizado Puro Bovino Grado I y III",
    shortName: "Colágeno Hidrolizado",
    category: "salud-articular",
    categoryName: "Salud Articular, Belleza y Vitalidad",
    badge: "Top Ventas Articular",
    rating: 4.9,
    reviewsCount: 165,
    image: "img/products/ashwagandha-capsulas.jpg",
    hasVariants: false,
    price: 56.00,
    unit: "1KG",
    origin: "Materia Prima Americana (Bovino Pastoreo)",
    coaCertified: true,
    coaPurity: "Péptidos bioactivos de bajo peso molecular (<3000 Da)",
    description: "Péptidos de colágeno bioactivos hidrolizados enzimáticamente. Al tener un peso molecular ultrabajo, se absorbe en más del 90% en el tracto digestivo estimulando la producción natural de colágeno en piel, cartílagos y ligamentos.",
    benefits: [
      "Rejuvenece la elasticidad de la piel, hidrata y fortalece la hebra capilar.",
      "Fortalece uñas quebradizas y previene su debilitamiento.",
      "Protege y regenera cartílagos, aliviando el desgaste articular por edad o impacto deportivo."
    ],
    howToUse: "Disolver 10g a 15g (1 cucharada sopera) en café, té, zumos cítricos o agua en las mañanas. Al ser hidrolizado, se disuelve al instante sin alterar el sabor.",
    composition: "100% Péptidos de colágeno hidrolizado bovino tipo I y III. Sin azúcar, sin maltodextrina.",
    faqs: [
      {
        q: "¿A partir de qué edad se recomienda tomar colágeno?",
        a: "A partir de los 25 a 30 años la producción endógena de colágeno decae a un ritmo de 1.5% anual. La suplementación diaria mantiene la turgencia cutánea y la salud de las articulaciones."
      }
    ]
  },
  {
    id: "glucosamina-sulfato",
    name: "Sulfato de Glucosamina Grado Farmacéutico",
    shortName: "Sulfato de Glucosamina",
    category: "salud-articular",
    categoryName: "Salud Articular, Belleza y Vitalidad",
    badge: "Articulaciones & Cartílago",
    rating: 4.8,
    reviewsCount: 94,
    image: "img/products/ashwagandha-capsulas.jpg",
    hasVariants: false,
    price: 60.20,
    unit: "1KG",
    origin: "Materia Prima Americana Certificada",
    coaCertified: true,
    coaPurity: "99.2% Pureza HPLC",
    description: "Componente esencial de los glucosaminoglicanos y proteoglicanos del cartílago articular y líquido sinovial. Ideal para deportistas con alto impacto articular y personas con osteoartritis o rigidez matutina.",
    benefits: [
      "Protege y estimula la síntesis de cartílago articular nuevo.",
      "Reduce significativamente la inflamación y el dolor articular crónico.",
      "Mejora la flexibilidad, rango de movimiento y lubricación de rodillas y hombros."
    ],
    howToUse: "Tomar 1.5g diarios (media cucharadita) disuelta en agua junto con el almuerzo o desayuno.",
    composition: "Sulfato de glucosamina puro grado USP.",
    faqs: [
      {
        q: "¿Se puede combinar la glucosamina con el colágeno?",
        a: "Sí, es la sinergia ideal. El colágeno aporta la estructura proteica del tejido conectivo y la glucosamina promueve la retención del líquido sinovial lubricante."
      }
    ]
  },
  {
    id: "ascorbato-de-sodio",
    name: "Ascorbato de Sodio Grado Farmacéutico (Vitamina C No Ácida)",
    shortName: "Ascorbato de Sodio (Vitamina C)",
    category: "salud-articular",
    categoryName: "Salud Articular, Belleza y Vitalidad",
    badge: "Vitamina C Alcalina",
    rating: 4.9,
    reviewsCount: 132,
    image: "img/products/ashwagandha-capsulas.jpg",
    hasVariants: false,
    price: 98.00,
    unit: "1KG",
    origin: "Materia Prima Americana Grado USP / FCC",
    coaCertified: true,
    coaPurity: "99.8% Grado Farmacéutico",
    description: "Forma amortiguada (tamponada) y no ácida de la Vitamina C. Con un pH neutro entre 7.0 y 8.0, permite megadosis de antioxidantes sin irritar el estómago, acidez gástrica ni reflujo.",
    benefits: [
      "Refuerza potentemente el sistema inmunitario contra virus y patógenos.",
      "Cofactor imprescindible para la síntesis de colágeno endógeno en piel y tendones.",
      "Vitamina C 100% amigable con estómagos sensibles, gastritis o reflujo."
    ],
    howToUse: "Tomar 1g a 2g al día (un tercio a media cucharadita cafetera) diluido en medio vaso de agua.",
    composition: "100% Ascorbato de Sodio puro grado USP. Sin excipientes.",
    faqs: [
      {
        q: "¿Cuál es la diferencia entre Ácido Ascórbico y Ascorbato de Sodio?",
        a: "El ácido ascórbico tiene un pH muy ácido (2.5) que puede provocar ardor en estómagos sensibles. El ascorbato de sodio tiene pH neutro (7.4), se asimila con mayor suavidad y permite mayor tolerancia digestiva."
      }
    ]
  },
  {
    id: "espirulina-pura",
    name: "Espirulina Azul-Verde Orgánica en Polvo",
    shortName: "Espirulina Pura 100%",
    category: "salud-articular",
    categoryName: "Salud Articular, Belleza y Vitalidad",
    badge: "Superfood Nutritivo",
    rating: 4.8,
    reviewsCount: 88,
    image: "img/products/ashwagandha-capsulas.jpg",
    hasVariants: false,
    price: 91.00,
    unit: "1KG",
    origin: "Cultivo Certificado Grado Americano",
    coaCertified: true,
    coaPurity: "100% Arthrospira platensis seca y micronizada",
    description: "Microalga catalogada como uno de los alimentos más densos en nutrientes del planeta por la OMS y la NASA. Fuente excepcional de ficocianina, hierro de fácil asimilación, clorofila y aminoácidos.",
    benefits: [
      "Súper concentrado de nutrientes, hierro y proteínas naturales.",
      "Potente escudo antioxidante y desintoxicante de metales pesados.",
      "Refuerza la energía vital y el sistema inmune combatiendo la anemia y fatiga."
    ],
    howToUse: "Tomar 3g a 5g al día (1 cucharadita) añadida a batidos verdes, jugos de frutas o bowls matutinos.",
    composition: "100% Espirulina pura deshidratada en frío sin conservantes.",
    faqs: [
      {
        q: "¿Ayuda la espirulina a subir la hemoglobina?",
        a: "Sí, es una de las fuentes naturales más biodisponibles de hierro quelado vegetal y ficocianina, que estimulan la producción de glóbulos rojos."
      }
    ]
  },
  {
    id: "te-verde-extracto",
    name: "Té Verde Puro en Polvo Grado EGCG",
    shortName: "Té Verde Concentrado",
    category: "salud-articular",
    categoryName: "Salud Articular, Belleza y Vitalidad",
    badge: "Metabolismo & Longevidad",
    rating: 4.8,
    reviewsCount: 57,
    image: "img/products/ashwagandha-capsulas.jpg",
    hasVariants: false,
    price: 194.60,
    unit: "1KG",
    origin: "Materia Prima Americana Estandarizada",
    coaCertified: true,
    coaPurity: "Alto contenido de Polifenoles y Epigalocatequina (EGCG)",
    description: "Extracto concentrado de Camellia sinensis con altísima concentración de catequinas y antioxidantes celulares. Estimula la termogénesis natural y protege las células contra el daño oxidativo y el envejecimiento prematuro.",
    benefits: [
      "Acelera el gasto metabólico favoreciendo la oxidación de grasas.",
      "Extraordinario poder antioxidante para salud cardiovascular y celular.",
      "Aporta energía limpia y concentración mental sostenida sin nerviosismo."
    ],
    howToUse: "Disolver 1g a 2g en agua caliente o fría (té helado) preferentemente por la mañana o antes de la actividad física.",
    composition: "100% Extracto de hojas de Camellia sinensis estandarizado en catequinas.",
    faqs: [
      {
        q: "¿Cuándo es mejor tomar el té verde para acelerar el metabolismo?",
        a: "Por las mañanas en ayunas o 30 minutos antes del ejercicio físico para optimizar la utilización de ácidos grasos como fuente de energía."
      }
    ]
  },
  {
    id: "citrato-de-magnesio",
    name: "Citrato de Magnesio Puro Grado USP (Alta Biodisponibilidad)",
    shortName: "Citrato de Magnesio",
    category: "estres-descanso",
    categoryName: "Manejo del Estrés, Descanso y Minerales",
    badge: "Estrella Digestiva & Músculo",
    rating: 4.9,
    reviewsCount: 220,
    image: "img/products/creatina-monohidratada-1kg.jpg",
    hasVariants: false,
    price: 22.40,
    unit: "1KG",
    origin: "Materia Prima Americana Grado USP",
    coaCertified: true,
    coaPurity: "15%-16% Magnesio elemental biodisponible",
    description: "El magnesio más popular y efectivo para regular el tránsito intestinal, relajar los músculos y combatir calambres nocturnos. Su unión a ácido cítrico garantiza una excelente asimilación en el organismo.",
    benefits: [
      "Mejora notablemente el tránsito digestivo combatiendo el estreñimiento de forma suave.",
      "Alivia eficazmente calambres musculares, contracturas y fatiga física.",
      "Favorece la relajación muscular y ayuda a conciliar un sueño reparador."
    ],
    howToUse: "Tomar 2g a 3g (media cucharadita dosificadora) disueltos en un vaso de agua tibia o al tiempo, preferentemente por la noche antes de dormir.",
    composition: "100% Citrato de Magnesio anhidro grado USP. Sin saborizantes ni rellenos.",
    faqs: [
      {
        q: "¿Qué diferencia hay entre el Citrato y el Glicinato de Magnesio?",
        a: "El Citrato de Magnesio tiene una acción relajante muscular y activa el tránsito intestinal (ideal si tienes estreñimiento o calambres). El Glicinato de Magnesio está unido al aminoácido glicina, no tiene efecto laxante y cruza la barrera hematoencefálica, siendo el mejor para insomnio severo, estrés y ansiedad."
      },
      {
        q: "¿Por qué Bionativa Lab ofrece 1kg de Citrato de Magnesio a este precio?",
        a: "Al importar directamente materia prima americana certificada a granel y eliminar intermediarios, ofrecemos máxima pureza grado farmacéutico a un costo accesible para toda la familia en Perú."
      }
    ]
  },
  {
    id: "glicinato-de-magnesio",
    name: "Bisglicinato / Glicinato de Magnesio Quelado de Máxima Asimilación",
    shortName: "Glicinato de Magnesio",
    category: "estres-descanso",
    categoryName: "Manejo del Estrés, Descanso y Minerales",
    badge: "Sueño Profundo & Cero Laxante",
    rating: 5.0,
    reviewsCount: 198,
    image: "img/products/ashwagandha-capsulas.jpg",
    hasVariants: false,
    price: 49.00,
    unit: "1KG",
    origin: "Materia Prima Americana Grado Quelado Puro",
    coaCertified: true,
    coaPurity: "Bisglicinato 100% quelado grado terapéutico",
    description: "La forma más avanzada y delicada de magnesio. Al estar unido a dos moléculas de glicina, no causa efecto laxante ni malestar gástrico. Cruza con facilidad hacia el sistema nervioso central promoviendo relajación cerebral profunda y sueño REM.",
    benefits: [
      "Máxima biodisponibilidad y absorción celular sin provocar diarrea o cólicos.",
      "Relaja profundamente el sistema nervioso central reduciendo el cortisol.",
      "Combate el insomnio, los despertares nocturnos y la fatiga mental matutina."
    ],
    howToUse: "Tomar 2g a 3g diluidos en agua 45 a 60 minutos antes de acostarse a dormir.",
    composition: "100% Bisglicinato de Magnesio quelado puro.",
    faqs: [
      {
        q: "¿Por qué el Glicinato es el mejor magnesio para personas con estómago delicado?",
        a: "A diferencia de otras sales minerales que absorben agua en el colon, el enlace de quelación protege al magnesio para que se absorba por las vías de los dipéptidos, eliminando cualquier molestia digestiva."
      }
    ]
  },
  {
    id: "cloruro-de-magnesio",
    name: "Cloruro de Magnesio Hexahidratado Grado USP Cristalino",
    shortName: "Cloruro de Magnesio",
    category: "estres-descanso",
    categoryName: "Manejo del Estrés, Descanso y Minerales",
    badge: "Huesos & Purificación",
    rating: 4.8,
    reviewsCount: 140,
    image: "img/products/creatina-monohidratada-1kg.jpg",
    hasVariants: false,
    price: 20.30,
    unit: "1KG",
    origin: "Materia Prima Americana Grado Farmacéutico",
    coaCertified: true,
    coaPurity: "99.0% - 101.0% Grado USP",
    description: "La sal clásica de magnesio más tradicional en Perú. Altamente biodisponible y desintoxicante. Aporta iones de cloro y magnesio esenciales para el equilibrio electrolítico, la fijación de calcio en huesos y el alivio articular.",
    benefits: [
      "Fortalece el sistema óseo y estimula la correcta fijación del calcio.",
      "Ayuda a depurar toxinas de la sangre y activar enzimas metabólicas.",
      "Alivia la fatiga crónica, dolores de articulaciones y rigidez muscular."
    ],
    howToUse: "Preparación tradicional: Disolver 33g (aprox. 3 cucharadas) en 1 litro de agua hervida fría en jarra de vidrio. Beber 1 copita (50ml) por la mañana o noche.",
    composition: "100% Cloruro de Magnesio hexahidratado puro grado farmacéutico.",
    faqs: [
      {
        q: "¿Cómo se debe guardar el cloruro de magnesio en polvo?",
        a: "Al ser una sal higroscópica (atrae humedad del ambiente), debe mantenerse en su envase bien sellado en un lugar seco y fresco, o preparar la solución líquida en refrigeración."
      }
    ]
  },
  {
    id: "citrato-de-potasio",
    name: "Citrato de Potasio Puro Grado USP",
    shortName: "Citrato de Potasio",
    category: "estres-descanso",
    categoryName: "Manejo del Estrés, Descanso y Minerales",
    badge: "Equilibrio Renal & Presión",
    rating: 4.9,
    reviewsCount: 110,
    image: "img/products/creatina-monohidratada-1kg.jpg",
    hasVariants: false,
    price: 21.00,
    unit: "1KG",
    origin: "Materia Prima Americana Grado USP / FCC",
    coaCertified: true,
    coaPurity: "99.5% Purity",
    description: "Sal potásica que alcaliniza la orina y equilibra el exceso de sodio en la dieta moderna. Mineral electrolítico indispensable para la regulación de la tensión arterial y la prevención de la formación de cristales renales.",
    benefits: [
      "Ayuda a regular los niveles de presión arterial contrarrestando el sodio.",
      "Previene la formación de cálculos renales de oxalato cálcico y ácido úrico.",
      "Mejora la función muscular y la conductividad del sistema nervioso."
    ],
    howToUse: "Tomar 2g diarios (media cucharadita) disueltos en un vaso abundante de agua junto con una comida principal.",
    composition: "100% Citrato de Potasio monohidratado puro grado USP.",
    faqs: [
      {
        q: "¿Por qué se recomienda combinar Citrato de Potasio con Magnesio?",
        a: "El potasio y el magnesio trabajan juntos en la bomba sodio-potasio de todas las células del cuerpo. Juntos potencian la hidratación celular, previenen calambres y regulan el ritmo cardíaco."
      }
    ]
  },
  {
    id: "sal-de-epsom",
    name: "Sal de Epsom (Sulfato de Magnesio Grado USP Puro)",
    shortName: "Sal de Epsom",
    category: "estres-descanso",
    categoryName: "Manejo del Estrés, Descanso y Minerales",
    badge: "Baños Terapéuticos & Detox",
    rating: 4.9,
    reviewsCount: 175,
    image: "img/products/creatina-monohidratada-1kg.jpg",
    hasVariants: false,
    price: 12.50,
    unit: "1KG",
    origin: "Materia Prima Americana Grado USP",
    coaCertified: true,
    coaPurity: "99.9% Sulfato de Magnesio Heptahidratado USP",
    description: "Sulfato de magnesio puro para baños de inmersión relajantes, pediluvios y desintoxicación corporal. El magnesio se absorbe de forma transdérmica relajando los músculos sobrecargados y aliviando el estrés acumulado.",
    benefits: [
      "Relaja profundamente músculos cansados tras entrenamientos intensos.",
      "Reduce drásticamente el estrés mental y la tensión nerviosa en baños tibios.",
      "Favorece la desintoxicación dérmica y alivia la inflamación en pies hinchados."
    ],
    howToUse: "Para tina de baño: Añadir 1 a 2 tazas de sal en agua caliente e sumergirse 20 minutos. Para pies cansados: Añadir media taza en un recipiente con agua tibia y reposar los pies por 15 minutos.",
    composition: "100% Sulfato de Magnesio heptahidratado grado USP libre de fragancias o químicos sintéticos.",
    faqs: [
      {
        q: "¿La sal de Epsom se puede usar para baños de pies después de trabajar?",
        a: "Es el uso más recomendado y reconfortante. En solo 15 minutos relaja la musculatura plantar, reduce la hinchazón y mejora la circulación de retorno."
      }
    ]
  },
  {
    id: "ashwagandha-pura",
    name: "Ashwagandha KSM / Withania Somnifera Pura Estandarizada",
    shortName: "Ashwagandha Pura",
    category: "estres-descanso",
    categoryName: "Manejo del Estrés, Descanso y Minerales",
    badge: "Adaptógeno Anti-Estrés",
    rating: 4.9,
    reviewsCount: 153,
    image: "img/products/ashwagandha-capsulas.jpg",
    hasVariants: false,
    price: 124.60,
    unit: "1KG",
    origin: "Materia Prima Americana Estandarizada",
    coaCertified: true,
    coaPurity: "Alto porcentaje de Whitanólidos bioactivos",
    description: "El adaptógeno ayurvédico rey para regular el eje hipotálamo-hipófisis-adrenal (HHA). Disminuye los niveles de cortisol circulante, modula la respuesta ante situaciones de tensión, mejora la claridad mental y el sueño profundo.",
    benefits: [
      "Reduce eficazmente el estrés crónico, la ansiedad y el agobio cotidiano.",
      "Mejora la calidad del sueño profundo sin provocar letargo diurno.",
      "Aumenta la vitalidad, resistencia física y energía sostenida durante el día."
    ],
    howToUse: "Tomar 3g al día (1 cucharadita) disuelta en leche tibia con canela (fórmula Moon Milk nocturna), agua o batidos.",
    composition: "100% Extracto de raíz de Withania Somnifera estandarizado. Libre de pesticidas y conservantes.",
    faqs: [
      {
        q: "¿En cuánto tiempo se sienten los efectos de la Ashwagandha?",
        a: "Como adaptógeno natural, sus efectos moduladores del cortisol y relajación se aprecian desde los primeros 7 a 14 días de uso continuo y constante."
      }
    ]
  }
];

// Configuración Global de la Marca y GEO
const BIONATIVA_CONFIG = {
  brandName: "BioNativa LAB",
  tagline: "El estándar de tu naturaleza",
  domain: "bionativalab.com",
  canonicalBase: "https://bionativalab.com",
  whatsappNumber: "51981278458",
  whatsappFormatted: "+51 981 278 458",
  whatsappMessageBase: "¡Hola BioNativa LAB! Deseo realizar el siguiente pedido desde su tienda virtual:",
  currency: "PEN",
  currencySymbol: "S/",
  locations: {
    lima: {
      name: "Almacén Central Lima",
      address: "Lima Metropolitana (Despacho delivery y recojo previa coordinación)",
      city: "Lima",
      region: "Lima",
      country: "Perú",
      geo: { latitude: -12.046374, longitude: -77.042793 }
    },
    cusco: {
      name: "Punto de Distribución & Tienda Cusco",
      address: "Av. Teodosio Serrudo B'10b, Urb. Coripata Sur, Santiago, Cusco",
      city: "Cusco",
      region: "Cusco",
      country: "Perú",
      geo: { latitude: -13.5285, longitude: -71.9790 }
    }
  },
  shippingOptions: [
    { id: "lima-express", name: "Delivery Lima Metropolitana (24 a 48 hrs)", price: 10.00, details: "Entrega a domicilio en distritos de Lima" },
    { id: "lima-recojo", name: "Retiro en Almacén Lima (Gratis)", price: 0.00, details: "Previa confirmación de preparación" },
    { id: "cusco-recojo", name: "Retiro en Tienda Cusco (Gratis)", price: 0.00, details: "Entrega express local en Cusco" },
    { id: "provincias-shalom", name: "Envío Nacional vía Agencia Shalom", price: 15.00, details: "Pago y recojo seguro en agencia más cercana de tu ciudad" },
    { id: "provincias-marvisur", name: "Envío Nacional vía Agencia Marvisur", price: 16.00, details: "Ideal para paquetes pesados y de gran volumen" }
  ],
  paymentMethods: [
    {
      id: "whatsapp",
      title: "Cierre Directo por WhatsApp (Recomendado)",
      desc: "Envía tu pedido al instante y coordina con un asesor farmacéutico."
    },
    {
      id: "transfer",
      title: "Plin / Interbank / Banco de la Nación / Digitales",
      desc: "Cuenta principal Interbank y Plin QR. También Banco de la Nación, Agora, Ligo y Lemon."
    },
    {
      id: "card",
      title: "Tarjeta de Crédito o Débito (En línea)",
      desc: "Transacción 100% segura protegida por cifrado SSL de 256 bits."
    }
  ]
};

// Exportar globalmente para el navegador
if (typeof window !== "undefined") {
  window.BIONATIVA_PRODUCTS = BIONATIVA_PRODUCTS;
  window.BIONATIVA_CONFIG = BIONATIVA_CONFIG;
}
