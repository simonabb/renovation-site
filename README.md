# Coco Construction

A responsive, single-page website for renovation, plumbing, LED lighting, and property maintenance services across Scotland.

## Technology

- React 18 and TypeScript
- Vite
- Tailwind CSS 3
- British English (`en-GB`) and Romanian (`ro-RO`) interface and content

The English locale is selected by default. Visitors can switch languages from the header; their choice is saved in the browser.

## Run locally

```bash
npm install
npm run dev       # start the development server
npm run build     # type-check and build into dist/
npm run preview   # serve the production build locally
```

The TypeScript and production builds target modern browsers using `ESNext`.

## Website features

- Navigation, hero, services, LED lighting, approach, work gallery, TikTok videos, testimonials, service areas, FAQs, quote form, and footer.
- Locale-specific English and Romanian hero banners with quote and services calls to action.
- Localized navigation, service information, form options, and interface labels.
- A scrollable gallery carousel and responsive layouts.
- TikTok's embedded player for each video.
- A quote form that prepares the request in the visitor's email app or WhatsApp.

## Content and configuration

| Content | Location |
| --- | --- |
| Company name, contact email, TikTok profile, and video URLs | `src/data/content.ts` |
| Localized page content | `src/data/content.ts` |
| Interface translations and language preference | `src/i18n.tsx` |
| Page sections and interactions | `src/components/` |
| Gallery project photos | `src/assets/gallery-*.jpg` |
| Theme colours and global styles | `src/index.css` and `tailwind.config.ts` |
| Page metadata and structured data | `index.html` |

### TikTok videos

Add full TikTok post URLs to `VIDEO_URLS` in `src/data/content.ts`, using URLs with a numeric `/video/{id}` path. The video cards extract each post ID and load TikTok's embedded player. The `TIKTOK_URL` value controls the profile link below the players.

The embeds are hosted by TikTok, so display and playback depend on TikTok and the availability and embed settings of each post.

### Quote requests

The quote form can prepare a request in the visitor's email app using `EMAIL`, or open WhatsApp with a prefilled message using `WHATSAPP_NUMBER` in `src/data/content.ts`. The visitor reviews and sends the message in their selected app; the site does not submit form data to a server.

## GitHub Pages deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and deploys the `dist/` output when changes are pushed to `main`. In the repository's **Settings → Pages**, set the publishing source to **GitHub Actions**.

Vite is configured with the project-site base path `/renovation-site/` in `vite.config.ts`, so built assets load from the GitHub Pages project URL.

## Before publishing

- Set the canonical URL in `index.html` and add the sitemap URL to `public/robots.txt` when the production domain is known.
- Confirm the business contact and location details in the page content and structured data in `index.html`.
