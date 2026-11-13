# WellXplore — International Travel & Tourism Website

Multilingual website for **WellXplore**, an Istanbul-based incoming tour operator.
Built with [Astro](https://astro.build) and exported as a fast static site (plain HTML, CSS
and a little JavaScript) that any web host can serve.

- **Languages:** English (default), Chinese (Simplified), German and Turkish, each under its own
  URL prefix: `/en/`, `/zh/`, `/de/`, `/tr/`. The root `/` sends visitors to their browser
  language (or the one they chose before).
- **Pages:** Home, Tours (+ a page per tour), Destinations (+ a page per destination),
  Experiences (+ a page per experience), Transfers, Transfer booking, Special Offers,
  Catalogue, About, Contact, Booking inquiry, Privacy, Terms, Cookies, Photo credits, 404.
- **Booking is inquiry-based.** Nothing on the site takes payment or claims a booking is
  confirmed. See [Forms](#forms) to connect a form service.

Research and planning notes: [`docs/01-research-euroriente.md`](docs/01-research-euroriente.md),
[`docs/02-plan.md`](docs/02-plan.md).

## Run locally

Requires Node.js 18.20+ (20 or 22 recommended).

```bash
npm install
npm run dev        # http://localhost:4321 with live reload
npm run build      # production site in dist/
npm run preview    # serve dist/ locally
```

Deploy by uploading the `dist/` folder, or connect the repository to Netlify, Vercel,
Cloudflare Pages or GitHub Pages with build command `npm run build` and output folder `dist`.

## Before going live — checklist

| What | Where |
|---|---|
| Real phone, WhatsApp number, e-mail, address, opening hours | `src/config/site.ts` |
| Domain name (canonical URLs, hreflang, sitemap) | `src/config/site.ts` → `url`, `astro.config.mjs` → `site`, `public/robots.txt`, `src/pages/index.astro` |
| TÜRSAB licence number (shown in footer when set) | `src/config/site.ts` → `licence` |
| Social media links / WeChat ID | `src/config/site.ts` → `social` |
| Form endpoint (otherwise WhatsApp/e-mail fallback) | `src/config/site.ts` → `forms` |
| **Prices, departure dates and offers** (currently placeholders) | `src/data/tours.ts`, `src/data/activities.ts`, `src/data/transfers.ts` |
| **Testimonials** (currently samples — replace with real reviews or remove) | `src/data/content.ts` |
| Legal texts (templates — have them reviewed for KVKK/GDPR) | `src/i18n/pages/legal.ts` |
| Hotel names per tour | `hotels` in `src/data/tours.ts` |

## Project structure

```
src/
  config/site.ts           Company details, WhatsApp number, form endpoints, currency
  data/
    tours.ts               Tours: itinerary, inclusions, hotels, departures, prices, offers
    destinations.ts        Destinations and regions
    activities.ts          Experiences and their categories
    transfers.ts           Vehicles, routes and prices, location suggestions
    phrases.ts             Shared "included / not included / important" phrases
    content.ts             Testimonials and travel inspiration
    images.ts              Photo registry; credits in image-credits.json
  i18n/
    ui/en.ts zh.ts de.ts tr.ts   All interface text (menus, buttons, forms, messages)
    pages/about.ts legal.ts      Long-form page content
    index.ts                     Helpers: translations, localised URLs, prices, dates
  components/              Header, Footer, cards, forms, search panel, icons …
  layouts/BaseLayout.astro SEO tags, header/footer, cookie banner, WhatsApp button
  pages/[lang]/…           One template per page type, generated for every language
  scripts/                 Browser code: menus, slider, filters, forms, transfer form
  styles/global.css        Design system (colours, type, components, responsive rules)
  assets/images/           Photos (Astro creates optimised WebP sizes at build time)
scripts/                   Quality checks (see below)
```

## Adding or editing content

Every text field holds all four languages:

```ts
title: { en: 'Istanbul Highlights', zh: '伊斯坦布尔精华游', de: 'Höhepunkte Istanbuls', tr: 'İstanbul’un Öne Çıkanları' },
```

- **New tour:** copy an object in `src/data/tours.ts` and change it. Its card, detail page
  (in four languages), search/filter entry, catalogue entry and sitemap entry are created
  automatically. Use phrase keys from `phrases.ts` for common inclusions, or write
  `{ en, zh, de, tr }` inline.
- **New destination or experience:** same idea in `destinations.ts` / `activities.ts`.
- **Departures:** `departures: { from: '2027-03-01', to: '2027-11-30', weekdays: [1, 6] }`
  (1 = Monday … 7 = Sunday; leave out `weekdays` for daily; `null` = on request).
  The tour search, the date filter and the "check a date" tool use this.
- **Price on request:** set `priceFrom: null`.
- **Offer:** add `offer: { discount: 15, validUntil: '2027-03-15' }` — the item appears on the
  Offers page and gets a badge; expired offers disappear at the next build.
- **Photos:** put a `.jpg` in `src/assets/images/`, reference it by file name without extension
  (e.g. `image: 'pamukkale'`), and add its credit to `src/data/image-credits.json`.
- **Interface text:** edit `src/i18n/ui/*.ts`. The English file defines the keys; the other
  languages must have the same keys (the type checker and `npm run check:i18n` enforce this).

### Adding a language

1. Add it to `src/i18n/languages.ts`.
2. Copy `src/i18n/ui/en.ts` to the new language file and translate; register it in `src/i18n/index.ts`.
3. Add the new key to every `{ en, zh, de, tr }` object (run `npm run check:i18n` to find missing ones).

## Forms

Inquiry, transfer, contact and newsletter forms validate in the browser (required fields,
e-mail and phone format, future dates, return after pickup, vehicle capacity, consent) with
messages in the visitor's language.

- **With an endpoint** (`forms.endpoint` in `site.ts`): the form is sent as JSON
  (works with Formspree, Getform, Basin, a Netlify Function or your own API) and the visitor
  sees a confirmation that the request was received.
- **Without an endpoint:** the visitor sees a summary of their inquiry and sends it to you by
  **WhatsApp** or **e-mail** with one click, with all details filled in.

In both cases the site states clearly that this is an inquiry, not a confirmed booking.

## Quality checks

```bash
npm run check:i18n   # every text exists in all 4 languages; data cross-references are valid
npm test             # check:i18n + build + check every internal link and image in dist/
npm run preview &    # then, with Playwright installed:
npm run test:e2e     # browser tests: navigation, language switch, search, filters, forms,
                     # mobile menu and no horizontal scrolling on every page at 3 screen sizes
```

## Photos

Photos come from Unsplash (Unsplash License) and Wikimedia Commons (Creative Commons
licences). Credits are listed on the `/credits/` page as the CC licences require. Replace them
with your own photography whenever you can.
