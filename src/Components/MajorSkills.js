import React from 'react';

import MajorSkillsCard from './MajorSkillsCard';
import MajorSkillsApiData from './MajorSkillsApiData';

const MajorSkills = () => {
  return (
    <>
      <section id='top-skills' className="container major-skills">

        <h2>Top Skills <i className="bi bi-fire icon-highlight--tertiary"></i></h2>

        <h4 className=''>These are my <span className="text-highlight--secondary">core</span> skills:</h4>

          <div className="row container-row">
            {MajorSkillsApiData.map((values) => {
              return (
                <>
                  <MajorSkillsCard key={values.id} name={values.name} image={values.image} />
                </>
              )
            })}
          </div>
          
      </section>
    </>

  )
}

export default MajorSkills