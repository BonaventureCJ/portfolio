// src/pages/About/About.jsx
import React from 'react';
import styles from './About.module.scss';
import { aboutData } from 'data/about';
import profilePhoto from 'assets/images/about/BonaventureCJUgwu2.jpg';
import requestResume from 'assets/documents/request-resume.pdf';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';
import SkillsPreview from 'components/previews/SkillsPreview/SkillsPreview';
import PullSharkBadgeLink from 'components/PullSharkBadgeLink/PullSharkBadgeLink';

const About = () => {
  // Split the text to correctly place the link with the icon
  const [beforeLink, afterLink] = aboutData.openSourceSummary.split('Pull Shark Badge');

  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <Heading
          level="h1"
          iconProps={{
            icon: 'UserTie',
          }}
        >
          About Me
        </Heading>

        {/* The main layout container for photo and text */}
        <div className={styles.about__intro}>
          <div className={styles.about__photoContainer}>
            <img
              src={profilePhoto}
              alt="Bonaventure C.J. Ugwu's profile"
              className={styles.about__photo}
              loading="lazy"
              title="Bonaventure C.J. Ugwu"
            />
          </div>
          <div className={styles.about__textContainer}>
            <p className={styles.about__summary}>
              {aboutData.summary}
            </p>
            <p className={styles.about__summary}>
              {aboutData.secondarySummary}
            </p>
            <p className={styles.about__summary}>
              {aboutData.professionalDrive}
            </p>

            <Heading
              level="h4"
              className={styles.about__subHeading}
              iconProps={{ icon: 'EarthNetwork' }}
            >
              {aboutData.openSourceCommitmentTitle}
            </Heading>
            <p className={styles.about__summary}>
              {beforeLink}
              <PullSharkBadgeLink className={styles.about__link} />
              {afterLink}
            </p>
            <p className={styles.about__summary}>
              {aboutData.openSourceSecondarySummary}
            </p>
          </div>
        </div>

        {/* Buttons and Skills Preview outside the intro flexbox */}
        <Button
          href={requestResume}
          variant="secondary"
          size="medium"
          title="Download Bonaventure's resume (PDF)"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Bonaventure's Resume (PDF)"
          icon={{ prefix: 'fa', name: 'FaDownload' }}
          iconPosition="right"
        >
          Download Resume
        </Button>

        <SkillsPreview />

      </div>
    </section>
  );
};

export default About;
