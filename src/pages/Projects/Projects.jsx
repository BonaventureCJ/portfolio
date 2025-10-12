// src/pages/Projects/Projects.jsx
import React from 'react';
import projectsData from 'data/projects/projects';
import ProjectsCard from 'components/Cards/ProjectsCard';
import styles from './Projects.module.scss';

/**
 * Renders the Projects page, grouping projects into different sections.
 * This component follows best practices for semantic HTML, WCAG accessibility,
 * BEM naming conventions, and RWD principles.
 */
const Projects = () => {
  const recentProjects = projectsData.filter(project => project.isRecent);
  const tutorialBasedProjects = projectsData.filter(project => project.isTutorialBased);
  const earlierCareerProjects = projectsData.filter(project => !project.isRecent && !project.isTutorialBased);

  /**
   * Helper function to render a project section.
   * @param {Array} projects - Array of project objects to display.
   * @param {string} title - The main heading for the section.
   * @param {string[]} description - The subheading describing the section.
   * @param {number} headingLevel - The heading level (e.g., 2 for <h2>).
   * @param {string} sectionId - The unique ID for the section, used for accessibility.
   */
  const renderProjectSection = (projects, title, description, headingLevel = 2, sectionId) => {
    if (projects.length === 0) {
      return null;
    }

    const HeadingTag = `h${headingLevel}`;
    const SubheadingTag = `h${headingLevel + 1}`;

    return (
      <section className={styles['projects-section']} aria-labelledby={sectionId}>
        <div className={styles['projects-section__header-container']}>
          <HeadingTag className={styles['projects-section__title']} id={sectionId}>
            {title}
          </HeadingTag>
          <SubheadingTag className={styles['projects-section__subtitle']}>
            {description.map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                {index < description.length - 1 && <br />}
              </React.Fragment>
            ))}
          </SubheadingTag>
        </div>
        <ul className={styles['projects-section__list']}>
          {projects.map((project) => (
            <li key={project.id} className={styles['projects-section__item']}>
              <ProjectsCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    );
  };

  return (
    <div className={styles['projects-page']}>
      <header className={styles['projects-page__header']}>
        <h1 className={styles['projects-page__main-title']}>My Work</h1>
        <p className={styles['projects-page__description']}>
          A collection of my recent projects, as well as tutorial-based and earlier career work.
        </p>
      </header>

      <div className={styles['projects-page__main']}>
        {renderProjectSection(
          recentProjects,
          'Recent Projects',
          ["Showcasing my most up-to-date work, reflecting my current skill set and development approach."],
          2,
          'recent-projects'
        )}
        {renderProjectSection(
          tutorialBasedProjects,
          'Tutorial-Based Projects',
          ["A selection of projects built while learning specific technologies and techniques, demonstrating foundational knowledge."],
          2,
          'tutorial-projects'
        )}
        {renderProjectSection(
          earlierCareerProjects,
          'Earlier Career Projects',
          ["A look back at some of my initial projects, highlighting my growth and evolution as a developer.", 
            "These projects showcase early skills and problem-solving, but I now approach development with significantly improved code structure, design patterns, and industry-best practices gained from experience and continued learning."],
          2,
          'earlier-career-projects'
        )}
      </div>
    </div>
  );
};

export default Projects;
