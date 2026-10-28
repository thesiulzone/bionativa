// Configuración centralizada de pasarelas de pago para BioNativa LAB
window.PAYMENT_CONFIG = {
  mercadopago: {
    // Public Key de producción de Mercado Pago
    publicKey: "APP_USR-a0973c88-ad4f-4519-8e0a-20476edbefdd",
    
    // Endpoint seguro en Cloudflare Workers / Pages Functions
    preferenceEndpoint: "/api/create-preference",
    
    // Fallback directo opcional
    directPaymentLink: ""
  }
};

