import React from 'react';

const MajorSkillsCard = ({name, image}) => {
    return (
        <>
            <div className="col">
                <div className="flexbox--center box--center card--md">
                   <img className="img--sm" src={image} alt={`${name}`} />
                </div>
                
                <h5 className='margin--sm'>{name}</h5>
            </div>

        </>
    )
}

export default MajorSkillsCard