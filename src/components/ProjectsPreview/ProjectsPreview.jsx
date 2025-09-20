import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsPreview.module.scss';
import projectsData from 'data/projects';

/**
 * ProjectsPreview Component
 *
 * Displays a curated selection of featured projects on the homepage.
 * Includes a link to the full projects page for more details.
 *
 * Adheres to enterprise React standards, including semantic HTML,
 * responsive design, WCAG accessibility, SEO, and BEM naming.
 *
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
          A showcase of some of my best projects before I upgraded my skills and learnt better folder structures and best practices. I'm currently building more scalable, maintainable, accessible and robust projects with improved code quality,architecture and improved performance.
        </p>

        <div className={styles.projectsPreview__grid}>
          {featuredProjects.map((project) => (
            <article key={project.id} className={styles.projectsPreview__card}>
              <div className={styles.projectsPreview__cardImage}>
                <img
                  src={project.image}
                  alt={`Screenshot of the ${project.title} project`}
                  loading="lazy"
                />
              </div>
              <div className={styles.projectsPreview__cardContent}>
                <h3 className={styles.projectsPreview__cardTitle}>{project.title}</h3>
                <p className={styles.projectsPreview__cardDescription}>{project.description}</p>
                <div className={styles.projectsPreview__cardActions}>
                  <a
                    href={project.liveUrl}
                    className={`${styles.projectsPreview__link} ${styles.linkLive}`}
                    aria-label={`View live demo of ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className={`${styles.projectsPreview__link} ${styles.linkRepo}`}
                    aria-label={`View GitHub repository for ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.projectsPreview__cta}>
          <Link
            to="/projects"
            className={`${styles.projectsPreview__ctaLink} ${styles.ctaButton}`}
            aria-label="Navigate to the full Projects page"
            title="View all projects"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
