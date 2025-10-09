// src/components/Footer/Footer.jsx
import React from 'react';
// Assuming you are using react-router-dom for navigation
import { Link } from 'react-router-dom';
import Brand from 'components/Brand/Brand';
import { contactItems } from 'data/contact';
import styles from './Footer.module.scss';

/**
 * The Footer component provides the footer for the website, containing the brand,
 * social media links, and a copyright notice.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footer__container}>
        {/* Branding Section */}
        <div className={styles['footer__brand-section']}>
          <Link to="/" className={styles['footer__brand-link']} aria-label="Back to homepage">
            <Brand name="BonaventureCJ" />
          </Link>
        </div>

        {/* Social Media Links Section */}
        <nav className={styles['footer__social-nav']} aria-label="Social media links">
          <h2 className={styles['footer__social-nav-heading']} id="footer-social-heading">Connect with me</h2>
          <ul className={styles['footer__social-list']} aria-labelledby="footer-social-heading">
            {contactItems
              .filter(item => item.type === 'social')
              .map(item => (
                <li key={item.id} className={styles['footer__social-item']}>
                  <a
                    href={item.url}
                    className={styles['footer__social-link']}
                    aria-label={item.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className={`${styles['footer__social-icon']} ${styles[item.className]}`} aria-hidden="true" />
                    <span className={styles['footer__social-link-text']}>{item.display}</span>
                  </a>
                </li>
              ))}
          </ul>
        </nav>

        {/* Contact Links Section */}
        <nav className={styles['footer__contact-nav']} aria-label="Contact links">
          <h2 className={styles['footer__contact-nav-heading']} id="footer-contact-heading">Get in touch</h2>
          <ul className={styles['footer__contact-list']} aria-labelledby="footer-contact-heading">
            {contactItems
              .filter(item => item.type === 'email' || item.type === 'whatsapp' || item.type === 'phone')
              .map(item => (
                <li key={item.id} className={styles['footer__contact-item']}>
                  <a
                    href={item.url}
                    className={styles['footer__contact-link']}
                    aria-label={item.ariaLabel}
                  >
                    <item.icon className={`${styles['footer__contact-icon']} ${styles[item.className]}`} aria-hidden="true" />
                    <span className={styles['footer__contact-link-text']}>{item.display}</span>
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>

      {/* Copyright Section */}
      <div className={styles['footer__copyright']}>
        <p className={styles['footer__copyright-text']}>
          &copy; {currentYear} <span className={styles['footer__copyright-owner']}>Bonaventure C.J. Ugwu.</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
