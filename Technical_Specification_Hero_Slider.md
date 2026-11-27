# Plan Técnico: Rediseño del Slider Principal ("03 · Oferta directa") + Módulo de Gestión en `admin-promociones.html`

## 1. Objetivo y Alcance
1. **Rediseñar únicamente el slider principal (`#hero-section`)** en [index.html](file:///g:/Mi%20unidad/CONTABILIDAD/BIONATIVA/index.html) tomando como referencia visual la propuesta **“03 · Oferta directa”**, manteniendo intactos el sistema de navegación de Bosque, el resto de secciones, la paleta oficial (`#1E3B2B`, `#FAF9F6`/`#F5EFE6`, `#B67A52`, `#5C665F`) y la tipografía (`Plus Jakarta Sans` + `Outfit`).
2. **Integrar un nuevo módulo en [admin-promociones.html](file:///g:/Mi%20unidad/CONTABILIDAD/BIONATIVA/admin-promociones.html)** para administrar las promociones, textos, precios, acciones y **cargar las imágenes** que rotan en el slider principal, indicando explícitamente las dimensiones recomendadas en píxeles.

---

## 2. Arquitectura Visual del Slider Principal (`#hero-section`)
- **Composición dividida**: Contenido de oferta a la izquierda (`lg:col-span-6`) y productos protagonistas a la derecha (`lg:col-span-6`), con amplia separación y espacio en blanco.
- **Escenario de productos (derecha)**: Fondo crema sutil (`#F5EFE6`) con una forma orgánica discreta (óvalo/arco suave) y sombra blanda en la base para distinguir los envases blancos sin adornos competitivos.
- **Orden del contenido (izquierda)**:
  1. Insignia pequeña discreta (opcional, solo si aplica a la oferta).
  2. Titular breve orientado al cliente (Slide 1: `Tu rutina, mejor equipada`).
  3. Descripción corta con nombres y datos reales de los productos.
  4. Precio actual destacado en terracota (`#B67A52`), precio anterior tachado y píldora de ahorro **únicamente cuando existen datos reales y correctos**:
     - **Slide 1 (Pack Fuerza & Recuperación)**: **S/ 206.50** | ~~S/ 217.00~~ | **Ahorra S/ 10.50** (suma real de Creatina 1 kg S/ 74.90 + Proteína WPC80 1 kg S/ 131.60).
     - **Slide 2 (Creatina Monohidratada 1 kg)**: **S/ 74.90** | ~~S/ 85.40~~ | **Ahorra S/ 10.50** (12% OFF activo).
     - **Slide 3 (Bisglicinato de Magnesio 1 kg)**: **S/ 49.00** (sin precio tachado ni ahorro inventado).
  5. Botón principal (`Comprar pack` en Slide 1, `Comprar creatina` / `Comprar magnesio` en Slides 2 y 3).
- **Funcionamiento**: Se conservan `goToHeroSlide`, `prevHeroSlide`, `nextHeroSlide`, autoplay, pausa al hover y swipe táctil en móvil y escritorio.

---

## 3. Nuevo Módulo en `admin-promociones.html` ("Slider Principal")

### 3.1 Nueva Pestaña y Gestión de Slides
- Se añadirá la pestaña **“🖼️ Slider Principal”** (`#tab-hero-slider`) junto a las pestañas existentes (`Productos`, `Volumen`, `Combos`, `Cupones`).
- **Listado de Slides** con vista previa en miniatura, orden (`↑` / `↓`), estado (Activo / Pausado), precio mostrado y botones de **Editar** y **Eliminar**, más botón **“+ Nuevo Slide”**.

### 3.2 Formulario de Edición / Creación de Slide (Modal `#modal-hero-slide`)
- **Insignia pequeña** (opcional, ej. `Pack más pedido`, `12% OFF`).
- **Titular** (ej. `Tu rutina, mejor equipada`).
- **Descripción corta** (nombres y datos reales del pack/producto).
- **Precios**:
  - Precio actual (`S/`).
  - Precio anterior tachado (`S/`, opcional; si se deja vacío o `<= precio actual`, no se muestra tachado ni ahorro).
  - Cálculo automático en vivo del ahorro (`Ahorra S/ XX.XX`).
- **Botón principal**:
  - Texto del botón (ej. `Comprar pack`).
  - Tipo de acción al hacer clic:
    - `Pack / Bundle` (`fuerza`, `sueno`, `articular` vía `addPromoBundle`)
    - `Producto del catálogo` (selector de producto + variante para agregar al carrito)
    - `Enlace personalizado` (URL interna o externa).
- **Carga de Imágenes para el Slider + Guía de Píxeles**:
  - Bloque informativo visible con las medidas exactas requeridas:
    - **Imagen principal (producto único o pack compuesto)**: **`800 × 800 px`** (relación `1:1`) o **`1000 × 800 px`** (relación `5:4`), formato `PNG`, `WebP` o `JPG`, máx. `300 KB` (ideal fondo transparente o crema `#F5EFE6`).
    - **Imagen secundaria opcional (segundo envase para packs)**: **`600 × 750 px`** (relación `4:5` vertical).
  - **Dos modos de carga**:
    1. **Subir archivo desde el equipo** (`<input type="file" accept="image/png,image/jpeg,image/webp">`): lee la imagen, muestra sus dimensiones reales detectadas (`ancho × alto px`) y peso, advierte si es menor a `500 px`, y la optimiza automáticamente en `<canvas>` (WebP/JPEG máx. `1000 px`) para guardarla de forma segura en `localStorage` sin exceder la cuota.
    2. **Ruta / URL del servidor** (ej. `img/products/creatina-monohidratada-bolsa-1kg.jpg`).
  - Vista previa en vivo del bloque visual sobre fondo crema `#F5EFE6`.

---

## 4. Sincronización y Archivos a Modificar
1. [js/promotions-data.js](file:///g:/Mi%20unidad/CONTABILIDAD/BIONATIVA/js/promotions-data.js):
   - Agregar arreglo `heroSlides` dentro de `window.BIONATIVA_PROMOTIONS_DEFAULT` con los 3 slides iniciales y sus datos reales.
2. [admin-promociones.html](file:///g:/Mi%20unidad/CONTABILIDAD/BIONATIVA/admin-promociones.html):
   - Añadir la pestaña `#tab-hero-slider`, el renderizado de tarjetas de slides, el modal `#modal-hero-slide` con carga de imágenes + indicador de píxeles, y la persistencia en `currentConfig.heroSlides` mediante `saveAndNotify()`.
3. [index.html](file:///g:/Mi%20unidad/CONTABILIDAD/BIONATIVA/index.html):
   - Rediseñar `#hero-section` según la propuesta **03 · Oferta directa**.
   - Agregar `renderHeroSlidesFromConfig()` dentro de `initIndexPromotions()` para renderizar dinámicamente `#hero-carousel-track` y `#hero-carousel-dots` cuando existan slides configurados en `BionativaPromotions` (incluyendo sincronización en tiempo real vía evento `bionativa:promotions_updated`).
4. [css/tailwind.css](file:///g:/Mi%20unidad/CONTABILIDAD/BIONATIVA/css/tailwind.css):
   - Recompilar ejecutando `npm run build:css`.

---

## 5. Verificación
- Ejecutar `npm run build:css` y comprobar compilación limpia.
- Verificar en navegador:
  - El diseño de `#hero-section` (03 · Oferta directa) en escritorio y móvil, y que el header de Bosque permanece intacto.
  - Que en `admin-promociones.html` se puedan crear/editar slides, subir imágenes, ver la guía de píxeles (`800 × 800 px` / `1000 × 800 px` y `600 × 750 px` para segundo envase), guardar cambios y verlos reflejados en `index.html`.
