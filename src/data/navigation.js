export const NAVIGATION_ITEMS = [
  { id: 'home', path: ':lang', translationKey: 'navigation.home' },
  { id: 'services', path: ':lang/services', translationKey: 'navigation.services' },
  { id: 'cases', path: ':lang/cases', translationKey: 'navigation.cases' },
  { id: 'about', path: ':lang/about', translationKey: 'navigation.about' },
  { id: 'contact', path: ':lang/contact', translationKey: 'navigation.contact' }
];

export const FOOTER_LINK_GROUPS = [
  {
    id: 'company',
    translationKey: 'footer.company',
    links: [
      { id: 'about', path: ':lang/about', translationKey: 'navigation.about' },
      { id: 'cases', path: ':lang/cases', translationKey: 'navigation.cases' },
      { id: 'contact', path: ':lang/contact', translationKey: 'navigation.contact' }
    ]
  },
  {
    id: 'services',
    translationKey: 'footer.services',
    links: [
      { id: 'service-web', path: ':lang/services/development', translationKey: 'services.customDevelopment' },
      { id: 'service-growth', path: ':lang/services/growth', translationKey: 'services.growthMarketing' },
      { id: 'service-automation', path: ':lang/services/automation', translationKey: 'services.marketingAutomation' },
      { id: 'service-ux', path: ':lang/services/ux', translationKey: 'services.uxUi' }
    ]
  }
];

export const LEGAL_LINKS = [
  { id: 'legal.notice', path: ':lang/legal/notice', translationKey: 'legal.notice' },
  { id: 'legal.privacy', path: ':lang/legal/privacy', translationKey: 'legal.privacy' },
  { id: 'legal.cookies', path: ':lang/legal/cookies', translationKey: 'legal.cookies' }
];
