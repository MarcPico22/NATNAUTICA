import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';
import { motion, AnimatePresence } from 'framer-motion';

// 📦 Componentes UI
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

// 📊 Datos
import { services } from '@/data/services';
import { BLOG_POSTS } from '@/data/Blogs/blog-index';

// 🌍 Utilidades i18n
import { getLocaleContent, getLocaleString } from '@/utils/i18n';

/**
 * 🎯 COMPONENTE DE BÚSQUEDA GLOBAL
 * Busca en servicios y posts del blog usando Fuse.js
 * Interfaz responsive con animaciones suaves
 */
export function SearchComponent() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  // 🔍 Estado de búsqueda
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState({ services: [], blogs: [] });

  // 🔧 Configuración de Fuse.js para servicios
  const servicesFuse = useMemo(() => {
    const servicesData = services.map(service => ({
      id: service.id,
      slug: service.slug,
      icon: service.icon,
      name: getLocaleContent(service.locales, language).name,
      shortDescription: getLocaleContent(service.locales, language).shortDescription,
      category: 'service',
      url: `/services/${service.slug}`
    }));

    return new Fuse(servicesData, {
      keys: [
        { name: 'name', weight: 0.4 },
        { name: 'shortDescription', weight: 0.3 },
        { name: 'id', weight: 0.3 }
      ],
      threshold: 0.3, // Sensibilidad de búsqueda (0 = exacto, 1 = muy permisivo)
      includeScore: true,
      includeMatches: true
    });
  }, [language]);

  // 🔧 Configuración de Fuse.js para blogs
  const blogsFuse = useMemo(() => {
    const blogsData = BLOG_POSTS.map(post => ({
      id: post.id,
      slug: getLocaleString(post.slug, language),
      title: getLocaleContent(post.locales, language).title,
      excerpt: getLocaleContent(post.locales, language).excerpt,
      category: post.category,
      publishedAt: post.publishedAt,
      author: post.author,
      url: `/blog/${getLocaleString(post.slug, language)}`
    }));

    return new Fuse(blogsData, {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'excerpt', weight: 0.3 },
        { name: 'category', weight: 0.2 },
        { name: 'author', weight: 0.1 }
      ],
      threshold: 0.3,
      includeScore: true,
      includeMatches: true
    });
  }, [language]);

  // 🔍 Ejecutar búsqueda cuando cambia la query
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults({ services: [], blogs: [] });
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // Timeout para evitar búsquedas excesivas
    const timeoutId = setTimeout(() => {
      const servicesResults = servicesFuse.search(query).slice(0, 5); // Máximo 5 resultados
      const blogsResults = blogsFuse.search(query).slice(0, 5);

      setResults({
        services: servicesResults,
        blogs: blogsResults
      });
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, servicesFuse, blogsFuse]);

  // 🎨 Renderizar highlights de búsqueda
  const renderHighlightedText = (text, matches) => {
    if (!matches || matches.length === 0) return text;

    const match = matches[0];
    if (!match.indices || match.indices.length === 0) return text;

    const [start, end] = match.indices[0];
    const before = text.slice(0, start);
    const highlighted = text.slice(start, end + 1);
    const after = text.slice(end + 1);

    return (
      <>
        {before}
        <mark className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
          {highlighted}
        </mark>
        {after}
      </>
    );
  };

  // 📊 Total de resultados
  const totalResults = results.services.length + results.blogs.length;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* 🔍 Campo de búsqueda */}
      <div className="relative">
        <div className="relative">
          <Icon
            name="search"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search.placeholder', 'Buscar servicios y artículos...')}
            className="w-full pl-12 pr-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <Icon name="x" />
            </button>
          )}
        </div>

        {/* 🔄 Indicador de búsqueda */}
        <AnimatePresence>
          {isSearching && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-12 top-1/2 transform -translate-y-1/2"
            >
              <div className="w-4 h-4 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 📋 Resultados de búsqueda */}
      <AnimatePresence>
        {query.trim().length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg max-h-96 overflow-y-auto"
          >
            {/* 📊 Estadísticas de resultados */}
            {totalResults > 0 && (
              <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {totalResults} {totalResults === 1 ? 'resultado' : 'resultados'} encontrado{totalResults === 1 ? '' : 's'}
                </p>
              </div>
            )}

            {/* 🚫 Sin resultados */}
            {totalResults === 0 && !isSearching && (
              <div className="px-4 py-8 text-center">
                <Icon name="search" className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-300">
                  {t('search.noResults', 'No se encontraron resultados para')} "{query}"
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  {t('search.tryDifferent', 'Prueba con diferentes palabras clave')}
                </p>
              </div>
            )}

            {/* 🛠️ Resultados de servicios */}
            {results.services.length > 0 && (
              <div className="border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                <div className="px-4 py-2 bg-brand-50 dark:bg-brand-500/10">
                  <h3 className="text-sm font-semibold text-brand-700 dark:text-brand-300">
                    {t('search.services', 'Servicios')} ({results.services.length})
                  </h3>
                </div>
                {results.services.map((result, index) => (
                  <motion.div
                    key={result.item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-slate-100 dark:border-slate-700 last:border-b-0"
                  >
                    <Link
                      to={result.item.url}
                      className="block px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-brand-100 dark:bg-brand-500/20 rounded-lg flex items-center justify-center">
                          <Icon name={result.item.icon} className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-slate-900 dark:text-white truncate">
                            {renderHighlightedText(result.item.name, result.matches)}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                            {renderHighlightedText(result.item.shortDescription, result.matches)}
                          </p>
                        </div>
                        <Icon name="chevron-right" className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* 📝 Resultados de blog */}
            {results.blogs.length > 0 && (
              <div>
                <div className="px-4 py-2 bg-blue-50 dark:bg-blue-500/10">
                  <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    {t('search.blog', 'Blog')} ({results.blogs.length})
                  </h3>
                </div>
                {results.blogs.map((result, index) => (
                  <motion.div
                    key={result.item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-slate-100 dark:border-slate-700 last:border-b-0"
                  >
                    <Link
                      to={result.item.url}
                      className="block px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <Icon name="file-text" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-slate-900 dark:text-white truncate">
                            {renderHighlightedText(result.item.title, result.matches)}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                            {renderHighlightedText(result.item.excerpt, result.matches)}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {result.item.author}
                            </span>
                            <span className="text-xs text-slate-400">•</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {new Date(result.item.publishedAt).toLocaleDateString(language, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                        </div>
                        <Icon name="chevron-right" className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}