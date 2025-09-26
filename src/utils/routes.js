// Definición simple de rutas para React Router
export const routes = {
  home: '/',
  about: '/aboutus',
  services: '/services',
  serviceDetail: '/services/:serviceSlug',
  cases: '/cases',
  contact: '/contact',
  legal: '/legal',
  notice: '/legal/notice',
  privacy: '/legal/privacy',
  cookies: '/legal/cookies'
};

/**
 * Obtiene la ruta para una clave específica
 * @param {string} pathKey - La clave de la ruta
 * @param {Object} [params] - Parámetros opcionales para reemplazar en la ruta
 * @returns {string} La ruta
 */
export function getPath(pathKey, params = {}) {
  const path = routes[pathKey];
  if (!path) {
    console.warn(`No se encontró la ruta para la clave: ${pathKey}`);
    return '/';
  }

  // Reemplazar parámetros dinámicos si existen
  let finalPath = path;
  Object.entries(params).forEach(([key, value]) => {
    finalPath = finalPath.replace(`:${key}`, value);
  });

  return finalPath;
}

/**
 * Extrae el idioma de una URL
 * @param {string} pathname - La ruta actual
 * @returns {string} El código de idioma detectado o el idioma por defecto
 */
export const getLanguageFromURL = (pathname) => {
  const match = pathname.match(/^\/(es|en|fr|de)/);
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

// Rutas universales - mismo path para todos los idiomas
export const universalRoutes = {
  home: '/',
  about: '/aboutus',
  services: '/services',
  cases: '/cases',
  contact: '/contact',
  legal: '/legal'
};

/**
 * Obtiene la ruta universal para cualquier idioma
 * @param {string} pathKey - La clave de la ruta
 * @returns {string} La ruta universal
 */
export const getLocalizedPath = (pathKey) => {
  return universalRoutes[pathKey] || '/';
};

// Hook personalizado para obtener la ruta localizada
export const useLocalizedPath = (pathKey, params) => {
  return getLocalizedPath(pathKey, params);
};