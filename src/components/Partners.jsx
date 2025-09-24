import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();
  const items = t('partners.items', { returnObjects: true });

  return (
    <section className="partners" aria-label={t('partners.eyebrow')}>
      <div className="container partners-content">
        <div className="partners-intro">
          <span className="eyebrow">{t('partners.eyebrow')}</span>
          <h2 className="section-title">{t('partners.title')}</h2>
          <p>{t('partners.description')}</p>
        </div>
        <div className="partners-grid">
          {items.map((item) => (
            <article key={item.title} className="partner-card">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
