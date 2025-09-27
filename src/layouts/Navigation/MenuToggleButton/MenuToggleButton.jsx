// src/layouts/Navigation/MenuToggleButton/MenuToggleButton.jsx
import React from 'react';
import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger-menu-linear.svg';
import { ReactComponent as MenuCloseIcon } from 'assets/icons/round-close.svg';
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
        {isOpen ? <MenuCloseIcon aria-hidden="true" /> : <HamburgerIcon aria-hidden="true" />}
      </span>
    </button>
  );
};

export default MenuToggleButton;

