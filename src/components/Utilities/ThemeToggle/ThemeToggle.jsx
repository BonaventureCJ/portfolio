// src/components/Utility/ThemeToggle/ThemeToggle.jsx

import { useTheme } from 'contexts/ThemeContext';

import styles from './ThemeToggle.module.scss';
//import { ReactComponent as LightThemeIcon } from 'assets/nav-icons-all/sunny-outline-loop.svg';
import { ReactComponent as LightThemeIcon } from 'assets/nav-icons-all/sunny-filled-loop.svg';
import { ReactComponent as DarkThemeIcon } from 'assets/nav-icons-all/moon-rising-filled-loop.svg';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className={styles.iconWrapper}>
        <LightThemeIcon
          className={`${styles.icon} ${theme === 'light' ? styles.visible : styles.hidden}`}
        />
        <DarkThemeIcon
          className={`${styles.icon} ${theme === 'dark' ? styles.visible : styles.hidden}`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
