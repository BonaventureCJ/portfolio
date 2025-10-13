import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';
import { heroData } from 'data/hero';

const Hero = () => {
  const { name, title, description, primaryCta, secondaryCta, profileImage } = heroData;

  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={styles.heroContent}>
        <h1 id="hero-heading" className={styles.heroTitle}>{name}</h1>
        <h2 className={styles.heroSubtitle}>{title}</h2>
        <p className={styles.heroDescription}>{description}</p>
        <div className={styles.ctaContainer}>
          <Link
            to={primaryCta.url}
            className={`${styles.button} ${styles['button--primary']}`}
            aria-label={primaryCta.ariaLabel}
            title={primaryCta.title}
          >
            {primaryCta.label}
          </Link>
          <a
            href={secondaryCta.url}
            className={`${styles.button} ${styles['button--secondary']}`}
            aria-label={secondaryCta.ariaLabel}
            title={secondaryCta.title}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            {secondaryCta.label}
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
