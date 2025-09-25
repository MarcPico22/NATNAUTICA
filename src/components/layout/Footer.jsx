import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CONTACT_DETAILS, SOCIAL_LINKS } from '@/config/site';
import { FOOTER_LINK_GROUPS, LEGAL_LINKS } from '@/data/navigation';
import { Logo } from '@/components/common/Logo';

const currentYear = new Date().getFullYear();

export function Footer() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <footer className="border-t border-slate-200/60 bg-white/90 text-sm text-slate-600 transition-colors dark:border-slate-800/60 dark:bg-slate-950/80 dark:text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {t('footer.about')}
            </p>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">Email:</span>{' '}
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-brand-600 dark:hover:text-brand-300">
                  {CONTACT_DETAILS.email}
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">{t('footer.phone')}:</span>{' '}
                <a href={`tel:${CONTACT_DETAILS.phone[language].replace(/\s+/g, '')}`} className="hover:text-brand-600 dark:hover:text-brand-300">
                  {CONTACT_DETAILS.phone[language]}
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">WhatsApp:</span>{' '}
                <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp[language].replace(/[^0-9]/g, '')}`} className="hover:text-brand-600 dark:hover:text-brand-300">
                  {CONTACT_DETAILS.whatsapp[language]}
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">{t('footer.address')}:</span>{' '}
                <span>{CONTACT_DETAILS.address[language]}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">{t('footer.schedule')}:</span>{' '}
                <span>{CONTACT_DETAILS.schedule[language]}</span>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              {Object.entries(SOCIAL_LINKS).map(([network, url]) => (
                <a
                  key={network}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-300"
                >
                  <span className="sr-only">{t(`social.${network}`)}</span>
                  <span className="text-sm capitalize">{network}</span>
                </a>
              ))}
            </div>
          </div>
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {t(group.translationKey)}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.path.replace(':lang', i18n.language)}
                      className="inline-flex items-center gap-2 text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
                    >
                      <span>{t(link.translationKey)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {t('footer.newsletterTitle')}
            </h3>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{t('footer.newsletterCopy')}</p>
            <form className="mt-4 flex flex-col gap-3" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                {t('footer.newsletterLabel')}
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="email@example.com"
                className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400"
              >
                {t('footer.newsletterButton')}
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200/60 pt-6 text-xs text-slate-500 dark:border-slate-800/60 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>&copy; {currentYear} Netnautica. {t('footer.rights')}</div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.id} to={link.path.replace(':lang', i18n.language)} className="hover:text-brand-600 dark:hover:text-brand-300">
                {t(link.translationKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
