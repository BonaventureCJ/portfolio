import React from 'react';

const ProjectsCard = ({ name, image, learnmore, webpage, description }) => {
    return (
        <>
            <div className="col">

                <article className="box--center  card--lg  projects__card" >

                    <h5>{name}</h5>

                    <img className='img--md' src={image} alt={`${name}`} />

                    <p className='projects__p'>{description} {/* <a className='link  link-highlight' href={learnmore} target="_blank" rel="noreferrer">continue reading...</a> */}</p>
                    {/* <div><a href={webpage} target="_blank " rel="noreferrer" className="button button-secondary">Check It Out! <i class="bi bi-box-arrow-up-right"></i></a></div> */}

                    <div>
                        <a
                            href={webpage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button-secondary"
                            aria-label={`Explore ${name} (opens in new tab)`}
                        >
                            Explore {name}
                            <i className="bi bi-box-arrow-up-right ms-1" aria-hidden="true"></i>
                        </a>
                    </div>

                </article>
            </div>
        </>
    )
}

export default ProjectsCard;