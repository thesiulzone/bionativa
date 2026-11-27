# Plan Técnico y Arquitectura: Rediseño Comercial de Portada (`index.html`)
> **Documento:** `Technical_Specification_Portada_Comercial.md`  
> **Fecha:** 26 de Noviembre de 2026  
> **Estado:** Pendiente de Aprobación  
> **Alcance:** Exclusivamente `index.html`, manteniendo intacta la navegación actual (`<header>`), la barra superior de anuncios, el `<footer/>` y las páginas secundarias (`tienda.html`, `producto.html`, etc.).

---

## 1. Objetivo
Reestructurar la portada en `index.html` bajo una arquitectura comercial directa de 4 bloques, inspirada en estándares modernos de e-commerce DTC de suplementos (mensaje claro, oferta visible, compra rápida y prueba de confianza), conservando la identidad visual de **BioNativa LAB** (*Boticario Científico Moderno*).

---

## 2. Arquitectura de Bloques en `index.html`

### 01 · Hero Principal (`#hero-section`) — Carrusel Comercial BioNativa LAB
- **Propósito:** Impacto comercial inmediato con campaña activa, producto/bundle destacado, precio u oferta y botón de compra directa.
- **Comportamiento y Controles:**
  - **Carrusel automático** (autoplay cada `5.5s`, con pausa automática al hacer hover o interactuar).
  - **Controles manuales:** Botones `Anterior` / `Siguiente`, indicadores inferiores (*dots*) y soporte táctil (*swipe*) en dispositivos móviles.
  - **Diseño Responsivo:** Layout asimétrico en escritorio (contenido comercial a la izquierda, imagen destacada a la derecha) y apilado limpio en móvil.
- **Slides Propuestos (con assets locales verificados):**
  1. **Campaña BioNativa LAB · Pack Fuerza & Recuperación** — Creatina Monohidratada 1 kg + Proteína de Suero WPC80 1 kg. Mensaje comercial, precio oferta (`S/ 169.00` vs `S/ 194.00`), badge de ahorro y botón de compra directa (`Agregar Pack`) + enlace al catálogo.
  2. **Fuerza Pura · Creatina Monohidratada 200 Mesh (1 kg)** — Grado USP, pureza 99.9% HPLC. Precio promocional (`S/ 74.90` vs `S/ 85.40`) y botón de compra directa.
  3. **Bienestar & Descanso · Bisglicinato de Magnesio Quelado (1 kg)** — Alta absorción sin efecto laxante. Precio (`S/ 49.00`) y botón de compra directa.

---

### 02 · Promociones Activas (`#promociones-activas`)
- **Propósito:** Tres tarjetas compactas de acceso rápido por objetivo de salud, con precio promocional y acción directa.
- **Grid:** `grid-cols-1 md:grid-cols-3 gap-6`
- **Tarjetas:**
  1. **Fuerza** — *Creatina Monohidratada 100% Pura (1 kg)*  
     - Imagen: `img/products/creatina-monohidratada-bolsa-1kg.jpg`  
     - Precio promocional: `S/ 74.90` *(Antes S/ 85.40 · 12% OFF)*  
     - Acceso directo: Botón de compra rápida + enlace a `producto?id=creatina-monohidratada`.
  2. **Bienestar** — *Bisglicinato de Magnesio Quelado (1 kg)*  
     - Imagen: `img/products/glicinato-de-magnesio-bolsa-1kg.jpg`  
     - Precio promocional / directo: `S/ 49.00` *(Formato Ahorro 1 kg)*  
     - Acceso directo: Botón de compra rápida + enlace a `producto?id=glicinato-de-magnesio`.
  3. **Articular** — *Colágeno Hidrolizado Bioactivo Tipo I & III (1 kg)*  
     - Imagen: `img/products/colageno-hidrolizado-bolsa-1kg.jpg`  
     - Precio promocional / directo: `S/ 56.00` *(Péptidos <3000 Da)*  
     - Acceso directo: Botón de compra rápida + enlace a `producto?id=colageno-hidrolizado`.

---

### 03 · Confianza y Respaldo (`#confianza-respaldo`)
- **Propósito:** Bloque breve y escaneable de credibilidad científica y logística ubicado inmediatamente antes de los productos destacados.
- **4 Pilares Exactos:**
  1. **Pureza:** 100% principio activo sin maltodextrina, rellenos ni azúcares.
  2. **Certificados COA:** Trazabilidad y análisis de pureza verificable por lote.
  3. **Procedencia:** Materia prima americana grado farmacéutico (USP).
  4. **Distribución nacional:** Retiro en Lima/Cusco y envíos diarios a todo el Perú vía Shalom y Marvisur.

---

### 04 · Productos Destacados (`#productos-destacados`)
- **Propósito:** Exhibición del catálogo principal (`#featured-products-grid`) con información comercial y técnica orientada a conversión inmediata.
- **Contenido por Tarjeta de Producto:**
  - Imagen de producto (`img/products/...`), badge de categoría o más vendido.
  - Nombre del producto y **presentación** (ej. *Bolsa 1 kg* / *Pote 1 kg*).
  - **Información técnica breve** (pureza HPLC, grado USP, mesh o biodisponibilidad).
  - **Precio** (y precio regular tachado si aplica promoción activa).
  - **Compra rápida** (botón `Añadir al carrito` conectado a `window.cart`) + enlace a la ficha completa (`producto?id=...`).

---

## 3. Estándares Técnicos y Compatibilidad
- **Navegación & Secciones Secundarias:** Se mantiene intacto el `<header>` actual (logo, enlaces, buscador, carrito) y el `<footer>`.
- **Paleta y Tipografía Oficial BioNativa LAB:** `#1E3B2B` (Verde Botánico), `#B67A52` (Terracota), `#FAF9F6` (Lino), `#F5EFE6` (Crema), `#E8E2D8` (Borde), `Plus Jakarta Sans` + `Outfit`.
- **Integración JS:** Reutilización de `js/products-data.js`, `js/cart.js`, `js/promotions-data.js` y `js/promotions-engine.js`, añadiendo el controlador modular del carrusel (`initHeroCarousel()`) en el script de `index.html`.
- **Reglas de Editor Visual (`AGENTS.md`):** Etiquetas HTML semánticas con `id` y `class` explícitos, tarjetas envueltas en contenedores limpios y textos directos editables.
