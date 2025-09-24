import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const stats = t('hero.plan.stats', { returnObjects: true });

  return (
    <section className="hero" id="nosotros">
      <div className="container hero-content">
        <div className="hero-text">
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
        </div>
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
      <div className="hero-shape hero-shape--one" />
      <div className="hero-shape hero-shape--two" />
    </section>
  );
};

export default Hero;
