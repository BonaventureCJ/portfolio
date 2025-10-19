// src/components/Hero/Hero.jsx (Updated to use polymorphic Button)
import React from 'react';
import styles from './Hero.module.scss';
import { heroData } from 'data/hero';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';

const Hero = () => {
  const { name, title, description, primaryCta, secondaryCta, profileImage } = heroData;

  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={styles.heroContent}>
        <Heading level="h1" id="hero-heading" className={styles.heroTitle}>
          {name}
        </Heading>
        <Heading level="h2" className={styles.heroSubtitle}>
          {title}
        </Heading>

        <p className={styles.heroDescription}>{description}</p>
        <div className={styles.ctaContainer}>
          {/* Primary CTA using the polymorphic Button component */}
          {/* We use the 'to' prop for react-router-dom internal navigation */}
          <Button
            variant="primary"
            size="medium"
            title={primaryCta.title}
            to={primaryCta.url} // <-- This tells Button to render a <Link>
            aria-label={primaryCta.ariaLabel}
            // Optional: If styles are needed for .ctaLink class, pass it here
            // className={styles.ctaLink} 
          >
            {primaryCta.label}
          </Button>

          {/* Secondary CTA using the polymorphic Button component */}
          {/* We use the 'href' prop for standard anchor tag functionality */}
          <Button
            variant="secondary"
            size="medium"
            href={secondaryCta.url} // <-- This tells Button to render an <a> tag
            aria-label={secondaryCta.ariaLabel}
            title={secondaryCta.title}
            download
            target="_blank"
            rel="noopener noreferrer"
            // Optional: If styles are needed for.ctaLink class, pass it here
            // className={styles.ctaLink}
          >
            {secondaryCta.label}
          </Button>
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <img
          src={profileImage.url}
          alt={profileImage.alt}
          className={styles.profileImage}
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
