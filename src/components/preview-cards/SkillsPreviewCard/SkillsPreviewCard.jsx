import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillsPreviewCard.module.scss';

/**
 * SkillsPreviewCard Component
 * 
 * Renders a list of skill items, each with an icon and name.
 * 
 * @param {object} props - The component props.
 * @param {Array<object>} props.skills - An array of skill objects to render.
 * @returns {JSX.Element} The rendered SkillsPreviewCard component.
 */
const SkillsPreviewCard = ({ skills }) => {
  return (
    <ul className={styles.skillsList} role="list">
      {skills.map((skill) => (
        <li
          key={skill.id}
          className={styles.skillsItem}
        >
          <div className={styles.skillsIcon}>
            <skill.icon aria-hidden="true" />
          </div>
          <span className={styles.skillsName}>{skill.name}</span>
        </li>
      ))}
    </ul>
  );
};

SkillsPreviewCard.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    })
  ).isRequired,
};

export default SkillsPreviewCard;
