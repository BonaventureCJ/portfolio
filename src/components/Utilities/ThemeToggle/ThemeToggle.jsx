// src/components/Utilities/ThemeToggle/ThemeToggle.jsx

import { useTheme } from 'contexts/ThemeContext';

import styles from './ThemeToggle.module.scss';
import { ReactComponent as LightThemeIcon } from 'assets/icons/sun.svg';
import { ReactComponent as DarkThemeIcon } from 'assets/icons/moon-rising-filled-loop.svg';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      // Update the `title` attribute for the hover tooltip.
      title={`You are on ${theme} theme, click to toggle`}
      aria-label="Toggle dark and light theme"
      aria-pressed={isDark}
    >
      <div className={styles.iconWrapper}>
        <LightThemeIcon
          aria-hidden="true"
          className={`${styles.icon} ${isDark ? styles.hidden : styles.visible}`}
        />
        <DarkThemeIcon
          aria-hidden="true"
          className={`${styles.icon} ${isDark ? styles.visible : styles.hidden}`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
