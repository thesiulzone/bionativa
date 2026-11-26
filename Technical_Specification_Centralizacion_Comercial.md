# Especificación Técnica: Centralización de Configuración Comercial y Precios Vigentes

**Fecha:** 2026-11-26  
**Objetivo:** Eliminar la dependencia de `localStorage` para configuración comercial, promociones y precios en el navegador, estableciendo el servidor (Cloudflare Pages Functions / `_worker.js`) como la **única fuente de verdad** para precios, descuentos, combos, cupones y cotización de pedidos.

---

## 1. Diagnóstico Actual

1. **Riesgo de inconsistencia en `js/promotions-engine.js`:**
   - Aunque `loadConfig()` ya restringe la lectura de `localStorage` a `admin-promociones.html`, `trackEvent()` sigue escribiendo en `localStorage` (`bionativa_promotions_config_v1`).
   - `saveConfig()`, `resetToDefaults()` e `initCrossTabSync()` mantienen el patrón de configuración local en el navegador.
   - `admin-promociones.html` muestra el indicador `"Motor Activo en Tienda"` operando sobre `localStorage`, lo cual no refleja cambios reales para otros visitantes.
2. **Duplicación de datos entre Frontend y Backend:**
   - Los precios y reglas están duplicados en `js/products-data.js` + `js/promotions-data.js` (navegador) y `functions/_shared/catalog.js` + `functions/_shared/checkout.js` (servidor).
3. **Precios cacheados en el carrito (`js/cart.js`) y validación de cupones:**
   - `js/cart.js` persiste `price` dentro de `bionativa_cart_v1` en `localStorage`.
   - Los pedidos por **WhatsApp / Plin / Transferencia** y la validación de cupones en el drawer dependen únicamente del cálculo local del navegador, sin consultar al servidor.

---

## 2. Arquitectura Propuesta

### 2.1. Fuente Única de Verdad en el Servidor (`functions/_shared/`)
- Consolidar en `functions/_shared/catalog.js` y `functions/_shared/checkout.js` (o un módulo `functions/_shared/commercial-config.js`) toda la configuración comercial vigente:
  - Catálogo oficial con precios por producto y variante.
  - Campaña activa, vigencias, descuentos por producto/categoría, ofertas por volumen, combos y cupones.
  - Opciones y tarifas de envío.
- Exponer dos endpoints en Cloudflare Pages Functions (y registrarlos en `_worker.js`):
  1. **`GET /api/commercial-config`** (`functions/api/commercial-config.js`):
     - Devuelve los precios vigentes del catálogo, opciones de envío y las reglas comerciales activas desde el servidor, con cabecera `Cache-Control: no-store`.
  2. **`POST /api/quote`** (`functions/api/quote.js`):
     - Recibe `{ items, shippingId, couponCode, payMethod }` y calcula en el servidor el desglose oficial (precios unitarios, descuentos por producto/volumen, validación de cupón, envío, comisión de tarjeta y total).
     - Utilizado por el carrito antes de validar cupones y antes de confirmar pedidos por WhatsApp, Yape/Plin o Tarjeta.

### 2.2. Sincronización del Frontend (`js/promotions-engine.js` y `js/cart.js`)
- **`js/promotions-engine.js`:**
  - Eliminar por completo la lectura y escritura de configuración comercial en `localStorage` en la tienda (incluyendo `trackEvent()`).
  - Hidratar automáticamente la configuración comercial y los precios del catálogo desde `GET /api/commercial-config` al inicializar, actualizando `window.BIONATIVA_PRODUCTS` y emitiendo `bionativa:promotions_updated`.
  - Mantener `BIONATIVA_PROMOTIONS_DEFAULT` únicamente como respaldo inicial síncrono mientras responde el servidor (validado por tests para que coincida 1:1 con el servidor).
- **`js/cart.js`:**
  - Recalcular siempre los precios de los ítems del carrito contra el catálogo vigente (ignorando cualquier `price` antiguo almacenado en `bionativa_cart_v1`).
  - Validar cupones y cotizar el resumen del checkout contra `POST /api/quote` para garantizar que WhatsApp, Plin/Transferencia y Mercado Pago muestren exactamente el mismo total oficial.

### 2.3. Panel Administrativo (`admin-promociones.html`)
- Aclarar en la interfaz que el panel funciona como **Simulador / Generador de Configuración** (exportar JSON / copiar reglas para actualizar el servidor) y no como un editor en vivo sobre `localStorage` para los visitantes.

---

## 3. Archivos a Crear o Modificar

- **Crear:**
  - `functions/api/commercial-config.js`
  - `functions/api/quote.js`
- **Modificar:**
  - `functions/_shared/checkout.js` (exponer helper de cotización y configuración pública sin romper `buildCheckout`).
  - `_worker.js` (registrar rutas `/api/commercial-config` y `/api/quote`).
  - `js/promotions-engine.js` (eliminar `localStorage` como fuente de configuración/métricas y sincronizar desde `/api/commercial-config`).
  - `js/cart.js` (re-sincronizar precios del carrito desde catálogo vigente y cotizar/validar cupones vía `/api/quote`).
  - `admin-promociones.html` (actualizar indicador de estado a modo simulador/borrador local).
  - `tests/checkout.test.mjs` (pruebas unitarias para `/api/commercial-config`, `/api/quote`, aislamiento de `localStorage` y consistencia de precios).

---

## 4. Verificación Planificada
- Ejecutar `node --test tests/checkout.test.mjs` verificando que todas las pruebas pasen.
- Verificar `git diff --check`.
