// src/components/Utilities/ErrorBoundaryContent/ErrorBoundaryContent.jsx
import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import styles from './ErrorBoundaryContent.module.scss';
import Heading from 'components/Heading/Heading';
import Button from 'components/Buttons/Button';
import Icon from 'components/Icon/Icon';

/**
 * Catches and displays route-level errors within the layout,
 * allowing navigation to persist.
 */
const ErrorBoundaryContent = () => {
    const error = useRouteError();
    // TO DO: Best practice; Log errors to an external service (e.g., Sentry, New Relic)
    console.error("ErrorBoundaryContent caught an error:", error);

    let errorMessage = "Sorry, an unexpected error has occurred.";

    if (isRouteErrorResponse(error)) {
        errorMessage = `${error.status}: ${error.statusText}`;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    // Best practice: Function to force a full browser reload,
    // which also resets the error boundary state.
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <section
            className={styles['error-boundary-content']}
            role="alert"
            aria-live="assertive"
        >
            <div className={styles['error-boundary-content__wrapper']}>
                <div className={styles['error-boundary-content__content']}>

                    <Heading level="h2"
                        iconProps={{ icon: 'SadFace' }}
                        className={styles['error-boundary-content__title']}>
                        Something Went Wrong Here
                    </Heading>

                    <div className={styles['error-boundary-content__message-container']}>
                        <Icon
                            icon="ErrorTriangle"
                            className={styles['error-boundary-content__message-icon']}
                        />
                        <p className={styles['error-boundary-content__message']}>
                            <span className={styles['error-boundary-content__message-text']}>{errorMessage}</span>
                        </p>
                    </div>

                    <div className={styles['error-boundary-content__actions']}>
                        <Button
                            as={Link}
                            to="/"
                            variant="primary"
                            size="medium"
                            className={styles['error-boundary-content__button--home']}
                            aria-label="Go to home page"
                            icon={{ name: 'FaHome', prefix: 'fa' }}
                            iconPosition="right"
                        >
                            Go to Home
                        </Button>

                        <Button
                            onClick={handleReload}
                            variant="secondary"
                            size="medium"
                            className={styles['error-boundary-content__button--reload']}
                            aria-label="Reload this page"
                            icon={{ name: 'HiArrowPath', prefix: 'hi' }}
                            iconPosition="right"
                        >
                            Try again
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorBoundaryContent;
