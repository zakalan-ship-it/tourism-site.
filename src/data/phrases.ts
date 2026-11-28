import type { L } from '../i18n/languages';
import { pick, type Lang } from '../i18n/languages';

/**
 * Reusable phrases for "included", "not included" and "important information" lists.
 * Tours and activities refer to these by key, so each phrase is translated once.
 */
export const phrases: Record<string, L> = {
  // Included
  airportTransfers: { en: 'Arrival and departure airport transfers', zh: '抵离机场接送' },
  hotelBreakfast: { en: 'Hotel accommodation with daily breakfast', zh: '酒店住宿含每日早餐' },
  mealsAsListed: { en: 'Meals as listed in the itinerary', zh: '行程中所列餐食' },
  guide: { en: 'Professional licensed guide', zh: '专业持证导游' },
  privateGuide: { en: 'Private licensed guide for your party', zh: '专属持证导游' },
  transport: { en: 'Air-conditioned vehicle for all touring', zh: '全程空调车辆' },
  privateTransport: { en: 'Private air-conditioned vehicle and driver', zh: '私人空调车辆及司机' },
  entrances: { en: 'Entrance fees for sites in the itinerary', zh: '行程所列景点门票' },
  domesticFlights: { en: 'Domestic flights in economy class', zh: '国内段经济舱机票' },
  hotelPickup: { en: 'Pickup and drop-off at central hotels', zh: '市中心酒店接送' },
  lunch: { en: 'Lunch at a local restaurant', zh: '当地餐厅午餐' },
  support: { en: '24/7 assistance by phone and WhatsApp', zh: '24小时电话及 WhatsApp 协助' },
  water: { en: 'Bottled water in the vehicle', zh: '车上提供瓶装水' },
  tastings: { en: 'All food and drink tastings', zh: '所有美食与饮品品尝' },
  cruise: { en: 'Boat cruise ticket', zh: '游船船票' },
  refreshments: { en: 'Tea, coffee and soft drinks on board', zh: '船上提供茶、咖啡和软饮' },
  equipment: { en: 'All safety equipment and instruction', zh: '全套安全装备及指导' },
  insurance: { en: 'Activity insurance', zh: '活动保险' },
  flightCertificate: { en: 'Flight certificate and celebration drink', zh: '飞行证书及庆祝饮品' },

  guideOnly8h: { en: 'Your private licensed Mandarin-speaking guide (Mesut or Özlem) for about 8 hours', zh: '专属持证中文导游（Mesut 或 Özlem）全程讲解，约8小时' },
  guideOnly2d: { en: 'Your private licensed Mandarin-speaking guide (Mesut or Özlem) for 2 days, about 8 hours a day', zh: '专属持证中文导游（Mesut 或 Özlem）两天全程讲解，每天约8小时' },
  ticketAdvice: { en: 'Advice on buying entrance tickets online in advance, and timing to avoid the longest queues', zh: '协助提前在线购买门票，并合理安排时间避开长队' },
  transportGuidance: { en: 'Your guide travels with you by tram, ferry and on foot', zh: '导游陪同您乘坐电车、渡轮并步行游览' },
  restaurantTips: { en: 'Recommendations for local restaurants — no tourist-factory restaurants', zh: '推荐地道本地餐厅——不去团餐“工厂”餐厅' },
  guideDay: { en: 'Your private licensed guide (Mesut or Özlem) in English or Chinese, about 8 hours', zh: '专属持证导游（Mesut 或 Özlem），中英文讲解，约8小时' },
  carDriver: { en: 'Private air-conditioned car with driver for the whole day', zh: '全天私人空调车辆及司机' },
  hotelPickupDrop: { en: 'Pickup and drop-off at your hotel in central Istanbul', zh: '伊斯坦布尔市中心酒店接送' },
  // Not included
  intlFlights: { en: 'International flights', zh: '国际机票' },
  visa: { en: 'Visa fees (where required)', zh: '签证费（如需）' },
  tips: { en: 'Tips for guide and driver', zh: '导游和司机小费' },
  drinks: { en: 'Drinks with meals', zh: '餐食中的饮料' },
  optional: { en: 'Optional excursions and personal expenses', zh: '自费项目及个人消费' },
  balloon: { en: 'Hot air balloon flight (optional, bookable with us)', zh: '热气球飞行（自选，可通过我们预订）' },
  cityTax: { en: 'Hotel city tax, payable locally', zh: '酒店城市税（当地支付）' },
  travelInsurance: { en: 'Travel insurance', zh: '旅游保险' },
  dinner: { en: 'Dinner', zh: '晚餐' },
  domesticFlightsExcluded: { en: 'Flights to and from Cappadocia (we can book them for you)', zh: '往返卡帕多奇亚的机票（可代为预订）' },
  entrancesExcluded: { en: 'Museum and site entrance fees (paid locally, your guide arranges tickets)', zh: '博物馆及景点门票（当地支付，导游协助购票）' },

  entranceTickets: { en: 'Entrance tickets (bought by you; your guide helps you buy them online in advance)', zh: '景点门票（由您自行购买，导游协助提前在线购票）' },
  guideTips: { en: 'Tips for your guide (optional)', zh: '导游小费（自愿）' },
  mealsExcluded: { en: 'Meals and drinks', zh: '餐饮' },
  publicTransport: { en: 'Public transport fares (tram, ferry; about $1–2 per ride) and taxis', zh: '公共交通费用（电车、渡轮，每次约1–2美元）及出租车费' },
  extraGuests: { en: 'Groups of more than 6, or more than 8 hours: price on request', zh: '超过6人或超过8小时：价格另询' },
  cruiseTicket: { en: 'Bosphorus cruise ticket (about $10–25 per person, depending on the boat)', zh: '博斯普鲁斯游船船票（每人约10–25美元，视船型而定）' },
  pierreLotiCable: { en: 'Pierre Loti cable car (optional, a few dollars)', zh: '皮埃尔·洛蒂山缆车（自选，费用很低）' },
  bigGroups: { en: 'Groups of more than 6 or extra hours: price on request', zh: '超过6人或超时：价格另询' },
  // Important
  passport: { en: 'Passports must be valid for at least 6 months from your arrival date.', zh: '护照有效期自入境之日起须至少6个月。' },
  orderMayChange: { en: 'The order of visits may change for operational or weather reasons; all listed visits are kept.', zh: '因运营或天气原因，参观顺序可能调整，但所列景点均会安排。' },
  dressCode: { en: 'Shoulders and knees must be covered in mosques; women need a headscarf.', zh: '进入清真寺须遮盖肩膀和膝盖，女士需佩戴头巾。' },
  mosqueClosures: { en: 'Mosques close to visitors during prayer times and Friday midday prayers.', zh: '礼拜时间及周五午间聚礼期间，清真寺不对游客开放。' },
  walking: { en: 'Comfortable walking shoes are recommended — ancient sites have uneven ground.', zh: '建议穿舒适的步行鞋——古迹地面不平。' },
  balloonWeather: { en: 'Balloon flights depend on weather and are confirmed the evening before; if cancelled, you receive a full refund.', zh: '热气球飞行视天气而定，于前一晚确认；如取消将全额退款。' },
  childrenPolicy: { en: 'Children under 2 travel free; ages 2–11 receive a discount when sharing with two adults.', zh: '2岁以下儿童免费；2–11岁儿童与两名成人同住可享优惠。' },
  minAge: { en: 'Minimum age 12; participants must be in good health.', zh: '最低年龄12岁；参与者须身体健康。' },
  priceSeason: { en: 'Prices vary by season and hotel category; we confirm the exact price in our quote.', zh: '价格因季节和酒店档次而异，我们会在报价中确认具体价格。' },
  closedTopkapi: { en: 'Topkapı Palace is closed on Tuesdays and the Grand Bazaar on Sundays — choose Monday or Wednesday to Saturday for this day.', zh: '托普卡帕宫周二闭馆，大巴扎周日休市——此日行程请选择周一或周三至周六。' },
  closedDolmabahce: { en: 'Dolmabahçe Palace is closed on Mondays, so day 2 runs Tuesday to Sunday.', zh: '多尔玛巴赫切宫周一闭馆，第二天行程安排在周二至周日。' },
  hagiaSophiaVisit: { en: 'Hagia Sophia is an active mosque: visitors enter the upper gallery with a paid ticket and it may close at prayer times.', zh: '圣索菲亚现为清真寺：游客需购票进入二楼参观廊，礼拜时间可能暂停开放。' },
  closedDolmabahceDay: { en: 'Dolmabahçe Palace is closed on Mondays — this tour runs Tuesday to Sunday.', zh: '多尔玛巴赫切宫周一闭馆——此行程安排在周二至周日。' },
  expressPace: { en: 'An express day: we visit Hagia Sophia and the Basilica Cistern early to beat the queues, and keep each stop focused.', zh: '紧凑一日游：一早参观圣索菲亚和地下水宫以避开排队，每个景点重点游览。' },
};

/** Resolve a phrase key or an inline localised string. */
export function phrase(item: string | L, lang: Lang): string {
  if (typeof item === 'string') return pick(phrases[item], lang) || item;
  return pick(item, lang);
}
