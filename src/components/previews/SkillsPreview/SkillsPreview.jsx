// src/components/previews/SkillsPreview/SkillsPreview.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SkillsPreview.module.scss';
import skillsData from 'data/skills';
import SkillsPreviewCard from 'components/preview-cards/SkillsPreviewCard/SkillsPreviewCard';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading'; // Import the Heading component

/**
 * A skills preview section for the homepage.
 * @returns {JSX.Element} The Skills Preview component.
 */
const SkillsPreview = () => {
  const featuredSkills = skillsData.filter((skill) => skill.isFeatured);

  const [listRef, listIsInView] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className={styles.skillsPreview}>
      <div className={styles.skillsPreview__container}>
        {/* Replace <h2> with the reusable Heading component */}
        <Heading level="h2" className={styles.skillsPreview__heading}>
          My Key Skills
        </Heading>

        <p className={styles.skillsPreview__description}>
          Showcasing my core competencies in modern front-end development.
        </p>

        <ul
          className={`${styles.skillsPreview__list} ${listIsInView ? styles.inView : ''}`}
          ref={listRef}
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
            className={styles.ctaLink}
            aria-label="View all skills on the Skills page"
            title="Navigate to the full Skills page"
          >
            <Button variant="primary" size="medium">
              View All Skills
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
