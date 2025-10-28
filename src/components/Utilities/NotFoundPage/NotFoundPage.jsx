// src/components/Utilities/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';
import Heading from 'components/Heading/Heading'; 

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <Heading level="h1">404: Page Not Found</Heading>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.homeLink}>Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
