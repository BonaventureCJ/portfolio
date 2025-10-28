// src/components/ProjectsCard/ProjectsCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectsCard.module.scss';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';


/**
 * ProjectsCard component displays a single project with details.
 * @param {object} props - The component props.
 * @param {object} props.project - The project data to display.
 */
const ProjectsCard = ({ project }) => {
  const { title, description, image, links, technologies } = project;

  /**
   * Helper function to render the project description.
   * Renders an array of strings as a series of paragraphs.
   */
  const renderDescription = (desc) => {
    return desc.map((paragraph, index) => (
      <p key={index} className={styles['projects-card__description-paragraph']}>
        {paragraph}
      </p>
    ));
  };

  return (
    <article className={styles['projects-card']}>
      <div className={styles['projects-card__image-container']}>
        <img
          className={styles['projects-card__image']}
          src={typeof image === 'object' ? image.default || image : image}
          alt={`Screenshot of the ${title} project`}
          loading="lazy"
        />
      </div>
      <div className={styles['projects-card__content']}>
        <Heading level="h3" className={styles['projects-card__title']}>{title}</Heading>

        <div className={styles['projects-card__description']}>
          {renderDescription(description)}
        </div>

        <ul className={styles['projects-card__tech-list']}>
          {technologies.map((tech, index) => (
            <li key={`${tech}-${index}`} className={styles['projects-card__tech-item']}>
              <span className={styles['projects-card__tech']}>{tech}</span>
            </li>
          ))}
        </ul>
        <div className={styles['projects-card__actions']}>
          {links.map((link, index) => (
            <Button
              key={`${link.label}-${index}`}
              href={link.url} // <-- Uses the 'href' prop for external links
              variant={
                link.label.toLowerCase().includes('live')
                  ? 'primary'
                  : 'secondary'
              }
              size="small"
              ariaLabel={link.ariaLabel}
              title={link.ariaLabel}
              target="_blank" // <-- Pass standard anchor attributes
              rel="noopener noreferrer" // <-- Pass standard anchor attributes
              // If 'projects-card__action-link' syles are needed, like
              // vital display/layout CSS (like 'display: block'),
              // it would added here: className={styles['projects-card__action-link']}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
};

ProjectsCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
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
