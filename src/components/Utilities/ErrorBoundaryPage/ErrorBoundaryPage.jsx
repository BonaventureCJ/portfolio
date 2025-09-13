// src/components/Utility/ErrorBoundaryPage/ErrorBoundaryPage.jsx
import React from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styles from './ErrorBoundaryPage.module.scss'; //Relative Link

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
      <h1>Oops! Something went wrong.</h1>
      <p>{errorMessage}</p>
      <Link to="/" className={styles.homeLink}>Go back to Home</Link>
    </div>
  );
  
};

export default ErrorBoundaryPage;
