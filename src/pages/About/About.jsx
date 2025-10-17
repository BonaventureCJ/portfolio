// src/components/About/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.scss';
import skillsData from 'data/skills';
import { aboutData } from 'data/about';
import SkillsPreviewCard from 'components/preview-cards/SkillsPreviewCard/SkillsPreviewCard';
import profilePhoto from 'assets/images/about/BonaventureCJUgwu2.jpg';
import requestResume from 'assets/documents/request-resume.pdf';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';

const About = () => {
  const featuredSkills = skillsData.filter((skill) => skill.isFeatured);

  const [skillsRef, skillsInView] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

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
              {/* Use shared data and URL */}
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
        <a
          href={requestResume}
          className={styles.buttonWrapper}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Bonaventure's Resume (PDF)"
        >
          <Button
            variant="secondary"
            size="medium"
            title="Download Bonaventure's resume (PDF)"
          >
            Download Resume
          </Button>
        </a>

        <div className={styles.about__skills}>
          <Heading level="h3" className={styles.about__skillsHeading}>
            My Major Skills
          </Heading>
          <ul
            ref={skillsRef}
            className={`${styles.about__skillsList} ${skillsInView ? styles['is-visible'] : ''}`}
            role="list"
          >
            {featuredSkills.map((skill) => (
              <SkillsPreviewCard
                key={skill.id}
                skill={skill}
                title={skill.description || skill.name}
              />
            ))}
          </ul>
          <div className={styles.about__skillsCta}>
            <Link
              to="/skills"
              className={styles.buttonWrapper}
              aria-label="View all skills on the Skills page"
            >
              <Button
                variant="primary"
                size="medium"
                title="Navigate to the full Skills page"
              >
                View All Skills
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
