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
  },
  cookies: {
    en: {
      title: 'Cookie Policy',
      intro: 'This website uses a small amount of browser storage to work properly. We only use optional cookies if you agree to them.',
      sections: [
        { h: 'Necessary storage', list: ['Language preference (wx-lang) — remembers the language you chose.', 'Cookie consent (wx-consent) — remembers your choices in the cookie banner.'] },
        { h: 'Analytics and marketing', p: ['No analytics or advertising cookies are currently set. If we add them in future, they will only be activated after you consent in the cookie banner.'] },
        { h: 'Third-party content', p: ['All fonts and images are served from this website; no Google services are loaded. Links to WhatsApp, WeChat, maps or social networks open those services, which apply their own privacy policies.'] },
        { h: 'Changing your choice', p: ['You can change your choice at any time via “Cookie settings” in the footer, or delete stored data in your browser settings.'] },
      ],
    },
    zh: {
      title: 'Cookie 政策',
      intro: '本网站使用少量浏览器存储以确保正常运行。只有在您同意后，我们才会使用可选 Cookie。',
      sections: [
        { h: '必要存储', list: ['语言偏好（wx-lang）——记住您选择的语言。', 'Cookie 同意（wx-consent）——记住您在 Cookie 提示中的选择。'] },
        { h: '分析与营销', p: ['目前未设置任何分析或广告 Cookie。如将来添加，只会在您通过 Cookie 提示同意后启用。'] },
        { h: '第三方内容', p: ['所有字体和图片均由本网站自行提供，不加载任何谷歌服务。指向 WhatsApp、微信、地图或社交网络的链接会打开相应服务，并适用其各自的隐私政策。'] },
        { h: '更改您的选择', p: ['您可以随时通过页脚的“Cookie 设置”更改选择，或在浏览器设置中删除已存储的数据。'] },
      ],
    },
  },
};
