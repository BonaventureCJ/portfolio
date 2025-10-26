// src/pages/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.scss';
import ContactsCard from 'components/Cards/ContactsCard'; 
import ContactForm from 'components/forms/ContactForm/ContactForm';
import { contactItems, ctaMessage } from 'data/contact';
import Heading from 'components/Heading/Heading';

const Contact = () => {
  return (
    // Use aria-labelledby to explicitly link the section to its main heading for accessibility
    <section className={styles.contact} aria-labelledby="contact-main-title">
      <header className={styles.contact__header}>
        {/* ID to reference it with aria-labelledby */}
        <Heading level="h2" className={styles.contact__title} id="contact-main-title">
          Get in Touch
        </Heading>
      </header>

      <div className={styles.contact__content}>
        {/* Social Links Section */}
        {/* aria-label for clarity in screen readers */}
        <aside className={styles.contact__aside} aria-label="General Contact Information and Links">
          <Heading level="h3" className={styles.contact__cta}>
            {ctaMessage.general}
          </Heading>
          <div className={styles.contact__linksGrid}>
            {contactItems.map((link) => (
              <ContactsCard key={link.id} contact={link} />
            ))}
          </div>
        </aside>

        {/* Contact Form Section */}
        <section 
          className={styles.contact__formContainer} 
          id="contact-form-section"
          aria-labelledby="contact-form-title"
        >
          <Heading level="h3" className={styles.contact__cta} id="contact-form-title">
            {ctaMessage.form}
          </Heading>
          <ContactForm />
        </section>
      </div>
    </section>
  );
};

export default Contact;
