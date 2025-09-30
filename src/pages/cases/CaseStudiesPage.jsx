// ========================================
// 📚 PÁGINA CASOS DE ESTUDIO - PORTFOLIO
// ========================================
// Muestra casos reales de conectividad y ciberseguridad
// Permite destacar un caso específico via URL (?highlight=slug)
// Incluye reordenamiento dinámico y structured data para SEO
// Modificar caseStudies en data/cases.js para añadir casos

import { useMemo } from 'react';                     // ⚛️ Optimización React
import { Link, useSearchParams } from 'react-router-dom'; // 🔗 Navegación + URL params
import { useTranslation } from 'react-i18next';     // 🌍 Internacionalización
import { motion } from 'framer-motion';             // 🎬 Animaciones suaves

// 📦 Componentes
import { Seo } from '@/components/seo/Seo';          // 🎯 SEO dinámico
import { Badge } from '@/components/ui/Badge';       // 🏷️ Etiquetas categorías
import { Button } from '@/components/ui/Button';     // 🔘 Botones
import { SectionHeader } from '@/components/common/SectionHeader'; // 📄 Encabezados

// 📊 Datos
import { caseStudies } from '@/data/cases';          // 📚 Lista casos de estudio
import { getLocaleContent, getLocaleString } from '@/utils/i18n'; // 🌍 Utilidades i18n
import { SITE_URL } from '@/config/site';            // ⚙️ URL base

// ========================================
// 🎯 COMPONENTE CASE STUDIES PAGE
// ========================================

// NETNAUTICA-EDIT: Página de proyectos alineada con casos reales de conectividad y ciberseguridad.
const CaseStudiesPage = () => {
  // 🌍 Hooks internacionalización
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  
  // 🔗 URL search params para destacar casos
  const [searchParams] = useSearchParams();
  const highlight = searchParams.get('highlight'); // 🎆 ?highlight=yacht-connectivity

  // 🔄 Reordenar casos: destacado primero si existe
  // useMemo evita recalcular en cada render
  const orderedCases = useMemo(() => {
    if (!highlight) return caseStudies; // 📋 Sin highlight: orden original
    
    // 🔍 Buscar caso a destacar
    const index = caseStudies.findIndex((item) => item.slug === highlight);
    if (index === -1) return caseStudies; // ⚠️ No encontrado: orden original
    
    // 🎆 Mover caso destacado al principio
    const clone = [...caseStudies];
    const [selected] = clone.splice(index, 1);
    return [selected, ...clone]; // 🥇 Destacado + resto
  }, [highlight]);

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: orderedCases.map((study, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: getLocaleContent(study.locales, language).title,
        url: `${SITE_URL}/cases?highlight=${study.slug}`
      }))
    }
  ];

  return (
    <>
      <Seo
        title={t('cases.pageTitle')}
        description={t('cases.pageDescription')}
        structuredData={structuredData}
      />
      <motion.section 
        className="relative overflow-hidden pb-20 pt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-transparent to-transparent dark:from-brand-500/10"
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge>{t('cases.heroEyebrow')}</Badge>
          </motion.div>
          <motion.h1 
            className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold leading-tight text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('cases.heroTitle')}
          </motion.h1>
          <motion.p 
            className="text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('cases.heroDescription')}
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="grid gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {orderedCases.map((study) => {
            const locale = getLocaleContent(study.locales, language);
            return (
              <motion.article
                key={study.id}
                className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-[1.1fr_0.9fr]"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
                    {getLocaleString(study.industry, language)}
                  </span>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{locale.title}</h2>
                  <div className="flex flex-wrap gap-3">
                    {study.metrics.map((metric) => (
                      <span
                        key={metric.value.es ?? metric.value}
                        className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-500/10 dark:text-brand-200"
                      >
                        {getLocaleString(metric.value, language)} - {getLocaleString(metric.label, language)}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <p>
                      <strong className="block text-slate-800 dark:text-slate-100">{t('cases.challenge')}</strong>
                      {locale.challenge}
                    </p>
                    <p>
                      <strong className="block text-slate-800 dark:text-slate-100">{t('cases.solution')}</strong>
                      {locale.solution}
                    </p>
                    <p>
                      <strong className="block text-slate-800 dark:text-slate-100">{t('cases.result')}</strong>
                      {locale.result}
                    </p>
                  </div>
                  <blockquote className="mt-4 rounded-3xl bg-slate-50 p-4 text-sm italic text-slate-600 dark:bg-slate-800/70 dark:text-slate-200">
                    {locale.result}
                  </blockquote>
                </div>
                <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-inner dark:border-slate-800 dark:bg-slate-950">
                  {/* SECCIÓN TOOLKIT: Información técnica del proyecto - INTERNACIONALIZADA */}
                  <SectionHeader
                    eyebrow={t('cases.toolkit')}
                    title={t('cases.projectPillars')}
                    description={t('cases.description')}
                  />
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li>{t('cases.planning')}</li>
                    <li>{t('cases.integration')}</li>
                    <li>{t('cases.monitoring')}</li>
                  </ul>
                  <Button as={Link} to="/contact" variant="secondary">
                    {t('actions.requestQuote')}
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.section>
    </>
  );
};

export default CaseStudiesPage;
