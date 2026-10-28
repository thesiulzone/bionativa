/**
 * BIONATIVA LAB - Sistema de Carrito de Compras y Checkout
 * Soporta persistencia en localStorage, drawer deslizante y Checkout multicanal
 */

class BionativaCart {
  constructor() {
    this.storageKey = "bionativa_cart_v1";
    this.items = this.loadCart();
    this.selectedShipping = "lima-express";
    this.selectedPayment = "whatsapp";
    this.init();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error al cargar carrito:", e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
      this.updateUI();
    } catch (e) {
      console.error("Error al guardar carrito:", e);
    }
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.injectCartDrawer();
      this.bindEvents();
      this.updateUI();
    });
  }

  addItem(productId, variantId = null, quantity = 1) {
    const product = window.BIONATIVA_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let finalPrice = product.price;
    let variantName = product.unit || "1KG";
    let cartItemId = product.id;

    if (variantId && product.variants) {
      const variant = product.variants.find(v => v.id === variantId);
      if (variant) {
        finalPrice = variant.price;
        variantName = variant.name;
        cartItemId = `${product.id}__${variant.id}`;
      }
    }

    const existingIndex = this.items.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        cartItemId: cartItemId,
        productId: product.id,
        variantId: variantId,
        name: product.shortName || product.name,
        variantName: variantName,
        price: finalPrice,
        image: product.image,
        quantity: quantity
      });
    }

    this.saveCart();
    this.showToast(`¡Añadido al carrito: ${product.shortName} (${variantName})!`);
    this.openDrawer();
  }

  updateQuantity(cartItemId, delta) {
    const itemIndex = this.items.findIndex(item => item.cartItemId === cartItemId);
    if (itemIndex > -1) {
      this.items[itemIndex].quantity += delta;
      if (this.items[itemIndex].quantity <= 0) {
        this.items.splice(itemIndex, 1);
      }
      this.saveCart();
    }
  }

  removeItem(cartItemId) {
    this.items = this.items.filter(item => item.cartItemId !== cartItemId);
    this.saveCart();
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getItemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getShippingCost() {
    const option = window.BIONATIVA_CONFIG.shippingOptions.find(o => o.id === this.selectedShipping);
    return option ? option.price : 0;
  }

  getTotal() {
    return this.getSubtotal() + this.getShippingCost();
  }

  updateUI() {
    // Actualizar contadores numéricos en navbar y mobile bar
    const count = this.getItemCount();
    const badges = document.querySelectorAll(".cart-count-badge");
    badges.forEach(badge => {
      badge.textContent = count;
      badge.classList.toggle("hidden", count === 0);
    });

    // Renderizar lista en el drawer
    const container = document.getElementById("cart-drawer-items");
    const subtotalEl = document.getElementById("cart-drawer-subtotal");
    const totalEl = document.getElementById("cart-drawer-total");
    const shippingEl = document.getElementById("cart-drawer-shipping");
    const emptyMsg = document.getElementById("cart-drawer-empty");
    const footerEl = document.getElementById("cart-drawer-footer");

    if (!container) return;

    if (this.items.length === 0) {
      container.innerHTML = "";
      if (emptyMsg) emptyMsg.classList.remove("hidden");
      if (footerEl) footerEl.classList.add("hidden");
      return;
    }

    if (emptyMsg) emptyMsg.classList.add("hidden");
    if (footerEl) footerEl.classList.remove("hidden");

    container.innerHTML = this.items.map(item => `
      <div class="flex items-center gap-4 py-3.5 border-b border-[#E8E2D8] last:border-b-0 animate-fade-in">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain rounded-lg bg-[#FAF6F0] p-1 border border-[#E8E2D8]/60 flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <h4 class="font-semibold text-sm text-[#1E3B2B] truncate leading-tight">${item.name}</h4>
          <span class="inline-block text-xs text-[#B67A52] font-medium mt-0.5">${item.variantName}</span>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center border border-[#D5CDBD] rounded-full bg-white px-2 py-0.5">
              <button onclick="window.cart.updateQuantity('${item.cartItemId}', -1)" class="w-5 h-5 flex items-center justify-center text-[#1E3B2B] hover:text-[#B67A52] font-bold text-sm">−</button>
              <span class="w-7 text-center font-semibold text-xs text-[#1E3B2B]">${item.quantity}</span>
              <button onclick="window.cart.updateQuantity('${item.cartItemId}', 1)" class="w-5 h-5 flex items-center justify-center text-[#1E3B2B] hover:text-[#B67A52] font-bold text-sm">+</button>
            </div>
            <span class="font-bold text-sm text-[#1E3B2B]">S/ ${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
        <button onclick="window.cart.removeItem('${item.cartItemId}')" title="Eliminar producto" class="text-stone-400 hover:text-red-500 transition-colors p-1 self-start">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </div>
    `).join("");

    if (subtotalEl) subtotalEl.textContent = `S/ ${this.getSubtotal().toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = `S/ ${this.getShippingCost().toFixed(2)}`;
    if (totalEl) totalEl.textContent = `S/ ${this.getTotal().toFixed(2)}`;
  }

  injectCartDrawer() {
    if (document.getElementById("cart-drawer-overlay")) return;

    const drawerHTML = `
      <!-- Cart Drawer Overlay -->
      <div id="cart-drawer-overlay" class="fixed inset-0 bg-black/50 z-50 opacity-0 pointer-events-none transition-opacity duration-300"></div>

      <!-- Cart Drawer Panel -->
      <div id="cart-drawer-panel" class="fixed top-0 right-0 h-full w-full max-w-md bg-[#FAF9F6] shadow-2xl z-50 translate-x-full transition-transform duration-300 ease-in-out flex flex-col font-sans border-l border-[#E5DECF]">
        <!-- Header -->
        <div class="p-5 border-b border-[#E8E2D8] flex items-center justify-between bg-white">
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6 text-[#1E3B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <h3 class="font-bold text-lg text-[#1E3B2B]">Tu Bolsa de Bienestar</h3>
          </div>
          <button id="cart-drawer-close" class="p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Banner de Garantía y Pureza -->
        <div class="bg-[#1E3B2B]/5 px-4 py-2.5 text-xs text-[#1E3B2B] flex items-center justify-between border-b border-[#1E3B2B]/10">
          <span class="flex items-center gap-1.5 font-medium">
            <svg class="w-4 h-4 text-[#B67A52]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Materia Prima Americana con COA
          </span>
          <span class="font-semibold text-[#B67A52]">Envíos Perú</span>
        </div>

        <!-- Cart Items List -->
        <div class="flex-1 overflow-y-auto px-5 py-3">
          <div id="cart-drawer-empty" class="text-center py-16 hidden">
            <div class="w-20 h-20 mx-auto rounded-full bg-[#EFE9DF] flex items-center justify-center text-stone-400 mb-4">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            </div>
            <h4 class="font-bold text-[#1E3B2B] text-base mb-1">Tu carrito está vacío</h4>
            <p class="text-xs text-stone-500 max-w-xs mx-auto mb-6">Descubre nuestros 16 suplementos puros para fuerza, bienestar articular y descanso reparador.</p>
            <a href="tienda" class="inline-block bg-[#1E3B2B] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#284f3a] transition shadow-sm">Explorar Catálogo</a>
          </div>

          <div id="cart-drawer-items"></div>
        </div>

        <!-- Footer / Checkout Section -->
        <div id="cart-drawer-footer" class="p-5 border-t border-[#E8E2D8] bg-white space-y-3.5">
          <!-- Shipping Selector -->
          <div>
            <label class="block text-xs font-bold text-stone-600 mb-1">Opciones de Entrega y Envío:</label>
            <select id="cart-shipping-select" class="w-full bg-[#FAF9F6] border border-[#D5CDBD] text-xs text-[#1E3B2B] font-medium rounded-lg p-2.5 focus:border-[#1E3B2B] focus:ring-0 cursor-pointer">
              ${window.BIONATIVA_CONFIG.shippingOptions.map(opt => `
                <option value="${opt.id}" ${opt.id === this.selectedShipping ? "selected" : ""}>
                  ${opt.name} (${opt.price > 0 ? "S/ " + opt.price.toFixed(2) : "GRATIS"})
                </option>
              `).join("")}
            </select>
          </div>

          <!-- Totales -->
          <div class="space-y-1.5 pt-1 text-xs text-stone-600">
            <div class="flex justify-between">
              <span>Subtotal productos:</span>
              <span id="cart-drawer-subtotal" class="font-bold text-[#1E3B2B]">S/ 0.00</span>
            </div>
            <div class="flex justify-between">
              <span>Costo de envío:</span>
              <span id="cart-drawer-shipping" class="font-bold text-[#B67A52]">S/ 10.00</span>
            </div>
            <div class="flex justify-between text-base font-extrabold text-[#1E3B2B] pt-2 border-t border-dashed border-[#E8E2D8]">
              <span>Total Estimado:</span>
              <span id="cart-drawer-total" class="text-lg text-[#1E3B2B]">S/ 0.00</span>
            </div>
          </div>

          <!-- Checkout Buttons -->
          <div class="space-y-2 pt-1">
            <button onclick="window.cart.openCheckoutModal('whatsapp')" class="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition transform active:scale-[0.98]">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.179.182-.077.357.101.174.451.744.968 1.205.666.594 1.228.777 1.402.864.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/></svg>
              Comprar por WhatsApp (Rápido)
            </button>

            <button onclick="window.cart.openCheckoutModal('pay-options')" class="w-full bg-[#1E3B2B] hover:bg-[#284f3a] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
              Pagar con Yape, Tarjeta o Transferencia
            </button>
          </div>
        </div>
      </div>

      <!-- Toast Notification Container -->
      <div id="toast-container" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none"></div>

      <!-- Checkout Full Modal -->
      <div id="checkout-modal" class="fixed inset-0 bg-black/60 z-50 hidden flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl font-sans border border-[#E8E2D8]">
          <button onclick="window.cart.closeCheckoutModal()" class="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div id="checkout-modal-content"></div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", drawerHTML);
  }

  bindEvents() {
    // Abrir drawer desde cualquier botón .open-cart-btn
    document.addEventListener("click", e => {
      if (e.target.closest(".open-cart-btn")) {
        e.preventDefault();
        this.openDrawer();
      }
    });

    const overlay = document.getElementById("cart-drawer-overlay");
    const closeBtn = document.getElementById("cart-drawer-close");
    const shippingSelect = document.getElementById("cart-shipping-select");

    if (overlay) overlay.addEventListener("click", () => this.closeDrawer());
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeDrawer());

    if (shippingSelect) {
      shippingSelect.addEventListener("change", (e) => {
        this.selectedShipping = e.target.value;
        this.updateUI();
      });
    }
  }

  openDrawer() {
    const overlay = document.getElementById("cart-drawer-overlay");
    const panel = document.getElementById("cart-drawer-panel");
    if (overlay && panel) {
      overlay.classList.remove("opacity-0", "pointer-events-none");
      panel.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
    }
  }

  closeDrawer() {
    const overlay = document.getElementById("cart-drawer-overlay");
    const panel = document.getElementById("cart-drawer-panel");
    if (overlay && panel) {
      overlay.classList.add("opacity-0", "pointer-events-none");
      panel.classList.add("translate-x-full");
      document.body.style.overflow = "";
    }
  }

  showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "bg-[#1E3B2B] text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 transform translate-y-2 opacity-0 transition-all duration-300 pointer-events-auto border border-[#B67A52]/40";
    toast.innerHTML = `
      <svg class="w-4 h-4 text-[#B67A52] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.remove("translate-y-2", "opacity-0"), 10);
    setTimeout(() => {
      toast.classList.add("opacity-0");
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  openCheckoutModal(mode = "whatsapp") {
    const modal = document.getElementById("checkout-modal");
    const content = document.getElementById("checkout-modal-content");
    if (!modal || !content) return;

    if (this.items.length === 0) {
      alert("Por favor agrega al menos un producto a tu bolsa de compra.");
      return;
    }

    const shipping = window.BIONATIVA_CONFIG.shippingOptions.find(o => o.id === this.selectedShipping);
    const subtotal = this.getSubtotal();
    const shippingPrice = this.getShippingCost();
    const total = this.getTotal();

    content.innerHTML = `
      <div class="space-y-5">
        <div class="border-b border-stone-200 pb-3">
          <span class="text-xs font-bold text-[#B67A52] uppercase tracking-wider">Finalizar Compra</span>
          <h3 class="text-xl font-bold text-[#1E3B2B] mt-0.5">Datos para tu Envío</h3>
          <p class="text-xs text-stone-500">Completa tus datos para coordinar la entrega en Lima, Cusco o todo el Perú.</p>
        </div>

        <form id="checkout-form" onsubmit="window.cart.submitOrder(event)" class="space-y-4 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block font-semibold text-stone-700 mb-1">Nombre y Apellidos *</label>
              <input type="text" id="cust-name" required placeholder="Ej: Juan Pérez" class="w-full border border-stone-300 rounded-lg p-2.5 focus:border-[#1E3B2B] focus:ring-0" />
            </div>
            <div>
              <label class="block font-semibold text-stone-700 mb-1">DNI o RUC *</label>
              <input type="text" id="cust-doc" required placeholder="8 u 11 dígitos" class="w-full border border-stone-300 rounded-lg p-2.5 focus:border-[#1E3B2B] focus:ring-0" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block font-semibold text-stone-700 mb-1">Teléfono Móvil / WhatsApp *</label>
              <input type="tel" id="cust-phone" required placeholder="Ej: 987654321" class="w-full border border-stone-300 rounded-lg p-2.5 focus:border-[#1E3B2B] focus:ring-0" />
            </div>
            <div>
              <label class="block font-semibold text-stone-700 mb-1">Ciudad / Departamento *</label>
              <input type="text" id="cust-city" required placeholder="Ej: Lima / Cusco / Arequipa" class="w-full border border-stone-300 rounded-lg p-2.5 focus:border-[#1E3B2B] focus:ring-0" />
            </div>
          </div>

          <div>
            <label class="block font-semibold text-stone-700 mb-1">Dirección exacta o Agencia de recojo (Shalom / Marvisur) *</label>
            <input type="text" id="cust-address" required placeholder="Calle / Av. / Referencia o Nombre de Agencia" class="w-full border border-stone-300 rounded-lg p-2.5 focus:border-[#1E3B2B] focus:ring-0" />
          </div>

          <!-- Selección de Forma de Pago -->
          <div class="pt-2">
            <label class="block font-bold text-stone-800 mb-2">Selecciona tu Forma de Pago:</label>
            <div class="grid grid-cols-1 gap-2">
              <label class="flex items-center gap-3 p-3 border rounded-xl border-[#25D366]/40 bg-[#25D366]/5 cursor-pointer">
                <input type="radio" name="pay-method" value="whatsapp" checked class="text-[#1E3B2B] focus:ring-0" />
                <div>
                  <div class="font-bold text-[#1E3B2B]">Confirmar y coordinar por WhatsApp (Recomendado)</div>
                  <div class="text-[11px] text-stone-500">Un asesor te envía la confirmación con el método que elijas al chat.</div>
                </div>
              </label>

              <label class="flex items-center gap-3 p-3 border rounded-xl border-stone-200 hover:border-[#1E3B2B] cursor-pointer">
                <input type="radio" name="pay-method" value="yape" class="text-[#1E3B2B] focus:ring-0" />
                <div>
                  <div class="font-bold text-[#1E3B2B]">Plin / Interbank (Principal) / Banco de la Nación / Digitales</div>
                  <div class="text-[11px] text-stone-500">Ver números de cuenta y código QR al instante.</div>
                </div>
              </label>

              <label class="flex items-center gap-3 p-3 border rounded-xl border-stone-200 hover:border-[#1E3B2B] cursor-pointer">
                <input type="radio" name="pay-method" value="card" class="text-[#1E3B2B] focus:ring-0" />
                <div>
                  <div class="font-bold text-[#1E3B2B]">Tarjeta de Crédito o Débito (Visa, Mastercard)</div>
                  <div class="text-[11px] text-stone-500">Pago seguro en línea procesado al instante.</div>
                </div>
              </label>
            </div>
          </div>

          <!-- Resumen de Totales -->
          <div class="bg-[#FAF6F0] p-3.5 rounded-xl border border-[#E8E2D8] space-y-1">
            <div class="flex justify-between text-stone-600">
              <span>Método de envío seleccionado:</span>
              <span class="font-semibold text-[#1E3B2B]">${shipping ? shipping.name : "Lima"}</span>
            </div>
            <div class="flex justify-between text-stone-600">
              <span>Subtotal:</span>
              <span>S/ ${subtotal.toFixed(2)}</span>
            </div>
            <div class="flex justify-between text-stone-600">
              <span>Costo de Envío:</span>
              <span>S/ ${shippingPrice.toFixed(2)}</span>
            </div>
            <div class="flex justify-between text-sm font-black text-[#1E3B2B] pt-1 border-t border-stone-300">
              <span>Total a Pagar:</span>
              <span class="text-base text-[#1E3B2B]">S/ ${total.toFixed(2)}</span>
            </div>
          </div>

          <div class="pt-2">
            <button type="submit" class="w-full bg-[#1E3B2B] hover:bg-[#284f3a] text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-md transition transform active:scale-[0.98]">
              Confirmar Pedido (S/ ${total.toFixed(2)})
            </button>
          </div>
        </form>
      </div>
    `;

    modal.classList.remove("hidden");
  }

  closeCheckoutModal() {
    const modal = document.getElementById("checkout-modal");
    if (modal) modal.classList.add("hidden");
  }

  submitOrder(e) {
    e.preventDefault();
    const name = document.getElementById("cust-name").value.trim();
    const doc = document.getElementById("cust-doc").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const city = document.getElementById("cust-city").value.trim();
    const address = document.getElementById("cust-address").value.trim();
    const payMethodRadio = document.querySelector('input[name="pay-method"]:checked');
    const payMethod = payMethodRadio ? payMethodRadio.value : "whatsapp";

    const shipping = window.BIONATIVA_CONFIG.shippingOptions.find(o => o.id === this.selectedShipping);
    const subtotal = this.getSubtotal().toFixed(2);
    const shippingCost = this.getShippingCost().toFixed(2);
    const total = this.getTotal().toFixed(2);

    if (payMethod === "whatsapp" || payMethod === "yape") {
      let itemsText = this.items.map(item => `• ${item.quantity}x ${item.name} (${item.variantName}) - S/ ${(item.price * item.quantity).toFixed(2)}`).join("\n");

      let message = `🌿 *NUEVO PEDIDO - BIONATIVA LAB*\n` +
        `🌐 *Dominio:* bionativalab.com\n` +
        `-----------------------------------------\n` +
        `📦 *PRODUCTOS SOLICITADOS:*\n${itemsText}\n` +
        `-----------------------------------------\n` +
        `💰 *Subtotal:* S/ ${subtotal}\n` +
        `🚚 *Envío:* ${shipping ? shipping.name : "Coordinado"} (S/ ${shippingCost})\n` +
        `✅ *TOTAL A PAGAR: S/ ${total}*\n` +
        `-----------------------------------------\n` +
        `👤 *DATOS DEL CLIENTE:*\n` +
        `• *Nombre:* ${name}\n` +
        `• *DNI/RUC:* ${doc}\n` +
        `• *Teléfono:* ${phone}\n` +
        `• *Ciudad/Destino:* ${city}\n` +
        `• *Dirección/Agencia:* ${address}\n` +
        `• *Forma de Pago:* ${payMethod === "yape" ? "Yape / Transferencia" : "Coordinar por WhatsApp"}\n` +
        `-----------------------------------------\n` +
        `Por favor, indíquenme los pasos para concretar la entrega. ¡Muchas gracias!`;

      const whatsappURL = `https://wa.me/${window.BIONATIVA_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

      // Si seleccionó Yape, mostramos los datos bancarios y botón para enviar captura a WhatsApp
      if (payMethod === "yape") {
        this.renderBankTransferDetails(total, whatsappURL);
        return;
      }

      // Redirigir a WhatsApp
      window.open(whatsappURL, "_blank");
      this.closeCheckoutModal();
      this.clearCart();
      this.showToast("¡Pedido enviado a WhatsApp con éxito!");
    } else if (payMethod === "card") {
      this.renderCardPaymentSimulation(total);
    }
  }

  renderBankTransferDetails(total, whatsappURL) {
    const content = document.getElementById("checkout-modal-content");
    content.innerHTML = `
      <div class="text-center space-y-4 py-2">
        <div class="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <div>
          <span class="text-[11px] font-bold text-[#CF926B] tracking-wider uppercase">Confirmación de Pago</span>
          <h3 class="text-xl font-bold text-[#1E3B2B] mt-0.5">Cuentas para Pago en Soles</h3>
          <p class="text-xs text-stone-600 mt-1">Total a transferir: <strong class="text-base text-[#1E3B2B]">S/ ${total}</strong></p>
          <div class="inline-block bg-amber-50 text-amber-800 border border-amber-200 text-[11px] px-3 py-1 rounded-full font-medium mt-2">
            🏷️ Por favor consignar o indicar: <strong>Para Pedido BioNativa</strong>
          </div>
        </div>

        <!-- CUENTA PRINCIPAL DESTACADA: INTERBANK -->
        <div class="bg-gradient-to-b from-[#FAFDFB] to-[#F3F8F5] p-4 rounded-2xl border-2 border-[#009B3A]/40 text-left relative shadow-sm">
          <div class="flex items-center justify-between mb-3 border-b border-emerald-100 pb-2.5">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-[#009B3A] text-white flex items-center justify-center font-black text-xs shadow-sm">IB</span>
              <div>
                <span class="text-[10px] font-bold text-[#009B3A] tracking-wider uppercase block">Cuenta Principal Oficial</span>
                <span class="font-bold text-sm text-[#1E3B2B]">INTERBANK</span>
              </div>
            </div>
            <span class="bg-[#009B3A]/10 text-[#009B3A] text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-[#009B3A]/30">Recomendado</span>
          </div>

          <div class="space-y-2 text-xs">
            <div class="bg-white p-2.5 rounded-xl border border-stone-200 flex items-center justify-between gap-2">
              <div>
                <span class="text-[10px] text-stone-500 block uppercase font-bold">Cuenta Negocios Soles:</span>
                <strong class="font-mono text-sm text-stone-900 tracking-wider">2003008847590</strong>
              </div>
              <button type="button" onclick="navigator.clipboard.writeText('2003008847590'); alert('¡Número de cuenta Interbank copiado!');" class="text-[11px] bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold px-2 py-1 rounded border border-stone-300 transition">Copiar</button>
            </div>

            <div class="bg-white p-2.5 rounded-xl border border-stone-200 flex items-center justify-between gap-2">
              <div>
                <span class="text-[10px] text-stone-500 block uppercase font-bold">CCI Interbancario:</span>
                <strong class="font-mono text-xs text-stone-800">00320000300884759037</strong>
              </div>
              <button type="button" onclick="navigator.clipboard.writeText('00320000300884759037'); alert('¡CCI Interbank copiado!');" class="text-[11px] bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold px-2 py-1 rounded border border-stone-300 transition">Copiar</button>
            </div>

            <div class="bg-white p-3 rounded-xl border border-emerald-200 flex flex-col sm:flex-row items-center gap-3">
              <div class="flex-shrink-0 text-center">
                <img src="img/qr-plin-interbank.png" alt="Código QR PLIN Interbank" class="w-24 h-24 rounded-lg border border-stone-300 p-1 bg-white shadow-sm mx-auto" />
                <span class="text-[9px] text-stone-500 block mt-1 font-semibold">Escanear con PLIN</span>
              </div>
              <div class="flex-1 text-left w-full space-y-1">
                <div class="flex items-center gap-1.5">
                  <span class="bg-[#00D4B2] text-white font-extrabold text-[10px] px-1.5 py-0.5 rounded">PLIN</span>
                  <span class="font-bold text-xs text-stone-800">Directo a Cuenta Negocios</span>
                </div>
                <div class="font-mono text-base font-black text-[#009B3A]">972 050 601</div>
                <div class="text-[11px] text-stone-600 leading-tight pt-0.5">
                  Titular: <strong class="text-stone-800">JORGE LUIS DE LA FLOR PARHUAYO</strong><br />
                  <span class="text-stone-500 text-[10px] font-semibold">(BIONATIVALAB)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- BANCO DE LA NACION DEL PERU -->
        <div class="bg-white p-3.5 rounded-xl border border-rose-200 text-left shadow-sm">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-6 h-6 rounded bg-[#D31411] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">BN</span>
            <div>
              <span class="font-bold text-xs text-stone-900 block">BANCO DE LA NACIÓN DEL PERÚ</span>
              <span class="text-[10px] text-stone-500">Cta. Ahorros Soles</span>
            </div>
          </div>
          <div class="bg-stone-50 p-2.5 rounded-lg border border-stone-200 flex items-center justify-between gap-2">
            <strong class="font-mono text-sm text-stone-900 tracking-wider">04 181 512917</strong>
            <button type="button" onclick="navigator.clipboard.writeText('04181512917'); alert('¡Número de cuenta Banco de la Nación copiado!');" class="text-[11px] bg-white hover:bg-stone-100 text-stone-700 font-semibold px-2 py-1 rounded border border-stone-300 transition">Copiar</button>
          </div>
        </div>

        <!-- CUENTAS DIGITALES & BILLETERAS -->
        <div class="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-left space-y-2">
          <span class="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Otras Cuentas Digitales y Billeteras</span>

          <!-- AGORA SIP -->
          <div class="bg-white p-2 rounded-lg border border-stone-200 flex items-center justify-between gap-2 text-xs">
            <div>
              <span class="font-bold text-stone-800 text-[11px] block">Cuenta SIP (AGORA)</span>
              <span class="text-[10px] text-stone-500">CCI:</span> <strong class="font-mono text-[11px] text-stone-900">09400141001143811657</strong>
            </div>
            <button type="button" onclick="navigator.clipboard.writeText('09400141001143811657'); alert('¡CCI Agora copiado!');" class="text-[10px] bg-stone-100 hover:bg-stone-200 text-stone-700 px-2 py-1 rounded border border-stone-300">Copiar</button>
          </div>

          <!-- LIGO -->
          <div class="bg-white p-2 rounded-lg border border-stone-200 flex items-center justify-between gap-2 text-xs">
            <div>
              <span class="font-bold text-stone-800 text-[11px] block">LIGO</span>
              <span class="text-[10px] text-stone-500">Cuenta:</span> <strong class="font-mono text-[11px] text-stone-900">92100130217639772047</strong>
            </div>
            <button type="button" onclick="navigator.clipboard.writeText('92100130217639772047'); alert('¡Cuenta Ligo copiada!');" class="text-[10px] bg-stone-100 hover:bg-stone-200 text-stone-700 px-2 py-1 rounded border border-stone-300">Copiar</button>
          </div>

          <!-- LEMON -->
          <div class="bg-white p-2 rounded-lg border border-stone-200 flex items-center justify-between gap-2 text-xs">
            <div>
              <span class="font-bold text-[#14C977] text-[11px] block">LEMON CASH</span>
              <span class="text-[10px] text-stone-500">CCI:</span> <strong class="font-mono text-[11px] text-stone-900">92200300000342324790</strong><br/>
              <span class="text-[10px] text-stone-500">LemonTag:</span> <strong class="font-mono text-[11px] text-emerald-700">$incotecsac</strong>
            </div>
            <button type="button" onclick="navigator.clipboard.writeText('92200300000342324790'); alert('¡CCI Lemon copiado!');" class="text-[10px] bg-stone-100 hover:bg-stone-200 text-stone-700 px-2 py-1 rounded border border-stone-300">Copiar</button>
          </div>
        </div>

        <p class="text-[11px] text-stone-500 leading-tight">Al realizar tu pago, haz clic en el siguiente botón para enviar el comprobante y coordinar el despacho inmediato por WhatsApp:</p>

        <a href="${whatsappURL}" target="_blank" onclick="window.cart.clearCart(); window.cart.closeCheckoutModal();" class="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-md transition transform active:scale-[0.98]">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.179.182-.077.357.101.174.451.744.968 1.205.666.594 1.228.777 1.402.864.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/></svg>
          Enviar Comprobante a WhatsApp
        </a>
      </div>
    `;
  }

  renderCardPaymentSimulation(total) {
    const content = document.getElementById("checkout-modal-content");
    content.innerHTML = `
      <div class="space-y-4 py-1 text-xs">
        <div class="border-b border-stone-200 pb-2">
          <span class="text-xs font-bold text-[#B67A52] uppercase tracking-wider">Pasarela Segura SSL Oficial</span>
          <h3 class="text-lg font-bold text-[#1E3B2B] mt-0.5">Mercado Pago / Tarjetas de Débito y Crédito</h3>
          <p class="text-stone-500">Monto total: <strong class="text-sm text-[#1E3B2B]">S/ ${total}</strong></p>
        </div>

        <div class="bg-stone-50 p-3.5 rounded-xl border border-stone-200 space-y-2 text-stone-600">
          <div class="flex items-center gap-2 text-xs font-semibold text-stone-800">
            <svg class="w-4 h-4 text-emerald-700" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            <span>Conexión Cifrada SSL con Certificación PCI-DSS</span>
          </div>
          <p class="text-[11px] leading-relaxed">
            Serás derivado al checkout seguro oficial de <strong>Mercado Pago</strong> para completar tu pago con tarjeta (Visa, Mastercard, Diners, American Express) o con saldo de cuenta.
          </p>
          <div class="flex items-center gap-2 pt-1">
            <span class="px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded text-[10px]">VISA</span>
            <span class="px-2 py-0.5 bg-red-100 text-red-800 font-bold rounded text-[10px]">MASTERCARD</span>
            <span class="px-2 py-0.5 bg-sky-100 text-sky-800 font-bold rounded text-[10px]">AMEX</span>
            <span class="px-2 py-0.5 bg-cyan-100 text-cyan-800 font-bold rounded text-[10px]">MERCADO PAGO</span>
          </div>
        </div>

        <div id="mp-button-container" class="pt-2">
          <button id="btn-iniciar-mercadopago" onclick="window.cart.initMercadoPagoCheckout(${total})" class="w-full bg-[#009EE3] hover:bg-[#0086c3] text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow transition flex items-center justify-center gap-2">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.11 1.87 1.34 0 1.94-.78 1.94-1.5 0-.96-.75-1.41-2.22-1.89-1.98-.65-3.08-1.56-3.08-3.16 0-1.63 1.25-2.88 2.89-3.26V5h2.67v1.89c1.47.33 2.65 1.35 2.78 3.11h-1.95c-.14-.97-.87-1.61-1.86-1.61-1.07 0-1.72.63-1.72 1.45 0 .83.65 1.25 2.05 1.73 2.13.73 3.25 1.63 3.25 3.32 0 1.77-1.32 3-2.91 3.2z"/></svg>
            Continuar a Pasarela Mercado Pago (S/ ${total})
          </button>
        </div>

        <button onclick="window.cart.openCheckoutModal('pay-options')" class="w-full text-stone-500 hover:text-stone-800 text-center text-xs py-2">
          ← Volver a elegir método de pago
        </button>
      </div>
    `;
  }

  async initMercadoPagoCheckout(total) {
    const btn = document.getElementById("btn-iniciar-mercadopago");
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<span class="inline-block animate-spin mr-2">⏳</span> Conectando con Mercado Pago...`;
    }

    try {
      const cfg = window.PAYMENT_CONFIG?.mercadopago || {};
      
      // Intentar crear la preferencia en el backend (/api/create-preference)
      if (cfg.preferenceEndpoint) {
        const response = await fetch(cfg.preferenceEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: this.items.map(i => ({
              id: i.id,
              name: i.name,
              price: i.price,
              quantity: i.quantity
            })),
            payer: this.currentCustomerData || {}
          })
        });

        if (response.ok) {
          const data = await response.json();
          if (data.init_point) {
            window.location.href = data.init_point;
            return;
          }
        }
      }

      // Fallback a enlace directo si existe
      if (cfg.directPaymentLink) {
        window.location.href = cfg.directPaymentLink;
        return;
      }

      alert("Mercado Pago requiere configurar tus credenciales en functions/api/create-preference.js o js/payment-config.js.");
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `Continuar a Pasarela Mercado Pago (S/ ${total})`;
      }
    } catch (err) {
      console.error("Error al iniciar Mercado Pago:", err);
      alert("Hubo un problema al conectar con la pasarela. Puedes optar por Yape / Transferencia o escribirnos por WhatsApp.");
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `Continuar a Pasarela Mercado Pago (S/ ${total})`;
      }
    }
  }
  processCardPayment(e) {
    e.preventDefault();
    const content = document.getElementById("checkout-modal-content");
    content.innerHTML = `
      <div class="text-center py-8 space-y-4">
        <div class="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto animate-bounce">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 class="text-xl font-bold text-[#1E3B2B]">¡Pago Procesado Exitosamente!</h3>
        <p class="text-xs text-stone-600 max-w-sm mx-auto">Tu transacción ha sido aprobada. Hemos enviado el comprobante a tu correo y el equipo de BioNativa LAB ya está preparando tu despacho.</p>
        <div class="pt-4">
          <button onclick="window.cart.clearCart(); window.cart.closeCheckoutModal(); window.location.href='/';" class="bg-[#1E3B2B] text-white font-bold px-6 py-2.5 rounded-full text-xs hover:bg-[#284f3a] transition">
            Volver al Inicio
          </button>
        </div>
      </div>
    `;
  }
}

// Instanciar carrito global
window.cart = new BionativaCart();
