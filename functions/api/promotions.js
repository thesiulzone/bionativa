const KV_KEY = "bionativa_promotions_config_v1";

/**
 * GET /api/promotions
 * Devuelve la configuración activa de promociones y slides almacenada en Cloudflare KV.
 */
export async function onRequestGet({ env }) {
  if (!env?.PROMOTIONS_KV) {
    return Response.json(
      { configured: false, config: null },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    const config = await env.PROMOTIONS_KV.get(KV_KEY, "json");
    return Response.json(
      { configured: true, config: config || null },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    return Response.json(
      { configured: true, config: null, error: "Error leyendo Cloudflare KV." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

/**
 * POST /api/promotions
 * Guarda la configuración de promociones y slides en Cloudflare KV (protegido por ADMIN_PROMO_KEY).
 */
export async function onRequestPost({ request, env }) {
  if (!env?.PROMOTIONS_KV) {
    return Response.json(
      { ok: false, error: "Falta vincular el KV Namespace 'PROMOTIONS_KV' en Cloudflare." },
      { status: 503 }
    );
  }

  const expectedKey = env?.ADMIN_PROMO_KEY;
  if (!expectedKey) {
    return Response.json(
      { ok: false, error: "Falta configurar la variable secreta 'ADMIN_PROMO_KEY' en Cloudflare." },
      { status: 503 }
    );
  }

  const providedKey = request.headers.get("X-Admin-Key") || "";
  if (!providedKey || providedKey !== expectedKey) {
    return Response.json(
      { ok: false, error: "Clave de administrador incorrecta." },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const config = body?.config;
    if (!config || typeof config !== "object") {
      return Response.json(
        { ok: false, error: "Formato de configuración inválido." },
        { status: 400 }
      );
    }

    config.lastUpdated = new Date().toISOString();
    await env.PROMOTIONS_KV.put(KV_KEY, JSON.stringify(config));

    return Response.json({ ok: true, lastUpdated: config.lastUpdated }, { status: 200 });
  } catch (err) {
    return Response.json(
      { ok: false, error: err?.message || "No se pudo guardar en Cloudflare KV." },
      { status: 400 }
    );
  }
}
