// src/components/ContactForm/ContactForm.jsx (Updated)
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '@formspree/react';
import styles from './ContactForm.module.scss';
import Button from 'components/Buttons/Button'; 

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.FORMSPREE_FORM_ID || 'xzzaweop');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  // Email format validation helper function
  const validateEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validation function for all fields, checks against requirements
  const validateAllFields = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handles real-time validation for email and updates form data
  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (value.trim() && !validateEmailFormat(value)) {
      setEmailError('Invalid email address format.');
    } else {
      setEmailError('');
    }
  };

  // Handles updates for other form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handles form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    setHasInteracted(true);
    const isValid = validateAllFields() && !emailError;

    if (isValid) {
      await handleSubmit(e);
    }
  };

  // Effect to manage the canSubmit state based on form data and email validity
  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '');
    setCanSubmit(allFieldsFilled && !emailError);
  }, [formData, emailError]);

  if (state.succeeded) {
    return (
      <p
        className={styles['contact-form__message-status']}
        role="status"
        aria-live="polite"
      >
        Thank you! Your message has been sent.
      </p>
    );
  }

  return (
    <form className={styles['contact-form']} onSubmit={onSubmit} noValidate>
      <fieldset className={styles['contact-form__fieldset']}>
        <legend className={styles['contact-form__legend--sr-only']}>Contact Information</legend>
        
        {/* Name Group */}
        <div className={styles['contact-form__group']}>
          <label htmlFor="name" className={styles['contact-form__label']}>
            Name <span className={styles['contact-form__required-symbol']} aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`${styles['contact-form__input']} ${hasInteracted && errors.name ? styles['contact-form__input--invalid'] : ''}`}
            value={formData.name}
            onChange={handleInputChange}
            required
            aria-required="true"
            aria-invalid={!!(hasInteracted && errors.name)}
            aria-describedby="name-error"
          />
          {hasInteracted && errors.name && (
            <p id="name-error" className={styles['contact-form__error-message']}>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Group */}
        <div className={styles['contact-form__group']}>
          <label htmlFor="email" className={styles['contact-form__label']}>
            Email <span className={styles['contact-form__required-symbol']} aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`${styles['contact-form__input']} ${emailError ? styles['contact-form__input--invalid'] : ''}`}
            value={formData.email}
            onChange={handleEmailChange}
            required
            aria-required="true"
            aria-invalid={!!emailError}
            aria-describedby="email-error"
          />
          {emailError && (
            <p id="email-error" className={styles['contact-form__error-message']}>
              {emailError}
            </p>
          )}
        </div>

        {/* Subject Group */}
        <div className={styles['contact-form__group']}>
          <label htmlFor="subject" className={styles['contact-form__label']}>
            Subject <span className={styles['contact-form__required-symbol']} aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={`${styles['contact-form__input']} ${hasInteracted && errors.subject ? styles['contact-form__input--invalid'] : ''}`}
            value={formData.subject}
            onChange={handleInputChange}
            required
            aria-required="true"
            aria-invalid={!!(hasInteracted && errors.subject)}
            aria-describedby="subject-error"
          />
          {hasInteracted && errors.subject && (
            <p id="subject-error" className={styles['contact-form__error-message']}>
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Group */}
        <div className={styles['contact-form__group']}>
          <label htmlFor="message" className={styles['contact-form__label']}>
            Message <span className={styles['contact-form__required-symbol']} aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className={`${styles['contact-form__textarea']} ${hasInteracted && errors.message ? styles['contact-form__textarea--invalid'] : ''}`}
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            required
            aria-required="true"
            aria-invalid={!!(hasInteracted && errors.message)}
            aria-describedby="message-error"
          ></textarea>
          {hasInteracted && errors.message && (
            <p id="message-error" className={styles['contact-form__error-message']}>
              {errors.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* Replaced native button with the shared Button component */}
      <Button
        type="submit" // Ensure the type is submit for form handling
        variant="tertiary" // Style it as a primary button
        size="medium" // Set the size
        disabled={state.submitting || !canSubmit}
        // aria-disabled handled internally by the Button component logic
        className={styles['contact-form__submit']} // for form-button-specific CSS styles
      >
        {state.succeeded ? 'Message Sent!' : state.submitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
