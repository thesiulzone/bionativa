# Especificación Técnica y Plan de Arquitectura: Sistema y Centro de Promociones BioNativa LAB
> **Documento:** `Technical_Specification_Sistema_Promociones.md`  
> **Fecha:** 25 de Noviembre de 2026  
> **Estado:** Propuesta Técnica para Aprobación del Usuario  
> **Objetivo:** Implementar un Administrador de Campañas Comerciales ("Centro de Promociones") desacoplado del código fuente de la tienda, permitiendo a BioNativa LAB crear, programar, modificar y medir promociones, descuentos por producto/categoría, ofertas por volumen, combos y cupones sin requerir edición de archivos HTML/JS.

---

## 1. Diagnóstico del Problema y Justificación

### 1.1 Limitación Actual
- Actualmente, las ofertas, precios tachados y packs (por ejemplo en `index.html` o `tienda.html`) están incrustados directamente en el marcado HTML o en scripts estáticos.
- Modificar una oferta, iniciar un "Cyber Week" o lanzar una "Semana BioNativa" requiere editar código fuente, desplegar y arriesgar inconsistencias de precios entre el escaparate y el carrito de compras (`cart.js`).

### 1.2 Solución Propuesta: Arquitectura Desacoplada en 3 Capas
1. **Capa de Configuración y Almacenamiento Declarativo (`js/promotions-data.js` + `localStorage`):**
   - Estructura JSON pura con reglas de negocio: campañas, vigencia (start/end ISO dates), productos con precio regular vs promocional, ofertas por volumen, combos y cupones.
   - Modo híbrido: Carga instantánea desde archivo base (`promotions-data.js`) con capacidad de sobrescritura y edición en vivo desde el navegador (`localStorage`), con función de exportación e importación de respaldo.
2. **Capa del Motor Lógico (`js/promotions-engine.js`):**
   - Evalúa en tiempo real si una campaña está **Activa, Programada, Pausada o Vencida** según el reloj del cliente.
   - Desactiva automáticamente ofertas vencidas sin intervención humana.
   - Calcula precios en el catálogo (`tienda.html`), fichas de producto (`producto.html`), hero/banner (`index.html`) y totales en el carrito (`cart.js`).
   - Módulo ligero de telemetría y analítica (visitas/impresiones, clics, pedidos generados y ahorro acumulado).
3. **Capa de Gestión Visual: "Centro de Promociones BioNativa" (`admin-promociones.html`):**
   - Panel de control administrativo con estética boticario-moderna / SaaS de lujo.
   - Tarjeta principal interactiva: **CAMPAÑA ACTIVA** (Semana BioNativa, estado activo en vivo, cronómetro de vigencia y métricas).
   - Editores dedicados para:
     - Promociones por producto y categoría.
     - Cupones de descuento (código, %, soles, mínimo de compra, usos).
     - Ofertas por volumen (compra múltiple: 2 unidades, 3 unidades).
     - Combos de productos (packs como Creatina + Proteína con precio especial).
     - Destacado de portada y barra de anuncio superior.
     - Métricas de visitas, clics y compras generadas.

---

## 2. Modelo de Datos de Campañas (`BIONATIVA_PROMOTIONS_CONFIG`)

