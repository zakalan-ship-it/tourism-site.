// Checks every internal link and asset reference in the built site (dist/).
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
})(dist);

const broken = new Map();
const anchorsMissing = [];
let checked = 0;
const ids = new Map();
const idsOf = (file) => {
  if (!ids.has(file)) ids.set(file, new Set([...readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return ids.get(file);
};
const BASE = (process.env.BASE_PATH || '').replace(/\/+$/, '');
const resolve = (path) => {
  let clean = decodeURIComponent(path.split('?')[0].split('#')[0]);
  if (BASE) {
    if (!clean.startsWith(BASE + '/')) return undefined; // must stay inside the base path
    clean = clean.slice(BASE.length);
  }
  const candidates = [join(dist, clean), join(dist, clean, 'index.html')];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile());
};

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const page = BASE + '/' + file.slice(dist.length).replace(/index\.html$/, '');
  for (const m of html.matchAll(/\s(href|src|srcset)="([^"]+)"/g)) {
    const refs = m[1] === 'srcset' ? m[2].split(',').map((s) => s.trim().split(' ')[0]) : [m[2].replace(/&amp;/g, '&')];
    for (let ref of refs) {
      if (!ref || /^(https?:|mailto:|tel:|data:|javascript:)/.test(ref)) continue;
      if (ref.startsWith('#')) {
        if (ref.length > 1 && !idsOf(file).has(ref.slice(1))) anchorsMissing.push(`${page} → ${ref}`);
        continue;
      }
      if (!ref.startsWith('/')) ref = page + ref;
      checked++;
      const target = resolve(ref);
      if (!target) { broken.set(ref, (broken.get(ref) ?? new Set()).add(page)); continue; }
      const hash = ref.split('#')[1];
      if (hash && target.endsWith('.html') && !idsOf(target).has(hash)) anchorsMissing.push(`${page} → ${ref}`);
    }
  }
}

console.log(`Pages: ${files.length}, internal references checked: ${checked}`);
if (broken.size) {
  console.log(`\nBROKEN (${broken.size}):`);
  for (const [ref, pages] of broken) console.log(`  ${ref}  ← ${[...pages].slice(0, 3).join(', ')}${pages.size > 3 ? ` (+${pages.size - 3})` : ''}`);
}
if (anchorsMissing.length) console.log(`\nMissing anchors (${anchorsMissing.length}):\n  ` + [...new Set(anchorsMissing)].slice(0, 20).join('\n  '));
if (broken.size || anchorsMissing.length) process.exit(1);
console.log('All internal links OK.');
