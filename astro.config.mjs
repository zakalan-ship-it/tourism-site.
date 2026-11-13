// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change the default `site` to the real domain before going live (canonical URLs, hreflang, sitemap).
// SITE_URL / BASE_PATH let the same code run on a sub-path, e.g. GitHub Pages:
//   SITE_URL=https://zakalan-ship-it.github.io BASE_PATH=/tourism-site. npm run build
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.wellxplore.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', zh: 'zh-CN', de: 'de', tr: 'tr' } },
    }),
  ],
});
