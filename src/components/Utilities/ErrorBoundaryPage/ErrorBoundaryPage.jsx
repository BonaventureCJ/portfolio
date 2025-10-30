// src/components/Utilities/ErrorBoundaryPage/ErrorBoundaryPage.jsx
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styles from './ErrorBoundaryPage.module.scss';
import Heading from 'components/Heading/Heading';
import Button from 'components/Buttons/Button';
import { ReactComponent as ErrorIcon } from 'assets/icons/baseline-error-outline.svg';


/**
 * Catches and displays route-level errors using a consistent UI.
 * This acts as the fallback component for react-router-dom Error Boundaries.
 */
const ErrorBoundaryPage = () => {
  const error = useRouteError();
  // Best practice: Log errors to an external service (e.g., Sentry, New Relic)
  console.error("ErrorBoundary caught an error:", error);

  let errorMessage = "Sorry, an unexpected error has occurred.";

  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status}: ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  // Best practice: Function to force a full browser reload
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <section
      className={styles['error-boundary-page']}
      role="alert"
      aria-live="assertive"
    >
      {/* 
        The wrapper now serves purely as the "card" container, 
        managing the background, shadow, and main width constraints.
      */}
      <div className={styles['error-boundary-page__wrapper']}>
        
        {/* 
          The content container now holds ALL visual elements: 
          icon, heading, paragraph, and buttons.
          This simplifies layout management for a single-column display.
        */}
        <div className={styles['error-boundary-page__content']}>
          
          <ErrorIcon
            className={styles['error-boundary-page__icon']}
            aria-hidden="true" // WCAG: Hide decorative SVGs from screen readers
          />

          <Heading level="h1" className={styles['error-boundary-page__title']}>
            Oops! Something Went Wrong
          </Heading>
          
          <p className={styles['error-boundary-page__message']}>{errorMessage}</p>

          <div className={styles['error-boundary-page__actions']}>
            <Button
              to="/"
              variant="primary"
              size="medium"
              className={styles['error-boundary-page__button--home']}
            >
              Go to Home
            </Button>

            <Button
              onClick={handleReload}
              variant="primary"
              size="medium"
              className={styles['error-boundary-page__button--reload']}
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

ErrorBoundaryPage.propTypes = {};

export default ErrorBoundaryPage;
