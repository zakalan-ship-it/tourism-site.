// End-to-end checks in a real browser. Start `npm run preview` first (port 4321),
// or set BASE_URL. Run: npm run test:e2e
import { createRequire } from 'node:module';
// Uses the Playwright installed on this machine (npm i -D playwright && npx playwright install chromium).
const { chromium, devices } = createRequire(import.meta.url)('playwright');
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BASE = process.env.BASE_URL ?? 'http://localhost:4321';
const results = [];
const test = async (name, fn) => {
  try { await fn(); results.push([true, name]); console.log('  ✓', name); }
  catch (e) { results.push([false, name]); console.log('  ✗', name, '\n     ', String(e.message ?? e).split('\n')[0]); }
};
const assert = (cond, msg) => { if (!cond) throw new Error(msg); };

const browser = await chromium.launch();
const newPage = async (opts = {}) => {
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 }, ...opts });
  await ctx.addInitScript(() => { try { if (!sessionStorage.getItem('keep-consent')) localStorage.setItem('wx-consent', '{"analytics":false}'); } catch {} });
  const page = await ctx.newPage();
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && !/fonts\.(googleapis|gstatic)/.test(m.text()) && page.errors.push(m.text()));
  return page;
};
const visibleCards = (page) => page.locator('[data-filter-list] [data-item]:visible');

console.log('Pages & languages');
for (const lang of ['en', 'zh']) {
  await test(`home /${lang}/ renders with correct lang and no JS errors`, async () => {
    const page = await newPage();
    await page.goto(`${BASE}/${lang}/`, { waitUntil: 'networkidle' });
    const htmlLang = await page.getAttribute('html', 'lang');
    assert(htmlLang.startsWith(lang), `html lang=${htmlLang}`);
    assert((await page.locator('h1').count()) === 1, 'exactly one h1');
    assert(page.errors.length === 0, page.errors.join(' | '));
    await page.context().close();
  });
}

await test('language switcher keeps the current page', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/tours/grand-turkiye-11-days/`);
  await page.click('.lang-switch__btn');
  await page.click('#lang-menu a[hreflang="zh-CN"]');
  await page.waitForURL('**/zh/tours/grand-turkiye-11-days/');
  assert((await page.textContent('h1')).includes('土耳其'), 'Chinese h1');
  // Form labels and buttons are translated too
  assert((await page.textContent('#inquiry-form button[type="submit"]')).includes('发送'), 'Chinese submit button');
  await page.context().close();
});

await test('root URL redirects to the browser language', async () => {
  const page = await newPage({ locale: 'zh-CN' });
  await page.goto(`${BASE}/`);
  await page.waitForURL('**/zh/');
  await page.context().close();
});

console.log('Navigation');
await test('dropdown menu opens and links to destination page', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/`);
  const btn = page.locator('.main-nav .nav-link', { hasText: 'Destinations' });
  await btn.click();
  assert((await btn.getAttribute('aria-expanded')) === 'true', 'aria-expanded');
  await page.locator('.main-nav .dropdown a', { hasText: 'Cappadocia' }).first().click();
  await page.waitForURL('**/en/destinations/cappadocia/');
  assert((await page.textContent('h1')).trim() === 'Cappadocia', 'h1');
  await page.keyboard.press('Escape');
  await page.context().close();
});

await test('mobile menu opens and navigates', async () => {
  const page = await newPage({ ...devices['iPhone 13'] });
  await page.goto(`${BASE}/en/`);
  await page.click('[data-menu-toggle]');
  assert(await page.isVisible('#main-nav'), 'nav visible');
  await page.locator('#main-nav .nav-link', { hasText: 'Tours' }).click();
  await page.locator('#main-nav a', { hasText: 'All tours' }).click();
  await page.waitForURL('**/en/tours/');
  await page.context().close();
});

for (const dev of ['iPhone 13', 'iPad Mini']) {
  await test(`language button works on touch screens (${dev})`, async () => {
    const page = await newPage({ ...devices[dev] });
    await page.goto(`${BASE}/en/tours/istanbul-highlights-4-days/`);
    await page.tap('.lang-switch__btn');
    const link = page.locator('#lang-menu a[hreflang="zh-CN"]');
    assert(await link.isVisible(), 'language menu visible after tap');
    await link.tap();
    await page.waitForURL('**/zh/tours/istanbul-highlights-4-days/');
    assert((await page.getAttribute('html', 'lang')) === 'zh-CN', 'page in Chinese');
    await page.context().close();
  });
}

