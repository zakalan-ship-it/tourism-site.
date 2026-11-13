// Verifies that every piece of content exists in all four languages.
// Run: npm run check:i18n
import en from '../src/i18n/ui/en';
import zh from '../src/i18n/ui/zh';
import { langs } from '../src/i18n/languages';
import { destinations, regions } from '../src/data/destinations';
import { tours } from '../src/data/tours';
import { activities } from '../src/data/activities';
import { vehicles, routes, locationSuggestions } from '../src/data/transfers';
import { testimonials, inspiration } from '../src/data/content';
import { phrases } from '../src/data/phrases';
import { about } from '../src/i18n/pages/about';
import { legal } from '../src/i18n/pages/legal';

const problems: string[] = [];

// 1. UI dictionaries: same keys, same array lengths, no empty strings.
function compare(a: unknown, b: unknown, path: string, lang: string) {
  if (typeof a === 'string') {
    if (typeof b !== 'string' || !b.trim()) problems.push(`[ui:${lang}] missing or empty ${path}`);
    else {
      const ph = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort().join();
      if (ph(a) !== ph(b)) problems.push(`[ui:${lang}] placeholder mismatch at ${path}`);
    }
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) problems.push(`[ui:${lang}] array length differs at ${path}`);
    else a.forEach((v, i) => compare(v, b[i], `${path}[${i}]`, lang));
    return;
  }
  if (a && typeof a === 'object') {
    for (const k of Object.keys(a)) compare((a as any)[k], (b as any)?.[k], path ? `${path}.${k}` : k, lang);
  }
}
for (const [lang, dict] of Object.entries({ zh })) compare(en, dict, '', lang);

// 2. Content data: every localised object has all languages, non-empty.
const isL = (o: any) => o && typeof o === 'object' && !Array.isArray(o) && 'en' in o && Object.keys(o).every((k) => (langs as string[]).includes(k));
let localised = 0;
function walk(o: any, path: string) {
  if (isL(o)) {
    localised++;
    for (const l of langs) {
      const v = o[l];
      if (v === undefined || (typeof v === 'string' && !v.trim())) problems.push(`[data] ${path} missing "${l}"`);
      else if (typeof v === 'object') walk(v, `${path}.${l}`);
    }
    return;
  }
  if (Array.isArray(o)) o.forEach((v, i) => walk(v, `${path}[${i}]`));
  else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) walk(v, `${path}.${k}`);
}
walk({ destinations, regions, tours, activities, vehicles, routes, locationSuggestions, testimonials, inspiration, phrases, about, legal }, 'data');

// 3. Phrase keys used by tours/activities exist.
const usedKeys = [...tours.flatMap((t) => [...t.included, ...t.excluded, ...(t.important ?? [])]), ...activities.flatMap((a) => a.includes)].filter((x): x is string => typeof x === 'string');
for (const k of new Set(usedKeys)) if (!phrases[k]) problems.push(`[data] unknown phrase key "${k}"`);

// 4. Cross references.
const destSlugs = new Set(destinations.map((d) => d.slug));
tours.forEach((t) => t.destinations.forEach((d) => !destSlugs.has(d) && problems.push(`[data] tour ${t.slug} → unknown destination ${d}`)));
activities.forEach((a) => !destSlugs.has(a.destination) && problems.push(`[data] activity ${a.slug} → unknown destination ${a.destination}`));
const slugs = [...tours, ...activities, ...destinations].map((x) => x.slug);
slugs.forEach((s, i) => slugs.indexOf(s) !== i && problems.push(`[data] duplicate slug ${s}`));

console.log(`Checked UI strings in ${langs.length} languages and ${localised} localised content fields.`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):\n  ` + problems.join('\n  '));
  process.exit(1);
}
console.log('All content is complete in every language.');
