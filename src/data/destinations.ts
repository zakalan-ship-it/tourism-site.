import type { Destination, Region } from './types';
import type { L } from '../i18n/languages';

export const regions: Record<Region, L> = {
  marmara: { en: 'Istanbul & Marmara', zh: '伊斯坦布尔与马尔马拉', de: 'Istanbul & Marmara', tr: 'İstanbul ve Marmara' },
  aegean: { en: 'Aegean coast', zh: '爱琴海沿岸', de: 'Ägäisküste', tr: 'Ege kıyıları' },
  central: { en: 'Central Anatolia', zh: '安纳托利亚中部', de: 'Zentralanatolien', tr: 'İç Anadolu' },
  mediterranean: { en: 'Mediterranean coast', zh: '地中海沿岸', de: 'Mittelmeerküste', tr: 'Akdeniz kıyıları' },
};

export const destinations: Destination[] = [
  {
    slug: 'istanbul',
    region: 'marmara',
    featured: true,
    image: 'istanbul-skyline',
    gallery: ['istanbul-hagia-sophia', 'istanbul-blue-mosque', 'istanbul-galata', 'grand-bazaar'],
    name: { en: 'Istanbul', zh: '伊斯坦布尔', de: 'Istanbul', tr: 'İstanbul' },
    tagline: {
      en: 'Two continents, one unforgettable city',
      zh: '横跨两大洲的难忘之城',
      de: 'Zwei Kontinente, eine unvergessliche Stadt',
      tr: 'İki kıta, unutulmaz bir şehir',
    },
    intro: {
      en: 'Capital of three empires, Istanbul spreads across Europe and Asia along the Bosphorus. Byzantine churches, Ottoman mosques and palaces stand beside lively bazaars, rooftop cafés and some of the best food in the world.',
      zh: '伊斯坦布尔曾是三大帝国的都城，沿博斯普鲁斯海峡横跨欧亚两洲。拜占庭教堂、奥斯曼清真寺与宫殿，与热闹的集市、屋顶咖啡馆和世界级美食比邻而立。',
      de: 'Als Hauptstadt dreier Reiche erstreckt sich Istanbul entlang des Bosporus über Europa und Asien. Byzantinische Kirchen, osmanische Moscheen und Paläste stehen neben lebhaften Basaren, Dachterrassen-Cafés und einer der besten Küchen der Welt.',
      tr: 'Üç imparatorluğa başkentlik yapmış İstanbul, Boğaz boyunca Avrupa ve Asya’ya yayılır. Bizans kiliseleri, Osmanlı camileri ve sarayları; canlı çarşıların, teras kafelerin ve dünyanın en iyi mutfaklarından birinin yanı başında yükselir.',
    },
    attractions: [
      {
        name: { en: 'Hagia Sophia', zh: '圣索菲亚大教堂', de: 'Hagia Sophia', tr: 'Ayasofya' },
        text: { en: 'The 6th-century dome that defined Byzantine architecture.', zh: '定义了拜占庭建筑风格的六世纪穹顶。', de: 'Die Kuppel aus dem 6. Jahrhundert, die die byzantinische Architektur prägte.', tr: 'Bizans mimarisine yön veren 6. yüzyıl kubbesi.' },
      },
      {
        name: { en: 'Topkapı Palace', zh: '托普卡帕宫', de: 'Topkapı-Palast', tr: 'Topkapı Sarayı' },
        text: { en: 'Home of the Ottoman sultans for almost 400 years.', zh: '奥斯曼苏丹居住近400年的宫殿。', de: 'Fast 400 Jahre lang Residenz der osmanischen Sultane.', tr: 'Osmanlı padişahlarının yaklaşık 400 yıllık evi.' },
      },
      {
        name: { en: 'Bosphorus', zh: '博斯普鲁斯海峡', de: 'Bosporus', tr: 'Boğaziçi' },
        text: { en: 'Waterside palaces and wooden mansions between two continents.', zh: '两大洲之间的水畔宫殿与木制别墅。', de: 'Uferpaläste und Holzvillen zwischen zwei Kontinenten.', tr: 'İki kıta arasında saraylar ve ahşap yalılar.' },
      },
      {
        name: { en: 'Grand Bazaar', zh: '大巴扎', de: 'Großer Basar', tr: 'Kapalıçarşı' },
        text: { en: 'Over 60 covered streets of carpets, lamps, gold and spices.', zh: '六十多条有顶街道，地毯、灯具、黄金与香料琳琅满目。', de: 'Über 60 überdachte Gassen voller Teppiche, Lampen, Gold und Gewürze.', tr: 'Halı, lamba, altın ve baharatla dolu 60’tan fazla kapalı sokak.' },
      },
    ],
    bestTime: {
      en: 'April–June and September–November, when days are mild and sunny.',
      zh: '4–6月和9–11月，天气温和晴朗。',
      de: 'April bis Juni und September bis November, wenn die Tage mild und sonnig sind.',
      tr: 'Nisan–Haziran ve Eylül–Kasım; günler ılık ve güneşlidir.',
    },
    gettingThere: {
      en: 'Istanbul Airport (IST) on the European side and Sabiha Gökçen (SAW) on the Asian side, both with direct flights worldwide.',
      zh: '欧洲区的伊斯坦布尔机场（IST）和亚洲区的萨比哈·格克琴机场（SAW），均有通往世界各地的直航。',
      de: 'Flughafen Istanbul (IST) auf der europäischen und Sabiha Gökçen (SAW) auf der asiatischen Seite, beide mit Direktflügen weltweit.',
      tr: 'Avrupa yakasında İstanbul Havalimanı (IST), Asya yakasında Sabiha Gökçen (SAW); ikisi de dünyanın her yerine direkt uçuşlara sahiptir.',
    },
  },
  {
    slug: 'cappadocia',
    region: 'central',
    featured: true,
    image: 'cappadocia-balloons',
    gallery: ['goreme', 'cappadocia'],
    name: { en: 'Cappadocia', zh: '卡帕多奇亚', de: 'Kappadokien', tr: 'Kapadokya' },
    tagline: {
      en: 'Fairy chimneys, cave hotels and balloon-filled skies',
      zh: '精灵烟囱、洞穴酒店与漫天热气球',
      de: 'Feenkamine, Höhlenhotels und Ballonhimmel',
      tr: 'Peri bacaları, mağara otelleri ve balonlarla dolu gökyüzü',
    },
    intro: {
      en: 'Volcanic eruptions and millions of years of wind shaped Cappadocia into valleys of cones, pillars and rock churches. People have carved homes, monasteries and whole underground cities into the soft stone.',
      zh: '火山喷发与数百万年的风蚀，将卡帕多奇亚塑造成布满锥岩、石柱和岩石教堂的山谷。人们在柔软的岩石中凿出房屋、修道院乃至整座地下城。',
      de: 'Vulkanausbrüche und Jahrmillionen Wind formten Kappadokien zu Tälern voller Kegel, Säulen und Felsenkirchen. Menschen schlugen Wohnungen, Klöster und ganze unterirdische Städte in das weiche Gestein.',
      tr: 'Volkanik patlamalar ve milyonlarca yıllık rüzgâr, Kapadokya’yı koniler, sütunlar ve kaya kiliselerle dolu vadilere dönüştürdü. İnsanlar yumuşak kayaya evler, manastırlar ve koca yeraltı şehirleri oydu.',
    },
    attractions: [
      {
        name: { en: 'Göreme Open-Air Museum', zh: '格雷梅露天博物馆', de: 'Freilichtmuseum Göreme', tr: 'Göreme Açık Hava Müzesi' },
        text: { en: 'Rock-cut churches with vivid Byzantine frescoes.', zh: '保存着鲜艳拜占庭壁画的岩凿教堂。', de: 'Felsenkirchen mit leuchtenden byzantinischen Fresken.', tr: 'Canlı Bizans freskleriyle kayaya oyulmuş kiliseler.' },
      },
      {
        name: { en: 'Hot air balloon flight', zh: '热气球飞行', de: 'Heißluftballonfahrt', tr: 'Sıcak hava balonu' },
        text: { en: 'Drift over the valleys at sunrise.', zh: '日出时分飘过山谷上空。', de: 'Bei Sonnenaufgang über die Täler schweben.', tr: 'Gün doğarken vadilerin üzerinde süzülün.' },
      },
      {
        name: { en: 'Derinkuyu Underground City', zh: '代林库尤地下城', de: 'Unterirdische Stadt Derinkuyu', tr: 'Derinkuyu Yeraltı Şehri' },
        text: { en: 'Eight levels deep, built to shelter thousands.', zh: '深达八层，可容纳数千人避难。', de: 'Acht Ebenen tief, Zuflucht für Tausende.', tr: 'Binlerce kişiyi barındırmak için yapılmış sekiz kat derinlik.' },
      },
      {
        name: { en: 'Uçhisar Castle', zh: '乌奇希萨城堡', de: 'Burg Uçhisar', tr: 'Uçhisar Kalesi' },
        text: { en: 'The highest viewpoint in the region.', zh: '该地区的最高观景点。', de: 'Der höchste Aussichtspunkt der Region.', tr: 'Bölgenin en yüksek seyir noktası.' },
      },
    ],
    bestTime: {
      en: 'April–June and September–October. Winter brings snow-covered valleys; balloon flights operate all year, weather permitting.',
      zh: '4–6月和9–10月。冬季山谷白雪皑皑；热气球全年运营，视天气而定。',
      de: 'April bis Juni und September bis Oktober. Im Winter liegen die Täler im Schnee; Ballonfahrten finden bei gutem Wetter ganzjährig statt.',
      tr: 'Nisan–Haziran ve Eylül–Ekim. Kışın vadiler karla kaplanır; balon uçuşları hava koşulları uygun olduğunda yıl boyu yapılır.',
    },
    gettingThere: {
      en: 'About 1 hour 20 minutes by air from Istanbul to Kayseri (ASR) or Nevşehir (NAV) airport, then a 1-hour transfer.',
      zh: '从伊斯坦布尔飞往开塞利（ASR）或内夫谢希尔（NAV）机场约1小时20分钟，再转车约1小时。',
      de: 'Rund 1 Std. 20 Min. Flug von Istanbul nach Kayseri (ASR) oder Nevşehir (NAV), dann 1 Stunde Transfer.',
      tr: 'İstanbul’dan Kayseri (ASR) veya Nevşehir (NAV) havalimanına yaklaşık 1 saat 20 dakikalık uçuş, ardından 1 saatlik transfer.',
    },
  },
  {
    slug: 'antalya',
    region: 'mediterranean',
    featured: true,
    image: 'antalya',
    gallery: ['duden', 'kas-beach'],
    name: { en: 'Antalya', zh: '安塔利亚', de: 'Antalya', tr: 'Antalya' },
    tagline: {
      en: 'Old harbour, waterfalls and the Turquoise Coast',
      zh: '古港、瀑布与绿松石海岸',
      de: 'Altstadthafen, Wasserfälle und Türkische Riviera',
      tr: 'Tarihi liman, şelaleler ve Turkuaz Kıyı',
    },
    intro: {
      en: 'Antalya combines a Roman-walled old town with long beaches, mountain backdrops and waterfalls that fall straight into the sea. It is the gateway to ancient Perge and Aspendos and to the rafting canyons of the Taurus Mountains.',
      zh: '安塔利亚既有罗马城墙环绕的老城，又有绵长的海滩、群山背景和直落大海的瀑布。这里是前往古城佩尔格、阿斯潘多斯以及托罗斯山脉漂流峡谷的门户。',
      de: 'Antalya verbindet eine römisch ummauerte Altstadt mit langen Stränden, Bergkulissen und Wasserfällen, die direkt ins Meer stürzen. Es ist das Tor zu den antiken Städten Perge und Aspendos und zu den Rafting-Schluchten des Taurusgebirges.',
      tr: 'Antalya, Roma surlarıyla çevrili eski kentini uzun plajlar, dağ manzaraları ve doğrudan denize dökülen şelalelerle birleştirir. Antik Perge ve Aspendos’a ve Toros Dağları’nın rafting kanyonlarına açılan kapıdır.',
    },
    attractions: [
      {
        name: { en: 'Kaleiçi old town', zh: '卡莱伊奇老城', de: 'Altstadt Kaleiçi', tr: 'Kaleiçi' },
        text: { en: 'Ottoman houses, Hadrian’s Gate and the Roman harbour.', zh: '奥斯曼民居、哈德良门与罗马古港。', de: 'Osmanische Häuser, Hadrianstor und römischer Hafen.', tr: 'Osmanlı evleri, Hadrian Kapısı ve Roma limanı.' },
      },
      {
        name: { en: 'Düden Waterfalls', zh: '杜顿瀑布', de: 'Düden-Wasserfälle', tr: 'Düden Şelalesi' },
        text: { en: 'A river that plunges off the cliffs into the sea.', zh: '河水从悬崖直泻入海。', de: 'Ein Fluss, der von den Klippen ins Meer stürzt.', tr: 'Falezlerden denize dökülen bir nehir.' },
      },
      {
        name: { en: 'Aspendos Theatre', zh: '阿斯潘多斯剧场', de: 'Theater von Aspendos', tr: 'Aspendos Tiyatrosu' },
        text: { en: 'The best-preserved Roman theatre in Anatolia.', zh: '安纳托利亚保存最完好的罗马剧场。', de: 'Das besterhaltene römische Theater Anatoliens.', tr: 'Anadolu’nun en iyi korunmuş Roma tiyatrosu.' },
      },
      {
        name: { en: 'Köprülü Canyon', zh: '科普鲁吕峡谷', de: 'Köprülü-Schlucht', tr: 'Köprülü Kanyon' },
        text: { en: 'Rafting and Roman bridges in a pine-forest national park.', zh: '松林国家公园中的漂流与罗马古桥。', de: 'Rafting und Römerbrücken in einem Kiefernwald-Nationalpark.', tr: 'Çam ormanlı milli parkta rafting ve Roma köprüleri.' },
      },
    ],
    bestTime: {
      en: 'May–October for beaches; spring and autumn are ideal for sightseeing and hiking.',
      zh: '5–10月适合海滩度假；春秋两季最适合观光和徒步。',
      de: 'Mai bis Oktober für Strandurlaub; Frühling und Herbst sind ideal für Besichtigungen und Wanderungen.',
      tr: 'Plaj için Mayıs–Ekim; gezi ve yürüyüş için ilkbahar ve sonbahar idealdir.',
    },
    gettingThere: {
      en: 'Antalya Airport (AYT) has direct flights from across Europe and a 1-hour flight from Istanbul.',
      zh: '安塔利亚机场（AYT）有往返欧洲各地的直航，从伊斯坦布尔飞行约1小时。',
      de: 'Der Flughafen Antalya (AYT) hat Direktflüge aus ganz Europa; von Istanbul ist es 1 Stunde Flug.',
      tr: 'Antalya Havalimanı’na (AYT) Avrupa’nın her yerinden direkt uçuş vardır; İstanbul’dan 1 saatlik uçuştur.',
    },
  },
  {
    slug: 'pamukkale',
    region: 'aegean',
    featured: true,
    image: 'pamukkale',
    name: { en: 'Pamukkale', zh: '棉花堡', de: 'Pamukkale', tr: 'Pamukkale' },
    tagline: {
      en: 'The “cotton castle” of white travertine terraces',
      zh: '洁白钙华梯田组成的“棉花城堡”',
      de: 'Das „Baumwollschloss“ aus weißen Sinterterrassen',
      tr: 'Beyaz travertenlerden “pamuk kale”',
    },
    intro: {
      en: 'Warm, mineral-rich springs have covered this hillside in brilliant white terraces filled with turquoise pools. Above them lie the ruins of Hierapolis, a Roman spa city with a vast necropolis and a theatre.',
      zh: '富含矿物质的温泉在山坡上形成了耀眼的白色梯田和碧蓝水池。上方是希拉波利斯遗址——一座拥有大型墓地和剧场的罗马温泉城。',
      de: 'Warme, mineralreiche Quellen haben diesen Hang mit strahlend weißen Terrassen und türkisfarbenen Becken überzogen. Darüber liegen die Ruinen von Hierapolis, einer römischen Bäderstadt mit riesiger Nekropole und Theater.',
      tr: 'Mineral açısından zengin sıcak kaynaklar bu yamacı turkuaz havuzlarla dolu bembeyaz teraslarla kaplamıştır. Üstlerinde, büyük bir nekropol ve tiyatroya sahip Roma kaplıca kenti Hierapolis’in kalıntıları uzanır.',
    },
    attractions: [
      {
        name: { en: 'Travertine terraces', zh: '钙华梯田', de: 'Sinterterrassen', tr: 'Travertenler' },
        text: { en: 'Walk barefoot through the warm, shallow pools.', zh: '赤脚漫步于温暖的浅池之中。', de: 'Barfuß durch die warmen, flachen Becken gehen.', tr: 'Ilık ve sığ havuzlarda yalınayak yürüyün.' },
      },
      {
        name: { en: 'Hierapolis', zh: '希拉波利斯', de: 'Hierapolis', tr: 'Hierapolis' },
        text: { en: 'A UNESCO-listed Roman city with a grand theatre.', zh: '列入联合国教科文组织名录、拥有宏伟剧场的罗马古城。', de: 'Eine römische UNESCO-Welterbestadt mit großem Theater.', tr: 'Büyük tiyatrosuyla UNESCO listesindeki bir Roma kenti.' },
      },
      {
        name: { en: 'Cleopatra’s Pool', zh: '埃及艳后温泉池', de: 'Kleopatra-Becken', tr: 'Antik Havuz' },
        text: { en: 'Swim among sunken ancient columns.', zh: '在沉没的古代石柱间游泳。', de: 'Schwimmen zwischen versunkenen antiken Säulen.', tr: 'Suya gömülü antik sütunların arasında yüzün.' },
      },
    ],
    bestTime: {
      en: 'Spring and autumn. Visit early or late in the day for softer light and fewer visitors.',
      zh: '春季和秋季。清晨或傍晚前往，光线更柔和，游客更少。',
      de: 'Frühling und Herbst. Besuchen Sie die Terrassen früh oder spät am Tag — für weicheres Licht und weniger Besucher.',
      tr: 'İlkbahar ve sonbahar. Daha yumuşak ışık ve daha az kalabalık için günün erken ya da geç saatlerinde gidin.',
    },
    gettingThere: {
      en: 'Denizli Çardak Airport (DNZ) is 1 hour away; Pamukkale is also a natural stop between Cappadocia and Ephesus.',
      zh: '距代尼兹利恰尔达克机场（DNZ）1小时车程；也是卡帕多奇亚与以弗所之间的理想中转站。',
      de: 'Der Flughafen Denizli Çardak (DNZ) liegt 1 Stunde entfernt; Pamukkale ist zudem ein natürlicher Halt zwischen Kappadokien und Ephesos.',
      tr: 'Denizli Çardak Havalimanı (DNZ) 1 saat uzaklıktadır; Pamukkale ayrıca Kapadokya ile Efes arasında doğal bir duraktır.',
    },
  },
  {
    slug: 'ephesus',
    region: 'aegean',
    featured: true,
    image: 'ephesus',
    name: { en: 'Ephesus', zh: '以弗所', de: 'Ephesos', tr: 'Efes' },
    tagline: {
      en: 'Walk the marble streets of a Roman capital',
      zh: '漫步罗马首府的大理石街道',
      de: 'Über die Marmorstraßen einer römischen Hauptstadt',
      tr: 'Bir Roma başkentinin mermer sokaklarında yürüyün',
    },
    intro: {
      en: 'Once one of the largest cities of the Roman world, Ephesus is among the best-preserved ancient sites in the Mediterranean. Its colonnaded streets lead to the Library of Celsus, the Great Theatre and richly decorated terrace houses.',
      zh: '以弗所曾是罗马世界最大的城市之一，也是地中海地区保存最完好的古迹之一。柱廊街道通向塞尔苏斯图书馆、大剧场和装饰华丽的山坡住宅。',
      de: 'Einst eine der größten Städte der römischen Welt, gehört Ephesos zu den besterhaltenen antiken Stätten am Mittelmeer. Säulengesäumte Straßen führen zur Celsus-Bibliothek, zum Großen Theater und zu reich verzierten Hanghäusern.',
      tr: 'Bir zamanlar Roma dünyasının en büyük şehirlerinden biri olan Efes, Akdeniz’in en iyi korunmuş antik kentleri arasındadır. Sütunlu caddeleri Celsus Kütüphanesi’ne, Büyük Tiyatro’ya ve zengin süslemeli yamaç evlerine çıkar.',
    },
    attractions: [
      {
        name: { en: 'Library of Celsus', zh: '塞尔苏斯图书馆', de: 'Celsus-Bibliothek', tr: 'Celsus Kütüphanesi' },
        text: { en: 'The iconic two-storey façade from AD 117.', zh: '建于公元117年的标志性两层立面。', de: 'Die berühmte zweistöckige Fassade aus dem Jahr 117 n. Chr.', tr: 'MS 117’den kalma simgesel iki katlı cephe.' },
      },
      {
        name: { en: 'Terrace Houses', zh: '山坡住宅', de: 'Hanghäuser', tr: 'Yamaç Evleri' },
        text: { en: 'Mosaics and frescoes of wealthy Roman homes.', zh: '罗马富人宅邸的马赛克与壁画。', de: 'Mosaiken und Fresken wohlhabender römischer Häuser.', tr: 'Varlıklı Roma evlerinin mozaikleri ve freskleri.' },
      },
      {
        name: { en: 'House of the Virgin Mary', zh: '圣母玛利亚之家', de: 'Haus der Jungfrau Maria', tr: 'Meryem Ana Evi' },
        text: { en: 'A peaceful pilgrimage site on Mount Koressos.', zh: '科雷索斯山上宁静的朝圣地。', de: 'Ein friedlicher Pilgerort auf dem Berg Koressos.', tr: 'Bülbül Dağı’nda huzurlu bir hac yeri.' },
      },
    ],
    bestTime: {
      en: 'March–June and September–November. Start early in summer — the site has little shade.',
      zh: '3–6月和9–11月。夏季请尽早出发——景区几乎没有遮荫。',
      de: 'März bis Juni und September bis November. Im Sommer früh starten — es gibt kaum Schatten.',
      tr: 'Mart–Haziran ve Eylül–Kasım. Yazın erken başlayın — ören yerinde gölge azdır.',
    },
    gettingThere: {
      en: 'One hour from Izmir Adnan Menderes Airport (ADB), 20 minutes from Kuşadası cruise port.',
      zh: '距伊兹密尔阿德南·曼德列斯机场（ADB）1小时，距库沙达瑟邮轮港20分钟。',
      de: 'Eine Stunde vom Flughafen Izmir (ADB), 20 Minuten vom Kreuzfahrthafen Kuşadası.',
      tr: 'İzmir Adnan Menderes Havalimanı’na (ADB) 1 saat, Kuşadası kruvaziyer limanına 20 dakika.',
    },
  },
  {
    slug: 'izmir',
    region: 'aegean',
    image: 'izmir',
    name: { en: 'Izmir', zh: '伊兹密尔', de: 'Izmir', tr: 'İzmir' },
    tagline: {
      en: 'The relaxed, sea-breezy pearl of the Aegean',
      zh: '海风轻拂、悠闲惬意的爱琴海明珠',
      de: 'Die entspannte Perle der Ägäis',
      tr: 'Ege’nin rahat ve meltemli incisi',
    },
    intro: {
      en: 'Türkiye’s third city is known for its seafront promenade, historic Kemeraltı bazaar and easy-going lifestyle. Izmir is the ideal base for Ephesus, Pergamon, the wine villages of Şirince and the beaches of Çeşme.',
      zh: '土耳其第三大城市，以海滨长廊、历史悠久的凯梅拉尔特集市和悠闲的生活方式而闻名。伊兹密尔是游览以弗所、帕加马、希林杰葡萄酒村和切什梅海滩的理想据点。',
      de: 'Die drittgrößte Stadt der Türkei ist bekannt für ihre Uferpromenade, den historischen Kemeraltı-Basar und ihre entspannte Lebensart. Izmir ist der ideale Ausgangspunkt für Ephesos, Pergamon, die Weindörfer von Şirince und die Strände von Çeşme.',
      tr: 'Türkiye’nin üçüncü büyük şehri; kordonu, tarihi Kemeraltı Çarşısı ve rahat yaşam tarzıyla bilinir. İzmir, Efes, Bergama, Şirince’nin şarap köyleri ve Çeşme plajları için ideal bir merkezdir.',
    },
    attractions: [
      {
        name: { en: 'Konak Clock Tower', zh: '科纳克钟楼', de: 'Uhrturm Konak', tr: 'Konak Saat Kulesi' },
        text: { en: 'The 1901 symbol of the city on Konak Square.', zh: '建于1901年、位于科纳克广场的城市象征。', de: 'Das Wahrzeichen der Stadt von 1901 am Konak-Platz.', tr: 'Konak Meydanı’nda kentin 1901 tarihli simgesi.' },
      },
      {
        name: { en: 'Kemeraltı Bazaar', zh: '凯梅拉尔特集市', de: 'Kemeraltı-Basar', tr: 'Kemeraltı Çarşısı' },
        text: { en: 'Historic market lanes, caravanserais and coffee houses.', zh: '历史悠久的市集小巷、商队客栈和咖啡馆。', de: 'Historische Marktgassen, Karawansereien und Kaffeehäuser.', tr: 'Tarihi çarşı sokakları, hanlar ve kahvehaneler.' },
      },
      {
        name: { en: 'Şirince village', zh: '希林杰村', de: 'Dorf Şirince', tr: 'Şirince köyü' },
        text: { en: 'Stone houses and fruit wines in the hills near Ephesus.', zh: '以弗所附近山中的石屋与果酒。', de: 'Steinhäuser und Fruchtweine in den Hügeln bei Ephesos.', tr: 'Efes yakınlarındaki tepelerde taş evler ve meyve şarapları.' },
      },
    ],
    bestTime: {
      en: 'April–October. Summers are hot, cooled by the afternoon sea breeze.',
      zh: '4–10月。夏季炎热，但午后有海风降温。',
      de: 'April bis Oktober. Die heißen Sommer werden von der Meeresbrise am Nachmittag gekühlt.',
      tr: 'Nisan–Ekim. Sıcak yazlar öğleden sonra esen imbatla serinler.',
    },
    gettingThere: {
      en: 'Izmir Adnan Menderes Airport (ADB) — 1 hour 10 minutes from Istanbul by air.',
      zh: '伊兹密尔阿德南·曼德列斯机场（ADB）——从伊斯坦布尔飞行约1小时10分钟。',
      de: 'Flughafen Izmir Adnan Menderes (ADB) — 1 Std. 10 Min. Flug ab Istanbul.',
      tr: 'İzmir Adnan Menderes Havalimanı (ADB) — İstanbul’dan 1 saat 10 dakikalık uçuş.',
    },
  },
  {
    slug: 'bursa',
    region: 'marmara',
    image: 'bursa',
    gallery: ['uludag'],
    name: { en: 'Bursa', zh: '布尔萨', de: 'Bursa', tr: 'Bursa' },
    tagline: {
      en: 'The first Ottoman capital, green and graceful',
      zh: '奥斯曼帝国的第一座首都，青翠而典雅',
      de: 'Die erste osmanische Hauptstadt, grün und anmutig',
      tr: 'İlk Osmanlı başkenti, yeşil ve zarif',
    },
    intro: {
      en: 'At the foot of Mount Uludağ, Bursa was the first capital of the Ottoman Empire. It is known for early Ottoman architecture, its historic silk trade, thermal baths and the original İskender kebab.',
      zh: '布尔萨位于乌卢达山脚下，是奥斯曼帝国的第一座首都，以早期奥斯曼建筑、历史悠久的丝绸贸易、温泉浴场和正宗的伊斯坎德尔烤肉而闻名。',
      de: 'Am Fuße des Uludağ war Bursa die erste Hauptstadt des Osmanischen Reiches. Die Stadt ist bekannt für frühosmanische Architektur, den historischen Seidenhandel, Thermalbäder und den ursprünglichen İskender-Kebap.',
      tr: 'Uludağ’ın eteklerindeki Bursa, Osmanlı İmparatorluğu’nun ilk başkentidir. Erken Osmanlı mimarisi, tarihi ipek ticareti, kaplıcaları ve asıl İskender kebabıyla ünlüdür.',
    },
    attractions: [
      {
        name: { en: 'Green Mosque & Tomb', zh: '绿色清真寺与陵墓', de: 'Grüne Moschee & Grüne Türbe', tr: 'Yeşil Cami ve Yeşil Türbe' },
        text: { en: 'Masterpieces of turquoise İznik tiles.', zh: '伊兹尼克绿松石瓷砖的杰作。', de: 'Meisterwerke aus türkisfarbenen İznik-Fliesen.', tr: 'Turkuaz İznik çinilerinin başyapıtları.' },
      },
      {
        name: { en: 'Koza Han silk market', zh: '科扎丝绸市场', de: 'Seidenmarkt Koza Han', tr: 'Koza Han' },
        text: { en: 'A 15th-century caravanserai still trading silk.', zh: '至今仍在交易丝绸的15世纪商队客栈。', de: 'Eine Karawanserei aus dem 15. Jahrhundert, in der noch Seide gehandelt wird.', tr: 'Hâlâ ipek ticareti yapılan 15. yüzyıl hanı.' },
      },
      {
        name: { en: 'Cumalıkızık', zh: '居马勒克泽克村', de: 'Cumalıkızık', tr: 'Cumalıkızık' },
        text: { en: 'A UNESCO-listed Ottoman village of timber houses.', zh: '列入联合国教科文组织名录的奥斯曼木屋村落。', de: 'Ein osmanisches Dorf mit Fachwerkhäusern, UNESCO-Welterbe.', tr: 'UNESCO listesindeki ahşap evli Osmanlı köyü.' },
      },
    ],
    bestTime: {
      en: 'All year: spring and autumn for the city, December–March for skiing on Uludağ.',
      zh: '全年皆宜：春秋适合游览城市，12–3月可在乌卢达山滑雪。',
      de: 'Ganzjährig: Frühling und Herbst für die Stadt, Dezember bis März zum Skifahren am Uludağ.',
      tr: 'Yıl boyu: şehir için ilkbahar ve sonbahar, Uludağ’da kayak için Aralık–Mart.',
    },
    gettingThere: {
      en: 'About 2 hours from Istanbul by road via the Osmangazi Bridge, or by fast ferry to Mudanya.',
      zh: '从伊斯坦布尔经奥斯曼加齐大桥驾车约2小时，或乘快船至穆达尼亚。',
      de: 'Rund 2 Stunden ab Istanbul über die Osmangazi-Brücke oder mit der Schnellfähre nach Mudanya.',
      tr: 'İstanbul’dan Osmangazi Köprüsü üzerinden karayoluyla yaklaşık 2 saat veya hızlı feribotla Mudanya’ya.',
    },
  },
  {
    slug: 'gallipoli',
    region: 'marmara',
    image: 'gallipoli',
    name: { en: 'Gallipoli', zh: '加里波利', de: 'Gallipoli', tr: 'Gelibolu' },
    tagline: {
      en: 'Peaceful shores of a moving chapter in history',
      zh: '一段动人历史的宁静海岸',
      de: 'Stille Ufer eines bewegenden Kapitels der Geschichte',
      tr: 'Tarihin duygusal bir sayfasının huzurlu kıyıları',
    },
    intro: {
      en: 'The Gallipoli Peninsula was the scene of the 1915 Dardanelles campaign. Today it is a historical national park of quiet coves, pine hills and memorials, visited by Turkish, Australian, New Zealand and British travellers alike.',
      zh: '加里波利半岛是1915年达达尼尔战役的发生地。如今这里是一座历史国家公园，静谧的海湾、松林山丘与纪念碑吸引着来自土耳其、澳大利亚、新西兰和英国的游客。',
      de: 'Die Halbinsel Gallipoli war 1915 Schauplatz der Dardanellen-Schlacht. Heute ist sie ein historischer Nationalpark mit stillen Buchten, Kiefernhügeln und Gedenkstätten — besucht von Reisenden aus der Türkei, Australien, Neuseeland und Großbritannien.',
      tr: 'Gelibolu Yarımadası, 1915 Çanakkale Savaşları’nın yaşandığı yerdir. Bugün sakin koyları, çamlı tepeleri ve anıtlarıyla Türk, Avustralyalı, Yeni Zelandalı ve İngiliz gezginlerin ziyaret ettiği bir tarihi milli parktır.',
    },
    attractions: [
      {
        name: { en: 'Anzac Cove', zh: '澳新军团湾', de: 'Anzac Cove', tr: 'Arıburnu' },
        text: { en: 'The landing beach of 25 April 1915.', zh: '1915年4月25日的登陆海滩。', de: 'Der Landestrand vom 25. April 1915.', tr: '25 Nisan 1915 çıkarmasının yapıldığı sahil.' },
      },
      {
        name: { en: 'Çanakkale Martyrs’ Memorial', zh: '恰纳卡莱烈士纪念碑', de: 'Çanakkale-Märtyrerdenkmal', tr: 'Çanakkale Şehitler Abidesi' },
        text: { en: 'A 41-metre monument overlooking the Dardanelles.', zh: '俯瞰达达尼尔海峡的41米高纪念碑。', de: 'Ein 41 Meter hohes Denkmal über den Dardanellen.', tr: 'Çanakkale Boğazı’na bakan 41 metrelik anıt.' },
      },
      {
        name: { en: 'Lone Pine & Chunuk Bair', zh: '孤松与丘努克拜尔', de: 'Lone Pine & Chunuk Bair', tr: 'Kanlısırt ve Conkbayırı' },
        text: { en: 'Hilltop memorials with sweeping sea views.', zh: '可饱览海景的山顶纪念地。', de: 'Gedenkstätten auf den Hügeln mit weitem Meerblick.', tr: 'Geniş deniz manzaralı tepe anıtları.' },
      },
    ],
    bestTime: {
      en: 'March–November. Commemorations take place on 18 March and 25 April (book well ahead).',
      zh: '3–11月。每年3月18日和4月25日举行纪念活动（请提前预订）。',
      de: 'März bis November. Gedenkfeiern finden am 18. März und 25. April statt (frühzeitig buchen).',
      tr: 'Mart–Kasım. Anma törenleri 18 Mart ve 25 Nisan’da yapılır (erken rezervasyon yapın).',
    },
    gettingThere: {
      en: 'About 4.5 hours by road from Istanbul; the peninsula is reached via the 1915 Çanakkale Bridge or ferry.',
      zh: '从伊斯坦布尔驾车约4.5小时；经1915恰纳卡莱大桥或乘渡轮抵达半岛。',
      de: 'Rund 4,5 Stunden Fahrt ab Istanbul; die Halbinsel erreicht man über die 1915-Çanakkale-Brücke oder per Fähre.',
      tr: 'İstanbul’dan karayoluyla yaklaşık 4,5 saat; yarımadaya 1915 Çanakkale Köprüsü veya feribotla ulaşılır.',
    },
  },
  {
    slug: 'troy',
    region: 'marmara',
    image: 'troy',
    gallery: ['troy-ruins'],
    name: { en: 'Troy', zh: '特洛伊', de: 'Troja', tr: 'Truva' },
    tagline: {
      en: 'Where Homer’s legend meets archaeology',
      zh: '荷马传说与考古相遇之地',
      de: 'Wo Homers Legende auf Archäologie trifft',
      tr: 'Homeros’un efsanesinin arkeolojiyle buluştuğu yer',
    },
    intro: {
      en: 'The mound of Hisarlık holds nine cities built on top of one another over 4,000 years — among them the Troy of the Iliad. The nearby Troy Museum displays treasures found across the site.',
      zh: '希萨尔利克土丘在4000年间层层叠建了九座城市，其中就有《伊利亚特》中的特洛伊。附近的特洛伊博物馆展出了在遗址出土的珍宝。',
      de: 'Im Hügel von Hisarlık liegen neun übereinander gebaute Städte aus 4.000 Jahren — darunter das Troja der Ilias. Das nahe Troja-Museum zeigt die Schätze der Ausgrabung.',
      tr: 'Hisarlık Tepesi, 4.000 yıl boyunca üst üste kurulmuş dokuz kenti barındırır — aralarında İlyada’nın Truva’sı da vardır. Yakındaki Troya Müzesi, kazıda bulunan hazineleri sergiler.',
    },
    attractions: [
      {
        name: { en: 'Ancient Troy', zh: '特洛伊古城', de: 'Antikes Troja', tr: 'Antik Troya' },
        text: { en: 'Walls, ramps and temples from nine eras.', zh: '九个时代的城墙、坡道与神庙。', de: 'Mauern, Rampen und Tempel aus neun Epochen.', tr: 'Dokuz döneme ait surlar, rampalar ve tapınaklar.' },
      },
      {
        name: { en: 'Troy Museum', zh: '特洛伊博物馆', de: 'Troja-Museum', tr: 'Troya Müzesi' },
        text: { en: 'An award-winning museum of the region’s finds.', zh: '屡获殊荣、展示当地出土文物的博物馆。', de: 'Ein preisgekröntes Museum mit Funden der Region.', tr: 'Bölgenin buluntularını sergileyen ödüllü müze.' },
      },
      {
        name: { en: 'The wooden horse', zh: '特洛伊木马', de: 'Das Holzpferd', tr: 'Tahta at' },
        text: { en: 'A favourite photo stop for all ages.', zh: '老少皆宜的热门拍照点。', de: 'Ein beliebtes Fotomotiv für Groß und Klein.', tr: 'Her yaştan ziyaretçinin favori fotoğraf noktası.' },
      },
    ],
    bestTime: {
      en: 'April–June and September–October; combine with Gallipoli on the same trip.',
      zh: '4–6月和9–10月；可与加里波利同游。',
      de: 'April bis Juni und September bis Oktober; ideal mit Gallipoli kombinierbar.',
      tr: 'Nisan–Haziran ve Eylül–Ekim; aynı gezide Gelibolu ile birleştirin.',
    },
    gettingThere: {
      en: '30 minutes from Çanakkale; about 5 hours by road from Istanbul.',
      zh: '距恰纳卡莱30分钟车程；从伊斯坦布尔驾车约5小时。',
      de: '30 Minuten von Çanakkale; rund 5 Stunden Fahrt ab Istanbul.',
      tr: 'Çanakkale’ye 30 dakika; İstanbul’dan karayoluyla yaklaşık 5 saat.',
    },
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
