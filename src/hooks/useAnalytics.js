// ========================================
// 📊 ANALYTICS HOOK - GOOGLE ANALYTICS 4
// ========================================
// Hook personalizado para tracking de eventos y páginas
// Compatible con Google Analytics 4 (GA4)
// Se puede desactivar fácilmente para desarrollo

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ========================================
// 🎯 CONFIGURACIÓN DE ANALYTICS
// ========================================

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'; // Cambiar por tu ID real
const IS_PRODUCTION = import.meta.env.PROD;
const ANALYTICS_ENABLED = IS_PRODUCTION && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX';

// ========================================
// 🔧 INICIALIZACIÓN DE GA4
// ========================================

export const initGA = () => {
  if (!ANALYTICS_ENABLED) {
    console.log('📊 Analytics disabled (development or no GA ID)');
    return;
  }

  // Cargar gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Configurar gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_features: false
  });

  console.log('📊 Google Analytics initialized:', GA_MEASUREMENT_ID);
};

// ========================================
// 🎯 HOOK USE ANALYTICS
// ========================================

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    if (!ANALYTICS_ENABLED) return;

    // Track page view
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
      page_title: document.title
    });

    console.log('📊 Page tracked:', location.pathname);
  }, [location]);

  // Track custom events
  const trackEvent = (eventName, parameters = {}) => {
    if (!ANALYTICS_ENABLED) {
      console.log('📊 Event (disabled):', eventName, parameters);
      return;
    }

    window.gtag('event', eventName, {
      ...parameters,
      timestamp: new Date().toISOString()
    });

    console.log('📊 Event tracked:', eventName, parameters);
  };

  // Track user interactions
  const trackClick = (element, category = 'engagement') => {
    trackEvent('click', {
      event_category: category,
      event_label: element,
      value: 1
    });
  };

  const trackFormSubmit = (formName) => {
    trackEvent('form_submit', {
      event_category: 'form',
      event_label: formName
    });
  };

  const trackSearch = (searchTerm) => {
    trackEvent('search', {
      search_term: searchTerm
    });
  };

  const trackError = (error, context = 'unknown') => {
    trackEvent('exception', {
      description: error.message || error,
      fatal: false,
      context
    });
  };

  return {
    trackEvent,
    trackClick,
    trackFormSubmit,
    trackSearch,
    trackError,
    isEnabled: ANALYTICS_ENABLED
  };
};

// ========================================
// 📊 COMPONENTE ANALYTICS PROVIDER
// ========================================

export const AnalyticsProvider = ({ children }) => {
  useEffect(() => {
    initGA();
  }, []);

  return children;
};