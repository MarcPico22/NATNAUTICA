import { Link } from 'react-router-dom';
import { SITE_NAME } from '@/config/site';

export function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center ${className}`}>
      <img
        src="/src/assets/netnautica-logo.png"
        alt={SITE_NAME}
        className="h-10 w-auto"
      />
    </Link>
  );
}
