// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';

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
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

