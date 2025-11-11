// src/layouts/Navigation/MenuToggleButton/MenuToggleButton.jsx
import React from 'react';
import Icon from 'components/Icon/Icon';
import styles from './MenuToggleButton.module.scss';

const MenuToggleButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className={styles.menuToggleButton}
      onClick={toggleMenu}
      aria-expanded={isOpen}
      aria-controls="navigation-menu"
      aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
      title={isOpen ? 'Close menu' : 'Open menu'}
    >
      <span className={styles.menuToggleButton__icon}>
        {isOpen ? (
          <Icon icon="MenuCloseIcon" aria-hidden="true" />
        ) : (
          <Icon icon="HamburgerIcon" aria-hidden="true" />
        )}
      </span>
    </button>
  );
};

export default MenuToggleButton;
