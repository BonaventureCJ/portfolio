// src/components/Heading/Heading.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';
import styles from './Heading.module.scss';

const Heading = ({ level, children, className, iconProps, ...rest }) => {
  const Tag = level;

  // Combine the base class, the dynamic level class, and any additional classes.
  const combinedClassName = `${styles.heading} ${styles[level]} ${className || ''}`.trim();

  return (
    <Tag className={combinedClassName} {...rest}>
      {/* Conditionally render the Icon if iconProps are provided */}
      {iconProps && (
        <Icon 
          {...iconProps} 
          // Best Practice: Rely on the parent container's CSS `gap` for spacing.
          // Only pass through user-provided classNames from iconProps.
          className={iconProps.className || ''} 
        />
      )}
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  iconProps: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    // You can add more specific proptypes here for other common icon props if desired
  }),
};

export default Heading;
