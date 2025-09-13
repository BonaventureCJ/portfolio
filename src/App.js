// src/App.jsx
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import GlobalThemeContext from './Components/Contexts';

// Import your page components
import Layout from './Components/Layout';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import ErrorPage from './Components/error-page';

// Create the data router with an array of route objects
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout />
        <ScrollRestoration />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // You can add a catch-all route here for 404 pages within the layout,
      // but it's often better to have a top-level catch-all.
      {
        path: "*",
        element: <ErrorPage />,
      }
    ],
  },
], {
  basename: "/portfolio" // Set the basename for GitHub Pages,
});

const App = () => {
  return (
    <GlobalThemeContext>
      <RouterProvider router={router} />
    </GlobalThemeContext>
  );
};

export default App;