// src/pages/Home/Home.jsx
import Hero from 'components/Hero/Hero';
import AboutPreview from 'components/previews/AboutPreview/AboutPreview';
import SkillsPreview from 'components/previews/SkillsPreview/SkillsPreview';
import ProjectsPreview from 'components/previews/ProjectsPreview/ProjectsPreview';
import ContactPreview from 'components/previews/ContactPreview/ContactPreview';


const Home = () => {
  return (
    <>
      {/* Home Page Sections */}
      <Hero />
      <AboutPreview />
      {/* Reusable SkillsPreview component also used in About Page*/}
      <SkillsPreview />
      <ProjectsPreview />
      <ContactPreview />

    </>
  );
};

export default Home;
