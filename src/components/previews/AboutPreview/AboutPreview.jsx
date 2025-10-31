//src/components/previews/AboutPreview/AboutPreview.jsx
import React from 'react';
import styles from './AboutPreview.module.scss';
import { aboutData } from 'data/about';
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
          <Heading 
            level="h2" 
            className={styles.aboutPreview__heading}
            iconProps={{ icon: 'UserTie' }}
          >
            About Me
          </Heading>

          <p className={styles.aboutPreview__text}>
            {aboutData.aboutPreviewText}
          </p>
          <p className={styles.aboutPreview__text}>
              {aboutData.aboutPreviewOpenSourceText.split('Pull Shark Badge')[0]}
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
              
              {aboutData.aboutPreviewOpenSourceText.split('Pull Shark Badge')[1]}
          </p>

          {/* Primary CTA using the polymorphic Button component */}
          {/* Using the 'to' prop */}
          <Button
            to="/about" // <-- Uses the 'to' prop for internal navigation
            variant="primary"
            size="medium"
            aria-label="Learn more about Bonaventure C.J. Ugwu"
            title="Navigate to the full About page"
            // If specific positioning styles are needed, the classname below will be used
            // className={styles.aboutLinkWrapper} 
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
