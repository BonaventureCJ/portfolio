// src/components/Hero/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
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
          {/* Primary CTA using react-router-dom Link and custom Button */}
          <Link to={primaryCta.url} className={styles.ctaLink} aria-label={primaryCta.ariaLabel}>
            <Button
              variant="primary"
              size="medium"
              title={primaryCta.title}
            >
              {primaryCta.label}
            </Button>
          </Link>

          {/* Secondary CTA using a standard anchor tag and custom Button */}
          <a
            href={secondaryCta.url}
            className={styles.ctaLink}
            aria-label={secondaryCta.ariaLabel}
            title={secondaryCta.title}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              size="medium"
            >
              {secondaryCta.label}
            </Button>
          </a>
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
