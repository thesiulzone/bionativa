/**
 * BIONATIVA LAB - Interactividad Global
 * Menú responsive, Acordeón de FAQs para AEO, Filtros y Utilidades
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initFaqAccordion();
  initSearchRedirect();
});

function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("mobile-menu-close");

  if (!toggleBtn || !menu) return;

  const toggle = (show) => {
    if (show) {
      menu.classList.remove("hidden");
      setTimeout(() => menu.classList.remove("opacity-0", "-translate-y-4"), 10);
      document.body.style.overflow = "hidden";
    } else {
      menu.classList.add("opacity-0", "-translate-y-4");
      setTimeout(() => menu.classList.add("hidden"), 200);
      document.body.style.overflow = "";
    }
  };

  toggleBtn.addEventListener("click", () => toggle(true));
  if (closeBtn) closeBtn.addEventListener("click", () => toggle(false));

  // Cerrar al hacer clic en un enlace interno
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => toggle(false));
  });
}

function initFaqAccordion() {
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".faq-trigger");
    if (!trigger) return;

    const content = trigger.nextElementSibling;
    const icon = trigger.querySelector(".faq-icon");

    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      if (icon) icon.classList.add("rotate-180");
    } else {
      content.classList.add("hidden");
      if (icon) icon.classList.remove("rotate-180");
    }
  });
}

function initSearchRedirect() {
  const searchForms = document.querySelectorAll(".site-search-form");
  searchForms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[name='q']");
      if (input && input.value.trim()) {
        window.location.href = `tienda.html?q=${encodeURIComponent(input.value.trim())}`;
      }
    });
  });
}
