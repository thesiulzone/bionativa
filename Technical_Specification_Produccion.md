# Especificación Técnica: Puesta en Producción, Tailwind Compilado, Checkout y UX

**Proyecto:** BioNativa LAB (`bionativalab.com`)  
**Fecha:** 2026-11-26  
**Estado:** Pendiente de aprobación  

---

## 1. Prioridad Crítica: Validación Real de Checkout y `pago-resultado.html`

### Hallazgos actuales
- **Backend (`functions/_shared/checkout.js`, `functions/api/create-preference.js`, `functions/api/payment-status.js`):**
  - `buildCheckout()` valida productos, variantes, cantidades (1–20), envío, descuentos, cupones y comisión de tarjeta (4.71%) en servidor.
  - `create-preference.js` requiere `env.MP_ACCESS_TOKEN` configurado en Cloudflare para crear la preferencia en Mercado Pago (`https://api.mercadopago.com/checkout/preferences`).
  - `payment-status.js` valida que `payment_id` sea numérico (`/^\d{1,30}$/`) y consulta `https://api.mercadopago.com/v1/payments/${paymentId}`.
- **Frontend (`js/cart.js`, `pago-resultado.html`):**
  - `initMercadoPagoCheckout()` compara el total calculado en cliente con el `total` devuelto por `/api/create-preference` antes de redirigir a `init_point`.
  - `pago-resultado.html` lee `payment_id` o `collection_id`, consulta `/api/payment-status` y solo limpia `bionativa_cart_v1` si `data.status === "approved"`.

### Plan de acción y verificación
1. **Auditoría de casos borde en `js/cart.js` y `pago-resultado.html`:**
   - Verificar que `pago-resultado.html` maneje correctamente el retorno cuando Mercado Pago envía `status=approved|pending|failure` junto con `collection_status` o `preference_id` sin `payment_id` (caso cancelación/rechazo temprano).
   - Verificar que `cart.js` no pierda `bionativa_applied_coupon` ni rompa el flujo si el usuario regresa desde Mercado Pago con `pending` o `failure`.
2. **Pruebas locales con Wrangler + Suite de pruebas:**
   - Ampliar `tests/checkout.test.mjs` para cubrir escenarios adicionales de cupones inválidos, combinaciones de volumen + cupón y respuestas de `pago-resultado.html` ante estados `approved`, `pending`, `rejected` y ausencia de `payment_id`.
   - Documentar y ejecutar pruebas de humo contra `wrangler dev` (simulando variables de entorno y/o sandbox de Mercado Pago) y entregar una guía paso a paso para validación real en producción con `MP_ACCESS_TOKEN`.

---

## 2. Optimización de Producción: Migración de Tailwind CSS CDN a CSS Compilado

### Hallazgos actuales
- Las **13 páginas HTML** (`index.html`, `tienda.html`, `producto.html`, `nosotros.html`, `blog.html`, `articulo-magnesio.html`, `articulo-creatina.html`, `envios-y-cobertura.html`, `contacto.html`, `terminos-y-privacidad.html`, `pago-resultado.html`, `reclamaciones.html`, `admin-promociones.html`) cargan `<script src="https://cdn.tailwindcss.com"></script>`.
- No existe `package.json` ni `node_modules` en el proyecto.
- `.assetsignore` ya excluye `*.md`, pero deberá excluir `node_modules/` y archivos fuente de build para no inflar el despliegue de Cloudflare Assets.

### Arquitectura propuesta
1. **Configuración de build (`package.json` + `src/tailwind.css`):**
   - Instalar `tailwindcss` y `@tailwindcss/cli` como `devDependencies`.
   - Crear `src/tailwind.css` importando Tailwind y escaneando `*.html` y `js/**/*.js` (manteniendo compatibilidad con todas las clases dinámicas generadas por `cart.js`, `tienda.html` y `producto.html`).
   - Definir scripts npm:
     - `npm run build:css` -> genera `css/tailwind.min.css` minificado.
     - `npm run watch:css` -> modo desarrollo.
     - `npm test` -> ejecuta `node --test tests/checkout.test.mjs`.
2. **Actualización de los 13 archivos HTML:**
   - Reemplazar `<script src="https://cdn.tailwindcss.com"></script>` por `<link rel="stylesheet" href="/css/tailwind.min.css" />` (manteniendo `/css/styles.css` después para variables y estilos propios de marca).
3. **Actualización de `.assetsignore`:**
   - Añadir `node_modules/`, `package.json`, `package-lock.json` y `src/` para que Cloudflare Pages/Workers solo publique los assets compilados.

---

## 3. UX y Catálogo (`tienda.html`, `producto.html` y Navegación Móvil)

### Hallazgos actuales
- **`tienda.html`:** Ya incluye tarjetas HTML estáticas dentro de `#catalog-grid`, pero el script inicial vuelve a renderizar con JS y los filtros/búsqueda dependen de JS. Si hay error de red o JS deshabilitado, conviene mostrar aviso claro y mantener las tarjetas visibles sin parpadeo innecesario.
- **`producto.html`:** Presenta datos técnicos amplios en 7 pestañas (`Beneficios`, `Uso`, `Composición`, `Specs`, `COA`, `Uso Responsable`, `FAQs`), pero la barra de pestañas mezcla `flex-wrap` con `overflow-x-auto` (en móvil puede verse apretada o con saltos de línea incómodos) y no muestra un estado amigable si el producto no carga o JS falla.
- **Navegación móvil:** 10 páginas usan `#mobile-menu-toggle` + `#mobile-menu` con `js/main.js`. Se verificará en viewport móvil (375px) que no haya desbordamiento horizontal, que los botones táctiles tengan buen espaciado y que el menú cierre correctamente.

### Cambios propuestos
1. **`tienda.html`:**
   - Agregar `<noscript>` informativo indicando que los filtros interactivos y el carrito requieren JavaScript mientras las tarjetas estáticas siguen accesibles.
   - Evitar re-render innecesario si no hay filtros activos ni cambios de precio pendientes, o aplicar actualización selectiva de precios/badges sin parpadeo visual.
2. **`producto.html`:**
   - Mejorar la barra de pestañas técnicas en móvil: usar desplazamiento horizontal limpio con estilo de píldoras (`flex-nowrap overflow-x-auto`) en móvil y pestañas amplias en escritorio, asegurando legibilidad y acceso rápido a **Specs** y **Certificado COA**.
   - Agregar fallback visual/mensaje claro si falla la carga de `BIONATIVA_PRODUCTS`.
3. **Verificación visual en navegador (móvil y escritorio):**
   - Inspeccionar `index.html`, `tienda.html`, `producto.html` y `pago-resultado.html` en móvil (375px) y escritorio (1280px) tras compilar Tailwind CSS para confirmar que no haya regresiones visuales.
