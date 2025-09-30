// ========================================
// 📝 BLOG LIST PAGE - LISTA DE ENTRADAS DEL BLOG
// ========================================
// Página que muestra todas las entradas del blog en formato lista
// Incluye filtros por tags, paginación y SEO optimizado
// Fácil de extender: nuevas entradas se añaden automáticamente desde data/blog.js

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';              // 🎬 Animaciones suaves
import { useState, useEffect } from 'react';         // ⚛️ Estado y efectos

import { Seo } from '@/components/seo/Seo';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import BlogErrorBoundary from '@/components/common/BlogErrorBoundary';
import { BlogListSkeleton } from '@/components/ui/LoadingSkeleton';
import { getLocalizedBlogPosts } from '@/data/Blogs/blog-index';

// ========================================
// 🎯 COMPONENTE BLOG LIST PAGE
// ========================================

export function BlogListPage() {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  const currentLang = i18n.language;
  const blogPosts = getLocalizedBlogPosts(currentLang) || [];

  // Simular tiempo de carga para mostrar skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms para mostrar skeleton

    return () => clearTimeout(timer);
  }, [currentLang]);

  return (
    <BlogErrorBoundary>
      <Seo
        title={t('blog.title', 'Blog | Netnautica')}
        description={t('blog.subtitle', 'Artículos sobre navegación náutica y tecnología marina')}
        image="/images/blog/yate.jpg"
        imageAlt="Blog de Netnautica - Artículos sobre navegación náutica"
        imageWidth={1200}
        imageHeight={630}
        type="website"
      />

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <motion.div 
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeader
              title={t('blog.title', 'Blog')}
              description={t('blog.subtitle', 'Artículos sobre navegación náutica y tecnología marina')}
              className="mb-12"
            />
          </motion.div>
          {/* 📝 Lista de posts o skeleton loading */}
          {isLoading ? (
            <BlogListSkeleton />
          ) : (
            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-slate-900"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* 🖼️ Imagen destacada */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.featuredImage?.src || '/images/blog/yate.jpg'}
                    alt={post.featuredImage?.alt || post.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* 📄 Contenido de la entrada */}
                <div className="p-6">
                  {/* 🏷️ Tags */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* 📖 Título y extracto */}
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-slate-100 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-300">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mb-4 text-slate-600 dark:text-slate-300">
                    {post.excerpt}
                  </p>

                  {/* 👤 Autor y metadata */}
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>{post.author}</span>
                    <div className="flex items-center gap-4">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(currentLang, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      <span>{post.readingTime} min</span>
                    </div>
                  </div>

                  {/* 🔗 Enlace a leer más */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-brand-600 transition-colors hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-400"
                  >
                    {t('blog.readMore', 'Leer más')}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
          )}

          {/* 📭 Mensaje cuando no hay posts */}
          {!isLoading && blogPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-slate-600 dark:text-slate-300">
                {t('blog.noPosts', 'No hay entradas disponibles en este momento.')}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </BlogErrorBoundary>
  );
}

export default BlogListPage;