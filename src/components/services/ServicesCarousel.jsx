// ========================================
// 🎠 COMPONENTE CARRUSEL DE SERVICIOS
// ========================================
// Carrusel interactivo que destaca servicios clave
// Diseño moderno con gradientes, iconos grandes y animaciones
// Responsive y accesible

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// Importar estilos de slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 📊 Datos destacados del carrusel
const featuredServices = [
  {
    id: 'connectivity',
    gradient: 'from-blue-500 to-cyan-500',
    icon: 'globe',
    titleKey: 'carousel.services.connectivity.title',
    descriptionKey: 'carousel.services.connectivity.description',
    features: [
      { key: 'carousel.services.connectivity.features.redundancy' },
      { key: 'carousel.services.connectivity.features.starlink' },
      { key: 'carousel.services.connectivity.features.peplink' }
    ],
    ctaKey: 'carousel.services.connectivity.cta',
    href: '/services/conectividad-global-yates'
  },
  {
    id: 'cybersecurity',
    gradient: 'from-red-500 to-pink-500',
    icon: 'shield',
    titleKey: 'carousel.services.cybersecurity.title',
    descriptionKey: 'carousel.services.cybersecurity.description',
    features: [
      { key: 'carousel.services.cybersecurity.features.firewall' },
      { key: 'carousel.services.cybersecurity.features.encryption' },
      { key: 'carousel.services.cybersecurity.features.monitoring' }
    ],
    ctaKey: 'carousel.services.cybersecurity.cta',
    href: '/services/ciberseguridad-yates'
  },
  {
    id: 'av-integration',
    gradient: 'from-purple-500 to-indigo-500',
    icon: 'tv',
    titleKey: 'carousel.services.av.title',
    descriptionKey: 'carousel.services.av.description',
    features: [
      { key: 'carousel.services.av.features.crestron' },
      { key: 'carousel.services.av.features.distribution' },
      { key: 'carousel.services.av.features.automation' }
    ],
    ctaKey: 'carousel.services.av.cta',
    href: '/services/integracion-av-yates'
  },
  {
    id: 'iot-surveillance',
    gradient: 'from-green-500 to-teal-500',
    icon: 'cpu',
    titleKey: 'carousel.services.iot.title',
    descriptionKey: 'carousel.services.iot.description',
    features: [
      { key: 'carousel.services.iot.features.automation' },
      { key: 'carousel.services.iot.features.smart' },
      { key: 'carousel.services.iot.features.cctv' },
      { key: 'carousel.services.iot.features.degrees' }
    ],
    ctaKey: 'carousel.services.iot.cta',
    href: '/services/iot-vigilancia-yates'
  }
];

// ========================================
// 🎯 COMPONENTE CARRUSEL DE SERVICIOS
// ========================================

// 🎯 Componentes personalizados para las flechas de navegación
function CustomPrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Anterior"
    >
      <svg className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

function CustomNextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Siguiente"
    >
      <svg className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export function ServicesCarousel() {
  const { t } = useTranslation();

  // ⚙️ Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // ⏱️ Cambiado de 6000ms (6s) a 3000ms (3s) para transición más rápida
    pauseOnHover: true,
    arrows: true, // 🎯 Habilitar flechas de navegación
    prevArrow: <CustomPrevArrow />, // ← Flecha personalizada anterior
    nextArrow: <CustomNextArrow />, // → Flecha personalizada siguiente
    customPaging: (i) => (
      <button className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-300 hover:bg-gray-400 dark:hover:bg-blue-200 transition-all duration-300" />
    ),
    dotsClass: 'slick-dots flex justify-center gap-2 -mt-8'
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 📋 Encabezado de la sección */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 dark:bg-brand-900/30 rounded-full text-brand-700 dark:text-brand-300 text-sm font-medium mb-4"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            {t('carousel.eyebrow')}
          </motion.div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t('carousel.title.line1')}
            <span className="block bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              {t('carousel.title.line2')}
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t('carousel.description')}
          </p>
        </motion.div>

        {/* 🎠 Carrusel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Slider {...settings}>
            {featuredServices.map((service, index) => (
              <div key={service.id} className="px-4">
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
                  {/* 🎨 Gradiente de fondo */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* 📄 Contenido del servicio */}
                      <div className="space-y-6">
                        {/* 🏷️ Icono y título */}
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              {service.icon === 'globe' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                              )}
                              {service.icon === 'shield' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              )}
                              {service.icon === 'tv' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              )}
                              {service.icon === 'cpu' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                              )}
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                              {t(service.titleKey)}
                            </h3>
                            <div className={`w-12 h-1 bg-gradient-to-r ${service.gradient} rounded-full mt-2`} />
                          </div>
                        </div>

                        {/* 📝 Descripción */}
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                          {t(service.descriptionKey)}
                        </p>

                        {/* ✅ Características clave */}
                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-3"
                            >
                              <div className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-slate-700 dark:text-slate-300 font-medium">
                                {t(feature.key)}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* 🔗 Call to Action */}
                        <div className="pt-4">
                          <Link
                            to={service.href}
                            className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-${service.gradient.split(' ')[0]}/25 text-white font-semibold rounded-xl transition-all duration-300 group/btn`}
                          >
                            {t(service.ctaKey)}
                            <svg className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </Link>
                        </div>
                      </div>

                      {/* 🎨 Elemento visual decorativo */}
                      <div className="relative">
                        <div className={`w-full h-80 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden`}>
                          {/* Patrón de fondo */}
                          <div className="absolute inset-0 opacity-10">
                            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                              <defs>
                                <pattern id={`pattern-${service.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                  <circle cx="10" cy="10" r="1" fill="white" opacity="0.3" />
                                </pattern>
                              </defs>
                              <rect width="100" height="100" fill={`url(#pattern-${service.id})`} />
                            </svg>
                          </div>

                          {/* Icono grande central */}
                          <div className="relative z-10">
                            <svg className="w-24 h-24 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              {service.icon === 'globe' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                              )}
                              {service.icon === 'shield' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              )}
                              {service.icon === 'tv' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              )}
                              {service.icon === 'cpu' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                              )}
                            </svg>
                          </div>

                          {/* Elementos decorativos flotantes */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse" />
                          <div className="absolute bottom-6 left-6 w-6 h-6 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                          <div className="absolute top-1/2 left-8 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}