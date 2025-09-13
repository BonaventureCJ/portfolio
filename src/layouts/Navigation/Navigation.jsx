// src/layouts/Navigation/Navigation.jsx
import { NavLink } from 'react-router-dom';
import ThemeToggle from 'components/Utilities/ThemeToggle/ThemeToggle';

// Import your locally-scoped SCSS module for styling
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <header className={styles.navigation}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
              }
            >
              About
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
              }
            >
              Skills
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
              }
            >
              Projects
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ThemeToggle /> {/* Add the ThemeToggle component here */}
      </nav>
    </header>
  );
}

export default Navigation;
