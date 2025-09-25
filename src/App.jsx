import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PublicLayout } from '@/components/layout/PublicLayout';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

const HomePage = lazy(() => import('@/pages/home/HomePage'));
const ServicesPage = lazy(() => import('@/pages/services/ServicesPage'));
const ServiceDetailPage = lazy(() => import('@/pages/services/ServiceDetailPage'));
const CaseStudiesPage = lazy(() => import('@/pages/cases/CaseStudiesPage'));
const AboutPage = lazy(() => import('@/pages/about/AboutPage'));
const BlogListPage = lazy(() => import('@/pages/blog/BlogListPage'));
const BlogPostPage = lazy(() => import('@/pages/blog/BlogPostPage'));
const ContactPage = lazy(() => import('@/pages/contact/ContactPage'));
const LegalIndexPage = lazy(() => import('@/pages/legal/LegalIndexPage'));
const LegalNoticePage = lazy(() => import('@/pages/legal/LegalNoticePage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/legal/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('@/pages/legal/CookiePolicyPage'));
const NotFoundPage = lazy(() => import('@/pages/shared/NotFoundPage'));

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-600 dark:bg-slate-950 dark:text-slate-300">
    <div className="animate-spin rounded-full border-4 border-brand-200 border-t-brand-500 p-6" aria-hidden="true" />
    <span className="sr-only">Cargando...</span>
  </div>
);

const App = () => (
  <>
    <ScrollToTop />
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="servicios/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="casos-de-exito" element={<CaseStudiesPage />} />
          <Route path="sobre-nosotros" element={<AboutPage />} />
          <Route path="blog" element={<BlogListPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="legales" element={<LegalIndexPage />} />
          <Route path="legales/aviso-legal" element={<LegalNoticePage />} />
          <Route path="legales/politica-de-privacidad" element={<PrivacyPolicyPage />} />
          <Route path="legales/politica-de-cookies" element={<CookiePolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default App;
