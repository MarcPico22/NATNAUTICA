export const SITE_NAME = 'Netnautica Digital';
export const SITE_TAGLINE = {
  es: 'Estrategia digital, desarrollo web y rendimiento sin friccion',
  en: 'Digital strategy, web development and frictionless performance',
  fr: 'Stratégie digitale, développement web et performance sans friction',
  de: 'Digitale Strategie, Webentwicklung und reibungslose Leistung'
};
export const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'https://www.netnautica.com';
export const DEFAULT_LANGUAGE = 'es';
export const FALLBACK_LANGUAGE = 'es';
export const SUPPORTED_LANGUAGES = [
  { code: 'es', label: 'ES', nativeName: 'Español' },
  { code: 'en', label: 'EN', nativeName: 'English' },
  { code: 'fr', label: 'FR', nativeName: 'Français' },
  { code: 'de', label: 'DE', nativeName: 'Deutsch' }
];

export const CONTACT_DETAILS = {
  email: 'cliente@netnautica.es',
  phone: {
    es: '+34 900 123 456',
    en: '+34 900 123 456',
    fr: '+34 900 123 456',
    de: '+34 900 123 456'
  },
  whatsapp: {
    es: '+34 600 123 456',
    en: '+34 600 123 456',
    fr: '+34 600 123 456',
    de: '+34 600 123 456'
  },
  address: {
    es: 'Passeig de Gracia 21, 08007 Barcelona, España',
    en: 'Passeig de Gracia 21, 08007 Barcelona, Spain',
    fr: 'Passeig de Gracia 21, 08007 Barcelona, Espagne',
    de: 'Passeig de Gracia 21, 08007 Barcelona, Spanien'
  },
  schedule: {
    es: 'Lunes a Viernes de 9:00 a 18:00',
    en: 'Monday to Friday from 9:00 to 18:00',
    fr: 'Lundi à Vendredi de 9:00 à 18:00',
    de: 'Montag bis Freitag von 9:00 bis 18:00'
  }
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/netnautica',
  twitter: 'https://twitter.com/netnautica',
  youtube: 'https://www.youtube.com/@netnautica',
  github: 'https://github.com/netnautica'
};

export const ANALYTICS_PLACEHOLDER = {
  gtmId: 'GTM-XXXXXXX',
  gaId: 'G-XXXXXXXXXX'
};

export const FORM_STEPS = 3;
