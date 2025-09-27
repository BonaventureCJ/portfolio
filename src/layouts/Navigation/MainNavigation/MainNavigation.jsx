import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.scss';

// Imported icons
import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger-menu-linear.svg';
import { ReactComponent as MenuCloseIcon } from 'assets/icons/round-close.svg';

// Import Brand component
import Brand from 'components/Brand/Brand';



// Import navigation data
import NavItems from 'data/nav-items';
//import UtilityIcons from '../UtilityIcons/UtilityIcons';
import UtilityIcons from 'layouts/Navigation/UtilityIcons/UtilityIcons';



const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Helper function to render the navigation links
  const renderNavLinks = () => (
    NavItems.map((item) => (
      <li key={item.path} className={styles.navigation__item}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? `${styles.navigation__link} ${styles['navigation__link--active']}`
              : styles.navigation__link
          }
          onClick={handleLinkClick}
        >
          {item.label}
        </NavLink>
      </li>
    ))
  );

  return (
    <header className={styles.header}>
      <nav className={styles.navigation} aria-label="Main navigation">
        {/* Brand component and logo */}
        <NavLink to="/" className={styles.navigation__logo} onClick={handleLinkClick}>
          <Brand name="BonaventureCJ" />
        </NavLink>

        {/* Desktop menu */}
        <div className={styles.navigation__menu}>
          <ul className={styles.navigation__list}>
            {renderNavLinks()}
          </ul>
        </div>
        
        {/* Utility icons that are always in the header */}
       <UtilityIcons/>

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
            {renderNavLinks()}
          </ul>
        </div>
        
        {/* Overlay to dim background when menu is open */}
        {isOpen && <div className={styles.navigation__overlay} onClick={toggleMenu}></div>}
      </nav>
    </header>
  );
};

export default MainNavigation;
