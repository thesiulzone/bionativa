# Especificación Técnica: Escalamiento Global de Tipografía y Legibilidad

## 1. Resumen del Requerimiento
Aumentar de manera homogénea el tamaño de tipografía en toda la web de **BioNativa LAB** (barra superior, menú de navegación, descripciones de productos, tarjetas de catálogo, fichas y pie de página), solucionando la presencia de textos excesivamente reducidos (antiguos `10px`, `11px` y `12px`) y elevando la legibilidad, jerarquía y confort de lectura según los principios del sistema de diseño editorial boticario **Aplós**.

---

## 2. Diagnóstico de Tamaños Actuales vs. Nueva Escala Propuesta

| Sección / Elemento | Tamaño Anterior | Nuevo Tamaño Propuesto | Impacto Visual / UX |
| :--- | :--- | :--- | :--- |
| **Barra Superior (Top Bar)** | `text-[11px] sm:text-xs` (11px / 12px)<br>Íconos: `14px` | `text-xs sm:text-[13.5px] lg:text-sm` (13.5px - 14px)<br>Íconos: `16px` (`w-4 h-4`) | Alta nitidez en monitores de alta resolución; lectura clara de ventas@ y WhatsApp sin forzar la vista. |
| **Navegación Header** | `text-sm font-semibold` (14px)<br>Bolsa: `text-xs font-bold` (12px) | `text-[15px] lg:text-base font-semibold` (15px - 16px)<br>Bolsa: `text-sm font-bold` (14px) | Navegación más visible y accesible, alineada a estándares modernos de comercio electrónico. |
| **Menú Móvil (Drawer)** | Enlaces: `text-base` (16px)<br>Ventas: `text-xs` (12px)<br>Redes: `w-9 h-9` | Enlaces: `text-lg font-bold` (18px)<br>Ventas: `text-sm font-medium` (14px)<br>Redes: `w-10 h-10` con íconos de `20px` | Área táctil ergonómica y texto cómodo para pulgar en móviles. |
| **Tarjetas de Catálogo (`tienda.html` & `index.html`)** | Badges/Categoría: `text-[10px]`<br>Descripción: `text-xs` (12px)<br>Beneficios: `text-[11px]`<br>Precio: `text-base` (16px)<br>Botón: `text-xs` (12px) | Badges/Categoría: `text-xs font-semibold` (12px)<br>Descripción: `text-sm text-stone-600` (14px)<br>Beneficios: `text-xs font-medium` (12px)<br>Precio: `text-lg sm:text-xl font-bold` (18px - 20px)<br>Botón Ficha: `text-sm font-medium` (14px) | Las tarjetas ya no se ven diminutas ni apretadas; los precios y beneficios destacan con naturalidad. |
| **Ficha de Producto (`producto.html`)** | Badges confianza: `text-[10px]`<br>Variantes: `text-xs`<br>Descripción / Uso: `text-xs sm:text-sm` | Badges confianza: `text-xs`<br>Variantes: `text-sm font-medium`<br>Descripción / Uso: `text-sm sm:text-base leading-relaxed` | Máxima facilidad de lectura de ingredientes, modo de toma y especificaciones COA. |
| **Secciones de Contenido (Pilares, Categorías, Blog, Envíos)** | Párrafos descriptivos: `text-xs` (12px) | Párrafos descriptivos: `text-sm sm:text-[15px] leading-relaxed` (14px - 15px) | Lectura fluida sin fatiga visual. |
| **Pie de Página (Footer)** | Texto descriptivo: `text-xs` (12px)<br>Correo: `text-xs`<br>Redes: `w-7 h-7` (28px)<br>Copyright: `text-[11px]` | Texto descriptivo: `text-sm text-stone-300` (14px)<br>Correo: `text-sm`<br>Redes: `w-8 h-8` (32px) con SVG `16px`<br>Copyright: `text-xs text-stone-400` (12px) | Footer balanceado, legible y con proporciones elegantes. |
| **Tokens Globales (`css/styles.css`)** | `--text-caption: 12px`<br>`--text-body-sm: 14px`<br>`--text-body: 16px` | `--text-caption: 13px`<br>`--text-body-sm: 15px`<br>`--text-body: 17px`<br>`body { font-size: var(--text-body); }` | Escala base de tipografía modernizada para soporte universal. |

---

## 3. Plan de Implementación por Fases

1. **Fase 1: Tokens Globales en `css/styles.css`**
   - Actualizar las variables de escala tipográfica (`--text-caption`, `--text-body-sm`, `--text-body`) para asentar la base general.
2. **Fase 2: Header & Footer en las 10 Páginas HTML**
   - Actualizar la barra superior a `text-xs sm:text-[13.5px] lg:text-sm` e íconos `w-4 h-4`.
   - Escalar la barra de navegación de escritorio a `text-[15px] lg:text-base` y el botón del carrito a `text-sm`.
   - Ajustar el cajón de menú móvil (`mobile-menu`).
   - Escalar los textos y botones del footer a `text-sm` y copyright a `text-xs`.
3. **Fase 3: Secciones Principales & Renderizado Dinámico**
   - Actualizar tarjetas de catálogo estáticas y dinámicas en `index.html` y `tienda.html` (`renderCatalog()`).
   - Actualizar la plantilla de ficha de producto en `producto.html` (`renderProductPage()`).
   - Ajustar textos descriptivos en `nosotros.html`, `blog.html`, `articulo-magnesio.html`, `articulo-creatina.html`, `envios-y-cobertura.html`, `contacto.html` y `terminos-y-privacidad.html`.
4. **Fase 4: Verificación Visual y Responsive**
   - Comprobación de ausencia de desbordamientos horizontales o solapamientos en resoluciones móviles (360px a 430px), tablets (768px a 1024px) y desktop (1280px+).

---

## 4. Criterios de Aceptación
1. ✅ No quedan textos diminutos de `10px` o `11px` en ninguna sección clave del sitio.
2. ✅ Los enlaces de ventas y redes sociales en header y footer se distinguen con claridad inmediata.
3. ✅ Los precios, títulos y fichas de productos en el catálogo tienen jerarquía visual atractiva y legible.
4. ✅ Se preserva la elegancia editorial del estilo boticario "Aplós" (sin romper maquetación ni espaciados).
