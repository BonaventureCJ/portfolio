import React from 'react';

import MinorSkillsCard from './MinorSkillsCard';
import MinorSkillsApiData from './MinorSkillsApiData';

const MinorSkills = () => {
  return (
    <>
      <section id="other-skills" className="minor-skills container">

        <h2 id='skills'>Other Skills <i className="bi bi-hand-thumbs-up"></i></h2>

        <h4>Other skillset in my <span className='text-highlight--secondary'>competent</span> toolbox include the following technologies:</h4>

          <div className="row container-row">
            
            {MinorSkillsApiData.map((values) => {
              return (
                <>
                  <MinorSkillsCard key={values.id} name={values.name} image={values.image} />
                </>
              )
            })}
          </div>
        
      </section>
    </>

  )
}

export default MinorSkills;