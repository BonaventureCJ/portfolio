// src/pages/Skills/Skills.jsx
import React from 'react';
import MajorSkillsCard from 'components/Cards/MajorSkillsCard';
import OtherSkillsCard from 'components/Cards/OtherSkillsCard';
import styles from './Skills.module.scss';
import Heading from 'components/Heading/Heading';

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <Heading 
        level="h2" 
        className={styles.heading}
        iconProps={{ icon: 'Skillshare' }} // Add this line to include the icon
      >
        My Skills
      </Heading>
      <div className={styles.skillsContainer}>
        <MajorSkillsCard />
        <OtherSkillsCard />
      </div>
    </section>
  );
};

export default Skills;

