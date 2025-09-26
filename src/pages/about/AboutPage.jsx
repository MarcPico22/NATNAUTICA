import { useTranslation } from 'react-i18next';

import { Seo } from '@/components/seo/Seo';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Button } from '@/components/ui/Button';
import { aboutContent } from '@/data/about';
import { getLocaleContent } from '@/utils/i18n';

// NETNAUTICA-EDIT: Pagina corporativa ajustada al posicionamiento de Netnautica.es
const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const content = getLocaleContent(aboutContent, language);

  return (
    <>
      <Seo title={content.hero.title} description={content.hero.description} />
      <section className="relative overflow-hidden pb-20 pt-24">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-transparent to-transparent dark:from-brand-500/10"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="flex flex-col gap-6">
            <Badge>{content.hero.eyebrow}</Badge>
            <h1 className="text-[clamp(2.5rem,5vw,3.8rem)] font-semibold leading-tight text-slate-900 dark:text-white">
              {content.hero.title}
            </h1>
            <p className="text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">{content.hero.description}</p>
            <div className="flex flex-wrap gap-3">
              <Button as="a" href="/contact" size="lg">
                {t('about.cta.primary')}
              </Button>
              <Button as="a" href="/services" variant="secondary" size="lg">
                {t('about.cta.secondary')}
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            {content.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-800/70 dark:text-slate-300"
              >
                <p>{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Pilares" title={t('about.headings.pillars')} alignment="center" className="mx-auto max-w-3xl" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Equipo" title={content.team.title} alignment="center" className="mx-auto max-w-3xl" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.team.members.map((member) => (
            <article
              key={member.name}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="h-16 w-16 rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10" aria-hidden="true" />
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-sm font-medium text-brand-600 dark:text-brand-300">{member.role}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Timeline" title={t('about.headings.timeline')} alignment="center" className="mx-auto max-w-3xl" />
        <div className="relative mt-10">
          <span className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
          <ol className="space-y-6 pl-10">
            {content.timeline.map((item) => (
              <li
                key={item.year}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-sm font-semibold text-brand-600 dark:text-brand-300">{item.year}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.milestone}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Cultura" title={t('about.headings.culture')} alignment="center" className="mx-auto max-w-3xl" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.culture.items.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
