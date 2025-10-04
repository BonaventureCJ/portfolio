import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.scss';
import skillsData from 'data/skills';
import SkillsPreviewCard from 'components/preview-cards/SkillsPreviewCard/SkillsPreviewCard'; 
import profilePhoto from 'assets/images/about/BonaventureCJUgwu2.jpg';
import { yearsOfExperience } from 'utils/helpers';
import requestResume from 'assets/documents/request-resume.pdf';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

const About = () => {
  const featuredSkills = skillsData.filter((skill) => skill.isFeatured);

  const [skillsRef, skillsInView] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <h2 className={styles.about__title}>About Me</h2>
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
              Front-End Engineer with {yearsOfExperience}+ years of experience building performant, scalable, and accessible web applications. I use a modern tech stack of React, Next.js, and TypeScript to create intuitive user interfaces and write clean, maintainable code.
            </p>
            <p className={styles.about__summary}>
              My strong background in healthcare, statistical data analyses, and scientific research provides a unique analytical lens for solving complex development challenges and prioritizing the user experience.
            </p>
          </div>
        </div>
        
        <a
          href={requestResume}
          className={`${styles.about__button} ${styles['about__button--resume']}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Bonaventure's Resume (PDF)"
          title="Download Bonaventure's resume (PDF)"
        >
          Download Resume
        </a>
        
        <div className={styles.about__skills}>
          <h3 className={styles.about__skillsHeading}>My Major Skills</h3>
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
          <Link
            to="/skills"
            className={`${styles.about__button} ${styles['about__button--skills']}`}
            aria-label="View all skills on the Skills page"
            title="Navigate to the full Skills page"
          >
            View All Skills
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
