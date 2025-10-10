// src/pages/Skills/Skills.jsx
import React from 'react';
import MajorSkillsCard from 'components/Cards/MajorSkillsCard';
import OtherSkillsCard from 'components/Cards/OtherSkillsCard';
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>My Skills</h2>
      <div className={styles.skillsContainer}>
        <MajorSkillsCard />
        <OtherSkillsCard />
      </div>
    </section>
  );
};

export default Skills;
