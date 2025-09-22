import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SkillsPreview.module.scss';
import skillsData from 'data/skills';

/**
 * A skills preview section for the homepage.
 * @returns {JSX.Element} The Skills Preview component.
 */
const SkillsPreview = () => {
  const featuredSkills = skillsData.filter((skill) => skill.isFeatured);

  return (
    <section className={styles.skillsPreview}>
      <div className={styles.skillsPreview__container}>
        <h2 className={styles.skillsPreview__heading}>My Key Skills</h2>
        <p className={styles.skillsPreview__description}>
          Showcasing my core competencies in modern front-end development.
        </p>
        <ul className={styles.skillsPreview__list} role="list">
          {featuredSkills.map((skill) => (
            <li
              key={skill.id}
              className={styles.skillsPreview__item}
            >
              <div className={styles.skillsPreview__icon}>
                <skill.icon aria-hidden="true" />
              </div>
              <span className={styles.skillsPreview__name}>{skill.name}</span>
            </li>
          ))}
        </ul>
        {/* New: Link to the full skills page */}
        <div className={styles.skillsPreview__cta}>
          <Link
            to="/skills"
            className={`${styles.skillsPreview__ctaLink} ${styles.ctaButton}`}
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

export default SkillsPreview;
