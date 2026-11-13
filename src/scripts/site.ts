import { initForms } from './forms';
import { initFilters } from './filters';
import { initTransferForm } from './transfer';

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));

function storage(key: string, value?: string) {
  try {
    if (value === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable (private mode) — ignore */
  }
  return null;
}

/* ---------------- Header: scrolled state ---------------- */
function initHeader() {
  const header = $('[data-header]');
  if (!header) return;
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------------- Mobile menu + dropdowns ---------------- */
function initNav() {
  const toggle = $('[data-menu-toggle]');
  const nav = $('[data-nav]');
  const header = $('[data-header]');
  const setMenu = (open: boolean) => {
    toggle?.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    header?.classList.toggle('is-scrolled', open || window.scrollY > 30);
  };
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));

  const toggles = $$<HTMLButtonElement>('[data-dropdown-toggle]');
  const closeAll = (except?: HTMLElement) => toggles.forEach((b) => b !== except && b.setAttribute('aria-expanded', 'false'));
  toggles.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = btn.getAttribute('aria-expanded') === 'true';
      closeAll(btn);
      btn.setAttribute('aria-expanded', String(!open));
    });
  });
  document.addEventListener('click', (e) => {
    if (!(e.target as Element).closest('.nav-item')) closeAll();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const open = toggles.find((b) => b.getAttribute('aria-expanded') === 'true');
    closeAll();
    open?.focus();
    if (nav?.classList.contains('is-open')) { setMenu(false); toggle?.focus(); }
  });

  // Remember the visitor's language choice for the root redirect.
  $$('[data-lang-link]').forEach((a) => a.addEventListener('click', () => storage('wx-lang', a.dataset.langLink)));
  const current = document.documentElement.lang.slice(0, 2);
  if (current) storage('wx-lang', current);
}

/* ---------------- Reveal on scroll ---------------- */
function initReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach((el) => el.classList.add('is-visible')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach((el) => io.observe(el));
}

/* ---------------- Hero slider ---------------- */
function initSlider() {
  const root = $('[data-slider]');
  if (!root) return;
  const slides = $$('[data-slide]', root);
  const copies = $$('[data-copy]', root);
  const dots = $$<HTMLButtonElement>('[data-dot]', root);
  const counter = $('[data-counter]', root);
  if (slides.length < 2) return;
  let index = 0;
  let timer: number | undefined;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const go = (i: number) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => { s.classList.toggle('is-active', n === index); s.setAttribute('aria-hidden', String(n !== index)); });
    copies.forEach((c, n) => c.classList.toggle('is-active', n === index));
    dots.forEach((d, n) => d.setAttribute('aria-current', String(n === index)));
    if (counter) counter.textContent = String(index + 1).padStart(2, '0');
  };
  const play = () => { if (reduced) return; stop(); timer = window.setInterval(() => go(index + 1), 7000); };
  const stop = () => window.clearInterval(timer);

  $('[data-prev]', root)?.addEventListener('click', () => { go(index - 1); play(); });
  $('[data-next]', root)?.addEventListener('click', () => { go(index + 1); play(); });
  dots.forEach((d, n) => d.addEventListener('click', () => { go(n); play(); }));
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', play);
  root.addEventListener('focusin', stop);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : play()));
  go(0);
  play();
}

/* ---------------- Search panel tabs ---------------- */
function initTabs() {
  $$('[data-tabs]').forEach((root) => {
    const tabs = $$<HTMLButtonElement>('[role="tab"]', root);
    const select = (tab: HTMLButtonElement) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls') ?? '');
        if (panel) panel.hidden = !on;
      });
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!dir) return;
        const next = tabs[(i + dir + tabs.length) % tabs.length];
        select(next);
        next.focus();
      });
    });
  });
}

/* ---------------- Section tabs on detail pages ---------------- */
function initSectionNav() {
  const links = $$<HTMLAnchorElement>('[data-section-nav] a');
  if (!links.length || !('IntersectionObserver' in window)) return;
  const map = new Map(links.map((a) => [a.hash.slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.remove('is-active'));
      map.get(entry.target.id)?.classList.add('is-active');
    });
  }, { rootMargin: '-35% 0px -60% 0px' });
  map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
}

/* ---------------- Tour date checker ---------------- */
function initDateCheck() {
  const data = JSON.parse(document.getElementById('i18n-data')?.textContent ?? '{}');
  $$('[data-date-check]').forEach((root) => {
    const input = $<HTMLInputElement>('input', root);
    const out = $('[data-date-result]', root);
    const dep = JSON.parse(root.dataset.departures ?? 'null') as { from: string; to: string; weekdays?: number[] } | null;
    if (!input || !out || !dep) return;
    input.min = new Date().toISOString().slice(0, 10) > dep.from ? new Date().toISOString().slice(0, 10) : dep.from;
    input.max = dep.to;
    input.addEventListener('change', () => {
      if (!input.value) { out.textContent = ''; return; }
      const d = new Date(input.value + 'T00:00:00Z');
      const wd = ((d.getUTCDay() + 6) % 7) + 1;
      const ok = input.value >= dep.from && input.value <= dep.to && (!dep.weekdays || dep.weekdays.includes(wd));
      const pretty = new Intl.DateTimeFormat(data.locale, { dateStyle: 'full', timeZone: 'UTC' }).format(d);
      out.textContent = (ok ? data.tour.dateAvailable : data.tour.dateUnavailable).replace('{date}', pretty);
      out.className = `date-result ${ok ? 'is-ok' : 'is-no'}`;
      const formDate = document.querySelector<HTMLInputElement>('#inquiry-form [name="travelDate"]');
      if (ok && formDate && !formDate.value) formDate.value = input.value;
    });
  });
}

/* ---------------- Cookie consent ---------------- */
function initCookies() {
  const box = $('[data-cookie]');
  if (!box) return;
  const prefs = $('[data-cookie-prefs]', box);
  const save = $('[data-cookie-save]', box);
  const cats = $$<HTMLInputElement>('[data-cookie-cat]', box);
  const store = (value: Record<string, boolean>) => { storage('wx-consent', JSON.stringify({ ...value, date: new Date().toISOString() })); box.hidden = true; };
  const saved = storage('wx-consent');
  if (!saved) box.hidden = false;
  else {
    try { const v = JSON.parse(saved); cats.forEach((c) => (c.checked = !!v[c.dataset.cookieCat!])); } catch { /* ignore */ }
  }
  $('[data-cookie-accept]', box)?.addEventListener('click', () => store({ analytics: true, marketing: true }));
  $('[data-cookie-necessary]', box)?.addEventListener('click', () => store({ analytics: false, marketing: false }));
  $('[data-cookie-settings]', box)?.addEventListener('click', () => { if (prefs) prefs.hidden = false; if (save) save.hidden = false; });
  save?.addEventListener('click', () => store(Object.fromEntries(cats.map((c) => [c.dataset.cookieCat, c.checked]))));
  $$('[data-cookie-open]').forEach((b) => b.addEventListener('click', () => { box.hidden = false; if (prefs) prefs.hidden = false; if (save) save.hidden = false; }));
}

/* ---------------- Print buttons ---------------- */
function initPrint() {
  $$('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));
}

function init() {
  initHeader();
  initNav();
  initReveal();
  initSlider();
  initTabs();
  initSectionNav();
  initDateCheck();
  initCookies();
  initPrint();
  initForms();
  initFilters();
  initTransferForm();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
