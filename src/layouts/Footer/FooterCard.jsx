// src/layouts/Footer/FooterCard.jsx
import React from 'react';
import Heading from 'components/Heading/Heading';
import Icon from 'components/Icon/Icon';
import styles from './FooterCard.module.scss';

/**
 * A reusable component for rendering a card-like list of links in the footer.
 * @param {object} props
 * @param {string} props.headingText - The main heading for the card.
 * @param {string} props.headingId - The unique ID for the heading for accessibility.
 * @param {object} props.headingIcon - The icon props for the heading.
 * @param {Array<object>} props.items - An array of link items to display.
 * @param {string} props.listAriaLabelledBy - The ID of the heading that labels this list.
 * @returns {JSX.Element} The rendered FooterCard component.
 */
const FooterCard = ({ headingText, headingId, headingIcon, items, listAriaLabelledBy }) => {
    return (
        <nav className={styles.footer__nav} aria-label={headingText}>
            <Heading
                level="h2"
                className={styles['footer__nav-heading']}
                id={headingId}
                iconProps={headingIcon}
                textAlign="left"
            >
                {headingText}
            </Heading>
            <ul className={styles.footer__list} aria-labelledby={listAriaLabelledBy}>
                {items.map(item => (
                    <li key={item.id} className={styles['footer__list-item']}>
                        <a
                            href={item.url}
                            className={`${styles.footer__link} ${item.className ? styles[item.className] : ''}`}
                            aria-label={item.ariaLabel}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon icon={item.icon} className={styles.footer__icon} />
                            <span className={styles['footer__link-text']}>{item.display}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default FooterCard;
