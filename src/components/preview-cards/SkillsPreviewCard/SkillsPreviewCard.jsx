// src/components/preview-cards/SkillsPreviewCard/SkillsPreviewCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillsPreviewCard.module.scss';

/**
 * A preview card component that displays a single skill with its icon and name.
 * @param {object} props - The component props.
 * @param {object} props.skill - A single skill object to render.
 * @param {string} [props.className] - Optional class names to apply to the card.
 * @returns {JSX.Element} The rendered SkillsPreviewCard component.
 */
const SkillsPreviewCard = ({ skill, className }) => {
  return (
    <li className={`${styles['skills-preview-card']} ${className || ''}`}>
      <figure className={styles['skills-preview-card__content']}>
        <div
          className={styles['skills-preview-card__icon']}
          role="img"
          aria-labelledby={`skill-name-${skill.id}`}
        >
          <skill.icon className={styles['skills-preview-card__svg']} />
        </div>
        <figcaption
          className={styles['skills-preview-card__name']}
          id={`skill-name-${skill.id}`}
        >
          {skill.name}
        </figcaption>
      </figure>
    </li>
  );
};

SkillsPreviewCard.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default SkillsPreviewCard;

