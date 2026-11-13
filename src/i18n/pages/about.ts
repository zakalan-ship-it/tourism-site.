import type { L } from '../languages';

export interface AboutContent {
  lead: string;
  story: { title: string; paragraphs: string[] };
  values: { title: string; text: string }[];
  services: { title: string; items: string[] };
  b2b: { title: string; text: string };
}

export const about: L<AboutContent> = {
  en: {
    lead: 'We are an Istanbul-based incoming tour operator. Our team plans and runs guided tours, private experiences and transfers across Türkiye for travellers from all over the world — and for the travel agencies who send them.',
    story: {
      title: 'Built in Istanbul, made for the world',
      paragraphs: [
        'WellXplore was founded by travel professionals who grew up between Europe and Asia — on the shores of the Bosphorus. We believe a great journey comes from local knowledge, honest advice and attention to the small details that make a trip feel effortless.',
        'Our name says what we stand for: exploring well. That means carefully designed routes without exhausting drives, hotels chosen for location and comfort, licensed guides who love their country, and support that is there when you need it.',
        'We welcome independent travellers, families, groups and partner agencies from Europe, Asia and beyond — with service in English, Chinese, German and Turkish.',
      ],
    },
    values: [
      { title: 'Local expertise', text: 'Every itinerary is designed and operated by our own team in Türkiye.' },
      { title: 'Honest information', text: 'Clear inclusions, realistic schedules and no hidden extras.' },
      { title: 'Care on the ground', text: 'A real person to call, 24 hours a day, throughout your trip.' },
      { title: 'Responsible travel', text: 'We work with local guides, family-run restaurants and small hotels wherever we can.' },
    ],
    services: {
      title: 'What we do',
      items: ['Scheduled small-group tours across Türkiye', 'Private and tailor-made itineraries', 'Day tours and experiences in Istanbul, Cappadocia and on the coast', 'Airport, city and intercity transfers', 'Groups, incentives and MICE ground handling', 'Services for travel agencies and tour operators (B2B)'],
    },
    b2b: { title: 'For travel agencies', text: 'We are a reliable ground partner for agencies worldwide: series departures, FIT services, guides in many languages, transport and hotels at net rates.' },
  },
  zh: {
    lead: '我们是总部位于伊斯坦布尔的地接旅行社。我们的团队为来自世界各地的旅行者以及组团旅行社，策划并运营土耳其全境的导游线路、私人体验和接送服务。',
    story: {
      title: '扎根伊斯坦布尔，服务全世界',
      paragraphs: [
        'WellXplore 由在博斯普鲁斯海峡畔、欧亚之间长大的旅游从业者创立。我们相信，一次美好的旅程源于本地知识、真诚的建议，以及让旅行轻松自在的细节关怀。',
        '我们的名字代表了我们的理念：好好探索。这意味着精心设计、不让人疲惫的路线，按位置和舒适度精选的酒店，热爱祖国的持证导游，以及在您需要时随时在线的支持。',
        '我们欢迎来自欧洲、亚洲及世界各地的自由行旅客、家庭、团体和合作旅行社，并提供中文、英语、德语和土耳其语服务。',
      ],
    },
    values: [
      { title: '本地专业', text: '每条行程均由我们在土耳其的团队设计和运营。' },
      { title: '信息透明', text: '包含项目清楚，行程安排合理，没有隐藏费用。' },
      { title: '全程关怀', text: '旅途中24小时都有真人可以联系。' },
      { title: '负责任旅行', text: '尽可能与本地导游、家庭餐馆和小型酒店合作。' },
    ],
    services: {
      title: '我们的服务',
      items: ['土耳其全境固定团期小团游', '私人定制行程', '伊斯坦布尔、卡帕多奇亚及沿海地区的一日游和特色体验', '机场、市内及城际接送', '团队、奖励旅游及会展地接', '为旅行社和旅游批发商提供同业服务（B2B）'],
    },
    b2b: { title: '旅行社合作', text: '我们是全球旅行社值得信赖的地接伙伴：系列团、散客服务、多语种导游、交通和酒店，均提供同业价格。' },
  },
  de: {
    lead: 'Wir sind ein Incoming-Reiseveranstalter mit Sitz in Istanbul. Unser Team plant und organisiert geführte Rundreisen, private Erlebnisse und Transfers in der ganzen Türkei — für Reisende aus aller Welt und für die Reisebüros, die sie zu uns schicken.',
    story: {
      title: 'Zu Hause in Istanbul, für die ganze Welt',
      paragraphs: [
        'WellXplore wurde von Reiseprofis gegründet, die zwischen Europa und Asien aufgewachsen sind — an den Ufern des Bosporus. Wir sind überzeugt: Eine großartige Reise entsteht aus lokalem Wissen, ehrlicher Beratung und der Liebe zu den kleinen Details, die eine Reise mühelos machen.',
        'Unser Name ist Programm: gut entdecken. Das heißt sorgfältig geplante Routen ohne ermüdende Fahrten, Hotels mit guter Lage und Komfort, lizenzierte Reiseleiter, die ihr Land lieben, und Betreuung, die da ist, wenn Sie sie brauchen.',
        'Wir begrüßen Individualreisende, Familien, Gruppen und Partner-Reisebüros aus Europa, Asien und der ganzen Welt — mit Service auf Deutsch, Englisch, Chinesisch und Türkisch.',
      ],
    },
    values: [
      { title: 'Lokale Expertise', text: 'Jede Reise wird von unserem eigenen Team in der Türkei geplant und durchgeführt.' },
      { title: 'Ehrliche Information', text: 'Klare Leistungen, realistische Zeitpläne und keine versteckten Kosten.' },
      { title: 'Betreuung vor Ort', text: 'Ein echter Mensch am Telefon — rund um die Uhr, während Ihrer ganzen Reise.' },
      { title: 'Verantwortungsvoll reisen', text: 'Wo immer möglich arbeiten wir mit lokalen Reiseleitern, Familienrestaurants und kleinen Hotels.' },
    ],
    services: {
      title: 'Was wir anbieten',
      items: ['Rundreisen in Kleingruppen mit festen Terminen', 'Private und individuelle Reisen', 'Tagesausflüge und Erlebnisse in Istanbul, Kappadokien und an der Küste', 'Flughafen-, Stadt- und Überlandtransfers', 'Abwicklung von Gruppen-, Incentive- und MICE-Reisen', 'Leistungen für Reisebüros und Veranstalter (B2B)'],
    },
    b2b: { title: 'Für Reisebüros', text: 'Wir sind ein zuverlässiger Partner vor Ort für Reisebüros weltweit: Serienreisen, Individualleistungen, Reiseleitung in vielen Sprachen, Transport und Hotels zu Nettopreisen.' },
  },
  tr: {
    lead: 'İstanbul merkezli bir incoming tur operatörüyüz. Ekibimiz, dünyanın dört bir yanından gelen gezginler ve onları bize yönlendiren seyahat acenteleri için Türkiye genelinde rehberli turlar, özel deneyimler ve transferler planlar ve yürütür.',
    story: {
      title: 'İstanbul’da doğdu, dünyaya hizmet ediyor',
      paragraphs: [
        'WellXplore, Boğaz kıyılarında, Avrupa ile Asya arasında büyümüş turizm profesyonelleri tarafından kuruldu. Harika bir yolculuğun yerel bilgiden, dürüst tavsiyeden ve seyahati zahmetsiz kılan küçük ayrıntılara gösterilen özenden doğduğuna inanıyoruz.',
        'Adımız neyi savunduğumuzu anlatıyor: iyi keşfetmek. Bu; yorucu yolculuklar olmadan özenle tasarlanmış rotalar, konumu ve konforu için seçilmiş oteller, ülkesini seven lisanslı rehberler ve ihtiyaç duyduğunuzda yanınızda olan bir destek demek.',
        'Avrupa’dan, Asya’dan ve dünyanın her yerinden bireysel gezginleri, aileleri, grupları ve iş ortağı acenteleri Türkçe, İngilizce, Çince ve Almanca hizmetle ağırlıyoruz.',
      ],
    },
    values: [
      { title: 'Yerel uzmanlık', text: 'Her program Türkiye’deki kendi ekibimiz tarafından tasarlanır ve yürütülür.' },
      { title: 'Dürüst bilgi', text: 'Net hizmetler, gerçekçi programlar ve gizli ek ücret yok.' },
      { title: 'Sahada ilgi', text: 'Seyahatiniz boyunca 24 saat ulaşabileceğiniz gerçek bir insan.' },
      { title: 'Sorumlu turizm', text: 'Mümkün olan her yerde yerel rehberler, aile işletmesi restoranlar ve küçük otellerle çalışıyoruz.' },
    ],
    services: {
      title: 'Neler yapıyoruz',
      items: ['Türkiye genelinde programlı küçük grup turları', 'Özel ve kişiye özel programlar', 'İstanbul, Kapadokya ve kıyılarda günübirlik turlar ve deneyimler', 'Havalimanı, şehir içi ve şehirlerarası transferler', 'Grup, teşvik ve MICE operasyonları', 'Seyahat acenteleri ve tur operatörleri için hizmetler (B2B)'],
    },
    b2b: { title: 'Seyahat acenteleri için', text: 'Dünyanın dört bir yanındaki acenteler için güvenilir bir karşılama ortağıyız: seri kalkışlar, bireysel hizmetler, birçok dilde rehberlik, ulaşım ve net fiyatlı oteller.' },
  },
};
