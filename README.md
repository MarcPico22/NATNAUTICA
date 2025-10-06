# Netnautica 2.0

Sitio web responsive-first construido con React + Vite + TailwindCSS. Incluye arquitectura modular, soporte multilenguaje (es/en/fr), páginas de servicios y casos de éxito, blog optimizado para SEO, formulario de contacto multistep y utilidades de cumplimiento RGPD (banner de cookies, legales, sitemap, robots).

## Requisitos

- Node.js 18+
- npm 9+

## Puesta en marcha

```bash
npm install
npm run dev
```

Scripts disponibles:

- `npm run dev` – servidor de desarrollo con recarga rápida.
- `npm run build` – genera el bundle optimizado de producción.
- `npm run preview` – sirve la build para validar antes de publicar.

## Estructura clave

```
src/
  components/       # UI compartida, layout, SEO, formularios
  pages/            # Páginas divididas por dominio funcional
  data/             # Contenido estructurado (servicios, casos, blog, legales)
  config/           # Valores globales (contacto, idiomas, site URL)
  locales/          # Traducciones i18next (es/en/fr)
  providers/        # ThemeProvider, sincronización de idioma
  router/           # (reservado) utilidades de routing
  utils/            # Helpers de estilo e i18n
public/
  favicon.svg
  robots.txt
  sitemap.xml
```

## Configuración

- `VITE_SITE_URL` (opcional) puede establecerse para generar URLs absolutas en meta etiquetas y sitemap. Por defecto se usa `https://www.netnautica.com`.
- El banner de cookies almacena la preferencia en `localStorage` (`netnautica-cookie-consent`). Ajusta mensajes en `src/locales/*/translation.json`.
- La política CSP definida en `index.html` permite fuentes de Google y medios de Unsplash. Amplía los orígenes si añades terceros adicionales.

## Gestión de contenido

- **Servicios:** `src/data/services.js`. Cada servicio contiene traducciones por idioma, métricas, beneficios, proceso, caso real y FAQ. Añade nuevas entradas siguiendo la misma estructura y Tailwind generará automáticamente las vistas.
- **Casos de éxito:** `src/data/cases.js`. Incluye traducciones, métricas y testimonios.
- **Blog:** `src/data/blog.js`. Cada artículo dispone de contenido por idioma, metadatos SEO y enlaces a imágenes optimizadas (WebP/AVIF). Para imágenes propias, súbelas a `public/` y actualiza las rutas.
- **Sobre nosotros:** `src/data/about.js` centraliza pilares, equipo, timeline y cultura.
- **Legales:** `src/data/legal.js`. Los componentes de legales renderizan dinámicamente cada sección.
- **Traducciones comunes:** `src/locales/{es,en,fr}/translation.json` (navegación, CTA, formularios, banner de cookies).

Tras modificar datos o traducciones no es necesario reiniciar el servidor, Vite recarga automáticamente.

## SEO y accesibilidad

- `<Seo />` gestiona metadatos por página (title, description, alternates, JSON-LD). Añade nuevos structured data pasando un array en la prop `structuredData`.
- `sitemap.xml` y `robots.txt` están listos en `public/` para desplegar en Netlify/Vercel/hosting propio.
- Se incluyen metaetiquetas para CSP, HSTS, X-Frame-Options y theme-color. Ajusta o traslada estas cabeceras a tu servidor/edge si lo prefieres.

## Deploy

1. Ejecuta `npm run build` para validar la compilación.
2. Sube la carpeta `dist/` al hosting deseado (o configura el adaptador de despliegue en Vercel/Netlify).
3. Asegura que las cabeceras de seguridad (CSP, HSTS, etc.) se mantienen en la plataforma destino.
4. Si el dominio final cambia, actualiza `VITE_SITE_URL`, `public/sitemap.xml` y `public/robots.txt`.

## Próximos pasos sugeridos

- Integrar el formulario con CRM (HubSpot, Salesforce) o email transaccional.
- Conectar analítica (GTM/GA4) dentro del proveedor preferido respetando el banner de consentimiento.
- Sustituir las imágenes de Unsplash por activos propios optimizados para el negocio.


## Subir cosas a la página
npm install
npm run build
Remove-Item -Recurse -Force docs\* -ErrorAction SilentlyContinue
Copy-Item -Recurse -Force dist\* docs\
if (!(Test-Path docs\.nojekyll)) { New-Item docs\.nojekyll -ItemType File | Out-Null }
Copy-Item CNAME docs\ -Force 2>$null
git add .
git commit -m "deploy from dist to docs"
git push

