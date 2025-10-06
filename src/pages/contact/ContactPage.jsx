// ========================================
// 📧 PÁGINA DE CONTACTO - FORMULARIO MULTI-STEP
// ========================================
// Formulario de contacto con 3 pasos para mejorar conversión
// Paso 1: Datos personales y empresa
// Paso 2: Servicio, presupuesto y timeline  
// Paso 3: Mensaje y consentimiento GDPR
// Incluye validación por pasos y estados de carga

import { useMemo, useState } from 'react';           // ⚛️ Hooks React
import { useTranslation } from 'react-i18next';     // 🌍 Internacionalización
import { motion, AnimatePresence } from 'framer-motion'; // 🎬 Animaciones suaves

// 📦 Componentes
import { Seo } from '@/components/seo/Seo';          // 🎯 SEO dinámico
import { Button } from '@/components/ui/Button';     // 🔘 Botones reutilizables
import { SectionHeader } from '@/components/common/SectionHeader'; // 📄 Encabezados
import ContactErrorBoundary from '@/components/common/ContactErrorBoundary'; // 🛡️ Error boundary específico

// 📊 Analytics
import { useAnalytics } from '@/hooks/useAnalytics'; // 📊 Tracking de eventos

// 📊 Datos y configuración
import { services } from '@/data/services';          // 🔧 Lista servicios
import { CONTACT_DETAILS, FORM_STEPS, SOCIAL_LINKS } from '@/config/site'; // ⚙️ Config sitio
import { getLocaleContent } from '@/utils/i18n';     // 🌍 Utilidades i18n

// ========================================
// 📋 CONFIGURACIÓN DEL FORMULARIO
// ========================================

// NETNAUTICA-EDIT: Formulario de contacto adaptado al funnel de Netnautica.es.

// 📋 Estado inicial del formulario (valores vacíos)
const initialForm = {
  // 🗂️ Paso 1: Información personal
  name: '',        // Nombre completo
  email: '',       // Email corporativo
  phone: '',       // Teléfono contacto
  company: '',     // Nombre empresa
  role: '',        // Cargo en la empresa
  
  // 🔍 Paso 2: Detalles del proyecto
  website: '',     // URL sitio web actual
  service: '',     // Servicio de interés
  budget: '',      // Presupuesto estimado
  timeline: '',    // Timeline proyecto
  
  // 📝 Paso 3: Mensaje y legal
  message: '',     // Descripción necesidades
  consent: false   // Aceptación GDPR
};

// 📈 Campos por paso (para validación progresiva)
// Modificar aquí para cambiar la distribución de campos
const stepFields = [
  ['name', 'email', 'phone', 'company', 'role'],      // 🗂️ Paso 1: Datos personales
  ['service', 'budget', 'timeline', 'website'],        // 🔧 Paso 2: Detalles proyecto
  ['message', 'consent']                               // 📝 Paso 3: Mensaje final
];

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  // 📊 Analytics tracking
  const { trackFormSubmit, trackEvent } = useAnalytics();

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
      // Track step progression
      trackEvent('form_step', {
        step_number: step + 1,
        form_name: 'contact'
      });
    } else {
      setStatus('submitting');
      // Track form submission
      trackFormSubmit('contact_form');
      trackEvent('contact_form_submit', {
        service: form.service,
        budget: form.budget,
        timeline: form.timeline
      });
      setTimeout(() => {
        setStatus('success');
        trackEvent('contact_form_success');
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
    <ContactErrorBoundary>
      <Seo title={t('contact.title')} description={t('contact.subtitle')} />
      <motion.section 
        className="relative overflow-hidden contact-hero-bg text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 🌊 Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-black/40 to-transparent" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-24 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 relative z-10">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionHeader title={t('contact.title')} description={t('contact.subtitle')} className="contact-section-header" />
          <motion.div 
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{CONTACT_DETAILS.email}</h3>
            <a className="mt-2 block text-sm text-brand-600" href={`mailto:${CONTACT_DETAILS.email}`}>
              {CONTACT_DETAILS.email}
            </a> */}
            <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {/* <div>
                <span className="font-semibold text-slate-900 dark:text-white">{t('footer.phone')}:</span>{' '}
                                <a href={`tel:${CONTACT_DETAILS.phone[language].replace(/\s+/g, '')}`}>{CONTACT_DETAILS.phone[language]}</a>
              </div> */}
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Email:</span>{' '}
                <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">WhatsApp:</span>{' '}
                <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp[language].replace(/[^0-9]/g, '')}`}>{CONTACT_DETAILS.whatsapp[language]}</a>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">{t('footer.address')}:</span>{' '}
                {CONTACT_DETAILS.address[language]}
              </div>
              {/* <div>
                <span className="font-semibold text-slate-900 dark:text-white">{t('footer.schedule')}:</span>{' '}
                {CONTACT_DETAILS.schedule[language]}
              </div> */}
            </div>
            <div className="mt-6 flex gap-3">
              {/* {Object.entries(SOCIAL_LINKS).map(([network, url]) => (
                <a
                  key={network}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300"
                >
                  {network}
                </a>
              ))} */}
            </div>
          </motion.div>
        </motion.div>

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
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-5 md:grid-cols-2"
                  >
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
                  </motion.div>
                )}

              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-5"
                >
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
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
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
                </motion.div>
              )}
              </AnimatePresence>

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
        </div>
      </motion.section>
    </ContactErrorBoundary>
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
