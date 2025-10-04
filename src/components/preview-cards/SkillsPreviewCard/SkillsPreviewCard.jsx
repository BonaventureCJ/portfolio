// src/components/preview-cards/SkillsPreviewCard/SkillsPreviewCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillsPreviewCard.module.scss';

/**
 * @param {object} props - The component props.
 * @param {object} props.skill - A single skill object to render.
 * @returns {JSX.Element} The rendered SkillsPreviewCard component.
 */
const SkillsPreviewCard = ({ skill }) => {
  return (
    <li
      className={styles.skillsItem}
    >
      <div className={styles.skillsIcon}>
        <skill.icon aria-hidden="true" />
      </div>
      <span className={styles.skillsName}>{skill.name}</span>
    </li>
  );
};

SkillsPreviewCard.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
};

export default SkillsPreviewCard;
