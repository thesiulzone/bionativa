// Configuración centralizada de pasarelas de pago para BioNativa LAB
window.PAYMENT_CONFIG = {
  mercadopago: {
    // Public Key de producción de Mercado Pago
    publicKey: "APP_USR-a0973c88-ad4f-4519-8e0a-20476edbefdd",
    
    // Endpoint seguro en Cloudflare Workers / Pages Functions
    preferenceEndpoint: "/api/create-preference",
    
    // Fallback directo opcional
    directPaymentLink: "",

    // Tarifa de Mercado Pago Perú para cobros online:
    // Comisión 3.99% + 18% IGV sobre comisión = 4.71%
    cardFeeEnabled: true,
    cardFeePercentage: 4.71,
    cardFeeLabel: "Comisión pasarela tarjeta (3.99% + IGV)"
  }
};


