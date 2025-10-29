// src/components/Utilities/NotFoundPage/NotFoundPage.jsx
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import styles from './NotFoundPage.module.scss';
import Heading from 'components/Heading/Heading';
import Button from 'components/Buttons/Button';
import notFoundImage from 'assets/images/not-found/not_found.png';

/**
 * A standard 404 Not Found Page component.
 * Renders within a main layout that already provides a <main> tag.
 */
const NotFoundPage = () => {
  return (
    <section
      className={styles['not-found-page']}
      role="status"
      aria-live="polite"
    >
      <div className={styles['not-found-page__wrapper']}>

        <div className={styles['not-found-page__image-container']}>
          <img
            src={notFoundImage}
            alt="Illustration of a missing page or a broken link"
            className={styles['not-found-page__image']}
            width={400}
            height={300}
            loading="eager"
          />
        </div>

        <div className={styles['not-found-page__content']}>

          <Heading level="h1" className={styles['not-found-page__title']}>
            404: Not Found
          </Heading>

          <p className={styles['not-found-page__description']}>
            This is not the web page you are looking for! Cross-check the URL and try again!
          </p>

          <div className={styles['not-found-page__button-wrapper']}>
            <Button
              to="/"
              variant="primary"
              size="small"
              className={styles['not-found-page__button--home']}
              aria-label="Go back to the home page"
            >
              Go back to Home
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

NotFoundPage.propTypes = {};

export default NotFoundPage;
