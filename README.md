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

- Navigation, hero, services, LED lighting, approach, work gallery, TikTok videos, testimonials, FAQs, quote form, and footer.
- Locale-specific English and Romanian hero banners with quote and services calls to action.
- Localized navigation, service information, form options, and interface labels.
- A scrollable gallery carousel and responsive layouts.
- TikTok's embedded player for each video.
- A quote form that prepares the request in the visitor's email app or WhatsApp.

## Content and configuration

| Content | Location |
| --- | --- |
| Company name, contact email, TikTok profile, and video URLs | `src/data/content.ts` |
| Localized navigation, services, FAQs, gallery list, reviews, and form options | `src/data/content.ts` |
| Interface translations, locale state, and document metadata updates | `src/i18n.tsx` |
| Page sections and interactions | `src/components/` |
| Gallery project photos | `src/assets/gallery/` |
| Theme colours and global styles | `src/index.css` and `tailwind.config.ts` |
| Page metadata and structured data | `index.html` |

### Code organization

- `src/main.tsx` mounts the React application and provides the locale context.
- `src/App.tsx` defines the order of the single-page sections.
- `src/components/` contains the page sections; components that display localized content read it with `useLocale()`.
- `src/lib/Reveal.tsx` contains a reusable scroll-triggered reveal wrapper.
- `src/data/content.ts` stores editable site content and imports gallery photos at build time.
- `src/i18n.tsx` stores translated interface labels and applies the selected language to the document metadata.

### Gallery photos

Put `.jpg` photos in `src/assets/gallery/` and name them `project-N.jpg`, replacing `N` with a number (for example, `project-18.jpg`). Vite discovers these files during the build, and the gallery sorts them by that number. No manual import or list update is needed.

### Adding a language

Add the locale identifier to the `Locale` type in `src/i18n.tsx`, then provide matching message and localized-content objects in that file and `src/data/content.ts`. Add the locale to the language selector in `src/components/Header.tsx`. Keep the translation object shapes consistent so every section and form has the labels it needs.

### TikTok videos

Add full TikTok post URLs to `VIDEO_URLS` in `src/data/content.ts`, using URLs with a numeric `/video/{id}` path. The video cards extract each post ID and load TikTok's embedded player. The `TIKTOK_URL` value controls the profile link below the players.

The embeds are hosted by TikTok, so display and playback depend on TikTok and the availability and embed settings of each post.

### Quote requests

The quote form can prepare a request in the visitor's email app using `EMAIL`, or open WhatsApp with a prefilled message using `WHATSAPP_NUMBER` in `src/data/content.ts`. The visitor reviews and sends the message in their selected app; the site does not submit form data to a server.

## GitHub Pages deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and deploys the `dist/` output when changes are pushed to `main`. In the repository's **Settings → Pages**, set the publishing source to **GitHub Actions**.

The custom domain is `cocorenovations.co.uk`. Configure it in the repository's **Settings → Pages** and point the domain's DNS records to GitHub Pages. The `public/CNAME` file preserves the custom domain across deployments. Vite uses the root path (`/`) so assets and pages resolve correctly on the custom domain.

## Before publishing

- Confirm the business contact and location details in the page content and structured data in `index.html`.
