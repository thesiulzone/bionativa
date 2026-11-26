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

function loadPromotionsEngine(pathname = "/", storedConfig = null) {
  const browser = loadBrowserData();
  const context = {
    window: {
      ...browser,
      location: { pathname },
      addEventListener() {},
      dispatchEvent() {}
    },
    localStorage: { getItem: () => storedConfig, setItem() {} },
    CustomEvent: class CustomEvent {}
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync("js/promotions-engine.js", "utf8"), context);
  return context.window.BionativaPromotions;
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
  for (const combo of promotions.combos) {
    assert.ok(combo.items.every(item => CATALOG.some(product => product.id === item.productId && product.variants?.some(variant => variant.id === item.variantId))));
    const calculatedRegularTotal = combo.items.reduce((sum, item) => sum + item.regularPrice, 0);
    assert.equal(combo.regularTotalPrice, calculatedRegularTotal, `Incorrect regular total: ${combo.id}`);
    assert.equal(combo.savings, Math.round((combo.regularTotalPrice - combo.comboPrice) * 100) / 100, `Incorrect savings: ${combo.id}`);
    if (combo.enabled) assert.ok(combo.comboPrice < combo.regularTotalPrice, `Enabled combo has no savings: ${combo.id}`);
  }
});

test("all three combos add every product to the cart and pass server checkout validation", () => {
  const browser = loadBrowserData();
  const expectedComboIds = [
    "combo-deportivo-fuerza",
    "combo-sueno-profundo",
    "combo-articular-longevidad"
  ];
  assert.deepEqual(JSON.parse(JSON.stringify(browser.BIONATIVA_PROMOTIONS_DEFAULT.combos.map(c => c.id))), expectedComboIds);

  for (const combo of browser.BIONATIVA_PROMOTIONS_DEFAULT.combos) {
    const context = {
      window: {
        ...browser,
        location: { pathname: "/" },
        addEventListener() {},
        dispatchEvent() {}
      },
      document: {
        readyState: "loading",
        addEventListener() {},
        getElementById: () => null,
        querySelectorAll: () => [],
        body: { insertAdjacentHTML() {}, style: {} }
      },
      localStorage: { getItem: () => null, setItem() {} },
      CustomEvent: class CustomEvent {}
    };
    vm.createContext(context);
    vm.runInContext(fs.readFileSync("js/promotions-engine.js", "utf8"), context);
    vm.runInContext(fs.readFileSync("js/cart.js", "utf8"), context);

    const added = context.window.BionativaPromotions.addComboToCart(combo.id);
    assert.equal(added, true, `Failed to add combo: ${combo.id}`);
    assert.equal(context.window.cart.items.length, combo.items.length, `Unexpected item count for ${combo.id}`);

    combo.items.forEach((expectedItem, index) => {
      const cartItem = context.window.cart.items[index];
      assert.equal(cartItem.productId, expectedItem.productId);
      assert.equal(cartItem.variantId, expectedItem.variantId);
      assert.equal(cartItem.quantity, 1);
      assert.equal(cartItem.price, expectedItem.regularPrice);
    });

    const checkout = buildCheckout({
      items: context.window.cart.items,
      shippingId: "lima-recojo",
      payer: {}
    });
    assert.deepEqual(
      JSON.parse(JSON.stringify(checkout.items.slice(0, combo.items.length).map(item => item.id))),
      JSON.parse(JSON.stringify(Array.from(combo.items, item => `${item.productId}__${item.variantId}`)))
    );
    assert.ok(checkout.total > 0);
  }
});

test("promotion pricing uses the catalog default variant when callers omit it", () => {
  const engine = loadPromotionsEngine();
  const listingPrice = engine.getProductPricing("creatina-monohidratada", null, null, 85.4);
  const variantPrice = engine.getProductPricing("creatina-monohidratada", "bolsa-1kg", null, 85.4);
  const unknownProductFallback = engine.getProductPricing("unknown-product", null, null, 42);

  assert.equal(listingPrice.regularPrice, 85.4);
  assert.equal(listingPrice.promoPrice, 74.9);
  assert.equal(listingPrice.hasDiscount, true);
  assert.deepEqual(JSON.parse(JSON.stringify(variantPrice)), JSON.parse(JSON.stringify(listingPrice)));
  assert.equal(unknownProductFallback.regularPrice, 42);
  assert.equal(unknownProductFallback.promoPrice, 42);
  assert.equal(unknownProductFallback.hasDiscount, false);
});

