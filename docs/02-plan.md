# Phase 2 — WellXplore plan: sitemap, design system, architecture

## 1. Sitemap

Every page exists in four languages under a language prefix: `/en/`, `/zh/`, `/de/`, `/tr/`.
The root `/` sends visitors to their browser language, falling back to English.

```
/{lang}/                                   Home
/{lang}/tours/                             Tours: listing + search & filters
/{lang}/tours/{slug}/                      Tour details (one per tour)
/{lang}/destinations/                      Destinations: grouped by region
/{lang}/destinations/{slug}/               Destination details (one per destination)
/{lang}/activities/                        Activities & Experiences: category filter
/{lang}/activities/{slug}/                 Activity details (one per activity)
/{lang}/transfers/                         Transfers: services, fleet, routes & prices
/{lang}/transfers/book/                    Transfer booking (inquiry form)
/{lang}/offers/                            Special Offers
/{lang}/catalogue/                         Our Catalogue: printable, B2B request
/{lang}/about/                             About Us
/{lang}/contact/                           Contact Us
/{lang}/inquiry/                           Booking inquiry (general / pre-filled from any product)
/{lang}/privacy/  /{lang}/terms/  /{lang}/cookies/      Legal
/{lang}/credits/                           Photo credits (required by image licences)
```

### Main navigation (with dropdowns)
- **Tours** ▾ All tours · Multi-day tours · Day tours · Private tours · Special offers
- **Destinations** ▾ Istanbul · Cappadocia · Antalya · Pamukkale · Ephesus · Izmir · Bursa ·
  Gallipoli · Troy · All destinations
- **Experiences** ▾ the 9 activity categories
- **Transfers** ▾ Airport transfers · Private & intercity · Book a transfer
- **Offers**
- **About** ▾ About us · Our catalogue · Contact
- Right side: language switcher (EN / 中文 / DE / TR), WhatsApp, **Plan my trip** button.

## 2. Homepage design direction — "Modern Ottoman Editorial"

The feel of a high-end travel magazine: generous white space, large photography,
serif headlines and restrained colour. The identity draws on Istanbul itself, without
copying any existing travel template.

| Token | Value | Use |
|---|---|---|
| Ink (Bosphorus night) | `#0F1C24` | Text, dark sections, footer |
| Ivory | `#F7F3EC` | Page background |
| Sand | `#EDE5D8` | Alternate section background |
| Iznik teal | `#1D6F6B` | Primary brand colour, links, buttons |
| Gold | `#B98B45` | Fine rules, labels, star icons, accents |
| Terracotta | `#C0583A` | Offers and discount badges only |

- **Type:** *Cormorant Garamond* (display serif, large and light) + *Manrope* (UI and body).
  Chinese uses the system CJK fonts (PingFang SC / Microsoft YaHei / Noto Sans SC), so no
  large font download.
- **Signature motifs:** an eight-point Iznik star as the logo mark and section ornament;
  **arch-topped image frames** (an Ottoman arch silhouette) for destination cards; thin gold
  rules with small uppercase labels ("— CAPPADOCIA").
- **Motion:** slow cross-fading hero slider with a subtle Ken Burns zoom, fade-up reveals on
  scroll, image zoom on card hover. All motion is disabled when the visitor's system asks for
  reduced motion.

### Homepage sections (in order)
1. **Hero slider**: full-screen photos (Istanbul, Cappadocia, Pamukkale, Antalya), serif
   headline, intro line, slide counter and controls.
2. **Search panel** overlapping the hero, with tabs **Tours / Experiences / Transfers**.
3. **Trust strip**: licensed incoming operator, 24/7 multilingual support, private and
   small-group options, best-value promise.
4. **Featured destinations**: arch-framed cards.
5. **Popular tours**: cards with duration, highlights and "from" price.
6. **Special offers**: terracotta-accented band with discount badges.
7. **Istanbul experiences**: editorial split layout.
8. **Cultural & historical tours**.
9. **Private tours**: dark section.
10. **Airport transfers**: vehicle classes and a quick form link.
11. **Why choose WellXplore**: four pillars with icons.
12. **Testimonials**.
13. **Travel inspiration**: seasonal ideas and journal cards.
14. **Newsletter** with privacy consent.
15. **Footer**: brand, contacts, navigation, legal, languages, social links.

## 3. Technical architecture

**Current project:** a single static HTML/CSS/JS page with no framework or dependencies.

**Decision:** move to **Astro** (static site generator, outputs plain HTML).
The current stack can't reasonably produce about 200 pages (17 page types × 4 languages) from
central data without a build step. Astro adds that build step but keeps the result a fast,
static site that any host can serve (Netlify, GitHub Pages, cPanel …), with no server needed.

```
src/
  config/site.ts          Company details, WhatsApp number, e-mail, form endpoint, currency
  i18n/                   ui strings per language (en, zh, de, tr) + helpers (t, localised URLs)
  data/                   destinations, tours, activities, transfers, offers, testimonials, articles
                          — every text field holds all four languages
  assets/images/          Source photos (Astro generates responsive WebP sizes at build time)
  components/             Header, Footer, LanguageSwitcher, SearchPanel, TourCard,
                          DestinationCard, ActivityCard, InquiryForm, TransferForm,
                          Newsletter, WhatsAppButton, PageHero, Breadcrumbs, CookieBanner …
  layouts/BaseLayout.astro  SEO tags (title, description, canonical, hreflang, Open Graph, JSON-LD)
  pages/[lang]/…          One template per page type, generated for every language and product
public/scripts/           Small vanilla-JS modules: filters, forms, slider, menu, cookies
```

### Adding a product
Add one object to `src/data/tours.ts` (or destinations / activities). Its listing card, detail
page, search entry and links are generated for all four languages automatically.

### Forms and booking (honest inquiry flow)
- Client-side validation with translated error messages.
- If `site.forms.endpoint` is set (e.g. Formspree, Netlify Forms or your own API), the inquiry
  is sent there.
- If not, the visitor sees their inquiry summarised and can send it via **WhatsApp** or
  **e-mail** with one click.
- The site always says it is a request, not a confirmed booking or payment.

### SEO and accessibility
Clean URLs, per-page titles and descriptions in every language, `hreflang` alternates, sitemap,
structured data (TravelAgency, TouristTrip, BreadcrumbList), semantic headings, labelled form
fields, keyboard-usable menus and filters, visible focus states and colour contrast checked
against WCAG AA.
