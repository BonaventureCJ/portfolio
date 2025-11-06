// src/layouts/Navigation/MobileNav/MobileNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactIcon from 'components/ReactIcon/ReactIcon';
import styles from './MobileNav.module.scss';

const MobileNav = ({ isOpen, navItems, onLinkClick }) => {
  const menuClass = `${styles.mobileNav} ${isOpen ? styles['mobileNav--open'] : ''}`;

  return (
    <nav
      className={menuClass}
      aria-label="Mobile navigation"
      id="navigation-menu"
      hidden={!isOpen}
    >
      <ul className={styles['mobileNav__list']}>
        {navItems.map((item) => (
          <li key={item.path} className={styles['mobileNav__item']}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `${styles['mobileNav__link']} ${styles['mobileNav__link--active']}`
                  : styles['mobileNav__link']
              }
              onClick={onLinkClick}
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
            >
              <ReactIcon
                name={item.icon.name}
                prefix={item.icon.prefix}
                className={styles['mobileNav__icon']}
              />
              <span className={styles['mobileNav__label']}>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
