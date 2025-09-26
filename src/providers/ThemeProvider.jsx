// ========================================
// 🌓 PROVIDER DE TEMA CLARO/OSCURO
// ========================================
// Context Provider para manejar tema global de la aplicación
// Persiste preferencia en localStorage
// Detecta preferencia del sistema operativo
// Aplica clases CSS automáticamente al <html>

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

// 💾 Clave para localStorage (persistencia)
const STORAGE_KEY = 'netnautica-theme';

// 🎯 Context con valores por defecto
const ThemeContext = createContext({
  theme: 'light',                    // 🌅 Tema actual
  toggleTheme: () => undefined,      // 🔄 Alternar tema
  setTheme: () => undefined          // 🎯 Establecer tema específico
});

// 🔍 Detecta si el usuario prefiere tema oscuro
const prefersDark = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;

// ========================================
// 🎯 PROVIDER COMPONENT
// ========================================

export function ThemeProvider({ children }) {
  // 🎯 Estado del tema con inicialización inteligente
  const [theme, setTheme] = useState(() => {
    // 🚑 SSR safety: evita hydration mismatches
    if (typeof window === 'undefined') {
      return 'light';
    }
    // 📦 Prioridades: localStorage > preferencia sistema > light
    return localStorage.getItem(STORAGE_KEY) ?? (prefersDark() ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.setProperty('color-scheme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
