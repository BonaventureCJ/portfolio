import React from 'react';
import styles from './SocialLinksPreview.module.scss';
import { socialLinks } from 'data/contact';

/**
 * SocialLinksPreview Component
 * 
 * Displays a filtered list of social media links on the homepage,
 * using data from the centralized contact.js file.
 * Adheres to enterprise best practices for modularity and reusability.
 * 
 * @returns {JSX.Element} The SocialLinks Preview component.
 */
const SocialLinksPreview = () => {
  const featuredLinks = socialLinks.filter(link => link.isFeatured);

  return (
    <section className={styles.socialLinksPreview} aria-labelledby="social-links-heading">
      <div className={styles.socialLinksPreview__container}>
        <h2 id="social-links-heading" className={styles.socialLinksPreview__heading}>
          Connect with me
        </h2>
        <ul className={styles.socialLinksPreview__list} role="list" aria-label="Social Media Links">
          {featuredLinks.map(link => (
            <li key={link.id} className={styles.socialLinksPreview__item}>
              <a 
                href={link.url}
                className={styles.socialLinksPreview__link}
                aria-label={link.label}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className={styles.socialLinksPreview__icon} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialLinksPreview;
