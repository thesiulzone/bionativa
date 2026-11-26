# Especificación Técnica: Actualización de Presentaciones Oficiales y Edición de Imágenes de Catálogo con Marca BioNativa LAB

## 1. Resumen Ejecutivo y Diagnóstico
El usuario ha proporcionado el **Catálogo Oficial de Insumos & Maquila 2026 de Inchem**, solicitando:
1. **Revisar todos los productos del catálogo adjunto** frente a los productos ya cargados en la plataforma web de **BioNativa LAB** (`bionativalab.com`).
2. **Actualizar las presentaciones** de cada producto conforme a las especificaciones técnicas y comerciales del catálogo (formatos minoristas de 1 kg en Pote Plastificado y Bolsa de Polietileno, así como formatos industriales a granel de 20 kg y 25 kg en Caja, Saco o Tambor).
3. **Editar las imágenes del catálogo** reemplazando todos los logotipos y membretes del proveedor/maquilador (*Inchem*) por la **identidad visual oficial de BioNativa LAB** (logotipo vectorizado, isotipo botánico/mineral `#1E3B2B` y `#B67A52`, tipografía boticaria y sellos de calidad).

Conforme a las **Reglas Maestro de Desarrollo Web**, este documento formaliza la planificación técnica, estructura de datos, procesamiento de imagen y arquitectura UI/UX para su aprobación previa.

---

## 2. Matriz Comparativa: Catálogo Inchem vs. Productos BioNativa LAB

A continuación se detalla la concordancia entre los 11 folios del catálogo y los 16 productos actualmente operativos en `js/products-data.js`, más los 3 productos nuevos identificados:

| # | Producto en Catálogo Inchem | ID en Web BioNativa | Categoría en Web | Presentación Minorista (1 kg) | Presentación Industrial / Granel | Estado en Web Actual |
|---|-----------------------------|---------------------|------------------|-------------------------------|----------------------------------|----------------------|
| 1 | **Creatina Monohidratada** (Pág. 3) | `creatina-monohidratada` | Fuerza y Deporte | Pote Plastificado / Bolsa Polietileno | **Caja Industrial 25 kg** | Tenía variantes desactualizadas (300g, 600g, cápsulas) |
| 2 | **Proteína Suero de Leche** (Pág. 4) | `proteina-suero-leche-80` | Fuerza y Deporte | Pote Plastificado / Bolsa Polietileno | **Saco Industrial 20 kg** | Solo unitario 1KG sin selector |
| 3 | **Proteína de Soya** (Pág. 4) | `proteina-soya-vegetal` | Fuerza y Deporte | Pote Plastificado / Bolsa Polietileno | **Saco Industrial 20 kg** | Solo unitario 1KG sin selector |
| 4 | **Ashwagandha** (Pág. 4) | `ashwagandha-pura` | Estrés y Descanso | Pote Plastificado / Bolsa Polietileno | **Tambor Industrial 25 kg** | Solo unitario 1KG sin selector |
| 5 | **Glucosamina** (Pág. 4) | `glucosamina-sulfato` | Salud Articular | Pote Plastificado / Bolsa Polietileno | **Caja Industrial 25 kg** | Solo unitario 1KG sin selector |
| 6 | **Espirulina** (Pág. 5) | `espirulina-pura` | Salud Articular | Pote Plastificado / Bolsa Polietileno | **Tambor Industrial 25 kg** | **Actualizado y Corregido:** 3 Presentaciones oficiales BioNativa LAB con imágenes de alta resolución (Bolsa 1 kg, Pote 1 kg y Tambor 25 kg) |
| 7 | **Citrato de Magnesio** (Pág. 5) | `citrato-de-magnesio` | Estrés y Descanso | Pote Plastificado / Bolsa Polietileno | **Saco Industrial 25 kg** | Solo unitario 1KG sin selector |
| 8 | **Citrato de Potasio** (Pág. 5) | `citrato-de-potasio` | Estrés y Descanso | Pote Plastificado / Bolsa Polietileno | **Saco Industrial 25 kg** | Solo unitario 1KG sin selector |
| 9 | **Sal de Epsom** (Pág. 6) | `sal-de-epsom` | Estrés y Descanso | Pote Plastificado / Bolsa Polietileno | **Saco Industrial 25 kg** | Solo unitario 1KG sin selector |
| 10 | **Cloruro de Magnesio Hexahidratado** (Pág. 6) | `cloruro-de-magnesio` | Estrés y Descanso | Pote Plastificado / Bolsa Polietileno | **Saco Industrial 25 kg** | Solo unitario 1KG sin selector |
| 11 | **Té Verde** (Pág. 6) | `te-verde-extracto` | Salud Articular | Pote Plastificado / Bolsa Polietileno | **Tambor Industrial 25 kg** | Solo unitario 1KG sin selector |
| 12 | **Péptidos Bioactivos de Colágeno Hidrolizado Puro (Tipo I & III)** (Pág. 7) | `colageno-hidrolizado` | Salud Articular | Pote Plastificado / Bolsa Polietileno | **Saco Industrial 20 kg** | Actualizado con imágenes reales (Bolsa 1kg y Saco 20kg) y selector completo |
| 13 | **L - Arginina** (Pág. 7) | `arginina-pura` | Fuerza y Deporte | Pote Plastificado / Bolsa Polietileno | **Tambor Industrial 25 kg** | Solo unitario 1KG sin selector |
| 14 | **L - Glutamina** (Pág. 7) | `glutamina-pura` | Fuerza y Deporte | Pote Plastificado / Bolsa Polietileno | **Tambor Industrial 25 kg** | Solo unitario 1KG sin selector |
| 15 | **Ascorbato de Sodio** (Pág. 7) | `ascorbato-de-sodio` | Salud Articular | Pote Plastificado / Bolsa Polietileno | **Caja Industrial 25 kg** | Solo unitario 1KG sin selector |
| 16 | **Glicinato de Magnesio** (Pág. 8) | `glicinato-de-magnesio` | Estrés y Descanso | Pote Plastificado / Bolsa Polietileno | **Caja Industrial 25 kg** | Solo unitario 1KG sin selector |
| 17 | **Sulfato de Condroitina** (Pág. 5) | `sulfato-de-condroitina` *(Opcional)* | Salud Articular | Pote Plastificado / Bolsa Polietileno | **Caja Industrial 25 kg** | Disponible para incorporación |
| 18 | **L - Carnitina Base** (Pág. 8) | `l-carnitina-base` *(Opcional)* | Fuerza y Deporte | Pote Plastificado / Bolsa Polietileno | **Saco Industrial 25 kg** | Disponible para incorporación |
| 19 | **Stevia** (Pág. 8) | `stevia-pura` *(Opcional)* | Salud Articular / Nutra | Pote Plastificado / Bolsa Polietileno | **Tambor Industrial 25 kg** | Disponible para incorporación |

