// src/components/ContactPreview.jsx

import React from 'react';
import styles from './ContactPreview.module.scss';
import ContactsCard from 'components/Cards/ContactsCard';
import { contactItems } from 'data/contact';

/**
 * ContactPreview Component
 *
 * Displays a curated selection of featured contact options on the homepage,
 * using data from the centralized contact.js file.
 *
 * @returns {JSX.Element} The Contact Preview component.
 */
const ContactPreview = () => {
  // Filter for items marked as featured for the homepage display.
  const featuredContactItems = contactItems.filter((item) => item.isFeatured);

  return (
    <section className={styles.contactPreview} aria-labelledby="featured-contact-heading">
      <div className={styles.contactPreview__container}>
        <h2 id="featured-contact-heading" className={styles.contactPreview__heading}>
          Connect with me
        </h2>
        <p className={styles.contactPreview__description}>
          Let's connect and build something great together.
        </p>

        <div className={styles.contactPreview__grid}>
          {featuredContactItems.map((item) => (
            <ContactsCard key={item.id} contact={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;


