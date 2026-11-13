# Phase 1 — Reference analysis: euroriente.com

Analysed 13 Nov 2026 by crawling the live site with a headless browser (home, tour search
and results, tour detail, activities, transfers, About, footer and legal pages). Euroriente is
used only as a reference for **structure, functionality and business logic**. No branding,
text or images are reused.

## 1. Sitemap and hierarchy

```
Home  (/)
├── Tours                     /packages/tours/
│   ├── Search results        /en/tours/{country}/departing-on-{yyyy-mm}/{zoneId}
│   └── Tour detail           /packages/details.aspx?packageID=…
├── Services (= activities)   /services/
├── Transfers                 /transfers/
├── Our catalog               catalog.euroriente.com (external flip-book)
├── Favourites (heart icon)   /users/favorites/
├── Currency selector         € Euros / USD
├── Login / New user / New agency (B2B)   /users/…
├── About Us                  /content/content.aspx?id=35
├── Contact                   /content/content.aspx?id=39
└── Legal: Privacy, Terms & Conditions, Cookie policy,
          Candidate privacy policy, Data-subject access request form
```

Main navigation: **Tours · Services · Transfers · Our catalog**, plus favourites, currency and
login. About, Contact and legal pages live in the footer.

## 2. Page-by-page structure

### Home
1. Hero image with tagline ("Timeless Beauty, Endless Stories").
2. **Multi-searcher with three tabs**: Tours / Services / Transfers.
   - Tours: *Cities to visit* (grouped by country: Turkey, Egypt, Greece, Jordan, Dubai …),
     *Departures in* (month list, about 18 months ahead), *Duration* (flexible, <4, 5–15, >15,
     or exact days). "More options" adds *Tour type*, *Category*, *Price range*
     (≤200, 200–500, 500–1000, 1000–5000, >5000) and *Name / package code*.
3. **Offers — "Special promotions for you"**: 3 package cards (image, name, days/nights,
   "Per person | FROM 880 USD").
4. **Why book with us?** — four trust statements (range of tours, 24/7 assistance, B2B
   instant confirmation, 350+ guaranteed departures, three hotel categories).
5. **Newsletter** — e-mail plus mandatory privacy-policy checkbox, "Join".
6. **Footer** — About links, contact information (address, e-mail, phone), **Check booking**
   (booking ID + e-mail), accepted payment logos, social links (LinkedIn, Instagram).
7. **Cookie banner** with granular categories (required, performance, functional, targeting,
   social) — "Configuration" / "Accept all".

### Tours (landing and results)
- Same search bar, then offers, why-book and newsletter.
- **Results page**: breadcrumb (Home › Tours search › Tours list), title "Tours in Turkey",
  count ("30 Tours"), summary of the search with "Change search".
- **Filter sidebar**: package name, price range (min/max slider), duration (checkbox list with
  counts, "See more").
- **Result row**: name + duration, "Visiting: 3nt Istanbul – 1nt Ankara – 2nt Cappadocia …",
  "Price from 720 USD", validity period, **Book** and **Info** buttons. Sorted by price.

### Tour detail
- Title, duration (days/nights), photo gallery (1/3, 2/3 …).
- **Configure your trip**: two-month availability calendar (only operating days clickable),
  "*Target price, per person in double room".
- Rooms (1–8), per room: adults (12+), children (0–11), room type (double / twin) → **Search**
  (live pricing).
- **Package description**: guaranteed departures ("Daily except Thursdays"), **day-by-day
  itinerary** with meal codes (B, D), **planned hotels per city and per category** (A/B/C),
  **included services**, **services not included**, notes (airport supplements, itinerary
  order may change).

### Services (activities)
- Searcher: destination, from/to dates, passengers, **activity type** (private / regular),
  classification. Then offers, why-book, newsletter.

### Transfers
- Searcher: **one way / round trip**, origin, destination, passengers, departure date, **hour
  (15-minute steps)**, return date, **transfer type** (private / regular).

### About Us
- Company story (founded 2017, Istanbul), then sections: Services, Itineraries & Routes, Tour
  Guides, Transportation (modern fleet, transfers included).

### Contact and legal
- Office address, e-mail, phone. Separate content pages for each policy.

## 3. Business logic worth adopting
| Feature | Euroriente | WellXplore approach |
|---|---|---|
| Unified search (tours / activities / transfers) | Yes, tabs | Yes, tabs on the homepage |
| Filters: destination, month, duration, type, category, price, name | Yes | Yes, plus travellers and exact date |
| "From" price per person, double occupancy | Yes | Yes, or "Price on request" when empty |
| Guaranteed departure pattern (e.g. daily except Thu) | Yes | Yes: date range + weekdays per tour |
| Day-by-day itinerary with meals | Yes | Yes |
| Hotels per city and category | Yes | Yes |
| Included / not included / notes | Yes | Yes |
| Live online booking and payment | Yes (B2B system) | **Inquiry-based** until a booking API or payment provider is connected |
| Transfers one-way / round trip, time slots | Yes | Yes, plus vehicle classes with passenger and luggage capacity, flight number |
| Catalogue | External flip-book | Built-in printable catalogue + B2B catalogue request |
| B2B agency registration | Yes | Partner inquiry on Contact and Catalogue pages |
| Check booking | Yes | Not offered: no booking system exists yet |
| Newsletter with privacy consent | Yes | Yes |
| Granular cookie consent | Yes | Yes |
| Multilingual | Partly: some Spanish strings leak into English pages | Complete translation system (EN / 中文 / DE / TR) |

## 4. Weaknesses to improve on
- Dated, template-like visual design; small images; uppercase-heavy text.
- Destinations have no pages of their own, only filter values.
- Untranslated strings visible ("30 resultados encontrados not found in i18n").
- Query-string URLs (`details.aspx?packageID=__313536`), which are poor for SEO.
- No WhatsApp contact, despite promising WhatsApp assistance.
