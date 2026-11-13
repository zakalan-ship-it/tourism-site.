import type { TransferRoute, Vehicle } from './types';
import type { L } from '../i18n/languages';

export const vehicles: Vehicle[] = [
  {
    id: 'sedan',
    icon: 'sedan',
    models: 'Mercedes E-Class, Skoda Superb or similar',
    passengers: 3,
    luggage: 3,
    name: { en: 'Business sedan', zh: '商务轿车' },
    features: [
      { en: 'Ideal for couples and business travellers', zh: '适合情侣和商务旅客' },
      { en: 'Wi-Fi and bottled water', zh: 'Wi-Fi 与瓶装水' },
    ],
  },
  {
    id: 'van',
    icon: 'van',
    models: 'Mercedes Vito, VW Transporter or similar',
    passengers: 6,
    luggage: 6,
    name: { en: 'Minivan', zh: '商务面包车' },
    features: [
      { en: 'Great for families and small groups', zh: '适合家庭和小团体' },
      { en: 'Child seats on request', zh: '可按需提供儿童座椅' },
    ],
  },
  {
    id: 'vip',
    icon: 'vip',
    models: 'Mercedes Vito VIP / V-Class or similar',
    passengers: 6,
    luggage: 5,
    name: { en: 'VIP van', zh: 'VIP 商务车' },
    features: [
      { en: 'Leather lounge seats and privacy partition', zh: '真皮座椅及私密隔断' },
      { en: 'USB charging, Wi-Fi and refreshments', zh: 'USB 充电、Wi-Fi 和茶点' },
    ],
  },
  {
    id: 'minibus',
    icon: 'minibus',
    models: 'Mercedes Sprinter or similar',
    passengers: 14,
    luggage: 14,
    name: { en: 'Minibus', zh: '中型巴士' },
    features: [
      { en: 'For groups and extended families', zh: '适合团体和大家庭' },
      { en: 'Large luggage compartment', zh: '大型行李舱' },
    ],
  },
  {
    id: 'coach',
    icon: 'coach',
    models: 'Midi-coach or coach, 27–46 seats',
    passengers: 46,
    luggage: 46,
    name: { en: 'Coach', zh: '大巴' },
    features: [
      { en: 'Tour groups, events and MICE', zh: '旅行团、活动和会奖旅游' },
      { en: 'Microphone and air-conditioning', zh: '配备麦克风和空调' },
    ],
  },
];

const ist: L = { en: 'Istanbul Airport (IST)', zh: '伊斯坦布尔机场（IST）' };
const saw: L = { en: 'Sabiha Gökçen Airport (SAW)', zh: '萨比哈·格克琴机场（SAW）' };

/** PRICES ARE PLACEHOLDERS — one-way price per vehicle in site.currency. */
export const routes: TransferRoute[] = [
  {
    id: 'ist-sultanahmet',
    kind: 'airport',
    from: ist,
    to: { en: 'Sultanahmet / Old City', zh: '苏丹艾哈迈德 / 老城' },
    durationMin: 50,
    prices: { sedan: 55, van: 65, vip: 90, minibus: 110 },
  },
  {
    id: 'ist-taksim',
    kind: 'airport',
    from: ist,
    to: { en: 'Taksim / Beyoğlu', zh: '塔克西姆 / 贝伊奥卢' },
    durationMin: 45,
    prices: { sedan: 50, van: 60, vip: 85, minibus: 105 },
  },
  {
    id: 'saw-sultanahmet',
    kind: 'airport',
    from: saw,
    to: { en: 'Sultanahmet / Old City', zh: '苏丹艾哈迈德 / 老城' },
    durationMin: 60,
    prices: { sedan: 60, van: 70, vip: 95, minibus: 120 },
  },
  {
    id: 'cappadocia-airports',
    kind: 'airport',
    from: { en: 'Kayseri (ASR) or Nevşehir (NAV) Airport', zh: '开塞利（ASR）或内夫谢希尔（NAV）机场' },
    to: { en: 'Göreme / Uçhisar / Ürgüp hotels', zh: '格雷梅 / 乌奇希萨 / 于尔居普酒店' },
    durationMin: 60,
    prices: { sedan: 60, van: 70, vip: 95, minibus: 115 },
  },
  {
    id: 'ayt-antalya',
    kind: 'airport',
    from: { en: 'Antalya Airport (AYT)', zh: '安塔利亚机场（AYT）' },
    to: { en: 'Antalya city / Kaleiçi', zh: '安塔利亚市区 / 卡莱伊奇' },
    durationMin: 25,
    prices: { sedan: 35, van: 40, vip: 60, minibus: 75 },
  },
  {
    id: 'adb-kusadasi',
    kind: 'airport',
    from: { en: 'Izmir Airport (ADB)', zh: '伊兹密尔机场（ADB）' },
    to: { en: 'Kuşadası / Selçuk (Ephesus)', zh: '库沙达瑟 / 塞尔丘克（以弗所）' },
    durationMin: 60,
    prices: { sedan: 65, van: 75, vip: 100, minibus: 125 },
  },
  {
    id: 'istanbul-bursa',
    kind: 'intercity',
    from: { en: 'Istanbul (any hotel)', zh: '伊斯坦布尔（任意酒店）' },
    to: { en: 'Bursa city centre', zh: '布尔萨市中心' },
    durationMin: 150,
    prices: { sedan: 170, van: 190, vip: 240, minibus: 290 },
  },
  {
    id: 'istanbul-canakkale',
    kind: 'intercity',
    from: { en: 'Istanbul (any hotel)', zh: '伊斯坦布尔（任意酒店）' },
    to: { en: 'Çanakkale / Gallipoli', zh: '恰纳卡莱 / 加里波利' },
    durationMin: 270,
    prices: { sedan: 280, van: 310, vip: 380, minibus: 450 },
  },
  {
    id: 'istanbul-port',
    kind: 'city',
    from: { en: 'Galataport cruise terminal', zh: '加拉塔港邮轮码头' },
    to: { en: 'Any Istanbul hotel', zh: '伊斯坦布尔任意酒店' },
    durationMin: 25,
    prices: { sedan: 35, van: 45, vip: 65, minibus: 80 },
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
