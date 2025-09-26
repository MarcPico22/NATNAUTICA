import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SITE_NAME, SITE_URL, SUPPORTED_LANGUAGES, SITE_TAGLINE } from '@/config/site';

const buildCanonicalUrl = (path = '') => {
  const sanitized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL.replace(/\/$/, '')}${sanitized}`;
};

export function Seo({
  title,
  description,
  type = 'website',
  image,
  canonical,
  alternates,
  structuredData
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
      
      {/* OpenGraph */}
      <meta property="og:title" content={metaTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={i18n.language} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      
      {/* Additional Meta */}
      <meta name="language" content={i18n.language} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Favicons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
