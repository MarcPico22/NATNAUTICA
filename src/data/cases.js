// NETNAUTICA-EDIT: Casos de exito sintetizados a partir de implementaciones descritas en Netnautica.es
const createCaseLocales = (es, en, fr) => ({ es, en, fr });

export const caseStudies = [
  {
    id: 'mediterranean-connectivity',
    slug: {
      es: 'flota-charter-conectividad',
      en: 'charter-fleet-connectivity',
      fr: 'connectivite-flotte-charter'
    },
    industry: {
      es: 'Charter Mediterráneo',
      en: 'Mediterranean charter',
      fr: 'Charter méditerranéen'
    },
    metrics: [
      { 
        label: {
          es: 'Disponibilidad de red',
          en: 'Network availability',
          fr: 'Disponibilité réseau'
        },
        value: {
          es: '>99 %',
          en: '>99 %',
          fr: '>99 %'
        }
      },
      {
        label: {
          es: 'Tiempo de failover',
          en: 'Failover time',
          fr: 'Temps de bascule'
        },
        value: {
          es: '<10 s',
          en: '<10 s',
          fr: '<10 s'
        }
      }
    ],
    locales: {
      es: {
        title: 'Multi-WAN con Starlink y 4G/5G para rutas de temporada',
        challenge: 'Una flota charter sufría cortes al pasar de puertos con cobertura limitada a travesías en mar abierto.',
        solution: 'Diseñamos arquitectura multi-WAN con routers Peplink, Starlink marítimo y respaldo VSAT gestionado de forma centralizada.',
        result: 'Conectividad continua durante toda la temporada y monitorización remota 24/7.'
      },
      en: {
        title: 'Multi-WAN with Starlink and 4G/5G for seasonal routes',
        challenge: 'A charter fleet suffered outages when moving from ports with limited coverage to open sea crossings.',
        solution: 'We designed a multi-WAN architecture with Peplink routers, maritime Starlink and centrally managed VSAT backup.',
        result: 'Continuous connectivity throughout the season and 24/7 remote monitoring.'
      },
      fr: {
        title: 'Multi-WAN avec Starlink et 4G/5G pour routes saisonnières',
        challenge: 'Une flotte charter subissait des coupures entre ports à couverture limitée et traversées en haute mer.',
        solution: 'Architecture multi-WAN conçue avec routeurs Peplink, Starlink maritime et backup VSAT géré.',
        result: 'Connectivité continue toute la saison et monitoring 24/7.'
      }
    }
  },
  {
    id: 'digital-fortress',
    slug: {
      es: 'refuerzo-ciberseguridad-superyate',
      en: 'superyacht-cybersecurity-reinforcement',
      fr: 'renforcement-cybersecurite-superyacht'
    },
    industry: {
      es: 'Superyate 50 m',
      en: 'Superyacht 50 m',
      fr: 'Superyacht 50 m'
    },
    metrics: [
      {
        label: {
          es: 'Segmentos de red',
          en: 'Network segments',
          fr: 'Segments réseau'
        },
        value: {
          es: '4 capas',
          en: '4 layers',
          fr: '4 couches'
        }
      },
      {
        label: {
          es: 'Incidentes críticos',
          en: 'Critical incidents',
          fr: 'Incidents critiques'
        },
        value: {
          es: '0',
          en: '0',
          fr: '0'
        }
      }
    ],
    locales: {
      es: {
        title: 'Segmentación avanzada y Zero Trust para tripulación e invitados',
        challenge: 'Los accesos invitados ponían en riesgo sistemas de navegación y entretenimiento.',
        solution: 'Implementamos Fortinet NGFW, VLAN dedicadas y autenticación multifactor con monitorización SIEM.',
        result: 'Cero incidentes en la última campaña y auditoría externa superada satisfactoriamente.'
      },
      en: {
        title: 'Advanced segmentation and Zero Trust for crew and guests',
        challenge: 'Guest access was putting navigation and entertainment systems at risk.',
        solution: 'We implemented Fortinet NGFW, dedicated VLANs and multi-factor authentication with SIEM monitoring.',
        result: 'Zero incidents in the last campaign and successfully passed external audit.'
      },
      fr: {
        title: 'Segmentation avancée et Zero Trust pour équipage et invités',
        challenge: 'Les accès invités menaçaient les systèmes de navigation et divertissement.',
        solution: 'Mise en place Fortinet NGFW, VLAN dédiés et authentification multifacteur avec monitoring SIEM.',
        result: 'Aucun incident lors de la dernière saison et audit externe réussi.'
      }
    }
  },
  {
    id: 'immersive-av',
    slug: {
      es: 'integracion-av-38m',
      en: 'av-integration-38m',
      fr: 'integration-av-38m'
    },
    industry: {
      es: 'Mejora de entretenimiento',
      en: 'Entertainment upgrade',
      fr: 'Amélioration divertissement'
    },
    metrics: [
      {
        label: {
          es: 'Zonas AV',
          en: 'AV zones',
          fr: 'Zones AV'
        },
        value: {
          es: '8+',
          en: '8+',
          fr: '8+'
        }
      },
      {
        label: {
          es: 'Resolución',
          en: 'Resolution',
          fr: 'Résolution'
        },
        value: {
          es: '4K HDR',
          en: '4K HDR',
          fr: '4K HDR'
        }
      }
    ],
    locales: {
      es: {
        title: 'Experiencia cinematográfica en el mar con control Crestron',
        challenge: 'Un yate de 38 metros quería unificar cine, reuniones y música con control sencillo para la tripulación.',
        solution: 'Integramos matriz UHD, audio oculto, escenas personalizadas y paneles Crestron sincronizados con domótica.',
        result: 'Experiencia multi-room fluida y adopción completa por parte de tripulación e invitados.'
      },
      en: {
        title: 'Cinematic experience at sea with Crestron control',
        challenge: 'A 38-meter yacht wanted to unify cinema, meetings and music with simple control for the crew.',
        solution: 'We integrated UHD matrix, hidden audio, custom scenes and Crestron panels synchronized with home automation.',
        result: 'Fluid multi-room experience and complete adoption by crew and guests.'
      },
      fr: {
        title: 'Expérience cinématique en mer avec contrôle Crestron',
        challenge: 'Un yacht de 38 mètres voulait unifier cinéma, réunions et musique avec contrôle simple.',
        solution: 'Matrice UHD, audio caché et scènes Crestron personnalisées intégrées.',
        result: 'Expérience multi-room fluide adoptée par équipage et invités.'
      }
    }
  }
];
