// src/components/Hero.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from './Hero.module.scss';
import { heroData } from 'data/hero';

const Hero = () => {
  const { name, title, description, primaryCta, secondaryCta, profileImage } = heroData;

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{name}</h1>
        <h2 className={styles.heroSubtitle}>{title}</h2>
        <p className={styles.heroDescription}>{description}</p>
        <div className={styles.ctaContainer}>
          <Link to={primaryCta.url} className={styles.primaryCta}>
            {primaryCta.label}
          </Link>
          <a href={secondaryCta.url} className={styles.secondaryCta}>
            {secondaryCta.label}
          </a>
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <img
          src={profileImage.url}
          alt={profileImage.alt}
          className={styles.profileImage}
        />
      </div>
    </section>
  );
};

export default Hero;
