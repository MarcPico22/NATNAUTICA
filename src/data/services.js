// NETNAUTICA-EDIT: Actualizamos los servicios para reflejar la oferta real de Netnautica.es
const LANGUAGES = ['es', 'en', 'fr'];

const createLocales = (factory) =>
  LANGUAGES.reduce((acc, lang) => {
    acc[lang] = factory(lang);
    return acc;
  }, {});

const ctaLabel = {
  es: 'Contactar Netnautica',
  en: 'Contact Netnautica',
  fr: 'Contacter Netnautica'
};

const seeMoreLabel = {
  es: 'Ver mas servicios',
  en: 'See more services',
  fr: 'Voir plus de services'
};

export const services = [
  {
    id: 'connectivity',
    slug: 'conectividad-global-yates',
    icon: 'globe',
    metrics: [
      {
        id: 'redundancy',
        value: 'Multi-WAN',
        label: {
          es: 'Redundancia activa',
          en: 'Active redundancy',
          fr: 'Redondance active'
        }
      },
      {
        id: 'starlink',
        value: 'Starlink+',
        label: {
          es: 'Cobertura satelital',
          en: 'Satellite coverage',
          fr: 'Couverture satellite'
        }
      }
    ],
    locales: createLocales((lang) => {
      const suffix = lang === 'es' ? '' : `?lang=${lang}`;
      return {
        name: 'Worldwide Connectivity',
        shortDescription:
          'Multi-WAN resiliente que combina Starlink, 4G/5G y WiFi 6 para mantener el yate siempre en linea.',
        hero: {
          tagline: 'Cobertura global sin interrupciones',
          description:
            'Disenamos sistemas de conectividad con failover automatico, balanceo de carga y monitorizacion proactiva para travesias por el Mediterraneo y mas alla.',
          primaryCta: { label: ctaLabel[lang], href: `/contacto${suffix}` },
          secondaryCta: { label: seeMoreLabel[lang], href: `/servicios${suffix}` }
        },
        benefits: [
          {
            title: 'Multi-WAN inteligente',
            description: 'Starlink LEO, enlaces 4G/5G y VSAT combinados con conmutacion automatica.'
          },
          {
            title: 'WiFi 6 premium',
            description: 'Cobertura total a bordo con QoS y segmentacion para tripulacion e invitados.'
          },
          {
            title: 'Gestion remota 24/7',
            description: 'Supervision continua y ajustes inmediatos para cada ruta y atraque.'
          }
        ],
        process: [
          { title: 'Auditoria de senal', description: 'Estudio de rutas, puertos y racks existentes.' },
          { title: 'Arquitectura redundante', description: 'Diseno multi-enlace con balanceo y failover automatico.' },
          { title: 'Optimizacion QoS', description: 'Priorizacion de aplicaciones criticas y perfiles de invitados.' },
          { title: 'Monitorizacion continua', description: 'Panel en la nube con alertas y soporte proactivo.' }
        ],
        caseStudy: {
          company: 'Charter 45 m',
          challenge: 'Cortes al combinar Starlink y 4G/5G durante trayectos largos.',
          solution: 'Implementamos multi-WAN administrado con politicas de priorizacion y respaldo VSAT.',
          result: 'Disponibilidad >99 % y recuperacion inferior a diez segundos.'
        },
        faq: [
          {
            question: 'Necesito contratar Starlink?',
            answer:
              'Integramos Starlink cuando aporta valor, pero siempre combinamos varios proveedores para mantener redundancia.'
          },
          {
            question: 'Incluye soporte remoto?',
            answer: 'Si, monitorizamos los enlaces 24/7 y coordinamos ajustes con la tripulacion.'
          }
        ]
      };
    })
  },
  {
    id: 'cybersecurity',
    slug: 'ciberseguridad-yates',
    icon: 'shield',
    metrics: [
      {
        id: 'monitoring',
        value: '24/7',
        label: {
          es: 'Monitorizacion',
          en: 'Monitoring',
          fr: 'Surveillance'
        }
      },
      {
        id: 'segments',
        value: '4 capas',
        label: {
          es: 'Segmentacion',
          en: 'Segmentation',
          fr: 'Segmentation'
        }
      }
    ],
    locales: createLocales((lang) => {
      const suffix = lang === 'es' ? '' : `?lang=${lang}`;
      return {
        name: 'Cybersecurity',
        shortDescription:
          'Perimetros digitales robustos con firewalls de nueva generacion, segmentacion y auditorias periodicas.',
        hero: {
          tagline: 'Fortaleza digital a bordo',
          description:
            'Protegemos redes, dispositivos IoT y datos sensibles con politicas adaptadas a tripulacion, invitados y sistemas de navegacion.',
          primaryCta: { label: ctaLabel[lang], href: `/contacto${suffix}` },
          secondaryCta: { label: seeMoreLabel[lang], href: `/servicios${suffix}` }
        },
        benefits: [
          {
            title: 'Firewalls NGFW',
            description: 'Gestion de Fortinet y Peplink con reglas personalizadas y actualizaciones continuas.'
          },
          {
            title: 'Segmentacion avanzada',
            description: 'Separacion de redes para tripulacion, invitados, domotica e instrumentacion.'
          },
          {
            title: 'Hardening IoT',
            description: 'Firmware controlado, acceso seguro y politicas Zero Trust para cada dispositivo.'
          }
        ],
        process: [
          { title: 'Auditoria inicial', description: 'Inventario de activos y analisis de vulnerabilidades.' },
          { title: 'Diseno de politicas', description: 'Definicion de VLAN, autenticacion y registros.' },
          { title: 'Monitorizacion SIEM', description: 'Alertas proactivas y respuesta a incidentes.' },
          { title: 'Revision recurrente', description: 'Tests de intrusion y planes de mejora trimestrales.' }
        ],
        caseStudy: {
          company: 'Superyate 50 m',
          challenge: 'Accesos invitados comprometian la red de navegacion y entretenimiento.',
          solution: 'Segmentamos en cuatro capas con autenticacion multifactor y politicas Zero Trust.',
          result: 'Cero incidentes en la ultima temporada y auditoria externa superada.'
        },
        faq: [
          {
            question: 'Formais a la tripulacion?',
            answer: 'Si, impartimos sesiones de concienciacion y entregamos guias con buenas practicas.'
          },
          {
            question: 'Que ocurre tras la auditoria?',
            answer: 'Recibes un informe con riesgos priorizados y acompanamiento en la implementacion.'
          }
        ]
      };
    })
  },
  {
    id: 'av-integration',
    slug: 'integracion-av-yates',
    icon: 'spark',
    metrics: [
      {
        id: 'zones',
        value: '8+',
        label: {
          es: 'Zonas de audio',
          en: 'Audio zones',
          fr: 'Zones audio'
        }
      },
      {
        id: 'cinema',
        value: '4K HDR',
        label: {
          es: 'Calidad AV',
          en: 'AV quality',
          fr: 'Qualite AV'
        }
      }
    ],
    locales: createLocales((lang) => {
      const suffix = lang === 'es' ? '' : `?lang=${lang}`;
      return {
        name: 'AV System Integration',
        shortDescription:
          'Entretenimiento inmersivo con distribucion 4K, audio zonificado y control domotico personalizado.',
        hero: {
          tagline: 'Cinematic experience at sea',
          description:
            'Convertimos salones y sky lounges en espacios de cine, reuniones o entretenimiento privado gestionados desde interfaces Crestron.',
          primaryCta: { label: ctaLabel[lang], href: `/contacto${suffix}` },
          secondaryCta: { label: seeMoreLabel[lang], href: `/servicios${suffix}` }
        },
        benefits: [
          {
            title: 'Distribucion 4K',
            description: 'Matrices UHD para enviar contenido a cualquier estancia sin latencia perceptible.'
          },
          {
            title: 'Audio por zonas',
            description: 'Control independiente por cabina con escenas adaptadas a cada invitado.'
          },
          {
            title: 'Espacios polivalentes',
            description: 'Salas preparadas para briefings corporativos o sesiones de ocio.'
          }
        ],
        process: [
          { title: 'Discovery de usos', description: 'Definimos escenarios con propietarios y tripulacion.' },
          { title: 'Diseno tecnico', description: 'Seleccion de equipos Crestron, Sonos, IPTV y servidores Plex.' },
          { title: 'Integracion domotica', description: 'Interfaces tactiles y control desde dispositivos personales.' },
          { title: 'Calibracion continua', description: 'Soporte remoto y ajustes durante la navegacion.' }
        ],
        caseStudy: {
          company: 'Yate 38 m',
          challenge: 'Experiencias AV fragmentadas y dificil control por parte de la tripulacion.',
          solution: 'Implementamos matriz 4K, audio oculto y escenas Crestron predefinidas.',
          result: 'Uso intuitivo y satisfaccion total de invitados y tripulacion.'
        },
        faq: [
          {
            question: 'Podemos reutilizar equipos actuales?',
            answer: 'Si, integramos hardware existente y lo combinamos con nuevas soluciones cuando es necesario.'
          },
          {
            question: 'Ofreceis ajustes remotos?',
            answer: 'Monitorizamos el sistema y aplicamos actualizaciones o afinaciones bajo demanda.'
          }
        ]
      };
    })
  },
  {
    id: 'iot-surveillance',
    slug: 'iot-vigilancia-yates',
    icon: 'automation',
    metrics: [
      {
        id: 'automation',
        value: 'Smart',
        label: {
          es: 'Automatizacion',
          en: 'Automation',
          fr: 'Automatisation'
        }
      },
      {
        id: 'cctv',
        value: '360 degrees',
        label: {
          es: 'Cobertura CCTV',
          en: 'CCTV coverage',
          fr: 'Couverture CCTV'
        }
      }
    ],
    locales: createLocales((lang) => {
      const suffix = lang === 'es' ? '' : `?lang=${lang}`;
      return {
        name: 'IoT & Video Surveillance Systems',
        shortDescription:
          'Automatizacion integral con control inteligente de cabinas, iluminacion y camaras con acceso seguro.',
        hero: {
          tagline: 'Control total y seguridad',
          description:
            'Integramos iluminacion, clima, monitorizacion NMEA 2000 y CCTV en una sola plataforma accesible desde cualquier lugar.',
          primaryCta: { label: ctaLabel[lang], href: `/contacto${suffix}` },
          secondaryCta: { label: seeMoreLabel[lang], href: `/servicios${suffix}` }
        },
        benefits: [
          {
            title: 'Plataforma centralizada',
            description: 'Escenas, alertas y estados en tiempo real para tripulacion y propietarios.'
          },
          {
            title: 'Cabinas personalizadas',
            description: 'Cada invitado ajusta ambiente y entretenimiento desde su dispositivo.'
          },
          {
            title: 'Vigilancia avanzada',
            description: 'Streaming multiestancia, grabacion redundante y accesos cifrados.'
          }
        ],
        process: [
          { title: 'Inventario IoT', description: 'Revision de sensores, actuadores y camaras existentes.' },
          { title: 'Integracion NMEA 2000', description: 'Conectamos datos de navegacion y alarmas a la nube.' },
          { title: 'Automatizacion por escenas', description: 'Programamos modos day/night, atraque o navegacion.' },
          { title: 'Formacion tripulacion', description: 'Capacitamos al personal y entregamos manuales digitales.' }
        ],
        caseStudy: {
          company: 'Catamaran 30 m',
          challenge: 'Faltaba control centralizado y acceso remoto seguro.',
          solution: 'Instalamos plataforma IoT con escenas por cabina y CCTV con autenticacion reforzada.',
          result: 'Tripulacion reduce tiempos de respuesta y propietarios monitorizan el yate desde tierra.'
        },
        faq: [
          {
            question: 'Que dispositivos soportais?',
            answer: 'Integramos iluminacion KNX, climatizacion, sistemas NMEA 2000 y camaras IP compatibles.'
          },
          {
            question: 'Se puede acceder desde tierra?',
            answer: 'Si, habilitamos acceso remoto cifrado con autenticacion multifactor.'
          }
        ]
      };
    })
  }
];

