// src/components/Utilities/ErrorBoundaryPage/ErrorBoundaryPage.jsx
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styles from './ErrorBoundaryPage.module.scss';
import Heading from 'components/Heading/Heading';
import Button from 'components/Buttons/Button';
import { ReactComponent as ErrorIcon } from 'assets/icons/baseline-error-outline.svg';
import Icon from 'components/Icon/Icon';

/**
 * Catches and displays route-level errors using a consistent UI.
 * This acts as the fallback component for react-router-dom Error Boundaries.
 */
const ErrorBoundaryPage = () => {
  const error = useRouteError();
  {/* TODO: Best practice: Log errors to an external service (e.g., Sentry, New Relic) */}
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
      <div className={styles['error-boundary-page__wrapper']}>

        <div className={styles['error-boundary-page__content']}>

          <ErrorIcon
            className={styles['error-boundary-page__icon']}
            aria-hidden="true" // WCAG: Hide decorative SVGs from screen readers
          />

          <Heading level="h1" className={styles['error-boundary-page__title']}>
            Oops! Something Went Wrong
          </Heading>

          {/* Block for message with inline icon */}
          <div className={styles['error-boundary-page__message-container']}>
            {/* Render the inline icon using the reusable Icon component unline the first icon*/}
            <Icon
              icon="ErrorTriangle"
              className={styles['error-boundary-page__message-icon']}
            />
            {/* Wrap the error message in a span with a BEM class */}
            <p className={styles['error-boundary-page__message']}>
              <span className={styles['error-boundary-page__message-text']}>{errorMessage}</span>
            </p>
          </div>

          <div className={styles['error-boundary-page__actions']}>
            <Button
              to="/"
              variant="primary"
              size="medium"
              className={styles['error-boundary-page__button--home']}
              aria-label="Go to home page"
              icon={{ name: 'FaHome', prefix: 'fa' }}
              iconPosition="right"
            >
              Go to Home
            </Button>

            <Button
              onClick={handleReload}
              variant="primary"
              size="medium"
              className={styles['error-boundary-page__button--reload']}
              aria-label="Reload the page"
              icon={{ name: 'HiArrowPath', prefix: 'hi' }}
              iconPosition="right"
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
