import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es/translation.json';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from './config/site.js';

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage']
    },
  detection: {
    order: ['path', 'navigator'],
    lookupFromPathIndex: 0,
    checkWhitelist: true
  },
  resources: {
    es: { translation: es },
    en: { translation: en },
    fr: { translation: fr }
  },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: FALLBACK_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES.map((lang) => lang.code),
  interpolation: {
    escapeValue: false
  },
  returnEmptyString: false
});

export default i18n;
