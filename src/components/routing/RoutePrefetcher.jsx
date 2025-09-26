import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PREFETCH_DELAY = 100; // ms de retraso antes de hacer prefetch
const PREFETCH_TIMEOUT = 2000; // tiempo máximo para prefetch

export function RoutePrefetcher() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const prefetchHandler = (event) => {
      const link = event.currentTarget;
      const href = link.getAttribute('href');

      if (!href || href.startsWith('http') || href === location.pathname) {
        return;
      }

      const timeout = setTimeout(() => {
        // Prefetch la ruta
        navigate(href, { replace: false });
      }, PREFETCH_DELAY);

      // Limpiar timeout si el mouse sale antes
      link.addEventListener('mouseleave', () => clearTimeout(timeout), { once: true });

      // Asegurar que el timeout se limpia después del tiempo máximo
      setTimeout(() => clearTimeout(timeout), PREFETCH_TIMEOUT);
    };

    // Agregar listener a todos los enlaces
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', prefetchHandler);
    });

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', prefetchHandler);
      });
    };
  }, [location.pathname, navigate]);

  return null;
}