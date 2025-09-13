import React from 'react';

const ContactCard = ({name, icon, webLink, animationClassName }) => {
    return (
        <>
            <div className="col  contact__card">
                <div className={animationClassName}>
                    <div className="card--xsm  box--center">
                      {/* <a href={webLink} target="_blank"><span>{icon}</span></a> */}
                        <a href={webLink} className='link' target="_blank" rel="noreferrer">{icon} {name}</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactCard;