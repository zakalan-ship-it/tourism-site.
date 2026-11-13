// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to the real domain before going live (used for canonical URLs, hreflang and the sitemap).
export default defineConfig({
  site: 'https://www.wellxplore.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', zh: 'zh-CN', de: 'de', tr: 'tr' } },
    }),
  ],
});
