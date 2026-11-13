export const languages = {
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_GB', dir: 'ltr' },
  zh: { label: '简体中文', short: '中文', htmlLang: 'zh-CN', ogLocale: 'zh_CN', dir: 'ltr' },
} as const;

export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

/** A piece of content written in every language. */
export type L<T = string> = Record<Lang, T>;

/** Pick the value for `lang`, falling back to English. */
export function pick<T>(value: L<T> | undefined, lang: Lang): T {
  if (!value) return '' as unknown as T;
  return value[lang] ?? value[defaultLang];
}

export function isLang(value: string | undefined): value is Lang {
  return !!value && value in languages;
}

/** Static paths for pages that exist once per language. */
export function langPaths() {
  return langs.map((lang) => ({ params: { lang } }));
}
