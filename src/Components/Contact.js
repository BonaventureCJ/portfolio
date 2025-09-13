import React from 'react';

import ContactCard from './ContactCard';
import ContactApiData from './ContactApiData';

const Contact = () => {
  return (
    <>
      <section className="container contact" id='contact'>

        <h2>Contact <i className="bi bi-person-lines-fill"></i></h2>

        <h4>You can get in-touch with me via any of the following means:</h4>
        
          <div className="row">
            {ContactApiData.map((values) => {
              return (
                <>
                  <ContactCard key={values.id} name={values.name} media={values.media} icon={values.icon} webLink={values.webLink} animationClassName={values.animationClassName} />
                </>
              )
            })}
          </div>
      </section>
    </>

  )
}

export default Contact;