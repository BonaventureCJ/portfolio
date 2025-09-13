import React from "react";
import bonacj from "./images/bonacj.jpg";


const About = () => {
  return (
    <>
      <section className="container about" id="about">
        <h2>
          About <i className="bi bi-file-earmark-person"></i>
        </h2>

        <h4 className="about__h4">
          Persistent learning and practice are where I derive my strengths:
        </h4>

        <article className="row">
          <article className="col justify about__description">
            <p className="">
              <span className="first-character">C</span>omputers have been my passion since childhood, where I developed a systems-thinking approach through relentless curiosity about how software and hardware interact. This early fascination evolved into rapidly growing expertise in <strong>modern frontend development</strong>, where I combine technical precision with design sensibility to build <strong>intuitive, high-performance interfaces</strong>.
            </p>

            <p>
              After many years leading patient-facing systems in healthcare, this love for computers has only grown stronger; and I am now channeling my user-centric mindset into creating web applications that balance aesthetic appeal with technical excellence. My cross-disciplinary background strengthens my ability to translate complex UX requirements into <strong>maintainable, accessible components</strong>.
            </p>

            <p>
              Through daily practice and continuous learning, I develop expertise in <strong>modern workflows</strong> and <strong>build optimization</strong> with focus on crafting interfaces that excel in  
              <strong> mobile responsive architectures, cross-browser compatibility & performance, accessibility-first development and SEO-optimized applications</strong>.
            </p>
          </article>

          <blockquote className="col box--center">
            "I build interfaces that work <em>and</em> delight - where clean code meets smooth interactions. Every component I create prioritizes <strong>long-term maintainability and scalabilty</strong>, <strong>end-user performance</strong>, and <strong>developer-friendly patterns</strong> that stand the test of framework updates."
          </blockquote>
          <article className="col img-wrapper--exterior">
            <div className="img-wrapper--interior">
              <img
                className="img--lg"
                src={bonacj}
                alt="Bonaventure C.J. Ugwu"
              />
            </div>
          </article>

        </article>
        
      </section>
    </>
  );
};

export default About;
