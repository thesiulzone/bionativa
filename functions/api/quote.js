import { quoteOrder } from "../_shared/checkout.js";

/**
 * Valida y cotiza el carrito en el servidor (precios, descuentos por volumen,
 * cupones y envío) para cualquier canal de pago (WhatsApp, transferencia o tarjeta).
 */
export async function onRequestPost({ request }) {
  try {
    const body = await request.json();
    const quote = quoteOrder(body);
    return Response.json(quote, {
      headers: {
        "Cache-Control": "no-store, max-age=0"
      }
    });
  } catch (error) {
    return Response.json(
      { error: error.message || "No se pudo cotizar el pedido." },
      { status: 400 }
    );
  }
}
