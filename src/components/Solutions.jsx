import { useTranslation } from 'react-i18next';

const Solutions = () => {
  const { t } = useTranslation();
  const items = t('solutions.items', { returnObjects: true });

  return (
    <section className="solutions" id="soluciones">
      <div className="container section-heading">
        <span className="eyebrow">{t('solutions.eyebrow')}</span>
        <h2>{t('solutions.title')}</h2>
        <p>{t('solutions.description')}</p>
      </div>
      <div className="container solution-grid">
        {items.map((solution) => (
          <article key={solution.title} className="solution-card">
            <span className="icon" aria-hidden="true">
              {solution.icon}
            </span>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <a href="#contacto" className="more-link">
              {t('solutions.more')}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
