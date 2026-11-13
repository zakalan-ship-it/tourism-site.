/**
 * Inquiry, transfer, contact and newsletter forms.
 * - Client-side validation with translated messages and accessible error output.
 * - If a form endpoint is configured (src/config/site.ts), the form is POSTed as JSON.
 * - Otherwise the visitor gets a ready-made WhatsApp / e-mail message. Nothing is ever
 *   presented as a confirmed booking or payment.
 */
type Dict = Record<string, string>;
interface I18n {
  locale: string;
  validation: Dict;
  form: Dict;
  newsletter: Dict;
  config: { endpoint: string; newsletterEndpoint: string; whatsapp: string; email: string };
}

const i18n = (): I18n => JSON.parse(document.getElementById('i18n-data')?.textContent ?? '{}');
const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[0-9\s().-]{7,20}$/;
type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function today() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function errorEl(field: Field) {
  const form = field.form;
  const id = field.id ? `${field.id}-error` : `${form?.id || form?.dataset.form || 'f'}-${field.name}-error`;
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('p');
    el.id = id;
    el.className = 'field-error';
    el.setAttribute('aria-live', 'polite');
    const host = field.closest('.field, .check, .consent') ?? field.parentElement!;
    // Inline rows (newsletter pill, steppers) get the message below the row instead of inside it.
    if (host.matches('.newsletter__row, .check')) host.after(el);
    else host.appendChild(el);
    const described = new Set((field.getAttribute('aria-describedby') ?? '').split(' ').filter(Boolean));
    described.add(id);
    field.setAttribute('aria-describedby', [...described].join(' '));
  }
  return el;
}

function validateField(field: Field, t: Dict): string {
  if (field.disabled || field.closest('[hidden]')) return '';
  const value = field.value.trim();
  if (field instanceof HTMLInputElement && field.type === 'checkbox') {
    return field.required && !field.checked ? (field.dataset.consent !== undefined ? t.consent : t.required) : '';
  }
  if (field.required && !value) return t.required;
  if (!value) return '';
  if (field instanceof HTMLInputElement) {
    if (field.type === 'email' && !EMAIL.test(value)) return t.email;
    if (field.dataset.phone !== undefined && !PHONE.test(value)) return t.phone;
    if (field.type === 'date' && field.dataset.future !== undefined && value < today()) return t.datePast;
    if (field.dataset.after) {
      const other = document.querySelector<HTMLInputElement>(field.dataset.after);
      if (other?.value && value <= other.value) return t.dateOrder;
    }
    if (field.type === 'number') {
      const n = Number(value);
      if (field.min !== '' && n < Number(field.min)) return fill(t.min, { n: field.min });
      if (field.max !== '' && n > Number(field.max)) return fill(t.max, { n: field.max });
    }
    if (field.dataset.differentFrom) {
      const other = document.querySelector<HTMLInputElement>(field.dataset.differentFrom);
      if (other && other.value.trim().toLowerCase() === value.toLowerCase()) return t.sameLocation;
    }
  }
  if (field.dataset.capacityFor) {
    const pax = document.querySelector<HTMLInputElement>(field.dataset.capacityFor);
    const option = (field as HTMLSelectElement).selectedOptions?.[0];
    const cap = Number(option?.dataset.capacity ?? 0);
    if (pax && cap && Number(pax.value) > cap) return fill(t.capacity, { n: cap });
  }
  return '';
}

function showError(field: Field, msg: string) {
  const el = errorEl(field);
  el.textContent = msg;
  if (msg) field.setAttribute('aria-invalid', 'true');
  else field.removeAttribute('aria-invalid');
}

function fieldLabel(form: HTMLFormElement, field: Field) {
  if (field.dataset.label) return field.dataset.label;
  const label = field.id ? form.querySelector(`label[for="${field.id}"]`) : null;
  return (label?.textContent ?? field.name).replace(/\*|\(.*?\)/g, '').trim();
}

