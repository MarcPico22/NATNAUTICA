import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SITE_NAME } from '@/config/site';

export function Logo({ className = '' }) {
  const { i18n } = useTranslation();
  return (
    <Link to={`/${i18n.language}`} className={`group inline-flex items-center ${className}`}>
      <img
        src="/src/assets/netnautica-logo.png"
        alt={SITE_NAME}
        className="h-10 w-auto"
      />
    </Link>
  );
}
