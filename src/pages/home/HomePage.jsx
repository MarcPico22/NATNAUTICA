// ========================================
// 🏠 PÁGINA DE INICIO - LANDING PRINCIPAL
// ========================================
// Página principal de Netnautica con hero, servicios, stats, casos y CTA
// Implementa internacionalización completa (ES/EN/FR/DE)
// Incluye Schema.org para SEO y structured data
// Modificar secciones aquí afecta la primera impresión del sitio

import { Link } from 'react-router-dom';              // 🔗 Navegación SPA
import { useTranslation } from 'react-i18next';      // 🌍 Hook internacionalización
import { motion } from 'framer-motion';              // 🎬 Animaciones suaves

// 📦 Componentes de la aplicación
import { Seo } from '@/components/seo/Seo';           // 🎯 Meta tags y SEO
import { Button } from '@/components/ui/Button';      // 🔘 Botón reutilizable
import { Badge } from '@/components/ui/Badge';        // 🏷️ Etiquetas visuales
import { Icon } from '@/components/ui/Icon';          // 🔣 Iconos SVG
import { SectionHeader } from '@/components/common/SectionHeader'; // 📄 Encabezados sección
import { ServiceCard } from '@/components/common/ServiceCard';     // 🔧 Tarjetas servicio
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
      <motion.section 
        className="relative overflow-hidden py-20 text-white sm:py-28 hero-bg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 🌊 Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-black/40 to-transparent" />
        </div>
        
        {/* 📐 Grid responsivo: 1 columna móvil, 2 columnas desktop */}
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8 relative z-10">
          {/* 📝 Columna izquierda: Contenido textual */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 🏷️ Logo de la empresa */}
            <motion.img
              src="/src/assets/logo.png"
              alt={SITE_NAME}
              className="mb-6 h-16 w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            {hero.eyebrow && <Badge>{hero.eyebrow}</Badge>}
            {hero.title && (
              <motion.h1 
                className="text-[clamp(2.5rem,6vw,4.2rem)] font-semibold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {hero.title}
              </motion.h1>
            )}
            {hero.subtitle && (
              <motion.p 
                className="max-w-xl text-base text-slate-600 dark:text-slate-200 sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {hero.subtitle}
              </motion.p>
            )}
            {content.features && (
              <motion.div 
                className="mt-8 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {content.features.map((feature, index) => (
                  <motion.div 
                    key={feature.title} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-500/10 dark:text-brand-200">
                      <Icon name="star" className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            <motion.div 
              className="flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
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
            </motion.div>
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
          </motion.div>
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
      </motion.section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">Servicios</span>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">Cuatro pilares para una experiencia perfecta a bordo</h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">Conectividad global, ciberseguridad, integración AV y IoT &amp; videovigilancia desplegados como un único ecosistema, diseñado para tripulación e invitados.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Link className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900" to="/services/conectividad-global-yates">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-brand-50 p-3 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-200">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"></circle>
                  <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5"></path>
                  <path d="M12 4c-2 3-2 13 0 16 2-3 2-13 0-16Z" stroke="currentColor" strokeWidth="1.5" fill="none"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Conectividad Global</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Multi-WAN resiliente que combina Starlink, 4G/5G y WiFi 6 para mantener el yate siempre en línea.</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>Multi-WAN inteligente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>WiFi 6 premium</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>Gestión remota 24/7</span>
              </li>
            </ul>
          </Link>
          <Link className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900" to="/services/ciberseguridad-yates">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-brand-50 p-3 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-200">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
                  <path d="M12 3 5 6v6c0 4.2 3.6 7.8 7 9 3.4-1.2 7-4.8 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Ciberseguridad</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Perímetros digitales robustos con firewalls de nueva generación, segmentación y auditorías periódicas.</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>Firewalls NGFW</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>Segmentación avanzada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>Hardening IoT</span>
              </li>
            </ul>
          </Link>
          <Link className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900" to="/services/integracion-av-yates">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-brand-50 p-3 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-200">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
                  <path d="M12 2.5 9.9 7.4 4 8.1l4.8 3.7L7.5 18l4.5-2.8 4.5 2.8-1.3-6.2L20 8.1l-5.9-0.7L12 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Integración AV</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Entretenimiento inmersivo con distribución 4K, audio zonificado y control domótico personalizado.</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>Distribución 4K</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>Audio por zonas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>Espacios polivalentes</span>
              </li>
            </ul>
          </Link>
          <Link className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900" to="/services/iot-vigilancia-yates">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-brand-50 p-3 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-200">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"></circle>
                  <path d="M12 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M12 21v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="m7.1 7.1-1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="m18.3 18.3-1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="M21 12h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="m7.1 16.9-1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="m18.3 5.7-1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">IoT y Sistemas de Videovigilancia</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Automatización integral con control inteligente de cabinas, iluminación y cámaras con acceso seguro.</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>Plataforma centralizada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>Cabinas personalizadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true"></span>
                <span>Vigilancia avanzada</span>
              </li>
            </ul>
          </Link>
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
            <div className="flex items-center justify-center">
              <div className="hero-visual">
                <div className="tech-circle">
                  <div className="orbit orbit1"></div>
                  <div className="orbit orbit2"></div>
                  <div className="orbit orbit3"></div>
                  <div className="center-node"></div>
                </div>
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
