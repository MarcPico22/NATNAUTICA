import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';
import logoMark from '../assets/netnautica-logo.png';
import logoWordmark from '../assets/netnautica-wordmark.png';

const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = t('nav.links', { returnObjects: true });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navClassName = isScrolled ? 'main-nav is-scrolled' : 'main-nav';
  const menuClassName = isMenuOpen ? 'nav-links is-open' : 'nav-links';

  return (
    <nav className={navClassName} aria-label={t('nav.brandName')}>
      <div className="container nav-content">
        <a className="logo" href="#nosotros" aria-label={t('nav.brandName')}>
          <img className="logo-mark" src={logoMark} alt="" aria-hidden="true" />
          <img className="logo-wordmark" src={logoWordmark} alt={t('nav.brandName')} />
        </a>
        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          className="nav-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          type="button"
        >
          <span className="sr-only">{t('nav.menuToggle')}</span>
          <span className="nav-burger" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <div className="nav-group">
          <div className={menuClassName} id="primary-navigation">
            <div className="nav-list">
              <a href="#soluciones" onClick={() => setIsMenuOpen(false)}>
                {links.solutions}
              </a>
              <a href="#servicios" onClick={() => setIsMenuOpen(false)}>
                {links.services}
              </a>
              <a href="#tecnologia" onClick={() => setIsMenuOpen(false)}>
                {links.technology}
              </a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)}>
                {links.contact}
              </a>
            </div>
            <div className="nav-actions">
              <LanguageSwitcher />
              <a className="cta-button" href="#contacto">
                {t('nav.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
