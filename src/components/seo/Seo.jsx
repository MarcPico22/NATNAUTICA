// ========================================
// 🎯 COMPONENTE SEO - META TAGS DINÁMICOS
// ========================================
// Gestiona meta tags, Open Graph, Twitter Cards y structured data
// Genera URLs canónicas y alternate links para idiomas
// Se usa en todas las páginas para SEO consistente
// Modificar aquí afecta el SEO de todo el sitio

import { Helmet } from 'react-helmet-async';         // 🪖 Meta tags dinámicos
import { useLocation } from 'react-router-dom';      // 📍 Ubicación actual
import { useMemo } from 'react';                     // ⚛️ Optimización React
import { useTranslation } from 'react-i18next';     // 🌍 Hook i18n

// ⚙️ Configuración del sitio
import { SITE_NAME, SITE_URL, SUPPORTED_LANGUAGES, SITE_TAGLINE } from '@/config/site';

// ========================================
// 🔗 UTILIDADES SEO
// ========================================

// 🎯 Construye URL canónica limpia
// Elimina barras duplicadas y asegura formato correcto
const buildCanonicalUrl = (path = '') => {
  const sanitized = path.startsWith('/') ? path : `/${path}`; // 🧹 Añade / inicial si falta
  return `${SITE_URL.replace(/\/$/, '')}${sanitized}`;         // 🔗 URL base + path
};

export function Seo({
  title,
  description,
  type = 'website',
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  canonical,
  alternates,
  structuredData,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags
}) {
  const { i18n } = useTranslation();
  const location = useLocation();

  const canonicalUrl = useMemo(
    () => canonical ?? buildCanonicalUrl(location.pathname + location.search),
    [canonical, location.pathname, location.search]
  );

  const alternateLinks = useMemo(() => {
    if (alternates) {
      return alternates;
    }
    // Generar alternates simples para cada idioma con la misma ruta
    return SUPPORTED_LANGUAGES.map((lang) => ({
      hrefLang: lang.code,
      href: buildCanonicalUrl(location.pathname)
    }));
  }, [alternates, location.pathname]);

  const metaTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const jsonLd = Array.isArray(structuredData)
    ? structuredData.filter(Boolean)
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{metaTitle}</title>
      {description && <meta name="description" content={description} />}
      
      {/* Canonical y alternates */}
      <link rel="canonical" href={canonicalUrl} />
      {alternateLinks?.map((link) => (
        <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
      ))}
      
      {/* OpenGraph Completo */}
      <meta property="og:title" content={metaTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={i18n.language} />
      {image && <meta property="og:image" content={image.startsWith('http') ? image : `${SITE_URL}${image}`} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      {imageWidth && <meta property="og:image:width" content={imageWidth} />}
      {imageHeight && <meta property="og:image:height" content={imageHeight} />}
      {author && <meta property="article:author" content={author} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
      
      {/* Twitter Cards Completo */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.startsWith('http') ? image : `${SITE_URL}${image}`} />}
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
      <meta name="twitter:site" content="@netnautica" />
      {author && <meta name="twitter:creator" content={author} />}
      
      {/* Additional Meta */}
      <meta name="language" content={i18n.language} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Favicons */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* PWA */}
      <meta name="theme-color" content="#0080ff" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      {jsonLd.length > 0 && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
