# Guía de Estilo Oficial y Sistema de Diseño — BioNativa LAB
> **Versión 1.0** | Auditoría y extracción directa de código fuente, assets SVG y recursos en `G:\Mi unidad\CONTABILIDAD\BIONATIVA` y Workspace BioNativa.

---

## 1. Identidad de Marca y Concepto Visual

**BioNativa LAB** se posiciona bajo el arquetipo de **"Boticario Científico Moderno"**: una fusión equilibrada entre la pureza botánica natural y el rigor químico de laboratorio respaldado por certificados COA (Certificate of Analysis).

### 1.1 El Isotipo Oficial (Símbolo Bivalente)
El símbolo de la marca es una **gota/hoja dividida verticalmente** que representa la unión de dos mundos:
1. **Mitad Izquierda (Naturaleza Orgánica):**
   - Silueta de hoja con nervaduras fluidas en **Verde Bosque Botánico** (`#1E3B2B`).
   - Simboliza origen vegetal, biocompatibilidad y salud fitoterapéutica.
2. **Mitad Derecha (Estructura Mineral / Laboratorio):**
   - Retícula geométrica facetada simulando cristales minerales y estructura molecular en **Terracota Mineral** (`#B67A52`).
   - Simboliza pureza química, precisión de dosis, formulación científica y certificación COA.

### 1.2 Logotipo y Jerarquía Tipográfica de Marca
- **"BioNativa"**: Tipografía *Plus Jakarta Sans*, peso 800 (ExtraBold), color `#1E3B2B`, espaciado óptico (tracking) `-0.5px`.
- **"LAB"**: Tipografía *Plus Jakarta Sans*, peso 800 (ExtraBold), caja alta, color `#B67A52`, tracking expandido `+2px`.
- **Slogan Oficial**: *"El estándar de tu naturaleza"* en *Outfit*, peso 400 (Regular), color `#2C3531` o `#1E2421`, tracking `+0.3px`.

---

## 2. Paleta Cromática Oficial (Tokens de Color)

### 2.1 Colores Principales (Brand Core)

| Rol / Nombre | HEX | RGB | CMYK (Aprox. Impresión) | Aplicación / Uso |
| :--- | :--- | :--- | :--- | :--- |
| **Verde Bosque Botánico (Primario)** | `#1E3B2B` | `rgb(30, 59, 43)` | `C:80 M:45 Y:75 K:55` | Barra superior, encabezados, botones primarios, isotipo izquierdo, footer. |
| **Verde Botánico Profundo (Dark)** | `#14281D` | `rgb(20, 40, 29)` | `C:82 M:50 Y:78 K:70` | Fondos oscuros de alto contraste, hero slabs oscuros, hover intenso. |
| **Verde Bosque Intermedio (Light/Hover)** | `#2A523C` | `rgb(42, 82, 60)` | `C:75 M:35 Y:70 K:35` | Bordes en bloques oscuros, estado hover de botones botánicos. |
| **Terracota Mineral (Acento Oficial)** | `#B67A52` | `rgb(182, 122, 82)` | `C:25 M:60 Y:75 K:10` | Isotipo derecho ("LAB"), badges de carrito, botones secundarios, acentos de interacción. |
| **Terracota Cálido Claro** | `#CF926B` | `rgb(207, 146, 107)` | `C:15 M:45 Y:60 K:0` | Iconos de contacto, enlaces de utilidad, bordes resaltados. |
| **Terracota Profundo** | `#9E623B` | `rgb(158, 98, 59)` | `C:28 M:65 Y:80 K:20` | Estados activos/pressed de componentes terracota. |

### 2.2 Fondos, Superficies y Neutros (Atmósfera de Papel Boticario)

