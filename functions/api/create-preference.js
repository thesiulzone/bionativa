export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const { items, payer, external_reference } = body;

    // Obtener Access Token de las variables de entorno de Cloudflare o credencial configurada
    const accessToken = env.MP_ACCESS_TOKEN || "APP_USR-3620548882453100-102722-d3ebb89315618083129c328c9987e307-272426257";

    if (!accessToken || accessToken === "TU_ACCESS_TOKEN_AQUI") {
      return new Response(JSON.stringify({ 
        error: "Access Token de Mercado Pago no configurado en el servidor." 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const host = new URL(request.url).origin;

    // Mercado Pago requiere URLs públicas válidas (http/https). En localhost o si no es HTTPS, omitir auto_return o usar dominio público
    const isLocal = host.includes("localhost") || host.includes("127.0.0.1");
    const baseUrl = isLocal ? "https://bionativa.pages.dev" : host;

    // Construir la preferencia para Mercado Pago Checkout Pro
    const preferencePayload = {
      items: (items || []).map(item => ({
        id: String(item.id || "item"),
        title: item.name || "Producto BioNativa LAB",
        description: item.category || "Suplemento Nutracéutico",
        quantity: Number(item.quantity) || 1,
        currency_id: "PEN",
        unit_price: Number(item.price) || 0
      })),
      payer: {
        name: payer?.name || "Cliente",
        email: payer?.email || "cliente@bionativalab.com",
        phone: {
          number: payer?.phone || ""
        },
        address: {
          street_name: payer?.address || ""
        }
      },
      back_urls: {
        success: `${baseUrl}/pago-resultado.html?status=success`,
        failure: `${baseUrl}/pago-resultado.html?status=failure`,
        pending: `${baseUrl}/pago-resultado.html?status=pending`
      },
      auto_return: "approved",
      statement_descriptor: "BIONATIVA LAB",
      external_reference: external_reference || `BN-${Date.now()}`
    };

    const mpResponse = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify(preferencePayload)
    });

    const preferenceData = await mpResponse.json();

    if (!mpResponse.ok) {
      return new Response(JSON.stringify({ error: preferenceData }), {
        status: mpResponse.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({
      id: preferenceData.id,
      init_point: preferenceData.init_point,
      sandbox_init_point: preferenceData.sandbox_init_point
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || "Error procesando orden." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
