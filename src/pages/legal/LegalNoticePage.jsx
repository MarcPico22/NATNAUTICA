import { useTranslation } from 'react-i18next';

import { legalPages } from '@/data/legal';
import { getLocaleContent } from '@/utils/i18n';
import { LegalDocument } from '@/pages/legal/LegalDocument';

const LegalNoticePage = () => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const page = getLocaleContent(legalPages.legalNotice.locales, language);

  return <LegalDocument title={page.title} sections={page.sections} />;
};

export default LegalNoticePage;
