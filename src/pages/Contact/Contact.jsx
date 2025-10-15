//src/pages/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.scss';
import ContactsCard from 'components/Cards/ContactsCard';
import ContactForm from 'components/ContactForm/ContactForm';
import { contactItems, ctaMessage } from 'data/contact';
import Heading from 'components/Heading/Heading';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <header className={styles.contact__header}>
        <Heading level="h2" className={styles.contact__title}>
          Get in Touch
        </Heading>
      </header>

      <div className={styles.contact__content}>
        {/* Social Links Section */}
        <aside className={styles.contact__aside}>
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
        <div className={styles.contact__formContainer} id="contact-form-section">
          <Heading level="h3" className={styles.contact__cta}>
            {ctaMessage.form}
          </Heading>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
