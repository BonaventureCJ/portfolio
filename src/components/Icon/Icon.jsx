// src/components/Icon/Icon.jsx
import React from 'react';
import { icons } from './icons';
import styles from './Icon.module.scss';

/**
 * A reusable component to render SVG icons dynamically.
 * @param {object} props
 * @param {string} props.icon - The name of the icon (e.g., 'Home', 'Settings').
 * @param {string} [props.className] - Additional class names applied directly to the SVG.
 * @param {object} [props...] - Other standard SVG props (onClick, aria-label, etc.).
 */
const Icon = ({
  icon,
  className = '',
  ...props
}) => {
  const Component = icons[icon];

  if (!Component) {
    console.warn(`Icon "${icon}" not found.`);
    return null;
  }
  
  // Combine base styles with user-provided classNames.
  const svgClasses = `${styles.baseIcon} ${className}`.trim();
  
  return (
    <Component
      className={svgClasses}
      {...props} 
    />
  );
};

export default Icon;
