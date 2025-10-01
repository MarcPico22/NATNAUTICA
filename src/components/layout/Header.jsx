// ========================================
// 🎯 HEADER - NAVEGACIÓN PRINCIPAL
// ========================================
// Navegación sticky con logo, menú, selector idioma/tema y CTA
// Responsive: menú hamburguesa en móvil, navegación completa en desktop
// Modificar aquí afecta la navegación en TODAS las páginas

import { useEffect, useState } from 'react';              // ⚛️ Hooks React
import { Link, NavLink, useLocation } from 'react-router-dom'; // 🔗 Navegación SPA
import { useTranslation } from 'react-i18next';          // 🌍 Hook internacionalización
import { routes, getPath, getLocalizedPath } from '@/utils/routes';         // 🛣️ Utilidades rutas

// 📊 Datos y componentes
import { NAVIGATION_ITEMS } from '@/data/navigation';     // 📋 Lista elementos menú
import { Logo } from '@/components/common/Logo';          // 🏷️ Logo Netnautica
import { LanguageToggle } from '@/components/common/LanguageToggle'; // 🌍 Selector idioma
import { ThemeToggle } from '@/components/common/ThemeToggle';       // 🌓 Toggle tema
import { SearchModal } from '@/components/common/SearchModal';       // 🔍 Modal búsqueda

// ========================================
// 🎯 COMPONENTE HEADER
// ========================================

export function Header() {
  // 🌍 Hook internacionalización (i18n para idioma, t para traducciones)
  const { t, i18n } = useTranslation();
  
  // 📱 Estado del menú móvil (hamburguesa)
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  // 🔍 Estado del modal de búsqueda
  const [isSearchOpen, setSearchOpen] = useState(false);
  
  // 📍 Hook para detectar cambios de ruta
  const location = useLocation();

  // 🔄 Cierra el menú móvil automáticamente al cambiar de página
  // Mejora UX: no queda el menú abierto tras navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur transition-colors supports-[backdrop-filter]:bg-white/70 dark:border-slate-800/60 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo className="shrink-0" />
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={getPath(item.id)}
              className={({ isActive }) =>
                `relative text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300 ${
                  isActive ? 'text-brand-600 dark:text-brand-300' : ''
                }`
              }
            >
              <span>{t(item.translationKey)}</span>
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setSearchOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-brand-400 hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
            aria-label={t('search.open', 'Abrir búsqueda')}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <LanguageToggle />
          <ThemeToggle />
          <Link
            to={getPath('contact')}
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            <span>{t('actions.requestQuote')}</span>
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-brand-400 hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span className="sr-only">{t('navigation.toggle')}</span>
          {isMenuOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" aria-live="polite">
          <div className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm" aria-hidden="true" onClick={() => setMenuOpen(false)} />
          <div className="fixed inset-x-4 top-20 z-50 origin-top rounded-3xl border border-slate-200/60 bg-white p-6 shadow-2xl shadow-slate-900/20 dark:border-slate-700/60 dark:bg-slate-900">
            <nav id="primary-navigation" className="flex flex-col gap-4 text-base font-semibold text-slate-700 dark:text-slate-200">
              {NAVIGATION_ITEMS.map((item) => (
                <NavLink
                  key={item.id}
                  to={getLocalizedPath(item.id)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 transition hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-slate-800/80 ${
                      isActive ? 'bg-brand-50 text-brand-600 dark:bg-slate-800/80 dark:text-brand-300' : ''
                    }`
                  }
                >
                  {t(item.translationKey)}
                </NavLink>
              ))}
            </nav>
            <div className="mt-6 flex items-center justify-between gap-3">
              <LanguageToggle className="grow justify-center" />
              <ThemeToggle />
            </div>
            <Link
              to={getLocalizedPath('contact')}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              {t('actions.requestQuote')}
            </Link>
          </div>
        </div>
      )}
      
      {/* 🔍 Modal de búsqueda */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
