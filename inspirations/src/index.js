import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/ThemeContext';
import './mixpanel';

const root = ReactDOM.createRoot(document.getElementById('root'));

// By removing <React.StrictMode>, the useEffect hook in ActivityTracker
// will only run once on mount and once on unmount, which is the
// behavior we expect in production. This will clean up the duplicate
// session events in the development logs.
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

reportWebVitals();