export const servicesPageContent = createLocales((lang) => {
  const suffix = lang === 'es' ? '' : `?lang=${lang}`;
  return {
    hero: {
      eyebrow: 'Services',
      title: 'Smart technology for seamless yachting',
      description: 'Integramos conectividad, ciberseguridad, AV e IoT con un equipo boutique de ingenieria telematica.',
      primaryCta: { label: ctaLabel[lang], href: `/contacto${suffix}` },
      secondaryCta: {
        label: lang === 'en' ? 'View portfolio' : lang === 'fr' ? 'Voir le portfolio' : 'Ver portfolio',
        href: `/casos-de-exito${suffix}`
      }
    },
    intro: {
      title: 'Metodologia a bordo',
      description: 'Auditoria tecnica, diseno personalizado, integracion cuidadosa y soporte remoto 24/7 para cada travesia.'
    },
    steps: [
      {
        title: 'Auditoria tecnica',
        description: 'Inspeccionamos racks, cableado, cobertura satelital y necesidades de tripulacion.'
      },
      {
        title: 'Diseno personalizado',
        description: 'Arquitectura modular con los mejores fabricantes del mercado nautico.'
      },
      {
        title: 'Integracion precisa',
        description: 'Coordinamos con astilleros e interioristas respetando acabados y tiempos.'
      },
      {
        title: 'Soporte continuo',
        description: 'Monitorizacion 24/7, visitas planificadas y asistencia remota inmediata.'
      }
    ],
    cta: {
      title: 'Prepara tu proxima travesia con Netnautica',
      description: 'Agenda una consultoria sin compromiso y recibe un plan tecnico detallado en menos de 48 horas.',
      primaryCta: { label: ctaLabel[lang], href: `/contacto${suffix}` }
    }
  };
});
