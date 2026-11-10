# Especificación Técnica: Recargo por Procesamiento de Tarjeta (Mercado Pago)

## 1. Contexto y Objetivos
En el e-commerce de **BioNativa LAB**, los cobros directos por transferencia o Yape/Plin no tienen comisión de pasarela. Sin embargo, al procesar pagos con tarjeta de débito/crédito a través de **Mercado Pago Checkout Pro**, la pasarela descuenta una comisión por procesamiento.
El objetivo es implementar un cobro adicional transparente y dinámico cuando el cliente elija la opción de **Tarjeta de Crédito o Débito**, reflejándolo en el carrito, en el modal de checkout y en el ítem de la preferencia enviada a Mercado Pago.

---

## 2. Parámetros de Tarifas de Mercado Pago Perú
La tarifa estándar de Mercado Pago Perú para liberación inmediata es:
- **Tasa base:** 3.99%
- **IGV sobre la comisión:** 18% (es decir, $3.99\% \times 1.18 = 4.7082\% \approx 4.71\%$, o configurable a una tasa fija conveniente como 4.5% o 5%).
- Se centralizará esta configuración en `js/payment-config.js` para que la administración de la tienda pueda modificarla fácilmente:
```javascript
window.PAYMENT_CONFIG = {
  mercadopago: {
    publicKey: "APP_USR-...",
    preferenceEndpoint: "/api/create-preference",
    cardFeePercentage: 4.71, // 3.99% + 18% IGV de Mercado Pago
    enabledCardFee: true
  }
};
```

---

## 3. Arquitectura del Flujo de Usuario y Cambios

### A. Archivo `js/payment-config.js`
- Agregar las variables `cardFeePercentage: 4.71` y `cardFeeLabel: "Recargo pasarela tarjeta (Mercado Pago 3.99% + IGV)"`.

### B. Archivo `js/cart.js`
1. **Detección interactiva:**
   - En el formulario de checkout (`openCheckoutModal`), al cambiar el selector de método de pago (`pay-method` radio buttons):
     - Si se elige `card`, recalcular y mostrar el desglose:
       - Subtotal
       - Envío
       - Recargo Pasarela Tarjeta (+4.71%)
       - **Total final a Pagar**
     - Si se elige `whatsapp` o `yape`, no se cobra recargo y el total vuelve al precio normal.
2. **Pantalla de confirmación de tarjeta (`renderCardPaymentSimulation`):**
   - Mostrar el desglose claro:
     - Subtotal productos + envío: S/ XXX
     - Comisión pasarela segura (4.71%): +S/ YYY
     - Total a debitar en Mercado Pago: S/ ZZZ
3. **Petición de Checkout (`initMercadoPagoCheckout`):**
   - Enviar el recargo como un ítem de cargo por servicio adicional (`Recargo por procesamiento de tarjeta`) hacia `/api/create-preference` para que la pasarela facture el total exacto.

### C. Archivo `functions/api/create-preference.js` y `_worker.js`
- Validar y recibir el listado de ítems incluyendo el ítem de recargo operacional si aplica, asegurando coherencia entre el frontend y el cobro final en Mercado Pago.

---

## 4. Verificación y Pruebas
1. Prueba en local con `npx wrangler pages dev .` o comprobación estática.
2. Selección de Yape/WhatsApp: verificar que el monto no sufra alteración (comisión 0%).
3. Selección de Tarjeta: verificar que se sume automáticamente el 4.71% y se desglose con aviso informativo amigable para el usuario.
4. Generación de preferencia a Mercado Pago con el importe total recargado.
