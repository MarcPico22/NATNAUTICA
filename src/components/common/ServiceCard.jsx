import { Link } from 'react-router-dom';

import { Icon } from '@/components/ui/Icon';
import { cn } from '@/utils/cn';
import { getLocaleContent } from '@/utils/i18n';

export function ServiceCard({ service, language, ctaLabel, className = '' }) {
  const locale = getLocaleContent(service.locales, language);

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900',
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-brand-50 p-3 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-200">
          <Icon name={service.icon} className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{locale.name}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{locale.shortDescription}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
        {locale.benefits?.slice(0, 3).map((benefit) => (
          <li key={benefit.title} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            <span>{benefit.title}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <Link
          to={`/servicios/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition group-hover:translate-x-1"
        >
          <span>{ctaLabel}</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
