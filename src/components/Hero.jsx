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
      <div className="container hero-content hero-content--compact">
        <div className="hero-text">
          <span className="hero-badge">{t('hero.badge')}</span>
          <span className="eyebrow">{t('hero.eyebrow')}</span>
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.description')}</p>
          <div className="hero-actions">
            <a className="primary" href="#servicios">
              {t('hero.primary')}
            </a>
            <a className="secondary" href="#contacto">
              {t('hero.secondary')}
            </a>
          </div>
          <div className="hero-chips">
            {features.map((feature, index) => (
              <span
                className="hero-chip"
                key={feature.label ?? index}
                title={feature.detail}
              >
                {feature.label}
              </span>
            ))}
          </div>
          <div className="hero-stats">
            <h2>{t('hero.plan.title')}</h2>
            <p>{t('hero.plan.description')}</p>
            <div className="hero-stats-grid">
              {stats.map((stat, index) => (
                <div className="hero-stat" key={stat.id ?? stat.value ?? index}>
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
