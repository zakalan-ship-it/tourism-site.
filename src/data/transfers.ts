import type { TransferRoute, Vehicle } from './types';
import type { L } from '../i18n/languages';

export const vehicles: Vehicle[] = [
  {
    id: 'sedan',
    icon: 'sedan',
    models: 'Mercedes E-Class, Skoda Superb or similar',
    passengers: 3,
    luggage: 3,
    name: { en: 'Business sedan', zh: '商务轿车', de: 'Business-Limousine', tr: 'Business sedan' },
    features: [
      { en: 'Ideal for couples and business travellers', zh: '适合情侣和商务旅客', de: 'Ideal für Paare und Geschäftsreisende', tr: 'Çiftler ve iş seyahatleri için ideal' },
      { en: 'Wi-Fi and bottled water', zh: 'Wi-Fi 与瓶装水', de: 'WLAN und Wasser', tr: 'Wi-Fi ve şişe su' },
    ],
  },
  {
    id: 'van',
    icon: 'van',
    models: 'Mercedes Vito, VW Transporter or similar',
    passengers: 6,
    luggage: 6,
    name: { en: 'Minivan', zh: '商务面包车', de: 'Minivan', tr: 'Minivan' },
    features: [
      { en: 'Great for families and small groups', zh: '适合家庭和小团体', de: 'Ideal für Familien und kleine Gruppen', tr: 'Aileler ve küçük gruplar için ideal' },
      { en: 'Child seats on request', zh: '可按需提供儿童座椅', de: 'Kindersitze auf Anfrage', tr: 'Talep üzerine çocuk koltuğu' },
    ],
  },
  {
    id: 'vip',
    icon: 'vip',
    models: 'Mercedes Vito VIP / V-Class or similar',
    passengers: 6,
    luggage: 5,
    name: { en: 'VIP van', zh: 'VIP 商务车', de: 'VIP-Van', tr: 'VIP minivan' },
    features: [
      { en: 'Leather lounge seats and privacy partition', zh: '真皮座椅及私密隔断', de: 'Ledersitze und Sichtschutz', tr: 'Deri koltuklar ve gizlilik bölmesi' },
      { en: 'USB charging, Wi-Fi and refreshments', zh: 'USB 充电、Wi-Fi 和茶点', de: 'USB-Ladeanschlüsse, WLAN und Erfrischungen', tr: 'USB şarj, Wi-Fi ve ikramlar' },
    ],
  },
  {
    id: 'minibus',
    icon: 'minibus',
    models: 'Mercedes Sprinter or similar',
    passengers: 14,
    luggage: 14,
    name: { en: 'Minibus', zh: '中型巴士', de: 'Kleinbus', tr: 'Minibüs' },
    features: [
      { en: 'For groups and extended families', zh: '适合团体和大家庭', de: 'Für Gruppen und Großfamilien', tr: 'Gruplar ve kalabalık aileler için' },
      { en: 'Large luggage compartment', zh: '大型行李舱', de: 'Großer Gepäckraum', tr: 'Geniş bagaj bölmesi' },
    ],
  },
  {
    id: 'coach',
    icon: 'coach',
    models: 'Midi-coach or coach, 27–46 seats',
    passengers: 46,
    luggage: 46,
    name: { en: 'Coach', zh: '大巴', de: 'Reisebus', tr: 'Otobüs' },
    features: [
      { en: 'Tour groups, events and MICE', zh: '旅行团、活动和会奖旅游', de: 'Reisegruppen, Events und MICE', tr: 'Tur grupları, etkinlikler ve MICE' },
      { en: 'Microphone and air-conditioning', zh: '配备麦克风和空调', de: 'Mikrofon und Klimaanlage', tr: 'Mikrofon ve klima' },
    ],
  },
];

const ist: L = { en: 'Istanbul Airport (IST)', zh: '伊斯坦布尔机场（IST）', de: 'Flughafen Istanbul (IST)', tr: 'İstanbul Havalimanı (IST)' };
const saw: L = { en: 'Sabiha Gökçen Airport (SAW)', zh: '萨比哈·格克琴机场（SAW）', de: 'Flughafen Sabiha Gökçen (SAW)', tr: 'Sabiha Gökçen Havalimanı (SAW)' };

