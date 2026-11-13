import type { Inspiration, Testimonial } from './types';

/**
 * Real guest reviews only (with the guest's permission). Each review shows on the homepage;
 * the section is hidden while this list is empty.
 * Example:
 * { name: 'Sarah M.', country: { en: 'United Kingdom', zh: '英国' }, tour: 'grand-turkiye-11-days', rating: 5,
 *   text: { en: '…', zh: '…' } },
 */
export const testimonials: Testimonial[] = [];

export const inspiration: Inspiration[] = [
  {
    href: 'destinations/cappadocia',
    image: 'cappadocia',
    tag: { en: 'Quiet season', zh: '淡季' },
    title: { en: 'Cappadocia off-season', zh: '淡季的卡帕多奇亚' },
    text: {
      en: 'Fewer crowds, cosy cave hotels and balloons over quiet valleys — from November to March.',
      zh: '游客更少，洞穴酒店温馨舒适，热气球飘过静谧山谷——11月至次年3月。',
    },
  },
  {
    href: 'activities/istanbul-food-tour',
    image: 'baklava',
    tag: { en: 'Food', zh: '美食' },
    title: { en: 'A day of eating in Istanbul', zh: '在伊斯坦布尔吃一整天' },
    text: {
      en: 'From simit at breakfast to baklava at midnight — where locals really eat.',
      zh: '从早餐的芝麻圈到午夜的果仁蜜饼——当地人真正去的地方。',
    },
  },
  {
    href: 'destinations/ephesus',
    image: 'ephesus',
    tag: { en: 'History', zh: '历史' },
    title: { en: 'Ancient cities of the Aegean', zh: '爱琴海的古城' },
    text: {
      en: 'Ephesus, Pergamon and Aphrodisias in a week of spring sunshine.',
      zh: '在春日阳光下用一周时间游览以弗所、帕加马和阿佛洛狄西亚。',
    },
  },
];