| Rol / Nombre | HEX | RGB | Aplicación / Uso |
| :--- | :--- | :--- | :--- |
| **Blanco Lino Cálido (Canvas Web)** | `#FAF9F6` | `rgb(250, 249, 246)` | Fondo general de páginas y fondos de posts/carruseles. Sustituye al blanco frío artificial. |
| **Crema Etiqueta Boticario** | `#F5EFE6` | `rgb(245, 239, 230)` | Tarjetas secundarias, fondos de tablas comparativas y simulación de etiqueta física de producto. |
| **Blanco Superficie (Surface)** | `#FFFFFF` | `rgb(255, 255, 255)` | Tarjetas elevadas de producto (`.organic-card`), modales, inputs de formulario. |
| **Borde Lino Mineral** | `#E8E2D8` | `rgb(232, 226, 216)` | Bordes sutiles de cards, líneas divisorias y contenedores limpios. |
| **Carbón Botánico (Texto Primario)** | `#1E2421` | `rgb(30, 36, 33)` | Texto de lectura, titulares oscuros y cuerpos de alta legibilidad (nunca `#000000` absoluto). |
| **Gris Salvia Mineral (Texto Secundario)**| `#5C665F` | `rgb(92, 102, 95)` | Subtítulos técnicos, dosificaciones, notas al pie y descripciones secundarias. |

### 2.3 Colores de Acción y Conversión

| Rol / Nombre | HEX | Aplicación |
| :--- | :--- | :--- |
| **WhatsApp Oficial** | `#25D366` | Botón flotante de WhatsApp, badges de contacto en vivo y pulso de atención. |
| **Menta / Celular (Salud Activa)** | `#34D399` / `#10B981` | Puntos de pulso ("Materia Prima en Stock"), verificación de COA aprobado. |

---

## 3. Tipografía Oficial

El sistema tipográfico de BioNativa LAB utiliza dos familias compatibles de Google Fonts optimizadas para entornos digitales y piezas gráficas:

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
```

### 3.1 Fuente Primaria para Titulares: `Plus Jakarta Sans`
- **Personalidad:** Geométrica, moderna, técnica, altamente estructurada y con excelente impacto visual.
- **Pesos autorizados:**
  - `800 (ExtraBold)`: Logotipos, H1 de impacto, cifras de pureza (ej. **99.9% PUREZA**, **1000g**).
  - `700 (Bold)`: Titulares H2 y H3, nombres de producto en catálogo y destacados de carrusel.
  - `600 (SemiBold)`: Subtítulos, nombres de categoría y etiquetas de botones.
- **Tracking:** `-0.02em` a `-0.01em` (ligeramente cerrado para proyectar solidez de laboratorio).

### 3.2 Fuente Secundaria para Cuerpo y UI: `Outfit`
- **Personalidad:** Líneas limpias, proporciones humanistas, descansada a la vista y de lectura ágil.
- **Pesos autorizados:**
  - `400 (Regular)`: Cuerpo de texto, descripciones fisiológicas, artículos de blog y copy de redes.
  - `500 (Medium)`: Información técnica, tablas de dosificación y menús de navegación.
  - `600 (SemiBold)`: Precios, llamadas de atención y microcopy clave.
- **Interlineado (Line Height):** `1.5` a `1.6` para párrafos de lectura; `1.3` para subtítulos.

### 3.3 Fuente Editorial de Respaldo (Piezas de Redes / Carruseles): `Playfair Display`
- **Uso restringido:** Únicamente para titulares de portadas en Instagram o citas boticarias especiales (ej. portadas de carrusel estilo editorial de revista científica). Peso 600 o 700 Italic.

---

## 4. Estilos de Componentes y Reglas Visuales (UI/UX)

### 4.1 Radios de Esquina (Border Radius)
- **Tarjetas y Paneles (`.organic-card`):** `1.25rem` (20px). Proporciona un tacto orgánico contemporáneo, huyendo de las esquinas filosas cuadradas.
- **Contenedores de Imagen de Producto:** `1rem` (16px).
- **Botones y Badges:** `9999px` (Pill / redondeado completo) para CTAs principales de compra o contacto, y `0.75rem` (12px) para botones secundarios compactos.

### 4.2 Sombras y Elevación Orgánica
BioNativa LAB prohíbe las sombras negras genéricas (`rgba(0,0,0,0.2)`). Toda elevación debe utilizar tintes botánicos:
```css
/* Sombra estándar de tarjeta orgánica */
box-shadow: 0 16px 32px -8px rgba(30, 59, 43, 0.08), 
            0 4px 12px -2px rgba(182, 122, 82, 0.05);
