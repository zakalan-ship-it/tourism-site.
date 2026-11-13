/**
 * Company-wide settings. Edit these values — every page reads from here.
 */
export const site = {
  name: 'WellXplore',
  legalName: 'WellXplore Travel & Tourism',
  url: 'https://www.wellxplore.com',

  contact: {
    // PLACEHOLDERS — replace with the real details before launch.
    phoneDisplay: '+90 212 000 00 00',
    phoneHref: '+902120000000',
    /** WhatsApp number in international format, digits only (no +, spaces or dashes). */
    whatsapp: '905000000000',
    email: 'info@wellxplore.com',
    address: {
      line1: 'Placeholder Street No: 1',
      line2: 'Beyoğlu, 34000 Istanbul',
      country: 'Türkiye',
    },
    hours: 'Mon–Sat 09:00–19:00 (GMT+3)',
    /** Map links (no embeds are loaded). Google Maps is blocked in mainland China, so /zh/ uses Amap. */
    mapUrl: 'https://maps.google.com/?q=Beyoglu+Istanbul',
    mapUrlZh: 'https://uri.amap.com/search?keyword=Beyoglu%20Istanbul',
    /**
     * WeChat ID shown on the Chinese pages (WhatsApp is blocked in mainland China).
     * Add a QR code image at src/assets/brand/wechat-qr.png and it appears automatically.
     */
    wechatId: '',
  },

  /** TÜRSAB travel-agency licence, e.g. 'A-0000'. Shown in the footer and on Our Story when filled in. */
  licence: '',

  /** Profile URLs. International channels show on /en/, Chinese channels on /zh/. Empty = hidden. */
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
    tripadvisor: '',
    xiaohongshu: '', // 小红书 (RedNote)
    douyin: '', // 抖音
    weibo: '', // 微博
  },

  /** Currency used for all displayed prices. */
  currency: 'EUR',

  forms: {
    /**
     * Where inquiry, transfer, contact and newsletter forms are POSTed (JSON).
     * Works with Formspree, Getform, Netlify Functions or your own API.
     * Leave empty to let visitors send their inquiry by WhatsApp or e-mail instead.
     */
    endpoint: '',
    newsletterEndpoint: '',
  },
} as const;

export const whatsappLink = (text = '') =>
  `https://wa.me/${site.contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
