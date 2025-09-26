// ========================================
// 🏠 PÁGINA DE INICIO - LANDING PRINCIPAL
// ========================================
// Página principal de Netnautica con hero, servicios, stats, casos y CTA
// Implementa internacionalización completa (ES/EN/FR/DE)
// Incluye Schema.org para SEO y structured data
// Modificar secciones aquí afecta la primera impresión del sitio

import { Link } from 'react-router-dom';              // 🔗 Navegación SPA
import { useTranslation } from 'react-i18next';      // 🌍 Hook internacionalización

// 📦 Componentes de la aplicación
import { Seo } from '@/components/seo/Seo';           // 🎯 Meta tags y SEO
import { Button } from '@/components/ui/Button';      // 🔘 Botón reutilizable
import { Badge } from '@/components/ui/Badge';        // 🏷️ Etiquetas visuales
import { Icon } from '@/components/ui/Icon';          // 🔣 Iconos SVG
import { SectionHeader } from '@/components/common/SectionHeader'; // 📄 Encabezados sección
import { ServiceCard } from '@/components/common/ServiceCard';     // 🔧 Tarjetas servicio
import { CaseCard } from '@/components/common/CaseCard';           // 📚 Tarjetas casos
import { MetricCard } from '@/components/common/MetricCard';       // 📊 Métricas/estadísticas

// 📊 Datos y configuración
import { homeContent } from '@/data/home';            // 🏠 Contenido página inicio
import { services } from '@/data/services';           // 🔧 Lista servicios
import { CONTACT_DETAILS, SITE_NAME, SITE_URL, SOCIAL_LINKS } from '@/config/site'; // ⚙️ Config sitio
import { getLocaleContent } from '@/utils/i18n';      // 🌍 Utilidad i18n
import { getLocalizedValue } from '@/utils/translations'; // 🔄 Traducciones

// ========================================
// 🎯 COMPONENTE PÁGINA DE INICIO
// ========================================

