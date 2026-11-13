import type { Inspiration, Testimonial } from './types';

/**
 * SAMPLE TESTIMONIALS — replace with real, verifiable guest reviews before launch
 * (or remove this section). Publishing invented reviews is not allowed in most countries.
 */
export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    country: { en: 'United Kingdom', zh: '英国', de: 'Vereinigtes Königreich', tr: 'Birleşik Krallık' },
    tour: 'grand-turkiye-11-days',
    rating: 5,
    text: {
      en: 'Every detail was taken care of, from the airport welcome to the last dinner. Our guide made Ephesus and Troy come alive.',
      zh: '从机场接机到最后一顿晚餐，每个细节都安排得妥妥当当。导游让以弗所和特洛伊鲜活了起来。',
      de: 'Vom Empfang am Flughafen bis zum letzten Abendessen war an alles gedacht. Unser Reiseleiter hat Ephesos und Troja lebendig werden lassen.',
      tr: 'Havalimanındaki karşılamadan son akşam yemeğine kadar her ayrıntı düşünülmüştü. Rehberimiz Efes’i ve Truva’yı canlandırdı.',
    },
  },
  {
    name: '王女士',
    country: { en: 'China', zh: '中国', de: 'China', tr: 'Çin' },
    tour: 'istanbul-cappadocia-6-days',
    rating: 5,
    text: {
      en: 'Having a Chinese-speaking guide made the trip so relaxed for my parents. The cave hotel and the balloon sunrise were unforgettable.',
      zh: '有中文导游陪同，我父母这一路都很轻松。洞穴酒店和热气球日出令人难忘。',
      de: 'Mit einer chinesischsprachigen Reiseleitung war die Reise für meine Eltern ganz entspannt. Das Höhlenhotel und der Ballon-Sonnenaufgang waren unvergesslich.',
      tr: 'Çince konuşan bir rehberimizin olması, yolculuğu annemle babam için çok rahat hale getirdi. Mağara otel ve balonla gün doğumu unutulmazdı.',
    },
  },
  {
    name: 'Thomas & Anja K.',
    country: { en: 'Germany', zh: '德国', de: 'Deutschland', tr: 'Almanya' },
    tour: 'private-istanbul-day-tour',
    rating: 5,
    text: {
      en: 'Our private guide adjusted the day to our children’s rhythm and still showed us the very best of Istanbul. Highly recommended.',
      zh: '私人导游根据孩子们的节奏调整行程，依然带我们看遍了伊斯坦布尔的精华。强烈推荐。',
      de: 'Unsere private Reiseleiterin hat den Tag an den Rhythmus unserer Kinder angepasst und uns trotzdem das Beste von Istanbul gezeigt. Sehr zu empfehlen.',
      tr: 'Özel rehberimiz günü çocuklarımızın temposuna göre ayarladı ve yine de bize İstanbul’un en güzel yerlerini gösterdi. Kesinlikle tavsiye ederiz.',
    },
  },
];

export const inspiration: Inspiration[] = [
  {
    href: 'destinations/cappadocia',
    image: 'cappadocia',
    tag: { en: 'Winter', zh: '冬季', de: 'Winter', tr: 'Kış' },
    title: { en: 'Cappadocia under snow', zh: '雪中的卡帕多奇亚', de: 'Kappadokien im Schnee', tr: 'Karlar altında Kapadokya' },
    text: {
      en: 'Fewer crowds, cosy cave hotels and balloons over white valleys.',
      zh: '游客更少，洞穴酒店温馨舒适，热气球飘过白色山谷。',
      de: 'Weniger Besucher, gemütliche Höhlenhotels und Ballons über weißen Tälern.',
      tr: 'Daha az kalabalık, sıcacık mağara otelleri ve beyaz vadiler üzerinde balonlar.',
    },
  },
  {
    href: 'activities/istanbul-food-tour',
    image: 'baklava',
    tag: { en: 'Food', zh: '美食', de: 'Kulinarik', tr: 'Lezzet' },
    title: { en: 'A day of eating in Istanbul', zh: '在伊斯坦布尔吃一整天', de: 'Ein Tag voller Genuss in Istanbul', tr: 'İstanbul’da lezzet dolu bir gün' },
    text: {
      en: 'From simit at breakfast to baklava at midnight — where locals really eat.',
      zh: '从早餐的芝麻圈到午夜的果仁蜜饼——当地人真正去的地方。',
      de: 'Vom Simit zum Frühstück bis zur Baklava um Mitternacht — wo Einheimische wirklich essen.',
      tr: 'Kahvaltıda simitten gece yarısı baklavaya — yerlilerin gerçekten yemek yediği yerler.',
    },
  },
  {
    href: 'destinations/ephesus',
    image: 'ephesus',
    tag: { en: 'History', zh: '历史', de: 'Geschichte', tr: 'Tarih' },
    title: { en: 'Ancient cities of the Aegean', zh: '爱琴海的古城', de: 'Antike Städte der Ägäis', tr: 'Ege’nin antik kentleri' },
    text: {
      en: 'Ephesus, Pergamon and Aphrodisias in a week of spring sunshine.',
      zh: '在春日阳光下用一周时间游览以弗所、帕加马和阿佛洛狄西亚。',
      de: 'Ephesos, Pergamon und Aphrodisias in einer Woche Frühlingssonne.',
      tr: 'Bahar güneşinde bir haftada Efes, Bergama ve Afrodisias.',
    },
  },
];