/** Human-readable summary of everything the visitor filled in. */
function summarise(form: HTMLFormElement) {
  const lines: string[] = [];
  const title = form.dataset.summaryTitle;
  if (title) lines.push(title, '');
  const seen = new Set<string>();
  form.querySelectorAll<Field>('input, select, textarea').forEach((field) => {
    if (!field.name || field.type === 'hidden' || field.dataset.noSummary !== undefined || field.closest('[hidden]')) return;
    if (field instanceof HTMLInputElement && field.type === 'radio') {
      if (!field.checked || seen.has(field.name)) return;
      seen.add(field.name);
      const group = field.closest('fieldset')?.querySelector('legend')?.textContent?.trim() ?? field.name;
      lines.push(`${group}: ${field.closest('label')?.textContent?.trim() ?? field.value}`);
      return;
    }
    if (field instanceof HTMLInputElement && field.type === 'checkbox') {
      if (field.dataset.consent !== undefined || !field.checked) return;
      lines.push(`✓ ${fieldLabel(form, field)}`);
      return;
    }
    const value = field instanceof HTMLSelectElement ? field.selectedOptions[0]?.textContent?.trim() ?? '' : field.value.trim();
    if (value) lines.push(`${fieldLabel(form, field)}: ${value}`);
  });
  return lines.join('\n');
}

function payload(form: HTMLFormElement) {
  const data: Record<string, unknown> = { formType: form.dataset.form, page: location.href, language: document.documentElement.lang };
  new FormData(form).forEach((v, k) => { data[k] = v; });
  return data;
}

function setStatus(form: HTMLFormElement, html: string) {
  let box = form.querySelector<HTMLElement>('[data-form-status]');
  if (!box) {
    box = document.createElement('div');
    box.setAttribute('data-form-status', '');
    box.setAttribute('role', 'status');
    box.tabIndex = -1;
    form.appendChild(box);
  }
  box.innerHTML = html;
  box.focus({ preventScroll: true });
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  return box;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function readyState(form: HTMLFormElement, data: I18n, summary: string) {
  const f = data.form;
  const wa = `https://wa.me/${data.config.whatsapp}?text=${encodeURIComponent(summary)}`;
  const subject = form.dataset.summaryTitle || f.title;
  const mail = `mailto:${data.config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
  const box = setStatus(
    form,
    `<div class="form-status form-status--ready">
      <h3>${esc(f.readyTitle)}</h3>
      <p>${esc(f.readyText)}</p>
      <details><summary>${esc(f.summaryTitle)}</summary><pre class="form-summary">${esc(summary)}</pre></details>
      <div class="form-status__actions">
        <a class="btn btn--whatsapp" href="${wa}" target="_blank" rel="noopener">${esc(f.sendWhatsapp)}</a>
        <a class="btn btn--outline" href="${mail}">${esc(f.sendEmail)}</a>
        <button class="btn btn--outline" type="button" data-edit>${esc(f.edit)}</button>
      </div>
    </div>`,
  );
  box.querySelector('[data-edit]')?.addEventListener('click', () => { box.innerHTML = ''; form.querySelector<HTMLElement>('input, select, textarea')?.focus(); });
}

async function submitForm(form: HTMLFormElement, data: I18n) {
  const f = data.form;
  const summary = summarise(form);
  const endpoint = form.dataset.endpoint || data.config.endpoint;
  if (!endpoint) { readyState(form, data, summary); return; }

  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const label = button?.textContent;
  if (button) { button.disabled = true; button.textContent = f.sending; }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...payload(form), summary }),
    });
    if (!res.ok) throw new Error(String(res.status));
    form.reset();
    setStatus(form, `<div class="form-status form-status--ok"><h3>${esc(f.successTitle)}</h3><p>${esc(f.successText)}</p></div>`);
  } catch {
    const wa = `https://wa.me/${data.config.whatsapp}?text=${encodeURIComponent(summary)}`;
    setStatus(form, `<div class="form-status form-status--error" role="alert"><h3>${esc(f.errorTitle)}</h3><p>${esc(f.errorText)}</p><div class="form-status__actions"><a class="btn btn--whatsapp" href="${wa}" target="_blank" rel="noopener">${esc(f.sendWhatsapp)}</a></div></div>`);
  } finally {
    if (button) { button.disabled = false; button.textContent = label ?? f.submit; }
  }
}

