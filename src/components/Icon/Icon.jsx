// src/components/Icon/Icon.jsx
import React from 'react';
import { icons } from './icons';
import styles from './Icon.module.scss'; // Import the CSS module

/**
 * A reusable component to render SVG icons dynamically.
 * @param {object} props
 * @param {string} props.icon - The name of the icon (e.g., 'Home', 'Settings').
 * @param {string} [props.className] - Additional class names applied directly to the SVG.
 * @param {boolean} [props.isClickable] - Adds a clickable cursor style (managed via Icon.module.scss).
 * @param {object} [props...] - Other standard SVG props (onClick, aria-label, etc.).
 */
const Icon = ({
  icon,
  className = '',
  isClickable = false,
  ...props
}) => {
  const Component = icons[icon];

  if (!Component) {
    console.warn(`Icon "${icon}" not found.`);
    return null;
  }
  
  // Base style from module + user-provided classNames
  // 'baseIcon' ensures SVG defaults (e.g., display settings) are applied
  const svgClasses = `${styles.baseIcon} ${className}`.trim();
  const wrapperClasses = isClickable ? styles.clickable : '';
  
  return (
    <div className={wrapperClasses}> 
      <Component
        className={svgClasses} // Pass all class names directly to the SVG component
        // width/height/fill props are GONE and managed entirely by CSS now
        {...props} 
      />
    </div>
  );
};

export default Icon;
