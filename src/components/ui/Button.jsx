// ========================================
// 🔘 COMPONENTE BUTTON REUTILIZABLE
// ========================================
// Botón polimórfico con variantes de estilo y tamaños
// Puede renderizar como button, Link, a, etc. usando prop 'as'
// Incluye estados hover, focus, disabled y soporte tema oscuro
// Modificar variantes aquí afecta todos los botones del sitio

import { cn } from '@/utils/cn'; // 🎨 Utilidad para combinar clases CSS

// 🎯 Clases base comunes a todas las variantes
// Incluye flexbox, tipografía, transiciones y accesibilidad
const baseClasses =
  'inline-flex items-center justify-center font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-50';

// 🎨 Variantes de estilo (colores y apariencia)
const variants = {
  primary: 'rounded-full bg-brand-600 text-white hover:bg-brand-500 hover:text-white shadow-lg shadow-brand-600/30', // 🔵 Botón principal azul
  secondary: 'rounded-full border border-slate-200 bg-white text-slate-800 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:text-brand-200', // ⚪ Botón secundario blanco
  ghost: 'rounded-full text-brand-600 hover:bg-brand-50 dark:hover:bg-slate-800' // 👻 Botón sin fondo
};

// 📎 Tamaños de botones (padding y texto)
const sizes = {
  sm: 'px-4 py-2 text-sm',    // 🔎 Pequeño
  md: 'px-5 py-3 text-sm',    // 📎 Mediano (por defecto)
  lg: 'px-6 py-3 text-base'   // 🔍 Grande
};

// ========================================
// 🎯 COMPONENTE POLIMÓRFICO
// ========================================
// Permite renderizar como diferentes elementos HTML usando prop 'as'
// Ejemplos: <Button as="a" href="..."> o <Button as={Link} to="...">

export function Button({ 
  as: Component = 'button',  // 🔄 Elemento a renderizar (button por defecto)
  variant = 'primary',       // 🎨 Variante de estilo
  size = 'md',              // 📎 Tamaño
  className,                // 🎭 Clases CSS adicionales
  children,                 // 📝 Contenido del botón
  ...props                  // 📦 Props adicionales (onClick, href, etc.)
}) {
  return (
    // 🎨 Combina clases base + variante + tamaño + personalizadas
    <Component className={cn(baseClasses, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Component>
  );
}
