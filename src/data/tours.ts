import type { Tour } from './types';

/**
 * PRICES ARE PLACEHOLDERS based on 2026 market benchmarks (private guided day ≈ €200–260 per group,
 * multi-day private touring ≈ €180–300 per person per day). Replace with your own rates.
 * To add a tour, copy one object below. Its card, detail page and search entry are
 * generated automatically in every language.
 */
export const tours: Tour[] = [
  {
    slug: 'istanbul-highlights-4-days',
    featured: true,
    category: 'cultural',
    type: 'group',
    days: 4,
    nights: 3,
    priceFrom: 790,
    maxGroup: 10,
    destinations: ['istanbul'],
    departures: { from: '2026-11-15', to: '2027-12-20' },
    image: 'istanbul-blue-mosque',
    gallery: ['istanbul-hagia-sophia', 'bosphorus', 'grand-bazaar'],
    offer: { discount: 10, validUntil: '2027-02-28' },
    title: { en: 'Istanbul Highlights', zh: '伊斯坦布尔精华游' },
    summary: {
      en: 'Hagia Sophia, Topkapı Palace, a Bosphorus cruise and the bazaars in four relaxed days.',
      zh: '四天轻松游览圣索菲亚大教堂、托普卡帕宫、博斯普鲁斯游船和各大集市。',
    },
    overview: {
      en: 'The perfect first visit to Istanbul. Stay in the heart of the old city and explore its Byzantine and Ottoman landmarks with an expert guide, cruise between Europe and Asia, and keep a free afternoon for the bazaars or a hammam.',
      zh: '初访伊斯坦布尔的理想之选。入住老城中心，在专业导游带领下探访拜占庭与奥斯曼地标，乘船穿行于欧亚之间，并留出一个自由的下午逛集市或体验土耳其浴。',
    },
    highlights: [
      { en: 'Hagia Sophia and the Blue Mosque', zh: '圣索菲亚大教堂与蓝色清真寺' },
      { en: 'Topkapı Palace and Basilica Cistern', zh: '托普卡帕宫与地下水宫' },
      { en: 'Bosphorus cruise between two continents', zh: '横跨两大洲的博斯普鲁斯游船' },
      { en: 'Grand Bazaar and Spice Bazaar', zh: '大巴扎与香料市场' },
    ],
    itinerary: [
      {
        title: { en: 'Arrival in Istanbul', zh: '抵达伊斯坦布尔' },
        text: {
          en: 'Our driver meets you at the airport and takes you to your hotel in the old city. The rest of the day is free — a stroll to the Hippodrome at sunset is a lovely start.',
          zh: '司机在机场迎接并送您前往老城酒店。其余时间自由活动——日落时漫步至竞技场广场是个美好的开始。',
        },
      },
      {
        title: { en: 'Old City: Hagia Sophia, Blue Mosque & Topkapı', zh: '老城：圣索菲亚、蓝色清真寺与托普卡帕宫' },
        text: {
          en: 'A full day with your guide: Hagia Sophia, the Blue Mosque, the Hippodrome, the Basilica Cistern and Topkapı Palace with its treasury. Lunch at a traditional restaurant.',
          zh: '与导游共度一整天：圣索菲亚大教堂、蓝色清真寺、竞技场广场、地下水宫以及托普卡帕宫及其珍宝馆。在传统餐厅享用午餐。',
        },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Bosphorus cruise & Spice Bazaar', zh: '博斯普鲁斯游船与香料市场' },
        text: {
          en: 'Morning visit to the Spice Bazaar and the Süleymaniye Mosque, then a cruise along the Bosphorus past palaces, fortresses and wooden mansions. Free afternoon for the Grand Bazaar.',
          zh: '上午参观香料市场和苏莱曼尼耶清真寺，随后乘船游览博斯普鲁斯海峡，沿途欣赏宫殿、城堡和木制别墅。下午自由逛大巴扎。',
        },
        meals: ['B'],
      },
      {
        title: { en: 'Departure', zh: '离开' },
        text: {
          en: 'Breakfast and free time until your private transfer to the airport.',
          zh: '早餐后自由活动，随后专车送往机场。',
        },
        meals: ['B'],
      },
    ],
    included: ['airportTransfers', 'hotelBreakfast', 'mealsAsListed', 'guide', 'transport', 'entrances', 'cruise', 'support'],
    excluded: ['intlFlights', 'visa', 'tips', 'drinks', 'optional', 'cityTax'],
    hotels: [
      { city: 'istanbul', hotel: { en: 'Boutique 4★ hotel in Sultanahmet, or similar', zh: '苏丹艾哈迈德区四星精品酒店或同级' } },
    ],
    important: ['passport', 'dressCode', 'mosqueClosures', 'priceSeason'],
  },
  {
    slug: 'istanbul-cappadocia-6-days',
    featured: true,
    category: 'cultural',
    type: 'group',
    days: 6,
    nights: 5,
    priceFrom: 1390,
    maxGroup: 10,
    destinations: ['istanbul', 'cappadocia'],
    departures: { from: '2026-11-15', to: '2027-12-20', weekdays: [1, 3, 5, 6] },
    image: 'cappadocia-balloons',
    gallery: ['goreme', 'istanbul-galata', 'bosphorus'],
    title: { en: 'Istanbul & Cappadocia', zh: '伊斯坦布尔与卡帕多奇亚' },
    summary: {
      en: 'Three days in Istanbul, a short flight, then fairy chimneys, cave churches and a chance to fly at dawn.',
      zh: '伊斯坦布尔三天，短途飞行后探访精灵烟囱、岩洞教堂，还有机会在黎明乘热气球升空。',
    },
    overview: {
      en: 'Türkiye’s two most-loved destinations in one week. Explore Istanbul’s great monuments, then fly to Cappadocia to stay in a cave hotel and explore valleys, underground cities and rock-cut churches.',
      zh: '一周游遍土耳其最受欢迎的两大目的地。探访伊斯坦布尔的伟大古迹，再飞往卡帕多奇亚入住洞穴酒店，探索山谷、地下城和岩凿教堂。',
    },
    highlights: [
      { en: 'Guided day in Istanbul’s old city', zh: '伊斯坦布尔老城导览一日' },
      { en: 'Two nights in a Cappadocia cave hotel', zh: '入住卡帕多奇亚洞穴酒店两晚' },
      { en: 'Göreme Open-Air Museum & Derinkuyu', zh: '格雷梅露天博物馆与代林库尤地下城' },
      { en: 'Optional sunrise balloon flight', zh: '可选日出热气球飞行' },
    ],
    itinerary: [
      {
        title: { en: 'Arrival in Istanbul', zh: '抵达伊斯坦布尔' },
        text: { en: 'Airport welcome and transfer to your hotel. Free evening.', zh: '机场接机并送往酒店。晚上自由活动。' },
      },
      {
        title: { en: 'Istanbul old city', zh: '伊斯坦布尔老城' },
        text: { en: 'Hagia Sophia, the Blue Mosque, the Hippodrome, the Basilica Cistern and the Grand Bazaar with your guide.', zh: '随导游参观圣索菲亚大教堂、蓝色清真寺、竞技场广场、地下水宫和大巴扎。' },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Bosphorus & flight to Cappadocia', zh: '博斯普鲁斯海峡并飞往卡帕多奇亚' },
        text: { en: 'Morning Bosphorus cruise and Spice Bazaar. Afternoon flight to Kayseri or Nevşehir and transfer to your cave hotel.', zh: '上午乘博斯普鲁斯游船并逛香料市场。下午飞往开塞利或内夫谢希尔，转车前往洞穴酒店。' },
        meals: ['B', 'D'],
      },
      {
        title: { en: 'Cappadocia valleys', zh: '卡帕多奇亚山谷' },
        text: { en: 'Optional sunrise balloon flight. Then the Göreme Open-Air Museum, Paşabağ fairy chimneys, Avanos pottery workshop and the Uçhisar viewpoint.', zh: '可选日出热气球飞行。随后游览格雷梅露天博物馆、帕夏巴精灵烟囱、阿瓦诺斯陶艺工坊及乌奇希萨观景点。' },
        meals: ['B', 'L', 'D'],
      },
      {
        title: { en: 'Underground city & flight to Istanbul', zh: '地下城并飞回伊斯坦布尔' },
        text: { en: 'Explore Derinkuyu Underground City and Pigeon Valley, then fly back to Istanbul for a final night.', zh: '探索代林库尤地下城和鸽子谷，随后飞回伊斯坦布尔住最后一晚。' },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Departure', zh: '离开' },
        text: { en: 'Transfer to the airport for your flight home.', zh: '送往机场搭乘返程航班。' },
        meals: ['B'],
      },
    ],
    included: ['airportTransfers', 'hotelBreakfast', 'mealsAsListed', 'domesticFlights', 'guide', 'transport', 'entrances', 'cruise', 'support'],
    excluded: ['intlFlights', 'visa', 'balloon', 'tips', 'drinks', 'optional', 'cityTax'],
    hotels: [
      { city: 'istanbul', hotel: { en: '4★ hotel in the old city, or similar', zh: '老城四星酒店或同级' } },
      { city: 'cappadocia', hotel: { en: 'Cave hotel in Göreme or Uçhisar, or similar', zh: '格雷梅或乌奇希萨洞穴酒店或同级' } },
    ],
    important: ['passport', 'balloonWeather', 'dressCode', 'priceSeason'],
  },
  {
    slug: 'grand-turkiye-11-days',
    featured: true,
    category: 'combined',
    type: 'group',
    days: 11,
    nights: 10,
    priceFrom: 2690,
    maxGroup: 12,
    destinations: ['istanbul', 'cappadocia', 'pamukkale', 'ephesus', 'izmir', 'troy', 'gallipoli', 'bursa'],
    departures: { from: '2027-03-01', to: '2027-11-30', weekdays: [1, 6] },
    image: 'pamukkale',
    gallery: ['ephesus', 'cappadocia-balloons', 'troy', 'bursa'],
    offer: { discount: 12, validUntil: '2027-01-31', label: { en: 'Early booking', zh: '早鸟优惠' } },
    title: { en: 'Grand Türkiye', zh: '土耳其全景大环游' },
    summary: {
      en: 'The complete circuit: Istanbul, Cappadocia, Pamukkale, Ephesus, Troy, Gallipoli and Bursa.',
      zh: '完整环线：伊斯坦布尔、卡帕多奇亚、棉花堡、以弗所、特洛伊、加里波利和布尔萨。',
    },
    overview: {
      en: 'Our signature journey through 4,000 years of history. From the domes of Istanbul to the valleys of Cappadocia, the white terraces of Pamukkale, the marble streets of Ephesus and the legends of Troy — all with one guide, comfortable hotels and no long overnight drives.',
      zh: '我们的招牌线路，穿越4000年历史。从伊斯坦布尔的穹顶到卡帕多奇亚的山谷，从棉花堡的白色梯田到以弗所的大理石街道和特洛伊的传说——全程同一位导游，舒适酒店，没有通宵长途车程。',
    },
    highlights: [
      { en: 'Eight destinations in one trip', zh: '一次旅行游遍八大目的地' },
      { en: 'Ephesus and the Terrace Houses', zh: '以弗所与山坡住宅' },
      { en: 'Pamukkale travertines at sunset', zh: '日落时分的棉花堡钙华梯田' },
      { en: 'Troy and the Gallipoli battlefields', zh: '特洛伊与加里波利战场' },
    ],
    itinerary: [
      {
        title: { en: 'Arrival in Istanbul', zh: '抵达伊斯坦布尔' },
        text: { en: 'Airport welcome and transfer to your hotel. Evening welcome briefing with your tour leader.', zh: '机场接机并送往酒店。晚上与领队进行欢迎说明会。' },
      },
      {
        title: { en: 'Istanbul old city', zh: '伊斯坦布尔老城' },
        text: { en: 'Hagia Sophia, the Blue Mosque, the Hippodrome and Topkapı Palace.', zh: '圣索菲亚大教堂、蓝色清真寺、竞技场广场和托普卡帕宫。' },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Bosphorus & flight to Cappadocia', zh: '博斯普鲁斯海峡并飞往卡帕多奇亚' },
        text: { en: 'Morning Bosphorus cruise, then an afternoon flight to Cappadocia.', zh: '上午乘博斯普鲁斯游船，下午飞往卡帕多奇亚。' },
        meals: ['B', 'D'],
      },
      {
        title: { en: 'Cappadocia', zh: '卡帕多奇亚' },
        text: { en: 'Optional balloon flight at sunrise. Göreme Open-Air Museum, fairy chimneys and an underground city.', zh: '可选日出热气球。游览格雷梅露天博物馆、精灵烟囱和地下城。' },
        meals: ['B', 'L', 'D'],
      },
      {
        title: { en: 'Cappadocia to Pamukkale', zh: '卡帕多奇亚至棉花堡' },
        text: { en: 'Scenic drive via a Seljuk caravanserai to Pamukkale. Evening in a thermal hotel.', zh: '途经塞尔柱商队客栈，风景优美的车程前往棉花堡。晚上入住温泉酒店。' },
        meals: ['B', 'D'],
      },
      {
        title: { en: 'Pamukkale & Hierapolis to Kuşadası', zh: '棉花堡与希拉波利斯至库沙达瑟' },
        text: { en: 'Walk the white terraces and visit Hierapolis, then continue to the Aegean coast.', zh: '漫步白色梯田，参观希拉波利斯，然后前往爱琴海沿岸。' },
        meals: ['B', 'D'],
      },
      {
        title: { en: 'Ephesus', zh: '以弗所' },
        text: { en: 'Full visit of Ephesus including the Terrace Houses, plus the House of the Virgin Mary. Afternoon in Şirince village.', zh: '全面游览以弗所（含山坡住宅）及圣母玛利亚之家。下午游览希林杰村。' },
        meals: ['B', 'L', 'D'],
      },
      {
        title: { en: 'Pergamon & Troy to Çanakkale', zh: '帕加马与特洛伊至恰纳卡莱' },
        text: { en: 'The Asclepion of Pergamon, then ancient Troy and its museum. Overnight in Çanakkale.', zh: '参观帕加马的阿斯克勒庇俄斯神殿，然后游览特洛伊古城及博物馆。夜宿恰纳卡莱。' },
        meals: ['B', 'D'],
      },
      {
        title: { en: 'Gallipoli peninsula', zh: '加里波利半岛' },
        text: { en: 'A guided tour of Anzac Cove, Lone Pine and Chunuk Bair, then on to Bursa.', zh: '导览澳新军团湾、孤松和丘努克拜尔，随后前往布尔萨。' },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Bursa to Istanbul', zh: '布尔萨至伊斯坦布尔' },
        text: { en: 'The Green Mosque, Koza Han silk market and İskender kebab for lunch, then return to Istanbul.', zh: '参观绿色清真寺、科扎丝绸市场，午餐品尝伊斯坎德尔烤肉，然后返回伊斯坦布尔。' },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Departure', zh: '离开' },
        text: { en: 'Transfer to the airport.', zh: '送往机场。' },
        meals: ['B'],
      },
    ],
    included: ['airportTransfers', 'hotelBreakfast', 'mealsAsListed', 'domesticFlights', 'guide', 'transport', 'entrances', 'cruise', 'support'],
    excluded: ['intlFlights', 'visa', 'balloon', 'tips', 'drinks', 'optional', 'cityTax'],
    hotels: [
      { city: 'istanbul', hotel: { en: '4★ hotel in the old city, or similar', zh: '老城四星酒店或同级' } },
      { city: 'cappadocia', hotel: { en: 'Cave hotel, or similar', zh: '洞穴酒店或同级' } },
      { city: 'pamukkale', hotel: { en: '4★ thermal hotel, or similar', zh: '四星温泉酒店或同级' } },
      { city: 'ephesus', hotel: { en: '4★ seaside hotel in Kuşadası, or similar', zh: '库沙达瑟四星海滨酒店或同级' } },
      { city: 'gallipoli', hotel: { en: '4★ hotel in Çanakkale, or similar', zh: '恰纳卡莱四星酒店或同级' } },
    ],
    important: ['passport', 'orderMayChange', 'balloonWeather', 'walking', 'childrenPolicy', 'priceSeason'],
  },
  {
    slug: 'aegean-history-7-days',
    category: 'historical',
    type: 'group',
    days: 7,
    nights: 6,
    priceFrom: 1590,
    maxGroup: 10,
    destinations: ['izmir', 'ephesus', 'pamukkale', 'troy', 'gallipoli'],
    departures: { from: '2027-03-15', to: '2027-11-15', weekdays: [7] },
    image: 'ephesus',
    gallery: ['izmir', 'troy-ruins', 'gallipoli'],
    title: { en: 'Aegean History Trail', zh: '爱琴海历史之路' },
    summary: {
      en: 'Ephesus, Pamukkale, Pergamon, Troy and Gallipoli — the great sites of the Aegean in one week.',
      zh: '以弗所、棉花堡、帕加马、特洛伊和加里波利——一周览尽爱琴海的伟大遗迹。',
    },
    overview: {
      en: 'Designed for history lovers, this journey starts in Izmir and follows the Aegean coast north. An archaeologist-trained guide brings Greek, Roman and modern history to life.',
      zh: '专为历史爱好者设计，从伊兹密尔出发沿爱琴海岸北上。受过考古训练的导游让希腊、罗马和近代历史鲜活再现。',
    },
    highlights: [
      { en: 'Archaeologist-trained guide', zh: '受过考古训练的导游' },
      { en: 'Ephesus Terrace Houses', zh: '以弗所山坡住宅' },
      { en: 'Hierapolis & Cleopatra’s Pool', zh: '希拉波利斯与埃及艳后温泉池' },
      { en: 'Troy Museum & Gallipoli', zh: '特洛伊博物馆与加里波利' },
    ],
    itinerary: [
      {
        title: { en: 'Arrival in Izmir', zh: '抵达伊兹密尔' },
        text: { en: 'Transfer from Izmir airport to your hotel. Evening walk along the Kordon promenade.', zh: '从伊兹密尔机场送往酒店。晚上漫步科尔东海滨长廊。' },
      },
      {
        title: { en: 'Ephesus & Şirince', zh: '以弗所与希林杰' },
        text: { en: 'A full morning in Ephesus, then lunch and wine tasting in Şirince.', zh: '上午全程游览以弗所，随后在希林杰午餐并品尝葡萄酒。' },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Pamukkale & Hierapolis', zh: '棉花堡与希拉波利斯' },
        text: { en: 'Drive inland to Pamukkale for the terraces, Hierapolis and a swim in the ancient pool.', zh: '驱车前往内陆的棉花堡，游览梯田、希拉波利斯并在古泳池中游泳。' },
        meals: ['B', 'D'],
      },
      {
        title: { en: 'Aphrodisias to Izmir', zh: '阿佛洛狄西亚至伊兹密尔' },
        text: { en: 'Visit the marble city of Aphrodisias and its stadium, then return to Izmir.', zh: '参观大理石之城阿佛洛狄西亚及其体育场，然后返回伊兹密尔。' },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Pergamon & Troy', zh: '帕加马与特洛伊' },
        text: { en: 'The hilltop Acropolis of Pergamon, then Troy and the Troy Museum. Overnight in Çanakkale.', zh: '游览山顶上的帕加马卫城，然后参观特洛伊及特洛伊博物馆。夜宿恰纳卡莱。' },
        meals: ['B', 'D'],
      },
      {
        title: { en: 'Gallipoli to Istanbul', zh: '加里波利至伊斯坦布尔' },
        text: { en: 'Morning on the Gallipoli battlefields, then drive to Istanbul.', zh: '上午参观加里波利战场，随后驱车前往伊斯坦布尔。' },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Departure', zh: '离开' },
        text: { en: 'Transfer to an Istanbul airport.', zh: '送往伊斯坦布尔机场。' },
        meals: ['B'],
      },
    ],
    included: ['airportTransfers', 'hotelBreakfast', 'mealsAsListed', 'guide', 'transport', 'entrances', 'support'],
    excluded: ['intlFlights', 'visa', 'tips', 'drinks', 'optional', 'cityTax'],
    hotels: [
      { city: 'izmir', hotel: { en: '4★ hotel near the seafront, or similar', zh: '海滨附近四星酒店或同级' } },
      { city: 'pamukkale', hotel: { en: '4★ thermal hotel, or similar', zh: '四星温泉酒店或同级' } },
      { city: 'troy', hotel: { en: '4★ hotel in Çanakkale, or similar', zh: '恰纳卡莱四星酒店或同级' } },
    ],
    important: ['passport', 'orderMayChange', 'walking', 'priceSeason'],
  },
  {
    slug: 'cappadocia-escape-3-days',
    category: 'nature',
    type: 'group',
    days: 3,
    nights: 2,
    priceFrom: 690,
    maxGroup: 10,
    destinations: ['cappadocia'],
    departures: { from: '2026-11-15', to: '2027-12-20' },
    image: 'goreme',
    gallery: ['cappadocia-balloons', 'cappadocia'],
    offer: { discount: 15, validUntil: '2027-03-15', label: { en: 'Winter special', zh: '冬季特惠' } },
    title: { en: 'Cappadocia Escape', zh: '卡帕多奇亚小憩' },
    summary: {
      en: 'Two nights in a cave hotel with guided valley tours — easy to add to any Istanbul stay.',
      zh: '入住洞穴酒店两晚，含导览山谷游——轻松搭配任何伊斯坦布尔行程。',
    },
    overview: {
      en: 'A short break in Cappadocia from Istanbul or any Turkish airport. Two guided days cover the best valleys, rock churches and an underground city, with time for a sunrise balloon flight.',
      zh: '从伊斯坦布尔或土耳其任意机场出发的卡帕多奇亚短假。两天导览游览最美山谷、岩石教堂和地下城，并留有乘坐日出热气球的时间。',
    },
    highlights: [
      { en: 'Cave hotel stay', zh: '入住洞穴酒店' },
      { en: 'Red and Rose valleys at sunset', zh: '日落时的红谷与玫瑰谷' },
      { en: 'Kaymaklı Underground City', zh: '凯马克利地下城' },
    ],
    itinerary: [
      {
        title: { en: 'Arrival & sunset valleys', zh: '抵达与日落山谷' },
        text: { en: 'Airport transfer to your cave hotel. Late-afternoon walk in the Red and Rose valleys.', zh: '机场接送至洞穴酒店。傍晚漫步红谷与玫瑰谷。' },
        meals: ['D'],
      },
      {
        title: { en: 'Göreme & underground city', zh: '格雷梅与地下城' },
        text: { en: 'Optional balloon flight. Göreme Open-Air Museum, Kaymaklı Underground City and the Uçhisar viewpoint.', zh: '可选热气球。格雷梅露天博物馆、凯马克利地下城和乌奇希萨观景点。' },
        meals: ['B', 'L', 'D'],
      },
      {
        title: { en: 'Avanos & departure', zh: '阿瓦诺斯与离开' },
        text: { en: 'Pottery demonstration in Avanos and Paşabağ fairy chimneys, then transfer to the airport.', zh: '在阿瓦诺斯观看陶艺表演，参观帕夏巴精灵烟囱，然后送往机场。' },
        meals: ['B'],
      },
    ],
    included: ['airportTransfers', 'hotelBreakfast', 'mealsAsListed', 'guide', 'transport', 'entrances', 'support'],
    excluded: ['intlFlights', 'domesticFlightsExcluded', 'balloon', 'tips', 'drinks'],
    hotels: [
      { city: 'cappadocia', hotel: { en: 'Cave hotel in Göreme, or similar', zh: '格雷梅洞穴酒店或同级' } },
    ],
    important: ['balloonWeather', 'walking', 'priceSeason'],
  },
  {
    slug: 'antalya-turquoise-coast-5-days',
    category: 'nature',
    type: 'group',
    days: 5,
    nights: 4,
    priceFrom: 990,
    maxGroup: 10,
    destinations: ['antalya'],
    departures: { from: '2027-04-01', to: '2027-10-31', weekdays: [2, 4, 6] },
    image: 'antalya',
    gallery: ['duden', 'kas-beach', 'rafting'],
    title: { en: 'Antalya & the Turquoise Coast', zh: '安塔利亚与绿松石海岸' },
    summary: {
      en: 'Old town walks, waterfalls, Roman theatres and a boat day along the coast.',
      zh: '漫步老城、观赏瀑布、游览罗马剧场，并乘船畅游海岸一日。',
    },
    overview: {
      en: 'Culture and sea in equal measure. Discover Antalya’s Kaleiçi, the ancient cities of Perge and Aspendos and the Düden Waterfalls, then spend a day on a boat in the bays west of the city.',
      zh: '文化与海洋并重。探访安塔利亚卡莱伊奇老城、佩尔格与阿斯潘多斯古城以及杜顿瀑布，再乘船畅游城西海湾一整天。',
    },
    highlights: [
      { en: 'Kaleiçi and Hadrian’s Gate', zh: '卡莱伊奇老城与哈德良门' },
      { en: 'Aspendos Roman theatre', zh: '阿斯潘多斯罗马剧场' },
      { en: 'Coastal boat trip with swim stops', zh: '海岸游船及游泳停靠' },
    ],
    itinerary: [
      {
        title: { en: 'Arrival in Antalya', zh: '抵达安塔利亚' },
        text: { en: 'Airport transfer to your hotel near the old town.', zh: '机场接送至老城附近的酒店。' },
      },
      {
        title: { en: 'Kaleiçi & Düden Waterfalls', zh: '卡莱伊奇与杜顿瀑布' },
        text: { en: 'Walking tour of the old town and harbour, the Antalya Museum and the Lower Düden Waterfalls.', zh: '徒步游览老城和港口、安塔利亚博物馆及下杜顿瀑布。' },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Perge & Aspendos', zh: '佩尔格与阿斯潘多斯' },
        text: { en: 'The colonnaded streets of Perge and the magnificent theatre of Aspendos.', zh: '佩尔格的柱廊街道与阿斯潘多斯宏伟的剧场。' },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Boat day', zh: '游船日' },
        text: { en: 'A relaxed boat trip with swim stops in turquoise bays and lunch on board.', zh: '轻松的游船之旅，在碧蓝海湾停靠游泳，船上享用午餐。' },
        meals: ['B', 'L'],
      },
      {
        title: { en: 'Departure', zh: '离开' },
        text: { en: 'Transfer to Antalya airport.', zh: '送往安塔利亚机场。' },
        meals: ['B'],
      },
    ],
    included: ['airportTransfers', 'hotelBreakfast', 'mealsAsListed', 'guide', 'transport', 'entrances', 'cruise', 'support'],
    excluded: ['intlFlights', 'visa', 'tips', 'drinks', 'optional', 'cityTax'],
    hotels: [
      { city: 'antalya', hotel: { en: '4★ boutique hotel in Kaleiçi, or similar', zh: '卡莱伊奇四星精品酒店或同级' } },
    ],
    important: ['passport', 'childrenPolicy', 'priceSeason'],
  },
  {
    slug: 'private-istanbul-day-tour',
    featured: true,
    category: 'cultural',
    type: 'private',
    days: 1,
    nights: 0,
    priceFrom: 230,
    priceUnit: 'group',
    maxGroup: 8,
    destinations: ['istanbul'],
    departures: null,
    image: 'istanbul-galata',
    gallery: ['istanbul-hagia-sophia', 'istanbul-tram'],
    title: { en: 'Private Istanbul Day with Your Own Guide', zh: '伊斯坦布尔私人导游一日游' },
    summary: {
      en: 'Your guide, your vehicle, your choice of sights — tailored to your interests and pace.',
      zh: '专属导游、专属车辆、自选景点——按您的兴趣和节奏量身定制。',
    },
    overview: {
      en: 'Ideal for families, couples and first-time visitors who prefer not to join a group. Choose from the old city, the Bosphorus, Galata and Beyoğlu or the Asian side — we will suggest the best order to avoid queues.',
      zh: '非常适合不想跟团的家庭、情侣和首次来访者。可选择老城、博斯普鲁斯海峡、加拉塔与贝伊奥卢或亚洲区——我们会建议最佳顺序以避开排队。',
    },
    highlights: [
      { en: 'Hotel pickup in a private vehicle', zh: '私人车辆酒店接送' },
      { en: 'Flexible route and timing', zh: '路线和时间灵活' },
      { en: 'Guided by Mesut in English or Özlem in 中文', zh: '由 Özlem（中文）或 Mesut（英语）亲自导游' },
    ],
    itinerary: [
      {
        title: { en: 'Your day in Istanbul', zh: '您的伊斯坦布尔一日' },
        text: {
          en: 'Pickup from your hotel around 09:00. A typical day: Hagia Sophia, the Blue Mosque and the Cistern in the morning, lunch, then a Bosphorus boat ride and Galata in the afternoon. Return around 17:00.',
          zh: '约09:00从酒店接您。典型行程：上午参观圣索菲亚大教堂、蓝色清真寺和地下水宫，午餐后乘船游博斯普鲁斯海峡并游览加拉塔。约17:00返回。',
        },
        meals: ['L'],
      },
    ],
    included: ['privateGuide', 'privateTransport', 'hotelPickup', 'lunch', 'water'],
    excluded: ['entrancesExcluded', 'tips', 'drinks'],
    important: ['dressCode', 'mosqueClosures', 'priceSeason'],
  },
  {
    slug: 'gallipoli-troy-2-days',
    category: 'historical',
    type: 'group',
    days: 2,
    nights: 1,
    priceFrom: 420,
    maxGroup: 10,
    destinations: ['gallipoli', 'troy'],
    departures: { from: '2026-11-15', to: '2027-12-15', weekdays: [2, 5, 7] },
    image: 'gallipoli',
    gallery: ['troy', 'troy-ruins'],
    title: { en: 'Gallipoli & Troy from Istanbul', zh: '伊斯坦布尔出发：加里波利与特洛伊' },
    summary: {
      en: 'Two days, two great stories: the Gallipoli campaign and the legendary city of Troy.',
      zh: '两天，两段伟大的故事：加里波利战役与传奇之城特洛伊。',
    },
    overview: {
      en: 'Travel from Istanbul to the Dardanelles with an expert guide. Spend an afternoon on the Gallipoli battlefields, stay overnight in Çanakkale, and explore Troy and its museum the next morning.',
      zh: '在专业导游陪同下从伊斯坦布尔前往达达尼尔海峡。下午参观加里波利战场，夜宿恰纳卡莱，次日上午游览特洛伊及其博物馆。',
    },
    highlights: [
      { en: 'Anzac Cove, Lone Pine & Chunuk Bair', zh: '澳新军团湾、孤松与丘努克拜尔' },
      { en: 'Night in Çanakkale on the Dardanelles', zh: '在达达尼尔海峡畔的恰纳卡莱过夜' },
      { en: 'Ancient Troy and the Troy Museum', zh: '特洛伊古城与特洛伊博物馆' },
    ],
    itinerary: [
      {
        title: { en: 'Istanbul to Gallipoli', zh: '伊斯坦布尔至加里波利' },
        text: { en: 'Early hotel pickup and drive to the peninsula. Lunch, then a guided afternoon on the battlefields and memorials. Overnight in Çanakkale.', zh: '清晨酒店接送，驱车前往半岛。午餐后，下午在导游带领下参观战场和纪念地。夜宿恰纳卡莱。' },
        meals: ['L', 'D'],
      },
      {
        title: { en: 'Troy & return to Istanbul', zh: '特洛伊并返回伊斯坦布尔' },
        text: { en: 'Morning at ancient Troy and the Troy Museum, then return to Istanbul by early evening.', zh: '上午游览特洛伊古城和特洛伊博物馆，傍晚前返回伊斯坦布尔。' },
        meals: ['B', 'L'],
      },
    ],
    included: ['hotelPickup', 'hotelBreakfast', 'mealsAsListed', 'guide', 'transport', 'entrances', 'support'],
    excluded: ['tips', 'drinks', 'optional'],
    hotels: [
      { city: 'gallipoli', hotel: { en: '4★ hotel in Çanakkale, or similar', zh: '恰纳卡莱四星酒店或同级' } },
    ],
    important: ['passport', 'walking', 'priceSeason'],
  },
  {
    slug: 'bursa-day-trip',
    category: 'cultural',
    type: 'day',
    days: 1,
    nights: 0,
    priceFrom: 190,
    maxGroup: 10,
    destinations: ['bursa'],
    departures: { from: '2026-11-15', to: '2027-12-20', weekdays: [3, 6] },
    image: 'bursa',
    gallery: ['uludag'],
    title: { en: 'Bursa Day Trip: The First Ottoman Capital', zh: '布尔萨一日游：奥斯曼第一座首都' },
    summary: {
      en: 'Green Mosque, silk bazaar, a timber-house village and İskender kebab where it was invented.',
      zh: '绿色清真寺、丝绸集市、木屋村落，以及在发源地品尝伊斯坎德尔烤肉。',
    },
    overview: {
      en: 'Escape the big city for a day in green, historic Bursa. Cross the Sea of Marmara by bridge, visit early Ottoman masterpieces and the UNESCO village of Cumalıkızık.',
      zh: '离开大都市，到青翠而富有历史的布尔萨度过一天。经大桥跨越马尔马拉海，参观早期奥斯曼杰作和联合国教科文组织世界遗产居马勒克泽克村。',
    },
    highlights: [
      { en: 'Green Mosque and Green Tomb', zh: '绿色清真寺与绿色陵墓' },
      { en: 'Koza Han silk market', zh: '科扎丝绸市场' },
      { en: 'Cumalıkızık village', zh: '居马勒克泽克村' },
    ],
    itinerary: [
      {
        title: { en: 'Istanbul – Bursa – Istanbul', zh: '伊斯坦布尔–布尔萨–伊斯坦布尔' },
        text: {
          en: 'Morning pickup and drive over the Osmangazi Bridge. Visit the Grand Mosque, Koza Han and the Green Mosque, lunch of İskender kebab, then Cumalıkızık village. Back in Istanbul around 19:30.',
          zh: '上午接送，驱车经奥斯曼加齐大桥。参观大清真寺、科扎汉和绿色清真寺，午餐品尝伊斯坎德尔烤肉，随后游览居马勒克泽克村。约19:30返回伊斯坦布尔。',
        },
        meals: ['L'],
      },
    ],
    included: ['hotelPickup', 'guide', 'transport', 'entrances', 'lunch'],
    excluded: ['tips', 'drinks'],
    important: ['dressCode', 'walking'],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);

/** Price after offer discount (rounded to 5). */
export function offerPrice(price: number, discount: number) {
  return Math.round((price * (1 - discount / 100)) / 5) * 5;
}
