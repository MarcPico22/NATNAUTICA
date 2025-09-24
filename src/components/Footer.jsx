import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const phoneNumber = t('footer.phone');
  const phoneHref = phoneNumber.replace(/\s+/g, '');

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <strong>{t('footer.brand')}</strong>
          <p>{t('footer.description')}</p>
        </div>
        <div className="footer-links">
          <a href={`tel:${phoneHref}`}>{phoneNumber}</a>
          <a href={`mailto:${t('footer.email')}`}>{t('footer.email')}</a>
          <span>{t('footer.address')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
