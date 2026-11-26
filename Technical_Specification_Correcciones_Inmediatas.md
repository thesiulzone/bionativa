# Especificación Técnica: Correcciones Inmediatas de Plataforma (P0 & P1)

## 1. Alcance de las Correcciones
A raíz de la auditoría integral de 12 puntos, se ejecutan las siguientes acciones técnicas de remediación inmediata:

1. **Corrección P0: Declaración y Blindaje de `window.BIONATIVA_CONFIG`**
   - Crear inicialización segura en `js/cart.js` garantizando que `window.BIONATIVA_CONFIG` siempre tenga valores por defecto (`whatsappNumber: "51981278458"`, opciones de envío oficiales).
   - Blindar `js/cart.js` (L579, L606), `producto.html` (L675) y `contacto.html` (L310) con optional chaining (`?.`) y fallbacks en caso de variables no inicializadas.
   - Reparar la codificación de caracteres en `contacto.html`.

2. **Corrección P0: Seguridad de Credenciales de Pasarela**
   - Retirar el `Access Token` privado de Mercado Pago que figuraba como fallback en texto plano en `functions/api/create-preference.js` y `_worker.js`.
   - Exigir estrictamente la variable de entorno `env.MP_ACCESS_TOKEN` proporcionada en el panel de Cloudflare Pages.

3. **Corrección P1: Cumplimiento Legal INDECOPI (Libro de Reclamaciones Virtual)**
   - Crear la página reglamentaria `reclamaciones.html` acorde a la Ley N° 29571 (Código de Protección y Defensa del Consumidor del Perú).
   - Diseñar el formulario boticario responsivo con distinción de Reclamo vs. Queja, datos del consumidor, bien contratado, detalle y correlativo de atención.
   - Añadir enlace oficial con ícono/botón del Libro de Reclamaciones en el footer de todas las páginas del sitio.
   - Actualizar `_redirects` y `sitemap.xml`.

4. **Corrección P1: Cabeceras de Seguridad HTTP (`_headers`)**
   - Crear archivo `_headers` para Cloudflare Pages con políticas `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` y `Permissions-Policy`.
