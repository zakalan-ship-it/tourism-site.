import type { L } from '../languages';

/**
 * "Our story" page. Only facts we know are stated here.
 * TO PERSONALISE: add how you met, years of guiding, favourite regions and why you started
 * WellXplore — in your own words. Özlem should write or approve the Chinese text.
 */
export interface AboutContent {
  lead: string;
  story: { title: string; paragraphs: string[] };
  values: { title: string; text: string }[];
  services: { title: string; items: string[] };
  b2b: { title: string; text: string };
}

export const about: L<AboutContent> = {
  en: {
    lead: 'WellXplore was founded by Mesut and Özlem, two licensed tour guides based in Istanbul. One of us guides in English, the other in Chinese — and we lead our tours ourselves.',
    story: {
      title: 'Your guides are the company',
      paragraphs: [
        'We are a husband-and-wife team of licensed professional guides. Mesut guides our English-speaking guests and Özlem our Chinese-speaking guests, in fluent Mandarin.',
        'We started WellXplore because we wanted to offer the kind of trip we would choose ourselves: small groups, honest prices, no forced shopping stops, and the same guide from the airport welcome to the last goodbye.',
        'We deliberately keep our numbers low. That way, depending on your dates, one of us can lead your trip in person. In our busiest weeks a trusted, licensed partner guide may lead a tour — and we always tell you before you book.',
        'Travelling as a family or group that mixes English and Chinese speakers? We can guide together, in both languages.',
      ],
    },
    values: [
      { title: 'Licensed guides, not drivers', text: 'Every tour is led by a licensed professional guide — never a driver who translates.' },
      { title: 'No forced shopping', text: 'No commission shops and no shopping stops you didn’t ask for.' },
      { title: 'Small and private', text: 'Private tours for your party, or small groups of like-minded travellers.' },
      { title: 'One guide, start to finish', text: 'The guide who meets you at the airport is the guide who sees you off.' },
    ],
    services: {
      title: 'What we offer',
      items: [
        'Private and small-group tours across Türkiye',
        'Tailor-made itineraries around your dates and interests',
        'Day tours and experiences in Istanbul, Cappadocia and on the coast',
        'Airport, city and intercity transfers',
        'Bilingual (English & Chinese) guiding for mixed groups',
      ],
    },
    b2b: { title: 'For travel agencies', text: 'We also guide for partner agencies that need licensed English- or Chinese-speaking guides in Türkiye. Get in touch for our partner terms.' },
  },
  zh: {
    lead: 'WellXplore 由常驻伊斯坦布尔的两位持证导游 Özlem 和 Mesut 创立。我们一位讲中文，一位讲英语——每一次旅行都由我们亲自带领。',
    story: {
      title: '导游就是我们自己',
      paragraphs: [
        '我们是一对夫妻，都是持证专业导游。Özlem 用流利的普通话带领中文客人，Mesut 带领英语客人。',
        '创办 WellXplore，是想提供我们自己也愿意选择的旅行：小团出行、价格诚实、没有强制购物，从接机到送机都是同一位导游。',
        '我们有意只接少量团队，这样根据您的出行日期，我们之中总有一人能亲自带您。旺季时可能由我们信赖的持证合作导游带团——我们一定会在预订前告知您。',
        '家人或团队中有人讲中文、有人讲英语？我们两人可以一起带团，双语讲解。',
      ],
    },
    values: [
      { title: '持证导游，不是司机兼翻译', text: '每条线路都由持证专业导游带领，绝不是“会说中文的司机”。' },
      { title: '无强制购物', text: '不进佣金店，不安排您不想要的购物点。' },
      { title: '私人小团', text: '只有您一行人的私人团，或少数志趣相投旅客的小团。' },
      { title: '同一位导游全程陪同', text: '从机场迎接到最后送别，都是同一位导游。' },
    ],
    services: {
      title: '我们的服务',
      items: [
        '土耳其全境私人团与小团',
        '按您的日期和兴趣量身定制行程',
        '伊斯坦布尔、卡帕多奇亚及沿海地区的一日游和特色体验',
        '机场、市内及城际接送',
        '为中英文混合团队提供双语导游',
      ],
    },
    b2b: { title: '旅行社合作', text: '我们也为需要土耳其持证中文或英语导游的合作旅行社提供导游服务。欢迎联系我们了解合作条款。' },
  },
};
