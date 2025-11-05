// src/components/previews/ProjectsPreview/ProjectsPreview.jsx

import React from 'react';
import styles from './ProjectsPreview.module.scss';
import { projects } from 'data/projects/projects';
import ProjectsCard from 'components/Cards/ProjectsCard';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';

/**
 * ProjectsPreview Component
 * @returns {JSX.Element} The Projects Preview component.
 */
const ProjectsPreview = () => {
  // Filter for projects marked as featured for the homepage display.
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section className={styles.projectsPreview} aria-labelledby="featured-projects-heading">
      <div className={styles.projectsPreview__container}>
        <Heading 
          level="h2" 
          id="featured-projects-heading" 
          className={styles.projectsPreview__heading}
          iconProps={{ icon: 'LaptopBriefcase' }}
        >
          Featured Projects
        </Heading>

        <p className={styles.projectsPreview__description}>
          A showcase of some of my recent projects, demonstrating my current skills.
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
            icon={{ prefix: 'fa', name: 'FaArrowRight' }}
            iconPosition="right"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
