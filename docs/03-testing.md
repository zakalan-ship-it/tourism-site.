# Phase 5 — Testing report

Run on 13 Nov 2026 against the production build (`npm run build` + `npm run preview`).

| Check | Command | Result |
|---|---|---|
| Translations complete (UI strings + 431 content fields × 4 languages, placeholders match, data cross-references valid) | `npm run check:i18n` | ✅ pass |
| TypeScript / Astro type check (58 files) | `npm run check:types` | ✅ 0 errors, 0 warnings |
| Build | `npm run build` | ✅ 182 pages |
| Internal links, images and anchors in every built page (22,308 references) | `npm run check:links` | ✅ no broken links |
| Browser tests (Chromium) | `npm run test:e2e` | ✅ 24 / 24 |

## Browser tests

- **Pages & languages:** home page in EN / 中文 / DE / TR renders with the correct `lang` attribute, one `h1` and no
  JavaScript errors; the language switcher keeps the visitor on the same page (tour detail EN → DE → 中文, including
  form buttons); `/` redirects to the browser language.
- **Navigation:** desktop dropdown menus (keyboard state, Escape to close) and the mobile menu.
- **Search & filters:** home search → filtered tour list with pre-filled filters; tour filters by type, duration,
  departure date (checks weekday departure rules), max price, empty state, reset, sorting, and URL state;
  experience category chips and deep links; destination region chips.
- **Forms:** inquiry form validation (required fields, e-mail, phone, past dates, consent, focus on first error),
  ready-to-send WhatsApp / e-mail message containing the details; product pre-selection from URL; transfer form
  (route preset fills pickup/destination, price estimate, round trip doubles it and requires return date/time,
  vehicle capacity check); home transfer search pre-fills the booking form; newsletter validation and confirmation;
  B2B catalogue link pre-selects the contact subject; tour "check a date" tool.
- **Other:** cookie banner shows once and remembers the choice; hero slider controls.
- **Responsive:** every page (181) checked for horizontal scrolling at 375 px (phone), 820 px (tablet) and 1440 px
  (desktop) — none, and no JavaScript errors.

## Issues found and fixed during testing

- Mobile menu was clipped to the header height because `backdrop-filter` makes the header the containing block of
  fixed elements → filter removed while the menu is open.
- Off-screen mobile menu (`translateX(100%)`) and a screen-reader-only table label caused horizontal scrolling on
  phones → menu now fades in place; table wrapper is `position: relative`.
- Clearing a validation error on blur shifted the layout under the pointer, so the next click could miss a
  checkbox → errors now clear while typing.
- URL pre-fill did not override default values (passengers, subject) → URL values now take priority.
- Colour contrast below WCAG AA for gold text, gold/WhatsApp buttons, secondary grey text and offer badges →
  darker text-gold (`--gold-text`), button and badge colours (all ≥ 4.5 : 1 now).

## Not covered (needs real services)

- Delivery of form submissions to an inbox — depends on the form endpoint you configure in `src/config/site.ts`.
- Real booking/payment flows — intentionally not implemented; the site is inquiry-based.
