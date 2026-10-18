---
name: rediseno-aplos
description: >-
  Usa este skill cuando el usuario solicite rediseñar, estilizar o actualizar la interfaz visual (HTML/CSS) de BIONATIVA siguiendo el sistema de diseño editorial "Aplós" (estilo boticario clásico / old-world apothecary) documentado en DESIGN.md.
---

# Rediseño Web BIONATIVA — Sistema Aplós

Este skill guía la transformación y rediseño visual de las páginas del proyecto BIONATIVA basándose en la referencia de estilo editorial y boticario descrita en [DESIGN.md](./DESIGN.md).

---

## 1. Principios del Sistema de Diseño

- **Atmósfera:** Boticario antiguo al anochecer (*Old-world apothecary at dusk*). Monocromía cálida y editorial.
- **Jerarquía de Color:** Transición tonal limpia `Bone` → `Paper White` → `Cocoa` → `Ink`. Cero colores decorativos estridentes.
- **Tipografía:** 
  - Títulos y display: Serif editorial clásico (Goudy Old Style o sustitutos Google Fonts: **Cormorant Garamond**, **EB Garamond**, **Playfair Display**) con tracking ajustado (`-0.012em`) e interlineado ceñido (`1.05–1.08`).
  - Textos utilitarios, navegación y botones: Sans-serif neutro del sistema (Inter, system-ui).
- **Formas y Espaciado:**
  - Border radius uniforme y estricto de **`5px`** para tarjetas, botones, inputs y tags (nunca bordes excesivamente redondeados como pills o 20px+).
  - Espaciado amplio y desahogado (secciones entre 96px y 120px).

---

## 2. Tokens Principales

Consulta la tabla completa de tokens en [DESIGN.md](./DESIGN.md):

| Nombre | Hex | Rol |
| :--- | :--- | :--- |
| `--color-bone` | `#f2f1ed` | Fondo general de página y lienzos de sección |
| `--color-paper-white` | `#ffffff` | Superficie de tarjetas y paneles elevados |
| `--color-cocoa` | `#3b3429` | Acentos oscuros cálidos y bloques de texto invertidos |
| `--color-ink` | `#000000` | Textos primarios, titulares oscuros y fondo del Hero |
| `--color-stone` | `#646464` | Texto secundario y descripciones atenuadas |
| `--color-ash` | `#b4aeac` | Sombras sutiles y bordes tenues |

---

## 3. Procedimiento para Rediseñar una Página

1. **Variables y Estilos Base (`css/styles.css`):**
   - Asegurarse de importar las fuentes (`Cormorant Garamond` o `Playfair Display`).
   - Declarar las variables CSS de color, tipografía y radio (`5px`) según [DESIGN.md](./DESIGN.md).
2. **Estructura de Componentes en HTML:**
   - **Barra de Anuncio:** Fondo blanco `#ffffff`, borde inferior sutil de 1px `#e5e3df`, texto sans-serif 12–14px centrado.
   - **Navegación Principal:** Altura ~72px, fondo blanco, logotipo con serif de 26px, enlaces derecha en sans-serif 14px.
   - **Hero Editorial Oscuro:** Fondo `#000000` pleno, tipografía serif en blanco (40–56px) con los productos en primer plano.
   - **Tarjetas de Producto y Beneficios:** Fondo `#ffffff` sobre canvas `#f2f1ed`, radio de `5px`, bordes finos.
   - **Footer:** Tonalidad sobria y tipografía limpia.
3. **Verificación Visual:**
   - Confirmar que no queden botones con bordes ultra-redondeados ni colores saturados que rompan la estética sobria y editorial.
