// src/components/Cards/OtherSkillsCard.jsx

import React from 'react';
import SkillsCard from 'components/SkillsCard/SkillsCard';
import skillsData from 'data/skills';

/**
 * Renders the card for other skills.
 * @returns {JSX.Element} The rendered OtherSkillsCard component.
 */
const OtherSkillsCard = () => {
  // Filter for skills with level 'Other'
  const otherSkills = skillsData.filter((skill) => skill.level === 'Other');

  return <SkillsCard categoryTitle="Other Skills" skills={otherSkills} cardType="other" />;
};

export default OtherSkillsCard;
