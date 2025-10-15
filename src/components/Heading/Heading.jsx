// src/components/Heading/Heading.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

/**
 * A reusable heading component for semantic and accessible titles.
 * @param {object} props - The component props.
 * @param {string} props.level - The heading level (h1, h2, h3, h4, h5, h6).
 * @param {string} props.className - Additional CSS classes for custom styling.
 * @param {React.ReactNode} props.children - The content of the heading.
 * @param {object} props.rest - Any other native HTML attributes.
 */
const Heading = ({ level, children, className, ...rest }) => {
  const Tag = level;

  // Use a template literal to combine the class name with optional addtional class name(s)
  const combinedClassName = `${styles.heading} ${className || ''}`.trim();

  return (
    <Tag className={combinedClassName} {...rest}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Heading;
