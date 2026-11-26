import { CATALOG } from "./catalog.js";

const SHIPPING = {
  "lima-express": { name: "Delivery Lima Metropolitana (24 a 48 hrs)", price: 10 },
  "lima-recojo": { name: "Retiro en Almacén Lima (Gratis)", price: 0 },
  "cusco-recojo": { name: "Retiro en Tienda Cusco (Gratis)", price: 0 },
  "provincias-shalom": { name: "Envío Nacional vía Agencia Shalom", price: 15 },
  "provincias-marvisur": { name: "Envío Nacional vía Agencia Marvisur", price: 16 }
};

export const SERVER_PROMOTIONS = {
  id: "semana-bionativa-2026",
  name: "Semana BioNativa",
  description: "Promociones especiales en productos seleccionados y packs de bienestar.",
  status: "active",
  startDate: "2026-11-20T00:00:00",
  endDate: "2026-12-15T23:59:59",
  highlightOnHome: true,
  bannerBadge: "CAMPAÑA ACTIVA",
  bannerTagline: "Ahorro directo en pureza certificada con COA",
  productDiscounts: [
    {
      id: "promo-creatina-1kg",
      productId: "creatina-monohidratada",
      variantId: "bolsa-1kg",
      targetName: "Creatina Monohidratada 100% Pura (Bolsa 1 kg)",
      regularPrice: 85.4,
      promoPrice: 74.9,
      discountPercent: 12,
      badge: "12% OFF • Semana BioNativa"
    },
    {
      id: "promo-citrato-magnesio",
      productId: "citrato-de-magnesio",
      variantId: "bolsa-1kg",
      targetName: "Citrato de Magnesio Grado USP (Bolsa 1 kg)",
      regularPrice: 22.4,
      promoPrice: 19.49,
      discountPercent: 13,
      badge: "13% OFF • Bienestar"
    }
  ],
  volumeOffers: [
    {
      id: "vol-creatina-2pack",
      productId: "creatina-monohidratada",
      productName: "Creatina Monohidratada 1 kg",
      minQuantity: 2,
      discountPercent: 10,
      label: "Descuento por 2 unidades (10% OFF)",
      badge: "Ahorro x2"
    },
    {
      id: "vol-citrato-3pack",
      productId: "citrato-de-magnesio",
      productName: "Citrato de Magnesio 1 kg",
      minQuantity: 3,
      discountPercent: 15,
      label: "Pack Familiar 3 unidades (15% OFF)",
      badge: "Ahorro x3"
    }
  ],
  coupons: [
    { code: "SEMANABIONATIVA", label: "Cupón Especial Semana BioNativa (-10%)", type: "percent", value: 10, minSpend: 90, startDate: "2026-11-20T00:00:00", endDate: "2026-12-15T23:59:59" },
    { code: "CLIENTEPRO", label: "Cupón Cliente Recurrente (S/ 15 de Ahorro)", type: "fixed_amount", value: 15, minSpend: 130, startDate: "2026-01-01T00:00:00", endDate: "2027-12-31T23:59:59" },
    { code: "BIENVENIDA10", label: "Descuento Primera Compra (10% OFF)", type: "percent", value: 10, minSpend: 80, startDate: "2026-01-01T00:00:00", endDate: "2027-12-31T23:59:59" }
  ]
};

const CARD_FEE_RATE = 0.0471;
const money = value => Math.round((value + Number.EPSILON) * 100) / 100;
const isCampaignActive = (now = Date.now()) =>
  SERVER_PROMOTIONS.status === "active" &&
  now >= Date.parse(SERVER_PROMOTIONS.startDate) &&
  now <= Date.parse(SERVER_PROMOTIONS.endDate);

/**
 * Devuelve la configuración comercial oficial vigente desde el servidor.
 */
export function getPublicCommercialConfig(now = Date.now()) {
  const active = isCampaignActive(now);
  return {
    version: "2.0.0",
    source: "server",
    serverTime: new Date(now).toISOString(),
    cardFeePercentage: 4.71,
    catalog: CATALOG,
    shippingOptions: Object.entries(SHIPPING).map(([id, info]) => ({
      id,
      name: info.name,
      price: info.price
    })),
    activeCampaign: {
      id: SERVER_PROMOTIONS.id,
      name: SERVER_PROMOTIONS.name,
      description: SERVER_PROMOTIONS.description,
      status: active ? "active" : "expired",
      startDate: SERVER_PROMOTIONS.startDate,
      endDate: SERVER_PROMOTIONS.endDate,
      highlightOnHome: SERVER_PROMOTIONS.highlightOnHome,
      bannerBadge: SERVER_PROMOTIONS.bannerBadge,
      bannerTagline: SERVER_PROMOTIONS.bannerTagline
    },
    productDiscounts: SERVER_PROMOTIONS.productDiscounts.map(rule => ({
      id: rule.id,
      campaignId: SERVER_PROMOTIONS.id,
      targetType: "product",
      targetId: rule.productId,
      targetName: rule.targetName,
      variantId: rule.variantId,
      regularPrice: rule.regularPrice,
      promoPrice: rule.promoPrice,
      discountPercent: rule.discountPercent,
      badge: rule.badge,
      enabled: true
    })),
    volumeOffers: SERVER_PROMOTIONS.volumeOffers.map(rule => ({
      id: rule.id,
      productId: rule.productId,
      productName: rule.productName,
      minQuantity: rule.minQuantity,
      discountType: "percent",
      discountValue: rule.discountPercent,
      label: rule.label,
      badge: rule.badge,
      enabled: true
    })),
    combos: [],
    coupons: SERVER_PROMOTIONS.coupons.map(rule => ({
      code: rule.code,
      label: rule.label,
      discountType: rule.type,
      discountValue: rule.value,
      minSpend: rule.minSpend,
      startDate: rule.startDate,
      endDate: rule.endDate,
      enabled: true
    }))
  };
}

function evaluateOrderItems(rawItems, now = Date.now()) {
  if (!Array.isArray(rawItems) || rawItems.length < 1 || rawItems.length > 50) {
    throw new Error("El carrito no contiene productos válidos.");
  }

  const active = isCampaignActive(now);
  return rawItems.map(item => {
    const product = CATALOG.find(entry => entry.id === item.productId);
    const variant = product?.variants?.find(entry => entry.id === item.variantId) || product?.variants?.[0];
    const quantity = Number(item.quantity);
    if (!product || !variant || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      throw new Error("Un producto o una cantidad del carrito no es válida. Actualiza la tienda e inténtalo otra vez.");
    }

    const regularUnitPrice = Number(variant.price);
    let unitPrice = regularUnitPrice;
    let productDiscountRule = null;

    if (active) {
      const discount = SERVER_PROMOTIONS.productDiscounts.find(rule => rule.productId === product.id && rule.variantId === variant.id);
      if (discount) {
        unitPrice = discount.promoPrice;
        productDiscountRule = discount;
      }
    }

    const afterProductTotal = money(unitPrice * quantity);
    const offer = active && SERVER_PROMOTIONS.volumeOffers.find(rule => rule.productId === product.id && quantity >= rule.minQuantity);
    if (offer) {
      unitPrice = money(unitPrice * (1 - offer.discountPercent / 100));
    }

    const lineRegularTotal = money(regularUnitPrice * quantity);
    const lineTotal = money(unitPrice * quantity);
    const volumeDiscount = money(Math.max(0, afterProductTotal - lineTotal));

    return {
      id: `${product.id}__${variant.id}`,
      productId: product.id,
      variantId: variant.id,
      name: product.name,
      variantName: variant.name,
      title: `${product.name} — ${variant.name} (x${quantity})`,
      quantity,
      regularUnitPrice,
      unitPrice,
      lineRegularTotal,
      lineTotal,
      productDiscountBadge: productDiscountRule?.badge || null,
      volumeOfferBadge: offer?.badge || null,
      volumeDiscount
    };
  });
}

/**
 * Cotiza un pedido completo en el servidor (productos, descuentos, cupón, envío y comisión tarjeta).
 */
export function quoteOrder(body, now = Date.now()) {
  const items = evaluateOrderItems(body?.items, now);
  const subtotalRegular = money(items.reduce((sum, item) => sum + item.lineRegularTotal, 0));
  const subtotalAfterDiscounts = money(items.reduce((sum, item) => sum + item.lineTotal, 0));
  const volumeDiscountTotal = money(items.reduce((sum, item) => sum + item.volumeDiscount, 0));
  const productDiscountTotal = money(Math.max(0, subtotalRegular - subtotalAfterDiscounts - volumeDiscountTotal));

  let finalSubtotal = subtotalAfterDiscounts;
  let couponDiscountTotal = 0;
  let appliedCoupon = null;
  let couponError = null;

  const couponCode = typeof body?.couponCode === "string" ? body.couponCode.trim().toUpperCase() : "";
  if (couponCode) {
    const coupon = SERVER_PROMOTIONS.coupons.find(
      entry => entry.code === couponCode && now >= Date.parse(entry.startDate) && now <= Date.parse(entry.endDate)
    );
    if (!coupon || finalSubtotal < coupon.minSpend) {
      const msg = "El cupón no es válido para este pedido. Revisa su vigencia y el monto mínimo.";
      if (!body?.allowInvalidCoupon) {
        throw new Error(msg);
      }
      couponError = msg;
    } else {
      couponDiscountTotal = money(
        coupon.type === "percent" ? (finalSubtotal * coupon.value) / 100 : Math.min(finalSubtotal, coupon.value)
      );
      finalSubtotal = money(Math.max(0, finalSubtotal - couponDiscountTotal));
      appliedCoupon = coupon.code;
    }
  }

  const shippingId = body?.shippingId || "lima-express";
  const shipping = SHIPPING[shippingId];
  if (!shipping) {
    throw new Error("Selecciona una opción de envío válida.");
  }

  const baseTotal = money(finalSubtotal + shipping.price);
  const cardFee = money(baseTotal * CARD_FEE_RATE);
  const cardTotal = money(baseTotal + cardFee);
  const payMethod = body?.payMethod === "card" ? "card" : "standard";

  return {
    items,
    subtotalRegular,
    productDiscountTotal,
    volumeDiscountTotal,
    couponDiscountTotal,
    couponCode: appliedCoupon,
    couponError,
    totalSavings: money(productDiscountTotal + volumeDiscountTotal + couponDiscountTotal),
    finalSubtotal,
    shipping: { id: shippingId, name: shipping.name, price: shipping.price },
    baseTotal,
    cardFee,
    cardTotal,
    total: payMethod === "card" ? cardTotal : baseTotal
  };
}

export function buildCheckout(body) {
  const quote = quoteOrder({ ...body, payMethod: "card", allowInvalidCoupon: false });
  const subtotal = quote.finalSubtotal;
  const rawTotal = Math.max(0.01, quote.items.reduce((sum, entry) => sum + entry.lineTotal, 0));

  const finalItems = quote.items.map(item => ({
    id: item.id,
    title: item.title,
    quantity: 1,
    currency_id: "PEN",
    unit_price: money(item.lineTotal * (subtotal / rawTotal))
  }));
  const allocatedProducts = money(finalItems.reduce((sum, item) => sum + item.unit_price, 0));
  if (subtotal > 0 && allocatedProducts !== subtotal) {
    finalItems[0].unit_price = money(finalItems[0].unit_price + subtotal - allocatedProducts);
  }
  if (quote.shipping.price > 0) {
    finalItems.push({
      id: `envio-${quote.shipping.id}`,
      title: `Envío: ${quote.shipping.name}`,
      quantity: 1,
      currency_id: "PEN",
      unit_price: quote.shipping.price
    });
  }
  if (quote.cardFee > 0) {
    finalItems.push({
      id: "recargo-tarjeta-mp",
      title: "Comisión pasarela tarjeta (3.99% + IGV)",
      quantity: 1,
      currency_id: "PEN",
      unit_price: quote.cardFee
    });
  }

  return { items: finalItems, total: quote.cardTotal, externalReference: `BN-${crypto.randomUUID()}` };
}

export { SHIPPING };
