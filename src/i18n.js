import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from './config/site.js';

// Importaciones de traducciones
import es from './locales/es/translation.json';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import de from './locales/de/translation.json';

// CONFIGURACIÓN SÍNCRONA PARA ARREGLAR PROBLEMA DE CARGA
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // Configuración de debugging
    debug: true, // Activar logs para diagnosticar
    
    // Configuración de detección de idioma mejorada
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'netnautica-lang',
      checkWhitelist: true,
      // Mejorar la detección del navegador
      convertDetectedLanguage: (lng) => {
        // Convertir códigos de idioma complejos (es-ES -> es)
        return lng.split('-')[0];
      }
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
    returnObjects: true
  }, (err, t) => {
    if (err) {
      console.error('❌ Error initializing i18next:', err);
    } else {
      console.log('🚀 i18next initialized successfully');
      console.log('🔧 Language:', i18n.language);
      console.log('🌊 Test translation:', t('servicesSection.title'));
      console.log('📦 Available languages:', Object.keys(i18n.services.resourceStore.data));
    }
  });

export default i18n;
