import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectsCard.module.scss';
import Button from 'components/Buttons/Button';

/**
 * ProjectsCard component displays a single project with details.
 * It is built with semantic HTML, accessibility attributes (WCAG), and uses BEM for SCSS styling.
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
        <h3 className={styles['projects-card__title']}>{title}</h3>

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
            <a
              key={`${link.label}-${index}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['projects-card__action-link']} // Add a style to make the anchor act like a block element, ensuring the button fills it.
            >
              <Button
                // Map the variant for the button dynamically
                variant={
                  link.label.toLowerCase().includes('live')
                    ? 'primary'
                    : 'secondary'
                }
                size="small"
                //Pass other children, ariaLabel, and title props
                ariaLabel={link.ariaLabel}
                title={link.ariaLabel}
              >
                {link.label}
              </Button>
            </a>
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
