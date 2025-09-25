import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Seo } from '@/components/seo/Seo';
import { Button } from '@/components/                {CONTACT_DETAILS.address[language]}
              </div>
              <div>
                <dt className="font-semibold text-slate-900 dark:text-white">{t('footer.schedule')}</dt>
                {CONTACT_DETAILS.schedule[language]}tton';
import { SectionHeader } from '@/components/common/SectionHeader';
import { services } from '@/data/services';
import { CONTACT_DETAILS, FORM_STEPS, SOCIAL_LINKS } from '@/config/site';
import { getLocaleContent } from '@/utils/i18n';

// NETNAUTICA-EDIT: Formulario de contacto adaptado al funnel de Netnautica.es.
const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  website: '',
  service: '',
  budget: '',
  timeline: '',
  message: '',
  consent: false
};

const stepFields = [
  ['name', 'email', 'phone', 'company', 'role'],
  ['service', 'budget', 'timeline', 'website'],
  ['message', 'consent']
];

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const selectPlaceholder = t('forms.selectPlaceholder');

  const serviceOptions = useMemo(
    () =>
      services.map((service) => ({
        value: service.slug,
        label: getLocaleContent(service.locales, language).name
      })),
    [language]
  );

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = (currentStep) => {
    const fields = stepFields[currentStep];
    const newErrors = {};

    fields.forEach((field) => {
      const value = form[field];
      if ((field === 'consent' && !value) || (!value && field !== 'website')) {
        newErrors[field] = t('forms.required');
      }
      if (field === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field] = t('forms.invalidEmail');
        }
      }
      if (field === 'phone' && value) {
        const phoneRegex = /^[+\d][\d\s()+-]{6,}$/;
        if (!phoneRegex.test(value)) {
          newErrors[field] = t('forms.invalidPhone');
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validate(step)) return;
    if (step < FORM_STEPS - 1) {
      setStep((prev) => prev + 1);
    } else {
      setStatus('submitting');
      setTimeout(() => {
        setStatus('success');
      }, 600);
    }
  };

  const handlePrevious = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const fieldProps = {
    name: {
      label: t('contact.labels.name'),
      placeholder: t('contact.placeholders.name'),
      autoComplete: 'name'
    },
    email: {
      label: t('contact.labels.email'),
      placeholder: t('contact.placeholders.email'),
      type: 'email',
      autoComplete: 'email'
    },
    phone: {
      label: t('contact.labels.phone'),
      placeholder: t('contact.placeholders.phone'),
      inputMode: 'tel',
      autoComplete: 'tel'
    },
    company: {
      label: t('contact.labels.company'),
      placeholder: t('contact.placeholders.company')
    },
    role: {
      label: t('contact.labels.role'),
      placeholder: t('contact.placeholders.role')
    },
    website: {
      label: t('contact.labels.website'),
      placeholder: t('contact.placeholders.website'),
      type: 'url',
      autoComplete: 'url'
    },
    service: {
      label: t('contact.labels.service')
    },
    budget: {
      label: t('contact.labels.budget'),
      options: t('contact.options.budget', { returnObjects: true })
    },
    timeline: {
      label: t('contact.labels.timeline'),
      options: t('contact.options.timeline', { returnObjects: true })
    },
    message: {
      label: t('contact.labels.message'),
      placeholder: t('contact.placeholders.message'),
      rows: 5
    },
    consent: {
      label: t('contact.labels.consent')
    }
  };

  return (
    <>
      <Seo title={t('contact.title')} description={t('contact.subtitle')} />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-24 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="space-y-8">
          <SectionHeader title={t('contact.title')} description={t('contact.subtitle')} />
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{CONTACT_DETAILS.email}</h3>
            <a className="mt-2 block text-sm text-brand-600" href={`mailto:${CONTACT_DETAILS.email}`}>
              {CONTACT_DETAILS.email}
            </a>
            <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">{t('footer.phone')}:</span>{' '}
                                <a href={`tel:${CONTACT_DETAILS.phone[language].replace(/\s+/g, '')}`}>{CONTACT_DETAILS.phone[language]}</a>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">WhatsApp:</span>{' '}
                <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp[language].replace(/[^0-9]/g, '')}`}>{CONTACT_DETAILS.whatsapp[language]}</a>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">{t('footer.address')}:</span>{' '}
                {CONTACT_DETAILS.address[language]}
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">{t('footer.schedule')}:</span>{' '}
                {CONTACT_DETAILS.schedule[language]}
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              {Object.entries(SOCIAL_LINKS).map(([network, url]) => (
                <a
                  key={network}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300"
                >
                  {network}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900" noValidate>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            {t('forms.step', { current: step + 1, total: FORM_STEPS })}
          </p>

          {status === 'success' ? (
            <div className="mt-6 rounded-3xl bg-brand-50 p-6 text-center text-sm text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
              {t('contact.success')}
            </div>
          ) : (
            <div className="mt-6 space-y-6">
              {step === 0 && (
                <div className="grid gap-5 md:grid-cols-2">
                  {['name', 'email', 'phone', 'company'].map((field) => (
                    <Field
                      key={field}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      error={errors[field]}
                      {...fieldProps[field]}
                    />
                  ))}
                  <Field
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    error={errors.role}
                    {...fieldProps.role}
                  />
                </div>
              )}

              {step === 1 && (
                <div className="grid gap-5">
                  <SelectField
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    error={errors.service}
                    placeholder={selectPlaceholder}
                    options={serviceOptions}
                    {...fieldProps.service}
                  />
                  <SelectField
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    error={errors.budget}
                    placeholder={selectPlaceholder}
                    options={(fieldProps.budget.options ?? []).map((value) => ({ value, label: value }))}
                    {...fieldProps.budget}
                  />
                  <SelectField
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    error={errors.timeline}
                    placeholder={selectPlaceholder}
                    options={(fieldProps.timeline.options ?? []).map((value) => ({ value, label: value }))}
                    {...fieldProps.timeline}
                  />
                  <Field
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    error={errors.website}
                    {...fieldProps.website}
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <TextareaField
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    {...fieldProps.message}
                  />
                  <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span>
                      {fieldProps.consent.label}{' '}
                      <a href="/legales/politica-de-privacidad" className="font-semibold text-brand-600">
                        {t('legal.privacy')}
                      </a>
                      .
                      {errors.consent && <span className="block text-xs text-red-500">{errors.consent}</span>}
                    </span>
                  </label>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                {step > 0 && (
                  <Button type="button" variant="secondary" onClick={handlePrevious}>
                    {t('actions.previous')}
                  </Button>
                )}
                <Button type="button" onClick={handleNext} disabled={status === 'submitting'}>
                  {step === FORM_STEPS - 1 ? t('actions.submit') : t('actions.next')}
                </Button>
              </div>
            </div>
          )}
        </form>
      </section>
    </>
  );
};

const Field = ({ label, name, value, onChange, error, placeholder, type = 'text', ...rest }) => (
  <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
    <span className="font-semibold text-slate-900 dark:text-white">{label}</span>
    <input
      className={`rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white ${
        error ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : ''
      }`}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
    {error && <span className="text-xs text-red-500">{error}</span>}
  </label>
);

const TextareaField = ({ label, name, value, onChange, error, placeholder, rows = 4 }) => (
  <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
    <span className="font-semibold text-slate-900 dark:text-white">{label}</span>
    <textarea
      className={`rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white ${
        error ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : ''
      }`}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />
    {error && <span className="text-xs text-red-500">{error}</span>}
  </label>
);

const SelectField = ({ label, name, value, onChange, options = [], error, placeholder }) => (
  <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
    <span className="font-semibold text-slate-900 dark:text-white">{label}</span>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white ${
        error ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : ''
      }`}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <span className="text-xs text-red-500">{error}</span>}
  </label>
);

export default ContactPage;
