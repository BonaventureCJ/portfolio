import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.scss';

// Imported icons

import HamburgerIcon from 'components/NavigationIcons/HamburgerIcon';
import MenuCloseIcon from 'components/NavigationIcons/MenuCloseIcon';
import ProfileIcon from 'components/NavigationIcons/ProfileIcon';

// Import BrandLogo
import Brand from 'components/Brand/Brand';

// Imported utility component
import ThemeToggle from 'components/Utilities/ThemeToggle/ThemeToggle';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <div className={styles.header}>
        {/*
          Dynamic menu toggle button using imported SVG icons.
          aria-label changes based on menu state for better accessibility.
        */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <MenuCloseIcon /> : <HamburgerIcon />}
        </button>

        {/* Brand component */}
        <NavLink to="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          <Brand name="Jesus Christ" />
        </NavLink>

        {/* Side menu for mobile devices, slides from the left */}
        <div className={`${styles.sideMenuWrapper} ${isOpen ? styles.sideMenuOpen : ''}`}>
          <div className={styles.mobileUtilityControls}>
            <ProfileIcon className={styles.profileIcon} />
            <ThemeToggle />
          </div>

          <ul id="navigation-menu" className={styles.menu}>
            <li className={styles.item}>
              <NavLink to="/about" className={styles.link} onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/skills" className={styles.link} onClick={toggleMenu}>
                Skills
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/projects" className={styles.link} onClick={toggleMenu}>
                Projects
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
        {/* Profile icon and theme toggle for desktop view */}
        <div className={styles.utilityControls}>
          <ProfileIcon className={styles.profileIcon} />
          <ThemeToggle />
        </div>
      </div>

      {/* Overlay to dim background when menu is open */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </nav>
  );
};

export default MainNavigation;
