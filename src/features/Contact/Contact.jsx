import styles from './Contact.module.scss';
import ContactsCard from 'components/Cards/ContactsCard';
import ContactForm from 'components/ContactForm/ContactForm';
import { socialLinks, contactInfo } from 'data/contact';


const Contact = () => {
  return (
    <section className={styles.contact}>
      <header className={styles['contact__header']}>
        <h2 className={styles['contact__title']}>Get in Touch</h2>
      </header>

      <div className={styles['contact__content']}>
        {/* Social Links Section */}
        <aside className={styles['contact__aside']}>
          <h3 className={styles['contact__cta']}>{contactInfo.ctaMessage.general}</h3>
          <div className={styles['contact__links-grid']}>
            {socialLinks.map((link) => (
              <ContactsCard key={link.id} contact={{ ...link, url: link.url }} />
            ))}
            {/* Direct Contact Links */}
            <ContactsCard
              contact={{
                id: contactInfo.whatsapp.number,
                name: 'WhatsApp',
                icon: contactInfo.whatsapp.icon,
                url: `${contactInfo.whatsapp.protocol}${contactInfo.whatsapp.number}`,
                label: contactInfo.whatsapp.label,
              }}
            />
            <ContactsCard
              contact={{
                id: contactInfo.phone.number,
                name: 'SMS',
                icon: contactInfo.phone.icon,
                url: `${contactInfo.phone.protocol}${contactInfo.phone.number}`,
                label: contactInfo.phone.label,
              }}
            />
            <ContactsCard
              contact={{
                id: contactInfo.email.primary,
                name: 'Email',
                icon: contactInfo.email.icon,
                url: `${contactInfo.email.protocol}${contactInfo.email.primary}`,
                label: contactInfo.email.label,
              }}
            />
          </div>
        </aside>

        {/* Contact Form Section */}
        <div className={styles['contact__form-container']}>
          <h3 className={styles['contact__cta']}>{contactInfo.ctaMessage.form}</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
  };
export default Contact;
