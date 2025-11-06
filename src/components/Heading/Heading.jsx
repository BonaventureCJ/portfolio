// src/components/Heading/Heading.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';
import styles from './Heading.module.scss';

const Heading = ({ level, children, className, iconProps, textAlign, ...rest }) => {
  const Tag = level;

  const alignmentClass = styles[`textAlign--${textAlign}`] || '';
  const combinedClassName = `${styles.base} ${styles.decorativeLine} ${styles[level]} ${alignmentClass} ${className || ''}`.trim();

  return (
    <Tag className={combinedClassName} {...rest}>
      <span className={styles.contentWrapper}>
        {iconProps && (
          <span className={styles.iconWrapper}>
            <Icon
              {...iconProps}
              className={iconProps.className}
            />
          </span>
        )}
        <span className={styles.textWrapper}>
          {children}
        </span>
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
    className: PropTypes.string,
  }),
  // Prop for text alignment, with a default value.
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

// Default props for `textAlign` ensures it is centered unless specified otherwise.
Heading.defaultProps = {
  textAlign: 'center',
};

export default Heading;
