// src/components/previews/AboutPreview/AboutPreview.jsx
import React from 'react';
import styles from './AboutPreview.module.scss';
import { aboutData } from 'data/about';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';
import PullSharkBadgeLink from 'components/PullSharkBadgeLink/PullSharkBadgeLink'; // Import the reusable component

/**
 * A condensed "About" section for the homepage.
 * @returns {JSX.Element} The About Preview component.
 */
const AboutPreview = () => {
  // Split the text to correctly place the link with the icon
  const [beforeLink, afterLink] = aboutData.aboutPreviewOpenSourceText.split('Pull Shark Badge');

  return (
    <section className={styles.aboutPreview}>
      <div className={styles.aboutPreview__container}>
        <div className={styles.aboutPreview__content}>
          <Heading
            level="h2"
            className={styles.aboutPreview__heading}
            iconProps={{ prefix: 'fa', name: 'FaUserTie' }}
          >
            About Me
          </Heading>

          <p className={styles.aboutPreview__text}>
            {aboutData.aboutPreviewText}
          </p>
          <p className={styles.aboutPreview__text}>
            {beforeLink}
            <PullSharkBadgeLink className={styles.aboutPreview__link} />
            {afterLink}
          </p>

          <Button
            to="/about"
            variant="primary"
            size="medium"
            aria-label="Learn more about Bonaventure C.J. Ugwu"
            title="Navigate to the full About page"
            icon={{ prefix: 'fa', name: 'FaArrowRight' }}
            iconPosition="right"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
