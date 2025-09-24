import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import flagES from '../assets/flags/es.svg';
import flagGB from '../assets/flags/gb.svg';
import flagFR from '../assets/flags/fr.svg';

const languageOptions = [
  { value: 'es', flag: flagES, labelKey: 'language.es' },
  { value: 'en', flag: flagGB, labelKey: 'language.en' },
  { value: 'fr', flag: flagFR, labelKey: 'language.fr' },
];

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || 'es').split('-')[0];
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currentLanguage]);

  const handleSelect = (value) => {
    void i18n.changeLanguage(value);
  };

  const activeOption = languageOptions.find((option) => option.value === currentLanguage) ?? languageOptions[0];
  const menuClassName = isOpen ? 'language-menu is-open' : 'language-menu';

  return (
    <div className="language-selector" ref={wrapperRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="language-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
      >
        <img alt="" src={activeOption.flag} />
        <span>{t('language.label')}</span>
      </button>
      <ul aria-label={t('language.selectLabel')} className={menuClassName} role="menu">
        {languageOptions.map((option) => {
          const isActive = option.value === currentLanguage;
          const optionClassName = isActive ? 'language-option is-active' : 'language-option';
          return (
            <li key={option.value}>
              <button
                className={optionClassName}
                onClick={() => handleSelect(option.value)}
                role="menuitemradio"
                aria-checked={isActive}
                type="button"
              >
                <img alt="" src={option.flag} />
                <span>{t(option.labelKey)}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
