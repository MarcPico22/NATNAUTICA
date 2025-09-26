import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '@/config/site';

const STORAGE_KEY = 'netnautica-lang';
const SUPPORTED_CODES = new Set(SUPPORTED_LANGUAGES.map((lang) => lang.code));

const normalizeLanguage = (value) => (value && SUPPORTED_CODES.has(value) ? value : undefined);

export function LanguageSync() {
  const location = useLocation();
  const { i18n } = useTranslation();

  // Efecto para inicializar el idioma correctamente al cargar
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const storedLang = normalizeLanguage(localStorage.getItem(STORAGE_KEY));
    if (storedLang && storedLang !== i18n.language) {
      void i18n.changeLanguage(storedLang);
    }
    document.documentElement.lang = i18n.language;
  }, []); // Solo se ejecuta al montar el componente

  // Efecto para manejar cambios de idioma desde parámetros URL
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    // Solo procesar parámetros de URL para cambios explícitos de idioma
    const params = new URLSearchParams(location.search);
    const paramLang = normalizeLanguage(params.get('lang'));
    
    // Si hay un parámetro de idioma en la URL, aplicarlo
    if (paramLang && paramLang !== i18n.language) {
      void i18n.changeLanguage(paramLang);
      localStorage.setItem(STORAGE_KEY, paramLang);
    }
    
    // Siempre sincronizar el atributo lang del documento
    document.documentElement.lang = i18n.language;

    return undefined;
  }, [i18n, location.search]); // Solo depende de location.search, no de pathname

  return null;
}
