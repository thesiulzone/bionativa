# Especificación Técnica: Sistema Integral de Fichas de Producto y Calculadora de Dosis

**Proyecto:** BioNativa LAB (bionativalab.com)  
**Fecha de Elaboración:** 25 de Noviembre de 2026  
**Documento:** `Technical_Specification_Fichas_Producto.md`  
**Estado:** Propuesta Técnica y Arquitectura para Aprobación  

---

## 1. Visión y Objetivos

Transformar las páginas de producto (`producto.html`) de BioNativa LAB en **fichas comerciales y técnicas de grado farmacéutico/boticario de alta conversión**, combinando:
1. **Transparencia técnica sin precedentes:** Respaldo con Certificado de Análisis (COA), pureza declarada, especificaciones farmacopéicas (USP/FCC) y trazabilidad de lote.
2. **Experiencia de compra sin fricciones:** Selector dinámico de presentaciones, precios transparentes (regular vs web con ahorro explícito), botón de bolsa sincronizado y WhatsApp asistido.
3. **Herramienta interactiva de valor diferencial (Calculadora de Dosis y Rendimiento):** Un simulador dinámico que calcula en tiempo real cuántos días dura cada presentación según la dosis recomendada (o personalizada), desglosando el costo por día en Soles (PEN).
4. **Educación y Consumo Responsable:** Guías de preparación, advertencias clínicas y sugerencias de combinaciones sinérgicas (Cross-selling).

---

## 2. Los 12 Componentes de la Nueva Ficha de Producto

### Componente 1: Fotografía Profesional y Galería Multi-Ángulo
- **Visualizador Principal:** Imagen de alta definición del producto con optimización WebP/JPG, sombreado orgánico suave y vista responsive.
- **Selector de Presentaciones Reactivo:** Al hacer clic en "Bolsa", "Pote" o "Caja Industrial", la imagen conmuta automáticamente a la foto del envase real.
- **Sellos Flotantes de Calidad:**
  - Badge de Pureza: `Pureza 99.9% COA`.
  - Badge de Procedencia: `Materia Prima USA / Farmacéutica`.
  - Badge de Lote Verificado.

### Componente 2: Nombre Comercial, Jerarquía y Descripción Breve
- **Categoría:** Badge interactivo que conecta con el catálogo filtrado (`Fuerza y Deporte`, `Salud Articular`, `Estrés y Descanso`).
- **Nombre Primario:** Título comercial con grado farmacológico (ej: *Creatina Monohidratada 100% Pura Micronizada*).
- **Subtítulo Funcional:** Descripción rápida de beneficio biológico (ej: *Regenerador de ATP intracelular y potencia muscular sin aditivos*).
- **Reseñas y Calificación Social:** Estrellas de valoración (4.8 - 4.9) y contador de compradores verificados.

### Componente 3: Precios Transparentes y Ahorro Visible
- **Estructura de Precios:**
  - `Precio Regular` tachado (ej: `S/ 98.00`).
  - `Precio Web Promocional` en tipografía display extrabold verde boticario (`S/ 85.40`).
  - Badge de ahorro en porcentaje y soles: `-13% WEB (Ahorras S/ 12.60)`.
- **Costo por 100 g / por kg:** Cálculo automático para que el cliente constate la ventaja de comprar formatos de mayor gramaje o presentación ahorro.

### Componente 4: Selector de Presentaciones y Gramajes
- **Opciones de Empaque:**
  - **Bolsa de Polietileno Sellada al Vacío (Formato Ahorro):** Ideal para rellenar frascos o máxima economía.
  - **Pote Plastificado HDPE Boticario con Sello de Inducción:** Para máxima protección contra humedad y uso diario en cocina o gimnasio.
  - **Formato Industrial / Granel (20 kg / 25 kg):** Dirigido a distribuidores, marcas secundarias o deportistas de alto consumo.
- **Gramajes escalables:** Preparado para admitir presentaciones de 300 g, 600 g, 1 kg y presentaciones especiales cuando se incorporen al catálogo.

### Componente 5: Selector de Cantidad Dinámico
- Controles táctiles `[-]` y `[+]` con input numérico directo y validación de stock disponible.
- Subtotal calculado en vivo que se refleja en los botones de compra.

