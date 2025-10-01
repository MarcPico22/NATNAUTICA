import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// 📦 Componentes
import { SearchComponent } from '@/components/common/SearchComponent';

/**
 * 🔍 MODAL DE BÚSQUEDA
 * Modal que contiene el componente de búsqueda global
 * Se abre desde el header y permite búsqueda en servicios y blog
 */
export function SearchModal({ isOpen, onClose }) {
  const { t } = useTranslation();

  // 🔒 Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup al desmontar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ⌨️ Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // 🎯 Renderizar en portal para evitar problemas de z-index
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 🖤 Overlay oscuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* 📱 Modal de búsqueda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 mx-auto max-w-2xl sm:inset-x-6"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
              {/* 📋 Header del modal */}
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t('search.title', 'Buscar en Netnautica')}
                </h2>
                <button
                  onClick={onClose}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                  aria-label={t('search.close', 'Cerrar búsqueda')}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* 🔍 Contenido de búsqueda */}
              <div className="p-6">
                <SearchComponent />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}