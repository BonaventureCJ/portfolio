// src/components/Brand/Brand.jsx
import React from 'react';
import Icon from 'components/Icon/Icon';
import styles from './Brand.module.scss';

const Brand = ({ name }) => {
  return (
    <div className={styles.brand}>
      <Icon icon="BrandLogo" className={styles.brandLogo} />
      <span className={styles.brandName}>{name}</span>
    </div>
  );
};

export default Brand;
