import React from 'react';

import ProjectsCard from './ProjectsCard';
import ProjectsApiData from './ProjectsApiData';

const Projects = () => {
  return (
    <>
      <section id='projects' className="col  container projects">

        <h2>Projects <span><i className="bi bi-briefcase"></i></span></h2>

        <h4>These are some of my published projects:</h4>
        
          <div className="row container-row">
            {ProjectsApiData.map((values) => {
              return (
                <>
                  <ProjectsCard key={values.id} name={values.name} image={values.image} description={values.description} learnmore={values.learnmore} webpage={values.webpage}/>
                </>
              )
            })}
          </div>
      </section>
    </>

  )
}

export default Projects;