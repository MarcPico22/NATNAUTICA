# 📚 Sistema de Blogs Modular - Netnautica

## 🏗️ Estructura del Sistema

El sistema de blogs ha sido reestructurado para ser completamente modular y escalable. Cada blog es un archivo independiente que se importa automáticamente en el índice central.

```
src/data/Blogs/
├── blog-index.js           # 📋 Índice central que combina todos los blogs
├── blog-bonding.js         # 🔗 Blog sobre tecnologías de bonding
├── blog-Starlink.js        # 🛰️ Blog sobre Starlink para yates
├── blog-cybersecurity.js   # 🔐 Blog sobre ciberseguridad marítima
└── README.md              # 📖 Esta documentación
```

## 🚀 Cómo Añadir un Nuevo Blog

### 1. Crear el Archivo del Blog

Crea un nuevo archivo `blog-nombre.js` siguiendo esta estructura:

```javascript
/**
 * BLOG: TÍTULO DEL BLOG
 * Descripción breve del contenido
 * Contenido multiidioma: ES/EN/FR/DE
 */

export const nombreBlogPost = {
  id: 'id-unico-del-blog',
  category: 'technology|connectivity|security|other',
  publishDate: '2024-MM-DD',
  author: 'Autor del Blog',
  readTime: 'X min',
  featured: true|false,
  slug: {
    es: 'slug-espanol',
    en: 'english-slug',
    fr: 'slug-francais',
    de: 'deutscher-slug'
  },
  locales: {
    es: {
      title: 'Título en Español',
      excerpt: 'Resumen del blog...',
      content: `<!-- Contenido HTML completo -->`,
      seo: {
        metaTitle: 'Título SEO',
        metaDescription: 'Descripción SEO',
        keywords: ['palabra1', 'palabra2']
      }
    },
    // Repetir para en, fr, de
  },
  image: {
    src: '/images/blog/imagen.jpg',
    alt: 'Descripción de la imagen',
    width: 1200,
    height: 630
  }
};
```

### 2. Actualizar el Índice

En `blog-index.js`, añade:

```javascript
// Importar el nuevo blog
import { nombreBlogPost } from './blog-nombre.js';

// Añadirlo al array
export const BLOG_POSTS = [
  bondingBlogPost,
  starlinkBlogPost,
  cybersecurityBlogPost,
  nombreBlogPost, // ← Nuevo blog aquí
];
```

### 3. ¡Listo!

El blog aparecerá automáticamente en:
- Lista de blogs (`/blog`)
- Páginas individuales (`/blog/slug-espanol`)
- Búsquedas y filtros
- Blogs relacionados

## 📊 Funciones Disponibles

### Funciones Básicas
- `getBlogById(id)` - Obtener blog por ID
- `getBlogsByCategory(category)` - Filtrar por categoría
- `getFeaturedBlogs()` - Obtener blogs destacados
- `getRecentBlogs(limit)` - Obtener blogs recientes
- `searchBlogs(query, locale)` - Buscar blogs

### Funciones de Localización
- `getLocalizedBlogPosts(locale)` - Obtener todos los blogs localizados
- `getLocalizedBlogPostBySlug(slug, locale)` - Obtener blog por slug
- `getRelatedPosts(postId, locale, limit)` - Obtener posts relacionados
- `getLocalizedContent(postId, locale)` - Obtener contenido localizado

## 🎨 Categorías Disponibles

- **`technology`** - Tecnologías náuticas, innovaciones
- **`connectivity`** - Internet, comunicaciones, Starlink
- **`security`** - Ciberseguridad, protección digital
- **`navigation`** - GPS, cartografía, navegación
- **`maintenance`** - Mantenimiento de equipos
- **`automation`** - Domótica marina, IoT

## 📝 Formato de Contenido

### Estructura HTML Recomendada

```html
<div class="blog-hero">
  <img src="/images/blog/imagen.jpg" alt="Descripción" class="featured-image" />
</div>

<div class="table-of-contents">
  <h2>📋 Índice de Contenidos</h2>
  <div class="toc-grid">
    <!-- Items del índice -->
  </div>
</div>

<section class="content-section">
  <h2 id="seccion" class="section-title">🔧 Título de Sección</h2>
  
  <div class="intro-text">
    <!-- Texto introductorio -->
  </div>
  
  <div class="highlight-box">
    <h4>💡 Punto Clave</h4>
    <p>Información destacada</p>
  </div>
</section>
```

### Estilos CSS Disponibles

- `.blog-hero` - Sección hero con imagen
- `.table-of-contents` - Índice de contenidos
- `.content-section` - Secciones de contenido
- `.highlight-box` - Cajas destacadas
- `.advantage-card` - Tarjetas de ventajas
- `.product-grid` - Grid de productos
- `.feature-block` - Bloques de características

## 🔧 Mantenimiento

### Migración desde blog.js Antiguo

Si tienes blogs en el formato anterior, sigue estos pasos:

1. Extrae cada objeto del array `BLOG_POSTS`
2. Crea un archivo individual para cada blog
3. Añade los metadatos adicionales (category, publishDate, etc.)
4. Importa en `blog-index.js`
5. Actualiza las referencias en el código

### Mejores Prácticas

- **IDs únicos**: Usa IDs descriptivos y únicos
- **Slugs consistentes**: Mantén formato coherente en todos los idiomas
- **Imágenes optimizadas**: Usa WebP cuando sea posible
- **SEO completo**: Incluye todos los metadatos SEO
- **Contenido completo**: Asegúrate de que todas las versiones de idioma estén completas

## 🌐 Internacionalización

Cada blog debe incluir contenido completo en los 4 idiomas soportados:
- **ES** (Español) - Idioma principal
- **EN** (English) - Inglés
- **FR** (Français) - Francés  
- **DE** (Deutsch) - Alemán

### Estructura Mínima por Idioma

```javascript
locale: {
  title: 'Título traducido',
  excerpt: 'Resumen traducido (150-200 caracteres)',
  content: `<!-- Contenido HTML completo traducido -->`,
  seo: {
    metaTitle: 'Título SEO traducido (60 caracteres max)',
    metaDescription: 'Descripción SEO traducida (160 caracteres max)',
    keywords: ['palabras', 'clave', 'traducidas']
  }
}
```

---

**🚀 ¡El sistema está listo para escalar! Cada nuevo blog es independiente y se integra automáticamente.**