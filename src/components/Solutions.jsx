import { useTranslation } from 'react-i18next';

const Solutions = () => {
  const { t } = useTranslation();
  const items = t('solutions.items', { returnObjects: true });
  const highlights = t('solutions.highlights', { returnObjects: true });

  return (
    <section className="solutions" id="soluciones">
      <div className="container solution-heading">
        <span className="eyebrow">{t('solutions.eyebrow')}</span>
        <h2 className="section-title">{t('solutions.title')}</h2>
        <p>{t('solutions.description')}</p>
        <div className="solutions-highlights">
          {Array.isArray(highlights)
            ? highlights.map((highlight, index) => (
                <span key={highlight.title ?? highlight ?? index}>{highlight}</span>
              ))
            : null}
        </div>
      </div>
      <div className="container solution-grid">
        {items.map((solution) => (
          <article key={solution.title} className="solution-card">
            <span className="icon" aria-hidden="true">
              {solution.icon}
            </span>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