```javascript
{
  "systemVersion": "1.0.0",
  "lastUpdated": "2026-11-25T23:00:00.000Z",
  "activeCampaign": {
    "id": "semana-bionativa-2026",
    "name": "Semana BioNativa",
    "description": "Promociones especiales en productos seleccionados y packs de bienestar.",
    "status": "active", // "active" | "paused" | "scheduled"
    "startDate": "2026-11-20T00:00:00",
    "endDate": "2026-12-05T23:59:59",
    "highlightOnHome": true,
    "bannerBadge": "CAMPAÑA ACTIVA",
    "bannerTagline": "Ahorro directo en pureza certificada con COA",
    "metrics": {
      "impressions": 1240,
      "clicks": 315,
      "conversions": 42,
      "revenueGenerated": 5420.50
    }
  },
  "productDiscounts": [
    {
      "id": "promo-creatina-1kg",
      "campaignId": "semana-bionativa-2026",
      "targetType": "product", // "product" | "category"
      "targetId": "creatina-monohidratada",
      "variantId": "bolsa-1kg",
      "regularPrice": 85.40,
      "promoPrice": 74.90,
      "discountPercent": 12,
      "badge": "12% OFF • Semana BioNativa",
      "enabled": true
    },
    {
      "id": "promo-magnesio-cat",
      "campaignId": "semana-bionativa-2026",
      "targetType": "category",
      "targetId": "magnesio-bienestar",
      "discountPercent": 10,
      "badge": "10% OFF Magnesio",
      "enabled": true
    }
  ],
  "volumeOffers": [
    {
      "id": "vol-creatina-2pack",
      "productId": "creatina-monohidratada",
      "minQuantity": 2,
      "discountType": "percent", // "percent" | "fixed_amount"
      "discountValue": 10, // 10% de descuento a partir de 2 unidades
      "label": "Lleva 2 unidades con 10% OFF",
      "enabled": true
    }
  ],
  "combos": [
    {
      "id": "combo-deportivo-fuerza",
      "name": "Combo Deportivo Fuerza & Recuperación",
      "badge": "Combo Más Vendido",
      "description": "Creatina Monohidratada 1kg + Proteína WPC80 1kg para maximizar síntesis proteica.",
      "productIds": ["creatina-monohidratada", "proteina-suero-leche-80"],
      "regularTotalPrice": 194.00,
      "comboPrice": 169.00,
      "savings": 25.00,
      "image": "img/products/combo-deportivo.jpg",
      "enabled": true
    },
    {
      "id": "combo-sueno-profundo",
      "name": "Pack Sueño Profundo & Cero Estrés",
      "badge": "Pack Esencial",
      "description": "Glicinato de Magnesio 1kg + Citrato de Magnesio 1kg de absorción farmacológica.",
      "productIds": ["glicinato-de-magnesio", "citrato-de-magnesio"],
      "regularTotalPrice": 170.00,
      "comboPrice": 145.00,
      "savings": 25.00,
      "image": "img/products/pack-magnesio.jpg",
      "enabled": true
    }
  ],
  "coupons": [
    {
      "code": "SEMANABIONATIVA",
      "discountType": "percent", // "percent" | "fixed_amount"
      "discountValue": 10,
      "minSpend": 100.00,
      "startDate": "2026-11-20T00:00:00",
      "endDate": "2026-12-05T23:59:59",
      "maxUses": 500,
      "usedCount": 38,
      "enabled": true
    },
    {
      "code": "CLIENTEPRO",
      "discountType": "fixed_amount",
      "discountValue": 15.00,
      "minSpend": 120.00,
      "startDate": "2026-01-01T00:00:00",
      "endDate": "2027-12-31T23:59:59",
      "maxUses": 1000,
      "usedCount": 64,
      "enabled": true
    }
  ]
}
```

---

## 3. Arquitectura del Motor Lógico (`js/promotions-engine.js`)

El motor se cargará globalmente como `window.BionativaPromotions`:

### 3.1 Métodos de Validación y Estado
- `init()`: Carga la configuración desde `localStorage` si existe; si no, desde `BIONATIVA_PROMOTIONS_DEFAULT`.
- `getCampaignStatus(campaign)`:
  - Comprueba `status === 'active'`.
  - Comprueba `Date.now() >= startDate && Date.now() <= endDate`.
  - Retorna `'active'`, `'scheduled'`, `'expired'` o `'paused'`.
- `getActiveCampaign()`: Retorna la campaña activa principal que debe mostrarse en portada y el ticker.
- `isCampaignActive(id)`: Booleano para verificar si una regla está actualmente vigente.

