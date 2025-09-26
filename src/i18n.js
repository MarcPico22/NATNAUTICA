import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traducciones para cada idioma soportado
import es from './locales/es/translation.json';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from './config/site.js';

// CORRIGIDO: Eliminada configuración duplicada de 'detection'
// Configuración única y optimizada para detección de idioma
void i18n
  .use(initReactI18next) // Integración con React
  .use(LanguageDetector) // Detector automático de idioma
  .init({
    // Configuración de detección de idioma (UNIFICADA)
    detection: {
      order: ['path', 'localStorage', 'navigator'], // Prioridad: URL > LocalStorage > Navegador
      lookupFromPathIndex: 0, // Buscar idioma en el primer segmento de la URL
      caches: ['localStorage'], // Guardar preferencia en localStorage
      checkWhitelist: true // Solo permitir idiomas soportados
    },
    // Recursos de traducción por idioma
    resources: {
      es: { translation: es },
      en: { translation: en },
      fr: { translation: fr }
    },
    // Configuración de idiomas
    lng: DEFAULT_LANGUAGE, // Idioma por defecto: español
    fallbackLng: FALLBACK_LANGUAGE, // Idioma de respaldo: español
    supportedLngs: SUPPORTED_LANGUAGES.map((lang) => lang.code), // ['es', 'en', 'fr']
    // Configuración de interpolación
    interpolation: {
      escapeValue: false // React ya escapa por defecto
    },
    returnEmptyString: false // Devolver clave si no existe traducción
  });

export default i18n;
