import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="py-24">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white p-12 text-center shadow-xl shadow-brand-500/10 dark:bg-slate-900">
        <p className="text-7xl font-black text-brand-500">404</p>
        <h1 className="mt-6 text-2xl font-semibold text-slate-800 dark:text-slate-100">
          Pagina no encontrada
        </h1>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-300">
          Lo sentimos, no hemos encontrado la pagina solicitada. Comprueba la URL o regresa a inicio.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  </section>
);

export default NotFoundPage;
