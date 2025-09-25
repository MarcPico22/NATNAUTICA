import i18next from 'i18next';

// Definición de rutas base para React Router
export const urlPaths = {
  home: ':lang?',
  about: ':lang/:aboutPath',
  services: ':lang/:servicesPath',
  serviceDetail: ':lang/:servicesPath/:serviceSlug',
  cases: ':lang/:casesPath',
  contact: ':lang/:contactPath',
  legal: ':lang/:legalPath',
  notice: ':lang/:legalPath/notice',
  privacy: ':lang/:legalPath/privacy',
  cookies: ':lang/:legalPath/cookies'
};

// Definición de segmentos de ruta localizados
export const localizedSegments = {
  aboutPath: {
    es: 'sobre-nosotros',
    en: 'about-us',
    fr: 'a-propos'
  },
  servicesPath: {
    es: 'servicios',
    en: 'services',
    fr: 'services'
  },
  casesPath: {
    es: 'casos-de-exito',
    en: 'case-studies',
    fr: 'projets'
  },
  contactPath: {
    es: 'contacto',
    en: 'contact',
    fr: 'contact'
  },
  legalPath: {
    es: 'legales',
    en: 'legal',
    fr: 'mentions-legales'
  }
};

/**
 * Genera una URL localizada para una ruta específica
 * @param {string} key - La clave de la ruta
 * @returns {string} URL localizada
 */
export function getLocalizedPath(key) {
  const currentLanguage = i18next.language || 'es';
  return `/${currentLanguage}/${key}`;
  
  if (!path) {
    console.warn(`No se encontró la ruta para la clave: ${pathKey}`);
    return '/';
  }

  // Reemplazar el parámetro de idioma
  path = path.replace(':lang?', currentLanguage);
  path = path.replace(':lang', currentLanguage);

  // Reemplazar segmentos localizados
  Object.entries(localizedSegments).forEach(([key, translations]) => {
    const localizedSegment = translations[currentLanguage] || translations.en;
    path = path.replace(`:${key}`, localizedSegment);
  });

  // Reemplazar otros parámetros de ruta
  Object.entries(params).forEach(([key, value]) => {
    path = path.replace(`:${key}`, value);
  });

  return '/' + path.replace(/^\/+/, '');
};

/**
 * Extrae el idioma de una URL
 * @param {string} pathname - La ruta actual
 * @returns {string} El código de idioma detectado o el idioma por defecto
 */
export const getLanguageFromURL = (pathname) => {
  const match = pathname.match(/^\/(es|en|fr)/);
  return match ? match[1] : 'es';
};

/**
 * Genera una URL para cambiar el idioma manteniendo la ruta actual
 * @param {string} newLanguage - El nuevo código de idioma
 * @param {string} currentPath - La ruta actual
 * @returns {string} URL con el nuevo idioma
 */
export const getLanguageSwitchPath = (newLanguage, currentPath) => {
  const currentLanguage = getLanguageFromURL(currentPath);
  return currentPath.replace(`/${currentLanguage}`, `/${newLanguage}`);
};

// Hook personalizado para obtener la ruta localizada
export const useLocalizedPath = (pathKey, params) => {
  return getLocalizedPath(pathKey, params);
};