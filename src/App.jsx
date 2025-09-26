// ========================================
// 📱 APLICACIÓN PRINCIPAL DE NETNAUTICA
// ========================================
// Este archivo configura el enrutado principal de la SPA React
// Gestiona lazy loading, layout público y rutas protegidas
// Modificar rutas aquí afectará toda la navegación del sitio

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PublicLayout } from '@/components/layout/PublicLayout';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

// ========================================
// 🚀 LAZY LOADING DE PÁGINAS (Code Splitting)
// ========================================
// Cada página se carga solo cuando se necesita, mejorando el rendimiento inicial
// lazy() + Suspense permite dividir el bundle en chunks más pequeños
// Si añades nuevas páginas, agrégalas aquí para mantener el lazy loading

const HomePage = lazy(() => import('@/pages/home/HomePage'));              // 🏠 Landing principal
const ServicesPage = lazy(() => import('@/pages/services/ServicesPage')); // 🔧 Lista de servicios
const ServiceDetailPage = lazy(() => import('@/pages/services/ServiceDetailPage')); // 📄 Detalle servicio específico
const CaseStudiesPage = lazy(() => import('@/pages/cases/CaseStudiesPage')); // 📚 Portfolio casos
const AboutPage = lazy(() => import('@/pages/about/AboutPage'));           // ℹ️ Sobre nosotros
const ContactPage = lazy(() => import('@/pages/contact/ContactPage'));     // 📧 Formulario contacto
const LegalIndexPage = lazy(() => import('@/pages/legal/LegalIndexPage')); // ⚖️ Índice legal
const LegalNoticePage = lazy(() => import('@/pages/legal/LegalNoticePage')); // 📋 Aviso legal
const PrivacyPolicyPage = lazy(() => import('@/pages/legal/PrivacyPolicyPage')); // 🔒 Política privacidad
const CookiePolicyPage = lazy(() => import('@/pages/legal/CookiePolicyPage')); // 🍪 Política cookies
const NotFoundPage = lazy(() => import('@/pages/shared/NotFoundPage'));    // ❌ Error 404

// ========================================
// ⏳ COMPONENTE DE CARGA (Loading Fallback)
// ========================================
// Se muestra mientras las páginas se cargan con lazy loading
// Incluye spinner animado + texto accesible + soporte tema oscuro
// Modificar aquí cambiará la experiencia de carga en toda la app

const LoadingFallback = () => {
  const { t } = useTranslation(); // 🌍 Hook para internacionalización
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-600 dark:bg-slate-950 dark:text-slate-300">
      {/* 🔄 Spinner de carga con animación CSS */}
      <div className="animate-spin rounded-full border-4 border-brand-200 border-t-brand-500 p-6" aria-hidden="true" />
      {/* ♿ Texto para lectores de pantalla (accesibilidad) */}
      <span className="sr-only">{t('actions.loading')}</span>
    </div>
  );
};

// ========================================
// 🎯 COMPONENTE PRINCIPAL APP
// ========================================
// Configura la estructura de rutas de la aplicación SPA
// Todas las rutas están anidadas bajo PublicLayout para compartir header/footer
// Modificar rutas aquí afecta la navegación completa del sitio

function App() {
  return (
    <>
      {/* 📜 Restaura scroll al top en cambios de ruta */}
      <ScrollToTop />
      
      {/* ⏳ Suspense maneja la carga asíncrona de componentes lazy */}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* 🏗️ Layout público: Header + Main + Footer para todas las rutas */}
          <Route element={<PublicLayout />}>
            {/* 🏠 Ruta raíz "/" apunta a HomePage */}
            <Route index element={<HomePage />} />
            
            {/* 📄 Páginas principales del sitio */}
            <Route path="aboutus" element={<AboutPage />} />             {/* /aboutus */}
            <Route path="services" element={<ServicesPage />} />         {/* /services */}
            <Route path="services/:serviceSlug" element={<ServiceDetailPage />} /> {/* /services/connectivity */}
            <Route path="cases" element={<CaseStudiesPage />} />         {/* /cases */}
            <Route path="contact" element={<ContactPage />} />           {/* /contact */}
            
            {/* ⚖️ Sección legal (GDPR/LOPD compliance) */}
            <Route path="legal" element={<LegalIndexPage />} />          {/* /legal - índice */}
            <Route path="legal/notice" element={<LegalNoticePage />} />  {/* /legal/notice */}
            <Route path="legal/privacy" element={<PrivacyPolicyPage />} /> {/* /legal/privacy */}
            <Route path="legal/cookies" element={<CookiePolicyPage />} /> {/* /legal/cookies */}
            
            {/* ❌ Catch-all: cualquier ruta no definida muestra 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

// ========================================
// 📤 EXPORTACIÓN POR DEFECTO
// ========================================
export default App;
