import { useTranslation } from 'react-i18next';

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="cta" id="contacto">
      <div className="container cta-content">
        <div>
          <span className="eyebrow">{t('cta.eyebrow')}</span>
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.description')}</p>
        </div>
        <a className="cta-button" href="mailto:info@natnautica.es">
          {t('cta.button')}
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
