import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const STEP_KEYS = ['contact', 'project', 'schedule'];

const normalizePhone = (value) => value.replace(/[^\d+\s()-]/g, '');

const CallToAction = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    needs: '',
    attachment: null,
    preferredDate: '',
    preferredTime: '',
    timezone: 'UTC+1 (Palma de Mallorca)'
  });
  const [errors, setErrors] = useState({});

  const progressLabels = t('cta.form.progress', { returnObjects: true });
  const steps = t('cta.form.steps', { returnObjects: true });
  const actionLabels = t('cta.form.actions', { returnObjects: true });
  const validationMessages = t('cta.form.validations', { returnObjects: true });
  const uploadCopy = t('cta.form.upload', { returnObjects: true });
  const services = steps?.project?.services ?? [];
  const minDate = useMemo(() => new Date().toISOString().split('T')[0], []);

  const email = t('cta.contact.email');
  const phone = t('cta.contact.phone');
  const phoneHref = t('cta.contact.phoneHref');
  const emailHref = `mailto:${email}`;
  const telHref = `tel:${phoneHref}`;

  const currentStepKey = STEP_KEYS[stepIndex];
  const currentStep = steps?.[currentStepKey] ?? {};
  const progressValue = ((stepIndex + 1) / STEP_KEYS.length) * 100;

  const handleFieldChange = (field) => (event) => {
    const value = field === 'phone' ? normalizePhone(event.target.value) : event.target.value;
    setFormData((previous) => ({ ...previous, [field]: value }));

    if (errors[field]) {
      setErrors((previous) => ({ ...previous, [field]: undefined }));
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file && file.size > MAX_FILE_SIZE) {
      setErrors((previous) => ({ ...previous, attachment: validationMessages.file }));
      return;
    }

    setErrors((previous) => ({ ...previous, attachment: undefined }));
    setFormData((previous) => ({ ...previous, attachment: file ?? null }));
  };

  const handleRemoveFile = () => {
    setFormData((previous) => ({ ...previous, attachment: null }));
  };

  const validateStep = useMemo(
    () => ({
      contact: () => {
        const stepErrors = {};
        if (!formData.fullName.trim()) stepErrors.fullName = validationMessages.required;
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) stepErrors.email = validationMessages.email;
        if (formData.phone.replace(/[^\d]/g, '').length < 6) stepErrors.phone = validationMessages.phone;
        return stepErrors;
      },
      project: () => {
        const stepErrors = {};
        if (!formData.needs.trim()) stepErrors.needs = validationMessages.required;
        if (formData.attachment && formData.attachment.size > MAX_FILE_SIZE) {
          stepErrors.attachment = validationMessages.file;
        }
        return stepErrors;
      },
      schedule: () => {
        const stepErrors = {};
        if (!formData.preferredDate) stepErrors.preferredDate = validationMessages.date;
        if (!formData.preferredTime) stepErrors.preferredTime = validationMessages.time;
        return stepErrors;
      }
    }),
    [formData, validationMessages]
  );

  const goToStep = (nextStep) => {
    const validator = validateStep[currentStepKey];
    const stepErrors = validator ? validator() : {};

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return false;
    }

    setErrors({});
    setStepIndex(nextStep);
    return true;
  };

  const handleNext = () => {
    if (goToStep(stepIndex + 1)) {
      window.requestAnimationFrame(() => {
        const form = document.getElementById('consultation-form');
        form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  const handleBack = () => {
    setErrors({});
    setStepIndex((previous) => Math.max(0, previous - 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validator = validateStep[currentStepKey];
    const stepErrors = validator ? validator() : {};

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setStatus('success');
  };

  const renderContactStep = () => (
    <div className="form-step" aria-live="polite">
      <div className="form-heading">
        <h3>{currentStep.title}</h3>
        <p>{currentStep.description}</p>
      </div>
      <div className="form-grid">
        <label className="form-field">
          <span>{currentStep.fields?.name}</span>
         <input
            aria-invalid={Boolean(errors.fullName)}
            name="fullName"
            onChange={handleFieldChange('fullName')}
            autoComplete="name"
            value={formData.fullName}
          />
          {errors.fullName ? <span className="form-error">{errors.fullName}</span> : null}
        </label>
        <label className="form-field">
          <span>{currentStep.fields?.email}</span>
          <input
            aria-invalid={Boolean(errors.email)}
            name="email"
            onChange={handleFieldChange('email')}
            type="email"
            autoComplete="email"
            value={formData.email}
          />
          {errors.email ? <span className="form-error">{errors.email}</span> : null}
        </label>
      </div>
      <div className="form-grid">
        <label className="form-field">
          <span>{currentStep.fields?.phone}</span>
          <input
            aria-invalid={Boolean(errors.phone)}
            name="phone"
            onChange={handleFieldChange('phone')}
            autoComplete="tel"
            inputMode="tel"
            value={formData.phone}
          />
          {errors.phone ? <span className="form-error">{errors.phone}</span> : null}
        </label>
        <label className="form-field">
          <span>{currentStep.fields?.company}</span>
          <input
            name="company"
            onChange={handleFieldChange('company')}
            autoComplete="organization"
            value={formData.company}
          />
        </label>
      </div>
    </div>
  );

  const renderProjectStep = () => (
    <div className="form-step" aria-live="polite">
      <div className="form-heading">
        <h3>{currentStep.title}</h3>
        <p>{currentStep.description}</p>
      </div>
      <label className="form-field">
        <span>{currentStep.fields?.service}</span>
        <select
          name="service"
          onChange={handleFieldChange('service')}
          value={formData.service}
        >
          <option value="">—</option>
          {services.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="form-field">
        <span>{currentStep.fields?.needs}</span>
        <textarea
          aria-invalid={Boolean(errors.needs)}
          name="needs"
          onChange={handleFieldChange('needs')}
          rows={4}
          value={formData.needs}
        />
        {errors.needs ? <span className="form-error">{errors.needs}</span> : null}
      </label>
      <div className="form-upload">
        <span>{currentStep.fields?.attachment}</span>
        <div className="form-upload-controls">
          <label className="upload-button">
            {uploadCopy.button}
            <input accept=".pdf,.png,.jpg,.jpeg" onChange={handleFileChange} type="file" />
          </label>
          <span className="upload-filename">
            {formData.attachment ? formData.attachment.name : uploadCopy.placeholder}
          </span>
          {formData.attachment ? (
            <button className="upload-remove" onClick={handleRemoveFile} type="button">
              {uploadCopy.remove}
            </button>
          ) : null}
        </div>
        <small>{currentStep.fields?.attachmentHint}</small>
        {errors.attachment ? <span className="form-error">{errors.attachment}</span> : null}
      </div>
    </div>
  );

  const renderScheduleStep = () => (
    <div className="form-step" aria-live="polite">
      <div className="form-heading">
        <h3>{currentStep.title}</h3>
        <p>{currentStep.description}</p>
      </div>
      <div className="form-grid">
        <label className="form-field">
          <span>{currentStep.fields?.date}</span>
          <input
            aria-invalid={Boolean(errors.preferredDate)}
            name="preferredDate"
            onChange={handleFieldChange('preferredDate')}
            type="date"
            min={minDate}
            value={formData.preferredDate}
          />
          {errors.preferredDate ? <span className="form-error">{errors.preferredDate}</span> : null}
        </label>
        <label className="form-field">
          <span>{currentStep.fields?.time}</span>
          <input
            aria-invalid={Boolean(errors.preferredTime)}
            name="preferredTime"
            onChange={handleFieldChange('preferredTime')}
            type="time"
            value={formData.preferredTime}
          />
          {errors.preferredTime ? <span className="form-error">{errors.preferredTime}</span> : null}
        </label>
      </div>
      <label className="form-field">
        <span>{currentStep.fields?.timezone}</span>
        <input
          name="timezone"
          onChange={handleFieldChange('timezone')}
          value={formData.timezone}
        />
      </label>
      {currentStep.confirmation ? <p className="form-note">{currentStep.confirmation}</p> : null}
      <p className="form-note subtle">{t('cta.form.subtitleReview')}</p>
    </div>
  );

  const renderStepContent = () => {
    if (currentStepKey === 'contact') return renderContactStep();
    if (currentStepKey === 'project') return renderProjectStep();
    return renderScheduleStep();
  };

  return (
    <section className="consultation" id="contacto">
      <div className="container consultation-content">
        <div className="consultation-intro">
          <span className="eyebrow">{t('cta.eyebrow')}</span>
          <h2 className="section-title">{t('cta.title')}</h2>
          <p>{t('cta.description')}</p>
          <div className="consultation-contact">
            <span>{t('cta.contact.emailLabel')}</span>
            <a href={emailHref}>{email}</a>
          </div>
          <div className="consultation-contact">
            <span>{t('cta.contact.phoneLabel')}</span>
            <a href={telHref}>{phone}</a>
          </div>
        </div>
        <form
          className="consultation-form"
          id="consultation-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="form-progress" aria-hidden="false">
            <div className="form-progress-track">
              <div className="form-progress-bar" style={{ width: `${progressValue}%` }} />
            </div>
            <ol className="form-progress-steps">
              {progressLabels.map((label, index) => {
                const isActive = index === stepIndex;
                const isComplete = index < stepIndex;
                const itemClassName = `form-progress-step${isActive ? ' is-active' : ''}${
                  isComplete ? ' is-complete' : ''
                }`;
                return (
                  <li className={itemClassName} key={label}>
                    <span>{label}</span>
                  </li>
                );
              })}
            </ol>
          </div>
          <p className="form-subtitle">{t('cta.form.subtitle')}</p>
          {renderStepContent()}
          <div className="form-actions">
            {stepIndex > 0 ? (
              <button className="secondary-button" onClick={handleBack} type="button">
                {actionLabels.back}
              </button>
            ) : null}
            {stepIndex < STEP_KEYS.length - 1 ? (
              <button className="cta-button" onClick={handleNext} type="button">
                {actionLabels.next}
              </button>
            ) : (
              <button className="cta-button" disabled={status === 'submitting'} type="submit">
                {status === 'submitting' ? actionLabels.saving : actionLabels.submit}
              </button>
            )}
          </div>
          <p className="form-policy">{t('cta.form.policy')}</p>
          {status === 'success' ? (
            <div aria-live="assertive" className="form-status">
              <p>{t('cta.form.success')}</p>
              <p>{t('cta.form.autoReply')}</p>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