### Componente 6: Botón de Compra y Carrito Lateral ("Añadir a la Bolsa")
- Botón principal de ancho completo / flex destacado con icono de bolsa de boticario.
- Efecto micro-interactivo: Animación de carga y apertura suave del carrito lateral deslizable (`cart.js`) con confirmación visual del ítem agregado.

### Componente 7: Botón de Asesoría Directa por WhatsApp
- Enlace directo a la línea oficial (+51 981 278 458) con mensaje pre-estructurado:
  > *"Hola BioNativa LAB, deseo asesoría técnica sobre [Nombre del Producto] en presentación [Formato Seleccionado]. Tengo dudas sobre la dosis adecuada para mi caso."*
- Proporciona confianza inmediata a usuarios que dudan antes de pagar con tarjeta o Yape/Plin.

### Componente 8: Contador de Dosis Diarias y Calculadora de Rendimiento *(Novedad Clave)*
- **Diseño del Módulo:**
  - Caja destacada con fondo beige boticario (`#FAF6F0`) y borde verde bosque.
  - **Dosis Estándar Sugerida:** Muestra la porción clínica recomendada (ej: Creatina: 5 g/día; Colágeno: 10 g/día; Citrato de Magnesio: 2 g/día; Whey: 30 g/día).
  - **Slider de Dosis Personalizada:** Control deslizante para ajustar los gramos diarios de 1g a 30g según prescripción médica o meta nutricional.
  - **Resultados en Tiempo Real:**
    - ⏱ **Duración Estimada:** `200 días de suministro continuo` (~6.6 meses).
    - 💰 **Costo Diario Real:** `S/ 0.43 por día`.
    - 👥 **Selector de Usuarios:** Opción para calcular la duración si lo consumen 1, 2 o más personas en el hogar.

### Componente 9: Ingredientes, Pureza y Tabla Nutricional Limpia
- Declaración de "Clean Label" (Etiqueta Limpia):
  - 100% Principio Activo.
  - 0% Maltodextrina, 0% Harinas de relleno.
  - 0% Colorantes artificiales ni saborizantes químicos.
  - Declaración de Alérgenos: Libre de gluten, libre de lactosa, no OGM (Non-GMO).

### Componente 10: Especificaciones Farmacotécnicas
- Tabla de datos rigurosos para clientes informados y profesionales de la salud:
  - **Malla / Mesh:** Granulometría 200 Mesh (micronizado ultra fino para disolución instantánea sin grumos).
  - **Forma Química:** Monohidrato / Citrato tribásico / Quelado / Péptidos hidrolizados de bajo peso molecular (< 3000 Da).
  - **Grado de Calidad:** USP (Farmacopea de los Estados Unidos) / FCC (Food Chemicals Codex).
  - **Solubilidad:** Nivel de dispersión en agua fría o caliente.

### Componente 11: Certificado COA y Trazabilidad por Lote
- **Acceso al Certificado:**
  - Botón de descarga directa del PDF oficial del lote disponible en `docs/coa/`.
  - Visor rápido o enlace a WhatsApp con número de lote impreso para solicitar la hoja analítica puntual emitida por el laboratorio fabricante.
- **Sello de Calidad Analítica:** Porcentaje de pureza verificado por HPLC / Espectrometría.

### Componente 12: Información de Uso Responsable y Advertencias Clínicas
- **Protocolo de Toma:**
  - Momento ideal del día (ej: Creatina con comidas o post-entreno; Citrato de Magnesio antes de dormir; Colágeno en ayunas con Vitamina C).
  - Métodos recomendados de dilución (agua, zumo cítrico, infusión tibia).
- **Advertencias y Precauciones:**
  - No exceder la dosis diaria recomendada.
  - Consulta médica en caso de gestación, periodo de lactancia o afecciones renales/hepáticas previas.
  - Conservación: Cerrar herméticamente y almacenar en lugar fresco (< 25°C) y seco, protegido de la radiación solar directa.

