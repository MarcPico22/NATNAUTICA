import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importaciones de traducciones
import es from './locales/es/translation.json';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import de from './locales/de/translation.json';
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from './config/site.js';

// CONFIGURACIÓN COMPLETA DESDE CERO PARA ARREGLAR PROBLEMA DE CARGA
const initI18n = async () => {
  await i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      // Configuración de debugging
      debug: true, // Activar logs para diagnosticar
      
      // Configuración de detección de idioma
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
        lookupLocalStorage: 'netnautica-lang',
        checkWhitelist: true
      },
      
      // Recursos de traducción
      resources: {
        es: { translation: es },
        en: { translation: en },
        fr: { translation: fr },
        de: { translation: de }
      },
      
      // Configuración de idiomas
      lng: DEFAULT_LANGUAGE,
      fallbackLng: FALLBACK_LANGUAGE,
      supportedLngs: SUPPORTED_LANGUAGES.map((lang) => lang.code),
      
      // Configuración crítica para forzar carga
      load: 'all', // Cargar todos los idiomas
      preload: ['es', 'en', 'fr', 'de'], // Precargar todos los idiomas
      
      // Configuración de interpolación
      interpolation: {
        escapeValue: false
      },
      
      // Configuración de retorno
      returnEmptyString: false,
      returnNull: false,
      returnObjects: false
    });
    
  console.log('🚀 i18next initialized with language:', i18n.language);
  console.log('🔧 Available resources:', Object.keys(i18n.services.resourceStore.data));
  console.log('🌊 Current translations loaded:', !!i18n.services.resourceStore.data[i18n.language]);
};

// Inicializar inmediatamente
initI18n();

export default i18n;
