// src/layouts/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Brand from 'components/Brand/Brand';
import FooterCard from './FooterCard';
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

  const socialItems = contactItems.filter(item => item.type === 'social');
  const contactLinkItems = contactItems.filter(item => ['email', 'whatsapp', 'phone'].includes(item.type));

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
        <FooterCard
          headingText="Connect with me"
          headingId="footer-social-heading"
          headingIcon={{ icon: 'GlobeShare' }}
          items={socialItems}
          listAriaLabelledBy="footer-social-heading"
        />

        {/* Contact Links Section */}
        <FooterCard
          headingText="Get in touch"
          headingId="footer-contact-heading"
          headingIcon={{ icon: 'TouchTripleOutline' }}
          items={contactLinkItems}
          listAriaLabelledBy="footer-contact-heading"
        />
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