### Componente 13: Productos Complementarios (Sinergias Biológicas / Cross-Selling)
- Rejilla de 2 a 3 suplementos que potencian la absorción o el efecto del producto actual:
  - *Creatina Monohidratada* ➡️ Proteína Whey WPC80 + Citrato de Magnesio.
  - *Colágeno Hidrolizado* ➡️ Vitamina C (Ascorbato de Sodio) + Sulfato de Glucosamina.
  - *Citrato de Magnesio* ➡️ Citrato de Potasio + Ashwagandha Pura.
- Botón rápido "Agregar combo a la bolsa" para compra conjunta con 1 clic.

---

## 3. Modelo de Datos Extendido (`js/products-data.js`)

Para alimentar estos componentes de forma centralizada y escalable, ampliaremos el esquema de cada producto en `products-data.js`:

```javascript
{
  id: "creatina-monohidratada",
  name: "Creatina Monohidratada 100% Pura",
  shortName: "Creatina Monohidratada",
  category: "fuerza-deporte",
  categoryName: "Fuerza y Rendimiento Deportivo",
  badge: "Más Vendido",
  rating: 4.9,
  reviewsCount: 148,
  image: "img/products/creatina-monohidratada-pote-1kg.jpg",
  regularPrice: 98.00,
  price: 85.40,
  discountBadge: "-13% WEB",
  origin: "Materia Prima Americana Grado Farmacéutico (USP)",
  coaCertified: true,
  coaPurity: "99.9% Purity HPLC Tested",
  coaPdf: "docs/coa/coa-creatina-monohidratada.pdf",

  // Datos para la Calculadora de Dosis y Rendimiento:
  dosage: {
    recommendedGrams: 5,           // Gramos sugeridos por dosis
    unit: "g",
    frequencyText: "1 vez al día",
    scoopEquivalent: "1 cucharadita dosificadora o cafetera colmada",
    timingText: "Post-entrenamiento o por la mañana con agua o zumo",
    minDose: 3,
    maxDose: 10
  },

  // Especificaciones Farmacotécnicas:
  technicalSpecs: {
    chemicalForm: "Creatina Monohidrato Micronizada",
    casNumber: "6020-87-7",
    mesh: "200 Mesh (Ultra Soluble)",
    grade: "USP Grade (Farmacopea de EE. UU.)",
    solubility: "Fácil dispersión en líquidos a temperatura ambiente",
    appearance: "Polvo cristalino blanco, inodoro e insípido"
  },

  // Uso Responsable y Contraindicaciones:
  responsibleUse: {
    instructions: "Disolver en 250ml de agua o bebida favorita. Mantener una adecuada hidratación diaria (mínimo 2 litros de agua).",
    warnings: [
      "No superar la dosis diaria expresamente recomendada.",
      "Los suplementos no deben utilizarse como sustitutos de una dieta equilibrada.",
      "Consulte a su médico si padece alguna enfermedad renal o hepática preexistente.",
      "Mantener fuera del alcance de los niños menores de 12 años."
    ],
    storage: "Conservar en su envase original bien cerrado, en ambiente fresco (< 25°C), seco y lejos de la luz solar directa."
  },

  // Productos Complementarios Sinergia:
  complementaryProductIds: [
    "proteina-suero-leche-80",
    "citrato-de-magnesio"
  ],

  // Variantes con peso neto en gramos para el cálculo:
  variants: [
    {
      id: "bolsa-1kg",
      name: "Bolsa de Polietileno 1 kg",
      price: 85.40,
      regularPrice: 98.00,
      weightGrams: 1000,
      weight: "1 kg",
      format: "Bolsa Polietileno Sellada (Formato Ahorro)",
      packagingType: "bolsa",
      sku: "BIO-CRE-BOL-1K",
      image: "img/products/creatina-monohidratada-bolsa-1kg.jpg"
    },
    {
      id: "pote-1kg",
      name: "Pote Plastificado 1 kg",
      price: 89.90,
      regularPrice: 104.00,
      weightGrams: 1000,
      weight: "1 kg",
      format: "Pote HDPE Blanco Boticario (+S/ 4.50)",
      packagingType: "pote",
      sku: "BIO-CRE-POT-1K",
      image: "img/products/creatina-monohidratada-pote-1kg.jpg"
    },
    {
      id: "caja-25kg",
      name: "Caja Industrial 25 kg (Mayorista)",
      price: 1749.90,
      regularPrice: 1950.00,
      weightGrams: 25000,
      weight: "25 kg",
      format: "Caja Corrugada Industrial (S/ 70.00/kg Mayorista)",
      packagingType: "industrial-caja",
      sku: "BIO-CRE-IND-25K",
      image: "img/products/industrial/creatina-monohidratada-25kg.jpg",
      isBulk: true
    }
  ]
}
```

