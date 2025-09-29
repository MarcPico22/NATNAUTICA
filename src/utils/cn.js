// ========================================
// 🎨 UTILIDAD PARA COMBINAR CLASES CSS
// ========================================
// Función utilitaria personalizada para combinar clases CSS
// Maneja strings, arrays, objetos condicionales y valores falsy
// Se usa en TODOS los componentes para gestionar className
// Ejemplo: cn('px-4', isActive && 'bg-blue-500', { 'hidden': !visible })

export const cn = (...values) =>
  values
    .flatMap((value) => {
      // 🚫 Ignorar valores falsy (null, undefined, false, '')
      if (!value) {
        return [];
      }
      
      // 📝 String directo: limpiar espacios
      if (typeof value === 'string') {
        return value.trim();
      }
      
      // 📋 Array: procesar recursivamente
      if (Array.isArray(value)) {
        return value;
      }
      
      // 🎯 Objeto: clases condicionales { className: condition }
      if (typeof value === 'object') {
        return Object.entries(value)
          .filter(([, condition]) => Boolean(condition)) // Solo clases con condición true
          .map(([key]) => key);                          // Extraer nombre clase
      }
      
      // 🔄 Otros tipos: convertir a string de forma segura
      try {
        return String(value);
      } catch (error) {
        console.warn('cn: Error converting value to string:', value, error);
        return '';
      }
    })
    .filter(Boolean) // 🧹 Eliminar valores vacíos finales
    .join(' ');
