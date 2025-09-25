import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Seo } from '@/components/seo/Seo';
import { SectionHeader } from '@/components/common/SectionHeader';
import { LEGAL_LINKS } from '@/data/navigation';
import { legalPages } from '@/data/legal';
import { getLocaleContent } from '@/utils/i18n';

const LegalIndexPage = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const documents = LEGAL_LINKS.map((link) => {
    const key = link.id.startsWith('legal.') ? link.id.split('.')[1] : link.id;
    const pageKey = key === 'notice' ? 'legalNotice' : key === 'privacy' ? 'privacy' : 'cookies';
    const page = legalPages[pageKey];
    const locale = getLocaleContent(page.locales, language);
    return {
      title: locale.title,
      description: locale.sections[0].body,
      path: link.path
    };
  });

  return (
    <>
      <Seo title="Documentación legal" description="Accede a la información legal, privacidad y política de cookies de Netnautica." />
      <section className="mx-auto max-w-5xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Legales"
          title="Documentación y cumplimiento"
          description="Transparencia en el tratamiento de datos, condiciones de uso y gestión de cookies. Actualizamos estos documentos ante cualquier cambio normativo."
          alignment="center"
          className="mx-auto max-w-3xl"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {documents.map((doc) => (
            <Link
              key={doc.path}
              to={doc.path}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{doc.title}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{doc.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-600">
                Ver documento
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default LegalIndexPage;

