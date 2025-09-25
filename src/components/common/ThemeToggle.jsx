import { useTheme } from '@/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';

export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-400 hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300 ${className}`}
      aria-label={t('actions.toggleTheme')}
    >
      {isDark ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 12.79A9 9 0 0 1 12.79 3 7 7 0 1 0 21 12.79Z"
            className="fill-current"
          />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="5" className="fill-current" />
          <path d="M12 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 21v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4.22 4.22 5.64 5.64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18.36 18.36 19.78 19.78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M1 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M21 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4.22 19.78 5.64 18.36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18.36 5.64 19.78 4.22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
