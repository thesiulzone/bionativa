# Especificación Técnica: Diagnóstico y Solución de Carga en Catálogo (/tienda)

## 1. Diagnóstico del Problema Reportado

### 1.1 Síntoma Observado por el Usuario y Bots de IA (ChatGPT, SearchGPT, Crawlers)
Al ingresar directamente a `https://bionativalab.com/tienda` o `https://bionativalab.com/tienda?utm_source=chatgpt.com`, el consultor automático o usuario sin ejecución completa de JavaScript observó:
- Filtros de categorías.
- Buscador y selector de ordenamiento.
- El mensaje: **«No se encontraron suplementos»**.
- Cero tarjetas de productos en el contenido extraído.

### 1.2 Causa Raíz Identificada

1. **Catálogo 100% Client-Side Rendered (CSR):**
   - En el archivo `tienda.html` fuente en el servidor:
     ```html
     <!-- Products Grid -->
     <div id="catalog-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       <!-- Rendered by JS -->
     </div>
     ```
   - El contenedor `#catalog-grid` viaja **vacío en el HTML inicial**.
   - Los productos solo se pintan después de que se descarga, analiza y ejecuta `js/products-data.js` mediante la función `renderCatalog()`.

2. **Falso Positivo en Extractores de Texto y LLM Browsers (ChatGPT Web Browser):**
   - Directamente debajo de la rejilla vacía se encuentra:
     ```html
     <!-- No Results State -->
     <div id="no-results" class="text-center py-16 hidden">
       ...
       <h3 class="text-base font-bold text-[#1E3B2B]">No se encontraron suplementos</h3>
       <p class="text-xs text-stone-500 mt-1">Prueba buscando con otro término o limpia los filtros.</p>
       ...
     </div>
     ```
   - El agente de navegación de ChatGPT (y otros crawlers que extraen texto plano del DOM o que no ejecutan el motor de Tailwind CSS CDN antes del scraping):
     - No ejecuta scripts complejos o toma un snapshot textual directo.
     - Lee el texto del nodo `#no-results` porque `class="hidden"` requiere que la hoja de estilos esté computada, pero la clase CSS puede ser ignorada por motores de lectura de texto/markdown.
     - Como la rejilla de productos no tiene texto estático, el único texto en la sección principal es **«No se encontraron suplementos»**.

3. **Verificación en Navegador Real (Chrome / Chromium con JS activo):**
   - Realizamos la prueba en vivo mediante subagente de navegación con Chromium sobre `https://bionativalab.com/tienda`:
     - Estado HTTP: **200 OK**.
     - Tiempo de carga: Rápido, sin errores de consola.
     - En navegador real con JS: Se pintan los **19 productos**, los filtros funcionan y el carrito responde.
     - El mensaje «No se encontraron suplementos» está oculto correctamente una vez que JS corre.
   - **Conclusión**: El problema no es un fallo en la base de datos (ya que el sitio es estático impulsado por `products-data.js`), sino una **deficiencia de renderizado estático inicial (SSR / Pre-rendering)** que afecta severamente a motores de búsqueda, indexación de Google, ChatGPT Search, Perplexity y usuarios con conexiones lentas o bloqueadores de scripts.

---

## 2. Plan Técnico y Arquitectura de la Solución

### Objetivo
Hacer que el catálogo sea **100% resiliente e indexable** (SSR-ready / Pre-renderizado estático), de modo que cualquier bot, crawler o navegador reciba inmediatamente los 19 productos en el HTML inicial, sin depender exclusivamente de JavaScript para mostrarlos.

### Cambios Propuestos

#### A. Pre-renderizado de las 19 Tarjetas en `tienda.html`
- Inyectar estáticamente dentro de `<div id="catalog-grid">` las 19 tarjetas de productos completas (con sus imágenes, badges, precios en Soles, enlaces a fichas técnicas y botón de agregar).
- Al cargar la página, los 19 productos son inmediatamente visibles tanto para humanos como para robots de búsqueda e IA (SEO + GEO optimizado).
- Cuando el JavaScript carga, toma control (*hydration*) para filtrar dinámicamente según la categoría o el término buscado.

#### B. Robustecimiento del Contenedor `#no-results`
- Añadir estilo en línea `style="display: none;"` además de la clase `hidden`:
  ```html
  <div id="no-results" class="text-center py-16 hidden" style="display: none;">
  ```
- Así, incluso los lectores que analizan estilos básicos sabrán inequívocamente que este bloque no está visible por defecto.

#### C. Sanitización de Parámetros URL en `tienda.html`
- En `initCatalog()`, verificar que el parámetro `cat` pertenezca a las categorías válidas (`['all', 'fuerza-deporte', 'salud-articular', 'estres-descanso']`). Si se pasa un parámetro inesperado (como `cat=undefined` o parámetros de tracking mal interpretados), se asegura `activeCat = 'all'`.

#### D. Rutas Absolutas para Scripts y Assets
- Cambiar `<script src="js/products-data.js">` a `<script src="/js/products-data.js">` para evitar cualquier problema de resolución si la URL tiene slash final (`/tienda/`).

---

## 3. Plan de Pruebas y Validación
1. Inspección de HTML con `curl` a nivel de texto plano para certificar que los 19 productos están presentes en el cuerpo de la respuesta HTTP.
2. Comprobación de que `#no-results` tiene `style="display: none;"`.
3. Prueba interactiva de filtrado y búsqueda con navegador real.
4. Verificación de compatibilidad con Antigravity Visual Editor y reglas de proyecto.
