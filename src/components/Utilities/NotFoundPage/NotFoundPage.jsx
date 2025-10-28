// src/components/Utilities/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import styles from './NotFoundPage.module.scss';
import Heading from 'components/Heading/Heading'; 
import Button from 'components/Buttons/Button'; 

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <Heading level="h1">404: Page Not Found</Heading>
      <p>The page you're looking for doesn't exist.</p>
      <Button 
        to="/" 
        variant="primary"
        size="medium"
      >
        Go back to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