/** PRICES ARE PLACEHOLDERS — one-way price per vehicle in site.currency. */
export const routes: TransferRoute[] = [
  {
    id: 'ist-sultanahmet',
    kind: 'airport',
    from: ist,
    to: { en: 'Sultanahmet / Old City', zh: '苏丹艾哈迈德 / 老城', de: 'Sultanahmet / Altstadt', tr: 'Sultanahmet / Tarihi Yarımada' },
    durationMin: 50,
    prices: { sedan: 55, van: 65, vip: 90, minibus: 110 },
  },
  {
    id: 'ist-taksim',
    kind: 'airport',
    from: ist,
    to: { en: 'Taksim / Beyoğlu', zh: '塔克西姆 / 贝伊奥卢', de: 'Taksim / Beyoğlu', tr: 'Taksim / Beyoğlu' },
    durationMin: 45,
    prices: { sedan: 50, van: 60, vip: 85, minibus: 105 },
  },
  {
    id: 'saw-sultanahmet',
    kind: 'airport',
    from: saw,
    to: { en: 'Sultanahmet / Old City', zh: '苏丹艾哈迈德 / 老城', de: 'Sultanahmet / Altstadt', tr: 'Sultanahmet / Tarihi Yarımada' },
    durationMin: 60,
    prices: { sedan: 60, van: 70, vip: 95, minibus: 120 },
  },
  {
    id: 'cappadocia-airports',
    kind: 'airport',
    from: { en: 'Kayseri (ASR) or Nevşehir (NAV) Airport', zh: '开塞利（ASR）或内夫谢希尔（NAV）机场', de: 'Flughafen Kayseri (ASR) oder Nevşehir (NAV)', tr: 'Kayseri (ASR) veya Nevşehir (NAV) Havalimanı' },
    to: { en: 'Göreme / Uçhisar / Ürgüp hotels', zh: '格雷梅 / 乌奇希萨 / 于尔居普酒店', de: 'Hotels in Göreme / Uçhisar / Ürgüp', tr: 'Göreme / Uçhisar / Ürgüp otelleri' },
    durationMin: 60,
    prices: { sedan: 60, van: 70, vip: 95, minibus: 115 },
  },
  {
    id: 'ayt-antalya',
    kind: 'airport',
    from: { en: 'Antalya Airport (AYT)', zh: '安塔利亚机场（AYT）', de: 'Flughafen Antalya (AYT)', tr: 'Antalya Havalimanı (AYT)' },
    to: { en: 'Antalya city / Kaleiçi', zh: '安塔利亚市区 / 卡莱伊奇', de: 'Antalya Stadt / Kaleiçi', tr: 'Antalya merkez / Kaleiçi' },
    durationMin: 25,
    prices: { sedan: 35, van: 40, vip: 60, minibus: 75 },
  },
  {
    id: 'adb-kusadasi',
    kind: 'airport',
    from: { en: 'Izmir Airport (ADB)', zh: '伊兹密尔机场（ADB）', de: 'Flughafen Izmir (ADB)', tr: 'İzmir Havalimanı (ADB)' },
    to: { en: 'Kuşadası / Selçuk (Ephesus)', zh: '库沙达瑟 / 塞尔丘克（以弗所）', de: 'Kuşadası / Selçuk (Ephesos)', tr: 'Kuşadası / Selçuk (Efes)' },
    durationMin: 60,
    prices: { sedan: 65, van: 75, vip: 100, minibus: 125 },
  },
  {
    id: 'istanbul-bursa',
    kind: 'intercity',
    from: { en: 'Istanbul (any hotel)', zh: '伊斯坦布尔（任意酒店）', de: 'Istanbul (beliebiges Hotel)', tr: 'İstanbul (herhangi bir otel)' },
    to: { en: 'Bursa city centre', zh: '布尔萨市中心', de: 'Bursa Zentrum', tr: 'Bursa merkez' },
    durationMin: 150,
    prices: { sedan: 170, van: 190, vip: 240, minibus: 290 },
  },
  {
    id: 'istanbul-canakkale',
    kind: 'intercity',
    from: { en: 'Istanbul (any hotel)', zh: '伊斯坦布尔（任意酒店）', de: 'Istanbul (beliebiges Hotel)', tr: 'İstanbul (herhangi bir otel)' },
    to: { en: 'Çanakkale / Gallipoli', zh: '恰纳卡莱 / 加里波利', de: 'Çanakkale / Gallipoli', tr: 'Çanakkale / Gelibolu' },
    durationMin: 270,
    prices: { sedan: 280, van: 310, vip: 380, minibus: 450 },
  },
  {
    id: 'istanbul-port',
    kind: 'city',
    from: { en: 'Galataport cruise terminal', zh: '加拉塔港邮轮码头', de: 'Kreuzfahrtterminal Galataport', tr: 'Galataport kruvaziyer terminali' },
    to: { en: 'Any Istanbul hotel', zh: '伊斯坦布尔任意酒店', de: 'Beliebiges Hotel in Istanbul', tr: 'İstanbul’da herhangi bir otel' },
    durationMin: 25,
    prices: { sedan: 35, van: 45, vip: 65, minibus: 80 },
  },
];

