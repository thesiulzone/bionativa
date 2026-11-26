# Especificación Técnica: Correcciones de Calidad, UX/UI, Cumplimiento Regulatorio y Sistema COA

**Fecha:** 25 de Noviembre de 2026  
**Proyecto:** BioNativa LAB (`bionativalab.com`)  
**Estado:** Propuesta Técnica para Aprobación  

---

## 1. Resumen de Objetivos

El presente documento detalla la arquitectura técnica y el plan de implementación para solventar 5 aspectos clave de la plataforma BioNativa LAB:

1. **Corrección de caracteres y signos de interrogación en el banner de despachos (Portada).**
2. **Corrección de textos mal renderizados en el pie de página y página de contacto («Y" Lima» y «Yss Perú Nacional»).**
3. **Revisión científica y regulatoria de la sección de Preguntas Frecuentes (FAQ) en HTML y JSON-LD (Cumplimiento DIGESA / EFSA).**
4. **Optimización comercial y de conversión en la sección de Productos Destacados (Precios ancla, badges de descuento y micro-llamadas a la acción).**
5. **Implementación del Sistema de Consulta y Descarga de Certificados de Análisis (COA) por producto y verificación de lote.**

---

## 2. Diagnóstico Detallado y Solución Técnica

### Componente 1: Banner de Despachos en Portada (`index.html`)
* **Archivo afectado:** `index.html` (Línea 719 y Línea 1095).
* **Problema:** Un carácter especial fue sustituido por un literal `?` (`Despacho inmediato en Lima y Cusco ? Envíos diarios vía Shalom y Marvisur`), y en la línea 1095 aparece `~. ★ Producto Estrella`.
* **Solución Técnica:**
  * Sustituir el `?` por un punto separador estilizado `&bull;` (`•`) o un micro-ícono SVG de verificación verde para máxima estabilidad entre navegadores.
  * Formato resultante:
    ```html
    <p class="text-xs text-stone-500 pt-2 flex items-center justify-center lg:justify-start gap-2">
      <svg class="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      <span>Despacho inmediato en <strong>Lima</strong> y <strong>Cusco</strong> • Envíos diarios a todo el Perú vía <strong>Shalom</strong> y <strong>Marvisur</strong></span>
    </p>
    ```
  * En línea 1095, corregir `~. ★` por un ícono SVG de estrella o medalla de excelencia.

---

### Componente 2: Footer y Contacto - Íconos Vectoriales SVG (`index.html`, `contacto.html`)
* **Archivos afectados:** `index.html` (Líneas 1533-1541), `contacto.html` (Líneas 174-194).
* **Problema:** Caracteres corruptos UTF-8 («Y" Lima» y «Yss Perú Nacional») producidos por codificación mojibake de emojis.
* **Solución Técnica:**
  * Reemplazar los textos corruptos por componentes estructurados con íconos vectoriales SVG inline con soporte responsivo y color temático boticario (`text-[#B67A52]` y `text-emerald-400`).
  * Estructura técnica:
    ```html
    <div class="text-xs text-stone-400 space-y-2">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-[#B67A52] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
        <p><strong>Lima:</strong> Despacho express y recojo coordinado en almacén.</p>
      </div>
      <div class="flex items-start gap-2">
        <svg class="w-4 h-4 text-[#B67A52] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <p><strong>Cusco:</strong> Av. Teodosio Serrudo B'10b, Urb. Coripata Sur (Retiro en tienda y reparto local).</p>
      </div>
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-[#B67A52] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
        <p><strong>Perú Nacional:</strong> Envíos diarios vía agencias Shalom y Marvisur.</p>
      </div>
    </div>
    ```

---

### Componente 3: Adecuación Científica y Regulatoria en Preguntas Frecuentes (FAQ)
* **Archivos afectados:** `index.html` (Líneas 245-318 en JSON-LD y Líneas 1240-1340 en HTML).
* **Problema:** Declaraciones categóricas de salud ("eliminar calambres nocturnos", "la mejor para insomnio, ansiedad y estrés crónico"). En Perú (DIGESA) y estándares internacionales, los suplementos no pueden proclamarse como medicamentos curativos ni ansiolíticos.
* **Solución Técnica:**
  * Reformular respetando las directrices de salud funcional de EFSA / DIGESA:
    1. **Citrato de Magnesio:** *"Favorece la digestión y el tránsito intestinal regular, apoya la función muscular normal y contribuye al equilibrio electrolítico frente al agotamiento físico."*
    2. **Bisglicinato de Magnesio:** *"Forma quelada de máxima biodisponibilidad y excelente tolerancia gástrica. Contribuye a la relajación neuromuscular, apoya el funcionamiento del sistema nervioso y promueve un descanso nocturno reparador."*
    3. **Cloruro de Magnesio:** *"Sal mineral tradicional que participa en el mantenimiento de la estructura ósea y en el rendimiento muscular."*
    4. **FAQ 2 (Mecanismo):** Explicar con rigor fisiológico que el magnesio actúa como cofactor biológico en más de 300 reacciones enzimáticas, facilitando la síntesis de neurotransmisores asociados a la serenidad y la relajación neuromuscular.
    5. **Disclaimer Regulatorio Oficial:** Añadir una caja de aviso transparente al pie del FAQ:
       *«Aviso de Responsabilidad: Los suplementos nutricionales de BioNativa LAB son alimentos y complementos puros de grado farmacéutico. No son medicamentos ni sustituyen una alimentación equilibrada ni prescripciones médicas. Si usted se encuentra bajo tratamiento médico o en período de gestación, consulte con su especialista de la salud.»*

---

### Componente 4: Sección de Productos Destacados de Alta Conversión
* **Archivos afectados:** `index.html` (Líneas 1025-1065 y 1728-1775), `js/products-data.js`.
* **Problema:** Grid plano de 8 productos sin badges de ahorro, sin precio tachado comparativo ni micro-incentivos de compra.
* **Solución Técnica:**
  * **Cintillo promocional:** Añadir un cintillo boticario sobre la grilla:
    *«🌿 Pureza Farmacéutica Directa de Origen • Descuentos por Volumen y Formatos de 1 Kilo Sellado»*
  * **Enriquecimiento de datos en `js/products-data.js`:**
    * Agregar a los productos destacados el `regularPrice` (precio de referencia antes del descuento) y `discountBadge` (ej. `"-15% WEB"`, `"MÁS VENDIDO"`, `"FORMATO AHORRO"`).
  * **Tarjetas Comerciales Mejoradas en `initIndexFeatured()`:**
    * Badge visual flotante de descuento / popularidad (`bg-amber-600` o `bg-emerald-800`).
    * Precios con Anclaje Visual: Precio regular tachado (`text-xs text-stone-400 line-through`) junto al precio final en negrita grande (`text-base sm:text-lg font-black text-[#1E3B2B]`).
    * Micro-beneficio visible: `"Pureza 99.9% COA"` o `"Ahorra S/ 13.60"`.
    * Botón primario *"Agregar"* + enlace sutil *"Ver Ficha y Presentaciones"*.

---

### Componente 5: Sistema de Consulta y Descarga de Certificados COA
* **Archivos afectados:** `producto.html`, `index.html`, `js/products-data.js`.
* **Carpeta de Documentos:** `docs/coa/` (Copiando los PDFs desde `FICHAS TECNICAS/` con nombres web amigables y libres de espacios para compatibilidad HTTP).
* **Mapeo de Documentos Analíticos Oficiales:**
  1. `creatina-monohidratada` -> `docs/coa/coa-creatina-monohidratada.pdf`
  2. `citrato-de-magnesio` -> `docs/coa/coa-citrato-magnesio.pdf`
  3. `glicinato-de-magnesio` -> `docs/coa/coa-bisglicinato-magnesio.pdf`
  4. `proteina-suero-leche-80` -> `docs/coa/coa-whey-protein-80.pdf`
  5. `colageno-hidrolizado` -> `docs/coa/coa-colageno-hidrolizado.pdf`
  6. `espirulina-pura` -> `docs/coa/coa-espirulina-pura.pdf`
  7. `glucosamina-sulfato` -> `docs/coa/coa-glucosamina-sulfato.pdf`
  8. `proteina-soya-vegetal` -> `docs/coa/coa-proteina-soya.pdf`
* **Implementación UI en `producto.html` (Pestaña COA):**
  * Presentar las especificaciones fisicoquímicas reales.
  * Botón primario: **[📄 Descargar Certificado de Análisis COA (PDF Oficial)]** con apertura en nueva pestaña (`target="_blank"`).
  * Botón secundario: **[📲 Consultar Lote Específico por WhatsApp]** con enlace directo que envía:  
    *`"Hola BioNativa LAB, deseo verificar el Certificado COA del lote actual del producto: [Nombre del Producto]"`*.
* **Implementación en la Portada (`index.html`):**
  * En la tarjeta de valor de "Certificado COA" de la portada, agregar un enlace/botón interactivo para ver los certificados analíticos descargables disponibles de los productos más vendidos.

---

## 3. Plan de Ejecución

1. **Fase 1: Preparación de Recursos Documentales:**
   * Crear la carpeta `docs/coa/` en la raíz del proyecto.
   * Copiar y renombrar los archivos PDF desde `FICHAS TECNICAS/` a nombres web-safe.
2. **Fase 2: Actualización de Datos (`js/products-data.js`):**
   * Incorporar a los productos las propiedades: `coaPdf`, `regularPrice`, `badgeHighlight`.
3. **Fase 3: Corrección Tipográfica y UI en Portada y Footer (`index.html`, `contacto.html`):**
   * Reparar el banner de despachos (punto 1).
   * Sustituir los textos mal renderizados del footer por los íconos SVG boticarios (punto 2).
4. **Fase 4: Adecuación de Preguntas Frecuentes (`index.html`):**
   * Actualizar FAQ en HTML y JSON-LD con declaraciones funcionales y descargo sanitario (punto 3).
5. **Fase 5: Mejora del Grid de Destacados (`index.html`):**
   * Actualizar la función `initIndexFeatured()` con la plantilla de alta conversión (punto 4).
6. **Fase 6: Ficha de Producto y Trazabilidad COA (`producto.html`):**
   * Integrar la descarga directa de COA y consulta de lote por WhatsApp (punto 5).
7. **Fase 7: Verificación Cruzada y Testing:**
   * Validar sintaxis, renderizado móvil y enlaces en navegador.

---
*Fin de la Especificación Técnica. En espera de confirmación para proceder con la ejecución.*
