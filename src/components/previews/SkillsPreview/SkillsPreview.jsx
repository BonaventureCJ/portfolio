// src/components/previews/SkillsPreview/SkillsPreview.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SkillsPreview.module.scss';
import skillsData from 'data/skills';
import SkillsPreviewCard from 'components/preview-cards/SkillsPreviewCard/SkillsPreviewCard';
import useIntersectionObserver from 'hooks/useIntersectionObserver'; // Import the more configurable hook

/**
 * A skills preview section for the homepage.
 * @returns {JSX.Element} The Skills Preview component.
 */
const SkillsPreview = () => {
  const featuredSkills = skillsData.filter((skill) => skill.isFeatured);
  
  // Use the new hook with triggerOnce set to true
  const [listRef, listIsInView] = useIntersectionObserver({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  return (
    <section className={styles.skillsPreview}>
      <div className={styles.skillsPreview__container}>
        <h2 className={styles.skillsPreview__heading}>My Key Skills</h2>
        <p className={styles.skillsPreview__description}>
          Showcasing my core competencies in modern front-end development.
        </p>
        
        <ul
          className={`${styles.skillsPreview__list} ${listIsInView ? styles.inView : ''}`}
          ref={listRef} // Attach the ref to the list element
          role="list"
        >
          {featuredSkills.map((skill) => (
            <SkillsPreviewCard key={skill.id} skill={skill} />
          ))}
        </ul>

        {/* Link to the full skills page */}
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
