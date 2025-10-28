// src/components/Utilities/ErrorBoundaryPage/ErrorBoundaryPage.jsx
import React from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styles from './ErrorBoundaryPage.module.scss';
import Heading from 'components/Heading/Heading'; 


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
      <Link to="/" className={styles.homeLink}>Go back to Home</Link>
    </div>
  );
  
};

export default ErrorBoundaryPage;
