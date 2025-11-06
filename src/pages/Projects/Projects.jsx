// src/pages/Projects/Projects.jsx
import React from 'react';
import { projects } from 'data/projects/projects';
import ProjectsCard from 'components/Cards/ProjectsCard';
import styles from './Projects.module.scss';
import Heading from 'components/Heading/Heading';

export const Projects = () => {
  const inDevelopmentProjects = projects.filter(project => project.development_status === 'In Development');
  const recentProjects = projects.filter(project => project.isRecent && project.development_status !== 'In Development');
  const tutorialBasedProjects = projects.filter(project => project.isTutorialBased);
  const earlierCareerProjects = projects.filter(project => !project.isRecent && !project.isTutorialBased);

  /**
   * Helper function to render a project section.
   * @param {Array} projects - Array of project objects to display.
   * @param {string} title - The main heading for the section.
   * @param {string[]} description - The subheading describing the section.
   * @param {number} headingLevel - The heading level (e.g., 2 for h2).
   * @param {string} sectionId - The unique ID for the section, used for accessibility.
   * @param {object} [iconProps] - Optional icon props to pass to the Heading component.
   */
  const renderProjectSection = (projects, title, description, headingLevel = 2, sectionId, iconProps) => {
    if (projects.length === 0) {
      return null;
    }

    return (
      <section className={styles['projects-section']} aria-labelledby={sectionId}>
        <div className={styles['projects-section__header-container']}>
          <Heading 
            level={`h${headingLevel}`} 
            className={styles['projects-section__title']} 
            id={sectionId}
            iconProps={iconProps}
          >
            {title}
          </Heading>
          <p className={styles['projects-section__subtitle']}>
            {description.map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                {/* Conditionally render <br /> only if it's not the last paragraph */}
                {index < description.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
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
        <Heading
          level="h1"
          className={styles['projects-page__main-title']}
          iconProps={{ icon: 'LaptopBriefcase' }} 
        >
          My Work
        </Heading>
        <p className={styles['projects-page__description']}>
          A collection of my projects, categorized by status and history.
        </p>
      </header>

      <div className={styles['projects-page__main']}>
        {/* FIRST: Completed/Recent Projects (MVP Status) */}
        {renderProjectSection(
          recentProjects,
          'Recent Projects (MVPs)',
          ["Showcasing my most up-to-date work that has reached an initial deployable state (MVP), reflecting my current skill set and development approach."],
          3,
          'recent-mvp-projects',
          { icon: 'Rocket' }
        )}

        {/* SECOND: Projects Currently in Progress */}
        {renderProjectSection(
          inDevelopmentProjects,
          'Projects in Development',
          ["A preview of current major projects that are actively being built and refined."],
          3,
          'in-development-projects',
          { icon: 'DevCycle' }
        )}

        {/* THIRD & FOURTH: Older/Tutorial Projects */}
        {renderProjectSection(
          tutorialBasedProjects,
          'Tutorial-Based Projects',
          ["A selection of projects built while learning specific technologies and techniques, demonstrating foundational knowledge."],
          3,
          'tutorial-projects',
          { icon: 'BlueBook' }
        )}
        {renderProjectSection(
          earlierCareerProjects,
          'Earlier Career Projects',
          ["A look back at some of my initial projects, highlighting my growth and evolution as a developer.",
            "While these projects effectively showcased early skills and foundational problem-solving, my current approach to development has matured significantly: I now prioritize robust architecture, modern design patterns, and industry-best practices learned through continuous experience.",
            "Today, I specialize in building highly scalable, maintainable, and accessible projects, focusing on superior code quality, architectural integrity, and optimized performance."
          ],
          3,
          'earlier-career-projects',
          { icon: 'Seedling' }
        )}
      </div>
    </div>
  );
};
