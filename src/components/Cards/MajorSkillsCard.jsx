// src/components/Cards/MajorSkillsCard.jsx

import React from 'react';
import SkillsCard from 'components/SkillsCard/SkillsCard';
import skillsData from 'data/skills';

/**
 * Renders the card for major skills.
 * @returns {JSX.Element} The rendered MajorSkillsCard component.
 */
const MajorSkillsCard = () => {
  // Filter for skills with level 'Major'
  const majorSkills = skillsData.filter((skill) => skill.level === 'Major');

  return <SkillsCard categoryTitle="Major Skills" skills={majorSkills} cardType="major" />;
};

export default MajorSkillsCard;
