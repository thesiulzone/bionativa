# Especificación Técnica y Plan de Arquitectura: Rediseño de Home BioNativa LAB
> **Documento:** `Technical_Specification_Homepage_Revamp.md`  
> **Fecha:** 25 de Noviembre de 2026  
> **Estado:** Aprobado para Implementación  
> **Objetivo:** Modernizar la Barra Promocional, el Hero Principal y la Sección de Promociones Destacadas en `index.html` bajo estándares internacionales de e-commerce DTC (Direct-To-Consumer) de bienestar y suplementación premium (AG1, Ritual, Hims, Gymshark), manteniendo la identidad "Boticario Científico Moderno" de BioNativa LAB.

---

## 1. Módulos y Arquitectura de Componentes

### 1.1 Módulo 01 · Barra Promocional Dinámica (`#promo-announcement-bar`)
- **Ubicación:** Pre-header en `index.html`.
- **Estructura y Comportamiento:**
  - **Ticker Multi-Mensaje Autoplay:** Rota cada 4.5s entre tres mensajes comerciales de alto impacto (Ahorro en 1kg, pureza COA, y envíos Lima/Cusco/Nacional con Shalom y Marvisur). Soporta pausa al hacer hover y controles discretos (`<` / `>`).
  - **Botón de Cupón Interactivo:** Muestra el cupón `BIONATIVA10` con función `copyCouponCode()` que copia el texto al portapapeles y despliega un micro-tooltip confirmatorio (*¡Copiado! ✓*).
  - **Selector de Sede de Despacho (Lima / Cusco):** Mini selector desplegable para que el usuario elija su sede preferida, actualizando el micro-aviso de envío y guardándolo en `localStorage`.
  - **Canales Rápidos:** Enlace directo a WhatsApp Oficial (+51 981 278 458) y correo de ventas con tipografía condensada y sin estorbar en móviles.

### 1.2 Módulo 02 · Hero Principal Boticario Moderno (`#hero-section`)
- **Ubicación:** Sección inmediatamente posterior al `<header>`.
- **Estructura y Comportamiento:**
  - **Split-Screen Asimétrico (7 cols / 5 cols en desktop):**
    - **Columna Izquierda (Propuesta de Valor & Decisión Dinámica):**
      - *Pill de Autoridad:* Micro-pulso esmeralda con texto *"Materia Prima Americana Grado USP • Lote 2026 Auditado"*.
      - *Titular H1 (Plus Jakarta Sans 800):* *"El estándar de tu naturaleza. Suplementos puros para tu bienestar integral."*
      - *Selector Interactivo de Objetivo de Salud (Interactive Health Goal Switcher):*
        - 3 Botones/Chips: ⚡ **Fuerza & Músculo**, 🧠 **Magnesio & Sueño**, 🦴 **Articulaciones & Longevidad**.
        - Al pulsar cada chip, se actualiza el spotlight visual del Hero (imagen, tags, precio "desde S/...", y enlace directo) con transición suave `animate-fade-in`.
      - *Doble CTA de Conversión:*
        - CTA 1: `[ Ver Catálogo de 19 Productos → ]` (Fondo Botánico `#1E3B2B`, hover con elevación).
        - CTA 2: `[ Asesoría por WhatsApp ]` con badge en vivo de *"En línea • Respuesta en < 5 min"*.
      - *Barra de Métricas y Confianza (Trust Pillars):*
        - *99.8% Pureza Farmacéutica* | *Certificados COA Descargables* | *Despacho en 24h*.
    - **Columna Derecha (Showcase de Producto & Glass Cards):**
      - Contenedor con marco orgánico, fondo suave y halo botánico difuso.
      - Imagen en alta resolución del producto héroe seleccionado.
      - **Glass Badge Superior:** *"Pureza Certificada COA • Grado USP"* con enlace de previsualización.
      - **Glass Badge Inferior:** *"Bolsa 1kg Hermética • Ahorro Directo"* con precio dinámico en soles.

### 1.3 Módulo 03 · Promociones Destacadas & Packs Sinergia (`#promociones-destacadas`)
- **Ubicación:** Reemplaza el ribbon estático antes del catálogo destacado.
- **Estructura y Comportamiento:**
  - **Selector de Pestañas (Tabs):**
    - Pestaña A: `⭐ Packs Sinergia (Stack & Save)`
    - Pestaña B: `📦 Formatos 1 KG (Ahorro Familiar)`
  - **Panel de Packs Sinergia (3 Bundles Clave de Alta Conversión):**
    - **Pack 1: "Pack Sueño Profundo & Cero Estrés"**
      - Productos: *Glicinato de Magnesio 1kg* + *Citrato de Magnesio 1kg*.
      - Precio Individual: S/ 170.00 → **Precio Pack: S/ 145.00** *(Ahorras S/ 25.00 - 15% OFF)*.
      - Botón: `[ Agregar Pack a Mi Bolsa ]` (Agrega ambos productos a `window.cart` con 1 clic y abre el carrito).
    - **Pack 2: "Pack Fuerza & Recuperación Muscular"**
      - Productos: *Creatina Monohidratada 1kg* + *Proteína Whey WPC80 1kg*.
      - Precio Individual: S/ 194.00 → **Precio Pack: S/ 169.00** *(Ahorras S/ 25.00 - 13% OFF)*.
      - Botón: `[ Agregar Pack a Mi Bolsa ]`.
    - **Pack 3: "Pack Salud Articular & Longevidad"**
      - Productos: *Colágeno Hidrolizado 1kg* + *Citrato de Magnesio 1kg*.
      - Precio Individual: S/ 120.00 → **Precio Pack: S/ 102.00** *(Ahorras S/ 18.00 - 15% OFF)*.
      - Botón: `[ Agregar Pack a Mi Bolsa ]`.
  - **Panel de Formatos 1 KG:**
    - Destacado visual de por qué comprar 1 KG en bolsa sellada ahorra hasta un 22% frente a frascos pequeños comerciales.

---

## 2. Integración de Código & Compatibilidad
- **Tailwind CSS & Clases Oficiales:** Uso estricto de los tokens oficiales de BioNativa (`botanical`, `terracotta`, `sand`, `#1E3B2B`, `#B67A52`, `#FAF9F6`, `#F5EFE6`).
- **Antigravity Visual Editor Rules:** Etiquetas bien estructuradas, IDs únicos, sin fragments vacíos, textos directos.
- **JavaScript Modular:** Funciones `initPromoBar()`, `initHeroGoalSwitcher()`, y `initPromoPacks()` añadidas en `js/main.js` o embebidas respetando la carga asíncrona de `cart.js` y `products-data.js`.
