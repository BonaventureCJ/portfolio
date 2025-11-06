// src/pages/Projects/Projects.jsx
import React, { useMemo } from 'react';
import ProjectsCard from 'components/Cards/ProjectsCard';
import Heading from 'components/Heading/Heading';
import { useProjects } from 'hooks/useProjects';
import styles from './Projects.module.scss';

// Component for a single project section
const ProjectSection = ({ projects, title, description, headingLevel, sectionId, iconProps }) => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className={styles['projects-section']} aria-labelledby={sectionId}>
      <div className={styles['projects-section__header-container']}>
        <Heading
          level={`h${headingLevel}`}
          id={sectionId}
          className={styles['projects-section__title']}
          iconProps={iconProps}
        >
          {title}
        </Heading>
        {description.map((paragraph, index) => (
          <p key={index} className={styles['projects-section__subtitle']}>
            {paragraph}
          </p>
        ))}
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

export const Projects = () => {
  const { inDevelopmentProjects, recentProjects, tutorialBasedProjects, earlierCareerProjects } = useProjects();

  const mainPageDescription = useMemo(() => [
    "A collection of my projects, categorized by status and history."
  ], []);

  // Use a helper function or direct JSX to render sections
  const renderSections = () => {
    const sections = [
      {
        id: 'recent-mvp-projects',
        title: 'Recent Projects (MVPs)',
        description: ["Showcasing my most up-to-date work that has reached an initial deployable state (MVP), reflecting my current skill set and development approach."],
        projects: recentProjects,
        iconProps: { icon: 'Rocket' },
      },
      {
        id: 'in-development-projects',
        title: 'Projects in Development',
        description: ["A preview of current major projects that are actively being built and refined."],
        projects: inDevelopmentProjects,
        iconProps: { icon: 'DevCycle' },
      },
      {
        id: 'tutorial-projects',
        title: 'Tutorial-Based Projects',
        description: ["A selection of projects built while learning specific technologies and techniques, demonstrating foundational knowledge."],
        projects: tutorialBasedProjects,
        iconProps: { icon: 'BlueBook' },
      },
      {
        id: 'earlier-career-projects',
        title: 'Earlier Career Projects',
        description: [
          "A look back at some of my initial projects, highlighting my growth and evolution as a developer.",
          "While these projects effectively showcased early skills and foundational problem-solving, my current approach to development has matured significantly: I now prioritize robust architecture, modern design patterns, and industry-best practices learned through continuous experience.",
          "Today, I specialize in building highly scalable, maintainable, and accessible projects, focusing on superior code quality, architectural integrity, and optimized performance.",
        ],
        projects: earlierCareerProjects,
        iconProps: { icon: 'Seedling' },
      },
    ];

    return sections.map(section => (
      <ProjectSection
        key={section.id}
        projects={section.projects}
        title={section.title}
        description={section.description}
        headingLevel={2} // All sub-sections are h2
        sectionId={section.id}
        iconProps={section.iconProps}
      />
    ));
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
        {renderSections()}
      </div>
    </div>
  );
};
