import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Seo } from '@/components/seo/Seo';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ServiceCard } from '@/components/common/ServiceCard';
import { CaseCard } from '@/components/common/CaseCard';
import { MetricCard } from '@/components/common/MetricCard';
import { homeContent } from '@/data/home';
import { services } from '@/data/services';
import { caseStudies } from '@/data/cases';
import { blogPosts } from '@/data/blog';
import { homeFaq } from '@/data/faq';
import { CONTACT_DETAILS, SITE_NAME, SITE_URL, SOCIAL_LINKS } from '@/config/site';
import { getLocaleContent, getLocaleString } from '@/utils/i18n';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  sameAs: Object.values(SOCIAL_LINKS),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT_DETAILS.phone,
      contactType: 'sales',
      areaServed: 'ES'
    }
  ]
};

const getFaqSchema = (faq, language) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: language,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
});

// NETNAUTICA-EDIT: Pagina principal reorganizada para reflejar el contenido real de Netnautica.es
const HomePage = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const content = getLocaleContent(homeContent, language);
  const faq = homeFaq[language] ?? homeFaq.es;
  const featuredServices = services.slice(0, 4);
  const featuredCases = caseStudies.slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 3).map((post) => ({
    ...post,
    locale: getLocaleContent(post.locales, language)
  }));

  const structuredData = [
    organizationSchema,
    getFaqSchema(faq, language),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Smart yacht technology',
      provider: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL
      },
      areaServed: 'Mediterranean',
      description: getLocaleString(content.hero.subtitle, language)
    }
  ];

  const hero = content.hero;

  return (
    <>
      <Seo
        title={getLocaleString(hero.title, language)}
        description={getLocaleString(hero.subtitle, language)}
        structuredData={structuredData}
      />

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(77,166,255,0.32),_transparent_55%)]"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8">
          <div className="flex flex-col gap-6">
            <Badge>{getLocaleString(hero.eyebrow, language)}</Badge>
            <h1 className="text-[clamp(2.5rem,6vw,4.2rem)] font-semibold leading-tight">
              {getLocaleString(hero.title, language)}
            </h1>
            <p className="max-w-xl text-base text-slate-200 sm:text-lg">
              {getLocaleString(hero.subtitle, language)}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to={hero.primaryCta.href} size="lg">
                {getLocaleString(hero.primaryCta.label, language)}
              </Button>
              <Button
                as={Link}
                to={hero.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="!bg-white/10 !text-white hover:!bg-white/20"
              >
                {getLocaleString(hero.secondaryCta.label, language)}
              </Button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <MetricCard
                  key={getLocaleString(stat.label, language)}
                  label={getLocaleString(stat.label, language)}
                  value={getLocaleString(stat.value, language)}
                  className="bg-white/10 text-slate-200 backdrop-blur"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur">
            {hero.highlights.map((item) => (
              <div key={getLocaleString(item.title, language)} className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-brand-200">
                  <Icon name="spark" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {getLocaleString(item.title, language)}
                  </h3>
                  <p className="text-sm text-slate-200">
                    {getLocaleString(item.description, language)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title={getLocaleString(content.servicesIntro.title, language)}
          description={getLocaleString(content.servicesIntro.description, language)}
          alignment="center"
          className="mx-auto max-w-3xl"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              language={language}
              ctaLabel={t('actions.learnMore')}
            />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Technology"
                title={getLocaleString(content.technology.title, language)}
                description={getLocaleString(content.technology.description, language)}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {content.technology.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{partner.name}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {getLocaleString(partner.copy, language)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl bg-gradient-to-br from-brand-500/10 via-white to-brand-500/10 p-8 shadow-lg dark:from-brand-500/20 dark:via-slate-950 dark:to-brand-500/20">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Proyectos recientes</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {featuredCases.map((study) => (
                  <CaseCard
                    key={study.id}
                    caseStudy={study}
                    language={language}
                    ctaLabel={t('actions.readMore')}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blog"
          title={getLocaleString(content.blogHighlight.title, language)}
          description={getLocaleString(content.blogHighlight.description, language)}
          alignment="center"
          className="mx-auto max-w-3xl"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <picture>
                <source srcSet={post.heroImage.avif} type="image/avif" />
                <source srcSet={post.heroImage.webp} type="image/webp" />
                <img
                  src={post.heroImage.webp}
                  alt={post.locale.title}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full object-cover"
                />
              </picture>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {post.locale.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.locale.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-6 text-xs text-slate-500 dark:text-slate-400">
                  <span>{new Date(post.publishedAt).toLocaleDateString(language)}</span>
                  <span>{post.readingTime}</span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
                >
                  {t('actions.readMore')}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path
                      d="m13 6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button as={Link} to="/blog" variant="secondary">
            {getLocaleString(content.blogHighlight.cta.label, language)}
          </Button>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title={
              language === 'en'
                ? 'Frequently asked questions'
                : language === 'fr'
                ? 'Questions frequentes'
                : 'Preguntas frecuentes'
            }
            alignment="center"
            className="mx-auto max-w-3xl"
          />
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
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
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800" aria-hidden="true" />
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold">
            {getLocaleString(content.contactCta.title, language)}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/85">
            {getLocaleString(content.contactCta.description, language)}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to={content.contactCta.primary.href} size="lg">
              {getLocaleString(content.contactCta.primary.label, language)}
            </Button>
            <Button
              as={Link}
              to={content.contactCta.secondary.href}
              variant="secondary"
              size="lg"
              className="!bg-white/10 !text-white hover:!bg-white/20"
            >
              {getLocaleString(content.contactCta.secondary.label, language)}
            </Button>
          </div>
          <div className="flex flex-col items-center gap-1 text-sm text-white/80">
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {CONTACT_DETAILS.email}
            </a>
            <a
              href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, '')}`}
              className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {CONTACT_DETAILS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