// NETNAUTICA-EDIT: HomePage consume contenido multilenguaje desde i18n y elimina el bloque de blog
const HomePage = () => {
  // 🌍 Hooks de internacionalización
  const { i18n, t } = useTranslation();
  const language = i18n.language;                     // Idioma actual (es/en/fr/de)
  
  // 📊 Obtener contenido localizado para el idioma activo
  const content = getLocaleContent(homeContent, language);

  // ========================================
  // 🛡️ PROCESAMIENTO SEGURO DE DATOS
  // ========================================
  // Añade fallbacks para evitar errores si faltan propiedades
  // Modificar estos fallbacks cambiará el comportamiento por defecto
  
  // 🎭 Sección Hero con CTAs seguros
  const hero = {
    ...content.hero,
    primaryCta: content.hero?.primaryCta ? {
      ...content.hero.primaryCta,
      href: content.hero.primaryCta.href || '/'       // Fallback a raíz si falta href
    } : undefined,
    secondaryCta: content.hero?.secondaryCta ? {
      ...content.hero.secondaryCta,
      href: content.hero.secondaryCta.href || '/'     // Fallback a raíz si falta href
    } : undefined
  };
  
  // 📊 Secciones de contenido con fallbacks vacíos
  const stats = content.stats ?? [];                 // Estadísticas/métricas
  const highlights = content.highlights ?? [];       // Destacados de empresa
  const servicesSection = content.servicesSection ?? {}; // Sección servicios
  const technologySection = content.technologySection ?? {}; // Sección tecnología
  const casesSection = content.casesSection ?? {};   // Sección casos de éxito
  const cases = content.cases ?? [];                 // Lista casos destacados
  const contactCta = content.contactCta ?? {};       // CTA final de contacto

  // ========================================
  // 🎯 STRUCTURED DATA PARA SEO (Schema.org)
  // ========================================
  // Datos estructurados que mejoran la visibilidad en buscadores
  // Google los usa para rich snippets y Knowledge Graph
  // Modificar aquí afecta cómo Google interpreta el sitio
  
  // 🏢 Schema de Organización (información empresa)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,                                  // Nombre empresa
    url: SITE_URL,                                    // URL sitio web
    logo: `${SITE_URL}/logo.svg`,                     // Logo para rich snippets
    sameAs: Object.values(SOCIAL_LINKS),             // Redes sociales (autoridad)
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: getLocalizedValue(CONTACT_DETAILS.phone, language), // Teléfono localizado
        contactType: 'sales',                         // Tipo de contacto
        areaServed: 'ES'                             // Área geográfica
      }
    ]
  };

  // 🛠️ Schema de Servicio (servicios que ofrecemos)
  const structuredData = [
    organizationSchema,
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: hero.title,                               // Título del servicio principal
      provider: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL
      },
      areaServed: 'Mediterranean',                    // Área de servicio (yates Mediterráneo)
      description: hero.subtitle                      // Descripción del servicio
    }
  ];

  // 🎯 Servicios destacados (primeros 4 para mostrar en home)
  const featuredServices = services.slice(0, 4);

  return (
    <>
      {/* 🎯 SEO: Meta tags dinámicos + structured data */}
      <Seo title={hero.title} description={hero.subtitle} structuredData={structuredData} />

      {/* ========================================
          🎭 SECCIÓN HERO (Encabezado principal)
          ======================================== */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-20 text-slate-900 dark:text-white sm:py-28">
        {/* 🌊 Fondo con gradiente radial (efecto visual) */}
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(65,172,194,0.12),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(65,172,194,0.28),_transparent_55%)]"
          aria-hidden="true"
        />
        
        {/* 📐 Grid responsivo: 1 columna móvil, 2 columnas desktop */}
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8">
          {/* 📝 Columna izquierda: Contenido textual */}
          <div className="flex flex-col gap-6">
            {/* 🏷️ Logo de la empresa */}
            <img
              src="/src/assets/logo.png"
              alt={SITE_NAME}
              className="mb-6 h-16 w-auto"
            />
            {hero.eyebrow && <Badge>{hero.eyebrow}</Badge>}
            {hero.title && (
              <h1 className="text-[clamp(2.5rem,6vw,4.2rem)] font-semibold leading-tight">{hero.title}</h1>
            )}
            {hero.subtitle && (
              <p className="max-w-xl text-base text-slate-600 dark:text-slate-200 sm:text-lg">{hero.subtitle}</p>
            )}
            {content.features && (
              <div className="mt-8 space-y-6">
                {content.features.map((feature, index) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-500/10 dark:text-brand-200">
                      <Icon name="star" className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-col gap-3 sm:flex-row">
              {hero.primaryCta?.href && (
                <Button as={Link} to={hero.primaryCta.href} size="lg">
                  {hero.primaryCta.label}
                </Button>
              )}
              {hero.secondaryCta?.href && (
                <Button
                  as={Link}
                  to={hero.secondaryCta.href}
                  variant="secondary"
                  size="lg"
                  className="!border-brand-300 !text-slate-900 dark:!text-white hover:!bg-brand-500/20"
                >
                  {hero.secondaryCta.label}
                </Button>
              )}
            </div>
            {stats.length > 0 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <MetricCard
                    key={`${stat.label}-${stat.value}`}
                    label={stat.label}
                    value={stat.value}
                    className="bg-slate-50/80 dark:bg-white/10 text-slate-700 dark:text-slate-200 backdrop-blur"
                  />
                ))}
              </div>
            )}
          </div>
          {highlights.length > 0 && (
            <div className="flex flex-col gap-6 rounded-3xl border border-slate-200/20 dark:border-white/20 bg-white/80 dark:bg-white/5 p-8 backdrop-blur">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/10 text-brand-600 dark:text-brand-200">
                    <Icon name="spark" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-200">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.title}
          description={servicesSection.description}
          alignment="center"
          className="mx-auto max-w-3xl"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} language={language} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-6">
              <SectionHeader
                eyebrow={technologySection.eyebrow}
                title={technologySection.title}
                description={technologySection.description}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {(technologySection.partners ?? []).map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={`/src/assets/tech/${partner.name.toLowerCase() === 'ubiquiti' ? 'unifi' : partner.name.toLowerCase()}.${partner.name.toLowerCase() === 'peplink' ? 'png' : 'svg'}`}
                        alt={partner.name}
                        className="h-8 w-8 object-contain dark:brightness-0 dark:invert"
                      />
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{partner.name}</p>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{partner.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl bg-gradient-to-br from-brand-500/10 via-white to-brand-500/10 p-8 shadow-lg dark:from-brand-500/20 dark:via-slate-950 dark:to-brand-500/20">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{casesSection.heading}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{casesSection.description}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {cases.map((caseStudy) => (
                  <CaseCard
                    key={caseStudy.id}
                    caseStudy={caseStudy}
                    language={language}
                    ctaLabel={t('actions.readMore')}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-brand-500 dark:via-brand-600 dark:to-brand-800" aria-hidden="true" />
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          {contactCta.title && (
            <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-slate-900 dark:text-white">{contactCta.title}</h2>
          )}
          {contactCta.description && (
            <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-white/85">{contactCta.description}</p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row">
            {contactCta.primary?.href && (
                            <Button as={Link} to={contactCta.primary.href} size="lg" className="w-full sm:w-auto">
                {contactCta.primary.label}
              </Button>
            )}
            {contactCta.secondary?.href && (
              <Button
                as={Link}
                to={contactCta.secondary.href}
                variant="secondary"
                size="lg"
                className="!border-slate-200 !text-slate-900 hover:!bg-slate-50 dark:!border-white/40 dark:!text-white dark:hover:!bg-white/15"
              >
                {contactCta.secondary.label}
              </Button>
            )}
          </div>
          <div className="flex flex-col items-center gap-1 text-sm text-slate-500 dark:text-white/80">
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              className="hover:text-slate-900 dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:focus-visible:outline-white"
            >
              {CONTACT_DETAILS.email}
            </a>
            <a
              href={`tel:${getLocalizedValue(CONTACT_DETAILS.phone, language).replace(/\s+/g, '')}`}
              className="hover:text-slate-900 dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:focus-visible:outline-white"
            >
              {getLocalizedValue(CONTACT_DETAILS.phone, language)}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
