// NETNAUTICA-EDIT: Blog adaptado a los articulos presentes en Netnautica.es
const createLocales = (value) => ({ es: value, en: value, fr: value });

export const blogPosts = [
  {
    id: 'starlink-superyachts',
    slug: 'instalacion-starlink-superyates',
    category: 'Conectividad',
    heroImage: {
      avif: 'https://images.unsplash.com/photo-1521208914988-03fe57abede5?auto=format&fit=crop&w=1200&q=60&fm=avif',
      webp: 'https://images.unsplash.com/photo-1521208914988-03fe57abede5?auto=format&fit=crop&w=1200&q=60&fm=webp'
    },
    readingTime: '6 min',
    publishedAt: '2025-02-12',
    locales: createLocales({
      title: 'Instalacion Starlink en superyates: guia completa 2025',
      excerpt:
        'Todo lo que necesitas saber para desplegar conectividad Starlink a bordo: planificacion, montaje maritimo y optimizacion QoS.',
      content: [
        'Analizamos hardware, montaje y alineacion de antenas Starlink para superyates, incluyendo integracion con routers Peplink y respaldos VSAT.',
        'Compartimos un checklist de cobertura, alimentacion, cableado y plan de pruebas antes de zarpar.'
      ],
      seoDescription: 'Guia practica para integrar Starlink en superyates con redundancia multi-WAN y soporte Netnautica.'
    })
  },
  {
    id: 'bonding-technologies',
    slug: 'tecnologias-bonding-yates',
    category: 'Conectividad',
    heroImage: {
      avif: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=60&fm=avif',
      webp: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=60&fm=webp'
    },
    readingTime: '5 min',
    publishedAt: '2025-01-28',
    locales: createLocales({
      title: 'Tecnologias de bonding: conectividad redundante para yates',
      excerpt:
        'Descubre como combinar multiples enlaces en una sola interfaz virtual para maximizar disponibilidad y estabilidad a bordo.',
      content: [
        'Explicamos bonding, load balancing y failover en routers Peplink y como aprovechan Starlink, 4G/5G y VSAT.',
        'Incluimos recomendaciones de perfiles QoS y monitoreo remoto con alertas en tiempo real.'
      ],
      seoDescription: 'Bonding y multi-WAN para yates: recomendaciones Netnautica para conectividad sin cortes.'
    })
  },
  {
    id: 'digital-fortress-at-sea',
    slug: 'ciberseguridad-digital-fortress',
    category: 'Cybersecurity',
    heroImage: {
      avif: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=60&fm=avif',
      webp: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=60&fm=webp'
    },
    readingTime: '7 min',
    publishedAt: '2024-12-10',
    locales: createLocales({
      title: 'Digital fortress at sea: guia de ciberseguridad para tripulaciones',
      excerpt:
        'Buenas practicas, segmentacion y monitorizacion continua para proteger redes de navegacion y entretenimiento.',
      content: [
        'Desglosamos politicas Zero Trust, autenticacion reforzada y actualizacion de firmware IoT en entornos maritimos.',
        'Proponemos un plan de respuesta a incidentes y formacion recurrente para la tripulacion.'
      ],
      seoDescription: 'Ciberseguridad a bordo: recomendaciones Netnautica para tripulaciones y superyates.'
    })
  }
];

export const blogPageContent = {
  es: {
    title: 'Recursos tecnicos para yates conectados',
    description: 'Guias Netnautica sobre conectividad, ciberseguridad, AV e IoT a bordo.',
    seoDescription: 'Blog Netnautica: Starlink, bonding, ciberseguridad y automatizacion para superyates.'
  },
  en: {
    title: 'Technical resources for connected yachts',
    description: 'Netnautica insights covering connectivity, cybersecurity, AV and IoT at sea.',
    seoDescription: 'Netnautica blog: Starlink, bonding, cybersecurity and automation for superyachts.'
  },
  fr: {
    title: 'Ressources techniques pour yachts connectes',
    description: 'Conseils Netnautica sur connectivite, cybersecurite, AV et IoT a bord.',
    seoDescription: 'Blog Netnautica : Starlink, bonding, cybersecurite et automatisation pour superyachts.'
  }
};
