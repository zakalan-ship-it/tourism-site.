/** Transfer booking form: round-trip fields, route presets and price estimate. */
export function initTransferForm() {
  const form = document.querySelector<HTMLFormElement>('[data-transfer-form]');
  if (!form) return;
  const i18n = JSON.parse(document.getElementById('i18n-data')?.textContent ?? '{}');
  const money = (n: number) => new Intl.NumberFormat(i18n.locale, { style: 'currency', currency: i18n.config.currency, maximumFractionDigits: 0 }).format(n);

  const returnBlock = form.querySelector<HTMLElement>('[data-return]');
  const routeSel = form.querySelector<HTMLSelectElement>('[name="route"]');
  const vehicleSel = form.querySelector<HTMLSelectElement>('[name="vehicle"]');
  const pickup = form.querySelector<HTMLInputElement>('[name="pickup"]');
  const dropoff = form.querySelector<HTMLInputElement>('[name="dropoff"]');
  const pax = form.querySelector<HTMLInputElement>('[name="passengers"]');
  const estimate = form.querySelector<HTMLElement>('[data-estimate]');
  const estimateValue = form.querySelector<HTMLElement>('[data-estimate-value]');

  const isRound = () => form.querySelector<HTMLInputElement>('[name="tripType"]:checked')?.value === 'round';

  const syncReturn = () => {
    if (!returnBlock) return;
    const on = isRound();
    returnBlock.hidden = !on;
    returnBlock.querySelectorAll<HTMLInputElement>('input').forEach((i) => { i.required = on; if (!on) { i.removeAttribute('aria-invalid'); const e = document.getElementById(`${i.id}-error`); if (e) e.textContent = ''; } });
  };

  const syncEstimate = () => {
    if (!estimate || !estimateValue) return;
    const opt = routeSel?.selectedOptions[0];
    const prices = opt?.dataset.prices ? (JSON.parse(opt.dataset.prices) as Record<string, number>) : null;
    let vehicle = vehicleSel?.value || '';
    if (!vehicle && prices && pax) {
      // Recommend the smallest vehicle that fits the party.
      const fit = Array.from(vehicleSel?.options ?? []).find((o) => o.value && Number(o.dataset.capacity) >= Number(pax.value || 1) && prices[o.value]);
      vehicle = fit?.value ?? '';
    }
    const price = prices && vehicle ? prices[vehicle] : undefined;
    if (!price) { estimate.hidden = true; return; }
    estimate.hidden = false;
    estimateValue.textContent = money(price * (isRound() ? 2 : 1));
  };

  routeSel?.addEventListener('change', () => {
    const opt = routeSel.selectedOptions[0];
    if (opt?.dataset.from && pickup) pickup.value = opt.dataset.from;
    if (opt?.dataset.to && dropoff) dropoff.value = opt.dataset.to;
    syncEstimate();
  });
  form.querySelectorAll('[name="tripType"]').forEach((r) => r.addEventListener('change', () => { syncReturn(); syncEstimate(); }));
  vehicleSel?.addEventListener('change', syncEstimate);
  pax?.addEventListener('change', () => {
    syncEstimate();
    if (vehicleSel?.getAttribute('aria-invalid') === 'true') vehicleSel.dispatchEvent(new Event('change', { bubbles: true }));
  });

  // Presets from the URL (?route=…&vehicle=…&trip=round)
  const params = new URLSearchParams(location.search);
  if (params.get('trip') === 'round') {
    const r = form.querySelector<HTMLInputElement>('[name="tripType"][value="round"]');
    if (r) r.checked = true;
  }
  if (routeSel?.value) routeSel.dispatchEvent(new Event('change'));
  syncReturn();
  syncEstimate();
}
