/**
 * Generic client-side filtering for listing pages.
 *
 * <form data-filters="tours">  inputs carry  name="…" data-match="rule"
 * <div data-filter-list>        items carry   data-item + data-<name> attributes
 *
 * Rules:
 *   list      item attribute is a space-separated list that must contain the value
 *   eq        item attribute must equal the value
 *   max       item number must be <= value (empty item value = "on request" → kept)
 *   capacity  item number must be >= value
 *   duration  value "1" | "2-5" | "6-9" | "10+" compared with item days
 *   date      item must depart on that date (data-from / data-to / data-weekdays)
 *   text      item data-search must contain every word
 * Chips: <button data-chip="name" data-value="x"> set a hidden/select input of that name.
 * State is kept in the URL so filtered views can be shared and bookmarked.
 */
type Rule = 'list' | 'eq' | 'max' | 'capacity' | 'duration' | 'date' | 'text';

function matches(item: HTMLElement, rule: Rule, name: string, value: string): boolean {
  if (!value) return true;
  const attr = item.dataset[name] ?? '';
  switch (rule) {
    case 'list': return attr.split(' ').includes(value);
    case 'eq': return attr === value;
    case 'max': return attr === '' || Number(attr) <= Number(value);
    case 'capacity': return attr === '' || Number(attr) >= Number(value);
    case 'duration': {
      const d = Number(item.dataset.days);
      if (value === '1') return d === 1;
      if (value === '10+') return d >= 10;
      const [a, b] = value.split('-').map(Number);
      return d >= a && d <= b;
    }
    case 'date': {
      const from = item.dataset.from;
      if (!from) return true; // on request — any date
      if (value < from || value > (item.dataset.to ?? '')) return false;
      const wds = (item.dataset.weekdays ?? '').split(',').filter(Boolean).map(Number);
      if (!wds.length) return true;
      const d = new Date(value + 'T00:00:00Z');
      return wds.includes(((d.getUTCDay() + 6) % 7) + 1);
    }
    case 'text': {
      const hay = (item.dataset.search ?? '').toLowerCase();
      return value.toLowerCase().split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
    }
  }
}

export function initFilters() {
  const form = document.querySelector<HTMLFormElement>('form[data-filters]');
  const list = document.querySelector<HTMLElement>('[data-filter-list]');
  if (!form || !list) return;
  const i18n = JSON.parse(document.getElementById('i18n-data')?.textContent ?? '{}');
  const items = Array.from(list.querySelectorAll<HTMLElement>('[data-item]'));
  const original = [...items];
  const inputs = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[data-match]'));
  const sortSel = document.querySelector<HTMLSelectElement>('[data-sort]');
  const countEl = document.querySelector<HTMLElement>('[data-count]');
  const empty = document.querySelector<HTMLElement>('[data-empty]');
  const chips = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-chip]'));
  const rangeOut = form.querySelector<HTMLElement>('[data-range-out]');

  // Restore state from the URL.
  const params = new URLSearchParams(location.search);
  inputs.forEach((input) => {
    const v = params.get(input.name);
    if (v !== null) input.value = v;
  });
  if (sortSel && params.get('sort')) sortSel.value = params.get('sort')!;

  const apply = () => {
    const values = inputs.map((i) => [i, i.value.trim()] as const);
    let shown = 0;
    items.forEach((item) => {
      const ok = values.every(([input, v]) => {
        // range input at its maximum means "any price"
        if (input instanceof HTMLInputElement && input.type === 'range' && v === input.max) return true;
        return matches(item, input.dataset.match as Rule, input.name, v);
      });
      item.hidden = !ok;
      if (ok) shown++;
    });

    // Sort
    const mode = sortSel?.value ?? '';
    const sorted = [...original].sort((a, b) => {
      const pa = a.dataset.price ? Number(a.dataset.price) : Infinity;
      const pb = b.dataset.price ? Number(b.dataset.price) : Infinity;
      if (mode === 'price-asc') return pa - pb;
      if (mode === 'price-desc') return (b.dataset.price ? pb : -1) - (a.dataset.price ? pa : -1);
      if (mode === 'duration') return Number(a.dataset.days) - Number(b.dataset.days);
      return original.indexOf(a) - original.indexOf(b);
    });
    sorted.forEach((el) => list.appendChild(el));

    if (countEl) countEl.textContent = (shown === 1 ? i18n.common.result : i18n.common.results).replace('{n}', String(shown));
    if (empty) empty.hidden = shown > 0;
    chips.forEach((chip) => {
      const input = inputs.find((i) => i.name === chip.dataset.chip);
      chip.setAttribute('aria-pressed', String((input?.value ?? '') === (chip.dataset.value ?? '')));
    });
    if (rangeOut) {
      const range = form.querySelector<HTMLInputElement>('input[type="range"]');
      if (range) rangeOut.textContent = range.value === range.max ? rangeOut.dataset.any ?? '' : new Intl.NumberFormat(i18n.locale, { style: 'currency', currency: i18n.config.currency, maximumFractionDigits: 0 }).format(Number(range.value));
    }

    // Sync URL
    const next = new URLSearchParams();
    values.forEach(([input, v]) => {
      if (!v) return;
      if (input instanceof HTMLInputElement && input.type === 'range' && v === input.max) return;
      next.set(input.name, v);
    });
    if (mode) next.set('sort', mode);
    const qs = next.toString();
    history.replaceState(null, '', location.pathname + (qs ? `?${qs}` : '') + location.hash);
  };

  form.addEventListener('input', apply);
  form.addEventListener('change', apply);
  form.addEventListener('submit', (e) => { e.preventDefault(); apply(); closePanel(); });
  sortSel?.addEventListener('change', apply);
  chips.forEach((chip) => chip.addEventListener('click', () => {
    const input = inputs.find((i) => i.name === chip.dataset.chip);
    if (!input) return;
    input.value = chip.dataset.value ?? '';
    apply();
  }));
  document.querySelectorAll('[data-reset]').forEach((b) => b.addEventListener('click', () => {
    inputs.forEach((i) => { i.value = i instanceof HTMLInputElement && i.type === 'range' ? i.max : ''; });
    if (sortSel) sortSel.value = '';
    apply();
  }));

  // Mobile filter panel
  const panel = document.querySelector<HTMLElement>('[data-filter-panel]');
  const openBtn = document.querySelector<HTMLButtonElement>('[data-filter-open]');
  const closePanel = () => { panel?.classList.remove('is-open'); openBtn?.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); };
  openBtn?.addEventListener('click', () => { panel?.classList.add('is-open'); openBtn.setAttribute('aria-expanded', 'true'); document.body.classList.add('menu-open'); panel?.querySelector<HTMLElement>('select, input, button')?.focus(); });
  document.querySelectorAll('[data-filter-close]').forEach((b) => b.addEventListener('click', closePanel));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && panel?.classList.contains('is-open')) { closePanel(); openBtn?.focus(); } });

  apply();
}
