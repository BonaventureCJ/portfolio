// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import layouts and page components using absolute paths
import MainLayout from 'layouts/MainLayout';
import Home from 'features/Home/Home';
import About from 'features/About/About';
import Skills from 'features/Skills/Skills';
import Projects from 'features/Projects/Projects';
import Contact from 'features/Contact/Contact';

// Import layouts and page components using absolute paths
import ErrorBoundaryPage from 'components/Utilities/ErrorBoundaryPage/ErrorBoundaryPage';
import NotFoundPage from 'components/Utilities/NotFoundPage/NotFoundPage';


// Define the route configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundaryPage />, // Catches runtime errors in any child or loader
    children: [
      {
        index: true, // This is the default child route for the parent path '/'
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
  }
],
  {
    basename: "/portfolio",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
