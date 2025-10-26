// src/components/forms/ContactForm/ContactForm.jsx
import React, { useRef } from 'react';
import { useContactFormLogic } from 'hooks/useContactFormLogic';
import FormField from 'components/forms/FormField';
import styles from './ContactForm.module.scss';
import Button from 'components/Buttons/Button';

const ContactForm = () => {
  const {
    state,
    formData,
    errors,
    emailError,
    hasInteracted,
    canSubmit,
    handleEmailChange,
    handleInputChange,
    onSubmit,
  } = useContactFormLogic();

  // Ref to help manage the focus if we manually disable the button in a specific way
  const submitButtonRef = useRef(null);

  // Determine if the button should be natively disabled (Formspree is handling this mostly)
  const isDisabled = state.submitting || !canSubmit;
  const submitButtonText = state.succeeded ? 'Message Sent!' : state.submitting ? 'Sending...' : 'Send Message';

  const submitButtonTitle =
    // Case 1: Cannot submit AND not currently sending (default state)
    (!canSubmit && !state.submitting)
      ? 'Please fill in required fields to submit.'
      // Case 2: Can submit (all fields valid)
      : (canSubmit && !state.submitting)
        ? 'Click to send your message.'
        // Case 3: Submitting (currently sending)
        : state.submitting
          ? 'Your message is being sent...'
          // Fallback case (e.g., succeeded state)
          : '';

  if (state.succeeded) {
    return (
      <p className={styles['contact-form__message-status']} role="status" aria-live="polite">
        Thank you! Your message has been sent.
      </p>
    );
  }

  return (
    <form className={styles['contact-form']} onSubmit={onSubmit} noValidate>
      <fieldset className={styles['contact-form__fieldset']}>
        <legend className={styles['contact-form__legend--sr-only']}>Contact Information</legend>

        {/* Name Group */}
        <FormField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
          hasInteracted={hasInteracted}
        />

        {/* Email Group */}
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleEmailChange}
          error={emailError}
          hasInteracted={hasInteracted} // Using hasInteracted here
        />

        {/* Subject Group */}
        <FormField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          error={errors.subject}
          hasInteracted={hasInteracted}
        />

        {/* Message Group */}
        <FormField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          error={errors.message}
          hasInteracted={hasInteracted}
          isTextarea
        />
      </fieldset>

      {/* Button Implementation */}
      <div
        // Apply the title attribute to the wrapper div so it works on hover/focus even when button is disabled
        title={submitButtonTitle}
        className={styles['contact-form__button-wrapper']}
      >
        <Button
          ref={submitButtonRef}
          type="submit"
          variant="tertiary"
          size="medium"
          disabled={isDisabled}// Uses native disabled state
          // Pass the canSubmit status to the SCSS module for specific styling
          className={`${styles['contact-form__submit']} ${canSubmit ? styles['contact-form__submit--can-submit'] : ''}`}
        >
          {submitButtonText}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
