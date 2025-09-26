import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Seo } from '@/components/seo/Seo';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/common/SectionHeader';
import { services, servicesPageContent } from '@/data/services';
import { getLocaleContent, getLocaleString } from '@/utils/i18n';
import { SITE_URL } from '@/config/site';

// NETNAUTICA-EDIT: Pagina de servicios adaptada al contenido de Netnautica.es con tipografia fluida.
const ServicesPage = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const pageContent = getLocaleContent(servicesPageContent, language);

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/services/${service.slug}`, // Ruta universal corregida
        name: getLocaleContent(service.locales, language).name
      }))
    }
  ];

  return (
    <>
      <Seo title={pageContent.hero.title} description={pageContent.hero.description} structuredData={structuredData} />
      <section className="relative overflow-hidden pb-20 pt-24">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-transparent to-transparent dark:from-brand-500/10"
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 text-center sm:px-6 lg:px-8">
          <Badge>{pageContent.hero.eyebrow}</Badge>
          <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] font-semibold leading-tight text-slate-900 dark:text-white">
            {pageContent.hero.title}
          </h1>
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            {pageContent.hero.description}
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button as={Link} to={pageContent.hero.primaryCta.href} size="lg">
              {pageContent.hero.primaryCta.label}
            </Button>
            <Button as={Link} to={pageContent.hero.secondaryCta.href} variant="secondary" size="lg">
              {pageContent.hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t('services.sectionHeaders.methodology')}
          title={pageContent.intro.title}
          description={pageContent.intro.description}
          alignment="center"
          className="mx-auto max-w-3xl"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pageContent.steps.map((step, idx) => (
            <div
              key={step.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="text-sm font-semibold text-brand-500">{String(idx + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t('services.sectionHeaders.capabilities')}
          title={t('services.sectionHeaders.specializedServices')}
          description={t('services.sectionHeaders.servicesDescription')}
          alignment="center"
          className="mx-auto max-w-3xl"
        />
        <div className="mt-12 space-y-10">
          {services.map((service) => {
            const locale = getLocaleContent(service.locales, language);
            return (
              <article
                key={service.id}
                className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div className="flex flex-col gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{locale.name}</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{locale.shortDescription}</p>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    {service.metrics.map((metric) => (
                      <div
                        key={metric.id}
                        className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800/70 dark:text-slate-300"
                      >
                        <dt>{getLocaleString(metric.label, language)}</dt>
                        <dd className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button as={Link} to={`/services/${service.slug}`} size="md">
                      {t('actions.learnMore')}
                    </Button>
                    <Button as={Link} to={locale.hero.primaryCta.href} variant="secondary" size="md">
                      {locale.hero.primaryCta.label}
                    </Button>
                  </div>
                </div>
                <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-inner dark:border-slate-800 dark:bg-slate-950">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Framework</h3>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    {locale.process.map((step) => (
                      <li key={step.title} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                        <span>
                          <strong className="block text-slate-800 dark:text-slate-100">{step.title}</strong>
                          <span className="text-slate-600 dark:text-slate-300">{step.description}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-50 via-white to-brand-50 p-10 shadow-lg dark:from-brand-500/10 dark:via-slate-900 dark:to-brand-500/10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <SectionHeader
                eyebrow="Siguiente paso"
                title={pageContent.cta.title}
                description={pageContent.cta.description}
              />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button as={Link} to={pageContent.cta.primaryCta.href} size="lg">
                  {pageContent.cta.primaryCta.label}
                </Button>
                <Button as={Link} to={pageContent.hero.secondaryCta.href} variant="secondary" size="lg">
                  {pageContent.hero.secondaryCta.label}
                </Button>
              </div>
            </div>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-white">{t('services.support.title')}</p>
                <p className="mt-2">{t('services.support.description')}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-white">{t('services.integration.title')}</p>
                <p className="mt-2">{t('services.integration.description')}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-white">{t('services.documentation.title')}</p>
                <p className="mt-2">{t('services.documentation.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
