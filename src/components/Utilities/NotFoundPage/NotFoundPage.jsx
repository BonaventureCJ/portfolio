// src/components/Utility/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss'; // Use a specific stylesheet

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1>404: Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.homeLink}>Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
