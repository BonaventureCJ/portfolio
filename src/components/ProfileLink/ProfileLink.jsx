// src/components/ProfileLink/ProfileLink.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';
import styles from './ProfileLink.module.scss';

const ProfileLink = ({ profile }) => {

  // Destructure `iconName`
  const { icon: iconName, url, label, className, ariaLabel, id } = profile;

  if (!iconName || !url) {
    console.error('ProfileLink component requires an icon name string and url in the profile object.');
    return null;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.profileLink} ${className || ''}`}
      aria-label={ariaLabel || label}
      title={label}
      id={id}
    >
      <Icon icon={iconName} className={styles.profileIcon} />
    </a>
  );
};

ProfileLink.propTypes = {
  profile: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    label: PropTypes.string,
    hoverText: PropTypes.string,
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProfileLink;
