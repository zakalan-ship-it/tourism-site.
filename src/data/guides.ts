import type { L } from '../i18n/languages';

/**
 * The founders and guides. Everything here appears on the homepage, Our Story and tour pages.
 *
 * TO COMPLETE:
 * - photo: add a portrait to src/assets/images (e.g. mesut.jpg) and put its name here ('mesut').
 *   Until then a monogram placeholder is shown.
 * - licence: your guide badge number, shown on your profile when filled in.
 * - specialities / bio: personalise these in your own words (Özlem should write the Chinese).
 */
export interface Guide {
  id: 'mesut' | 'ozlem';
  name: string;
  role: L;
  languages: L;
  bio: L;
  specialities: L[];
  photo?: string;
  licence?: string;
}

export const guides: Guide[] = [
  {
    id: 'mesut',
    name: 'Mesut',
    role: { en: 'Co-founder · English-speaking guide', zh: '联合创始人 · 英语导游' },
    languages: { en: 'English · Türkçe', zh: '英语 · 土耳其语' },
    bio: {
      en: 'Licensed professional tour guide based in Istanbul. Mesut leads our English-speaking guests in person — from the airport welcome to the last goodbye.',
      zh: '常驻伊斯坦布尔的持证专业导游。Mesut 亲自带领我们的英语客人，从机场迎接到最后送别全程陪同。',
    },
    specialities: [],
    photo: undefined,
    licence: '',
  },
  {
    id: 'ozlem',
    name: 'Özlem',
    role: { en: 'Co-founder · Chinese (Mandarin)-speaking guide', zh: '联合创始人 · 中文导游' },
    languages: { en: '中文 (Mandarin) · English · Türkçe', zh: '中文 · 英语 · 土耳其语' },
    bio: {
      en: 'Licensed professional tour guide based in Istanbul. Özlem leads our Chinese-speaking guests in person, in fluent Mandarin, throughout the trip.',
      zh: '常驻伊斯坦布尔的持证专业导游。Özlem 用流利的普通话亲自带领中文客人，全程陪同。',
    },
    specialities: [],
    photo: undefined,
    licence: '',
  },
];
