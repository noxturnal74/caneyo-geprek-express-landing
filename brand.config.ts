export const brandConfig = {
  "slug": "caneyo-geprek-express",
  "repo": "caneyo-geprek-express-landing",
  "brandName": "Caneyo Geprek Express",
  "monogram": "CG",
  "category": "Fried chicken and geprek restaurant",
  "location": "Jatimulyo fast-service route",
  "address": "Jl. Bunga Camalia No.1, Jatimulyo, Malang",
  "contact": "0817-0111-440",
  "publicLink": "https://linktr.ee/CaneyoGeprekExpress",
  "instagram": "https://www.instagram.com/caneyogeprek",
  "theme": {
    "bg": "#220a04",
    "accent": "#ff4d00",
    "accent2": "#ffe66d",
    "paper": "#fff4df"
  },
  "nav": [
    "Menu",
    "Best Seller",
    "Promo",
    "Order"
  ],
  "hero": {
    "eyebrow": "Geprek next level and quick delivery",
    "title": "A spicy order page built for hungry clicks.",
    "body": "Fast-service food landing page for outlet routing, delivery buttons, big orders, and campaign promos. Everything is designed to move visitors from craving to order.",
    "cta": "Order Geprek"
  },
  "sections": [
    {
      "id": "signature",
      "kicker": "Signature Menu",
      "title": "Spicy chicken offers that look fast and appetizing.",
      "items": [
        "Geprek signature",
        "Sauce levels",
        "Rice bowl options"
      ]
    },
    {
      "id": "best-seller",
      "kicker": "Best Seller",
      "title": "Turn best sellers into ad-ready product blocks.",
      "items": [
        "Single meal",
        "Duo bundle",
        "Family pack"
      ]
    },
    {
      "id": "order-options",
      "kicker": "Order Options",
      "title": "WhatsApp and delivery channels are treated as primary conversion buttons.",
      "items": [
        "Delivery apps",
        "Big order",
        "Outlet pickup"
      ]
    }
  ],
  "layout": "fast-food"
} as const;

export type BrandConfig = typeof brandConfig;
