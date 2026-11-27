/**
 * BIONATIVA LAB - Motor Central de Promociones y Campañas Comerciales
 * Controla cálculo de precios, ofertas por volumen, combos, cupones, vigencias y métricas.
 * Sin dependencias externas. Totalmente compatible con Cloudflare Pages y Antigravity.
 */

class BionativaPromotionsEngine {
  constructor() {
    this.storageKey = "bionativa_promotions_config_v1";
    this.apiEndpoint = "/api/promotions";
    this.cloudConfigured = false;
    this.config = this.loadConfig();
    this.initCrossTabSync();
    this.syncFromCloud();
  }

  /**
   * Sincroniza la configuración publicada en la nube (Cloudflare KV).
   */
  async syncFromCloud() {
    try {
      const res = await fetch(this.apiEndpoint, { cache: "no-store" });
      if (!res.ok) return null;
      const data = await res.json();
      this.cloudConfigured = Boolean(data && data.configured);

      if (data && data.configured && data.config && typeof data.config === "object") {
        this.config = data.config;
        try {
          localStorage.setItem(this.storageKey, JSON.stringify(this.config));
        } catch (e) {}
        window.dispatchEvent(new CustomEvent("bionativa:promotions_updated", { detail: this.config }));
        return this.config;
      }
    } catch (err) {
      // Silencioso en entornos sin worker/red (ej: apertura local file://)
    }
    return null;
  }

