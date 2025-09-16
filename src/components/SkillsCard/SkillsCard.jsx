// src/components/SkillsCard/SkillsCard.jsx

import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable component to display a category of skills.
 * @param {object} props - The component's props.
 * @param {string} props.categoryTitle - The title for the skill category.
 * @param {Array<object>} props.skills - An array of skill objects to be displayed.
 * @param {string} props.cardType - A modifier for the BEM class name (e.g., 'major' or 'other').
 * @returns {JSX.Element} The rendered SkillsCard component.
 */
const SkillsCard = ({ categoryTitle, skills, cardType }) => {
  const blockName = 'skills-card';
  const elementClass = (element) => `${blockName}__${element}`;
  const modifierClass = (modifier) => `${blockName}--${modifier}`;

  return (
    <section className={`${blockName} ${modifierClass(cardType)}`} aria-labelledby={`skills-heading-${cardType}`}>
      <h2 className={elementClass('title')} id={`skills-heading-${cardType}`}>
        {categoryTitle}
      </h2>
      <ul className={elementClass('list')} role="list">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <li key={skill.id} className={elementClass('item')} aria-label={skill.name}>
              <div className={elementClass('icon-wrapper')}>
                {Icon && <Icon className={elementClass('icon')} aria-hidden="true" />}
              </div>
              <p className={elementClass('name')}>{skill.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

SkillsCard.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      level: PropTypes.string.isRequired,
    })
  ).isRequired,
  cardType: PropTypes.oneOf(['major', 'other']).isRequired,
};

export default SkillsCard;
