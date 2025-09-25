import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

import { SITE_NAME, SITE_URL, SUPPORTED_LANGUAGES } from '@/config/site';

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
  const location = useLocation();

  const canonicalUrl = useMemo(
    () => canonical ?? buildCanonicalUrl(location.pathname + location.search),
    [canonical, location.pathname, location.search]
  );

  const alternateLinks = useMemo(() => {
    if (alternates) {
      return alternates;
    }
    const params = new URLSearchParams(location.search);
    return SUPPORTED_LANGUAGES.map((lang) => {
      params.set('lang', lang.code);
      return {
        hrefLang: lang.code,
        href: buildCanonicalUrl(`${location.pathname}?${params.toString()}`)
      };
    });
  }, [alternates, location.pathname, location.search]);

  const metaTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const jsonLd = Array.isArray(structuredData)
    ? structuredData.filter(Boolean)
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Helmet>
      <html lang={document?.documentElement?.lang ?? 'es'} />
      <title>{metaTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
      {alternateLinks?.map((link) => (
        <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
      ))}
      <meta property="og:title" content={metaTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta name="twitter:image" content={image} />}
      {jsonLd.length > 0 && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
