/**
 * CONFIGURACIÓN DE NAVEGACIÓN
 * Define los elementos de navegación principal y footer
 * CORREGIDO: Rutas actualizadas para coincidir con App.jsx
 */

// Elementos de navegación principal
export const NAVIGATION_ITEMS = [
  { id: 'home', translationKey: 'navigation.home' },
  { id: 'services', translationKey: 'navigation.services' },
  { id: 'cases', translationKey: 'navigation.cases' },
  { id: 'blog', translationKey: 'navigation.blog' },
  { id: 'about', translationKey: 'navigation.about' },
  { id: 'contact', translationKey: 'navigation.contact' }
];

// Grupos de enlaces del footer
export const FOOTER_LINK_GROUPS = [
  {
    id: 'company',
    translationKey: 'footer.company',
    links: [
      // CORREGIDO: aboutus en lugar de about para coincidir con App.jsx
      { id: 'about', path: '/aboutus', translationKey: 'navigation.about' },
      { id: 'cases', path: '/cases', translationKey: 'navigation.cases' },
      { id: 'blog', path: '/blog', translationKey: 'navigation.blog' },
      { id: 'contact', path: '/contact', translationKey: 'navigation.contact' }
    ]
  },
  {
    id: 'services',
    translationKey: 'footer.services',
    links: [
      // CORREGIDO: Rutas simplificadas para coincidir con la estructura real
      { id: 'service-connectivity', path: '/services', translationKey: 'services.customDevelopment' },
      { id: 'service-cybersecurity', path: '/services', translationKey: 'services.growthMarketing' },
      { id: 'service-av', path: '/services', translationKey: 'services.marketingAutomation' },
      { id: 'service-iot', path: '/services', translationKey: 'services.uxUi' }
    ]
  }
];

export const LEGAL_LINKS = [
  { id: 'legal.notice', path: ':lang/legal/notice', translationKey: 'legal.notice' },
  { id: 'legal.privacy', path: ':lang/legal/privacy', translationKey: 'legal.privacy' },
  { id: 'legal.cookies', path: ':lang/legal/cookies', translationKey: 'legal.cookies' }
];
