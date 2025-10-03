import React from 'react';
import { ReactComponent as BrandLogo } from 'assets/icons/brand-logo.svg';
import styles from './Brand.module.scss';

const Brand = ({ name }) => {
  return (
    <div className={styles.brand}>
      <BrandLogo className={styles.brandLogo} />
      <span className={styles.brandName}>{name}</span>
    </div>
  );
};

export default Brand;
