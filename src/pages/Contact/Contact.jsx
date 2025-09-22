import React from 'react';
import styles from './Contact.module.scss';
import ContactsCard from 'components/Cards/ContactsCard';
import ContactForm from 'components/ContactForm/ContactForm';
import { contactItems, ctaMessage } from 'data/contact';

const Contact = () => {

  return (
    <section className={styles.contact}>
      <header className={styles.contact__header}>
        <h2 className={styles.contact__title}>Get in Touch</h2>
      </header>

      <div className={styles.contact__content}>
        {/* Social Links Section */}
        <aside className={styles.contact__aside}>
          <h3 className={styles.contact__cta}>{ctaMessage.general}</h3>
          <div className={styles.contact__linksGrid}>
            {contactItems.map((link) => (
              <ContactsCard key={link.id} contact={link} />
            ))}
          </div>
        </aside>

        {/* Contact Form Section */}
        <div className={styles.contact__formContainer}>
          <h3 className={styles.contact__cta}>{ctaMessage.form}</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
