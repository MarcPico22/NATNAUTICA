// NETNAUTICA-EDIT: Contenido home actualizado con la informacion original de Netnautica.es
const createPageContent = () => ({
  hero: {
    eyebrow: 'Smart Technology for Seamless Yachting',
    title: 'Solutions for onboard comfort',
    subtitle:
      'We design and implement smart technological systems that elevate onboard comfort and optimise the user experience across every voyage.',
    primaryCta: {
      label: 'Explore services',
      href: '/servicios'
    },
    secondaryCta: {
      label: 'View portfolio',
      href: '/casos-de-exito'
    },
    stats: [
      {
        label: 'Connectivity projects delivered',
        value: '12'
      },
      {
        label: 'Specialists in Starlink, AV & IoT',
        value: 'Boutique team'
      },
      {
        label: 'Base Palma - Operamos worldwide',
        value: 'Mediterranean'
      }
    ],
    highlights: [
      {
        title: 'Certified engineering',
        description:
          'Telematics and IT specialists integrating connectivity, cybersecurity and AV for luxury yachts.'
      },
      {
        title: 'Hands-on founders',
        description:
          'Planning, onboard installation and support ejecutados directamente por el equipo principal.'
      },
      {
        title: 'Resilient architectures',
        description:
          'Multi-WAN, proactive cybersecurity and monitoring so the yacht never disconnects.'
      }
    ]
  },
  servicesIntro: {
    title: 'Four pillars for a seamless onboard experience',
    description:
      'Worldwide connectivity, cybersecurity, AV integration and IoT & surveillance are desplegados como un unico ecosistema, pensado para la tripulacion y los invitados.'
  },
  technology: {
    title: 'Cutting-edge technology',
    description:
      'Trabajamos con Starlink, Ubiquiti, Peplink, Fortinet y Crestron para garantizar infraestructura actualizada y soporte global.',
    partners: [
      { name: 'Starlink', copy: 'LEO satellite connectivity and maritime hardware deployment.' },
      { name: 'Ubiquiti', copy: 'WiFi 6 redes mesh de alto rendimiento y gestion centralizada.' },
      { name: 'Peplink', copy: 'Routers multi-WAN con bonding y failover automatico.' },
      { name: 'Fortinet', copy: 'Ciberseguridad de nueva generacion con politicas Zero Trust.' },
      { name: 'Crestron', copy: 'Control AV y automatizacion con interfaces personalizadas.' }
    ]
  },
  blogHighlight: {
    title: 'Guias tecnicas y recursos Netnautica',
    description: 'Explora nuestras publicaciones sobre conectividad, ciberseguridad y entretenimiento a bordo.',
    cta: {
      label: 'Ir al blog',
      href: '/blog'
    }
  },
  contactCta: {
    title: 'Preparados para tu proxima travesia',
    description:
      'Cuentanos el estado actual de tu yate y disenaremos un roadmap tecnologico realista en menos de 48 horas.',
    primary: {
      label: 'Solicitar consultoria',
      href: '/contacto'
    },
    secondary: {
      label: 'Ver servicios',
      href: '/servicios'
    }
  }
});

export const homeContent = {
  es: createPageContent(),
  en: createPageContent(),
  fr: createPageContent()
};
