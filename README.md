# Renovation, Remodeling & Property Maintenance: presentation website

React 18 + TypeScript + Tailwind CSS 3, built with Vite.

TypeScript and production builds target the latest ECMAScript features (`ESNext`). The built site is intended for modern browsers that support current JavaScript syntax and APIs.

## Run it

```bash
npm install
npm run dev        # local development
npm run build      # type-check and build into dist/
npm run preview    # preview the production build
```

## Languages

The site supports British English (`en-GB`) and Romanian (`ro-RO`). British English is the default. Use the flag dropdown in the header to select a language; the selection is saved in the browser and restored on the next visit. Visible page content, navigation, form labels and email, accessibility labels, page title and description update with the selected language.

## Where things are

| What | Where |
| --- | --- |
| Shared interface translations and language state | `src/i18n.tsx` |
| Localized services, FAQs, testimonials, areas, and form options | `src/data/content.ts` |
| Page sections | `src/components/*.tsx` |
| Scroll animation helper | `src/lib/Reveal.tsx` |
| Placeholder illustrations | `src/lib/Scene.tsx` |
| Colour palette (navy, ivory, stone grey, sage), light and dark | `src/index.css` and `tailwind.config.ts` |
| Default SEO tags and structured data | `index.html` |

## Replace the sample content

- **Gallery photos:** put photos in `public/gallery/` and replace `<Scene ... />` in `src/components/Gallery.tsx` with an `<img>`.
- **TikTok videos:** set `TIKTOK_URL` in `src/data/content.ts`, or give each video its own URL in `src/components/Videos.tsx`. The cards link out to TikTok.
- **Testimonials:** the ones in `content.ts` are samples with placeholder names. Replace them with real feedback.
- **Company name, phone and address:** `COMPANY` in `content.ts`, the footer, and the JSON-LD block in `index.html`.

## Quote form

The form opens the visitor's email app addressed to `EMAIL` in `content.ts`. There is no server. To receive submissions directly, post the form to a form service or your own API in `src/components/Contact.tsx`.

## Before going live

- Add a canonical URL in `index.html` and the sitemap line in `public/robots.txt`.
- Add the address, phone and opening details to the structured data in `index.html`.
- Claim a Google Business Profile.
