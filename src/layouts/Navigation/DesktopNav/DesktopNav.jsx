// src/layouts/Navigation/DesktopNav/DesktopNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactIcon from 'components/ReactIcon/ReactIcon';
import styles from './DesktopNav.module.scss';

const DesktopNav = ({ navItems, onLinkClick }) => {
  return (
    <nav className={styles.desktopNav} aria-label="Main navigation">
      <ul className={styles['desktopNav__list']}>
        {navItems.map((item) => (
          <li key={item.path} className={styles['desktopNav__item']}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `${styles['desktopNav__link']} ${styles['desktopNav__link--active']}`
                  : styles['desktopNav__link']
              }
              onClick={onLinkClick}
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
              title={`Go to ${item.label}`}
            >
              <ReactIcon
                name={item.icon.name}
                prefix={item.icon.prefix}
                className={styles['desktopNav__icon']}
              />
              <span className={styles['desktopNav__label']}>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
