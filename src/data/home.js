import esTranslations from '@/locales/es/translation.json';
import enTranslations from '@/locales/en/translation.json';
import frTranslations from '@/locales/fr/translation.json';
import deTranslations from '@/locales/de/translation.json';

const pickHomeContent = (resource) => {
  // NETNAUTICA-EDIT: Normalizamos el contenido home desde los ficheros de traduccion
  if (!resource || !resource.home) {
    return {};
  }
  const {
    hero = {},
    stats = [],
    highlights = [],
    servicesSection = {},
    technologySection = {},
    casesSection = {},
    cases = [],
    contactCta = {}
  } = resource.home;

  return {
    hero,
    stats,
    highlights,
    servicesSection,
    technologySection,
    casesSection,
    cases,
    contactCta
  };
};

export const homeContent = {
  // NETNAUTICA-EDIT: Contenido por idioma proveniente de i18n
  es: pickHomeContent(esTranslations),
  en: pickHomeContent(enTranslations),
  fr: pickHomeContent(frTranslations),
  de: pickHomeContent(deTranslations)
};
