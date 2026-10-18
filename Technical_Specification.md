# Especificación Técnica: Restauración del Primer Diseño Minimalista Orgánico

## 1. Resumen del Requerimiento
Revertir la estética visual general del sitio web **BioNativa LAB** al **primer diseño creado** (Estética Minimalista Orgánica Botánica), descartando la dirección editorial boticario/antigua (Aplós) pero **preservando de manera estricta todas las modificaciones funcionales y de identidad solicitadas por el cliente**:
1. **Canales de Correo:** Enlace oficial a `ventas@bionativalab.com` con protocolo `mailto:` en la barra superior (Top Bar), en el cajón de navegación móvil y en el pie de página (Footer).
2. **Redes Sociales Oficiales:** Íconos SVG interactivos y enlaces funcionales a TikTok (`@bionativalab`), Instagram (`@bionativalab`) y Facebook (`@bionativalab`) tanto en el Header como en el Footer.
3. **Fondo de Imágenes:** Mantenimiento de las fotografías de productos optimizadas y recortadas limpias con fondo sólido (`img/products/creatina-monohidratada-1kg.jpg`, `img/products/ashwagandha-capsulas.jpg`, etc.), garantizando su perfecta integración cromática con las tarjetas y lienzos.
4. **Legibilidad Optimizada:** Preservar la escala de tipografía cómoda y legible para asegurar una lectura fluida en móviles y escritorios.

---

## 2. Comparativa: Primer Diseño Orgánico vs. Modificaciones Conservadas

| Dimensión Visual / Funcional | Primer Diseño Original (A Restaurar) | Modificaciones Recientes (A Conservar) |
| :--- | :--- | :--- |
| **Paleta Cromática** | • Verde Bosque Botánico (`#1E3B2B`)<br>• Terracota Mineral Ámbar (`#B67A52`)<br>• Blanco Lino Cálido (`#FAF9F6`)<br>• Crema Etiqueta (`#F5EFE6`) | Se mantiene idéntica, con contrastes nítidos y sin tonos oscuros o negros pesados innecesarios. |
| **Tipografía** | • **Headings:** `Plus Jakarta Sans` (moderna, fresca, geométrica)<br>• **Cuerpo / UI:** `Outfit` (limpia, contemporánea)<br>• *(Se descarta Cormorant Garamond / Serif clásico)* | Escala de texto amplia y de alta legibilidad solicitada por el usuario. |
| **Morfología y Bordes** | • Radios suaves y orgánicos: `rounded-2xl`, `rounded-xl`, `rounded-full`.<br>• Tarjetas `.organic-card` con elevación y sombras suaves al hover.<br>• *(Se descartan los bordes estrictos de 5px / esquinas duras)* | Bordes orgánicos y amigables característicos de la marca. |
| **Header & Barra Superior** | • Header translúcido con desenfoque de fondo (`backdrop-blur-md`).<br>• Selector de variantes e insignias limpias. | **CONSERVAR:**<br>• Correo `ventas@bionativalab.com`<br>• Enlaces a TikTok, Instagram y Facebook.<br>• Teléfono y link a WhatsApp. |
| **Menú Móvil (Drawer)** | • Menú deslizante limpio con buscador y navegación directa. | **CONSERVAR:**<br>• Acceso directo a correo de ventas.<br>• Barra de redes sociales oficiales. |
| **Hero Section (Inicio)** | • Hero luminoso y cálido con propuesta de valor, badges botánicos y tarjeta destacada de *Unboxing Experience*. | Mantiene las fotos de producto limpias con fondo sólido armonizado. |
| **Pie de Página (Footer)** | • Estructura en 5 columnas con Verde Bosque Profundo (`#14281D`), enlaces por categoría y descargo de salud E-E-A-T. | **CONSERVAR:**<br>• Correo de ventas activo.<br>• Íconos y enlaces a TikTok, Instagram y Facebook.<br>• Punto de entrega físico en Cusco y almacén Lima. |
| **Imágenes de Catálogo** | • Contenedores orgánicos con zoom suave al hover (`group-hover:scale-105`). | **CONSERVAR:**<br>• Imágenes con fondo sólido limpio en lugar de artefactos blancos o bordes duros. |

---

## 3. Plan de Implementación por Fases

### Fase 1: Restauración de Tokens y Reglas en `css/styles.css`
- Reemplazar la importación de `Cormorant Garamond` por la dupla moderna `Outfit` + `Plus Jakarta Sans`.
- Restablecer las variables CSS raíz (`--color-primary`, `--color-accent`, `--color-canvas`, etc.).
- Restablecer clases de diseño orgánico:
  - `.organic-card` (borde sutil, radio de 1.25rem, elevación suave al hover).
  - `.badge-clean` y `.badge-accent` (pills redondeados con padding balanceado).
  - Efectos de zoom de imagen (`.product-img-wrapper img`) y animación de pulso WhatsApp (`.btn-whatsapp-pulse`).
- Asegurar tamaños de fuente accesibles y cómodos para lectura.

### Fase 2: Actualización de `index.html`
- Restaurar el **Hero Section** original (diseño luminoso en gradiente cálido, tarjeta con `unboxing-experience.jpg`, badges flotantes de pureza COA).
- Restaurar el **Pilar de Valores** con íconos circulares orgánicos.
- Restaurar el **Banner Interactivo de Variantes de Creatina** (Bolsa 1kg, Pote 600g, Pote 300g, Frasco 120 Cápsulas) con cálculo dinámico y selector activo.
- Mantener en la **Barra Superior** y en el **Footer**:
  - Correo: `ventas@bionativalab.com` con `mailto:`
  - Redes: TikTok, Instagram, Facebook con sus SVGs y enlaces
- Mantener las imágenes de producto limpias con fondo sólido.

### Fase 3: Actualización de Páginas Interiores (9 Páginas)
- `tienda.html` & `producto.html`: Restaurar catálogo con tarjetas `.organic-card`, selector de variantes, pestañas de ficha técnica COA y badges orgánicos. Integrar barra superior con correo y redes.
- `nosotros.html`: Restaurar comparativa visual orgánica vs. suplementos comerciales y certificaciones.
- `blog.html`, `articulo-magnesio.html`, `articulo-creatina.html`: Restaurar tipografía editorial contemporánea sin fuentes góticas/antiguas.
- `envios-y-cobertura.html`, `contacto.html`, `terminos-y-privacidad.html`: Restaurar estética moderna, formulario limpio y enlaces directos.

### Fase 4: Verificación Integral
- Comprobación de funcionamiento del carrito de compras (`cart.js`) y catálogo dinámico (`products-data.js`).
- Comprobación de que todos los enlaces a redes sociales y correo de ventas funcionen con un clic.
- Comprobación de responsive design en móviles (360px - 430px), tablets (768px - 1024px) y pantallas de escritorio (1280px+).

---

## 4. Criterios de Aceptación
1. ✅ El diseño visual refleja fielmente el estilo minimalista orgánico original de BioNativa LAB (verde botánico, terracota, lino cálido, formas redondeadas y modernas).
2. ✅ Se descartan los estilos rígidos de boticario (esquinas duras de 5px y tipografía Cormorant Garamond).
3. ✅ Enlaces de **correo** (`ventas@bionativalab.com`) y **redes sociales** (TikTok, Instagram, Facebook) presentes y operativos en Header y Footer.
4. ✅ Las **imágenes con fondo sólido** se mantienen integradas armoniosamente en todo el sitio.
5. ✅ La navegación, el carrito de compras y la pasarela 3 en 1 funcionan al 100%.
