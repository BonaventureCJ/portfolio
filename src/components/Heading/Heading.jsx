// src/components/Heading/Heading.jsx

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';
import styles from './Heading.module.scss';

const Heading = ({ level, children, className, iconProps, ...rest }) => {
  const Tag = level;

  const combinedClassName = `${styles.heading} ${styles[level]} ${className || ''}`.trim();

  return (
    <Tag className={combinedClassName} {...rest}>
      {/* Simpler wrapper for icon and text alignment */}
      <span className={styles.contentWrapper}> 
        {iconProps && (
          <Icon 
            {...iconProps} 
            className={iconProps.className || ''} 
          />
        )}
        {children} {/* Children (text) are rendered directly next to the Icon */}
      </span>
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
