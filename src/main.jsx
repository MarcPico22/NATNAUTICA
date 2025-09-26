// ========================================
// 🚀 PUNTO DE ENTRADA DE LA APLICACIÓN
// ========================================
// Este archivo inicializa la aplicación React con todos los providers necesarios
// Configura internacionalización, routing, temas y SEO
// Modificar el orden de providers puede afectar el funcionamiento global

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';      // 🔗 Routing SPA
import { I18nextProvider } from 'react-i18next';       // 🌍 Internacionalización
import { HelmetProvider } from 'react-helmet-async';   // 🎯 SEO dinámico

import App from './App.jsx';                           // 📱 Componente principal
import i18n from './i18n.js';                          // ⚙️ Configuración i18n
import './index.css';                                  // 🎨 Estilos globales
import { ThemeProvider } from './providers/ThemeProvider.jsx';   // 🌓 Tema claro/oscuro
import { LanguageSync } from './providers/LanguageSync.jsx';     // 🔄 Sincronización idioma

// ========================================
// 🌳 ÁRBOL DE PROVIDERS (Jerarquía importante)
// ========================================
// El orden de anidación es crítico para el funcionamiento correcto:
// 1. StrictMode: Detección de problemas en desarrollo
// 2. HelmetProvider: Manejo de meta tags para SEO
// 3. I18nextProvider: Context de internacionalización (4 idiomas)
// 4. ThemeProvider: Context de tema claro/oscuro
// 5. BrowserRouter: Routing SPA con History API
// 6. LanguageSync: Sincronización de idioma con localStorage/URL
// 7. App: Componente raíz con todas las rutas

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 🎯 SEO: Permite modificar <head> dinámicamente */}
    <HelmetProvider>
      {/* 🌍 i18n: Provee contexto de traducción a toda la app */}
      <I18nextProvider i18n={i18n}>
        {/* 🌓 Tema: Maneja el estado global claro/oscuro */}
        <ThemeProvider>
          {/* 🔗 Router: Habilita navegación SPA */}
          <BrowserRouter>
            {/* 🔄 Sincroniza idioma con URL params y localStorage */}
            <LanguageSync />
            {/* 📱 Aplicación principal con todas las rutas */}
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </I18nextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