  /**
   * Publica la configuración actual en Cloudflare KV para todos los visitantes.
   */
  async saveToCloud(newConfig, adminKey) {
    try {
      const res = await fetch(this.apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Key": String(adminKey || "")
        },
        body: JSON.stringify({ config: newConfig })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        return { ok: false, status: res.status, error: data.error || "No se pudo publicar en la nube." };
      }
      this.cloudConfigured = true;
      return { ok: true, lastUpdated: data.lastUpdated };
    } catch (err) {
      return { ok: false, status: 0, error: "Error de conexión al publicar en la nube." };
    }
  }

  /**
   * Carga la configuración desde localStorage o inicializa desde los datos predeterminados.
   */
  loadConfig() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object") {
          return parsed;
        }
      }
    } catch (err) {
      console.warn("[PromotionsEngine] Error al leer localStorage, usando valores predeterminados:", err);
    }

    // Usar copia profunda de los valores base
    const defaults = window.BIONATIVA_PROMOTIONS_DEFAULT || {};
    return JSON.parse(JSON.stringify(defaults));
  }

  /**
   * Guarda la configuración actual en localStorage y emite evento custom.
   */
  saveConfig(newConfig) {
    try {
      newConfig.lastUpdated = new Date().toISOString();
      this.config = newConfig;
      localStorage.setItem(this.storageKey, JSON.stringify(this.config));
      window.dispatchEvent(new CustomEvent("bionativa:promotions_updated", { detail: this.config }));
      return true;
    } catch (err) {
      console.error("[PromotionsEngine] Error al guardar configuración:", err);
      return false;
    }
  }

  /**
   * Restablece la configuración a los valores de fábrica predeterminados.
   */
  resetToDefaults() {
    const defaults = window.BIONATIVA_PROMOTIONS_DEFAULT || {};
    const cloned = JSON.parse(JSON.stringify(defaults));
    this.saveConfig(cloned);
    return cloned;
  }

  /**
   * Escucha cambios en localStorage desde otras pestañas (ej: panel de admin -> tienda abierta).
   */
  initCrossTabSync() {
    window.addEventListener("storage", (e) => {
      if (e.key === this.storageKey) {
        this.config = this.loadConfig();
        window.dispatchEvent(new CustomEvent("bionativa:promotions_updated", { detail: this.config }));
      }
    });
  }

  /**
   * Determina el estado dinámico de una campaña (activa, programada, vencida o pausada).
   */
  getCampaignStatus(campaign) {
    if (!campaign) return "expired";
    if (campaign.status === "paused") return "paused";

    const now = Date.now();
    if (campaign.startDate) {
      const startMs = new Date(campaign.startDate).getTime();
      if (!isNaN(startMs) && now < startMs) return "scheduled";
    }

    if (campaign.endDate) {
      const endMs = new Date(campaign.endDate).getTime();
      if (!isNaN(endMs) && now > endMs) return "expired";
    }

    return "active";
  }

  /**
   * Obtiene la campaña activa principal si está vigente.
   */
  getActiveCampaign() {
    const campaign = this.config.activeCampaign;
    if (!campaign) return null;
    const computedStatus = this.getCampaignStatus(campaign);
    return computedStatus === "active" ? { ...campaign, computedStatus } : null;
  }

  /**
   * Calcula el precio regular vs promocional para un producto o variante.
   */
  getProductPricing(productId, variantId = null, categoryId = null, fallbackPrice = null) {
    const activeCampaign = this.getActiveCampaign();
    const discounts = this.config.productDiscounts || [];

    // Base fallback
    let regularPrice = Number(fallbackPrice) || 0;

    // Buscar el producto en BIONATIVA_PRODUCTS si no vino fallbackPrice
    if (!regularPrice && window.BIONATIVA_PRODUCTS && Array.isArray(window.BIONATIVA_PRODUCTS)) {
      const prod = window.BIONATIVA_PRODUCTS.find(p => p.id === productId);
      if (prod) {
        if (!categoryId && prod.category) categoryId = prod.category;
        if (variantId && Array.isArray(prod.variants)) {
          const v = prod.variants.find(item => item.id === variantId);
          regularPrice = v ? Number(v.price) : Number(prod.price);
        } else {
          regularPrice = Number(prod.price);
        }
      }
    }

    // Si no hay campaña activa, retornamos precio regular sin descuento
    if (!activeCampaign) {
      return {
        hasDiscount: false,
        regularPrice: regularPrice,
        promoPrice: regularPrice,
        discountPercent: 0,
        savings: 0,
        badge: null,
        campaignName: null
      };
    }

    // 1. Buscar coincidencia directa por producto (+ variante opcional)
    let rule = discounts.find(d => 
      d.enabled && 
      d.targetType === "product" && 
      d.targetId === productId && 
      (!d.variantId || d.variantId === variantId)
    );

    // 2. Si no hay regla de producto, buscar coincidencia por categoría
    if (!rule && categoryId) {
      rule = discounts.find(d => 
        d.enabled && 
        d.targetType === "category" && 
        d.targetId === categoryId
      );
    }

    if (!rule) {
      return {
        hasDiscount: false,
        regularPrice: regularPrice,
        promoPrice: regularPrice,
        discountPercent: 0,
        savings: 0,
        badge: null,
        campaignName: null
      };
    }

    // Calcular precio promocional
    let promoPrice = regularPrice;
    let savings = 0;
    let discountPercent = Number(rule.discountPercent) || 0;

    if (rule.promoPrice && Number(rule.promoPrice) > 0) {
      promoPrice = Number(rule.promoPrice);
      savings = Math.max(0, regularPrice - promoPrice);
      if (regularPrice > 0 && !discountPercent) {
        discountPercent = Math.round((savings / regularPrice) * 100);
      }
    } else if (discountPercent > 0) {
      savings = regularPrice * (discountPercent / 100);
      promoPrice = Math.max(0, regularPrice - savings);
    }

    return {
      hasDiscount: promoPrice < regularPrice,
      regularPrice: regularPrice,
      promoPrice: Number(promoPrice.toFixed(2)),
      discountPercent: discountPercent,
      savings: Number(savings.toFixed(2)),
      badge: rule.badge || `${discountPercent}% OFF`,
      campaignName: activeCampaign.name
    };
  }

  /**
   * Evalúa si un producto califica para una oferta por volumen (ej: compra múltiple).
   */
  getVolumeOffer(productId, quantity) {
    const qty = Number(quantity) || 1;
    const offers = (this.config.volumeOffers || []).filter(o => o.enabled && o.productId === productId);
    if (!offers.length) return null;

    // Buscar la regla con mayor minQuantity que cumpla la condición
    offers.sort((a, b) => b.minQuantity - a.minQuantity);
    const matched = offers.find(o => qty >= o.minQuantity);

    return matched || null;
  }

  /**
   * Valida un código de cupón de descuento frente a las reglas configuradas.
   */
  validateCoupon(code, currentSubtotal = 0) {
    if (!code || typeof code !== "string") {
      return { valid: false, error: "Por favor ingresa un código de cupón." };
    }

    const cleanCode = code.trim().toUpperCase();
    const coupons = this.config.coupons || [];
    const coupon = coupons.find(c => c.code.trim().toUpperCase() === cleanCode);

    if (!coupon) {
      return { valid: false, error: "El cupón ingresado no existe." };
    }

    if (!coupon.enabled) {
      return { valid: false, error: "Este cupón se encuentra inactivo." };
    }

    const now = Date.now();
    if (coupon.startDate && now < new Date(coupon.startDate).getTime()) {
      return { valid: false, error: "Este cupón aún no entra en vigencia." };
    }

    if (coupon.endDate && now > new Date(coupon.endDate).getTime()) {
      return { valid: false, error: "Este cupón ya ha vencido." };
    }

    if (coupon.maxUses && coupon.usedCount >= coupon.maxUses) {
      return { valid: false, error: "Este cupón ha alcanzado el límite máximo de usos." };
    }

    if (coupon.minSpend && currentSubtotal < Number(coupon.minSpend)) {
      return { 
        valid: false, 
        error: `Monto mínimo de compra requerido: S/ ${Number(coupon.minSpend).toFixed(2)} (Tienes S/ ${currentSubtotal.toFixed(2)})` 
      };
    }

    // Calcular descuento
    let discountAmount = 0;
    if (coupon.discountType === "percent") {
      discountAmount = currentSubtotal * (Number(coupon.discountValue) / 100);
    } else {
      discountAmount = Math.min(currentSubtotal, Number(coupon.discountValue));
    }

    return {
      valid: true,
      coupon: coupon,
      code: coupon.code,
      label: coupon.label || `Cupón ${coupon.code}`,
      discountAmount: Number(discountAmount.toFixed(2))
    };
  }

  /**
   * Evalúa la totalidad del carrito de compras aplicando:
   * 1. Descuentos por producto / categoría
   * 2. Descuentos por volumen
   * 3. Combos
   * 4. Cupones de descuento
   */
  evaluateCart(items = [], appliedCouponCode = null) {
    if (!Array.isArray(items)) items = [];

    let subtotalRegular = 0;
    let subtotalWithProductDiscounts = 0;
    let volumeDiscountTotal = 0;

    const evaluatedItems = items.map(item => {
      const qty = Number(item.quantity) || 1;
      const pricing = this.getProductPricing(item.productId, item.variantId, item.category, item.price);

      const itemRegularPrice = pricing.regularPrice || Number(item.price) || 0;
      const itemFinalBasePrice = pricing.hasDiscount ? pricing.promoPrice : itemRegularPrice;

      subtotalRegular += itemRegularPrice * qty;
      subtotalWithProductDiscounts += itemFinalBasePrice * qty;

      // Evaluar volumen
      const volumeRule = this.getVolumeOffer(item.productId, qty);
      let itemVolumeDiscount = 0;

      if (volumeRule) {
        if (volumeRule.discountType === "percent") {
          itemVolumeDiscount = (itemFinalBasePrice * qty) * (Number(volumeRule.discountValue) / 100);
        } else {
          itemVolumeDiscount = Number(volumeRule.discountValue) * qty;
        }
        volumeDiscountTotal += itemVolumeDiscount;
      }

      return {
        ...item,
        pricing,
        volumeRule,
        volumeDiscount: Number(itemVolumeDiscount.toFixed(2)),
        lineTotal: Number(((itemFinalBasePrice * qty) - itemVolumeDiscount).toFixed(2))
      };
    });

    const productDiscountTotal = Math.max(0, subtotalRegular - subtotalWithProductDiscounts);
    const subtotalAfterVolume = Math.max(0, subtotalWithProductDiscounts - volumeDiscountTotal);

    // Evaluar Cupón
    let couponResult = null;
    let couponDiscountTotal = 0;

    if (appliedCouponCode) {
      couponResult = this.validateCoupon(appliedCouponCode, subtotalAfterVolume);
      if (couponResult.valid) {
        couponDiscountTotal = couponResult.discountAmount;
      }
    }

    const totalSavings = Number((productDiscountTotal + volumeDiscountTotal + couponDiscountTotal).toFixed(2));
    const finalSubtotal = Math.max(0, Number((subtotalAfterVolume - couponDiscountTotal).toFixed(2)));

    return {
      items: evaluatedItems,
      subtotalRegular: Number(subtotalRegular.toFixed(2)),
      productDiscountTotal: Number(productDiscountTotal.toFixed(2)),
      volumeDiscountTotal: Number(volumeDiscountTotal.toFixed(2)),
      couponDiscountTotal: Number(couponDiscountTotal.toFixed(2)),
      couponResult: couponResult,
      totalSavings: totalSavings,
      finalSubtotal: finalSubtotal
    };
  }

  /**
   * Registro y telemetría de eventos de marketing (Impresiones, Clics, Conversiones).
   */
  trackEvent(eventType, metadata = {}) {
    try {
      const active = this.config.activeCampaign;
      if (!active) return;

      if (!active.metrics) {
        active.metrics = { impressions: 0, clicks: 0, conversions: 0, revenueGenerated: 0 };
      }

      if (eventType === "impression") {
        active.metrics.impressions = (active.metrics.impressions || 0) + 1;
      } else if (eventType === "click") {
        active.metrics.clicks = (active.metrics.clicks || 0) + 1;
      } else if (eventType === "conversion") {
        active.metrics.conversions = (active.metrics.conversions || 0) + 1;
        const amount = Number(metadata.amount) || 0;
        active.metrics.revenueGenerated = Number(((active.metrics.revenueGenerated || 0) + amount).toFixed(2));

        // Incrementar uso de cupón si aplica
        if (metadata.couponCode) {
          const coupon = (this.config.coupons || []).find(c => c.code === metadata.couponCode);
          if (coupon) coupon.usedCount = (coupon.usedCount || 0) + 1;
        }
      }

      // Guardar métricas sin emitir spam de eventos
      localStorage.setItem(this.storageKey, JSON.stringify(this.config));
    } catch (e) {
      console.warn("[PromotionsEngine] Error al registrar evento:", e);
    }
  }

  /**
   * Añadir un combo al carrito con 1 solo clic.
   */
  addComboToCart(comboId) {
    const combos = this.config.combos || [];
    const combo = combos.find(c => c.id === comboId);
    if (!combo || !window.cart) return false;

    // Registrar clic
    this.trackEvent("click", { comboId: combo.id });

    // Añadir cada producto del combo a la bolsa
    combo.items.forEach(item => {
      window.cart.addItem(item.productId, item.variantId || null, 1);
    });

    if (window.cart.showToast) {
      window.cart.showToast(`¡${combo.name} agregado a tu bolsa! Ahorras S/ ${Number(combo.savings).toFixed(2)}`, "success");
    }

    return true;
  }
}

// Instanciar singleton en ventana
window.BionativaPromotions = new BionativaPromotionsEngine();
