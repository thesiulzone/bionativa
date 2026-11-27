# Technical Specification: Migración de Tailwind CSS CDN a CSS Compilado Localmente

## 1. Diagnóstico Actual
Actualmente el sitio depende de **Tailwind Play CDN** (`<script src="https://cdn.tailwindcss.com"></script>`) en tiempo de ejecución en el navegador:

- **Archivos HTML afectados (13):**
  - `index.html` (incluye `tailwind.config` inline con colores `botanical`, `terracotta`, `sand`)
  - `tienda.html`
  - `producto.html`
  - `nosotros.html`
  - `blog.html`
  - `articulo-magnesio.html`
  - `articulo-creatina.html`
  - `envios-y-cobertura.html`
  - `contacto.html`
  - `terminos-y-privacidad.html`
  - `pago-resultado.html`
  - `reclamaciones.html`
  - `admin-promociones.html` (incluye `tailwind.config` inline propio con `fontFamily` y escalas `botanical`/`terracotta`)
- **Estilos personalizados:** `css/styles.css` (enlazado en 12 de los 13 HTML; `admin-promociones.html` usa `<style>` inline).
- **Renderizado dinámico:** Los scripts en `js/*.js` (`main.js`, `cart.js`, `products-data.js`, `promotions-engine.js`, etc.) generan marcado HTML con clases de Tailwind en el cliente.
- **Despliegue:** `wrangler.jsonc` sirve el directorio raíz (`.`) como assets estáticos en Cloudflare, excluyendo archivos internos mediante `.assetsignore`. No existe `package.json` en la raíz del proyecto actualmente.

### Riesgos de usar Play CDN en producción
1. **Disponibilidad y bloqueo:** Si `cdn.tailwindcss.com` falla o es bloqueado, la página pierde todo el layout y estilos utilitarios.
2. **Rendimiento en cliente (FCP / TBT):** El navegador debe descargar, parsear y ejecutar el compilador JS de Tailwind en cada carga para escanear el DOM e inyectar estilos, además de poder provocar FOUC (*Flash of Unstyled Content*).
3. **Tamaño innecesario:** Se descarga el runtime completo del compilador en lugar de únicamente las clases CSS usadas por el sitio.

---

## 2. Arquitectura Propuesta

Generar un único archivo CSS estático compilado y minificado (por ejemplo, `css/tailwind.css` o integrarlo en un flujo de build hacia `css/styles.min.css`), servido directamente desde los assets propios del sitio en Cloudflare.

### Componentes de la solución
1. **Configuración de build (`package.json` + Tailwind CSS v3 CLI o v4 CLI):**
   - **Opción recomendada (Tailwind v3 CLI, compatibilidad directa con `tailwind.config`):**
     - Instalar `tailwindcss` (v3) como `devDependency` en `package.json`.
     - Crear `tailwind.config.js` unificando las extensiones de tema de `index.html` (`botanical`, `terracotta`, `sand`) y `admin-promociones.html` (revisando posibles colisiones en `botanical.50/100/600` y `terracotta.500/600`).
     - Configurar `content: ["./*.html", "./js/**/*.js"]` para capturar todas las clases estáticas y dinámicas.
   - **Archivo de entrada:** `src/input.css` (o `css/input.css`) con `@tailwind base; @tailwind components; @tailwind utilities;` (o unificado con `css/styles.css`).
   - **Archivo de salida:** `css/tailwind.css` (minificado con `--minify`).
2. **Actualización de los 13 HTML:**
   - Eliminar `<script src="https://cdn.tailwindcss.com"></script>` y los bloques `<script>tailwind.config = ...</script>`.
   - Enlazar `<link rel="stylesheet" href="/css/tailwind.css" />` antes de `css/styles.css`.
3. **Higiene de despliegue (`.assetsignore` / `.gitignore`):**
   - Añadir `node_modules/`, `package.json`, `package-lock.json`, `tailwind.config.js` y `src/` (si aplica) a `.assetsignore` para no subir dependencias de desarrollo a Cloudflare Assets.

---

## 3. Riesgos y Puntos de Atención en la Migración
- **Colisión de tokens entre `index.html` y `admin-promociones.html`:** Ambos definen `botanical` y `terracotta` con ligeras diferencias en los tonos (`600` es `#2A523C` en `index.html` y `#1E3B2B` en `admin-promociones.html`), aunque la búsqueda actual no detecta clases `botanical-*` o `terracotta-*` activas en el HTML/JS. Se verificará antes de unificar.
- **Clases dinámicas en JS:** Cualquier clase construida por concatenación en `js/*.js` (ej. ``bg-${color}-500``) no sería detectada por el escáner estático y requeriría `safelist` o clases completas.
- **Reglas de Visual Editor (`AGENTS.md`):** El CSS generado no altera la estructura HTML ni los identificadores requeridos por el editor visual.

---

## 4. Plan de Verificación
1. Compilar el CSS generado y verificar su tamaño final minificado.
2. Comprobar que no queden referencias a `cdn.tailwindcss.com` en `*.html`.
3. Ejecutar pruebas existentes (`js/checkout.test.mjs`) y validar visualmente páginas clave (`index.html`, `tienda.html`, `producto.html`, `admin-promociones.html`) en el navegador para confirmar paridad visual.
