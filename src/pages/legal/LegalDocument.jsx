import { Seo } from '@/components/seo/Seo';

export const LegalDocument = ({ title, sections }) => (
  <>
    <Seo title={title} description={sections?.[0]?.body ?? ''} />
    <article className="mx-auto max-w-4xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-5xl">{title}</h1>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {sections?.map((section) => (
          <section key={section.heading}>
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
            <p className="mt-2">{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  </>
);
