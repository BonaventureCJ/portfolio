// src/components/previews/SkillsPreview/SkillsPreview.jsx
// For the Homepage and the About page previews
import React from 'react';
import styles from './SkillsPreview.module.scss';
import skillsData from 'data/skills';
import SkillsPreviewCard from 'components/preview-cards/SkillsPreviewCard/SkillsPreviewCard';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';

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

        {/* Link to the full skills page using the polymorphic Button component */}
        <div className={styles.skillsPreview__cta}>
          <Button
            to="/skills" // <-- Tells the Button to render a react-router Link
            variant="primary"
            size="medium"
            aria-label="View all skills on the Skills page"
            title="Navigate to the full Skills page"
            // Optional: If original 'ctaLink' styles are needed, they can be passed here
            // className={styles.ctaLink} 
          >
            View All Skills
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
