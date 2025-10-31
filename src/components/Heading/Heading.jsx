import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';
import styles from './Heading.module.scss';

const Heading = ({ level, children, className, iconProps, ...rest }) => {
  const Tag = level;

  const combinedClassName = `${styles.base} ${styles.decorativeLine} ${styles[level]} ${className || ''}`.trim();

  return (
    <Tag className={combinedClassName} {...rest}>
      <span className={styles.contentWrapper}>
        {iconProps && (
          <span className={styles.iconWrapper}>
            <Icon
              {...iconProps}
              // Allow overriding the icon's class from the parent
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
};

export default Heading;
