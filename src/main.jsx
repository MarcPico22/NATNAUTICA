import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';

import App from './App.jsx';
import i18n from './i18n.js';
import './index.css';
import { ThemeProvider } from './providers/ThemeProvider.jsx';
import { LanguageSync } from './providers/LanguageSync.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <BrowserRouter>
            <LanguageSync />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </I18nextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