test("store pricing ignores browser-local promotion edits while admin keeps its draft", () => {
  const editedConfig = loadBrowserData().BIONATIVA_PROMOTIONS_DEFAULT;
  editedConfig.productDiscounts[0].promoPrice = 1;
  const storedConfig = JSON.stringify(editedConfig);

  const storePricing = loadPromotionsEngine("/tienda", storedConfig).getProductPricing("creatina-monohidratada", "bolsa-1kg");
  const adminPricing = loadPromotionsEngine("/admin-promociones", storedConfig).getProductPricing("creatina-monohidratada", "bolsa-1kg");

  assert.equal(storePricing.promoPrice, 74.9);
  assert.equal(adminPricing.promoPrice, 1);
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
    return Response.json({ id: "12345", status: "approved" });
  };
  try {
    const invalid = await onRequestGet({ request: new Request("https://bionativalab.com/api/payment-status?payment_id=%3Cscript%3E") , env: { MP_ACCESS_TOKEN: "server-secret" } });
    assert.equal(invalid.status, 400);
    const response = await onRequestGet({ request: new Request("https://bionativalab.com/api/payment-status?payment_id=12345"), env: { MP_ACCESS_TOKEN: "server-secret" } });
    assert.equal(response.status, 200);
    assert.equal((await response.json()).status, "approved");
    assert.equal(queriedUrl, "https://api.mercadopago.com/v1/payments/12345");

    globalThis.fetch = async () => Response.json({ id: "99999", status: "approved" });
    const mismatched = await onRequestGet({ request: new Request("https://bionativalab.com/api/payment-status?payment_id=12345"), env: { MP_ACCESS_TOKEN: "server-secret" } });
    assert.equal((await mismatched.json()).status, "unknown");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("Cloudflare worker routes payment verification to the server handler", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => Response.json({ id: "12345", status: "approved" });
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

test("pago-resultado.html avoids innerHTML and treats manipulated payment_id as invalid text", async () => {
  const html = fs.readFileSync("pago-resultado.html", "utf8");
  assert.equal(/\binnerHTML\b/.test(html), false, "pago-resultado.html must not use innerHTML");

  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(scriptMatch, "Expected inline script in pago-resultado.html");

  const createEl = (tag) => {
    const el = {
      tagName: tag.toUpperCase(),
      className: "",
      children: [],
      attributes: {},
      _textContent: "",
      setAttribute(name, value) { this.attributes[name] = value; },
      appendChild(child) { this.children.push(child); return child; },
      append(...nodes) { this.children.push(...nodes); },
      replaceChildren(...nodes) { this.children = [...nodes]; },
      get textContent() { return this._textContent; },
      set textContent(value) { this._textContent = String(value); }
    };
    return el;
  };

  const statusCard = createEl("div");
  let fetchCalled = false;
  const context = {
    URLSearchParams,
    encodeURIComponent,
    window: { location: { search: "?payment_id=%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E" } },
    document: {
      getElementById: (id) => (id === "status-card" ? statusCard : null),
      createElement: (tag) => createEl(tag),
      createElementNS: (_ns, tag) => createEl(tag),
      createTextNode: (text) => ({ nodeType: 3, textContent: String(text) })
    },
    fetch: async () => {
      fetchCalled = true;
      return Response.json({ status: "approved" });
    },
    localStorage: { removeItem() {} }
  };

  vm.createContext(context);
  vm.runInContext(scriptMatch[1], context);
  await new Promise(resolve => setTimeout(resolve, 0));

  assert.equal(fetchCalled, false, "Manipulated non-numeric payment_id should not trigger API fetch");
  assert.ok(statusCard.children.length > 0, "Status card should render safe DOM nodes");
  const serialized = JSON.stringify(statusCard);
  assert.equal(serialized.includes("<img"), false);
  assert.equal(serialized.includes("onerror"), false);
});

test("Cloudflare worker serves centralized commercial config without cache", async () => {
  const response = await worker.fetch(
    new Request("https://bionativalab.com/api/commercial-config"),
    {},
    { waitUntil() {} }
  );
  assert.equal(response.status, 200);
  assert.match(response.headers.get("Cache-Control") || "", /no-store/);
  const data = await response.json();
  assert.equal(data.source, "server");
  assert.equal(data.catalog.length, CATALOG.length);
  assert.ok(data.productDiscounts.length > 0);
  assert.ok(data.coupons.length > 0);
  assert.ok(data.shippingOptions.length > 0);
});

test("Cloudflare worker /api/quote validates prices, volume offers, and coupons on server", async () => {
  const validRes = await worker.fetch(
    new Request("https://bionativalab.com/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ productId: "creatina-monohidratada", variantId: "bolsa-1kg", quantity: 2, price: 0.01 }],
        shippingId: "lima-recojo",
        couponCode: "semanabionativa"
      })
    }),
    {},
    { waitUntil() {} }
  );
  assert.equal(validRes.status, 200);
  const quote = await validRes.json();
  assert.equal(quote.couponCode, "SEMANABIONATIVA");
  assert.equal(quote.baseTotal, 121.34);
  assert.equal(quote.cardTotal, 127.06);

  const invalidCouponRes = await worker.fetch(
    new Request("https://bionativalab.com/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ productId: "citrato-de-magnesio", variantId: "bolsa-1kg", quantity: 1 }],
        shippingId: "lima-recojo",
        couponCode: "SEMANABIONATIVA"
      })
    }),
    {},
    { waitUntil() {} }
  );
  assert.equal(invalidCouponRes.status, 400);
});

