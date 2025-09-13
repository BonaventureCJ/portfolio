import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="error-page">
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>The page you're looking for doesn't exist.</p>
      <p>
        {/* Use optional chaining to safely access properties */}
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link to="/" className='link link-highlight'>Go to the home page</Link>
    </section>
  );
};

export default ErrorPage;