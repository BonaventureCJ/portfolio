// src/components/previews/SkillsPreview/SkillsPreview.jsx
// For the Homepage and the About page previews
import React from 'react';
import styles from './SkillsPreview.module.scss';
import { skills } from 'data/skills';
import SkillsPreviewCard from 'components/preview-cards/SkillsPreviewCard/SkillsPreviewCard';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';

/**
 * A skills preview section for the homepage and about page, featuring a list of key skills.
 * This component is structured for high accessibility, SEO, and enterprise-grade maintainability.
 * @returns {JSX.Element} The Skills Preview component.
 */
const SkillsPreview = () => {
  const featuredSkills = skills.filter((skill) => skill.isFeatured);

  const [listRef, listIsInView] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className={styles['skills-preview']} aria-labelledby="skills-preview-heading">
      <div className={styles['skills-preview__container']}>
        <Heading
          level="h2"
          className={styles['skills-preview__heading']}
          id="skills-preview-heading" // For ARIA-labelledby reference
          iconProps={{ icon: 'Skillshare' }}
        >
          My Key Skills
        </Heading>

        <p className={styles['skills-preview__description']}>
          Showcasing my core competencies in modern front-end development.
        </p>

        <ul
          className={`${styles['skills-preview__list']} ${listIsInView ? styles['in-view'] : ''}`}
          ref={listRef}
        >
          {featuredSkills.map((skill) => (
            <SkillsPreviewCard
              key={skill.id}
              skill={skill}
              // Pass the BEM modifier class to the child component
              className={styles['skills-preview__list-item']}
            />
          ))}
        </ul>

        <div className={styles['skills-preview__cta']}>
          <Button
            to="/skills"
            variant="primary"
            size="medium"
            aria-label="View all skills on the Skills page"
            title="Navigate to the full Skills page"
            icon={{ prefix: 'fa', name: 'FaArrowRight' }}
            iconPosition="right"
          >
            View all skills
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
