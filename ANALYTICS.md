# 📊 Sistema de Analytics - Google Analytics 4

## 🚀 Configuración

### 1. Obtener Measurement ID
1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una propiedad GA4
3. Copia el Measurement ID (formato: `G-XXXXXXXXXX`)

### 2. Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto:
```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Funcionamiento
- **Desarrollo**: Analytics deshabilitado automáticamente
- **Producción**: Analytics habilitado solo con ID válido
- **Privacidad**: IP anonimizada, sin señales de Google, sin features de ads

## 📈 Eventos Tracked Automáticamente

### Page Views
- Todas las navegaciones se trackean automáticamente
- Incluye path y título de página

### Eventos Personalizados
```javascript
import { useAnalytics } from '@/hooks/useAnalytics';

const { trackEvent, trackClick, trackFormSubmit } = useAnalytics();

// Track evento personalizado
trackEvent('button_click', {
  button_name: 'cta_primary',
  page_location: 'hero_section'
});

// Track click
trackClick('download_brochure', 'engagement');

// Track form submit
trackFormSubmit('contact_form');
```

## 🎯 Eventos Implementados

### Formulario de Contacto
- `form_step`: Progresión entre pasos del formulario
- `contact_form_submit`: Envío del formulario
- `contact_form_success`: Envío exitoso

### Navegación
- Page views automáticos en cada ruta

## 🔧 API del Hook

```javascript
const {
  trackEvent,        // Evento personalizado
  trackClick,        // Click en elemento
  trackFormSubmit,   // Envío de formulario
  trackSearch,       // Búsqueda
  trackError,        // Error/exception
  isEnabled          // Si analytics está activo
} = useAnalytics();
```

## 📊 Dashboard GA4

Una vez configurado, verás métricas en:
- **Realtime**: Usuarios activos ahora
- **Acquisition**: Cómo llegan los usuarios
- **Engagement**: Páginas vistas, tiempo en sitio
- **Conversions**: Formularios enviados

## 🔒 Privacidad y Cumplimiento

- ✅ IP anonimizada
- ✅ Sin cookies de publicidad
- ✅ Compatible con GDPR
- ✅ Deshabilitado en desarrollo
- ✅ Solo datos esenciales