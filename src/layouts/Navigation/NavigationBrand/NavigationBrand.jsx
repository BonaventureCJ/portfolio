// src/layouts/Navigation/NavigationBrand/NavigationBrand.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Brand from 'components/Brand/Brand';
import styles from './NavigationBrand.module.scss';

const NavigationBrand = ({ onLinkClick }) => {
  return (
    <div className={styles.brand}>
      <NavLink
        to="/"
        className={styles.brand__link}
        onClick={onLinkClick}
        aria-label="Navigate to homepage"
        aria-current="page"
      >
        <Brand name="BonaventureCJ" />
      </NavLink>
    </div>
  );
};

export default NavigationBrand;

