// ========================================
// 🔄 SINCRONIZACIÓN DE IDIOMA GLOBAL
// ========================================
// Provider que sincroniza el idioma entre:
// - localStorage (persistencia)
// - URL params (?lang=de)
// - atributo HTML lang
// - contexto i18next
// Se ejecuta automáticamente al cambiar de ruta o idioma

import { useEffect } from 'react';                   // ⚛️ Hook efectos
import { useLocation } from 'react-router-dom';      // 📍 Ubicación actual
import { useTranslation } from 'react-i18next';     // 🌍 Hook i18n

// ⚙️ Configuración idiomas
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '@/config/site';

// 💾 Constantes de sincronización
const STORAGE_KEY = 'netnautica-lang';              // 🖼️ Clave localStorage
const SUPPORTED_CODES = new Set(SUPPORTED_LANGUAGES.map((lang) => lang.code)); // 🌍 Set códigos válidos

// 🧹 Validador de idiomas: solo acepta idiomas soportados
const normalizeLanguage = (value) => (value && SUPPORTED_CODES.has(value) ? value : undefined);

// ========================================
// 🎯 COMPONENTE LANGUAGE SYNC
// ========================================

export function LanguageSync() {
  const location = useLocation();  // 📍 Para detectar cambios de ruta
  const { i18n } = useTranslation(); // 🌍 Instancia i18next

  // ========================================
  // 🚀 INICIALIZACIÓN AL CARGAR
  // ========================================
  // Se ejecuta solo una vez al montar el componente
  useEffect(() => {
    if (typeof window === 'undefined') return; // 🚑 SSR safety
    
    // 💾 Restaurar idioma desde localStorage
    const storedLang = normalizeLanguage(localStorage.getItem(STORAGE_KEY));
    if (storedLang && storedLang !== i18n.language) {
      void i18n.changeLanguage(storedLang); // Cambiar si es diferente
    }
    
    // 🏷️ Sincronizar atributo HTML lang
    document.documentElement.lang = i18n.language;
  }, []); // ⚠️ Array vacío = solo al montar

  // ========================================
  // 🔗 SINCRONIZACIÓN CON URL PARAMS
  // ========================================
  // Detecta ?lang=de en URL y cambia idioma
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined; // 🚑 SSR safety
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
