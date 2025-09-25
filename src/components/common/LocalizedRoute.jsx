import { Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const routePaths = {
  home: {
    es: '',
    en: '',
    fr: ''
  },
  services: {
    es: 'servicios',
    en: 'services',
    fr: 'services'
  },
  cases: {
    es: 'casos-de-exito',
    en: 'case-studies',
    fr: 'projets'
  },
  about: {
    es: 'sobre-nosotros',
    en: 'about-us',
    fr: 'a-propos'
  },
  contact: {
    es: 'contacto',
    en: 'contact',
    fr: 'contact'
  },
  legal: {
    es: 'legales',
    en: 'legal',
    fr: 'mentions-legales'
  }
};

export const getLocalizedPath = (key, language) => {
  const paths = routePaths[key];
  return paths ? paths[language] || paths.en : '';
};

export function LocalizedRoute({ pathKey, ...props }) {
  const { i18n } = useTranslation();
  const localizedPath = getLocalizedPath(pathKey, i18n.language);
  return <Route path={localizedPath} {...props} />;
}