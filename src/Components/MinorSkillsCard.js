import React from 'react';

const MinorSkillsCard = ({name, image}) => {
    return (
        <>
            <div className="col">

                <div className="card--sm">
                    <img className='img--xsm' src={image} alt={`${name}`} />
                </div>
                
                <h5 className='margin--sm'>{name}</h5>

            </div>
        </>
    )
}

export default MinorSkillsCard;