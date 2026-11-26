import { CATALOG } from "./catalog.js";

const SHIPPING = {
  "lima-express": { name: "Delivery Lima Metropolitana (24 a 48 hrs)", price: 10 },
  "lima-recojo": { name: "Retiro en Almacén Lima (Gratis)", price: 0 },
  "cusco-recojo": { name: "Retiro en Tienda Cusco (Gratis)", price: 0 },
  "provincias-shalom": { name: "Envío Nacional vía Agencia Shalom", price: 15 },
  "provincias-marvisur": { name: "Envío Nacional vía Agencia Marvisur", price: 16 }
};

export const SERVER_PROMOTIONS = {
  startDate: "2026-11-20T00:00:00",
  endDate: "2026-12-15T23:59:59",
  productDiscounts: [
    { productId: "creatina-monohidratada", variantId: "bolsa-1kg", regularPrice: 85.4, promoPrice: 74.9 },
    { productId: "citrato-de-magnesio", variantId: "bolsa-1kg", regularPrice: 22.4, promoPrice: 19.49 }
  ],
  volumeOffers: [
    { productId: "creatina-monohidratada", minQuantity: 2, discountPercent: 10 },
    { productId: "citrato-de-magnesio", minQuantity: 3, discountPercent: 15 }
  ],
  coupons: [
    { code: "SEMANABIONATIVA", type: "percent", value: 10, minSpend: 90, startDate: "2026-11-20T00:00:00", endDate: "2026-12-15T23:59:59" },
    { code: "CLIENTEPRO", type: "fixed_amount", value: 15, minSpend: 130, startDate: "2026-01-01T00:00:00", endDate: "2027-12-31T23:59:59" },
    { code: "BIENVENIDA10", type: "percent", value: 10, minSpend: 80, startDate: "2026-01-01T00:00:00", endDate: "2027-12-31T23:59:59" }
  ]
};

const money = value => Math.round((value + Number.EPSILON) * 100) / 100;
const campaignActive = Date.now() >= Date.parse(SERVER_PROMOTIONS.startDate) && Date.now() <= Date.parse(SERVER_PROMOTIONS.endDate);

export function buildCheckout(body) {
  if (!Array.isArray(body?.items) || body.items.length < 1 || body.items.length > 50) {
    throw new Error("El carrito no contiene productos válidos.");
  }

  const items = body.items.map(item => {
    const product = CATALOG.find(entry => entry.id === item.productId);
    const variant = product?.variants?.find(entry => entry.id === item.variantId);
    const quantity = Number(item.quantity);
    if (!product || !variant || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      throw new Error("Un producto o una cantidad del carrito no es válida. Actualiza la tienda e inténtalo otra vez.");
    }
    let unitPrice = Number(variant.price);
    if (campaignActive) {
      const discount = SERVER_PROMOTIONS.productDiscounts.find(rule => rule.productId === product.id && rule.variantId === variant.id);
      if (discount) unitPrice = discount.promoPrice;
    }
    const offer = campaignActive && SERVER_PROMOTIONS.volumeOffers.find(rule => rule.productId === product.id && quantity >= rule.minQuantity);
    if (offer) unitPrice = money(unitPrice * (1 - offer.discountPercent / 100));
    return { id: `${product.id}__${variant.id}`, title: `${product.name} — ${variant.name} (x${quantity})`, quantity, lineTotal: money(unitPrice * quantity) };
  });

  let subtotal = money(items.reduce((sum, item) => sum + item.lineTotal, 0));
  const couponCode = typeof body.couponCode === "string" ? body.couponCode.trim().toUpperCase() : "";
  if (couponCode) {
    const coupon = SERVER_PROMOTIONS.coupons.find(entry => entry.code === couponCode && Date.now() >= Date.parse(entry.startDate) && Date.now() <= Date.parse(entry.endDate));
    if (!coupon || subtotal < coupon.minSpend) throw new Error("El cupón no es válido para este pedido. Revisa su vigencia y el monto mínimo.");
    const discount = coupon.type === "percent" ? subtotal * coupon.value / 100 : Math.min(subtotal, coupon.value);
    subtotal = money(Math.max(0, subtotal - discount));
  }

  const shipping = SHIPPING[body.shippingId];
  if (!shipping) throw new Error("Selecciona una opción de envío válida.");
  const cardFee = money((subtotal + shipping.price) * 0.0471);
  const finalItems = items.map(item => ({
    id: item.id,
    title: item.title,
    quantity: 1,
    currency_id: "PEN",
    unit_price: money(item.lineTotal * (subtotal / Math.max(0.01, items.reduce((sum, entry) => sum + entry.lineTotal, 0))))
  }));
  const allocatedProducts = money(finalItems.reduce((sum, item) => sum + item.unit_price, 0));
  if (subtotal > 0 && allocatedProducts !== subtotal) finalItems[0].unit_price = money(finalItems[0].unit_price + subtotal - allocatedProducts);
  if (shipping.price > 0) finalItems.push({ id: `envio-${body.shippingId}`, title: `Envío: ${shipping.name}`, quantity: 1, currency_id: "PEN", unit_price: shipping.price });
  if (cardFee > 0) finalItems.push({ id: "recargo-tarjeta-mp", title: "Comisión pasarela tarjeta (3.99% + IGV)", quantity: 1, currency_id: "PEN", unit_price: cardFee });

  return { items: finalItems, total: money(subtotal + shipping.price + cardFee), externalReference: `BN-${crypto.randomUUID()}` };
}

export { SHIPPING };
