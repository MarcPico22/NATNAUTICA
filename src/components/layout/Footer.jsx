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
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
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
              {/* <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">{t('footer.phone')}:</span>{' '}
                <a href={`tel:${CONTACT_DETAILS.phone[language].replace(/\s+/g, '')}`} className="hover:text-brand-600 dark:hover:text-brand-300">
                  {CONTACT_DETAILS.phone[language]}
                </a>
              </div> */}
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
              {/* <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">{t('footer.schedule')}:</span>{' '}
                <span>{CONTACT_DETAILS.schedule[language]}</span>
              </div> */}
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/netnautica"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-300"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.016 6.71.077 5.493.137 4.677.277 3.967.598c-.741.322-1.369.754-1.993 1.378C1.35 2.6.918 3.228.596 3.969c-.321.71-.461 1.526-.522 2.743C.016 7.929 0 8.396 0 12.017c0 3.624.016 4.09.077 5.31.061 1.217.201 2.033.522 2.743.322.741.754 1.369 1.378 1.993.624.624 1.252 1.056 1.993 1.378.71.321 1.526.461 2.743.522 1.219.061 1.686.077 5.31.077 3.624 0 4.09-.016 5.31-.077 1.217-.061 2.033-.201 2.743-.522a5.402 5.402 0 001.993-1.378c.624-.624 1.056-1.252 1.378-1.993.321-.71.461-1.526.522-2.743.061-1.219.077-1.686.077-5.31 0-3.624-.016-4.09-.077-5.31-.061-1.217-.201-2.033-.522-2.743a5.402 5.402 0 00-1.378-1.993A5.402 5.402 0 0019.287.596c-.71-.321-1.526-.461-2.743-.522C15.326.016 14.859 0 11.234 0h.783zM12.017 2.162c3.555 0 3.977.014 5.373.072 1.296.059 2.001.274 2.471.454.621.241 1.064.53 1.529.994.464.465.753.908.994 1.529.18.47.395 1.175.454 2.471.058 1.396.072 1.818.072 5.373 0 3.555-.014 3.977-.072 5.373-.059 1.296-.274 2.001-.454 2.471-.241.621-.53 1.064-.994 1.529a4.124 4.124 0 01-1.529.994c-.47.18-1.175.395-2.471.454-1.396.058-1.818.072-5.373.072-3.555 0-3.977-.014-5.373-.072-1.296-.059-2.001-.274-2.471-.454a4.124 4.124 0 01-1.529-.994 4.124 4.124 0 01-.994-1.529c-.18-.47-.395-1.175-.454-2.471-.058-1.396-.072-1.818-.072-5.373 0-3.555.014-3.977.072-5.373.059-1.296.274-2.001.454-2.471.241-.621.53-1.064.994-1.529a4.124 4.124 0 011.529-.994c.47-.18 1.175-.395 2.471-.454 1.396-.058 1.818-.072 5.373-.072z" />
                  <path fillRule="evenodd" d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.408-10.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
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
