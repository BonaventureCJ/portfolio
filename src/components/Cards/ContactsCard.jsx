import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsCard.module.scss';

/**
 * Renders a card displaying a single contact method (social link, email, etc.).
 *
 * @param {object} props - The component's props.
 * @param {object} props.contact - The contact data object.
 * @param {object} props.contact.icon - The imported React component for the icon.
 * @param {string} props.contact.label - A descriptive label for the contact method.
 * @param {string} props.contact.name - The name of the contact method (e.g., "LinkedIn").
 * @param {string} props.contact.url - The full URL for the contact link.
 */
const ContactsCard = ({ contact }) => {
  const { icon: Icon, label, name, url } = contact;

  return (
    <article className={styles['contacts-card']}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={styles['contacts-card__link']}
      >
        <div className={styles['contacts-card__icon-container']}>
          {Icon && (
            <Icon
              className={styles['contacts-card__icon']}
              aria-hidden="true" // Hide decorative icon from screen readers
            />
          )}
        </div>
        <span className={styles['contacts-card__name']}>
          {name}
        </span>
      </a>
    </article>
  );
};

ContactsCard.propTypes = {
  contact: PropTypes.shape({
    icon: PropTypes.elementType,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsCard;

