import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PublicLayout } from '@/components/layout/PublicLayout';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { LanguageRedirect } from '@/components/common/LanguageRedirect';

const HomePage = lazy(() => import('@/pages/home/HomePage'));
const ServicesPage = lazy(() => import('@/pages/services/ServicesPage'));
const ServiceDetailPage = lazy(() => import('@/pages/services/ServiceDetailPage'));
const CaseStudiesPage = lazy(() => import('@/pages/cases/CaseStudiesPage'));
const AboutPage = lazy(() => import('@/pages/about/AboutPage'));
const ContactPage = lazy(() => import('@/pages/contact/ContactPage'));
const LegalIndexPage = lazy(() => import('@/pages/legal/LegalIndexPage'));
const LegalNoticePage = lazy(() => import('@/pages/legal/LegalNoticePage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/legal/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('@/pages/legal/CookiePolicyPage'));
const NotFoundPage = lazy(() => import('@/pages/shared/NotFoundPage'));

const LoadingFallback = () => {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-600 dark:bg-slate-950 dark:text-slate-300">
      <div className="animate-spin rounded-full border-4 border-brand-200 border-t-brand-500 p-6" aria-hidden="true" />
      <span className="sr-only">{t('actions.loading')}</span>
    </div>
  );
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="aboutus" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:serviceSlug" element={<ServiceDetailPage />} />
            <Route path="cases" element={<CaseStudiesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="legal" element={<LegalIndexPage />} />
            <Route path="legal/notice" element={<LegalNoticePage />} />
            <Route path="legal/privacy" element={<PrivacyPolicyPage />} />
            <Route path="legal/cookies" element={<CookiePolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
