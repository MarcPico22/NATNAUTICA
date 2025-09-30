import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { cn } from '@/utils/cn';
import { getLocaleContent, getLocaleString } from '@/utils/i18n';
import { Icon } from '@/components/ui/Icon';

// CORREGIDO: Usar ruta universal en lugar de rutas localizadas
const CASES_PATH = '/cases';

export const CaseCard = memo(function CaseCard({ caseStudy, ctaLabel, className = '' }) {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const locale = getLocaleContent(caseStudy.locales, language);

  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900',
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          {/* NETNAUTICA-EDIT: Ensure locale string is rendered instead of raw locales object */}
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
            {getLocaleString(caseStudy.industry, language)}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{locale.title}</h3>
        </div>
        <div className="rounded-full bg-brand-50 p-3 text-brand-600 dark:bg-brand-500/10 dark:text-brand-200">
          <Icon name="growth" className="h-5 w-5" />
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-brand-600 dark:text-brand-300">
        {caseStudy.metrics.map((metric) => {
          const value = getLocaleString(metric.value, language); // NETNAUTICA-EDIT: Localised metric value
          const label = getLocaleString(metric.label, language); // NETNAUTICA-EDIT: Localised metric label
          return (
            <li key={`${metric.id ?? label}-${value}`} className="rounded-full bg-brand-50 px-3 py-1 dark:bg-brand-500/10">
              {value} - {label}
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{locale.challenge}</p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{locale.solution}</p>
      <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">{locale.result}</p>
      {locale.quote && (
        <blockquote className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm italic text-slate-600 dark:bg-slate-800/70 dark:text-slate-200">
          {locale.quote}
        </blockquote>
      )}
      <div className="mt-auto pt-6">
        <Link
          to={`${CASES_PATH}?highlight=${getLocaleString(caseStudy.slug, language)}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:translate-x-1"
        >
          {ctaLabel}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
});
