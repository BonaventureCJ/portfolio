import React from 'react';
import BrandLogo from 'components/NavigationIcons/BrandLogo';
import styles from './Brand.module.scss'; // Use a descriptive import name like 'styles'

const Brand = ({ name }) => {
  return (
    <div className={styles.brand}>
      <BrandLogo className={styles.brandLogo} />
      <span className={styles.brandName}>{name}</span>
    </div>
  );
};

export default Brand;
