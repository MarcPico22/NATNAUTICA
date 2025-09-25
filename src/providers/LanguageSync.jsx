import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '@/config/site';

const STORAGE_KEY = 'netnautica-lang';
const SUPPORTED_CODES = new Set(SUPPORTED_LANGUAGES.map((lang) => lang.code));

const normalizeLanguage = (value) => (value && SUPPORTED_CODES.has(value) ? value : undefined);

export function LanguageSync() {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const params = new URLSearchParams(location.search);
    const paramLang = normalizeLanguage(params.get('lang'));
    const storedLang = normalizeLanguage(localStorage.getItem(STORAGE_KEY));
    const resolvedLang = paramLang ?? storedLang ?? DEFAULT_LANGUAGE;

    if (resolvedLang !== i18n.language) {
      void i18n.changeLanguage(resolvedLang);
    }

    if (paramLang !== resolvedLang) {
      params.set('lang', resolvedLang);
      navigate({ pathname: location.pathname, search: params.toString() }, { replace: true, state: location.state });
    }

    localStorage.setItem(STORAGE_KEY, resolvedLang);
    document.documentElement.lang = resolvedLang;

    return undefined;
  }, [i18n, location.pathname, location.search, location.state, navigate]);

  return null;
}
