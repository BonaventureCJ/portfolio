import { Link } from 'react-router-dom';
import styles from './AboutPreview.module.scss';
import { heroData } from 'data/hero';

/**
 * A condensed "About" section for the homepage.
 @returns {JSX.Element} The About Preview component.
 */
const AboutPreview = () => {
  const { yearsOfExperience } = heroData;

  return (
    <section className={styles.aboutPreview}>
      <div className={styles.aboutPreview__container}>
        <div className={styles.aboutPreview__content}>
          <h2 className={styles.aboutPreview__heading}>About Me</h2>
          
          <p className={styles.aboutPreview__text}>
            As a Front-End Engineer with over {yearsOfExperience}+ years of experience, I specialize in building performant and user-focused web applications with React.js, Next.js, and TypeScript.
          </p>

          <p className={styles.aboutPreview__text}>
            My background in healthcare and scientific research has equipped me with a unique analytical approach to development, allowing me to build scalable solutions while prioritizing an intuitive user experience.
          </p>
          
          <Link
            to="/about"
            className={`${styles.aboutPreview__cta} ${styles.ctaButton}`}
            aria-label="Learn more about Bonaventure C.J. Ugwu"
            title="Navigate to the full About page"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

