import type { Destination, Region } from './types';
import type { L } from '../i18n/languages';

export const regions: Record<Region, L> = {
  marmara: { en: 'Istanbul & Marmara', zh: '伊斯坦布尔与马尔马拉' },
  aegean: { en: 'Aegean coast', zh: '爱琴海沿岸' },
  central: { en: 'Central Anatolia', zh: '安纳托利亚中部' },
  mediterranean: { en: 'Mediterranean coast', zh: '地中海沿岸' },
};

export const destinations: Destination[] = [
  {
    slug: 'istanbul',
    region: 'marmara',
    featured: true,
    image: 'istanbul-skyline',
    gallery: ['istanbul-hagia-sophia', 'istanbul-blue-mosque', 'istanbul-galata', 'grand-bazaar'],
    name: { en: 'Istanbul', zh: '伊斯坦布尔' },
    tagline: {
      en: 'Two continents, one unforgettable city',
      zh: '横跨两大洲的难忘之城',
    },
    intro: {
      en: 'Capital of three empires, Istanbul spreads across Europe and Asia along the Bosphorus. Byzantine churches, Ottoman mosques and palaces stand beside lively bazaars, rooftop cafés and some of the best food in the world.',
      zh: '伊斯坦布尔曾是三大帝国的都城，沿博斯普鲁斯海峡横跨欧亚两洲。拜占庭教堂、奥斯曼清真寺与宫殿，与热闹的集市、屋顶咖啡馆和世界级美食比邻而立。',
    },
    attractions: [
      {
        name: { en: 'Hagia Sophia', zh: '圣索菲亚大教堂' },
        text: { en: 'The 6th-century dome that defined Byzantine architecture.', zh: '定义了拜占庭建筑风格的六世纪穹顶。' },
      },
      {
        name: { en: 'Topkapı Palace', zh: '托普卡帕宫' },
        text: { en: 'Home of the Ottoman sultans for almost 400 years.', zh: '奥斯曼苏丹居住近400年的宫殿。' },
      },
      {
        name: { en: 'Bosphorus', zh: '博斯普鲁斯海峡' },
        text: { en: 'Waterside palaces and wooden mansions between two continents.', zh: '两大洲之间的水畔宫殿与木制别墅。' },
      },
      {
        name: { en: 'Grand Bazaar', zh: '大巴扎' },
        text: { en: 'Over 60 covered streets of carpets, lamps, gold and spices.', zh: '六十多条有顶街道，地毯、灯具、黄金与香料琳琅满目。' },
      },
    ],
    bestTime: {
      en: 'April–June and September–November, when days are mild and sunny.',
      zh: '4–6月和9–11月，天气温和晴朗。',
    },
    gettingThere: {
      en: 'Istanbul Airport (IST) on the European side and Sabiha Gökçen (SAW) on the Asian side, both with direct flights worldwide.',
      zh: '欧洲区的伊斯坦布尔机场（IST）和亚洲区的萨比哈·格克琴机场（SAW），均有通往世界各地的直航。',
    },
  },
  {
    slug: 'cappadocia',
    region: 'central',
    featured: true,
    image: 'cappadocia-balloons',
    gallery: ['goreme', 'cappadocia'],
    name: { en: 'Cappadocia', zh: '卡帕多奇亚' },
    tagline: {
      en: 'Fairy chimneys, cave hotels and balloon-filled skies',
      zh: '精灵烟囱、洞穴酒店与漫天热气球',
    },
    intro: {
      en: 'Volcanic eruptions and millions of years of wind shaped Cappadocia into valleys of cones, pillars and rock churches. People have carved homes, monasteries and whole underground cities into the soft stone.',
      zh: '火山喷发与数百万年的风蚀，将卡帕多奇亚塑造成布满锥岩、石柱和岩石教堂的山谷。人们在柔软的岩石中凿出房屋、修道院乃至整座地下城。',
    },
    attractions: [
      {
        name: { en: 'Göreme Open-Air Museum', zh: '格雷梅露天博物馆' },
        text: { en: 'Rock-cut churches with vivid Byzantine frescoes.', zh: '保存着鲜艳拜占庭壁画的岩凿教堂。' },
      },
      {
        name: { en: 'Hot air balloon flight', zh: '热气球飞行' },
        text: { en: 'Drift over the valleys at sunrise.', zh: '日出时分飘过山谷上空。' },
      },
      {
        name: { en: 'Derinkuyu Underground City', zh: '代林库尤地下城' },
        text: { en: 'Eight levels deep, built to shelter thousands.', zh: '深达八层，可容纳数千人避难。' },
      },
      {
        name: { en: 'Uçhisar Castle', zh: '乌奇希萨城堡' },
        text: { en: 'The highest viewpoint in the region.', zh: '该地区的最高观景点。' },
      },
    ],
    bestTime: {
      en: 'April–June and September–October. Winter brings snow-covered valleys; balloon flights operate all year, weather permitting.',
      zh: '4–6月和9–10月。冬季山谷白雪皑皑；热气球全年运营，视天气而定。',
    },
    gettingThere: {
      en: 'About 1 hour 20 minutes by air from Istanbul to Kayseri (ASR) or Nevşehir (NAV) airport, then a 1-hour transfer.',
      zh: '从伊斯坦布尔飞往开塞利（ASR）或内夫谢希尔（NAV）机场约1小时20分钟，再转车约1小时。',
    },
  },
  {
    slug: 'antalya',
    region: 'mediterranean',
    featured: true,
    image: 'antalya',
    gallery: ['duden', 'kas-beach'],
    name: { en: 'Antalya', zh: '安塔利亚' },
    tagline: {
      en: 'Old harbour, waterfalls and the Turquoise Coast',
      zh: '古港、瀑布与绿松石海岸',
    },
    intro: {
      en: 'Antalya combines a Roman-walled old town with long beaches, mountain backdrops and waterfalls that fall straight into the sea. It is the gateway to ancient Perge and Aspendos and to the rafting canyons of the Taurus Mountains.',
      zh: '安塔利亚既有罗马城墙环绕的老城，又有绵长的海滩、群山背景和直落大海的瀑布。这里是前往古城佩尔格、阿斯潘多斯以及托罗斯山脉漂流峡谷的门户。',
    },
    attractions: [
      {
        name: { en: 'Kaleiçi old town', zh: '卡莱伊奇老城' },
        text: { en: 'Ottoman houses, Hadrian’s Gate and the Roman harbour.', zh: '奥斯曼民居、哈德良门与罗马古港。' },
      },
      {
        name: { en: 'Düden Waterfalls', zh: '杜顿瀑布' },
        text: { en: 'A river that plunges off the cliffs into the sea.', zh: '河水从悬崖直泻入海。' },
      },
      {
        name: { en: 'Aspendos Theatre', zh: '阿斯潘多斯剧场' },
        text: { en: 'The best-preserved Roman theatre in Anatolia.', zh: '安纳托利亚保存最完好的罗马剧场。' },
      },
      {
        name: { en: 'Köprülü Canyon', zh: '科普鲁吕峡谷' },
        text: { en: 'Rafting and Roman bridges in a pine-forest national park.', zh: '松林国家公园中的漂流与罗马古桥。' },
      },
    ],
    bestTime: {
      en: 'May–October for beaches; spring and autumn are ideal for sightseeing and hiking.',
      zh: '5–10月适合海滩度假；春秋两季最适合观光和徒步。',
    },
    gettingThere: {
      en: 'Antalya Airport (AYT) has direct flights from across Europe and a 1-hour flight from Istanbul.',
      zh: '安塔利亚机场（AYT）有往返欧洲各地的直航，从伊斯坦布尔飞行约1小时。',
    },
  },
  {
    slug: 'pamukkale',
    region: 'aegean',
    featured: true,
    image: 'pamukkale',
    name: { en: 'Pamukkale', zh: '棉花堡' },
    tagline: {
      en: 'The “cotton castle” of white travertine terraces',
      zh: '洁白钙华梯田组成的“棉花城堡”',
    },
    intro: {
      en: 'Warm, mineral-rich springs have covered this hillside in brilliant white terraces filled with turquoise pools. Above them lie the ruins of Hierapolis, a Roman spa city with a vast necropolis and a theatre.',
      zh: '富含矿物质的温泉在山坡上形成了耀眼的白色梯田和碧蓝水池。上方是希拉波利斯遗址——一座拥有大型墓地和剧场的罗马温泉城。',
    },
    attractions: [
      {
        name: { en: 'Travertine terraces', zh: '钙华梯田' },
        text: { en: 'Walk barefoot through the warm, shallow pools.', zh: '赤脚漫步于温暖的浅池之中。' },
      },
      {
        name: { en: 'Hierapolis', zh: '希拉波利斯' },
        text: { en: 'A UNESCO-listed Roman city with a grand theatre.', zh: '列入联合国教科文组织名录、拥有宏伟剧场的罗马古城。' },
      },
      {
        name: { en: 'Cleopatra’s Pool', zh: '埃及艳后温泉池' },
        text: { en: 'Swim among sunken ancient columns.', zh: '在沉没的古代石柱间游泳。' },
      },
    ],
    bestTime: {
      en: 'Spring and autumn. Visit early or late in the day for softer light and fewer visitors.',
      zh: '春季和秋季。清晨或傍晚前往，光线更柔和，游客更少。',
    },
    gettingThere: {
      en: 'Denizli Çardak Airport (DNZ) is 1 hour away; Pamukkale is also a natural stop between Cappadocia and Ephesus.',
      zh: '距代尼兹利恰尔达克机场（DNZ）1小时车程；也是卡帕多奇亚与以弗所之间的理想中转站。',
    },
  },
  {
    slug: 'ephesus',
    region: 'aegean',
    featured: true,
    image: 'ephesus',
    name: { en: 'Ephesus', zh: '以弗所' },
    tagline: {
      en: 'Walk the marble streets of a Roman capital',
      zh: '漫步罗马首府的大理石街道',
    },
    intro: {
      en: 'Once one of the largest cities of the Roman world, Ephesus is among the best-preserved ancient sites in the Mediterranean. Its colonnaded streets lead to the Library of Celsus, the Great Theatre and richly decorated terrace houses.',
      zh: '以弗所曾是罗马世界最大的城市之一，也是地中海地区保存最完好的古迹之一。柱廊街道通向塞尔苏斯图书馆、大剧场和装饰华丽的山坡住宅。',
    },
    attractions: [
      {
        name: { en: 'Library of Celsus', zh: '塞尔苏斯图书馆' },
        text: { en: 'The iconic two-storey façade from AD 117.', zh: '建于公元117年的标志性两层立面。' },
      },
      {
        name: { en: 'Terrace Houses', zh: '山坡住宅' },
        text: { en: 'Mosaics and frescoes of wealthy Roman homes.', zh: '罗马富人宅邸的马赛克与壁画。' },
      },
      {
        name: { en: 'House of the Virgin Mary', zh: '圣母玛利亚之家' },
        text: { en: 'A peaceful pilgrimage site on Mount Koressos.', zh: '科雷索斯山上宁静的朝圣地。' },
      },
    ],
    bestTime: {
      en: 'March–June and September–November. Start early in summer — the site has little shade.',
      zh: '3–6月和9–11月。夏季请尽早出发——景区几乎没有遮荫。',
    },
    gettingThere: {
      en: 'One hour from Izmir Adnan Menderes Airport (ADB), 20 minutes from Kuşadası cruise port.',
      zh: '距伊兹密尔阿德南·曼德列斯机场（ADB）1小时，距库沙达瑟邮轮港20分钟。',
    },
  },
  {
    slug: 'izmir',
    region: 'aegean',
    image: 'izmir',
    name: { en: 'Izmir', zh: '伊兹密尔' },
    tagline: {
      en: 'The relaxed, sea-breezy pearl of the Aegean',
      zh: '海风轻拂、悠闲惬意的爱琴海明珠',
    },
    intro: {
      en: 'Türkiye’s third city is known for its seafront promenade, historic Kemeraltı bazaar and easy-going lifestyle. Izmir is the ideal base for Ephesus, Pergamon, the wine villages of Şirince and the beaches of Çeşme.',
      zh: '土耳其第三大城市，以海滨长廊、历史悠久的凯梅拉尔特集市和悠闲的生活方式而闻名。伊兹密尔是游览以弗所、帕加马、希林杰葡萄酒村和切什梅海滩的理想据点。',
    },
    attractions: [
      {
        name: { en: 'Konak Clock Tower', zh: '科纳克钟楼' },
        text: { en: 'The 1901 symbol of the city on Konak Square.', zh: '建于1901年、位于科纳克广场的城市象征。' },
      },
      {
        name: { en: 'Kemeraltı Bazaar', zh: '凯梅拉尔特集市' },
        text: { en: 'Historic market lanes, caravanserais and coffee houses.', zh: '历史悠久的市集小巷、商队客栈和咖啡馆。' },
      },
      {
        name: { en: 'Şirince village', zh: '希林杰村' },
        text: { en: 'Stone houses and fruit wines in the hills near Ephesus.', zh: '以弗所附近山中的石屋与果酒。' },
      },
    ],
    bestTime: {
      en: 'April–October. Summers are hot, cooled by the afternoon sea breeze.',
      zh: '4–10月。夏季炎热，但午后有海风降温。',
    },
    gettingThere: {
      en: 'Izmir Adnan Menderes Airport (ADB) — 1 hour 10 minutes from Istanbul by air.',
      zh: '伊兹密尔阿德南·曼德列斯机场（ADB）——从伊斯坦布尔飞行约1小时10分钟。',
    },
  },
  {
    slug: 'bursa',
    region: 'marmara',
    image: 'bursa',
    gallery: ['uludag'],
    name: { en: 'Bursa', zh: '布尔萨' },
    tagline: {
      en: 'The first Ottoman capital, green and graceful',
      zh: '奥斯曼帝国的第一座首都，青翠而典雅',
    },
    intro: {
      en: 'At the foot of Mount Uludağ, Bursa was the first capital of the Ottoman Empire. It is known for early Ottoman architecture, its historic silk trade, thermal baths and the original İskender kebab.',
      zh: '布尔萨位于乌卢达山脚下，是奥斯曼帝国的第一座首都，以早期奥斯曼建筑、历史悠久的丝绸贸易、温泉浴场和正宗的伊斯坎德尔烤肉而闻名。',
    },
    attractions: [
      {
        name: { en: 'Green Mosque & Tomb', zh: '绿色清真寺与陵墓' },
        text: { en: 'Masterpieces of turquoise İznik tiles.', zh: '伊兹尼克绿松石瓷砖的杰作。' },
      },
      {
        name: { en: 'Koza Han silk market', zh: '科扎丝绸市场' },
        text: { en: 'A 15th-century caravanserai still trading silk.', zh: '至今仍在交易丝绸的15世纪商队客栈。' },
      },
      {
        name: { en: 'Cumalıkızık', zh: '居马勒克泽克村' },
        text: { en: 'A UNESCO-listed Ottoman village of timber houses.', zh: '列入联合国教科文组织名录的奥斯曼木屋村落。' },
      },
    ],
    bestTime: {
      en: 'All year: spring and autumn for the city, December–March for skiing on Uludağ.',
      zh: '全年皆宜：春秋适合游览城市，12–3月可在乌卢达山滑雪。',
    },
    gettingThere: {
      en: 'About 2 hours from Istanbul by road via the Osmangazi Bridge, or by fast ferry to Mudanya.',
      zh: '从伊斯坦布尔经奥斯曼加齐大桥驾车约2小时，或乘快船至穆达尼亚。',
    },
  },
  {
    slug: 'gallipoli',
    region: 'marmara',
    image: 'gallipoli',
    name: { en: 'Gallipoli', zh: '加里波利' },
    tagline: {
      en: 'Peaceful shores of a moving chapter in history',
      zh: '一段动人历史的宁静海岸',
    },
    intro: {
      en: 'The Gallipoli Peninsula was the scene of the 1915 Dardanelles campaign. Today it is a historical national park of quiet coves, pine hills and memorials, visited by Turkish, Australian, New Zealand and British travellers alike.',
      zh: '加里波利半岛是1915年达达尼尔战役的发生地。如今这里是一座历史国家公园，静谧的海湾、松林山丘与纪念碑吸引着来自土耳其、澳大利亚、新西兰和英国的游客。',
    },
    attractions: [
      {
        name: { en: 'Anzac Cove', zh: '澳新军团湾' },
        text: { en: 'The landing beach of 25 April 1915.', zh: '1915年4月25日的登陆海滩。' },
      },
      {
        name: { en: 'Çanakkale Martyrs’ Memorial', zh: '恰纳卡莱烈士纪念碑' },
        text: { en: 'A 41-metre monument overlooking the Dardanelles.', zh: '俯瞰达达尼尔海峡的41米高纪念碑。' },
      },
      {
        name: { en: 'Lone Pine & Chunuk Bair', zh: '孤松与丘努克拜尔' },
        text: { en: 'Hilltop memorials with sweeping sea views.', zh: '可饱览海景的山顶纪念地。' },
      },
    ],
    bestTime: {
      en: 'March–November. Commemorations take place on 18 March and 25 April (book well ahead).',
      zh: '3–11月。每年3月18日和4月25日举行纪念活动（请提前预订）。',
    },
    gettingThere: {
      en: 'About 4.5 hours by road from Istanbul; the peninsula is reached via the 1915 Çanakkale Bridge or ferry.',
      zh: '从伊斯坦布尔驾车约4.5小时；经1915恰纳卡莱大桥或乘渡轮抵达半岛。',
    },
  },
  {
    slug: 'troy',
    region: 'marmara',
    image: 'troy',
    gallery: ['troy-ruins'],
    name: { en: 'Troy', zh: '特洛伊' },
    tagline: {
      en: 'Where Homer’s legend meets archaeology',
      zh: '荷马传说与考古相遇之地',
    },
    intro: {
      en: 'The mound of Hisarlık holds nine cities built on top of one another over 4,000 years — among them the Troy of the Iliad. The nearby Troy Museum displays treasures found across the site.',
      zh: '希萨尔利克土丘在4000年间层层叠建了九座城市，其中就有《伊利亚特》中的特洛伊。附近的特洛伊博物馆展出了在遗址出土的珍宝。',
    },
    attractions: [
      {
        name: { en: 'Ancient Troy', zh: '特洛伊古城' },
        text: { en: 'Walls, ramps and temples from nine eras.', zh: '九个时代的城墙、坡道与神庙。' },
      },
      {
        name: { en: 'Troy Museum', zh: '特洛伊博物馆' },
        text: { en: 'An award-winning museum of the region’s finds.', zh: '屡获殊荣、展示当地出土文物的博物馆。' },
      },
      {
        name: { en: 'The wooden horse', zh: '特洛伊木马' },
        text: { en: 'A favourite photo stop for all ages.', zh: '老少皆宜的热门拍照点。' },
      },
    ],
    bestTime: {
      en: 'April–June and September–October; combine with Gallipoli on the same trip.',
      zh: '4–6月和9–10月；可与加里波利同游。',
    },
    gettingThere: {
      en: '30 minutes from Çanakkale; about 5 hours by road from Istanbul.',
      zh: '距恰纳卡莱30分钟车程；从伊斯坦布尔驾车约5小时。',
    },
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
