import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const items = t('services.items', { returnObjects: true });
  const services = Array.isArray(items) ? items : [];
  const defaultId = services[0]?.id ?? services[0]?.title;
  const [activeId, setActiveId] = useState(defaultId);

  const activeService = useMemo(
    () => services.find((service) => service.id === activeId || service.title === activeId) ?? services[0],
    [activeId, services],
  );

  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="services-intro">
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <p>{t('services.description')}</p>
        </div>
        <div className="services-layout">
          <div className="service-tabs" role="tablist">
            {services.map((service) => {
              const isActive = activeService?.title === service.title;
              const tabClassName = isActive ? 'service-tab is-active' : 'service-tab';

              return (
                <button
                  key={service.id ?? service.title}
                  className={tabClassName}
                  onClick={() => setActiveId(service.id ?? service.title)}
                  role="tab"
                  type="button"
                >
                  <div className="service-tab-header">
                    <span className="service-tab-title">{service.title}</span>
                    <span className="service-tab-subtitle">{service.subtitle}</span>
                  </div>
                  <p>{service.summary}</p>
                </button>
              );
            })}
          </div>
          {activeService ? (
            <article className="service-panel" role="tabpanel">
              <span className="service-panel-eyebrow">{activeService.subtitle}</span>
              <h3>{activeService.headline}</h3>
              <p className="service-panel-summary">{activeService.subheadline}</p>
              <ul className="service-features">
                {activeService.features?.map((feature, index) => (
                  <li key={feature ?? index}>{feature}</li>
                ))}
              </ul>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Services;
