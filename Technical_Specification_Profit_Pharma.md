# Especificación Técnica: Integración Catálogo Profit Pharma (Distribuidor Autorizado)

## 1. Auditoría de Precios y Prevención de Duplicados (BioNativa LAB vs Profit Pharma)

Se compararon los **19 productos actuales** de `js/products-data.js` (BioNativa LAB — materia prima pura en bolsa/pote 1 kg y granel industrial) contra los **40 productos** (85 SKUs) de **Profit Pharma** (marca terminada con margen +35%).

### 1.1 Productos con coincidencia de principio activo

| Principio Activo | BioNativa LAB (Actual) | Profit Pharma (+35%) | Análisis y Recomendación |
| :--- | :--- | :--- | :--- |
| **Proteína de Suero 80% (Whey)** | Bolsa 1 kg: **S/ 131.60**<br>Pote 1 kg: **S/ 136.50** | Pote 500g: **S/ 79.65**<br>Pote 1 kg: **S/ 133.65** *(Sabor Vainilla)* | **⚠️ Alerta de Precio:** En formato Pote 1 kg, Profit Pharma (S/ 133.65) queda **S/ 2.85 por debajo** del Pote BioNativa (S/ 136.50). Se recomienda definir si se mantiene S/ 133.65 (diferenciado como fórmula saborizada de marca comercial) o si se ajusta a ≥ S/ 145.00 para proteger la línea propia. |
| **Creatina Monohidratada 100%** | Bolsa 1 kg: **S/ 85.40**<br>Pote 1 kg: **S/ 89.90** | Pote 300g: **S/ 74.25**<br>Pote 500g: **S/ 87.75**<br>Pote 1 kg: **S/ 106.65** | Sin conflicto a la baja en 1 kg (Profit Pharma es S/ 16.75 superior). Se diferencia claramente como marca terminada Profit Pharma. |
| **Proteína de Soya Vegetal** | Bolsa 1 kg: **S/ 35.00**<br>Pote 1 kg: **S/ 39.50** | Pote 500g: **S/ 66.15**<br>Pote 1 kg: **S/ 79.65** | Sin conflicto. BioNativa mantiene el liderazgo en precio de materia prima pura. |
| **Colágeno Hidrolizado 100%** | Bolsa 1 kg: **S/ 56.00**<br>Pote 1 kg: **S/ 60.50** | **Colagen Pro** 300g: **S/ 52.65**<br>500g: **S/ 66.15**<br>1 kg: **S/ 93.15** | Sin conflicto. BioNativa es S/ 32.65 más económico en 1 kg. |
| **Citrato de Magnesio** | Polvo 1 kg: **S/ 22.40 – 26.90** | Frasco x 60 cápsulas: **S/ 81.00** | Formatos distintos (polvo a granel vs cápsulas dosificadas). Sin duplicidad. |
| **L-Carnitina / Arginina / Glucosamina / Condroitina** | Materia prima pura en polvo 1 kg | Fórmulas compuestas / viales inyectables (`Adipox`, `For Men`, `Colagemax`, `Tricarnifit`) | Formatos y usos distintos. Sin duplicidad. |

### 1.2 Duplicado interno resuelto en Profit Pharma
En la página 7 del catálogo PDF figuran dos entradas bajo el nombre **ENZIFIT**:
1. `ENZIFIT (Individual)` — Vial individual de Lipasa, Hialuronidasa o Colagenasa 2000ui (**S/ 66.15** vial / **S/ 174.15** kit 3 viales).
2. `COCKTAIL ENZIFIT` — Fórmula sinérgica 3 en 1 (**S/ 79.65** vial / **S/ 214.65** kit 3 viales).

Ambos se registrarán con `id` y nombres diferenciados (`profit-enzifit-individual` y `profit-cocktail-enzifit`) para evitar duplicación.

---

## 2. Arquitectura en Tienda Web

### 2.1 Categoría Principal y Sub-líneas
- **Nueva categoría principal:** `category: "distribuidor-autorizado"`, `categoryName: "Distribuidor Autorizado • Profit Pharma"`
- **Subcategorías (propiedad `subCategory` y `subCategoryName`):**
  1. `ortomolecular` — **Línea Ortomolecular** (13 productos)
  2. `mesoterapia` — **Línea Mesoterapia** (7 productos)
  3. `suplementos` — **Línea Suplementos** (10 productos)
  4. `capsulas` — **Línea Cápsulas** (4 productos)
  5. `anabolicos` — **Línea Anabólicos** (6 productos)

### 2.2 Archivos a crear / modificar (tras aprobación)
1. **`img/products/profit-pharma/`**: Copiar las 40 imágenes de presentaciones/productos para servirlas localmente en la web (sin espacios ni rutas externas).
2. **`js/products-data.js`**: Agregar los **40 productos nuevos** (con sus 85 variantes en `variants[]` y precios +35%, `id` con prefijo `profit-` para evitar cualquier colisión con los 19 productos BioNativa, `coaCertified: false`, `origin: "Profit Pharma — Distribuidor Autorizado"`, `presentationsSummary` dinámico).
3. **`tienda.html`**:
   - Añadir pestaña principal `Distribuidor Autorizado (40)` (`filterCategory('distribuidor-autorizado')`).
   - Mostrar barra secundaria de sub-líneas (Ortomolecular, Mesoterapia, Suplementos, Cápsulas, Anabólicos) únicamente cuando `activeCat === 'distribuidor-autorizado'`.
   - Actualizar `renderCatalog()` para soportar `subCategory` y mostrar `prod.presentationsSummary` en lugar del texto fijo `"Bolsa • Pote • Granel"`.
4. **`producto.html`**:
   - Mostrar etiqueta de sub-línea en el breadcrumb y cabecera cuando el producto pertenezca a `distribuidor-autorizado`.
   - Ocultar el bloque exclusivo de "COA HPLC BioNativa" si `coaCertified === false`, mostrando en su lugar el sello **"Distribuidor Autorizado — Profit Pharma"**.
