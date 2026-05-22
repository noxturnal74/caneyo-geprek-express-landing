export const brandConfig = {
  "slug": "caneyo-geprek-express",
  "repo": "caneyo-geprek-express-landing",
  "brandName": "Caneyo Geprek Express",
  "monogram": "CG",
  "layout": "geprek",
  "category": "Fried chicken and geprek restaurant",
  "address": "Jl. Bunga Camalia No.1, Jatimulyo, Malang",
  "contact": "0817-0111-440",
  "hours": "Daily 10:00-22:00, delivery by outlet availability",
  "publicLink": "https://linktr.ee/CaneyoGeprekExpress",
  "instagram": "https://www.instagram.com/caneyogeprek",
  "theme": {
    "bg": "#210703",
    "ink": "#fff4df",
    "muted": "#ffcf9b",
    "accent": "#ff4d00",
    "accent2": "#ffe66d",
    "panel": "#381006"
  },
  "dna": {
    "visual": "Mobile-first ordering interface with spicy-level selector, deal tiles, and delivery-channel routing.",
    "business": "Move hungry ad traffic to fast WhatsApp or delivery-app ordering with branch clarity.",
    "story": "Visitor picks spicy level, chooses combo, selects outlet/delivery route, then orders.",
    "emotion": "Immediate, spicy, hungry, high-energy.",
    "type": "Bold condensed food display with highly legible mobile UI.",
    "motion": "Punchy tap feedback, active spice states, sticky order rail.",
    "layout": "Food ordering app page rather than restaurant brochure.",
    "conversion": "Primary route is order now; secondary route is big order reservation.",
    "photo": "Crispy chicken close-up, sauce pour, rice steam, outlet pickup, delivery handoff.",
    "unique": "It feels like a quick-order surface made for ads."
  },
  "metrics": [
    "4.4 public rating reference",
    "Multiple Malang outlets",
    "Delivery app paths",
    "Big order reservation"
  ],
  "packages": [
    {
      "name": "Single Geprek",
      "price": "from Rp18k",
      "note": "rice and chicken"
    },
    {
      "name": "Duo Combo",
      "price": "from Rp39k",
      "note": "two meals"
    },
    {
      "name": "Family Pack",
      "price": "from Rp89k",
      "note": "group order"
    }
  ],
  "operations": [
    "Spicy selector",
    "Delivery app routing",
    "Branch selector",
    "Promo banner",
    "Big order flow"
  ],
  "workflow": [
    "Choose spicy level",
    "Select combo",
    "Pick outlet",
    "Send order to WhatsApp",
    "Track through chosen channel"
  ],
  "proof": [
    "RestaurantGuru lists fried chicken, spicy chicken, delivery, attractive prices, and 4.4 Google rating.",
    "Public profile routes to menu, WhatsApp, and delivery apps.",
    "Branch source supports multi-outlet routing."
  ],
  "team": [
    "Outlet cashier",
    "Kitchen crew",
    "Delivery admin"
  ],
  "testimonials": [
    "Level pedasnya jelas, gampang order cepat.",
    "Combo family bikin order rame-rame lebih simpel."
  ],
  "faqs": [
    "Can I choose spice level?",
    "Which delivery apps are available?",
    "Can I place a big order?"
  ],
  "policies": [
    "Delivery follows app availability.",
    "Big orders need admin confirmation.",
    "Promo may differ by outlet."
  ],
  "sourceLinks": [
    {
      "label": "Caneyo Linktree",
      "url": "https://linktr.ee/CaneyoGeprekExpress"
    },
    {
      "label": "Caneyo RestaurantGuru",
      "url": "https://restaurantguru.com/Caneyo-Geprek-Express-Malang"
    },
    {
      "label": "Caneyo branch list",
      "url": "https://www.carikulinerindonesia.com/cabang/caneyo-geprek-express/"
    }
  ]
} as const;

export type BrandConfig = typeof brandConfig;
