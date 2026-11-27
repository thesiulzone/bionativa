import { buildCheckout } from "../_shared/checkout.js";

export async function onRequestPost({ request, env }) {
  const accessToken = env?.MP_ACCESS_TOKEN;
  if (!accessToken || accessToken === "TU_ACCESS_TOKEN_AQUI") {
    return Response.json({ error: "Mercado Pago no está configurado en el servidor." }, { status: 503 });
  }

  try {
    const body = await request.json();
    const checkout = buildCheckout(body);
    const origin = new URL(request.url).origin;
    const shippingDetails = body.payer?.shippingDetails || {};
    const isProvince = body.shippingId === "provincia-agencia" || shippingDetails.mode === "provincia";
    const formattedAddress = isProvince
      ? [
          shippingDetails.agency ? `Agencia: ${shippingDetails.agency}` : "",
          shippingDetails.destination ? `Destino: ${shippingDetails.destination}` : "",
          shippingDetails.originOffice ? `Origen: ${shippingDetails.originOffice}` : "",
          shippingDetails.destinationOffice ? `Oficina Destino: ${shippingDetails.destinationOffice}` : ""
        ].filter(Boolean).join(" | ")
      : String(body.payer?.address || "");

    const payload = {
      items: checkout.items,
      payer: {
        name: String(body.payer?.name || "Cliente").slice(0, 100),
        email: String(body.payer?.email || "cliente@bionativalab.com").slice(0, 120),
        phone: { number: String(body.payer?.phone || "").slice(0, 30) },
        address: { street_name: formattedAddress.slice(0, 150) }
      },
      metadata: {
        shipping_id: String(body.shippingId || "").slice(0, 60),
        shipping_mode: isProvince ? "provincia" : "lima",
        customer_doc: String(body.payer?.doc || "").slice(0, 20),
        agency: String(shippingDetails.agency || "").slice(0, 80),
        destination: String(shippingDetails.destination || "").slice(0, 120),
        origin_office: String(shippingDetails.originOffice || "").slice(0, 150),
        destination_office: String(shippingDetails.destinationOffice || "").slice(0, 150)
      },
      back_urls: { success: `${origin}/pago-resultado.html`, failure: `${origin}/pago-resultado.html`, pending: `${origin}/pago-resultado.html` },
      auto_return: "approved",
      statement_descriptor: "BIONATIVA LAB",
      external_reference: checkout.externalReference
    };

    const mpResponse = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify(payload)
    });
    const preferenceData = await mpResponse.json();
    if (!mpResponse.ok) return Response.json({ error: "Mercado Pago no pudo crear la preferencia." }, { status: 502 });
    return Response.json({ id: preferenceData.id, init_point: preferenceData.init_point, total: checkout.total });
  } catch (error) {
    return Response.json({ error: error.message || "No se pudo validar el pedido." }, { status: 400 });
  }
}
