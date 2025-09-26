import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.scss';

// Imported icons
import HamburgerIcon from 'components/NavigationIcons/HamburgerIcon';
import MenuCloseIcon from 'components/NavigationIcons/MenuCloseIcon';
import ProfileIcon from 'components/NavigationIcons/ProfileIcon';

// Import Brand component
import Brand from 'components/Brand/Brand';

// Imported utility component
import ThemeToggle from 'components/Utilities/ThemeToggle/ThemeToggle';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation} aria-label="Main navigation">
        {/* Brand component and logo */}
        <NavLink to="/" className={styles.navigation__logo} onClick={handleLinkClick}>
          <Brand name="BonaventureCJ" />
        </NavLink>

        {/* Mobile menu toggle button */}
        <button
          className={styles.navigation__toggle}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <MenuCloseIcon /> : <HamburgerIcon />}
        </button>

        {/* Desktop menu and mobile side menu */}
        <div
          className={`${styles.navigation__menu} ${
            isOpen ? styles['navigation__menu--open'] : ''
          }`}
          id="navigation-menu"
        >
          {/* Mobile utility controls (visible inside side menu) */}
          <div className={styles.navigation__mobileUtilities}>
            <ProfileIcon className={styles.navigation__profileIcon} />
            <ThemeToggle />
          </div>

          {/* Navigation links list */}
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navigation__link} ${styles['navigation__link--active']}`
                    : styles.navigation__link
                }
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navigation__item}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navigation__link} ${styles['navigation__link--active']}`
                    : styles.navigation__link
                }
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </li>
            <li className={styles.navigation__item}>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navigation__link} ${styles['navigation__link--active']}`
                    : styles.navigation__link
                }
                onClick={handleLinkClick}
              >
                Skills
              </NavLink>
            </li>
            <li className={styles.navigation__item}>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navigation__link} ${styles['navigation__link--active']}`
                    : styles.navigation__link
                }
                onClick={handleLinkClick}
              >
                Projects
              </NavLink>
            </li>
            <li className={styles.navigation__item}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navigation__link} ${styles['navigation__link--active']}`
                    : styles.navigation__link
                }
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        
        {/* Profile icon and theme toggle for desktop view */}
        <div className={styles.navigation__utilities}>
          <ProfileIcon className={styles.navigation__profileIcon} />
          <ThemeToggle />
        </div>
      </nav>

      {/* Overlay to dim background when menu is open */}
      {isOpen && <div className={styles.navigation__overlay} onClick={toggleMenu}></div>}
    </header>
  );
};

export default MainNavigation;
