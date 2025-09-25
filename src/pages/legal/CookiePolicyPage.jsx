import { useTranslation } from 'react-i18next';

import { legalPages } from '@/data/legal';
import { getLocaleContent } from '@/utils/i18n';
import { LegalDocument } from '@/pages/legal/LegalDocument';

const CookiePolicyPage = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const page = getLocaleContent(legalPages.cookies.locales, language);

  return <LegalDocument title={page.title} sections={page.sections} />;
};

export default CookiePolicyPage;
