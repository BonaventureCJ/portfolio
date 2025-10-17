// src/components/AboutPreview/AboutPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPreview.module.scss';
import { aboutData } from 'data/about'; // The shared data is imported using named import statement
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';

/**
 * A condensed "About" section for the homepage.
 * @returns {JSX.Element} The About Preview component.
 */
const AboutPreview = () => {
  const gitHubAchievementsUrl = aboutData.gitHubAchievementsUrl;

  return (
    <section className={styles.aboutPreview}>
      <div className={styles.aboutPreview__container}>
        <div className={styles.aboutPreview__content}>
          <Heading level="h2" className={styles.aboutPreview__heading}>
            About Me
          </Heading>

          <p className={styles.aboutPreview__text}>
            {aboutData.aboutPreviewText}
          </p>
          <p className={styles.aboutPreview__text}>
              {/* Use shared data and URL, splitting the string for the inline link, this part is for the first part of the split string */}
              {aboutData.aboutPreviewOpenSourceText.split('Pull Shark Badge')[0]}
              {/* A standard anchor tag <a> is used for the external link instead of React Router Link*/}
              <a
                href={gitHubAchievementsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Bonaventure's GitHub Pull Shark Badge achievement"
                title="Click to view the GitHub achievement badge"
                className={styles.aboutPreview__link}
              >
                Pull Shark Badge
              </a>
              {/* Second part of the split string */}
              {aboutData.aboutPreviewOpenSourceText.split('Pull Shark Badge')[1]}
          </p>

          <Link
            to="/about"
            className={styles.aboutLinkWrapper}
            aria-label="Learn more about Bonaventure C.J. Ugwu"
            title="Navigate to the full About page"
          >
            <Button
              variant="primary"
              size="medium"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
