// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from 'layouts/MainLayout/MainLayout';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Skills from 'pages/Skills/Skills';
import { Projects } from 'pages/Projects/Projects';
import Contact from 'pages/Contact/Contact';
import ErrorBoundaryPage from 'components/Utilities/ErrorBoundaryPage/ErrorBoundaryPage';
import ErrorBoundaryContent from 'components/Utilities/ErrorBoundaryContent/ErrorBoundaryContent';
import NotFoundPage from 'components/Utilities/NotFoundPage/NotFoundPage';

// Define the route configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundaryPage />, // Catches catastrophic, unrecoverable errors
    children: [
      // Pathless route that wraps all the other children
      {
        errorElement: <ErrorBoundaryContent />, // Nested error boundary component catches errors for child routes, but preserves the MainLayout
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'skills',
            element: <Skills />,
          },
          {
            path: 'projects',
            element: <Projects />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
          {
            path: "*",
            element: <NotFoundPage />,
          }
        ],
      },
    ],
  }
],
  {
    basename: "/portfolio",
  }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
