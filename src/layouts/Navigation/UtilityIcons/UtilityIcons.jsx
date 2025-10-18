// src/layouts/Navigation/UtilityIcons/UtilityIcons.jsx
import React from 'react';
import PropTypes from 'prop-types';
//import the themeToggle
import ThemeToggle from 'components/Utilities/ThemeToggle/ThemeToggle';
//Import the ProfileLink Component
import ProfileLink from 'components/ProfileLink/ProfileLink';
// Import the profiles dataset
//import profiles from 'data/profiles';
import { contactItems } from 'data/contact'; //ReUse contact.js data;
import styles from './UtilityIcons.module.scss';

// Use find() to get the single GitHub profile object
const githubProfile = contactItems.find(contact => contact.name === 'GitHub');



const UtilityIcons = () => {
  // Use a semantically appropriate element. An unordered list `<ul>`
  // is a good choice for a group of related navigation/utility links.
  return (
    <ul
      className={styles['utility-icons']}
      role="list" // Explicitly defines it as a list for screen readers
      aria-label="Utility Links" // Provides an accessible name for the list
    >
      {/* Conditionally render the ProfileLink if a valid profile is passed */}
      {githubProfile && (
        <li className={styles['utility-icons__item']}>
          <ProfileLink profile={githubProfile} />
        </li>
      )}
      <li className={styles['utility-icons__item']}>
        <ThemeToggle />
      </li>
    </ul>
  );
};

UtilityIcons.propTypes = {
  // PropType validation to ensure `githubProfile` is correctly shaped.
  // This makes the component more robust and catches errors early.
  githubProfile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
    url: PropTypes.string.isRequired,
    label: PropTypes.string,
    ariaLabel: PropTypes.string,
  }),
};

UtilityIcons.defaultProps = {
  githubProfile: null,
};

export default UtilityIcons;
