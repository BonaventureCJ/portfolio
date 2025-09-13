import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="hero" id="hero">
        
        <h2>Hi there!</h2>

        <h1>I'm <span className='text-highlight--primary'>Bonaventure C. J. Ugwu;</span></h1>

        <hr />

        <h2>a <span className='text-highlight--tertiary'> very passionate</span> <span className='text-shadow--tertiary'>ReactJS | NextJS | TypeScript</span>  Front-End Developer {/* <span className='text-shadow--tertiary'>WordPress</span> web developer! */}</h2>
        <h3 className='text-highlight--primary italic'>“Designing scalable, user-centric web applications with React.js and Next.js using best practices.”</h3>

      </section>
    </>
  )
}

export default Hero