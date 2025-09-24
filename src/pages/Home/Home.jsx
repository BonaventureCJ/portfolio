// src/pages/Home.jsx

import React from 'react';
import Hero from 'components/Hero/Hero';
import AboutPreview from 'components/previews/AboutPreview/AboutPreview';
import SkillsPreview from 'components/previews/SkillsPreview/SkillsPreview';
import ProjectsPreview from 'components/previews/ProjectsPreview/ProjectsPreview';
import ContactPreview from 'components/previews/ContactPreview/ContactPreview';

const Home = () => {
  return (
    <>
    <h1>Welcome to My Portfolio 3.0.0 in the Name of Jesus Christ!</h1>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <ProjectsPreview />
      <ContactPreview />
      {/* Other sections will go here */}
    </>
  );
};

export default Home;
