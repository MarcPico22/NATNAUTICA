export const NAVIGATION_ITEMS = [
  { id: 'home', path: '/', translationKey: 'navigation.home' },
  { id: 'services', path: '/servicios', translationKey: 'navigation.services' },
  { id: 'cases', path: '/casos-de-exito', translationKey: 'navigation.cases' },
  { id: 'about', path: '/sobre-nosotros', translationKey: 'navigation.about' },
  { id: 'blog', path: '/blog', translationKey: 'navigation.blog' },
  { id: 'contact', path: '/contacto', translationKey: 'navigation.contact' }
];

export const FOOTER_LINK_GROUPS = [
  {
    id: 'company',
    translationKey: 'footer.company',
    links: [
      { id: 'about', path: '/sobre-nosotros', translationKey: 'navigation.about' },
      { id: 'cases', path: '/casos-de-exito', translationKey: 'navigation.cases' },
      { id: 'blog', path: '/blog', translationKey: 'navigation.blog' },
      { id: 'contact', path: '/contacto', translationKey: 'navigation.contact' }
    ]
  },
  {
    id: 'services',
    translationKey: 'footer.services',
    links: [
      { id: 'service-web', path: '/servicios/desarrollo-web-a-medida', translationKey: 'services.customDevelopment' },
      { id: 'service-growth', path: '/servicios/growth-marketing-b2b', translationKey: 'services.growthMarketing' },
      { id: 'service-automation', path: '/servicios/marketing-automation', translationKey: 'services.marketingAutomation' },
      { id: 'service-ux', path: '/servicios/diseno-ui-ux-centrado-en-el-usuario', translationKey: 'services.uxUi' }
    ]
  }
];

export const LEGAL_LINKS = [
  { id: 'legal.notice', path: '/legales/aviso-legal', translationKey: 'legal.notice' },
  { id: 'legal.privacy', path: '/legales/politica-de-privacidad', translationKey: 'legal.privacy' },
  { id: 'legal.cookies', path: '/legales/politica-de-cookies', translationKey: 'legal.cookies' }
];
