// ========================================
// 🧪 COMPONENTE DE TEST PARA DETECCIÓN DE IDIOMA
// ========================================
// Componente temporal para verificar que la detección automática funciona

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageTest() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    console.log('🌍 Language Detection Test Component');
    console.log('Current i18n language:', i18n.language);
    console.log('Browser navigator.language:', navigator.language);
    console.log('Browser navigator.languages:', navigator.languages);
    console.log('i18next detected language:', i18n.services.languageDetector.detect());
  }, [i18n]);

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <h3 className="font-bold mb-2">🧪 Language Detection Test</h3>
      <p><strong>Current:</strong> {i18n.language}</p>
      <p><strong>Browser:</strong> {navigator.language}</p>
      <p><strong>Detected:</strong> {i18n.services.languageDetector.detect()}</p>
      <p><strong>Test translation:</strong> {t('nav.home', 'Home')}</p>
    </div>
  );
}