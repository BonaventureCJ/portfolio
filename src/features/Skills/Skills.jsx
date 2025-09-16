// src/features/Skills/Skills.jsx

import React from 'react';
import MajorSkillsCard from 'components/Cards/MajorSkillsCard';
import OtherSkillsCard from 'components/Cards/OtherSkillsCard';

const Skills = () => {
  return (
    <div className="skills-page">
      <h1 className="skills-page__heading">My Skills</h1>
      <MajorSkillsCard />
      <OtherSkillsCard />
    </div>
  );
};

export default Skills;