---

## 3. Arquitectura del Modelo de Datos de Presentaciones (`js/products-data.js`)

Cada producto adoptará el esquema estandarizado de variantes (`variants`) habilitado por `hasVariants: true`:

```javascript
{
  id: "creatina-monohidratada",
  name: "Creatina Monohidratada 100% Pura",
  shortName: "Creatina Monohidratada",
  // ... metadatos SEO / beneficios / COA ...
  hasVariants: true,
  defaultVariant: "bolsa-1kg",
  variants: [
    {
      id: "bolsa-1kg",
      name: "Bolsa de Polietileno 1 kg",
      shortDescription: "Formato Ahorro Termosellado listo para consumo o dosificación",
      price: 85.40,
      weight: "1 kg",
      format: "Bolsa Polietileno Grado Alimentario",
      packagingType: "bolsa",
      sku: "BIO-CRE-BOL-1K",
      image: "img/products/creatina-monohidratada-1kg.jpg"
    },
    {
      id: "pote-1kg",
      name: "Pote Plastificado 1 kg",
      shortDescription: "Envase rígido boticario con tapa hermética y precinto",
      price: 89.90, // Margen por envase rígido boticario
      weight: "1 kg",
      format: "Pote HDPE Blanco Farmacéutico",
      packagingType: "pote",
      sku: "BIO-CRE-POT-1K",
      image: "img/products/creatina-monohidratada-1kg.jpg"
    },
    {
      id: "caja-25kg",
      name: "Caja Industrial 25 kg (Mayorista / Granel)",
      shortDescription: "Insumo puro para envasado, distribución o formulación industrial",
      price: 1850.00, // Precio industrial mayorista (S/ 74.00/kg)
      weight: "25 kg",
      format: "Caja Corrugada Industrial con Bolsa Doble Barrera",
      packagingType: "industrial-caja",
      sku: "BIO-CRE-IND-25K",
      image: "img/products/industrial/creatina-monohidratada-25kg.jpg",
      isBulk: true
    }
  ]
}
```

### Reglas de Precios para Formatos Industriales:
1. **Bolsa 1 kg:** Precio base actual del catálogo web.
2. **Pote Plastificado 1 kg:** Precio base + S/ 4.50 a S/ 5.00 (absorción de costo de envase rígido de alta densidad con precinto de seguridad).
3. **Presentación Industrial (20 kg / 25 kg):** Precio mayorista por volumen con descuento entre 12% y 20% por kilogramo respecto al precio unitario minorista, ideal para farmacias, gimnasios, centros de nutrición y formuladores independientes.

---

## 4. Pipeline de Edición y Branding de Imágenes

