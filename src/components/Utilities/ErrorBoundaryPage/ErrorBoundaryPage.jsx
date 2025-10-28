// src/components/Utilities/ErrorBoundaryPage/ErrorBoundaryPage.jsx
import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styles from './ErrorBoundaryPage.module.scss'; 
import Heading from 'components/Heading/Heading'; 
import Button from 'components/Buttons/Button'; 


const ErrorBoundaryPage = () => {
  const error = useRouteError();
  console.error(error);

  let errorMessage = "Sorry, an unexpected error has occurred.";

  if (isRouteErrorResponse(error)) {
    // To show status and statusText for loaders and actions
    errorMessage = `${error.status}: ${error.statusText}`;
  } else if (error instanceof Error) {
    // For general JavaScript errors
    errorMessage = error.message;
  }

  return (
    <div className={styles.errorContainer}>
      <Heading level="h1">Oops! Something went wrong.</Heading>
      <p>{errorMessage}</p>
      <Button 
        to="/" 
        variant="primary"
        size="medium"     // Optional: Specify size
      >
        Go back to Home
      </Button>
    </div>
  );
  
};

export default ErrorBoundaryPage;
