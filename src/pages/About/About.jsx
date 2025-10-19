// src/components/About/About.jsx
import React from 'react';
import styles from './About.module.scss';
import { aboutData } from 'data/about';
import profilePhoto from 'assets/images/about/BonaventureCJUgwu2.jpg';
import requestResume from 'assets/documents/request-resume.pdf';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';
import SkillsPreview from 'components/previews/SkillsPreview/SkillsPreview';

const About = () => {
  const gitHubAchievementsUrl = aboutData.gitHubAchievementsUrl;

  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <Heading level="h2" className={styles.about__title}>
          About Me
        </Heading>
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

            <Heading level="h3" className={styles.about__subHeading}>
              {aboutData.openSourceCommitmentTitle}
            </Heading>
            <p className={styles.about__summary}>
              {aboutData.openSourceSummary.split('Pull Shark Badge')[0]}
              <a
                href={gitHubAchievementsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Bonaventure's GitHub Pull Shark Badge achievement"
                title="View the GitHub achievement badge"
                className={styles.about__link}
              >
                Pull Shark Badge
              </a>
              {aboutData.openSourceSummary.split('Pull Shark Badge')[1]}
            </p>
            <p className={styles.about__summary}>
              {aboutData.openSourceSecondarySummary}
            </p>
          </div>
        </div>
        <Button
          href={requestResume} // <-- Uses the 'href' prop
          variant="secondary"
          size="medium"
          title="Download Bonaventure's resume (PDF)"
          target="_blank" // <-- Pass standard anchor attributes
          rel="noopener noreferrer" // <-- Pass standard anchor attributes
          aria-label="Download Bonaventure's Resume (PDF)"
          // className={styles.buttonWrapper}
        >
          Download Resume
        </Button>

        {/* Use the reusable SkillsPreview component: also used in Homepage*/}
        <SkillsPreview />

      </div>
    </section>
  );
};

export default About;
