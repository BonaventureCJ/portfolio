// src/components/Cards/ProjectsCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectsCard.module.scss';

/**
 * ProjectsCard component displays a single project with details.
 * It is built with semantic HTML, accessibility attributes (WCAG), and uses BEM for SCSS styling.
 * @param {object} props - The component props.
 * @param {object} props.project - The project data to display.
 */
const ProjectsCard = ({ project }) => {
  const { title, description, image, links, technologies } = project;

  /**
   * Helper function to render the project description, supporting both string and array formats.
   * Renders an array of strings as a series of paragraphs for better readability and semantics.
   */
  const renderDescription = (desc) => {
    if (Array.isArray(desc)) {
      return desc.map((paragraph, index) => (
        <p key={index} className={styles['projects-card__description-paragraph']}>
          {paragraph}
        </p>
      ));
    }
    return <p className={styles['projects-card__description-paragraph']}>{desc}</p>;
  };

  return (
    <article className={styles['projects-card']}>
      <div className={styles['projects-card__image-container']}>
        {/*
          WCAG: Ensure all images have descriptive alt text for screen readers.
          SEO: Alt text provides context for search engine crawlers.
        */}
        <img
          className={styles['projects-card__image']}
          // Assuming 'image' might be an object (e.g., from Webpack file-loader) or a string
          src={typeof image === 'object' ? image.default || image.src : image}
          alt={`Screenshot of the ${title} project`}
          loading="lazy" // Optimize performance by lazy-loading images
        />
      </div>
      <div className={styles['projects-card__content']}>
        {/*
          SEO & WCAG: Use a heading tag to provide a clear, hierarchical structure.
        */}
        <h3 className={styles['projects-card__title']}>{title}</h3>
        
        <div className={styles['projects-card__description']}>
            {renderDescription(description)}
        </div>

        <ul className={styles['projects-card__tech-list']}>
          {technologies.map((tech, index) => (
            <li key={index} className={styles['projects-card__tech-item']}>
              <span className={styles['projects-card__tech']}>{tech}</span>
            </li>
          ))}
        </ul>
        <div className={styles['projects-card__actions']}>
          {/* Use a .map() loop to render each link from the project's links array */}
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`${styles['projects-card__button']} ${
                link.label.toLowerCase().includes('live')
                  ? styles['projects-card__button--live']
                  : styles['projects-card__button--repo']
              }`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              title={link.ariaLabel}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

// Update PropTypes to match the new 'description' structure
ProjectsCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // Update prop type to accept string or array of strings
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    // Update prop type to accept string or object (for image imports)
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        ariaLabel: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectsCard;
