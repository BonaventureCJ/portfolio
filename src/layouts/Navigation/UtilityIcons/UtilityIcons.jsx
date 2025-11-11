// src/layouts/Navigation/UtilityIcons/UtilityIcons.jsx
import React from 'react';
import ThemeToggle from 'components/Utilities/ThemeToggle/ThemeToggle';
import ProfileLink from 'components/ProfileLink/ProfileLink';
import { contactItems } from 'data/contact';
import styles from './UtilityIcons.module.scss';

/**
 * UtilityIcons component displays utility links like a theme toggle and a profile link.
 *
 * @returns {JSX.Element} The rendered list of utility icons.
 */
const UtilityIcons = () => {
  // Use find() to get the single GitHub profile object
  const githubProfile = contactItems.find(contact => contact.name === 'GitHub');

  return (
    <ul
      className={styles['utility-icons']}
      role="list"
      aria-label="Utility Links"
    >
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

export default UtilityIcons;
