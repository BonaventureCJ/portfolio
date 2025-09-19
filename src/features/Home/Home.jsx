/* import React from 'react'

const Home = () => {
  return (<>
  <h1>Welcome to My Portfolio 3.0.0 in the Name of Jesus Christ!</h1>
    <p>This Portfolio is Still Under Development</p>
    <p>Navigate to "About", "Projects" and "Contact" to Preview the Beta Version of the Pages</p>
  </>
  )
}

export default Home */

// src/pages/Home.jsx

import React from 'react';
import Hero from 'components/Hero/Hero';

const Home = () => {
  return (
    <>
    <h1>Welcome to My Portfolio 3.0.0 in the Name of Jesus Christ!</h1>
      <Hero />
      {/* Other sections will go here */}
    </>
  );
};

export default Home;
