import React from 'react';
import BrandLogo from 'components/NavigationIcons/BrandLogo';
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
