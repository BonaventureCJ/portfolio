import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileLink.module.scss';

const ProfileLink = ({ profile }) => {
  
  const { icon: Icon, url, label, className, ariaLabel, id } = profile;
  console.log(profile.className);

  if (!Icon || !url) {
    console.error('ProfileLink component requires an Icon and url in the profile object.');
    return null;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.profileLink} ${className || ''}`}
      aria-label={ariaLabel || label}
      title={label} // Use the new hoverText property for the tooltip
      id={id}
    >
      <Icon className={styles.profileIcon} />
    </a>
  );
};

ProfileLink.propTypes = {
  profile: PropTypes.shape({
    Icon: PropTypes.elementType.isRequired,
    url: PropTypes.string.isRequired,
    label: PropTypes.string,
    hoverText: PropTypes.string, // New property for validation
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProfileLink;
