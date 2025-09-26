import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * COMPONENTE: NotFoundPage
 * Página de error 404 completamente internacionalizada
 * Se muestra cuando el usuario accede a una URL inexistente
 */
const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-12 text-center shadow-xl shadow-brand-500/10 dark:bg-slate-900">
          {/* CÓDIGO DE ERROR: Visual 404 */}
          <p className="text-7xl font-black text-brand-500">404</p>
          
          {/* TÍTULO: Internacionalizado */}
          <h1 className="mt-6 text-2xl font-semibold text-slate-800 dark:text-slate-100">
            {t('errors.pageNotFound')}
          </h1>
          
          {/* DESCRIPCIÓN: Mensaje de error internacionalizado */}
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-300">
            {t('errors.pageNotFoundDescription')}
          </p>
          
          {/* CTA: Botón para volver al inicio */}
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
          >
            {t('errors.backToHome')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
