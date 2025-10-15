import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = ({ level, children, className, ...rest }) => {
  const Tag = level;

  // Combine the base class, the dynamic level class, and any additional classes.
  // The level class (e.g., `styles.h1`) targets the specific size in the SCSS module.
  const combinedClassName = `${styles.heading} ${styles[level]} ${className || ''}`.trim();

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
