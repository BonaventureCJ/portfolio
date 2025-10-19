// src/components/previews/ProjectsPreview/ProjectsPreview.jsx

import React from 'react';
// Link is no longer needed in this component as the Button handles it
// import { Link } from 'react-router-dom';
import styles from './ProjectsPreview.module.scss';
import projectsData from 'data/projects/projects';
import ProjectsCard from 'components/Cards/ProjectsCard';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';

/**
 * ProjectsPreview Component
 * @returns {JSX.Element} The Projects Preview component.
 */
const ProjectsPreview = () => {
  // Filter for projects marked as featured for the homepage display.
  const featuredProjects = projectsData.filter((project) => project.isFeatured);

  return (
    <section className={styles.projectsPreview} aria-labelledby="featured-projects-heading">
      <div className={styles.projectsPreview__container}>
        <Heading level="h2" id="featured-projects-heading" className={styles.projectsPreview__heading}>
          Featured Projects
        </Heading>

        <p className={styles.projectsPreview__description}>
          A showcase of some of my best projects, one recent project showcasing my current skills and the others before I upgraded my skills and learnt better folder structures and best practices.
        </p>
        <p className={styles.projectsPreview__description}>
          I'm currently building more scalable, maintainable, accessible and robust projects with improved code quality, architecture and improved performance.
        </p>

        <div className={styles.projectsPreview__grid}>
          {featuredProjects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>

        <div className={styles.projectsPreview__cta}>
          <Button
            to="/projects" // <-- Tells the Button to render a react-router Link
            variant="primary"
            size="medium"
            aria-label="Navigate to the full Projects page"
            title="View all projects on the Projects page"
            // If the original 'ctaLink' styles are needed, they will be passed here
            // className={styles.ctaLink} 
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
