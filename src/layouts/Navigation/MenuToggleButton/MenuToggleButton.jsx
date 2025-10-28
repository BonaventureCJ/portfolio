// src/layouts/Navigation/MenuToggleButton/MenuToggleButton.jsx
import React from 'react';
import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger-menu-linear.svg';
import { ReactComponent as MenuCloseIcon } from 'assets/icons/round-close.svg';
import styles from './MenuToggleButton.module.scss';

const MenuToggleButton = ({ isOpen, toggleMenu }) => {
  // NOTE: This component renders a native `<button>` element instead of using the
  // shared `Button` component due to extensive custom styling and unique
  // accessibility attributes required for the menu toggle functionality that
  // are not supported by the generic button component structure.
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
