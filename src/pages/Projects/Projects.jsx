import React from 'react';
import projectsData from '../../data/projects';
import ProjectsCard from '../../components/Cards/ProjectsCard';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <header className={styles['projects__header']}>
        <h2 className={styles['projects__title']}>My Projects</h2>
      </header>
      
      <ul className={styles['projects__list']}>
        {projectsData.map((project) => (
          <li key={project.id} className={styles['projects__item']}>
            <ProjectsCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
