// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { IconContext } from 'react-icons';
import App from './App';
import { ThemeProvider } from 'contexts/ThemeContext';

// Import main global stylesheet using the absolute path
import 'styles/global.scss';

// Find the root DOM element
const rootElement = document.getElementById('root');
// Create a root
const root = createRoot(rootElement);

// Render the application into the root
root.render(
  <React.StrictMode>
    <ThemeProvider>
      {/* 
        Wrap your App with the IconContext.Provider.
        This provides a default size and color for all icons,
        which will automatically adapt to the current theme.
      */}
      <IconContext.Provider
        value={{
          size: '1em', // A reasonable default size
          /* color: 'var(--color-text-primary)', // Color adapts to the current theme */
          className: 'global-icon-style' // You can still use a global class
        }}
      >
        <App />
      </IconContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);

