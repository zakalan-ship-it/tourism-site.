import { languages, type Lang, defaultLang } from './languages';
import en from './ui/en';
import zh from './ui/zh';
import de from './ui/de';
import tr from './ui/tr';
import { site } from '../config/site';

export * from './languages';

const dictionaries = { en, zh, de, tr };

export function useTranslations(lang: Lang) {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

/** Replace {name} placeholders. */
export function fmt(template: string, vars: Record<string, string | number> = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => (key in vars ? String(vars[key]) : `{${key}}`));
}

/** Base path the site is served from ('' at a domain root, '/tourism-site.' on GitHub Pages). */
export const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefix a root-relative path with the base path: asset('/favicon-32.png'). */
export const asset = (path: string) => `${base}${path}`;

/** Build a localised URL: url('de', 'tours/x') -> /de/tours/x/ */
export function url(lang: Lang, path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `${base}/${lang}/${clean ? clean + '/' : ''}`;
}

/** Path without the base prefix, e.g. '/de/tours/'. */
export function stripBase(pathname: string) {
  return base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
}

/** The same page in another language. */
export function switchLangPath(pathname: string, target: Lang) {
  const parts = stripBase(pathname).split('/');
  // Pages outside the language tree (e.g. the 404 page) link to each language's home page.
  if (!parts[1] || !(parts[1] in languages)) return `${base}/${target}/`;
  parts[1] = target;
  return base + parts.join('/');
}

export function formatPrice(amount: number, lang: Lang, currency: string = site.currency) {
  return new Intl.NumberFormat(languages[lang].htmlLang, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(iso: string, lang: Lang, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Intl.DateTimeFormat(languages[lang].htmlLang, { ...opts, timeZone: 'UTC' }).format(new Date(iso + 'T00:00:00Z'));
}

export function daysLabel(lang: Lang, n: number) {
  const t = useTranslations(lang);
  return n === 1 ? t.common.day : fmt(t.common.days, { n });
}

export function nightsLabel(lang: Lang, n: number) {
  const t = useTranslations(lang);
  return n === 1 ? t.common.night : fmt(t.common.nights, { n });
}

/** Join a list with commas and the localised "and". */
export function joinList(lang: Lang, items: string[]) {
  if (lang === 'zh') return items.join('、');
  if (items.length < 2) return items.join('');
  return `${items.slice(0, -1).join(', ')} ${useTranslations(lang).and} ${items.at(-1)}`;
}

/** "3.5 hours" / "Full day" for activities. */
export function hoursLabel(lang: Lang, hours: number) {
  const t = useTranslations(lang);
  if (hours >= 8) return t.common.fullDay;
  return fmt(t.common.hours, { n: hours.toLocaleString(languages[lang].htmlLang) });
}
