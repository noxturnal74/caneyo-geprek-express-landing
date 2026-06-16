# Batch Notes - Caneyo Geprek Express

## Production Direction

- Business type: Fast food / ayam geprek
- Layout DNA: geprek
- Primary conversion: Order Now
- Secondary conversion: Build Combo
- Customer journey: Caneyo needs fast order clarity: users should pick menu, heat, delivery mode, promo, then send a ready-to-process WhatsApp order.

## Image Strategy

This sandbox cannot reliably download and compress binary photos, so the site uses stable fixed remote image URLs from images.unsplash.com. No random image endpoint is used. Replace these with local compressed files in assets/photos/ when final brand-approved photography is available.

## WhatsApp Placeholder

The JavaScript contains BUSINESS_WHATSAPP as an intentionally empty replaceable variable. Add the confirmed business phone number in script.js if the official WhatsApp number is available. Until then, the generator uses a WhatsApp share URL with a brand-specific message.

## Validation

Run:

```powershell
npm run validate
npm run build
```
