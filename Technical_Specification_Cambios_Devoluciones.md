# Especificación Técnica: Política de Cambios y Devoluciones y Acceso Pre-Pago

## 1. Diagnóstico Actual
1. **Política restrictiva y poco visible:** Actualmente, la única mención se encuentra en `terminos-y-privacidad.html` (Sección 4), accesible únicamente desde el footer:
   - Limita el plazo a solo **48 horas**.
   - Solo contempla precinto violentado o defecto de embalaje de origen.
   - No especifica qué ocurre si llega un producto equivocado, si el cliente desea cambiar un producto **sellado/sin abrir**, ni detalla plazos de reembolso o quién asume el costo de envío.
2. **Sin acceso antes de pagar:** En `js/cart.js`, ni el drawer del carrito (`#cart-drawer-footer`) ni el modal de checkout (`#checkout-modal`) muestran un resumen ni un enlace/desplegable de cambios y devoluciones antes del botón **Pagar / Confirmar Pedido**.

---

## 2. Propuesta de Política Equilibrada y Transparente
Se actualizará la política para equilibrar la **inocuidad sanitaria de suplementos** con una **experiencia justa para el comprador**:

1. **Plazo ampliado a 7 días calendario** desde la recepción del pedido (antes 48 horas).
2. **Escenarios cubiertos claramente diferenciados:**
   - **Error de envío, daño en tránsito o precinto alterado:** Cambio/reposición inmediata **sin costo** o **reembolso del 100%** (BioNativa LAB asume el flete de retorno y reenvío).
   - **Cambio o devolución de producto sellado (sin abrir):** Aceptado dentro de los 7 días calendario si conserva su precinto de seguridad intacto y empaque original (el cliente asume el costo de envío de retorno/nuevo despacho).
   - **Excepción sanitaria:** Por control sanitario e inocuidad alimentaria, no aplican devoluciones sobre suplementos abiertos o parcialmente consumidos, salvo defecto de calidad verificado contra el lote COA.
3. **Proceso y plazos de reembolso:**
   - Canal directo: WhatsApp (`+51 981 278 458`) o correo (`ventas@bionativalab.com`) indicando número de pedido y evidencia fotográfica/video si aplica.
   - Respuesta en máximo **24 horas hábiles**.
   - Reembolso por el mismo medio de pago: **24 a 48 horas hábiles** para Yape/Plin/transferencia; **5 a 15 días hábiles** para tarjeta (según tiempos de Mercado Pago y banco emisor).

---

## 3. Plan de Cambios por Archivo

### A. `terminos-y-privacidad.html`
- Agregar identificador de ancla `id="cambios-y-devoluciones"` en la Sección 4.
- Rediseñar la sección con tarjetas visuales claras (Plazo 7 días, Cobertura 100% por error/daño, Productos sellados, Excepción sanitaria y Tiempos de reembolso) manteniendo la estética boticaria Aplós de BioNativa LAB.

### B. `js/cart.js` (Acceso directo antes de pagar)
1. **En el Drawer del Carrito (`#cart-drawer-footer`):**
   - Añadir un enlace discreto pero visible debajo del botón *"Pagar con Plin, Yape o Tarjeta"*:
     `🛡️ Cambios y devoluciones hasta 7 días • Ver política` (abre el detalle o navega a `terminos-y-privacidad#cambios-y-devoluciones`).
2. **En el Modal de Checkout (`#checkout-modal`):**
   - Justo encima del botón **Confirmar Pedido**, incluir un bloque compacto con:
     - Resumen claro en una línea: *"Compra protegida: hasta 7 días calendario para cambios en productos sellados o reposición inmediata sin costo por error/daño."*
     - Un botón **acordeón inline** (`Ver condiciones de cambios y devoluciones`) que despliega el resumen completo **dentro del mismo modal** sin perder los datos que el usuario ya llenó en el formulario, más un enlace secundario para abrir la página completa en nueva pestaña (`terminos-y-privacidad#cambios-y-devoluciones`).

### C. `producto.html` y Footers del Sitio
- **`producto.html`:** Incluir mención y enlace a `#cambios-y-devoluciones` en la fila de garantías (`Trust Cards Row`) antes de añadir al carrito.
- **Footers (`index.html`, `tienda.html`, `producto.html`, `envios-y-cobertura.html`, `contacto.html`, `nosotros.html`, `blog.html`, `reclamaciones.html`, `terminos-y-privacidad.html`):** Añadir enlace directo **"Cambios y Devoluciones"** apuntando a `terminos-y-privacidad#cambios-y-devoluciones`.

---

## 4. Verificación Planificada
- Comprobar que el acordeón/enlace en el drawer y en el modal de checkout funcione sin reiniciar el formulario de compra.
- Verificar responsividad en móvil y escritorio y compatibilidad con el flujo de Yape/Plin y Mercado Pago.
- Confirmar que el ancla `terminos-y-privacidad#cambios-y-devoluciones` haga scroll suave directamente a la sección.
