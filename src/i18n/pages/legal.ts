import type { L } from '../languages';

/**
 * LEGAL TEMPLATES — have these texts reviewed by a lawyer before launch
 * (Turkish KVKK Law No. 6698, EU/UK GDPR where applicable, Turkish package-travel rules).
 */
export interface LegalDoc {
  title: string;
  intro: string;
  sections: { h: string; p?: string[]; list?: string[] }[];
}
export type LegalKey = 'privacy' | 'terms' | 'cookies';

export const legalUpdated = '2026-11-13';

export const legal: Record<LegalKey, L<LegalDoc>> = {
  privacy: {
    en: {
      title: 'Privacy Policy',
      intro: 'This policy explains how WellXplore (“we”) collects and uses personal data when you visit this website or send us an inquiry. We process data in line with the Turkish Personal Data Protection Law No. 6698 (KVKK) and, where it applies, the EU General Data Protection Regulation (GDPR).',
      sections: [
        { h: 'Data we collect', list: ['Contact details you give us: name, e-mail, phone or WhatsApp number, country.', 'Trip details: travel dates, number of travellers, preferences and messages.', 'For confirmed bookings only: passport details and information needed by hotels, airlines or authorities.', 'Technical data: your language choice and cookie preferences, stored in your browser.'] },
        { h: 'Why we use it', list: ['To answer your inquiry and prepare a quote (pre-contractual steps).', 'To provide booked services and meet legal obligations.', 'To send our newsletter, only if you subscribed — you can unsubscribe at any time.'] },
        { h: 'Who we share it with', p: ['Only with the service providers needed for your trip (hotels, guides, transport and activity partners, airlines) and with IT providers who host our e-mail and forms. We do not sell personal data.'] },
        { h: 'International transfers', p: ['Some providers may process data outside Türkiye. Where this happens we rely on your explicit consent or appropriate safeguards required by law.'] },
        { h: 'How long we keep it', p: ['Inquiry data is kept for up to 2 years; booking records for as long as tax and commercial law require.'] },
        { h: 'Your rights', p: ['You may ask to access, correct, delete or restrict the use of your data, object to processing, or withdraw consent. Contact us at the e-mail address below. You may also complain to the Turkish Personal Data Protection Authority (KVKK) or your local data protection authority.'] },
      ],
    },
    zh: {
      title: '隐私政策',
      intro: '本政策说明当您访问本网站或向我们发送咨询时，WellXplore（“我们”）如何收集和使用个人数据。我们依照土耳其《个人数据保护法》（第6698号法律，KVKK）以及适用时的欧盟《通用数据保护条例》（GDPR）处理数据。',
      sections: [
        { h: '我们收集的数据', list: ['您提供的联系方式：姓名、电子邮箱、电话或 WhatsApp 号码、国家。', '行程信息：出行日期、人数、偏好及留言。', '仅限已确认的预订：护照信息以及酒店、航空公司或相关部门所需的信息。', '技术数据：保存在您浏览器中的语言选择和 Cookie 偏好。'] },
        { h: '我们使用数据的目的', list: ['回复您的咨询并准备报价（签约前步骤）。', '提供已预订的服务并履行法律义务。', '仅在您订阅后发送通讯——您可随时退订。'] },
        { h: '我们与谁共享数据', p: ['仅与您旅行所需的服务供应商（酒店、导游、交通及活动合作方、航空公司）以及为我们托管邮件和表单的 IT 服务商共享。我们不出售个人数据。'] },
        { h: '跨境传输', p: ['部分服务商可能在土耳其境外处理数据。如有此情况，我们将依据您的明确同意或法律要求的适当保障措施进行。'] },
        { h: '保存期限', p: ['咨询数据最多保存2年；预订记录按税法和商法要求的期限保存。'] },
        { h: '您的权利', p: ['您可以要求查阅、更正、删除或限制使用您的数据，反对数据处理或撤回同意。请通过下方电子邮箱联系我们。您也可以向土耳其个人数据保护局（KVKK）或您所在地的数据保护机构投诉。'] },
      ],
    },
    de: {
      title: 'Datenschutzerklärung',
      intro: 'Diese Erklärung beschreibt, wie WellXplore („wir“) personenbezogene Daten erhebt und verwendet, wenn Sie diese Website besuchen oder uns eine Anfrage senden. Wir verarbeiten Daten gemäß dem türkischen Datenschutzgesetz Nr. 6698 (KVKK) und, soweit anwendbar, der EU-Datenschutz-Grundverordnung (DSGVO).',
      sections: [
        { h: 'Welche Daten wir erheben', list: ['Kontaktdaten, die Sie uns geben: Name, E-Mail, Telefon- oder WhatsApp-Nummer, Land.', 'Reisedaten: Reisedaten, Anzahl der Reisenden, Wünsche und Nachrichten.', 'Nur bei bestätigten Buchungen: Passdaten und Angaben, die Hotels, Fluggesellschaften oder Behörden benötigen.', 'Technische Daten: Ihre Sprachwahl und Cookie-Einstellungen, gespeichert in Ihrem Browser.'] },
        { h: 'Wozu wir sie verwenden', list: ['Zur Beantwortung Ihrer Anfrage und Erstellung eines Angebots (vorvertragliche Maßnahmen).', 'Zur Erbringung gebuchter Leistungen und Erfüllung gesetzlicher Pflichten.', 'Für den Versand unseres Newsletters, nur wenn Sie ihn abonniert haben — Abmeldung jederzeit möglich.'] },
        { h: 'An wen wir sie weitergeben', p: ['Nur an Dienstleister, die für Ihre Reise nötig sind (Hotels, Reiseleiter, Transport- und Aktivitätspartner, Fluggesellschaften), sowie an IT-Dienstleister, die unsere E-Mails und Formulare hosten. Wir verkaufen keine personenbezogenen Daten.'] },
        { h: 'Internationale Übermittlungen', p: ['Einige Dienstleister verarbeiten Daten möglicherweise außerhalb der Türkei. In diesem Fall stützen wir uns auf Ihre ausdrückliche Einwilligung oder gesetzlich vorgeschriebene Garantien.'] },
        { h: 'Speicherdauer', p: ['Anfragedaten speichern wir bis zu 2 Jahre; Buchungsunterlagen so lange, wie Steuer- und Handelsrecht es verlangen.'] },
        { h: 'Ihre Rechte', p: ['Sie können Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen, der Verarbeitung widersprechen oder Ihre Einwilligung widerrufen. Schreiben Sie uns an die unten genannte E-Mail-Adresse. Sie können sich auch bei der türkischen Datenschutzbehörde (KVKK) oder Ihrer örtlichen Aufsichtsbehörde beschweren.'] },
      ],
    },
    tr: {
      title: 'Gizlilik Politikası',
      intro: 'Bu politika, bu web sitesini ziyaret ettiğinizde veya bize talep gönderdiğinizde WellXplore’un (“biz”) kişisel verileri nasıl topladığını ve kullandığını açıklar. Verileri 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve uygulanabildiği durumlarda AB Genel Veri Koruma Tüzüğü (GDPR) uyarınca işleriz.',
      sections: [
        { h: 'Topladığımız veriler', list: ['Bize verdiğiniz iletişim bilgileri: ad, e-posta, telefon veya WhatsApp numarası, ülke.', 'Seyahat bilgileri: seyahat tarihleri, kişi sayısı, tercihler ve mesajlar.', 'Yalnızca kesinleşmiş rezervasyonlarda: pasaport bilgileri ve otellerin, havayollarının veya resmî makamların ihtiyaç duyduğu bilgiler.', 'Teknik veriler: tarayıcınızda saklanan dil seçiminiz ve çerez tercihleriniz.'] },
        { h: 'Verileri neden kullanıyoruz', list: ['Talebinizi yanıtlamak ve fiyat teklifi hazırlamak (sözleşme öncesi adımlar).', 'Rezerve edilen hizmetleri sunmak ve yasal yükümlülükleri yerine getirmek.', 'Yalnızca abone olduysanız bülten göndermek — dilediğiniz zaman abonelikten çıkabilirsiniz.'] },
        { h: 'Verileri kimlerle paylaşıyoruz', p: ['Yalnızca seyahatiniz için gerekli hizmet sağlayıcılarla (oteller, rehberler, ulaşım ve aktivite ortakları, havayolları) ve e-posta ile formlarımızı barındıran bilişim hizmeti sağlayıcılarıyla. Kişisel verileri satmayız.'] },
        { h: 'Yurt dışına aktarım', p: ['Bazı hizmet sağlayıcılar verileri Türkiye dışında işleyebilir. Bu durumda açık rızanıza veya kanunun öngördüğü uygun güvencelere dayanırız.'] },
        { h: 'Saklama süresi', p: ['Talep verileri en fazla 2 yıl; rezervasyon kayıtları vergi ve ticaret mevzuatının gerektirdiği süre boyunca saklanır.'] },
        { h: 'Haklarınız', p: ['Verilerinize erişim, düzeltme, silme veya işlemenin kısıtlanmasını talep edebilir, işlemeye itiraz edebilir veya rızanızı geri alabilirsiniz. Aşağıdaki e-posta adresinden bize ulaşın. Ayrıca Kişisel Verileri Koruma Kurumu’na başvurabilirsiniz.'] },
      ],
    },
  },
  terms: {
    en: {
      title: 'Terms & Conditions',
      intro: 'These terms apply to inquiries made through this website and to services booked with WellXplore. Please read them before confirming a booking.',
      sections: [
        { h: 'Inquiries and bookings', p: ['Forms on this website are requests for information and quotes. A booking is only confirmed when you receive our written confirmation and the agreed deposit has been paid. No payment is taken on this website.'] },
        { h: 'Prices', p: ['Prices shown are “from” prices per person in a double room unless stated otherwise, and depend on season, availability and hotel category. The final price is the one stated in your confirmation.'] },
        { h: 'Payment', p: ['Deposit and balance terms are stated in your confirmation. Payment methods are agreed directly with our team.'] },
        { h: 'Changes and cancellations', p: ['Cancellation fees depend on the service and how close to departure you cancel; they are stated in your confirmation. We may need to adjust itineraries for safety, weather or operational reasons, keeping the programme’s content as far as possible.'] },
        { h: 'Travel documents and insurance', p: ['You are responsible for valid passports, visas and health requirements. We strongly recommend comprehensive travel insurance.'] },
        { h: 'Liability', p: ['We select our partners carefully. Our liability is limited as permitted by applicable law and international conventions.'] },
        { h: 'Applicable law', p: ['These terms are governed by the laws of the Republic of Türkiye. Consumer rights under the law of your country of residence remain unaffected where applicable.'] },
      ],
    },
    zh: {
      title: '条款与条件',
      intro: '本条款适用于通过本网站发出的咨询以及在 WellXplore 预订的服务。确认预订前请仔细阅读。',
      sections: [
        { h: '咨询与预订', p: ['本网站上的表单为信息和报价请求。只有在您收到我们的书面确认并支付约定定金后，预订才算确认。本网站不收取任何付款。'] },
        { h: '价格', p: ['除另有说明外，所示价格为按双人间每人计算的起价，具体取决于季节、空位情况和酒店档次。最终价格以您的确认书为准。'] },
        { h: '付款', p: ['定金和尾款条款见您的确认书。付款方式由您与我们的团队直接商定。'] },
        { h: '变更与取消', p: ['取消费用取决于服务类型以及取消时间距出发日期的远近，具体见确认书。出于安全、天气或运营原因，我们可能需要调整行程，但会尽可能保留行程内容。'] },
        { h: '旅行证件与保险', p: ['您须自行确保护照、签证和健康要求有效。我们强烈建议购买全面的旅游保险。'] },
        { h: '责任', p: ['我们谨慎选择合作伙伴。我们的责任在适用法律和国际公约允许的范围内受到限制。'] },
        { h: '适用法律', p: ['本条款受土耳其共和国法律管辖。在适用情况下，您居住国法律赋予的消费者权利不受影响。'] },
      ],
    },
    de: {
      title: 'Allgemeine Geschäftsbedingungen',
      intro: 'Diese Bedingungen gelten für Anfragen über diese Website und für bei WellXplore gebuchte Leistungen. Bitte lesen Sie sie, bevor Sie eine Buchung bestätigen.',
      sections: [
        { h: 'Anfragen und Buchungen', p: ['Die Formulare auf dieser Website sind Anfragen nach Informationen und Angeboten. Eine Buchung ist erst bestätigt, wenn Sie unsere schriftliche Bestätigung erhalten haben und die vereinbarte Anzahlung geleistet ist. Auf dieser Website erfolgt keine Zahlung.'] },
        { h: 'Preise', p: ['Angezeigte Preise sind „ab“-Preise pro Person im Doppelzimmer, sofern nicht anders angegeben, und hängen von Saison, Verfügbarkeit und Hotelkategorie ab. Maßgeblich ist der Preis in Ihrer Bestätigung.'] },
        { h: 'Zahlung', p: ['Anzahlung und Restzahlung sind in Ihrer Bestätigung geregelt. Die Zahlungsart wird direkt mit unserem Team vereinbart.'] },
        { h: 'Änderungen und Stornierungen', p: ['Stornogebühren hängen von der Leistung und dem Zeitpunkt der Stornierung ab und sind in Ihrer Bestätigung angegeben. Aus Sicherheits-, Wetter- oder organisatorischen Gründen können Reiseverläufe angepasst werden; der Programminhalt bleibt so weit wie möglich erhalten.'] },
        { h: 'Reisedokumente und Versicherung', p: ['Sie sind für gültige Reisepässe, Visa und Gesundheitsanforderungen verantwortlich. Wir empfehlen dringend eine umfassende Reiseversicherung.'] },
        { h: 'Haftung', p: ['Wir wählen unsere Partner sorgfältig aus. Unsere Haftung ist im gesetzlich und durch internationale Abkommen zulässigen Umfang beschränkt.'] },
        { h: 'Anwendbares Recht', p: ['Es gilt das Recht der Republik Türkei. Verbraucherrechte nach dem Recht Ihres Wohnsitzlandes bleiben, soweit anwendbar, unberührt.'] },
      ],
    },
    tr: {
      title: 'Şartlar ve Koşullar',
      intro: 'Bu koşullar, bu web sitesi üzerinden yapılan talepler ve WellXplore’dan rezerve edilen hizmetler için geçerlidir. Lütfen rezervasyonunuzu onaylamadan önce okuyun.',
      sections: [
        { h: 'Talepler ve rezervasyonlar', p: ['Bu sitedeki formlar bilgi ve fiyat teklifi talepleridir. Rezervasyon, yazılı onayımızı almanız ve kararlaştırılan ön ödemeyi yapmanızla kesinleşir. Bu web sitesinde ödeme alınmaz.'] },
        { h: 'Fiyatlar', p: ['Aksi belirtilmedikçe gösterilen fiyatlar çift kişilik odada kişi başı “başlayan” fiyatlardır; sezona, müsaitliğe ve otel kategorisine göre değişir. Geçerli fiyat, onay belgenizde belirtilen fiyattır.'] },
        { h: 'Ödeme', p: ['Ön ödeme ve bakiye koşulları onay belgenizde yer alır. Ödeme yöntemi ekibimizle doğrudan kararlaştırılır.'] },
        { h: 'Değişiklikler ve iptaller', p: ['İptal ücretleri hizmete ve iptalin kalkışa ne kadar yakın yapıldığına bağlıdır; onay belgenizde belirtilir. Güvenlik, hava koşulları veya operasyonel nedenlerle programlarda değişiklik yapılabilir; programın içeriği mümkün olduğunca korunur.'] },
        { h: 'Seyahat belgeleri ve sigorta', p: ['Geçerli pasaport, vize ve sağlık gerekliliklerinden siz sorumlusunuz. Kapsamlı bir seyahat sigortası yaptırmanızı önemle tavsiye ederiz.'] },
        { h: 'Sorumluluk', p: ['İş ortaklarımızı özenle seçeriz. Sorumluluğumuz, yürürlükteki mevzuat ve uluslararası sözleşmelerin izin verdiği ölçüde sınırlıdır.'] },
        { h: 'Uygulanacak hukuk', p: ['Bu koşullar Türkiye Cumhuriyeti kanunlarına tabidir. İkamet ettiğiniz ülkenin mevzuatından doğan tüketici haklarınız, uygulanabildiği ölçüde saklıdır.'] },
      ],
    },
  },
  cookies: {
    en: {
      title: 'Cookie Policy',
      intro: 'This website uses a small amount of browser storage to work properly. We only use optional cookies if you agree to them.',
      sections: [
        { h: 'Necessary storage', list: ['Language preference (wx-lang) — remembers the language you chose.', 'Cookie consent (wx-consent) — remembers your choices in the cookie banner.'] },
        { h: 'Analytics and marketing', p: ['No analytics or advertising cookies are currently set. If we add them in future, they will only be activated after you consent in the cookie banner.'] },
        { h: 'Third-party content', p: ['Fonts are loaded from Google Fonts. Links to WhatsApp, maps or social networks open those services, which apply their own privacy policies.'] },
        { h: 'Changing your choice', p: ['You can change your choice at any time via “Cookie settings” in the footer, or delete stored data in your browser settings.'] },
      ],
    },
    zh: {
      title: 'Cookie 政策',
      intro: '本网站使用少量浏览器存储以确保正常运行。只有在您同意后，我们才会使用可选 Cookie。',
      sections: [
        { h: '必要存储', list: ['语言偏好（wx-lang）——记住您选择的语言。', 'Cookie 同意（wx-consent）——记住您在 Cookie 提示中的选择。'] },
        { h: '分析与营销', p: ['目前未设置任何分析或广告 Cookie。如将来添加，只会在您通过 Cookie 提示同意后启用。'] },
        { h: '第三方内容', p: ['字体从 Google Fonts 加载。指向 WhatsApp、地图或社交网络的链接会打开相应服务，并适用其各自的隐私政策。'] },
        { h: '更改您的选择', p: ['您可以随时通过页脚的“Cookie 设置”更改选择，或在浏览器设置中删除已存储的数据。'] },
      ],
    },
    de: {
      title: 'Cookie-Richtlinie',
      intro: 'Diese Website nutzt in geringem Umfang Browser-Speicher, um korrekt zu funktionieren. Optionale Cookies setzen wir nur mit Ihrer Zustimmung ein.',
      sections: [
        { h: 'Notwendige Speicherung', list: ['Sprachwahl (wx-lang) — merkt sich die von Ihnen gewählte Sprache.', 'Cookie-Einwilligung (wx-consent) — merkt sich Ihre Auswahl im Cookie-Banner.'] },
        { h: 'Analyse und Marketing', p: ['Derzeit werden keine Analyse- oder Werbe-Cookies gesetzt. Sollten wir sie künftig einsetzen, werden sie erst nach Ihrer Einwilligung im Cookie-Banner aktiviert.'] },
        { h: 'Inhalte Dritter', p: ['Schriften werden von Google Fonts geladen. Links zu WhatsApp, Karten oder sozialen Netzwerken öffnen diese Dienste, für die deren eigene Datenschutzbestimmungen gelten.'] },
        { h: 'Auswahl ändern', p: ['Sie können Ihre Auswahl jederzeit über „Cookie-Einstellungen“ in der Fußzeile ändern oder gespeicherte Daten in Ihren Browsereinstellungen löschen.'] },
      ],
    },
    tr: {
      title: 'Çerez Politikası',
      intro: 'Bu web sitesi düzgün çalışmak için az miktarda tarayıcı depolaması kullanır. İsteğe bağlı çerezleri yalnızca onay vermeniz halinde kullanırız.',
      sections: [
        { h: 'Zorunlu depolama', list: ['Dil tercihi (wx-lang) — seçtiğiniz dili hatırlar.', 'Çerez onayı (wx-consent) — çerez bildirimindeki tercihlerinizi hatırlar.'] },
        { h: 'Analitik ve pazarlama', p: ['Şu anda analitik veya reklam çerezi kullanılmamaktadır. İleride eklenirse, yalnızca çerez bildiriminde onay vermenizin ardından etkinleştirilir.'] },
        { h: 'Üçüncü taraf içerikleri', p: ['Yazı tipleri Google Fonts’tan yüklenir. WhatsApp, harita veya sosyal ağ bağlantıları ilgili hizmetleri açar ve bu hizmetlerin kendi gizlilik politikaları geçerlidir.'] },
        { h: 'Tercihinizi değiştirme', p: ['Tercihinizi dilediğiniz zaman alt bilgideki “Çerez ayarları” bağlantısından değiştirebilir veya saklanan verileri tarayıcı ayarlarınızdan silebilirsiniz.'] },
      ],
    },
  },
};
