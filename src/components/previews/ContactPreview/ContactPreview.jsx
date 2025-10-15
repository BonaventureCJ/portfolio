// src/components/previews/ContactPreview/ContactPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactPreview.module.scss';
import ContactsCard from 'components/Cards/ContactsCard';
import { contactItems } from 'data/contact';
import Button from 'components/Buttons/Button';
import Heading from 'components/Heading/Heading';

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
        <Heading level="h2" id="featured-contact-heading" className={styles.contactPreview__heading}>
          Connect with me
        </Heading>

        <p className={styles.contactPreview__description}>
          Let's connect and build something great together.
        </p>

        <div className={styles.contactPreview__flex}>
          {featuredContactItems.map((item) => (
            <ContactsCard key={item.id} contact={item} />
          ))}
        </div>
        <div className={styles.contactPreview__cta}>
          <Link
            to="/contact#contact-form-section"
            className={styles.contactLinkWrapper}
          >
            <Button
              variant="primary"
              size="medium"
              title="Navigate to the contact form on contact page"
            >
              Fill out a contact form
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
