import { cn } from '@/utils/cn';

const baseClasses =
  'inline-flex items-center justify-center font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-50';

const variants = {
  primary: 'rounded-full bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/30',
  secondary:
    'rounded-full border border-slate-200 bg-white text-slate-800 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:text-brand-200',
  ghost: 'rounded-full text-brand-600 hover:bg-brand-50 dark:hover:bg-slate-800'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3 text-base'
};

export function Button({ as: Component = 'button', variant = 'primary', size = 'md', className, children, ...props }) {
  return (
    <Component className={cn(baseClasses, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Component>
  );
}
