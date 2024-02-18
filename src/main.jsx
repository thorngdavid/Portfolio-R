import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import '@fontsource/outfit';
import '@fontsource/roboto';
import App from './components/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element with id "root" not found in the document.');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
