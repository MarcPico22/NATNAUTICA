import { Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Rutas universales - mismo path para todos los idiomas
const universalPaths = {
  home: '/',
  services: '/services',
  cases: '/cases',
  about: '/aboutus',
  contact: '/contact',
  legal: '/legal'
};

export const getLocalizedPath = (key, language) => {
  return universalPaths[key] || '/';
};

export function LocalizedRoute({ pathKey, ...props }) {
  const universalPath = getLocalizedPath(pathKey);
  return <Route path={universalPath} {...props} />;
}