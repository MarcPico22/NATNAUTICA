/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#f2f9ff',
          100: '#e6f2ff',
          200: '#bfdfff',
          300: '#99ccff',
          400: '#4da6ff',
          500: '#0080ff',
          600: '#0073e6',
          700: '#005cbf',
          800: '#004599',
          900: '#00387d'
        }
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% 0' },
          '50%': { backgroundPosition: '-200% 0' }
        }
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite'
      }
    }
  },
  plugins: []
};
