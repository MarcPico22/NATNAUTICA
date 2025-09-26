import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';

/**
 * COMPONENTE: PublicLayout
 * Layout principal para todas las páginas públicas del sitio
 * Incluye: Header, contenido principal, Footer, banner de cookies y enlace de accesibilidad
 */
export function PublicLayout() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      {/* ACCESIBILIDAD: Enlace para saltar al contenido principal */}
      <a className="skip-link" href="#contenido-principal">
        {t('accessibility.skipToContent')}
      </a>
      
      {/* HEADER: Navegación principal y logo */}
      <Header />
      
      {/* CONTENIDO PRINCIPAL: Renderiza las páginas individuales */}
      <main id="contenido-principal" className="flex-1">
        <Outlet />
      </main>
      
      {/* FOOTER: Información de contacto, enlaces legales, redes sociales */}
      <Footer />
      
      {/* BANNER DE COOKIES: Cumplimiento GDPR */}
      <CookieBanner />
    </div>
  );
}
