import React from 'react';
import styles from './Contact.module.scss';
import ContactsCard from 'components/Cards/ContactsCard';
import ContactForm from 'components/forms/ContactForm/ContactForm';
import { contactItems, ctaMessage } from 'data/contact';
import Heading from 'components/Heading/Heading';

const Contact = () => {
  return (
    <section className={styles.contact} aria-labelledby="contact-main-title">
      <header className={styles.contact__header}>
        <Heading 
          level="h1" 
          className={styles.contact__title} 
          id="contact-main-title"
          iconProps={{ icon: 'TouchTripleOutline' }}
        >
          Get in Touch
        </Heading>
      </header>

      <div className={styles.contact__content}>
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