await test('language links inside the mobile menu', async () => {
  const page = await newPage({ ...devices['iPhone 13'] });
  await page.goto(`${BASE}/en/destinations/`);
  await page.tap('[data-menu-toggle]');
  await page.locator('.mobile-langs a[hreflang="zh-CN"]').tap();
  await page.waitForURL('**/zh/destinations/');
  await page.context().close();
});

console.log('China readiness');
await test('Chinese pages use WeChat, not WhatsApp, and the WeChat panel opens', async () => {
  const page = await newPage({ ...devices['iPhone 13'] });
  await page.goto(`${BASE}/zh/tours/istanbul-cappadocia-6-days/`);
  assert((await page.locator('a[href*="wa.me"]').count()) === 0, 'no WhatsApp links on /zh/');
  await page.tap('.wa-float');
  assert(await page.isVisible('[data-wechat-dialog]'), 'WeChat panel visible');
  await page.context().close();
});

await test('no requests to Google, Facebook or YouTube (blocked in mainland China)', async () => {
  const page = await newPage();
  const blocked = [];
  page.on('request', (r) => { if (/google|gstatic|facebook|youtube|doubleclick/.test(new URL(r.url()).hostname)) blocked.push(r.url()); });
  for (const p of ['/zh/', '/zh/tours/', '/zh/contact/', '/en/']) await page.goto(BASE + p, { waitUntil: 'networkidle' });
  assert(blocked.length === 0, blocked.slice(0, 3).join(', '));
  await page.context().close();
});

await test('English pages keep WhatsApp', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/`);
  assert((await page.locator('a.wa-float[href*="wa.me"]').count()) === 1, 'WhatsApp float on /en/');
  await page.context().close();
});

console.log('Search & filters');
await test('home search → filtered tour list', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/`);
  await page.selectOption('#s-dest', 'cappadocia');
  await page.click('#panel-tours button[type="submit"]');
  await page.waitForURL('**/en/tours/?destination=cappadocia*');
  const n = await visibleCards(page).count();
  assert(n > 0, 'some results');
  const dests = await visibleCards(page).evaluateAll((els) => els.map((e) => e.dataset.destination));
  assert(dests.every((d) => d.includes('cappadocia')), 'all cards visit Cappadocia');
  assert((await page.inputValue('#f-dest')) === 'cappadocia', 'filter pre-filled');
  await page.context().close();
});

await test('tour filters: type, duration, date, price, empty state, reset', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/tours/`);
  const total = await visibleCards(page).count();
  await page.selectOption('#f-type', 'private');
  assert((await visibleCards(page).count()) === 1, 'one private tour');
  await page.selectOption('#f-type', '');
  await page.selectOption('#f-dur', '10+');
  assert((await visibleCards(page).count()) === 1, 'one 10+ day tour');
  await page.selectOption('#f-dur', '');
  // 2027-06-07 is a Monday: Grand Türkiye (Mon/Sat) departs, Aegean (Sun only) does not
  await page.fill('#f-date', '2027-06-07');
  const slugs = await visibleCards(page).evaluateAll((els) => els.map((e) => e.querySelector('h2 a').getAttribute('href')));
  assert(slugs.some((s) => s.includes('grand-turkiye')), 'Grand Türkiye departs on Monday');
  assert(!slugs.some((s) => s.includes('aegean-history')), 'Aegean tour does not depart on Monday');
  await page.fill('#f-date', '');
  await page.locator('#f-price').evaluate((el) => { el.value = '500'; el.dispatchEvent(new Event('input', { bubbles: true })); });
  const prices = await visibleCards(page).evaluateAll((els) => els.map((e) => e.dataset.price));
  assert(prices.every((p) => p === '' || Number(p) <= 500), 'price filter');
  await page.selectOption('#f-dest', 'troy');
  await page.selectOption('#f-type', 'day');
  assert((await visibleCards(page).count()) === 0, 'no results');
  assert(await page.isVisible('[data-empty]'), 'empty state shown');
  assert(page.url().includes('destination=troy'), 'state in URL');
  await page.locator('[data-empty] [data-reset]').click();
  assert((await visibleCards(page).count()) === total, 'reset restores all');
  await page.selectOption('#sort', 'price-asc');
  const sorted = await visibleCards(page).evaluateAll((els) => els.map((e) => (e.dataset.price ? Number(e.dataset.price) : Infinity)));
  assert(sorted.every((v, i) => i === 0 || sorted[i - 1] <= v), 'sorted by price');
  await page.context().close();
});

await test('experience category chips filter the list', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/activities/`);
  await page.locator('.chip', { hasText: 'Bosphorus cruises' }).click();
  const cats = await visibleCards(page).evaluateAll((els) => els.map((e) => e.dataset.category));
  assert(cats.length === 2 && cats.every((c) => c === 'bosphorus'), `got ${cats}`);
  assert(page.url().includes('category=bosphorus'), 'URL updated');
  await page.goto(`${BASE}/en/activities/?category=balloon`);
  assert((await visibleCards(page).count()) === 1, 'deep link works');
  await page.context().close();
});

