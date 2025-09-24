import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const statsData = t('hero.plan.stats', { returnObjects: true });
  const featuresData = t('hero.features', { returnObjects: true });
  const stats = Array.isArray(statsData) ? statsData : [];
  const features = Array.isArray(featuresData) ? featuresData : [];

  return (
    <section className="hero" id="nosotros">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-gradient" />
        <div className="hero-blur hero-blur--one" />
        <div className="hero-blur hero-blur--two" />
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-badge">{t('hero.badge')}</span>
          <span className="eyebrow">{t('hero.eyebrow')}</span>
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.description')}</p>
          <div className="hero-actions">
            <a className="primary" href="#soluciones">
              {t('hero.primary')}
            </a>
            <a className="secondary" href="#contacto">
              {t('hero.secondary')}
            </a>
          </div>
          <ul className="hero-highlights">
            {features.map((feature, index) => (
              <li key={feature.label ?? index}>
                <span className="hero-dot" aria-hidden="true" />
                <div>
                  <strong>{feature.label}</strong>
                  <p>{feature.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-visual">
          <div className="hero-orb" />
          <div className="hero-card">
            <div className="card-header">
              <h2>{t('hero.plan.title')}</h2>
              <p>{t('hero.plan.description')}</p>
            </div>
            <ul>
              {stats.map((stat) => (
                <li key={stat.value}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
