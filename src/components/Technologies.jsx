import { useTranslation } from 'react-i18next';

import starlinkLogo from '../assets/tech/starlink.svg';
import unifiLogo from '../assets/tech/unifi.svg';
import peplinkLogo from '../assets/tech/peplink.png';
import fortinetLogo from '../assets/tech/fortinet.svg';
import crestronLogo from '../assets/tech/crestron.svg';
import nmeaLogo from '../assets/tech/nmea2000.svg';

const iconMap = {
  starlink: starlinkLogo,
  unifi: unifiLogo,
  peplink: peplinkLogo,
  fortinet: fortinetLogo,
  crestron: crestronLogo,
  nmea2000: nmeaLogo,
};

const Technologies = () => {
  const { t } = useTranslation();
  const technologyData = t('technologies.items', { returnObjects: true });
  const technologies = Array.isArray(technologyData) ? technologyData : [];

  return (
    <section className="technologies" id="tecnologia">
      <div className="container technologies-content">
        <div className="technologies-intro">
          <span className="eyebrow">{t('technologies.eyebrow')}</span>
          <h2 className="section-title">{t('technologies.title')}</h2>
          <p>{t('technologies.description')}</p>
        </div>
        <div className="technologies-grid">
          {technologies.map((tech) => {
            const logoSrc = iconMap[tech.slug];
            const altText = tech.name ? `${tech.name} logo` : 'Technology logo';

            return (
              <article key={tech.name} className="technology-card">
                <div className="technology-heading">
                  {logoSrc ? (
                    <img className="technology-logo" alt={altText} loading="lazy" src={logoSrc} />
                  ) : null}
                  <div>
                    <h3>{tech.name}</h3>
                    <p className="technology-tagline">{tech.tagline}</p>
                  </div>
                </div>
                <p>{tech.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
