import type { TransferRoute, Vehicle } from './types';
import type { L } from '../i18n/languages';

/**
 * Boutique fleet — licensed (D2) tourism vehicles only, no sedans or coaches.
 * `image` is a photo key in src/assets/images (see src/data/images.ts).
 */
export const vehicles: Vehicle[] = [
  {
    id: 'van',
    image: 'vehicle-vito',
    models: 'Mercedes-Benz Vito VIP',
    passengers: 6,
    luggage: 6,
    name: { en: 'VIP Vito', zh: 'VIP 奔驰 Vito' },
    tagline: { en: 'Private transfer', zh: '私人接送' },
    features: [
      { en: 'Leather lounge seats and privacy curtains', zh: '真皮休息座椅与私密窗帘' },
      { en: 'Ideal for couples, families and small groups', zh: '适合情侣、家庭和小团体' },
    ],
  },
  {
    id: 'vip',
    image: 'vehicle-vip-sprinter',
    models: 'Mercedes-Benz Sprinter VIP conversion',
    passengers: 10,
    luggage: 8,
    name: { en: 'VIP Sprinter', zh: 'VIP 奔驰 Sprinter' },
    tagline: { en: 'Lounge-style cabin', zh: '贵宾休息舱' },
    features: [
      { en: 'Quilted leather lounge seats', zh: '菱格真皮休息座椅' },
      { en: 'Privacy blinds, Wi-Fi, USB charging and refreshments', zh: '私密遮光帘、Wi-Fi、USB 充电和茶点' },
    ],
  },
  {
    id: 'minibus',
    image: 'vehicle-sprinter',
    models: 'Mercedes-Benz Sprinter',
    passengers: 14,
    luggage: 14,
    name: { en: 'Mercedes Sprinter', zh: '奔驰 Sprinter' },
    tagline: { en: 'Private group', zh: '私人团体' },
    features: [
      { en: 'Groups and extended families', zh: '适合团体和大家庭' },
      { en: 'Large luggage compartment', zh: '大型行李舱' },
    ],
  },
];

const ist: L = { en: 'Istanbul Airport (IST)', zh: '伊斯坦布尔机场（IST）' };
const saw: L = { en: 'Sabiha Gökçen Airport (SAW)', zh: '萨比哈·格克琴机场（SAW）' };

/** PRICES ARE PLACEHOLDERS — one-way price per vehicle in site.currency (USD). */
export const routes: TransferRoute[] = [
  {
    id: 'ist-sultanahmet',
    kind: 'airport',
    from: ist,
    to: { en: 'Sultanahmet / Old City', zh: '苏丹艾哈迈德 / 老城' },
    durationMin: 50,
    prices: { van: 70, vip: 100, minibus: 120 },
  },
  {
    id: 'ist-taksim',
    kind: 'airport',
    from: ist,
    to: { en: 'Taksim / Beyoğlu', zh: '塔克西姆 / 贝伊奥卢' },
    durationMin: 45,
    prices: { van: 65, vip: 95, minibus: 115 },
  },
  {
    id: 'saw-sultanahmet',
    kind: 'airport',
    from: saw,
    to: { en: 'Sultanahmet / Old City', zh: '苏丹艾哈迈德 / 老城' },
    durationMin: 60,
    prices: { van: 75, vip: 105, minibus: 130 },
  },
  {
    id: 'cappadocia-airports',
    kind: 'airport',
    from: { en: 'Kayseri (ASR) or Nevşehir (NAV) Airport', zh: '开塞利（ASR）或内夫谢希尔（NAV）机场' },
    to: { en: 'Göreme / Uçhisar / Ürgüp hotels', zh: '格雷梅 / 乌奇希萨 / 于尔居普酒店' },
    durationMin: 60,
    prices: { van: 75, vip: 105, minibus: 125 },
  },
  {
    id: 'ayt-antalya',
    kind: 'airport',
    from: { en: 'Antalya Airport (AYT)', zh: '安塔利亚机场（AYT）' },
    to: { en: 'Antalya city / Kaleiçi', zh: '安塔利亚市区 / 卡莱伊奇' },
    durationMin: 25,
    prices: { van: 45, vip: 65, minibus: 80 },
  },
  {
    id: 'adb-kusadasi',
    kind: 'airport',
    from: { en: 'Izmir Airport (ADB)', zh: '伊兹密尔机场（ADB）' },
    to: { en: 'Kuşadası / Selçuk (Ephesus)', zh: '库沙达瑟 / 塞尔丘克（以弗所）' },
    durationMin: 60,
    prices: { van: 80, vip: 110, minibus: 140 },
  },
  {
    id: 'istanbul-bursa',
    kind: 'intercity',
    from: { en: 'Istanbul (any hotel)', zh: '伊斯坦布尔（任意酒店）' },
    to: { en: 'Bursa city centre', zh: '布尔萨市中心' },
    durationMin: 150,
    prices: { van: 210, vip: 265, minibus: 320 },
  },
  {
    id: 'istanbul-canakkale',
    kind: 'intercity',
    from: { en: 'Istanbul (any hotel)', zh: '伊斯坦布尔（任意酒店）' },
    to: { en: 'Çanakkale / Gallipoli', zh: '恰纳卡莱 / 加里波利' },
    durationMin: 270,
    prices: { van: 340, vip: 420, minibus: 495 },
  },
  {
    id: 'istanbul-port',
    kind: 'city',
    from: { en: 'Galataport cruise terminal', zh: '加拉塔港邮轮码头' },
    to: { en: 'Any Istanbul hotel', zh: '伊斯坦布尔任意酒店' },
    durationMin: 25,
    prices: { van: 50, vip: 70, minibus: 90 },
  },
];

/** Suggestions offered in the pickup / destination fields. */
export const locationSuggestions: L[] = [
  ist,
  saw,
  { en: 'Sultanahmet / Old City hotel', zh: '苏丹艾哈迈德 / 老城酒店' },
  { en: 'Taksim / Beyoğlu hotel', zh: '塔克西姆 / 贝伊奥卢酒店' },
  { en: 'Galataport cruise terminal', zh: '加拉塔港邮轮码头' },
  { en: 'Kayseri Airport (ASR)', zh: '开塞利机场（ASR）' },
  { en: 'Nevşehir Airport (NAV)', zh: '内夫谢希尔机场（NAV）' },
  { en: 'Göreme hotel (Cappadocia)', zh: '格雷梅酒店（卡帕多奇亚）' },
  { en: 'Antalya Airport (AYT)', zh: '安塔利亚机场（AYT）' },
  { en: 'Antalya city / Kaleiçi hotel', zh: '安塔利亚市区 / 卡莱伊奇酒店' },
  { en: 'Izmir Airport (ADB)', zh: '伊兹密尔机场（ADB）' },
  { en: 'Kuşadası hotel', zh: '库沙达瑟酒店' },
  { en: 'Bursa city centre', zh: '布尔萨市中心' },
  { en: 'Çanakkale city centre', zh: '恰纳卡莱市中心' },
];

export const getVehicle = (id: string) => vehicles.find((v) => v.id === id);
