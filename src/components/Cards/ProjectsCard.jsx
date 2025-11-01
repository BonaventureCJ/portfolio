// src/components/ProjectsCard/ProjectsCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectsCard.module.scss';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';
import Icon from 'components/Icon/Icon';

/**
 * Renders an 'In Progress' badge component.
 */
const InProgressBadge = () => (
  <span className={styles['projects-card__badge--in-progress']}>
    <Icon icon="WindowDevTools" className={styles['projects-card__badge-icon']} />
    In Progress
  </span>
);

/**
 * ProjectsCard component displays a single project with details.
 * @param {object} props - The component props.
 * @param {object} props.project - The project data to display.
 */
const ProjectsCard = ({ project }) => {
  // Destructure the new field
  const { title, description, image, links, technologies, development_status } = project;

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

  // Check if the project is currently in development
  const isInDevelopment = development_status === 'In Development';

  return (
    <article className={styles['projects-card']}>
      <div className={styles['projects-card__image-container']}>
        <img
          className={styles['projects-card__image']}
          src={typeof image === 'object' ? image.default || image : image}
          alt={`Screenshot of the ${title} project`}
          loading="lazy"
        />
        {/* Conditionally render the badge overlay on the image */}
        {isInDevelopment && <InProgressBadge />}
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
              href={link.url}
              variant={
                link.label.toLowerCase().includes('live')
                  ? 'primary'
                  : 'secondary'
              }
              size="small"
              ariaLabel={link.ariaLabel}
              title={link.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
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
    development_status: PropTypes.string,
  }).isRequired,
};

export default ProjectsCard;


