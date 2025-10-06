// src/components/Utilities/ThemeToggle/ThemeToggle.jsx
import { useTheme } from 'hooks/useTheme';

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
