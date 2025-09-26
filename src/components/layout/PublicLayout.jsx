// ========================================
// 🏗️ LAYOUT PÚBLICO PRINCIPAL
// ========================================
// Layout wrapper para todas las páginas públicas del sitio web
// Proporciona estructura común: Header + Main + Footer + Cookie Banner
// Incluye skip link para accesibilidad y temas claro/oscuro
// Modificar aquí afecta el layout de TODAS las páginas

import { Outlet } from 'react-router-dom';         // 🔗 Renderiza páginas hijas
import { useTranslation } from 'react-i18next';    // 🌍 Hook internacionalización

// 📦 Componentes de layout
import { Header } from '@/components/layout/Header';       // 🎯 Navegación principal
import { Footer } from '@/components/layout/Footer';       // 🦶 Pie de página
import { CookieBanner } from '@/components/layout/CookieBanner'; // 🍪 Banner GDPR

// ========================================
// 🎯 COMPONENTE PUBLIC LAYOUT
// ========================================
// Layout principal que envuelve todas las páginas públicas
// Proporciona estructura consistente y funcionalidades globales
// Es el único layout del sitio (no hay layouts privados/admin)

export function PublicLayout() {
  const { t } = useTranslation(); // 🌍 Hook para traducciones

  return (
    // 🎨 Container principal con flexbox vertical + temas
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      
      {/* ========================================
          ♿ ACCESIBILIDAD - SKIP LINK
          ======================================== */}
      {/* Enlace invisible que aparece con Tab para usuarios de teclado */}
      {/* Permite saltar directamente al contenido principal */}
      <a className="skip-link" href="#contenido-principal">
        {t('accessibility.skipToContent')}
      </a>
      
      {/* ========================================
          🎯 NAVEGACIÓN PRINCIPAL
          ======================================== */}
      {/* Header sticky con logo, menú, idiomas y tema */}
      <Header />
      
      {/* ========================================
          📄 ÁREA DE CONTENIDO PRINCIPAL
          ======================================== */}
      {/* flex-1 hace que ocupe todo el espacio disponible */}
      {/* Outlet renderiza la página actual según la ruta */}
      <main id="contenido-principal" className="flex-1">
        <Outlet /> {/* 🔗 Aquí se renderiza HomePage, AboutPage, etc. */}
      </main>
      
      {/* ========================================
          🦶 PIE DE PÁGINA
          ======================================== */}
      {/* Footer con enlaces, contacto y redes sociales */}
      <Footer />
      
      {/* ========================================
          🍪 CUMPLIMIENTO GDPR
          ======================================== */}
      {/* Banner de cookies para cumplir normativa europea */}
      <CookieBanner />
    </div>
  );
}
