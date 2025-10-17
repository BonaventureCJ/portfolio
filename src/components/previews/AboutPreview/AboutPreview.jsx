// src/components/AboutPreview/AboutPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPreview.module.scss';
import { yearsOfExperience } from 'utils/helpers';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';

/**
 * A condensed "About" section for the homepage.
 * @returns {JSX.Element} The About Preview component.
 */
const AboutPreview = () => {
  const gitHubAchievementsUrl = 'https://github.com/BonaventureCJ?tab=achievements';

  return (
    <section className={styles.aboutPreview}>
      <div className={styles.aboutPreview__container}>
        <div className={styles.aboutPreview__content}>
          <Heading level="h2" className={styles.aboutPreview__heading}>
            About Me
          </Heading>

          <p className={styles.aboutPreview__text}>
            As a Front-End Engineer with {yearsOfExperience}+ years of experience, I am passionate about Accessibility, SEO, Responsive Web Design, clean code, and creating intuitive UIs using Typescript, React.js and Next.js.
          </p>
          <p className={styles.aboutPreview__text}>
              As a firm believer in the open-source ethos, I've evolved from a user of essential tools to an active open-source contributor, earning a GitHub&nbsp;
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
              </a>{' '}
              in the process. This demonstrates my ability to learn, apply and collaborate with other developers on complex technologies.
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
