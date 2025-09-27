// src/layouts/Navigation/MainNavigation.jsx
import React, { useState } from 'react';
import styles from './MainNavigation.module.scss';

// Component imports
import NavigationBrand from './NavigationBrand/NavigationBrand';
import DesktopNav from './DesktopNav/DesktopNav';
import MobileNav from './MobileNav/MobileNav';
import MenuToggleButton from './MenuToggleButton/MenuToggleButton';
import UtilityIcons from './UtilityIcons/UtilityIcons'; // Assuming UtilityIcons is also extracted

// Navigation data
import NavItems from 'data/nav-items';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.navigation}>
      <div className={styles.navigation__wrapper}>
        <NavigationBrand onLinkClick={handleLinkClick} />
        
        {/* Desktop and Mobile navigation */}
        <DesktopNav navItems={NavItems} onLinkClick={handleLinkClick} />
        
        <div className={styles.navigation__utility}>
          <UtilityIcons />
          <MenuToggleButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>

        <MobileNav
          isOpen={isOpen}
          navItems={NavItems}
          onLinkClick={handleLinkClick}
        />
        
        {/* Overlay for mobile view */}
        {isOpen && (
          <div className={styles['navigation__overlay']} onClick={toggleMenu} aria-hidden="true" />
        )}
      </div>
    </header>
  );
};

export default MainNavigation;
