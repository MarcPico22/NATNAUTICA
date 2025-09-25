export const SITE_NAME = 'Netnautica Digital';
export const SITE_TAGLINE = 'Estrategia digital, desarrollo web y rendimiento sin friccion';
export const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'https://www.netnautica.com';
export const DEFAULT_LANGUAGE = 'es';
export const FALLBACK_LANGUAGE = 'es';
export const SUPPORTED_LANGUAGES = [
  { code: 'es', label: 'ES', nativeName: 'Español' },
  { code: 'en', label: 'EN', nativeName: 'English' },
  { code: 'fr', label: 'FR', nativeName: 'Français' }
];

export const CONTACT_DETAILS = {
  email: 'hola@netnautica.com',
  phone: '+34 900 123 456',
  whatsapp: '+34 600 123 456',
  address: 'Passeig de Gracia 21, 08007 Barcelona, España',
  schedule: 'Lunes a Viernes de 9:00 a 18:00'
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
