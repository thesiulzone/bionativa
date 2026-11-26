import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { buildCheckout, SERVER_PROMOTIONS } from "../functions/_shared/checkout.js";
import { CATALOG } from "../functions/_shared/catalog.js";
import { onRequestPost } from "../functions/api/create-preference.js";
import { onRequestGet } from "../functions/api/payment-status.js";
import worker from "../_worker.js";

function loadBrowserData() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync("js/products-data.js", "utf8"), context);
  vm.runInContext(fs.readFileSync("js/promotions-data.js", "utf8"), context);
  return context.window;
}

test("server catalog matches browser product ids, variants, and prices", () => {
  const products = loadBrowserData().BIONATIVA_PRODUCTS;
  assert.deepEqual(JSON.parse(JSON.stringify(CATALOG)), JSON.parse(JSON.stringify(products.map(product => ({
    id: product.id,
    name: product.name,
    category: product.category,
    variants: product.variants?.map(variant => ({ id: variant.id, name: variant.name, price: variant.price })) || null,
    price: product.price
  })))));
});

test("enabled product promotions match the catalog and lower its regular price", () => {
  const { BIONATIVA_PROMOTIONS_DEFAULT: promotions } = loadBrowserData();
  for (const rule of promotions.productDiscounts.filter(entry => entry.enabled)) {
    const product = CATALOG.find(entry => entry.id === rule.targetId);
    const variant = product?.variants?.find(entry => entry.id === rule.variantId);
    assert.ok(variant, `Unknown promoted product/variant: ${rule.targetId}/${rule.variantId}`);
    assert.equal(rule.regularPrice, variant.price);
    assert.ok(rule.promoPrice > 0 && rule.promoPrice < variant.price);
  }
  for (const combo of promotions.combos.filter(entry => entry.enabled)) {
    assert.ok(combo.items.every(item => CATALOG.some(product => product.id === item.productId && product.variants?.some(variant => variant.id === item.variantId))));
    assert.ok(combo.comboPrice < combo.regularTotalPrice);
  }
});

test("server promotion rules match the browser defaults", () => {
  const { BIONATIVA_PROMOTIONS_DEFAULT: browser } = loadBrowserData();
  for (const rule of SERVER_PROMOTIONS.productDiscounts) {
    const match = browser.productDiscounts.find(entry => entry.enabled && entry.targetId === rule.productId && entry.variantId === rule.variantId);
    assert.ok(match);
    assert.equal(match.regularPrice, rule.regularPrice);
    assert.equal(match.promoPrice, rule.promoPrice);
  }
  for (const rule of SERVER_PROMOTIONS.volumeOffers) {
    const match = browser.volumeOffers.find(entry => entry.enabled && entry.productId === rule.productId);
    assert.ok(match);
    assert.equal(match.minQuantity, rule.minQuantity);
    assert.equal(match.discountType, "percent");
    assert.equal(match.discountValue, rule.discountPercent);
  }
  for (const rule of SERVER_PROMOTIONS.coupons) {
    const match = browser.coupons.find(entry => entry.enabled && entry.code === rule.code);
    assert.ok(match);
    assert.equal(match.discountType, rule.type);
    assert.equal(match.discountValue, rule.value);
    assert.equal(match.minSpend, rule.minSpend);
    assert.equal(match.startDate, rule.startDate);
    assert.equal(match.endDate, rule.endDate);
  }
});

test("checkout ignores client prices and calculates verified total", () => {
  const checkout = buildCheckout({
    items: [{ productId: "creatina-monohidratada", variantId: "bolsa-1kg", quantity: 1, price: 0, name: "Free" }],
    shippingId: "lima-recojo",
    payer: {}
  });
  assert.equal(checkout.total, 78.43);
  assert.equal(checkout.items.reduce((sum, item) => sum + item.unit_price * item.quantity, 0), checkout.total);
  assert.match(checkout.externalReference, /^BN-/);
});

test("checkout applies the configured product, volume, and coupon discounts", () => {
  const checkout = buildCheckout({
    items: [{ productId: "creatina-monohidratada", variantId: "bolsa-1kg", quantity: 2 }],
    shippingId: "lima-recojo",
    couponCode: "semanabionativa"
  });
  assert.equal(checkout.total, 127.06);
});

test("checkout rejects invalid products, quantities, and shipping options", () => {
  assert.throws(() => buildCheckout({ items: [{ productId: "made-up", variantId: "x", quantity: 1 }], shippingId: "lima-recojo" }));
  assert.throws(() => buildCheckout({ items: [{ productId: "creatina-monohidratada", variantId: "bolsa-1kg", quantity: 21 }], shippingId: "lima-recojo" }));
  assert.throws(() => buildCheckout({ items: [{ productId: "creatina-monohidratada", variantId: "bolsa-1kg", quantity: 1 }], shippingId: "free-shipping" }));
});

test("preference endpoint validates server pricing before calling Mercado Pago", async () => {
  const originalFetch = globalThis.fetch;
  let preference;
  globalThis.fetch = async (_url, options) => {
    preference = JSON.parse(options.body);
    return Response.json({ id: "pref-123", init_point: "https://mercadopago.test/checkout" });
  };
  try {
    const response = await onRequestPost({
      request: new Request("https://bionativalab.com/api/create-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [{ productId: "creatina-monohidratada", variantId: "bolsa-1kg", quantity: 1, price: 0 }],
          shippingId: "lima-recojo",
          payer: { name: "Cliente" }
        })
      }),
      env: { MP_ACCESS_TOKEN: "server-secret" }
    });
    const data = await response.json();
    assert.equal(response.status, 200);
    assert.equal(data.total, 78.43);
    assert.equal(preference.items.reduce((sum, item) => sum + item.unit_price * item.quantity, 0), data.total);
    assert.match(preference.external_reference, /^BN-/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("payment status requires a numeric payment id and asks Mercado Pago", async () => {
  const originalFetch = globalThis.fetch;
  let queriedUrl = "";
  globalThis.fetch = async url => {
    queriedUrl = url;
    return Response.json({ status: "approved" });
  };
  try {
    const invalid = await onRequestGet({ request: new Request("https://bionativalab.com/api/payment-status?payment_id=%3Cscript%3E") , env: { MP_ACCESS_TOKEN: "server-secret" } });
    assert.equal(invalid.status, 400);
    const response = await onRequestGet({ request: new Request("https://bionativalab.com/api/payment-status?payment_id=12345"), env: { MP_ACCESS_TOKEN: "server-secret" } });
    assert.equal(response.status, 200);
    assert.equal((await response.json()).status, "approved");
    assert.equal(queriedUrl, "https://api.mercadopago.com/v1/payments/12345");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("Cloudflare worker routes payment verification to the server handler", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => Response.json({ status: "approved" });
  try {
    const response = await worker.fetch(
      new Request("https://bionativalab.com/api/payment-status?payment_id=12345"),
      { MP_ACCESS_TOKEN: "server-secret" },
      { waitUntil() {} }
    );
    assert.equal(response.status, 200);
    assert.equal((await response.json()).status, "approved");
  } finally {
    globalThis.fetch = originalFetch;
  }
});