test("store promotions engine never writes config to localStorage and hydrates from server", async () => {
  const browser = loadBrowserData();
  let setItemCalls = 0;
  const context = {
    window: {
      ...browser,
      BIONATIVA_CONFIG: { shippingOptions: [] },
      location: { pathname: "/tienda.html", protocol: "https:" },
      addEventListener() {},
      dispatchEvent() {}
    },
    localStorage: {
      getItem: () => null,
      setItem() { setItemCalls += 1; }
    },
    fetch: async () => Response.json({
      version: "2.0.0",
      serverTime: "2026-11-26T20:00:00.000Z",
      catalog: [{ id: "creatina-monohidratada", price: 99, variants: [{ id: "bolsa-1kg", price: 99 }] }],
      shippingOptions: [{ id: "lima-recojo", name: "Retiro", price: 0 }],
      activeCampaign: browser.BIONATIVA_PROMOTIONS_DEFAULT.activeCampaign,
      productDiscounts: [{ id: "promo-server", targetType: "product", targetId: "creatina-monohidratada", variantId: "bolsa-1kg", regularPrice: 99, promoPrice: 79, discountPercent: 20, badge: "20% OFF", enabled: true }],
      volumeOffers: [],
      combos: [],
      coupons: []
    }),
    CustomEvent: class CustomEvent {}
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync("js/promotions-engine.js", "utf8"), context);
  await new Promise(resolve => setTimeout(resolve, 0));

  const engine = context.window.BionativaPromotions;
  engine.trackEvent("impression");
  assert.equal(setItemCalls, 0, "Store must not persist promotions config or metrics in localStorage");
  assert.equal(engine.serverSynced, true);
  const pricing = engine.getProductPricing("creatina-monohidratada", "bolsa-1kg");
  assert.equal(pricing.regularPrice, 99);
  assert.equal(pricing.promoPrice, 79);
});

test("pago-resultado.html never approves via URL params alone and clears cart only on server approved", async () => {
  const html = fs.readFileSync("pago-resultado.html", "utf8");
  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(scriptMatch);

  const createEl = (tag) => ({
    tagName: tag.toUpperCase(),
    className: "",
    children: [],
    attributes: {},
    _textContent: "",
    setAttribute(name, value) { this.attributes[name] = value; },
    appendChild(child) { this.children.push(child); return child; },
    append(...nodes) { this.children.push(...nodes); },
    replaceChildren(...nodes) { this.children = [...nodes]; },
    get textContent() { return this._textContent; },
    set textContent(value) { this._textContent = String(value); }
  });

  // Case 1: URL says status=approved & status=rejected without payment_id -> must not clear cart or call API
  for (const query of ["?status=approved", "?status=rejected"]) {
    const statusCard = createEl("div");
    let removedKeys = [];
    let fetchCalled = false;
    const context = {
      URLSearchParams,
      encodeURIComponent,
      window: { location: { search: query } },
      document: {
        getElementById: (id) => (id === "status-card" ? statusCard : null),
        createElement: createEl,
        createElementNS: (_ns, tag) => createEl(tag),
        createTextNode: (text) => ({ nodeType: 3, textContent: String(text) })
      },
      fetch: async () => { fetchCalled = true; return Response.json({ status: "approved" }); },
      localStorage: { removeItem(key) { removedKeys.push(key); } }
    };
    vm.createContext(context);
    vm.runInContext(scriptMatch[1], context);
    await new Promise(resolve => setTimeout(resolve, 0));
    assert.equal(fetchCalled, false);
    assert.deepEqual(removedKeys, []);
    assert.equal(JSON.stringify(statusCard).includes("¡Gracias por tu compra!"), false);
  }

  // Case 2: Valid numeric payment_id with server returning approved -> clears cart
  const statusCard = createEl("div");
  let removedKeys = [];
  const context = {
    URLSearchParams,
    encodeURIComponent,
    window: { location: { search: "?payment_id=987654321" } },
    document: {
      getElementById: (id) => (id === "status-card" ? statusCard : null),
      createElement: createEl,
      createElementNS: (_ns, tag) => createEl(tag),
      createTextNode: (text) => ({ nodeType: 3, textContent: String(text) })
    },
    fetch: async () => Response.json({ status: "approved" }),
    localStorage: { removeItem(key) { removedKeys.push(key); } }
  };
  vm.createContext(context);
  vm.runInContext(scriptMatch[1], context);
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.deepEqual(removedKeys, ["bionativa_cart_v1", "bionativa_cart"]);
  assert.equal(JSON.stringify(statusCard).includes("¡Gracias por tu compra!"), true);
});

