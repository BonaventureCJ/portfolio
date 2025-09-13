
import styles from './About.module.scss';
import skills from 'data/skills';

import profilePhoto from 'assets/images/about/BonaventureCJUgwu.png';


const About = () => {
  // Filter for major skills to display in this condensed section
  const majorSkills = skills.filter(skill => skill.level === 'Major' && skill.isFeatured);

  return (
    <section className={styles.about}>
      <div className={styles['about__content']}>
        {/* SEO & WCAG: Use a heading tag to provide a clear, hierarchical structure. */}
        <h2 className={styles['about__title']}>About Me</h2>
        <div className={styles['about__intro']}>
          <div className={styles['about__photo-container']}>
            <img
              src={profilePhoto}
              alt="Bonaventure C.J. Ugwu's profile"
              className={styles['about__photo']}
              loading="lazy"
            />
          </div>
          <div className={styles['about__text-container']}>
            <p className={styles['about__summary']}>
              Front-end developer with 3+ years of experience building performant, user-focused web
              applications using React.js, Next.js, and TypeScript. Passionate about responsive
              design, clean code, and creating intuitive UIs. Proven track record of delivering
              scalable web solutions using modern frameworks and best practices.
            </p>
            <p className={styles['about__summary']}>
              Strong background in healthcare, statistical data analyses and scientific research, bringing analytical
              precision to development workflows.
            </p>
          </div>
        </div>

        <a
          href="/assets/documents/resume.pdf" // Placeholder path for your resume
          className={`${styles['about__button']} ${styles['about__button--resume']}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Bonaventure's Resume (PDF)"
        >
          Download Resume
        </a>

        <div className={styles['about__skills']}>
          <h3 className={styles['about__skills-heading']}>My Major Skills</h3>
          {/* Use a list for the skills for better semantics and accessibility */}
          <ul className={styles['about__skills-list']}>
            {majorSkills.map((skill) => (
              <li key={skill.id} className={styles['about__skills-item']}>
                {skill.icon && <skill.icon className={styles['about__skills-icon']} />}
                <span className={styles['about__skills-name']}>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