### 3.2 Métodos de Precios y Catálogo
- `getProductPricing(productId, variantId = null)`:
  - Busca si el producto o su categoría tienen un descuento activo.
  - Retorna: `{ hasDiscount: bool, regularPrice: number, finalPrice: number, discountPercent: number, badge: string, savings: number }`.
  - Utilizado tanto en `tienda.html` como en `producto.html` e `index.html`.

### 3.3 Métodos de Carrito y Checkout (`cart.js`)
- `evaluateCart(items, appliedCouponCode = null)`:
  1. **Aplica precios promocionales base** por producto/categoría.
  2. **Evalúa ofertas por volumen:** Si un producto alcanza o supera el umbral de cantidad configurado, aplica el descuento por volumen.
  3. **Detecta combos automáticamente o por pack añadido:** Si el carrito contiene los ítems de un combo configurado, unifica su precio al precio combo pactado.
  4. **Valida y aplica cupón de descuento:**
     - Verifica si el código existe, está activo, no ha expirado y cumple con el monto mínimo (`minSpend`).
     - Calcula el descuento en soles (sea porcentaje o monto fijo).
  5. **Retorna el balance final:**
     - `subtotalRegular`: Suma sin promociones.
     - `subtotalWithPromos`: Subtotal con precios promocionales.
     - `volumeDiscountTotal`: Ahorro por cantidad.
     - `comboDiscountTotal`: Ahorro por combos.
     - `couponDiscount`: Ahorro por cupón.
     - `totalSavings`: Suma total de todos los ahorros.
     - `finalTotal`: Monto neto a pagar antes de envío.

### 3.4 Telemetría Ligera de Rendimiento (Analytics)
- `recordImpression(campaignId)`: Incrementa visitas/impresiones en la campaña.
- `recordClick(campaignId, target)`: Incrementa clics hacia productos de la campaña.
- `recordConversion(campaignId, amount)`: Registra orden generada con éxito vinculada a la campaña.
- Persistencia local y exportación a JSON/CSV desde el panel de administración.

---

## 4. Diseño del Administrador: "Centro de Promociones BioNativa" (`admin-promociones.html`)

### 4.1 Estética Visual
- Siguiendo los principios de **diseño profesional de alto impacto**: paleta boticario oscura y limpia (`#1E3B2B`, `#111827`, `#0F172A`, detalles en bronce/terracota `#B67A52` y acentos verde esmeralda `#10B981`).
- Componentes atómicos, tipografía Plus Jakarta Sans e Inter, microinteracciones y feedback en tiempo real.

### 4.2 Módulos de la Interfaz
1. **Header y Barra de Estado Global:**
   - Logotipo oficial BioNativa LAB con indicador verde pulsante *"Sistema de Campañas Operativo"*.
   - Botón *"Previsualizar Tienda en Vivo"*.
   - Botón *"Exportar Configuración JSON"* y *"Restablecer Predeterminados"*.
2. **Sección Principal: Tarjeta "CAMPAÑA ACTIVA":**
   - Encabezado: **CAMPAÑA ACTIVA**
   - Nombre: **Semana BioNativa**
   - Subtítulo: **Promociones especiales en productos seleccionados.**
   - Badge de estado: **Activa** (con botón de toggle para pausar o reactivar en 1 clic).
   - Fechas de vigencia con selector interactivo de inicio y fin (fecha y hora).
   - Barra de tiempo transcurrido (Countdown).
   - Selector *"Destacar en Portada (Homepage & Ticker Superior)"*.
   - **Métricas en Vivo:**
     - 👁️ Visitas / Impresiones generadas.
     - 🖱️ Clics en promociones.
     - 🛍️ Compras y conversiones logradas.
     - 💰 Ahorro total entregado a los clientes en Soles (S/).
