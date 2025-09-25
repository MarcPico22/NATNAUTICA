import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Seo } from '@/components/seo/Seo';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/common/SectionHeader';
import { blogPosts, blogPageContent } from '@/data/blog';
import { getLocaleContent } from '@/utils/i18n';

// NETNAUTICA-EDIT: Listado de blog adaptado a los recursos tecnicos de Netnautica.es.
const BlogListPage = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const pageContent = getLocaleContent(blogPageContent, language);
  const [category, setCategory] = useState('all');
  const allLabel = ({ es: 'Todos', en: 'All', fr: 'Tous' }[language]) ?? 'Todos';

  const categories = useMemo(() => ['all', ...new Set(blogPosts.map((post) => post.category))], []);

  const filteredPosts = blogPosts
    .filter((post) => (category === 'all' ? true : post.category === category))
    .map((post) => ({
      ...post,
      locale: getLocaleContent(post.locales, language)
    }));

  return (
    <>
      <Seo title={pageContent.title} description={pageContent.seoDescription} />
      <section className="relative overflow-hidden pb-20 pt-24">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-transparent to-transparent dark:from-brand-500/10"
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 text-center sm:px-6 lg:px-8">
          <Badge>Blog</Badge>
          <h1 className="text-[clamp(2.3rem,4.5vw,3.7rem)] font-semibold leading-tight text-slate-900 dark:text-white">
            {pageContent.title}
          </h1>
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">{pageContent.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                category === item
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                  : 'bg-white text-slate-600 hover:bg-brand-50 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
              aria-pressed={category === item}
            >
              {item === 'all' ? allLabel : item}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
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
                <h2 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{post.locale.title}</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.locale.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-6 text-xs text-slate-500 dark:text-slate-400">
                  <span>{new Date(post.publishedAt).toLocaleDateString(language)}</span>
                  <span>{post.readingTime}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  {t('actions.readMore')}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogListPage;
