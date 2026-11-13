import type { L } from '../i18n/languages';
import { pick, type Lang } from '../i18n/languages';

/**
 * Reusable phrases for "included", "not included" and "important information" lists.
 * Tours and activities refer to these by key, so each phrase is translated once.
 */
export const phrases: Record<string, L> = {
  // Included
  airportTransfers: { en: 'Arrival and departure airport transfers', zh: '抵离机场接送', de: 'Flughafentransfers bei Ankunft und Abreise', tr: 'Varış ve dönüş havalimanı transferleri' },
  hotelBreakfast: { en: 'Hotel accommodation with daily breakfast', zh: '酒店住宿含每日早餐', de: 'Hotelübernachtungen mit täglichem Frühstück', tr: 'Günlük kahvaltılı otel konaklaması' },
  mealsAsListed: { en: 'Meals as listed in the itinerary', zh: '行程中所列餐食', de: 'Mahlzeiten laut Reiseverlauf', tr: 'Programda belirtilen öğünler' },
  guide: { en: 'Professional licensed guide', zh: '专业持证导游', de: 'Professionelle lizenzierte Reiseleitung', tr: 'Profesyonel lisanslı rehber' },
  privateGuide: { en: 'Private licensed guide for your party', zh: '专属持证导游', de: 'Private lizenzierte Reiseleitung nur für Sie', tr: 'Size özel lisanslı rehber' },
  transport: { en: 'Air-conditioned vehicle for all touring', zh: '全程空调车辆', de: 'Klimatisiertes Fahrzeug für alle Ausflüge', tr: 'Tüm gezilerde klimalı araç' },
  privateTransport: { en: 'Private air-conditioned vehicle and driver', zh: '私人空调车辆及司机', de: 'Privates klimatisiertes Fahrzeug mit Fahrer', tr: 'Özel klimalı araç ve şoför' },
  entrances: { en: 'Entrance fees for sites in the itinerary', zh: '行程所列景点门票', de: 'Eintrittsgelder für die Sehenswürdigkeiten im Programm', tr: 'Programdaki ören yerleri giriş ücretleri' },
  domesticFlights: { en: 'Domestic flights in economy class', zh: '国内段经济舱机票', de: 'Inlandsflüge in der Economy Class', tr: 'Ekonomi sınıfı iç hat uçuşları' },
  hotelPickup: { en: 'Pickup and drop-off at central hotels', zh: '市中心酒店接送', de: 'Abholung und Rückfahrt von zentralen Hotels', tr: 'Merkezi otellerden alış ve bırakış' },
  lunch: { en: 'Lunch at a local restaurant', zh: '当地餐厅午餐', de: 'Mittagessen in einem lokalen Restaurant', tr: 'Yerel bir restoranda öğle yemeği' },
  support: { en: '24/7 assistance by phone and WhatsApp', zh: '24小时电话及 WhatsApp 协助', de: '24/7-Betreuung per Telefon und WhatsApp', tr: '7/24 telefon ve WhatsApp desteği' },
  water: { en: 'Bottled water in the vehicle', zh: '车上提供瓶装水', de: 'Wasser im Fahrzeug', tr: 'Araçta şişe su' },
  tastings: { en: 'All food and drink tastings', zh: '所有美食与饮品品尝', de: 'Alle Speisen und Getränke der Verkostung', tr: 'Tüm yiyecek ve içecek tadımları' },
  cruise: { en: 'Boat cruise ticket', zh: '游船船票', de: 'Ticket für die Bootsfahrt', tr: 'Tekne turu bileti' },
  refreshments: { en: 'Tea, coffee and soft drinks on board', zh: '船上提供茶、咖啡和软饮', de: 'Tee, Kaffee und Softdrinks an Bord', tr: 'Teknede çay, kahve ve meşrubat' },
  equipment: { en: 'All safety equipment and instruction', zh: '全套安全装备及指导', de: 'Komplette Sicherheitsausrüstung und Einweisung', tr: 'Tüm güvenlik ekipmanı ve eğitim' },
  insurance: { en: 'Activity insurance', zh: '活动保险', de: 'Aktivitätsversicherung', tr: 'Aktivite sigortası' },
  flightCertificate: { en: 'Flight certificate and celebration drink', zh: '飞行证书及庆祝饮品', de: 'Ballonfahrer-Zertifikat und Begrüßungsgetränk', tr: 'Uçuş sertifikası ve kutlama içeceği' },

  // Not included
  intlFlights: { en: 'International flights', zh: '国际机票', de: 'Internationale Flüge', tr: 'Uluslararası uçuşlar' },
  visa: { en: 'Visa fees (where required)', zh: '签证费（如需）', de: 'Visagebühren (falls erforderlich)', tr: 'Vize ücretleri (gerekirse)' },
  tips: { en: 'Tips for guide and driver', zh: '导游和司机小费', de: 'Trinkgelder für Reiseleitung und Fahrer', tr: 'Rehber ve şoför bahşişleri' },
  drinks: { en: 'Drinks with meals', zh: '餐食中的饮料', de: 'Getränke zu den Mahlzeiten', tr: 'Yemeklerdeki içecekler' },
  optional: { en: 'Optional excursions and personal expenses', zh: '自费项目及个人消费', de: 'Fakultative Ausflüge und persönliche Ausgaben', tr: 'İsteğe bağlı turlar ve kişisel harcamalar' },
  balloon: { en: 'Hot air balloon flight (optional, bookable with us)', zh: '热气球飞行（自选，可通过我们预订）', de: 'Heißluftballonfahrt (optional, über uns buchbar)', tr: 'Sıcak hava balonu uçuşu (isteğe bağlı, bizden rezerve edilebilir)' },
  cityTax: { en: 'Hotel city tax, payable locally', zh: '酒店城市税（当地支付）', de: 'Kurtaxe der Hotels, vor Ort zahlbar', tr: 'Konaklama vergisi (otelde ödenir)' },
  travelInsurance: { en: 'Travel insurance', zh: '旅游保险', de: 'Reiseversicherung', tr: 'Seyahat sigortası' },
  dinner: { en: 'Dinner', zh: '晚餐', de: 'Abendessen', tr: 'Akşam yemeği' },
  domesticFlightsExcluded: { en: 'Flights to and from Cappadocia (we can book them for you)', zh: '往返卡帕多奇亚的机票（可代为预订）', de: 'Flüge nach und von Kappadokien (buchbar über uns)', tr: 'Kapadokya gidiş-dönüş uçuşları (sizin için ayırtabiliriz)' },
  entrancesExcluded: { en: 'Museum and site entrance fees (paid locally, your guide arranges tickets)', zh: '博物馆及景点门票（当地支付，导游协助购票）', de: 'Eintrittsgelder (vor Ort zu zahlen, die Reiseleitung besorgt die Tickets)', tr: 'Müze ve ören yeri giriş ücretleri (yerinde ödenir, biletleri rehberiniz ayarlar)' },

  // Important
  passport: { en: 'Passports must be valid for at least 6 months from your arrival date.', zh: '护照有效期自入境之日起须至少6个月。', de: 'Reisepässe müssen ab Ankunft noch mindestens 6 Monate gültig sein.', tr: 'Pasaportların varış tarihinden itibaren en az 6 ay geçerli olması gerekir.' },
  orderMayChange: { en: 'The order of visits may change for operational or weather reasons; all listed visits are kept.', zh: '因运营或天气原因，参观顺序可能调整，但所列景点均会安排。', de: 'Die Reihenfolge der Besichtigungen kann sich aus organisatorischen oder Wettergründen ändern; alle Programmpunkte bleiben erhalten.', tr: 'Ziyaret sırası operasyonel veya hava koşullarına bağlı nedenlerle değişebilir; programdaki tüm ziyaretler korunur.' },
  dressCode: { en: 'Shoulders and knees must be covered in mosques; women need a headscarf.', zh: '进入清真寺须遮盖肩膀和膝盖，女士需佩戴头巾。', de: 'In Moscheen müssen Schultern und Knie bedeckt sein; Frauen benötigen ein Kopftuch.', tr: 'Camilerde omuzlar ve dizler kapalı olmalı; kadınların başörtüsü takması gerekir.' },
  mosqueClosures: { en: 'Mosques close to visitors during prayer times and Friday midday prayers.', zh: '礼拜时间及周五午间聚礼期间，清真寺不对游客开放。', de: 'Moscheen sind während der Gebetszeiten und zum Freitagsgebet für Besucher geschlossen.', tr: 'Camiler namaz vakitlerinde ve cuma namazında ziyarete kapalıdır.' },
  walking: { en: 'Comfortable walking shoes are recommended — ancient sites have uneven ground.', zh: '建议穿舒适的步行鞋——古迹地面不平。', de: 'Bequeme Schuhe werden empfohlen — antike Stätten haben unebenen Boden.', tr: 'Rahat yürüyüş ayakkabısı önerilir — antik alanlarda zemin engebelidir.' },
  balloonWeather: { en: 'Balloon flights depend on weather and are confirmed the evening before; if cancelled, you receive a full refund.', zh: '热气球飞行视天气而定，于前一晚确认；如取消将全额退款。', de: 'Ballonfahrten sind wetterabhängig und werden am Vorabend bestätigt; bei Absage erhalten Sie den vollen Betrag zurück.', tr: 'Balon uçuşları hava durumuna bağlıdır ve bir önceki akşam teyit edilir; iptal halinde ücretin tamamı iade edilir.' },
  childrenPolicy: { en: 'Children under 2 travel free; ages 2–11 receive a discount when sharing with two adults.', zh: '2岁以下儿童免费；2–11岁儿童与两名成人同住可享优惠。', de: 'Kinder unter 2 Jahren reisen kostenlos; 2–11-Jährige erhalten im Zimmer mit zwei Erwachsenen eine Ermäßigung.', tr: '2 yaş altı çocuklar ücretsizdir; 2–11 yaş arası çocuklar iki yetişkinle aynı odada kalırsa indirim alır.' },
  minAge: { en: 'Minimum age 12; participants must be in good health.', zh: '最低年龄12岁；参与者须身体健康。', de: 'Mindestalter 12 Jahre; gute Gesundheit erforderlich.', tr: 'En küçük yaş 12; katılımcıların sağlıklı olması gerekir.' },
  priceSeason: { en: 'Prices vary by season and hotel category; we confirm the exact price in our quote.', zh: '价格因季节和酒店档次而异，我们会在报价中确认具体价格。', de: 'Die Preise variieren je nach Saison und Hotelkategorie; den genauen Preis bestätigen wir im Angebot.', tr: 'Fiyatlar sezona ve otel kategorisine göre değişir; kesin fiyatı teklifimizde teyit ederiz.' },
};

/** Resolve a phrase key or an inline localised string. */
export function phrase(item: string | L, lang: Lang): string {
  if (typeof item === 'string') return pick(phrases[item], lang) || item;
  return pick(item, lang);
}