/** Suggestions offered in the pickup / destination fields. */
export const locationSuggestions: L[] = [
  ist,
  saw,
  { en: 'Sultanahmet / Old City hotel', zh: '苏丹艾哈迈德 / 老城酒店', de: 'Hotel in Sultanahmet / Altstadt', tr: 'Sultanahmet / Tarihi Yarımada oteli' },
  { en: 'Taksim / Beyoğlu hotel', zh: '塔克西姆 / 贝伊奥卢酒店', de: 'Hotel in Taksim / Beyoğlu', tr: 'Taksim / Beyoğlu oteli' },
  { en: 'Galataport cruise terminal', zh: '加拉塔港邮轮码头', de: 'Kreuzfahrtterminal Galataport', tr: 'Galataport kruvaziyer terminali' },
  { en: 'Kayseri Airport (ASR)', zh: '开塞利机场（ASR）', de: 'Flughafen Kayseri (ASR)', tr: 'Kayseri Havalimanı (ASR)' },
  { en: 'Nevşehir Airport (NAV)', zh: '内夫谢希尔机场（NAV）', de: 'Flughafen Nevşehir (NAV)', tr: 'Nevşehir Havalimanı (NAV)' },
  { en: 'Göreme hotel (Cappadocia)', zh: '格雷梅酒店（卡帕多奇亚）', de: 'Hotel in Göreme (Kappadokien)', tr: 'Göreme oteli (Kapadokya)' },
  { en: 'Antalya Airport (AYT)', zh: '安塔利亚机场（AYT）', de: 'Flughafen Antalya (AYT)', tr: 'Antalya Havalimanı (AYT)' },
  { en: 'Antalya city / Kaleiçi hotel', zh: '安塔利亚市区 / 卡莱伊奇酒店', de: 'Hotel in Antalya / Kaleiçi', tr: 'Antalya merkez / Kaleiçi oteli' },
  { en: 'Izmir Airport (ADB)', zh: '伊兹密尔机场（ADB）', de: 'Flughafen Izmir (ADB)', tr: 'İzmir Havalimanı (ADB)' },
  { en: 'Kuşadası hotel', zh: '库沙达瑟酒店', de: 'Hotel in Kuşadası', tr: 'Kuşadası oteli' },
  { en: 'Bursa city centre', zh: '布尔萨市中心', de: 'Bursa Zentrum', tr: 'Bursa merkez' },
  { en: 'Çanakkale city centre', zh: '恰纳卡莱市中心', de: 'Çanakkale Zentrum', tr: 'Çanakkale merkez' },
];

export const getVehicle = (id: string) => vehicles.find((v) => v.id === id);
