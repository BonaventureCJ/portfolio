import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.scss';

import BrandLogo from 'components/NavigationIcons/BrandLogo';
import HamburgerIcon from 'components/NavigationIcons/HamburgerIcon';
import MenuCloseIcon from 'components/NavigationIcons/MenuCloseIcon';
import ProfileIcon from 'components/NavigationIcons/ProfileIcon';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.header}>
        {/* Toggle button is the first child of the header for left positioning */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
        >
          {/* Screen reader-only text for accessibility */}
          <span className={styles.srOnly}>Menu</span>
          <span className={styles.hamburgerIcon}></span>
        </button>
        {/* Logo is now on the right side of the header */}
        <NavLink to="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          Your Logo
        </NavLink>
      </div>

      {/* Side menu for mobile devices, slides from the left */}
      <div className={`${styles.sideMenuWrapper} ${isOpen ? styles.sideMenuOpen : ''}`}>
        <ul id="navigation-menu" className={styles.menu}>
          <li className={styles.item}>
            <NavLink to="/about" className={styles.link} onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/services" className={styles.link} onClick={toggleMenu}>
              Services
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/contact" className={styles.link} onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay to dim background when menu is open */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </nav>
  );
};

export default MainNavigation;
