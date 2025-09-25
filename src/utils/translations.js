import { DEFAULT_LANGUAGE } from '@/config/site';

/**
 * Obtiene el valor localizado de un objeto de traducciones
 * @param {Object} translations - Objeto con traducciones en formato {es: '', en: '', fr: ''}
 * @param {string} language - Código de idioma actual
 * @param {string} defaultValue - Valor por defecto si no se encuentra traducción
 * @returns {string} Texto traducido
 */
export const getLocalizedValue = (translations, language, defaultValue = '') => {
  if (!translations) {
    return defaultValue;
  }

  if (typeof translations === 'string') {
    return translations;
  }

  return translations[language] ?? translations[DEFAULT_LANGUAGE] ?? defaultValue;
};

/**
 * Hook personalizado para obtener valores localizados
 * @param {Object} translations - Objeto con traducciones
 * @param {string} defaultValue - Valor por defecto
 * @returns {string} Texto traducido
 */
export const useLocalizedValue = (translations, defaultValue = '') => {
  const { i18n } = useTranslation();
  return getLocalizedValue(translations, i18n.language, defaultValue);
};