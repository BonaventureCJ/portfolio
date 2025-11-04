// src/components/Hero/Hero.jsx
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
          {/* Primary CTA: "View My Work" with a right-aligned icon */}
          <Button
            variant="primary"
            size="medium"
            title={primaryCta.title}
            to={primaryCta.url}
            aria-label={primaryCta.ariaLabel}
            icon={{ name: 'FaArrowRight', prefix: 'fa' }} // Pass icon details here
            iconPosition="right"
          >
            {primaryCta.label}
          </Button>

          {/* Secondary CTA: "Download Resume" with a left-aligned icon */}
          <Button
            variant="secondary"
            size="medium"
            href={secondaryCta.url}
            aria-label={secondaryCta.ariaLabel}
            title={secondaryCta.title}
            download
            target="_blank"
            rel="noopener noreferrer"
            icon={{ name: 'FaDownload', prefix: 'fa' }} // Pass icon details here
            iconPosition="right"
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