---

## 4. Arquitectura de Interfaz y Lógica del Contador de Dosis

### 4.1 Algoritmo de Cálculo de Duración y Costo
Sea:
- $W$ = Peso neto de la variante seleccionada en gramos (ej. 1000 g).
- $D$ = Dosis diaria seleccionada por el usuario (ej. 5 g/día).
- $N$ = Número de consumidores (por defecto: 1 persona).
- $P$ = Precio de la presentación en Soles (PEN).

Entonces:
$$\text{Días de Duración} = \left\lfloor \frac{W}{D \times N} \right\rfloor$$
$$\text{Meses Equivalentes} = \frac{\text{Días de Duración}}{30.4}$$
$$\text{Costo por Dosis Diaria} = \frac{P}{\text{Días de Duración}}$$

### 4.2 Ejemplo Visual en Pantalla
```
┌────────────────────────────────────────────────────────────────────────┐
│ ⏱ CALCULADORA DE DURACIÓN Y RENDIMIENTO BOTICARIO                     │
├────────────────────────────────────────────────────────────────────────┤
│ Presentación activa: Bolsa 1 kg (1,000 gramos netos)                   │
│                                                                        │
│ Dosis diaria recomendada:  [ 5 g ]  (Ajustable: [ - ]  5g  [ + ] )     │
│ Consumidores: (●) 1 persona  (○) 2 personas                             │
│                                                                        │
│ ┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────┐ │
│ │   DURACIÓN TOTAL     │ │   EQUIVALENCIA       │ │  COSTO POR DÍA   │ │
│ │     200 DÍAS         │ │    ~6.6 MESES        │ │     S/ 0.43      │ │
│ └──────────────────────┘ └──────────────────────┘ └──────────────────┘ │
│                                                                        │
│ 💡 Un kilo de creatina pura cubre más de medio año de entrenamiento    │
│    continuo a menos de cincuenta céntimos por toma.                    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Plan de Implementación por Fases

1. **Fase 1: Preparación del Modelo de Datos (`js/products-data.js`)**
   - Incorporar parámetros de dosificación (`dosage`), especificaciones farmacotécnicas (`technicalSpecs`), uso responsable (`responsibleUse`) y productos complementarios (`complementaryProductIds`) para los 19 productos.

2. **Fase 2: Rediseño del Layout en `producto.html`**
   - Integrar la Calculadora de Dosis en el bloque superior derecho debajo del precio y variantes.
   - Enriquecer la visualización de precios (`regularPrice` tachado, badge de ahorro dinámico).
   - Agregar sección de "Productos Complementarios Sinergia" antes del footer.

3. **Fase 3: Optimización de Pestañas Técnicas**
   - Pestaña 1: Beneficios Clínicos & Mecanismo Biológico.
   - Pestaña 2: Modo de Uso, Dosificación & Protocolo.
   - Pestaña 3: Especificaciones Farmacotécnicas & Composición Pura.
   - Pestaña 4: Certificado COA Oficial, Descarga PDF & Consulta de Lote.
   - Pestaña 5: Uso Responsable, Precauciones & Advertencias Clínicas.
   - Pestaña 6: Preguntas Frecuentes.

4. **Fase 4: Verificación y Pruebas**
   - Pruebas responsivas en móvil, tablet y escritorio.
   - Verificación de enlaces a PDF de COA.
   - Prueba interactiva de cálculo de dosis con todas las variantes.
   - Prueba de compra por WhatsApp con mensaje preformateado.

---

## 6. Estado y Próximos Pasos

El plan técnico queda formulado con la estructura exacta de las 12 mejoras solicitadas más la calculadora de dosis diarias. Una vez aprobado por el usuario, procederemos con la implementación en código limpio, modular y 100% funcional.
