// ========================================
// 📜 SCROLL TO TOP - NAVEGACIÓN SPA
// ========================================
// Componente que restaura el scroll al top al cambiar de ruta
// Mejora UX: cada página nueva empieza desde arriba
// Comportamiento esperado en SPAs (Single Page Applications)
// Respeta anchors (#section) para no interferir con navegación interna

import { useEffect } from 'react';                  // ⚛️ Hook efectos
import { useLocation } from 'react-router-dom';     // 📍 Hook ubicación

// ========================================
// 🎯 COMPONENTE SCROLL TO TOP
// ========================================

export function ScrollToTop() {
  // 📍 Detecta cambios en la URL completa
  const { pathname, search, hash } = useLocation();

  // 🔄 Effect que se ejecuta en cada cambio de URL
  useEffect(() => {
    // 🎯 Si hay hash (#section), no hacer scroll (navegación a anchor)
    if (hash) {
      return;
    }
    
    // 📜 Scroll suave al top para mejor UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, search, hash]); // 🎯 Dependencies: cualquier cambio URL

  return null; // 👻 Componente invisible (solo efecto)
}