```

### 4.3 Insignias de Verificación (Badges)
- **Badge Botánico:**
  - Fondo: `rgba(30, 59, 43, 0.08)`
  - Texto: `#1E3B2B` (SemiBold / 600)
  - Borde: Opcional `1px solid rgba(30, 59, 43, 0.15)`
- **Badge Terracota (Destacado):**
  - Fondo: `rgba(182, 122, 82, 0.12)`
  - Texto: `#B67A52` (SemiBold / 600)

---

## 5. Fotografía y Dirección de Arte

### 5.1 Enfoque "Producto como Héroe" (Product as Hero)
- **Iluminación:** Luz natural difusa o luz de estudio suave matinal. Sombras botánicas tenues (siluetas de ramas u hojas fuera de foco).
- **Materialidad de Envases:** Frascos y frasquería en negro mate o ámbar farmacéutico con etiquetas en papel crema (`#F5EFE6`).
- **Demostración de Textura:** Fotografía macro de polvos micronizados puros (Creatina 200 Mesh, Citrato puro disolviéndose en agua cristalina sin turbiedad).
- **Entorno y Fondos:** Superficies de lino crudo (`#FAF9F6`), madera clara natural o piedra mineral neutra.

### 5.2 Lo que está PROHIBIDO en el Diseño de BioNativa LAB
❌ **Estética Neón / Gimnasio Ruidoso:** Prohibido fondos negros con rayos, tipografías desgastadas ("grunge"), colores fosforescentes (verde neón, naranja radioactivo).
❌ **Modelos Hipertrofiados:** No usar imágenes de culturismo extremo; priorizar personas reales enfocadas en longevidad, bienestar y rendimiento lúcido.
❌ **Claims Médicos Engañosos:** Prohibido prometer curaciones milagrosas. Usar siempre el marco de soporte fisiológico y homeostasis celular.
❌ **Degradados Artificiales Estridentes:** Usar transiciones tonales limpias basadas en la paleta oficial.

---

## 6. Configuración Rápida para Desarrolladores y Diseñadores

### 6.1 Variables CSS (`:root`)
```css
:root {
  /* Paleta Botánica */
  --color-primary: #1E3B2B;
  --color-primary-dark: #14281D;
  --color-primary-light: #2A523C;

  /* Paleta Terracota */
  --color-accent: #B67A52;
  --color-accent-light: #CF926B;
  --color-accent-dark: #9E623B;

  /* Fondos y Neutros */
  --color-canvas: #FAF9F6;
  --color-surface: #FFFFFF;
  --color-surface-soft: #F5EFE6;
  --color-border: #E8E2D8;

  /* Tipografía */
  --color-text-main: #1E2421;
  --color-text-muted: #5C665F;
  --font-heading: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Outfit', system-ui, sans-serif;
}
```

### 6.2 Extensión Tailwind CSS
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        botanical: {
          50: '#F4F7F5',
          100: '#E6ECE7',
          600: '#2A523C',
          800: '#1E3B2B',
          900: '#14281D'
        },
        terracotta: {
          100: '#F7EDE6',
          500: '#CF926B',
          600: '#B67A52',
          700: '#9E623B'
        },
        sand: {
          50: '#FAF9F6',
          100: '#F5EFE6',
          200: '#E8E2D8'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  }
}
```

---

## 7. Canales y Contactos Oficiales de Marca
- **Sitio Web:** `https://bionativalab.com/`
- **WhatsApp Oficial:** `+51 981 278 458`
- **Correo de Atención:** `ventas@bionativalab.com`
- **Redes Sociales:** `@bionativalab` en Instagram, TikTok y Facebook.
- **Puntos de Despacho:** Lima Metropolitana y Cusco (Coripata Sur), con cobertura nacional vía agencias Shalom y Marvisur.
