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
  es: 'Ver más servicios',
  en: 'See more services',
  fr: 'Voir plus de services'
};

// NETNAUTICA-EDIT: Simplificado a rutas universales - mismo path para todos los idiomas
// Cambio: Eliminadas las rutas localizadas, ahora todas usan el mismo path
const contactPath = '/contact'; // Ruta universal para contacto
const servicesPath = '/services'; // Ruta universal para servicios

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
      return {
        name: {
          es: 'Conectividad Global',
          en: 'Worldwide Connectivity',
          fr: 'Connectivité Mondiale'
        }[lang],
        shortDescription: {
          es: 'Multi-WAN resiliente que combina Starlink, 4G/5G y WiFi 6 para mantener el yate siempre en línea.',
          en: 'Resilient Multi-WAN combining Starlink, 4G/5G and WiFi 6 to keep the yacht always online.',
          fr: 'Multi-WAN résilient combinant Starlink, 4G/5G et WiFi 6 pour une connexion permanente du yacht.'
        }[lang],
        hero: {
          tagline: {
            es: 'Cobertura global sin interrupciones',
            en: 'Uninterrupted worldwide coverage',
            fr: 'Couverture mondiale ininterrompue'
          }[lang],
          description: {
            es: 'Diseñamos sistemas de conectividad con failover automático, balanceo de carga y monitorización proactiva para travesías por el Mediterráneo y más allá.',
            en: 'We design connectivity systems with automatic failover, load balancing and proactive monitoring for Mediterranean journeys and beyond.',
            fr: 'Nous concevons des systèmes de connectivité avec failover automatique, équilibrage de charge et surveillance proactive pour les traversées en Méditerranée et au-delà.'
          }[lang],
          primaryCta: { label: ctaLabel[lang], href: contactPath }, // Ruta universal /contact
          secondaryCta: { label: seeMoreLabel[lang], href: servicesPath } // Ruta universal /services
        },
        benefits: [
          {
            title: {
              es: 'Multi-WAN inteligente',
              en: 'Smart Multi-WAN',
              fr: 'Multi-WAN intelligent'
            }[lang],
            description: {
              es: 'Starlink LEO, enlaces 4G/5G y VSAT combinados con conmutación automática.',
              en: 'Starlink LEO, 4G/5G links and VSAT combined with automatic switching.',
              fr: 'Starlink LEO, liens 4G/5G et VSAT combinés avec commutation automatique.'
            }[lang]
          },
          {
            title: {
              es: 'WiFi 6 premium',
              en: 'Premium WiFi 6',
              fr: 'WiFi 6 premium'
            }[lang],
            description: {
              es: 'Cobertura total a bordo con QoS y segmentación para tripulación e invitados.',
              en: 'Complete onboard coverage with QoS and segmentation for crew and guests.',
              fr: 'Couverture totale à bord avec QoS et segmentation pour équipage et invités.'
            }[lang]
          },
          {
            title: {
              es: 'Gestión remota 24/7',
              en: '24/7 Remote management',
              fr: 'Gestion à distance 24/7'
            }[lang],
            description: {
              es: 'Supervisión continua y ajustes inmediatos para cada ruta y atraque.',
              en: 'Continuous monitoring and immediate adjustments for each route and dock.',
              fr: 'Surveillance continue et ajustements immédiats pour chaque route et amarrage.'
            }[lang]
          }
        ],
        process: [
          { 
            title: {
              es: 'Auditoría de señal',
              en: 'Signal audit',
              fr: 'Audit du signal'
            }[lang],
            description: {
              es: 'Estudio de rutas, puertos y racks existentes.',
              en: 'Study of existing routes, ports and racks.',
              fr: 'Étude des routes, ports et racks existants.'
            }[lang]
          },
          { 
            title: {
              es: 'Arquitectura redundante',
              en: 'Redundant architecture',
              fr: 'Architecture redondante'
            }[lang],
            description: {
              es: 'Diseño multi-enlace con balanceo y failover automático.',
              en: 'Multi-link design with load balancing and automatic failover.',
              fr: 'Conception multi-liens avec équilibrage de charge et basculement automatique.'
            }[lang]
          },
          { 
            title: {
              es: 'Optimización QoS',
              en: 'QoS optimization',
              fr: 'Optimisation QoS'
            }[lang],
            description: {
              es: 'Priorización de aplicaciones críticas y perfiles de invitados.',
              en: 'Prioritization of critical applications and guest profiles.',
              fr: 'Priorisation des applications critiques et des profils invités.'
            }[lang]
          },
          { 
            title: {
              es: 'Monitorización continua',
              en: 'Continuous monitoring',
              fr: 'Surveillance continue'
            }[lang],
            description: {
              es: 'Panel en la nube con alertas y soporte proactivo.',
              en: 'Cloud dashboard with proactive alerts and support.',
              fr: 'Tableau de bord cloud avec alertes et support proactif.'
            }[lang]
          }
        ],
        caseStudy: {
          company: 'Charter 45 m',
          challenge: 'Cortes al combinar Starlink y 4G/5G durante trayectos largos.',
          solution: 'Implementamos multi-WAN administrado con politicas de priorizacion y respaldo VSAT.',
          result: 'Disponibilidad >99 % y recuperacion inferior a diez segundos.'
        },
        faq: [
          {
            question: {
              es: '¿Necesito contratar Starlink?',
              en: 'Do I need to contract Starlink?',
              fr: 'Dois-je souscrire à Starlink ?'
            }[lang],
            answer: {
              es: 'Integramos Starlink cuando aporta valor, pero siempre combinamos varios proveedores para mantener redundancia.',
              en: 'We integrate Starlink when it adds value, but we always combine multiple providers to maintain redundancy.',
              fr: 'Nous intégrons Starlink quand cela apporte de la valeur, mais nous combinons toujours plusieurs fournisseurs pour maintenir la redondance.'
            }[lang]
          },
          {
            question: {
              es: '¿Incluye soporte remoto?',
              en: 'Does it include remote support?',
              fr: 'Le support à distance est-il inclus ?'
            }[lang],
            answer: {
              es: 'Sí, monitorizamos los enlaces 24/7 y coordinamos ajustes con la tripulación.',
              en: 'Yes, we monitor the links 24/7 and coordinate adjustments with the crew.',
              fr: 'Oui, nous surveillons les liens 24/7 et coordonnons les ajustements avec l\'équipage.'
            }[lang]
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
        name: {
          es: 'Ciberseguridad',
          en: 'Cybersecurity',
          fr: 'Cybersécurité'
        }[lang],
        shortDescription: {
          es: 'Perímetros digitales robustos con firewalls de nueva generación, segmentación y auditorías periódicas.',
          en: 'Robust digital perimeters with next-generation firewalls, segmentation and periodic audits.',
          fr: 'Périmètres numériques robustes avec pare-feu nouvelle génération, segmentation et audits périodiques.'
        }[lang],
        hero: {
          tagline: {
            es: 'Fortaleza digital a bordo',
            en: 'Digital fortress onboard',
            fr: 'Forteresse numérique à bord'
          }[lang],
          description: {
            es: 'Protegemos redes, dispositivos IoT y datos sensibles con políticas adaptadas a tripulación, invitados y sistemas de navegación.',
            en: 'We protect networks, IoT devices and sensitive data with policies adapted to crew, guests and navigation systems.',
            fr: 'Nous protégeons les réseaux, les appareils IoT et les données sensibles avec des politiques adaptées à l\'équipage, aux invités et aux systèmes de navigation.'
          }[lang],
          primaryCta: { label: ctaLabel[lang], href: contactPath }, // Ruta universal /contact
          secondaryCta: { label: seeMoreLabel[lang], href: servicesPath } // Ruta universal /services
        },
        benefits: [
          {
            title: {
              es: 'Firewalls NGFW',
              en: 'NGFW Firewalls',
              fr: 'Pare-feu NGFW'
            }[lang],
            description: {
              es: 'Gestión de Fortinet y Peplink con reglas personalizadas y actualizaciones continuas.',
              en: 'Management of Fortinet and Peplink with custom rules and continuous updates.',
              fr: 'Gestion de Fortinet et Peplink avec règles personnalisées et mises à jour continues.'
            }[lang]
          },
          {
            title: {
              es: 'Segmentación avanzada',
              en: 'Advanced segmentation',
              fr: 'Segmentation avancée'
            }[lang],
            description: {
              es: 'Separación de redes para tripulación, invitados, domótica e instrumentación.',
              en: 'Network separation for crew, guests, home automation and instrumentation.',
              fr: 'Séparation des réseaux pour l\'équipage, les invités, la domotique et l\'instrumentation.'
            }[lang]
          },
          {
            title: {
              es: 'Hardening IoT',
              en: 'IoT Hardening',
              fr: 'Durcissement IoT'
            }[lang],
            description: {
              es: 'Firmware controlado, acceso seguro y políticas Zero Trust para cada dispositivo.',
              en: 'Controlled firmware, secure access and Zero Trust policies for each device.',
              fr: 'Firmware contrôlé, accès sécurisé et politiques Zero Trust pour chaque appareil.'
            }[lang]
          }
        ],
        process: [
          { 
            title: {
              es: 'Auditoría inicial',
              en: 'Initial audit',
              fr: 'Audit initial'
            }[lang],
            description: {
              es: 'Inventario de activos y análisis de vulnerabilidades.',
              en: 'Asset inventory and vulnerability analysis.',
              fr: 'Inventaire des actifs et analyse des vulnérabilités.'
            }[lang]
          },
          { 
            title: {
              es: 'Diseño de políticas',
              en: 'Policy design',
              fr: 'Conception des politiques'
            }[lang],
            description: {
              es: 'Definición de VLAN, autenticación y registros.',
              en: 'Definition of VLANs, authentication and logs.',
              fr: 'Définition des VLAN, authentification et journaux.'
            }[lang]
          },
          { 
            title: {
              es: 'Monitorización SIEM',
              en: 'SIEM monitoring',
              fr: 'Surveillance SIEM'
            }[lang],
            description: {
              es: 'Alertas proactivas y respuesta a incidentes.',
              en: 'Proactive alerts and incident response.',
              fr: 'Alertes proactives et réponse aux incidents.'
            }[lang]
          },
          { 
            title: {
              es: 'Revisión recurrente',
              en: 'Recurring review',
              fr: 'Révision récurrente'
            }[lang],
            description: {
              es: 'Tests de intrusión y planes de mejora trimestrales.',
              en: 'Penetration tests and quarterly improvement plans.',
              fr: 'Tests de pénétration et plans d\'amélioration trimestriels.'
            }[lang]
          }
        ],
        caseStudy: {
          company: 'Superyate 50 m',
          challenge: 'Accesos invitados comprometian la red de navegacion y entretenimiento.',
          solution: 'Segmentamos en cuatro capas con autenticacion multifactor y politicas Zero Trust.',
          result: 'Cero incidentes en la ultima temporada y auditoria externa superada.'
        },
        faq: [
          {
            question: {
              es: '¿Formáis a la tripulación?',
              en: 'Do you train the crew?',
              fr: 'Formez-vous l\'équipage ?'
            }[lang],
            answer: {
              es: 'Sí, impartimos sesiones de concienciación y entregamos guías con buenas prácticas.',
              en: 'Yes, we provide awareness sessions and deliver guides with best practices.',
              fr: 'Oui, nous dispensons des sessions de sensibilisation et fournissons des guides de bonnes pratiques.'
            }[lang]
          },
          {
            question: {
              es: '¿Qué ocurre tras la auditoría?',
              en: 'What happens after the audit?',
              fr: 'Que se passe-t-il après l\'audit ?'
            }[lang],
            answer: {
              es: 'Recibes un informe con riesgos priorizados y acompañamiento en la implementación.',
              en: 'You receive a report with prioritized risks and implementation support.',
              fr: 'Vous recevez un rapport avec les risques priorisés et un accompagnement dans la mise en œuvre.'
            }[lang]
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
        name: {
          es: 'Integración AV',
          en: 'AV System Integration',
          fr: 'Intégration AV'
        }[lang],
        shortDescription: {
          es: 'Entretenimiento inmersivo con distribución 4K, audio zonificado y control domótico personalizado.',
          en: 'Immersive entertainment with 4K distribution, zoned audio and custom home automation control.',
          fr: 'Divertissement immersif avec distribution 4K, audio par zones et contrôle domotique personnalisé.'
        }[lang],
        hero: {
          tagline: {
            es: 'Experiencia cinematográfica en el mar',
            en: 'Cinematic experience at sea',
            fr: 'Expérience cinématographique en mer'
          }[lang],
          description: {
            es: 'Convertimos salones y sky lounges en espacios de cine, reuniones o entretenimiento privado gestionados desde interfaces Crestron.',
            en: 'We transform salons and sky lounges into cinema spaces, meetings or private entertainment managed from Crestron interfaces.',
            fr: 'Nous transformons les salons et sky lounges en espaces cinéma, réunions ou divertissement privé gérés depuis des interfaces Crestron.'
          }[lang],
          primaryCta: { label: ctaLabel[lang], href: contactPath }, // Ruta universal /contact
          secondaryCta: { label: seeMoreLabel[lang], href: servicesPath } // Ruta universal /services
        },
        benefits: [
          {
            title: {
              es: 'Distribución 4K',
              en: '4K Distribution',
              fr: 'Distribution 4K'
            }[lang],
            description: {
              es: 'Matrices UHD para enviar contenido a cualquier estancia sin latencia perceptible.',
              en: 'UHD matrices to send content to any room without noticeable latency.',
              fr: 'Matrices UHD pour envoyer du contenu dans n\'importe quelle pièce sans latence perceptible.'
            }[lang]
          },
          {
            title: {
              es: 'Audio por zonas',
              en: 'Zoned audio',
              fr: 'Audio par zones'
            }[lang],
            description: {
              es: 'Control independiente por cabina con escenas adaptadas a cada invitado.',
              en: 'Independent control per cabin with scenes adapted to each guest.',
              fr: 'Contrôle indépendant par cabine avec scènes adaptées à chaque invité.'
            }[lang]
          },
          {
            title: {
              es: 'Espacios polivalentes',
              en: 'Multipurpose spaces',
              fr: 'Espaces polyvalents'
            }[lang],
            description: {
              es: 'Salas preparadas para briefings corporativos o sesiones de ocio.',
              en: 'Rooms prepared for corporate briefings or leisure sessions.',
              fr: 'Salles préparées pour les réunions d\'entreprise ou les sessions de loisirs.'
            }[lang]
          }
        ],
        process: [
          {
            title: {
              es: 'Discovery de usos',
              en: 'Usage discovery',
              fr: 'Découverte des usages'
            }[lang],
            description: {
              es: 'Definimos escenarios con propietarios y tripulación.',
              en: 'We define scenarios with owners and crew.',
              fr: 'Nous définissons les scénarios avec les propriétaires et l\'équipage.'
            }[lang]
          },
          {
            title: {
              es: 'Diseño técnico',
              en: 'Technical design',
              fr: 'Conception technique'
            }[lang],
            description: {
              es: 'Selección de equipos Crestron, Sonos, IPTV y servidores Plex.',
              en: 'Selection of Crestron, Sonos, IPTV and Plex server equipment.',
              fr: 'Sélection des équipements Crestron, Sonos, IPTV et serveurs Plex.'
            }[lang]
          },
          {
            title: {
              es: 'Integración domótica',
              en: 'Home automation',
              fr: 'Domotique'
            }[lang],
            description: {
              es: 'Interfaces táctiles y control desde dispositivos personales.',
              en: 'Touch interfaces and control from personal devices.',
              fr: 'Interfaces tactiles et contrôle depuis les appareils personnels.'
            }[lang]
          },
          {
            title: {
              es: 'Calibración continua',
              en: 'Continuous calibration',
              fr: 'Calibration continue'
            }[lang],
            description: {
              es: 'Soporte remoto y ajustes durante la navegación.',
              en: 'Remote support and adjustments during navigation.',
              fr: 'Support à distance et ajustements pendant la navigation.'
            }[lang]
          }
        ],
        caseStudy: {
          company: 'Yate 38 m',
          challenge: 'Experiencias AV fragmentadas y dificil control por parte de la tripulacion.',
          solution: 'Implementamos matriz 4K, audio oculto y escenas Crestron predefinidas.',
          result: 'Uso intuitivo y satisfaccion total de invitados y tripulacion.'
        },
        faq: [
          {
            question: {
              es: '¿Podemos reutilizar equipos actuales?',
              en: 'Can we reuse existing equipment?',
              fr: 'Pouvons-nous réutiliser l\'équipement existant ?'
            }[lang],
            answer: {
              es: 'Sí, integramos hardware existente y lo combinamos con nuevas soluciones cuando es necesario.',
              en: 'Yes, we integrate existing hardware and combine it with new solutions when necessary.',
              fr: 'Oui, nous intégrons le matériel existant et le combinons avec de nouvelles solutions si nécessaire.'
            }[lang]
          },
          {
            question: {
              es: '¿Ofrecéis ajustes remotos?',
              en: 'Do you offer remote adjustments?',
              fr: 'Proposez-vous des ajustements à distance ?'
            }[lang],
            answer: {
              es: 'Monitorizamos el sistema y aplicamos actualizaciones o afinaciones bajo demanda.',
              en: 'We monitor the system and apply updates or fine-tuning on demand.',
              fr: 'Nous surveillons le système et appliquons des mises à jour ou des ajustements sur demande.'
            }[lang]
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
        name: {
          es: 'IoT y Sistemas de Videovigilancia',
          en: 'IoT & Video Surveillance Systems',
          fr: 'IoT et Systèmes de Vidéosurveillance'
        }[lang],
        shortDescription: {
          es: 'Automatización integral con control inteligente de cabinas, iluminación y cámaras con acceso seguro.',
          en: 'Comprehensive automation with intelligent control of cabins, lighting and cameras with secure access.',
          fr: 'Automatisation complète avec contrôle intelligent des cabines, de l\'éclairage et des caméras avec accès sécurisé.'
        }[lang],
        hero: {
          tagline: {
            es: 'Control total y seguridad',
            en: 'Total control and security',
            fr: 'Contrôle total et sécurité'
          }[lang],
          description: {
            es: 'Integramos iluminación, clima, monitorización NMEA 2000 y CCTV en una sola plataforma accesible desde cualquier lugar.',
            en: 'We integrate lighting, climate, NMEA 2000 monitoring and CCTV in a single platform accessible from anywhere.',
            fr: 'Nous intégrons l\'éclairage, le climat, la surveillance NMEA 2000 et la vidéosurveillance dans une seule plateforme accessible de partout.'
          }[lang],
          primaryCta: { label: ctaLabel[lang], href: contactPath }, // Ruta universal /contact
          secondaryCta: { label: seeMoreLabel[lang], href: servicesPath } // Ruta universal /services
        },
        benefits: [
          {
            title: {
              es: 'Plataforma centralizada',
              en: 'Centralized platform',
              fr: 'Plateforme centralisée'
            }[lang],
            description: {
              es: 'Escenas, alertas y estados en tiempo real para tripulación y propietarios.',
              en: 'Scenes, alerts and real-time status for crew and owners.',
              fr: 'Scènes, alertes et états en temps réel pour l\'équipage et les propriétaires.'
            }[lang]
          },
          {
            title: {
              es: 'Cabinas personalizadas',
              en: 'Custom cabins',
              fr: 'Cabines personnalisées'
            }[lang],
            description: {
              es: 'Cada invitado ajusta ambiente y entretenimiento desde su dispositivo.',
              en: 'Each guest adjusts ambiance and entertainment from their device.',
              fr: 'Chaque invité ajuste l\'ambiance et le divertissement depuis son appareil.'
            }[lang]
          },
          {
            title: {
              es: 'Vigilancia avanzada',
              en: 'Advanced surveillance',
              fr: 'Surveillance avancée'
            }[lang],
            description: {
              es: 'Streaming multiestancia, grabación redundante y accesos cifrados.',
              en: 'Multi-room streaming, redundant recording and encrypted access.',
              fr: 'Streaming multi-pièces, enregistrement redondant et accès cryptés.'
            }[lang]
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

// NETNAUTICA-EDIT: Usando rutas universales pero manteniendo estructura original para compatibilidad
// Cambio: Solo corregidas las rutas /contacto -> /contact y /casos-de-exito -> /cases
export const servicesPageContent = createLocales((lang) => {
  return {
    hero: {
      eyebrow: {
        es: 'Servicios',
        en: 'Services', 
        fr: 'Services'
      }[lang],
      title: {
        es: 'Tecnología inteligente para navegación perfecta',
        en: 'Smart technology for seamless yachting',
        fr: 'Technologie intelligente pour navigation fluide'
      }[lang],
      description: {
        es: 'Integramos conectividad, ciberseguridad, AV e IoT con un equipo boutique de ingeniería telemática.',
        en: 'We integrate connectivity, cybersecurity, AV and IoT with a boutique telematics engineering team.',
        fr: 'Nous intégrons connectivité, cybersécurité, AV et IoT avec une équipe boutique d\'ingénierie télématique.'
      }[lang],
      primaryCta: { label: ctaLabel[lang], href: '/contact' }, // Ruta universal /contact
      secondaryCta: {
        label: {
          es: 'Ver portfolio',
          en: 'View portfolio',
          fr: 'Voir le portfolio'
        }[lang],
        href: '/cases' // Ruta universal /cases
      }
    },
    intro: {
      title: {
        es: 'Metodología a bordo',
        en: 'Onboard methodology',
        fr: 'Méthodologie à bord'
      }[lang],
      description: {
        es: 'Auditoría técnica, diseño personalizado, integración cuidadosa y soporte remoto 24/7 para cada travesía.',
        en: 'Technical audit, personalized design, careful integration and 24/7 remote support for every journey.',
        fr: 'Audit technique, conception personnalisée, intégration soignée et support à distance 24/7 pour chaque traversée.'
      }[lang]
    },
    steps: [
      {
        title: {
          es: 'Auditoría técnica',
          en: 'Technical audit',
          fr: 'Audit technique'
        }[lang],
        description: {
          es: 'Inspeccionamos racks, cableado, cobertura satelital y necesidades de tripulación.',
          en: 'We inspect racks, wiring, satellite coverage and crew needs.',
          fr: 'Nous inspectons les racks, câblage, couverture satellite et besoins de l\'équipage.'
        }[lang]
      },
      {
        title: {
          es: 'Diseño personalizado',
          en: 'Personalized design',
          fr: 'Conception personnalisée'
        }[lang],
        description: {
          es: 'Arquitectura modular con los mejores fabricantes del mercado náutico.',
          en: 'Modular architecture with the best manufacturers in the nautical market.',
          fr: 'Architecture modulaire avec les meilleurs fabricants du marché nautique.'
        }[lang]
      },
      {
        title: {
          es: 'Integración precisa',
          en: 'Precise integration',
          fr: 'Intégration précise'
        }[lang],
        description: {
          es: 'Coordinamos con astilleros e interioristas respetando acabados y tiempos.',
          en: 'We coordinate with shipyards and interior designers respecting finishes and timelines.',
          fr: 'Nous coordonnons avec chantiers navals et décorateurs en respectant finitions et délais.'
        }[lang]
      },
      {
        title: {
          es: 'Soporte continuo',
          en: 'Continuous support',
          fr: 'Support continu'
        }[lang],
        description: {
          es: 'Monitorización 24/7, visitas planificadas y asistencia remota inmediata.',
          en: '24/7 monitoring, scheduled visits and immediate remote assistance.',
          fr: 'Surveillance 24/7, visites planifiées et assistance à distance immédiate.'
        }[lang]
      }
    ],
    cta: {
      title: {
        es: 'Prepara tu próxima travesía con Netnautica',
        en: 'Prepare your next journey with Netnautica',
        fr: 'Préparez votre prochaine traversée avec Netnautica'
      }[lang],
      description: {
        es: 'Agenda una consultoría sin compromiso y recibe un plan técnico detallado en menos de 48 horas.',
        en: 'Schedule a no-commitment consultation and receive a detailed technical plan in less than 48 hours.',
        fr: 'Planifiez une consultation sans engagement et recevez un plan technique détaillé en moins de 48 heures.'
      }[lang],
      primaryCta: { label: ctaLabel[lang], href: '/contact' } // Ruta universal /contact
    }
  };
});
