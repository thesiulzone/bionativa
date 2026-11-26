import { getPublicCommercialConfig } from "../_shared/checkout.js";

/**
 * Devuelve la configuración comercial oficial (precios, envíos y promociones vigentes)
 * desde el servidor para que ningún navegador use reglas obsoletas o locales.
 */
export async function onRequestGet() {
  return Response.json(getPublicCommercialConfig(), {
    headers: {
      "Cache-Control": "no-store, max-age=0"
    }
  });
}