async function submitNewsletter(form: HTMLFormElement, data: I18n) {
  const n = data.newsletter;
  const endpoint = data.config.newsletterEndpoint;
  if (endpoint) {
    try {
      const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload(form)) });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus(form, `<p class="form-status">${esc(n.success)}</p>`);
      return;
    } catch {
      setStatus(form, `<p class="form-status" role="alert">${esc(data.form.errorText)}</p>`);
      return;
    }
  }
  form.reset();
  setStatus(form, `<p class="form-status">${esc(n.successLocal)}</p>`);
}

export function initForms() {
  const forms = Array.from(document.querySelectorAll<HTMLFormElement>('form[data-form]'));
  if (!forms.length) return;
  const data = i18n();
  const t = data.validation;

  forms.forEach((form) => {
    form.noValidate = true;
    const fields = () => Array.from(form.querySelectorAll<Field>('input, select, textarea')).filter((f) => f.name);

    // Minimum date = today for future-only date fields.
    form.querySelectorAll<HTMLInputElement>('input[type="date"][data-future]').forEach((d) => (d.min = today()));

    // Pre-fill from the URL (e.g. ?tour=slug&date=2027-05-01&adults=2).
    const params = new URLSearchParams(location.search);
    params.forEach((value, key) => {
      const field = form.querySelector<Field>(`[name="${CSS.escape(key)}"][data-prefill]`);
      if (!field || !value) return;
      if (field instanceof HTMLSelectElement && !Array.from(field.options).some((o) => o.value === value)) return;
      field.value = value;
    });

    // Steppers (+/−)
    form.querySelectorAll<HTMLElement>('[data-stepper]').forEach((wrap) => {
      const input = wrap.querySelector<HTMLInputElement>('input')!;
      wrap.querySelectorAll<HTMLButtonElement>('[data-step]').forEach((b) =>
        b.addEventListener('click', () => {
          const next = Number(input.value || 0) + Number(b.dataset.step);
          const min = input.min === '' ? -Infinity : Number(input.min);
          const max = input.max === '' ? Infinity : Number(input.max);
          input.value = String(Math.min(max, Math.max(min, next)));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        }),
      );
    });

    // Toggle dependent blocks, e.g. agency name when "I am an agency" is ticked.
    form.querySelectorAll<HTMLInputElement>('[data-toggles]').forEach((cb) => {
      const target = form.querySelector<HTMLElement>(cb.dataset.toggles!);
      const sync = () => { if (target) target.hidden = !cb.checked; };
      cb.addEventListener('change', sync);
      sync();
    });

    // Live re-validation once a field has been touched. Errors clear while typing, so the
    // layout does not shift under the pointer when the visitor clicks the next field.
    form.addEventListener('input', (e) => {
      const field = e.target as Field;
      if (field.getAttribute('aria-invalid') === 'true' && !validateField(field, t)) showError(field, '');
    });
    form.addEventListener('change', (e) => {
      const field = e.target as Field;
      if (field.getAttribute('aria-invalid') === 'true' || field.type === 'checkbox') showError(field, validateField(field, t));
    });
    form.addEventListener('focusout', (e) => {
      const field = e.target as Field;
      if (field.name && field.value) showError(field, validateField(field, t));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let first: Field | null = null;
      fields().forEach((field) => {
        const msg = validateField(field, t);
        showError(field, msg);
        if (msg && !first) first = field;
      });
      const summaryBox = form.querySelector<HTMLElement>('[data-error-summary]');
      if (first) {
        if (summaryBox) summaryBox.textContent = data.form.errorSummary;
        (first as Field).focus();
        return;
      }
      if (summaryBox) summaryBox.textContent = '';
      if (form.dataset.form === 'newsletter') submitNewsletter(form, data);
      else submitForm(form, data);
    });
  });
}
