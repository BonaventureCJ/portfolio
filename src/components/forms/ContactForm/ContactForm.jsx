// src/components/forms/ContactForm/ContactForm.jsx
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
    hasShownToast,
  } = useContactFormLogic();

  // Ref to help manage the focus if we manually disable the button in a specific way
  const submitButtonRef = useRef(null);
  const navigate = useNavigate();

  // Determine if the button should be natively disabled
  const isDisabled = state.submitting || !canSubmit;
  const submitButtonText = state.succeeded ? 'Message sent!' : state.submitting ? 'Sending...' : 'Send message';

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

  /**
   * Dynamically determines the button icon based on the form's submission state.
   * A loading icon for "Sending...", a success icon for "Message Sent!", and
   * a paper plane for the default state.
   */
  const getButtonIcon = () => {
    if (state.succeeded) {
      return { name: 'IoCheckmarkCircle', prefix: 'io' };
    }
    if (state.submitting) {
      // Add the module-scoped class name for the spin animation
      // The animation keyframes are defined in ContactForm.module.scss
      return { name: 'IoRefresh', prefix: 'io', className: styles.spin };
    }
    return { name: 'IoPaperPlaneOutline', prefix: 'io' };
  };

  // Effect to show toast and redirect after successful submission
  useEffect(() => {
    if (state.succeeded && hasShownToast) {
      toast.success('Thank you! Your message has been sent.', {
        position: 'top-right',
        autoClose: 8000,
      });

      const redirectTimeout = setTimeout(() => {
        navigate('/');
      }, 8500);

      return () => clearTimeout(redirectTimeout);
    }
  }, [state.succeeded, hasShownToast, navigate]);

  if (state.succeeded) {
    return null;
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
          hasInteracted={hasInteracted}
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
        title={submitButtonTitle}
        className={styles['contact-form__button-wrapper']}
      >
        <Button
          ref={submitButtonRef}
          type="submit"
          variant="tertiary"
          size="medium"
          disabled={isDisabled}
          className={`${styles['contact-form__submit']} ${canSubmit ? styles['contact-form__submit--can-submit'] : ''}`}
          icon={getButtonIcon()}
          iconPosition="right"
        >
          {submitButtonText}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
