export async function onRequestGet({ request, env }) {
  const paymentId = new URL(request.url).searchParams.get("payment_id") || "";
  if (!/^\d{1,30}$/.test(paymentId)) return Response.json({ error: "ID de pago no válido." }, { status: 400 });

  const accessToken = env?.MP_ACCESS_TOKEN;
  if (!accessToken || accessToken === "TU_ACCESS_TOKEN_AQUI") {
    return Response.json({ error: "Mercado Pago no está configurado en el servidor." }, { status: 503 });
  }

  try {
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    if (!response.ok) return Response.json({ status: "unknown" }, { status: 200 });
    const payment = await response.json();
    if (!payment || String(payment.id) !== paymentId || typeof payment.status !== "string") {
      return Response.json({ status: "unknown" }, { status: 200 });
    }
    return Response.json({ status: payment.status === "approved" ? "approved" : payment.status || "unknown" });
  } catch {
    return Response.json({ error: "No se pudo consultar el estado del pago." }, { status: 502 });
  }
}
