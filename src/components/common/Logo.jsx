import { Link } from 'react-router-dom';

import { SITE_NAME } from '@/config/site';

export function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 font-semibold tracking-tight text-slate-900 no-underline dark:text-slate-100 ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-brand-400 to-brand-600 text-white shadow-lg">
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          role="img"
        >
          <path
            d="M4 12c0-2.21 0-3.32.44-4.157a4 4 0 0 1 1.403-1.403C6.68 6 7.79 6 10 6h4c2.21 0 3.32 0 4.157.44a4 4 0 0 1 1.403 1.403C20 8.68 20 9.79 20 12s0 3.32-.44 4.157a4 4 0 0 1-1.403 1.403C17.32 18 16.21 18 14 18h-4c-2.21 0-3.32 0-4.157-.44a4 4 0 0 1-1.403-1.403C4 15.32 4 14.21 4 12Z"
            className="fill-white/15"
          />
          <path
            d="M12 7.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5S7.5 14.485 7.5 12 9.515 7.5 12 7.5Z"
            className="stroke-current"
            strokeWidth="1.5"
          />
          <path d="M12 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span>{SITE_NAME}</span>
        <span className="text-xs font-medium text-slate-500 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-200">
          Digital Studio
        </span>
      </span>
    </Link>
  );
}
