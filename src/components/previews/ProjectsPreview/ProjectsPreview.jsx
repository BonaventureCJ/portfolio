import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsPreview.module.scss';
import projectsData from 'data/projects';
import ProjectsCard from 'components/Cards/ProjectsCard';

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
        <h2 id="featured-projects-heading" className={styles.projectsPreview__heading}>
          Featured Projects
        </h2>
        <p className={styles.projectsPreview__description}>
          A showcase of some of my best projects, one recent project showcasing my current skills and the others before I upgraded my skills and learnt better folder structures and best practices.
        </p>
        <p className={styles.projectsPreview__description}>
          I'm currently building more scalable, maintainable, accessible and robust projects with improved code quality,architecture and improved performance.
        </p>

        <div className={styles.projectsPreview__grid}>
          {featuredProjects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>

        <div className={styles.projectsPreview__cta}>
          <Link
            to="/projects"
            className={`${styles.projectsPreview__ctaLink} ${styles.ctaButton}`}
            aria-label="Navigate to the full Projects page"
            title="View all projects on the Projects page"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
