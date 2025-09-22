// src/features/Skills/Skills.jsx

import React from 'react';
import MajorSkillsCard from 'components/Cards/MajorSkillsCard';
import OtherSkillsCard from 'components/Cards/OtherSkillsCard';
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <div className={styles.skillsPage}>
      <h1 className={styles.heading}>My Skills</h1>
      <MajorSkillsCard />
      <OtherSkillsCard />
    </div>
  );
};

export default Skills;