3. **Pestañas de Configuración Rápida:**
   - **Tab 1: Descuentos por Producto & Categoría:**
     - Tabla con buscador, selector de productos de `BIONATIVA_PRODUCTS`, campo de precio regular, campo de precio promocional (o % de descuento con cálculo automático del otro valor), fecha límite y botón de activar/eliminar.
   - **Tab 2: Cupones de Descuento:**
     - Creador de códigos (`SEMANABIONATIVA`, `BIENVENIDA10`), tipo de descuento (% o S/), monto mínimo de compra, límite de usos y contador de usos en tiempo real.
   - **Tab 3: Ofertas por Volumen (Compra Múltiple):**
     - Creador de escalado (ej: 2 unidades = 10% OFF, 3 unidades = 15% OFF).
   - **Tab 4: Combos y Packs Sinergia:**
     - Creador visual de combos: selecciona 2 o más productos, el sistema calcula el precio sumado normal, tú defines el precio combo promocional, añade una descripción comercial y se genera la tarjeta de 1 clic para la tienda.
   - **Tab 5: Historial y Métricas de Rendimiento:**
     - Gráfico comparativo de clics y conversiones por campaña para evaluar el ROI de cada promoción.

---

## 5. Integración con el Front-End Existente

| Componente | Archivo | Modificación |
| :--- | :--- | :--- |
| **Drawer de Carrito** | `js/cart.js` | Incorporar campo de cupón de descuento con botón "Aplicar", mostrar línea de descuento desglosado en el resumen de totales, y conectar el motor `BionativaPromotions.evaluateCart()`. |
| **Catálogo de Tienda** | `tienda.html` | Conectar `BionativaPromotions.getProductPricing(prod.id)` para mostrar automáticamente precio anterior tachado y badge de descuento sin editar HTML. |
| **Ficha de Producto** | `producto.html` | Reflejar de inmediato precios promocionales activos y mostrar aviso de oferta por volumen si aplica. |
| **Portada / Home** | `index.html` | El banner superior (`#promo-announcement-bar`) y la sección `#promociones-destacadas` leerán la campaña activa; si está vencida o pausada, se adaptan limpiamente sin romper el diseño. |
| **Scripts del Motor** | `js/promotions-data.js`<br>`js/promotions-engine.js` | Archivos nuevos que encapsulan toda la lógica de forma modular y limpia. |
| **Panel Administrador** | `admin-promociones.html` | Nueva interfaz completa y autónoma para el equipo comercial y marketing. |

---

## 6. Plan de Implementación por Fases

1. **Fase 1: Creación de la Capa de Datos y Motor Lógico**
   - Crear `js/promotions-data.js` con los datos iniciales de las campañas de ejemplo (Semana BioNativa, Creatina 1kg, Oferta por 2 unidades, Combo deportivo Creatina + Proteína, Cupones).
   - Crear `js/promotions-engine.js` con cálculo automático de vigencias, descuentos, ofertas por volumen, combos y analítica.
2. **Fase 2: Actualización de `js/cart.js`**
   - Agregar input de cupón de descuento en el drawer y modal de checkout.
   - Integrar `evaluateCart` para calcular descuentos por volumen y cupón.
   - Transmitir el descuento real y ahorro al checkout de WhatsApp y Mercado Pago.
3. **Fase 3: Construcción del "Centro de Promociones" (`admin-promociones.html`)**
   - Construir la interfaz completa con la tarjeta de Campaña Activa solicitada, formularios interactivos, métricas en tiempo real, exportador e importador.
4. **Fase 4: Conexión Dinámica en Portada (`index.html`), Catálogo (`tienda.html`) y Ficha (`producto.html`)**
   - Reemplazar cualquier valor estático por llamadas automáticas a `BionativaPromotions`.
5. **Fase 5: Pruebas y Validación Integral**
   - Validar que al crear o editar una promoción en `admin-promociones.html`:
     - El cambio se refleje al instante en la tienda.
     - Al vencer la fecha/hora, la promoción desaparezca automáticamente.
     - El cupón funcione y se descuente en el total de la orden.
     - Las métricas de clics e impresiones se registren adecuadamente.

---

## 7. Pregunta de Confirmación al Usuario
¿Apruebas este Plan Técnico y Arquitectura para proceder con la creación e integración del Centro de Promociones y el Motor de Descuentos?
