import { Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Seo } from '@/components/seo/Seo';
import { Badge } from '@/components/ui/Badge';
import { blogPosts } from '@/data/blog';
import { getLocaleContent } from '@/utils/i18n';
import { SITE_NAME, SITE_URL } from '@/config/site';

// NETNAUTICA-EDIT: Entrada de blog con contenido procedente de Netnautica.es.
const BlogPostPage = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const language = i18n.language;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const locale = getLocaleContent(post.locales, language);

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: locale.title,
      description: locale.seoDescription,
      image: [post.heroImage.webp],
      author: {
        '@type': 'Organization',
        name: SITE_NAME
      },
      datePublished: post.publishedAt,
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`
    }
  ];

  return (
    <>
      <Seo
        title={locale.title}
        description={locale.seoDescription}
        type="article"
        structuredData={structuredData}
        image={post.heroImage.webp}
      />
      <article className="pb-24 pt-24">
        <header className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Badge>{post.category}</Badge>
          <h1 className="mt-6 text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-tight text-slate-900 dark:text-white">
            {locale.title}
          </h1>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {new Date(post.publishedAt).toLocaleDateString(language)} - {post.readingTime}
          </p>
        </header>
        <div className="mt-12">
          <picture>
            <source srcSet={post.heroImage.avif} type="image/avif" />
            <source srcSet={post.heroImage.webp} type="image/webp" />
            <img
              src={post.heroImage.webp}
              alt={locale.title}
              loading="lazy"
              decoding="async"
              className="h-96 w-full object-cover"
            />
          </picture>
        </div>
        <div className="prose prose-slate mx-auto mt-12 max-w-3xl px-4 dark:prose-invert sm:px-6 lg:px-8">
          {locale.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <footer className="mx-auto mt-12 flex max-w-3xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {SITE_NAME} - {new Date(post.publishedAt).toLocaleDateString(language)}
          </div>
          <div className="flex gap-3">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300"
            >
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}&text=${encodeURIComponent(locale.title)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300"
            >
              X/Twitter
            </a>
          </div>
        </footer>
      </article>
    </>
  );
};

export default BlogPostPage;
