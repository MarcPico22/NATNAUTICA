import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const items = t('services.items', { returnObjects: true });

  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="services-intro">
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h2>{t('services.title')}</h2>
          <p>{t('services.description')}</p>
        </div>
        <div className="services-list">
          {items.map((service) => (
            <div key={service.title} className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
