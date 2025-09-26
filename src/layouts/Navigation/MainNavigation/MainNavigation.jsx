import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.scss';

// Imported icons
import HamburgerIcon from 'components/NavigationIcons/HamburgerIcon';
import MenuCloseIcon from 'components/NavigationIcons/MenuCloseIcon';

// Import Brand component
import Brand from 'components/Brand/Brand';

// Import utility component
import ThemeToggle from 'components/Utilities/ThemeToggle/ThemeToggle';
import ProfileIcon from 'components/NavigationIcons/ProfileIcon';

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

        {/* Desktop menu */}
        <div className={styles.navigation__menu}>
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
        
        {/* Utility icons that are always in the header */}
        <div className={styles.navigation__utilities}>
          <ProfileIcon className={styles.navigation__profileIcon} />
          <ThemeToggle />
        </div>

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
        
        {/* Mobile side menu (contains only links) */}
        <div
          className={`${styles.navigation__mobileMenu} ${
            isOpen ? styles['navigation__mobileMenu--open'] : ''
          }`}
          id="navigation-menu"
        >
          <ul className={styles.navigation__mobileList}>
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
        
        {/* Overlay to dim background when menu is open */}
        {isOpen && <div className={styles.navigation__overlay} onClick={toggleMenu}></div>}
      </nav>
    </header>
  );
};

export default MainNavigation;
