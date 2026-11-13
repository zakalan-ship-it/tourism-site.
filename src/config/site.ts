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
    /** Google Maps embed is not loaded; this link opens the map in a new tab. */
    mapUrl: 'https://maps.google.com/?q=Beyoglu+Istanbul',
  },

  /** Shown in the footer only when filled in, e.g. 'TÜRSAB A-0000'. */
  licence: '',

  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    wechat: '', // WeChat ID, shown as text
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
