import React from 'react';
import BrandLogo from 'components/NavigationIcons/BrandLogo'; // Absolute import for the icon
import './Brand.module.scss';

const Brand = ({ name }) => {
  return (
    <div className="brand">
      <BrandLogo className="brand-logo" />
      <span className="brand-name">{name}</span>
    </div>
  );
};

export default Brand;
