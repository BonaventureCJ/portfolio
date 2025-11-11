// src/components/Utilities/ThemeToggle/ThemeToggle.jsx
import React from 'react';
import Icon from 'components/Icon/Icon';
import { useTheme } from 'hooks/useTheme';
import styles from './ThemeToggle.module.scss';

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
        <Icon
          icon="LightThemeIcon"
          aria-hidden="true"
          className={`${styles.icon} ${isDark ? styles.hidden : styles.visible}`}
        />
        <Icon
          icon="DarkThemeIcon"
          aria-hidden="true"
          className={`${styles.icon} ${isDark ? styles.visible : styles.hidden}`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