await test('destination region chips', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/destinations/`);
  await page.locator('.chip', { hasText: 'Aegean coast' }).click();
  assert((await visibleCards(page).count()) === 3, 'three Aegean destinations');
  await page.context().close();
});

console.log('Forms');
await test('inquiry form: validation errors, then ready-to-send state', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/tours/istanbul-highlights-4-days/`);
  const form = page.locator('#inquiry-form');
  await form.locator('button[type="submit"]').click();
  const invalid = await form.locator('[aria-invalid="true"]').count();
  assert(invalid >= 4, `expected errors, got ${invalid}`);
  assert(await page.evaluate(() => document.activeElement?.name === 'name'), 'focus moved to first invalid field');
  await form.locator('[name="name"]').fill('Test Traveller');
  await form.locator('[name="email"]').fill('not-an-email');
  await form.locator('[name="phone"]').fill('+44 7700 900123');
  await form.locator('[name="travelDate"]').fill('2020-01-01');
  await form.locator('button[type="submit"]').click();
  assert((await form.locator('#inquiry-form-email-error').textContent()).includes('valid e-mail'), 'email error');
  assert((await form.locator('#inquiry-form-date-error').textContent()).includes('future'), 'past date error');
  await form.locator('[name="email"]').fill('test@example.com');
  await form.locator('[name="travelDate"]').fill('2027-05-03');
  await form.locator('[name="consent"]').check();
  await form.locator('button[type="submit"]').click();
  await page.waitForSelector('.form-status--ready');
  const wa = await page.getAttribute('.form-status--ready a.btn--whatsapp', 'href');
  assert(wa.startsWith('https://wa.me/') && decodeURIComponent(wa).includes('Istanbul Highlights') && decodeURIComponent(wa).includes('test@example.com'), 'WhatsApp message prefilled');
  const mail = await page.getAttribute('.form-status--ready a[href^="mailto:"]', 'href');
  assert(decodeURIComponent(mail).includes('Test Traveller'), 'mailto prefilled');
  assert((await page.textContent('.form-status--ready')).includes('Nothing is booked'), 'honest status text');
  await page.context().close();
});

await test('general inquiry pre-selects product from URL', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/inquiry/?product=activity:istanbul-food-tour`);
  assert((await page.inputValue('#inquiry-form-product')) === 'activity:istanbul-food-tour', 'product preselected');
  await page.context().close();
});

await test('transfer form: route preset, estimate, round trip, capacity check', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/transfers/book/?route=ist-sultanahmet`);
  assert((await page.inputValue('#tf-pickup')).includes('Istanbul Airport'), 'pickup filled from route');
  assert(await page.isVisible('[data-estimate]'), 'estimate visible');
  const one = await page.textContent('[data-estimate-value]');
  await page.check('input[name="tripType"][value="round"]', { force: true });
  assert(await page.isVisible('[data-return]'), 'return fields shown');
  const two = await page.textContent('[data-estimate-value]');
  assert(Number(two.replace(/\D/g, '')) === 2 * Number(one.replace(/\D/g, '')), `round trip doubles price (${one} → ${two})`);
  await page.fill('#tf-pax', '8');
  await page.selectOption('#tf-vehicle', 'sedan');
  await page.click('#transfer-form button[type="submit"]');
  assert((await page.textContent('#tf-vehicle-error')).includes('up to 3'), 'capacity error');
  assert((await page.getAttribute('#tf-rdate', 'aria-invalid')) === 'true', 'return date required for round trip');
  await page.context().close();
});

