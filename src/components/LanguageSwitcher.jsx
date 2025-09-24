import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || 'es').split('-')[0];

  const handleChange = (event) => {
    void i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      aria-label={t('language.selectLabel')}
      className="language-switcher"
      onChange={handleChange}
      value={currentLanguage}
    >
      <option value="es">{t('language.es')}</option>
      <option value="en">{t('language.en')}</option>
    </select>
  );
};

export default LanguageSwitcher;
