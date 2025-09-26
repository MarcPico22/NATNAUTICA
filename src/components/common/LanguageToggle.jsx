// ========================================
// 🌍 SELECTOR DE IDIOMA (4 idiomas)
// ========================================
// Componente para cambiar entre ES, EN, FR y DE
// Botones tipo pill con estado activo visible
// Sincroniza con localStorage y URL params
// Modificar SUPPORTED_LANGUAGES en config/site.js para añadir idiomas

import { useLocation, useNavigate } from 'react-router-dom'; // 🔗 Navegación SPA
import { useTranslation } from 'react-i18next';              // 🌍 Hook i18n

// 📦 Configuración y utilidades
import { SUPPORTED_LANGUAGES } from '@/config/site';         // 🌍 Lista idiomas (ES/EN/FR/DE)
import { getLanguageSwitchPath } from '@/utils/routes';      // 🔄 Rutas con idioma

// ========================================
// 🎯 COMPONENTE LANGUAGE TOGGLE
// ========================================

export function LanguageToggle({ className = '' }) {
  // 🔗 Hooks de navegación y ubicación
  const location = useLocation();
  const navigate = useNavigate();
  
  // 🌍 Hook internacionalización (i18n = instancia, t = traductor)
  const { i18n, t } = useTranslation();

  // 🔄 Manejador de cambio de idioma
  // Actualiza el contexto i18n y se propaga automáticamente
  // LanguageSync se encarga de sincronizar con localStorage/URL
  const handleChange = (code) => {
    void i18n.changeLanguage(code); // void para ignorar Promise
  };

  return (
    <div className={`flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 ${className}`}>
      <span className="sr-only">{t('navigation.language')}</span>
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isActive = i18n.language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => handleChange(lang.code)}
            className={`rounded-full px-3 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
              isActive
                ? 'bg-brand-500 text-white shadow'
                : 'text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300'
            }`}
            aria-pressed={isActive}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
