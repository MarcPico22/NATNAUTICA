// ========================================
// 📄 BLOG POST PAGE - ENTRADA INDIVIDUAL DEL BLOG
// ========================================
// Página que muestra una entrada completa del blog
// Incluye navegación entre posts, SEO optimizado y contenido estructurado
// Fácil de extender: contenido se gestiona desde data/blog.js

import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';              // 🎬 Animaciones suaves

import { Seo } from '@/components/seo/Seo';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import BlogErrorBoundary from '@/components/common/BlogErrorBoundary';
import { getLocalizedBlogPostBySlug, getRelatedPosts } from '@/data/Blogs/blog-index';

// ========================================
// 🎯 COMPONENTE BLOG POST PAGE
// ========================================

export function BlogPostPage() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const currentLang = i18n.language;

  // Buscar la entrada del blog por slug
  const post = getLocalizedBlogPostBySlug(slug, currentLang);

  // Si no se encuentra la entrada, mostrar mensaje de error
  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {t('blog.postNotFound', 'Entrada no encontrada')}
          </h1>
          <Link
            to="/blog"
            className="text-brand-600 hover:text-brand-500 dark:text-brand-300"
          >
            {t('blog.backToBlog', 'Volver al blog')}
          </Link>
        </div>
      </div>
    );
  }

  // Obtener entradas relacionadas
  const relatedPosts = getRelatedPosts(post, 3, currentLang);

  // ========================================
  // 🎯 STRUCTURED DATA PARA SEO
  // ========================================
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    image: post.image,
    url: `${window.location.origin}/${currentLang}/blog/${post.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Netnautica',
      logo: {
        '@type': 'ImageObject',
        url: `${window.location.origin}/logo.svg`
      }
    },
    keywords: post.tags.join(', ')
  };

  return (
    <BlogErrorBoundary>
      <Seo
        title={post.seo?.title || `${post.title} | Netnautica Blog`}
        description={post.seo?.description || post.excerpt}
        image={post.featuredImage?.src || post.image}
        imageAlt={post.featuredImage?.alt || post.title}
        imageWidth={post.featuredImage?.width || 1200}
        imageHeight={post.featuredImage?.height || 630}
        type="article"
        author={post.author}
        publishedTime={post.publishedAt}
        section={post.category}
        tags={post.tags}
        structuredData={articleSchema}
      />

      {/* 🏗️ Estructura de la página */}
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <motion.article 
          className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 🏷️ Tags */}
          <motion.div 
            className="mb-6 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* 📖 Título */}
          <motion.h1 
            className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {post.title}
          </motion.h1>

          {/* 👤 Metadata del autor y fecha */}
          <motion.div 
            className="mb-8 flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="font-medium">{post.author}</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString(currentLang, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>{post.readingTime} min de lectura</span>
          </motion.div>

          {/* 📝 Contenido de la entrada */}
          <motion.div
            className="prose prose-lg mx-auto max-w-none dark:prose-invert prose-headings:text-slate-900 prose-headings:dark:text-slate-100 prose-p:text-slate-700 prose-p:dark:text-slate-300 prose-strong:text-slate-900 prose-strong:dark:text-slate-100 prose-ul:text-slate-700 prose-ul:dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 🔙 Navegación */}
          <motion.div 
            className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-brand-600 transition-colors hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-400"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t('blog.backToBlog', 'Volver al blog')}
            </Link>
          </motion.div>
        </motion.article>

        {/* 📚 Entradas relacionadas */}
        {relatedPosts.length > 0 && (
          <motion.section 
            className="border-t border-slate-200 bg-slate-100 py-16 dark:border-slate-700 dark:bg-slate-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionHeader
                title={t('blog.relatedPosts', 'Entradas relacionadas')}
                className="mb-8"
              />

              <motion.div 
                className="grid gap-6 md:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                {relatedPosts.map((relatedPost) => (
                  <motion.article
                    key={relatedPost.id}
                    className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-slate-800"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="https://via.placeholder.com/400x300?text=Related+Post"
                        alt={relatedPost.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                        <Link
                          to={`/blog/${relatedPost.slug}`}
                          className="transition-colors hover:text-brand-600 dark:hover:text-brand-300"
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </motion.section>
        )}
      </div>
    </BlogErrorBoundary>
  );
}

export default BlogPostPage;