### 4.1. Origen de las Imágenes
- Extracción vectorial y ráster a **300 DPI (4371 x 2835 píxeles)** directamente del documento maestro PDF mediante PyMuPDF (`fitz`).
- Aislamiento fotográfico de los empaques:
  - **Pote Plastificado + Bolsa de Polietileno (1 kg)**: Conservación de sombras, texturas de polietileno y contenido en polvo.
  - **Caja Industrial (25 kg)**: Empaque corrugado con montículo de polvo de alta pureza.
  - **Tambor Industrial (25 kg)**: Tambor de fibra kraft con aro metálico y muestra granulométrica.
  - **Saco Industrial (20 kg / 25 kg)**: Saco de papel kraft multicapa con cuchara dosificadora/polvo.

### 4.2. Tratamiento de Branding BioNativa LAB
1. **Eliminación del Logo Inchem:**
   - En las bolsas de 1 kg: Limpieza digital de la etiqueta rectangular vertical.
   - En cajas y tambores industriales: Cobertura precisa de la zona de marca del proveedor respetando la tonalidad del papel sticker y la perspectiva fotográfica.
2. **Aplicación del Sistema Gráfico BioNativa:**
   - **Isotipo oficial:** Hoja botánica orgánica verde bosque (`#1E3B2B`) y faceta cristalina mineral terracota (`#B67A52`).
   - **Logomarca:** *BioNativa LAB* con tipografía Plus Jakarta Sans 800.
   - **Slogan institucional:** *"El estándar de tu naturaleza"*.
   - **Etiqueta Boticaria en Pote Blanco:** Incorporación de etiqueta frontal minimalista boticaria en el pote cilíndrico blanco, elevando la percepción de producto terminado premium.
   - **Sello COA:** Incorporación de la insignia *"Pureza Certificada COA | Lote Controlado"*.

### 4.3. Nomenclatura y Rutas de Archivos:
- `G:\Mi unidad\CONTABILIDAD\BIONATIVA\img\products\[id]-bolsa-1kg.jpg` (Presentación Bolsa de Polietileno con etiqueta oficial BioNativa LAB).
- `G:\Mi unidad\CONTABILIDAD\BIONATIVA\img\products\[id]-pote-1kg.jpg` (Presentación Pote Boticario con etiqueta oficial de doble borde verde/cobre).
- `G:\Mi unidad\CONTABILIDAD\BIONATIVA\img\products\[id]-1kg.jpg` (Imagen principal para tarjetas de catálogo y metadatos SEO).
- `G:\Mi unidad\CONTABILIDAD\BIONATIVA\img\products\industrial\[id]-25kg.jpg` (o 20kg en Colágeno: Presentación Caja Industrial con montículo de polvo y etiqueta oficial).

---

## 5. Mejoras de Interfaz de Usuario (UI/UX)

1. **Ficha de Producto (`producto.html`):**
   - Selector de presentaciones dinámico con selector visual de 3 tarjetas:
     - 📦 *Bolsa de Polietileno 1 kg (Ahorro)*
     - 🍶 *Pote Plastificado 1 kg (Boticario)*
     - 🏭 *Caja Industrial 25 kg / 20 kg (Mayorista / Granel)*
   - Cambio reactivo e instantáneo de fotografía principal según la presentación elegida (Bolsa, Pote o Caja Industrial).
   - Actualización dinámica del precio, SKU y disponibilidad.
   - En presentaciones industriales, botón de WhatsApp con mensaje especializado: *"Deseo cotizar / comprar al por mayor [Producto] en [Presentación Industrial]"*.

2. **Catálogo de Tienda (`tienda.html`):**
   - Tarjetas de producto con indicación de presentaciones disponibles: *"Presentaciones: Pote 1kg • Bolsa 1kg • Industrial"*.
   - Rango de precio *"Desde S/ [precio_bolsa]"*.

3. **Carrito y Checkout (`js/cart.js`):**
   - Soporte total para registrar la variante exacta en el carrito.
   - Detalle en el desglose de WhatsApp y Mercado Pago indicando la presentación seleccionada para evitar errores en despacho de almacén.

---

## 6. Plan de Implementación y Fases

- [x] **Fase 1: Diagnóstico e inventario exhaustivo** del catálogo Inchem vs. base de datos BioNativa.
- [x] **Fase 2: Procesamiento gráfico automatizado** con script en Python (`generate_corrected_presentations.py`) aplicando las plantillas fotográficas reales (Bolsa, Pote Boticario y Caja Industrial con polvo) y tipografía antialias para los productos solicitados.
- [x] **Fase 3: Actualización del catálogo de datos** en `js/products-data.js` con las nuevas presentaciones, SKUs, imágenes independientes por variante y precios.
- [x] **Fase 4: Adaptación de la galería y selector dinámico** en `producto.html`.
- [x] **Fase 5: Validación completa de flujo**, existencia y resolución de todas las imágenes.