await test('home transfer search pre-fills the booking form', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/`);
  await page.click('#tab-transfers');
  await page.fill('#t-from', 'Istanbul Airport (IST)');
  await page.fill('#t-to', 'Taksim / Beyoğlu hotel');
  await page.fill('#t-pax', '4');
  await page.click('#panel-transfers button[type="submit"]');
  await page.waitForURL('**/en/transfers/book/**');
  assert((await page.inputValue('#tf-dropoff')) === 'Taksim / Beyoğlu hotel', 'dropoff prefilled');
  assert((await page.inputValue('#tf-pax')) === '4', 'passengers prefilled');
  await page.context().close();
});

await test('newsletter validates and confirms', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/`);
  const form = page.locator('form[data-form="newsletter"]');
  await form.locator('input[type="email"]').fill('bad');
  await form.locator('button').click();
  assert((await form.locator('[aria-invalid="true"]').count()) === 2, 'email + consent errors');
  await form.locator('input[type="email"]').fill('reader@example.com');
  await form.locator('[name="consent"]').check();
  await form.locator('button').click();
  assert((await form.locator('[data-form-status]').textContent()).includes('Thank you'), 'confirmation');
  await page.context().close();
});

await test('contact form prefill from catalogue B2B link', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/catalogue/`);
  await page.click('#b2b a');
  await page.waitForURL('**/en/contact/**');
  assert((await page.inputValue('#c-subject')) === '3', 'agency subject selected');
  await page.context().close();
});

await test('tour departure date checker', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/tours/aegean-history-7-days/`);
  await page.fill('#date-check', '2027-06-06'); // Sunday
  await page.dispatchEvent('#date-check', 'change');
  assert((await page.getAttribute('[data-date-result]', 'class')).includes('is-ok'), 'Sunday available');
  await page.fill('#date-check', '2027-06-07'); // Monday
  await page.dispatchEvent('#date-check', 'change');
  assert((await page.getAttribute('[data-date-result]', 'class')).includes('is-no'), 'Monday unavailable');
  await page.context().close();
});

await test('cookie banner appears once and remembers the choice', async () => {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  await page.goto(`${BASE}/en/`);
  assert(await page.isVisible('[data-cookie]'), 'banner visible');
  await page.click('[data-cookie-necessary]');
  assert(!(await page.isVisible('[data-cookie]')), 'hidden after choice');
  await page.reload();
  assert(!(await page.isVisible('[data-cookie]')), 'stays hidden');
  await ctx.close();
});

await test('hero slider advances', async () => {
  const page = await newPage();
  await page.goto(`${BASE}/en/`);
  await page.click('[data-next]');
  assert((await page.textContent('[data-counter]')) === '02', 'slide 2');
  await page.context().close();
});

console.log('Responsive layout (no horizontal scrolling)');
const dist = new URL('../dist/', import.meta.url).pathname;
const pages = [];
(function walk(dir) { for (const f of readdirSync(dir)) { const p = join(dir, f); if (statSync(p).isDirectory()) walk(p); else if (f === 'index.html') pages.push('/' + p.slice(dist.length).replace(/index\.html$/, '')); } })(dist);
for (const [label, vp] of [['phone 375px', { width: 375, height: 800 }], ['tablet 820px', { width: 820, height: 1180 }], ['desktop 1440px', { width: 1440, height: 900 }]]) {
  await test(`${pages.length} pages at ${label}`, async () => {
    const page = await newPage({ viewport: vp });
    const bad = [];
    for (const p of pages) {
      if (p === '/') continue;
      await page.goto(BASE + p, { waitUntil: 'domcontentloaded' });
      const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (over > 1) bad.push(`${p} (+${over}px)`);
    }
    assert(bad.length === 0, bad.slice(0, 8).join(', '));
    assert(page.errors.length === 0, 'JS errors: ' + [...new Set(page.errors)].slice(0, 3).join(' | '));
    await page.context().close();
  });
}

await browser.close();
const failed = results.filter(([ok]) => !ok).length;
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
