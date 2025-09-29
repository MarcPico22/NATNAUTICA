// import { cn } from '@/utils/cn';

export function SectionHeader({ eyebrow, title, description, alignment = 'left', className = '' }) {
  const alignmentClass = alignment === 'center' ? 'text-center' : 'text-left';
  
  return (
    <div className={`flex flex-col gap-4 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
