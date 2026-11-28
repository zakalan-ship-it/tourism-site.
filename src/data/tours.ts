import type { Tour } from './types';
import type { Lang } from '../i18n/languages';

/**
 * PRICES in US dollars (site.currency). The guide-only Istanbul days are WellXplore's rates
 * ($250 per day for up to 6 guests, 2 days $480). Other tours are still PLACEHOLDERS based on
 * 2026 market benchmarks — replace them with your own rates.
 * To add a tour, copy one object below. Its card, detail page and search entry are
 * generated automatically in every language.
 */
export const tours: Tour[] = [
  // ---- Core Istanbul day tours (guide $250/day; private car with driver +$200) ----
  {
    slug: 'istanbul-old-city-private-guide-day',
    featured: true,
    category: 'historical',
    type: 'private',
    days: 1,
    nights: 0,
    priceFrom: 250,
    priceUnit: 'group',
    maxGroup: 6,
    destinations: ['istanbul'],
    // Topkapı closes on Tuesdays and the Grand Bazaar on Sundays.
    departures: { from: '2026-11-28', to: '2027-12-31', weekdays: [1, 3, 4, 5, 6] },
    image: 'istanbul-blue-mosque',
    gallery: ['ozlem-group-hippodrome', 'istanbul-hagia-sophia', 'topkapi'],
    title: { en: 'Istanbul Old City Walking Tour with a Private Guide', zh: '伊斯坦布尔老城徒步一日游 · 私人导游' },
    summary: {
      en: 'The Blue Mosque, the Hippodrome, Hagia Sophia, the Basilica Cistern, the Grand Bazaar and Topkapı Palace — on foot, with your own licensed guide.',
      zh: '蓝色清真寺、古竞技场、圣索菲亚、地下水宫、大巴扎和托普卡帕宫——由专属持证导游带您步行深度游览。',
    },
    overview: {
      en: 'All the great sights of the historic peninsula are within walking distance, so this day is on foot with Mesut or Özlem as your private guide, in English or Chinese. You buy your own tickets (we help you book them online in advance) and choose where to eat. No shopping stops, no group restaurants.',
      zh: '历史半岛的主要景点都在步行范围内，这一天由 Mesut 或 Özlem 担任您的私人导游，中英文讲解，全程步行。门票由您自行购买（我们协助提前在线预订），餐厅自由选择。不进购物店，不吃团餐。',
    },
    highlights: [
      { en: 'Blue Mosque and the ancient Hippodrome', zh: '蓝色清真寺与古竞技场' },
      { en: 'Hagia Sophia and the Basilica Cistern', zh: '圣索菲亚与地下水宫' },
      { en: 'Topkapı Palace, home of the sultans (Harem optional)', zh: '苏丹居所托普卡帕宫（后宫可选）' },
      { en: 'The Grand Bazaar — at your own pace', zh: '大巴扎——按您的节奏逛' },
    ],
    itinerary: [
      {
        title: { en: 'Historic peninsula on foot (about 8 hours)', zh: '历史半岛徒步游（约8小时）' },
        text: {
          en: 'Meet your guide at your hotel or in Sultanahmet around 09:00. Morning: the Blue Mosque (Sultanahmet Mosque), the Hippodrome with its Egyptian obelisk, Hagia Sophia and the Basilica Cistern. Lunch at a local restaurant of your choice. Afternoon: Topkapı Palace and its treasury (Harem optional), ending in the Grand Bazaar around 17:00.',
          zh: '约09:00在酒店或苏丹艾哈迈德区与导游会合。上午：蓝色清真寺（苏丹艾哈迈德清真寺）、竖立着埃及方尖碑的古竞技场、圣索菲亚和地下水宫。午餐自选本地餐厅。下午：托普卡帕宫及珍宝馆（后宫可选），约17:00在大巴扎结束行程。',
        },
      },
    ],
    included: ['guideDay', 'ticketAdvice', 'restaurantTips'],
    excluded: ['entranceTickets', 'mealsExcluded', 'guideTips'],
    important: ['closedTopkapi', 'hagiaSophiaVisit', 'dressCode', 'mosqueClosures', 'bigGroups'],
  },
  {
    slug: 'istanbul-bosphorus-balat-private-car-tour',
    featured: true,
    category: 'cultural',
    type: 'private',
    days: 1,
    nights: 0,
    priceFrom: 450,
    priceUnit: 'group',
    maxGroup: 6,
    destinations: ['istanbul'],
    // Dolmabahçe closes on Mondays.
    departures: { from: '2026-11-28', to: '2027-12-31', weekdays: [2, 3, 4, 5, 6, 7] },
    image: 'bosphorus-ferry',
    gallery: ['istanbul-galata', 'istanbul-tram', 'istanbul-skyline'],
    title: { en: 'Bosphorus, Balat & Pierre Loti — Private Guide and Car', zh: '博斯普鲁斯、巴拉特与皮埃尔·洛蒂一日游 · 私人导游+专车' },
    summary: {
      en: 'Dolmabahçe Palace, a Bosphorus cruise, Ortaköy, colourful Balat, the Pierre Loti viewpoint and İstiklal Street — with your own guide and a private car.',
      zh: '多尔玛巴赫切宫、博斯普鲁斯游船、奥塔科伊、彩色街区巴拉特、皮埃尔·洛蒂观景台和独立大街——专属导游+私人专车。',
    },
    overview: {
      en: 'Istanbul beyond the old city, without the hassle of getting around: a private car and driver take you between neighbourhoods while Mesut or Özlem guides you in English or Chinese. Palaces on the water, a cruise between Europe and Asia, the colourful streets of Balat and tea with a view over the Golden Horn.',
      zh: '老城之外的伊斯坦布尔，交通全程无忧：私人专车接送穿梭各个街区，由 Mesut 或 Özlem 中英文讲解。水岸宫殿、横跨欧亚的游船、巴拉特的彩色街巷，还有俯瞰金角湾的下午茶。',
    },
    highlights: [
      { en: 'Dolmabahçe Palace on the Bosphorus', zh: '博斯普鲁斯海峡畔的多尔玛巴赫切宫' },
      { en: 'Bosphorus cruise and Ortaköy', zh: '博斯普鲁斯游船与奥塔科伊' },
      { en: 'Balat’s colourful houses and the Pierre Loti viewpoint', zh: '巴拉特彩色房屋与皮埃尔·洛蒂观景台' },
      { en: 'İstiklal Street and Taksim Square', zh: '独立大街与塔克西姆广场' },
    ],
    itinerary: [
      {
        title: { en: 'Palaces, the Bosphorus and old neighbourhoods (about 8 hours)', zh: '宫殿、海峡与老街区（约8小时）' },
        text: {
          en: 'Hotel pickup around 09:00. Morning: Dolmabahçe Palace, then a Bosphorus cruise past palaces, fortresses and waterside mansions. Lunch in Ortaköy beside the mosque and the bridge. Afternoon: drive to Balat for its colourful houses and old churches and synagogues, then up to the Pierre Loti hill for tea and the view over the Golden Horn. Finish with a walk along İstiklal Street to Taksim Square, and drop-off at your hotel around 17:00.',
          zh: '约09:00酒店接您。上午：参观多尔玛巴赫切宫，随后乘船游览博斯普鲁斯海峡，欣赏沿岸宫殿、城堡和水岸别墅。午餐在奥塔科伊清真寺与大桥旁。下午：驱车前往巴拉特，漫步彩色房屋与古老的教堂和犹太会堂，再登上皮埃尔·洛蒂山喝茶俯瞰金角湾。最后沿独立大街步行至塔克西姆广场，约17:00送回酒店。',
        },
      },
    ],
    included: ['guideDay', 'carDriver', 'hotelPickupDrop', 'ticketAdvice', 'restaurantTips'],
    excluded: ['entranceTickets', 'cruiseTicket', 'pierreLotiCable', 'mealsExcluded', 'guideTips'],
    important: ['closedDolmabahceDay', 'dressCode', 'bigGroups'],
  },
  {
    slug: 'istanbul-express-private-car-tour',
    featured: true,
    category: 'cultural',
    type: 'private',
    days: 1,
    nights: 0,
    priceFrom: 450,
    priceUnit: 'group',
    maxGroup: 6,
    destinations: ['istanbul'],
    // Dolmabahçe closes on Mondays.
    departures: { from: '2026-11-28', to: '2027-12-31', weekdays: [2, 3, 4, 5, 6, 7] },
    image: 'istanbul-skyline',
    gallery: ['istanbul-hagia-sophia', 'istanbul-galata', 'bosphorus-ferry'],
    title: { en: 'Istanbul Express — Highlights in One Day with Private Guide and Car', zh: '伊斯坦布尔精华快线一日游 · 私人导游+专车' },
    summary: {
      en: 'Only one day in Istanbul? Hagia Sophia, the Basilica Cistern, Dolmabahçe Palace, a Bosphorus cruise, Ortaköy and Galata Tower — with your own guide and a private car.',
      zh: '只有一天时间？圣索菲亚、地下水宫、多尔玛巴赫切宫、博斯普鲁斯游船、奥塔科伊和加拉塔塔——专属导游+私人专车，一天看遍精华。',
    },
    overview: {
      en: 'Made for travellers with a single day, a stopover or a cruise-ship visit. Your private car saves time between the old city, the Bosphorus and Galata, and Mesut or Özlem plans the order to avoid queues — guiding you in English or Chinese.',
      zh: '专为只有一天、转机停留或邮轮靠港的旅客设计。私人专车在老城、海峡和加拉塔之间节省时间，Mesut 或 Özlem 合理安排顺序避开排队，中英文讲解。',
    },
    highlights: [
      { en: 'Hagia Sophia and the Basilica Cistern', zh: '圣索菲亚与地下水宫' },
      { en: 'Dolmabahçe Palace and a Bosphorus cruise', zh: '多尔玛巴赫切宫与博斯普鲁斯游船' },
      { en: 'Ortaköy and Galata Tower', zh: '奥塔科伊与加拉塔塔' },
    ],
    itinerary: [
      {
        title: { en: 'Istanbul’s highlights in one day (about 9 hours)', zh: '一天游遍伊斯坦布尔精华（约9小时）' },
        text: {
          en: 'Hotel pickup around 08:30. Start early at Hagia Sophia and the Basilica Cistern to beat the queues. Drive to Dolmabahçe Palace, then take a Bosphorus cruise between Europe and Asia. Lunch in Ortaköy by the water. End the day at Galata Tower for the view over the city, with drop-off at your hotel around 17:30.',
          zh: '约08:30酒店接您。一早参观圣索菲亚和地下水宫，避开排队人潮。驱车前往多尔玛巴赫切宫，随后乘船畅游横跨欧亚的博斯普鲁斯海峡。午餐在奥塔科伊海边。最后登上加拉塔塔俯瞰全城，约17:30送回酒店。',
        },
      },
    ],
    included: ['guideDay', 'carDriver', 'hotelPickupDrop', 'ticketAdvice', 'restaurantTips'],
    excluded: ['entranceTickets', 'cruiseTicket', 'mealsExcluded', 'guideTips'],
    important: ['closedDolmabahceDay', 'expressPace', 'hagiaSophiaVisit', 'dressCode', 'bigGroups'],
  },
  // ---- Chinese-only, guide-only Istanbul days (what most Chinese inquiries ask for) ----
  {
    slug: 'istanbul-2-day-private-guide',
    langs: ['zh'],
    featured: true,
    category: 'cultural',
    type: 'private',
    days: 2,
    nights: 0,
    priceFrom: 480,
    priceUnit: 'group',
    maxGroup: 6,
    destinations: ['istanbul'],
    // Day 1 cannot be Tuesday (Topkapı) or Sunday (Grand Bazaar); day 2 cannot be Monday (Dolmabahçe).
    departures: { from: '2026-11-18', to: '2027-12-30', weekdays: [1, 3, 4, 5, 6] },
    image: 'bosphorus-ferry',
    gallery: ['istanbul-hagia-sophia', 'istanbul-galata', 'istanbul-tram'],
    title: { en: 'Istanbul in 2 Days — Private Chinese-Speaking Guide', zh: '伊斯坦布尔两日游 · 私人中文导游' },
    summary: {
      en: 'Day 1: the old city and its great monuments. Day 2: Dolmabahçe Palace, a Bosphorus cruise, Galata Tower and Taksim — with your own licensed Mandarin-speaking guide.',
      zh: '第一天：老城经典古迹；第二天：多尔玛巴赫切宫、博斯普鲁斯海峡游船、加拉塔塔和塔克西姆广场——专属持证中文导游全程陪同。',
    },
    overview: {
      en: 'The two days most of our Chinese guests ask for. Mesut or Özlem guides you privately in Mandarin, you buy your own tickets (we help you book them in advance) and eat where you like. We move by tram, ferry and on foot — the way locals do — and keep the pace comfortable. $480 for both days instead of $500.',
      zh: '我们的中文客人最常预订的两日行程。Mesut 或 Özlem 全程中文私人讲解，门票自行购买（我们协助提前预订），餐厅自由选择。我们像本地人一样乘电车、渡轮并步行游览，节奏舒适。两天合计480美元（原价500美元）。',
    },
    highlights: [
      { en: 'Hagia Sophia, Blue Mosque, Topkapı, Basilica Cistern, Grand Bazaar', zh: '圣索菲亚、蓝色清真寺、托普卡帕宫、地下水宫、大巴扎' },
      { en: 'Dolmabahçe Palace on the Bosphorus', zh: '博斯普鲁斯海峡畔的多尔玛巴赫切宫' },
      { en: 'Bosphorus cruise between Europe and Asia', zh: '横跨欧亚的博斯普鲁斯游船' },
      { en: 'Galata Tower, İstiklal Street and Taksim Square', zh: '加拉塔塔、独立大街与塔克西姆广场' },
    ],
    itinerary: [
      {
        title: { en: 'Day 1: Historic peninsula (about 8 hours)', zh: '第一天：历史半岛（约8小时）' },
        text: {
          en: 'Hagia Sophia and the Blue Mosque, the Basilica Cistern, lunch at a local restaurant of your choice, Topkapı Palace (Harem optional) and the Grand Bazaar.',
          zh: '圣索菲亚和蓝色清真寺、地下水宫，午餐自选本地餐厅，下午参观托普卡帕宫（后宫可选）并逛大巴扎。',
        },
      },
      {
        title: { en: 'Day 2: Bosphorus, Galata and Taksim (about 8 hours)', zh: '第二天：博斯普鲁斯、加拉塔与塔克西姆（约8小时）' },
        text: {
          en: 'Morning at Dolmabahçe Palace, then a Bosphorus cruise from nearby Kabataş or Beşiktaş past palaces and waterside mansions. Afternoon: Galata Tower and its views, then a walk up İstiklal Street to Taksim Square.',
          zh: '上午参观多尔玛巴赫切宫，随后从附近的卡巴塔什或贝西克塔什乘船游览博斯普鲁斯海峡，欣赏沿岸宫殿与水岸别墅。下午登加拉塔塔观景，再沿独立大街步行至塔克西姆广场。',
        },
      },
    ],
    included: ['guideOnly2d', 'ticketAdvice', 'transportGuidance', 'restaurantTips'],
    excluded: ['entranceTickets', 'mealsExcluded', 'publicTransport', 'guideTips'],
    important: ['closedTopkapi', 'closedDolmabahce', 'hagiaSophiaVisit', 'dressCode', 'extraGuests'],
  },
  {
    slug: 'istanbul-highlights-4-days',
    category: 'cultural',
    type: 'group',
    days: 4,
    nights: 3,
    priceFrom: 870,
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
    category: 'cultural',
    type: 'group',
    days: 6,
    nights: 5,
    priceFrom: 1530,
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
    category: 'combined',
    type: 'group',
    days: 11,
    nights: 10,
    priceFrom: 2960,
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
    priceFrom: 1750,
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
    priceFrom: 760,
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
    priceFrom: 1090,
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
    slug: 'gallipoli-troy-2-days',
    category: 'historical',
    type: 'group',
    days: 2,
    nights: 1,
    priceFrom: 460,
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
    priceFrom: 210,
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

/** Tours offered in a language (some products are Chinese-only). */
export const toursFor = (lang: Lang) => tours.filter((t) => !t.langs || t.langs.includes(lang));

/** Price after offer discount (rounded to 5). */
export function offerPrice(price: number, discount: number) {
  return Math.round((price * (1 - discount / 100)) / 5) * 5;
}
