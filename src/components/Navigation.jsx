import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/netnautica-logo.png';

const Navigation = () => {
  const { t } = useTranslation();
  const links = t('nav.links', { returnObjects: true });

  return (
    <nav className="main-nav">
      <div className="container nav-content">
        <a className="logo" href="#nosotros" aria-label={t('nav.brandName')}>
          <img src={logo} alt={t('nav.brandName')} />
          <div className="logo-text">
            <strong>{t('nav.brandName')}</strong>
            <small>{t('nav.brandTagline')}</small>
          </div>
        </a>
        <div className="nav-links">
          <a href="#soluciones">{links.solutions}</a>
          <a href="#servicios">{links.services}</a>
          <a href="#nosotros">{links.about}</a>
          <a href="#contacto">{links.contact}</a>
        </div>
        <div className="nav-actions">
          <LanguageSwitcher />
          <a className="cta-button" href="#contacto">
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
