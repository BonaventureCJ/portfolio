import React from 'react';
import projectsData from '../../data/projects';
import ProjectsCard from '../../components/Cards/ProjectsCard';
import styles from './Projects.module.scss';

/**
 * Projects component displays a list of project cards.
 * It fetches project data and renders a list of ProjectCard components.
 */
const Projects = () => {
  return (
    <section className={styles.projects}>
      <header className={styles['projects__header']}>
        {/* WCAG & SEO: Use a single, descriptive h2 for the section */}
        <h2 className={styles['projects__title']}>My Projects</h2>
      </header>
      
      {/* 
        Semantic HTML: Use a list for the collection of cards.
        The use of <ul> is more semantically correct than a plain div
        for a list of related items.
      */}
      <ul className={styles['projects__list']}>
        {projectsData.map((project) => (
          // React Best Practice: Use a unique 'key' for each list item
          <li key={project.id} className={styles['projects__item']}>
            <ProjectsCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
