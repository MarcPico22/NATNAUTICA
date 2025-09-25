import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Seo } from '@/components/seo/Seo';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/common/SectionHeader';
import { services } from '@/data/services';
import { getLocaleContent, getLocaleString } from '@/utils/i18n';
import { CONTACT_DETAILS, SITE_NAME, SITE_URL } from '@/config/site';

// NETNAUTICA-EDIT: Detalle de servicio adaptado a la propuesta tecnologica de Netnautica.es.
const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const { i18n, t } = useTranslation();
  const language = i18n.language;

  const service = services.find((item) => item.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const locale = getLocaleContent(service.locales, language);

  const faqTitles = {
    es: 'Preguntas frecuentes',
    en: 'Frequently asked questions',
    fr: 'Questions frequentes'
  };
  const faqTitle = getLocaleString(faqTitles, language);

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: locale.name,
      serviceType: locale.name,
      provider: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONTACT_DETAILS.phone,
          contactType: 'sales'
        }
      },
      description: locale.shortDescription,
      areaServed: ['ES', 'FR', 'EN']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: locale.faq.map((faqItem) => ({
        '@type': 'Question',
        name: faqItem.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faqItem.answer
        }
      }))
    }
  ];

  return (
    <>
      <Seo title={locale.name} description={locale.shortDescription} structuredData={structuredData} />
      <section className="relative overflow-hidden pb-20 pt-24">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-transparent to-transparent dark:from-brand-500/10"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
              {locale.hero.tagline}
            </span>
            <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] font-semibold leading-tight text-slate-900 dark:text-white">
              {locale.name}
            </h1>
            <p className="text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              {locale.hero.description}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to={locale.hero.primaryCta.href} size="lg">
                {locale.hero.primaryCta.label}
              </Button>
              <Button as={Link} to={locale.hero.secondaryCta.href} variant="secondary" size="lg">
                {locale.hero.secondaryCta.label}
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Metricas clave</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800/70 dark:text-slate-300"
                >
                  <p>{getLocaleString(metric.label, language)}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Beneficios"
          title={locale.name}
          description={locale.shortDescription}
          alignment="center"
          className="mx-auto max-w-3xl"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {locale.benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="Proceso" title="Como lo ejecutamos" />
            <ol className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              {locale.process.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-600 dark:bg-brand-500/10">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white">{step.title}</h4>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Caso real</h3>
            <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{locale.caseStudy.company}</p>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>
                <strong className="block text-slate-800 dark:text-slate-100">Reto</strong>
                {locale.caseStudy.challenge}
              </p>
              <p>
                <strong className="block text-slate-800 dark:text-slate-100">Solucion</strong>
                {locale.caseStudy.solution}
              </p>
              <p>
                <strong className="block text-slate-800 dark:text-slate-100">Resultado</strong>
                {locale.caseStudy.result}
              </p>
            </div>
            <Button as={Link} to="/casos-de-exito" className="mt-6" variant="secondary">
              {t('actions.viewAll')}
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title={faqTitle} alignment="center" className="mx-auto max-w-2xl" />
        <div className="mt-8 space-y-4">
          {locale.faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-sm font-semibold text-slate-800 dark:text-slate-100">
                {item.question}
                <span className="text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-10 text-white shadow-xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">{locale.hero.tagline}</h2>
          <p className="mt-4 max-w-2xl text-base text-white/80">{locale.hero.description}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to={locale.hero.primaryCta.href} size="lg">
              {locale.hero.primaryCta.label}
            </Button>
            <Button
              as={Link}
              to="/contacto"
              variant="secondary"
              size="lg"
              className="!bg-white/10 !text-white hover:!bg-white/20"
            >
              {t('actions.requestQuote')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
