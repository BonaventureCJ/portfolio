/* src/components/previews/AboutPreview/AboutPreview.jsx */
import { Link } from 'react-router-dom';
import styles from './AboutPreview.module.scss';
import { yearsOfExperience } from 'utils/helpers';

/**
 * A condensed "About" section for the homepage.
 @returns {JSX.Element} The About Preview component.
 */
const AboutPreview = () => {

  return (
    <section className={styles.aboutPreview}>
      <div className={styles.aboutPreview__container}>
        <div className={styles.aboutPreview__content}>
          <h2 className={styles.aboutPreview__heading}>About Me</h2>

          <p className={styles.aboutPreview__text}>
            As a Front-End Engineer with {yearsOfExperience}+ years of experience, I am passionate about Accessibility, SEO, Responsive Web Design, clean code, and creating intuitive UIs using Typescript, React.js and Next.js.
          </p>
          <p className={styles.aboutPreview__text}>
              As a firm believer in the open-source ethos, I've evolved from a user of essential tools to an active open-source contributor, demonstrating my ability to learn, apply and collaborate with other developers on complex technologies.
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

