import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();
  const partners = t('partners.items', { returnObjects: true });

  return (
    <section className="partners" aria-label={t('partners.eyebrow')}>
      <div className="container partners-content">
        <span className="eyebrow">{t('partners.eyebrow')}</span>
        <div className="partner-logos">
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
