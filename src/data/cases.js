// NETNAUTICA-EDIT: Casos de exito sintetizados a partir de implementaciones descritas en Netnautica.es
const createLocales = (value) => ({ es: value, en: value, fr: value });

export const caseStudies = [
  {
    id: 'mediterranean-connectivity',
    slug: 'flota-charter-conectividad',
    industry: createLocales('Mediterranean charter'),
    metrics: [
      { label: createLocales('Disponibilidad de red'), value: createLocales('>99 %') },
      { label: createLocales('Tiempo de failover'), value: createLocales('<10 s') }
    ],
    locales: createLocales({
      title: 'Multi-WAN con Starlink y 4G/5G para rutas de temporada',
      challenge: 'Una flota charter sufria cortes al pasar de puertos con cobertura limitada a travesias en mar abierto.',
      solution:
        'Disenamos arquitectura multi-WAN con routers Peplink, Starlink maritimo y respaldo VSAT gestionado de forma centralizada.',
      result: 'Conectividad continua durante toda la temporada y monitorizacion remota 24/7.'
    })
  },
  {
    id: 'digital-fortress',
    slug: 'refuerzo-ciberseguridad-superyate',
    industry: createLocales('Superyacht 50 m'),
    metrics: [
      { label: createLocales('Segmentos de red'), value: createLocales('4 capas') },
      { label: createLocales('Incidentes criticos'), value: createLocales('0') }
    ],
    locales: createLocales({
      title: 'Segmentacion avanzada y Zero Trust para tripulacion e invitados',
      challenge: 'Los accesos invitados ponian en riesgo sistemas de navegacion y entretenimiento.',
      solution:
        'Implementamos Fortinet NGFW, VLAN dedicadas y autenticacion multifactor con monitorizacion SIEM.',
      result: 'Cero incidentes en la ultima campana y auditoria externa superada satisfactoriamente.'
    })
  },
  {
    id: 'immersive-av',
    slug: 'integracion-av-38m',
    industry: createLocales('Entertainment upgrade'),
    metrics: [
      { label: createLocales('Zonas AV'), value: createLocales('8+') },
      { label: createLocales('Resolucion'), value: createLocales('4K HDR') }
    ],
    locales: createLocales({
      title: 'Cinematic experience at sea con control Crestron',
      challenge:
        'Un yate de 38 metros queria unificar cine, reuniones y musica con control sencillo para la tripulacion.',
      solution:
        'Integramos matriz UHD, audio oculto, escenas personalizadas y paneles Crestron sincronizados con domotica.',
      result:
        'Experiencia multi-room fluida y adopcion completa por parte de tripulacion e invitados.'
    })
  }
];
