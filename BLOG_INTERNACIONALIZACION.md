# 🌍 GUÍA DE INTERNACIONALIZACIÓN DEL BLOG

## ✅ **Estado Actual**

- ✅ **Estructura preparada** para múltiples idiomas
- ✅ **Footer actualizado** con enlace BLOG
- ✅ **Sistema funcional** en español (idioma por defecto)
- ✅ **Funciones auxiliares** para gestión de idiomas

## 🎯 **Cómo Añadir Traducciones**

### 📍 **Archivo Principal:** `src/data/blog.js`

Para añadir traducciones de un blog, edita la sección `locales` de cada entrada:

```javascript
{
  id: 'tecnologias-bonding-yates',
  slug: 'tecnologias-bonding-yates', // O puedes hacer slug multiidioma
  title: 'Tecnologías de Bonding...', // Título por defecto (español)
  excerpt: 'La tecnología de bonding...', // Extracto por defecto
  content: `...`, // Contenido por defecto
  
  // AÑADIR TRADUCCIONES AQUÍ:
  locales: {
    en: {
      title: 'Bonding Technologies: Redundant Connectivity for Luxury Yachts',
      excerpt: 'Bonding technology enables intelligent combination of multiple internet connections...',
      content: `
        <img src="/images/blog/yate.jpg" alt="Luxury yacht with advanced connectivity technologies" class="featured-image" />
        
        <h2>Table of Contents</h2>
        <ul>
          <li><a href="#what-is-bonding">What is Bonding Technology</a></li>
          <li><a href="#peplink-core">Peplink Core</a></li>
          <!-- ... más contenido en inglés ... -->
        </ul>
        
        <h2 id="what-is-bonding">What is Bonding Technology</h2>
        <p>Bonding technology enables intelligent combination of multiple internet connections...</p>
        <!-- ... resto del contenido traducido ... -->
      `
    },
    fr: {
      title: 'Technologies de Bonding: Connectivité Redondante pour Yachts de Luxe',
      excerpt: 'La technologie de bonding permet la combinaison intelligente...',
      content: `<!-- Contenido en francés -->`
    },
    de: {
      title: 'Bonding-Technologien: Redundante Konnektivität für Luxusyachten',
      excerpt: 'Die Bonding-Technologie ermöglicht die intelligente Kombination...',
      content: `<!-- Contenido en alemán -->`
    }
  }
}
```

### 🔗 **Slugs Multiidioma (Opcional)**

Si quieres URLs específicas por idioma:

```javascript
slug: {
  es: 'tecnologias-bonding-yates',
  en: 'bonding-technologies-luxury-yachts',
  fr: 'technologies-bonding-yachts-luxe',
  de: 'bonding-technologien-luxusyachten'
}
```

### 🖼️ **Imágenes en Traducciones**

Las imágenes pueden ser las mismas o específicas por idioma:

```javascript
// Misma imagen para todos los idiomas
<img src="/images/blog/yate.jpg" alt="Descripción en el idioma correspondiente" />

// Imágenes específicas por idioma (opcional)
<img src="/images/blog/yate-en.jpg" alt="English description" />
```

## 🚀 **Funciones Disponibles**

### `getLocalizedContent(post, language)`
Obtiene el contenido en el idioma especificado:
```javascript
const content = getLocalizedContent(post, 'en'); // Inglés
// Devuelve: { title, excerpt, content }
```

### `getLocalizedSlug(post, language)`
Obtiene el slug en el idioma especificado:
```javascript
const slug = getLocalizedSlug(post, 'fr'); // Francés
```

### `getLocalizedBlogPosts(language)`
Obtiene todos los posts con contenido localizado:
```javascript
const englishPosts = getLocalizedBlogPosts('en');
```

## 📝 **Proceso Recomendado**

### 1. **Traducir por Fases**
- Fase 1: Inglés (mercado principal)
- Fase 2: Francés 
- Fase 3: Alemán

### 2. **Empezar con Títulos y Extractos**
```javascript
locales: {
  en: {
    title: "English Title",
    excerpt: "English excerpt...",
    // content: "..." // Añadir después
  }
}
```

### 3. **Añadir Contenido Completo**
Una vez validados títulos y extractos, añadir el `content` completo.

## 🔧 **Comportamiento Actual**

- **Idioma por defecto:** Español (contenido principal)
- **Fallback:** Si no hay traducción, usa el español
- **URLs:** Por ahora usan slugs en español para todos los idiomas
- **SEO:** Meta tags se adaptan automáticamente al idioma

## 🌐 **URLs Resultantes**

```
Español:  /blog/tecnologias-bonding-yates
Inglés:   /blog/tecnologias-bonding-yates (misma URL por ahora)
Francés:  /blog/tecnologias-bonding-yates (misma URL por ahora)
Alemán:   /blog/tecnologias-bonding-yates (misma URL por ahora)
```

Si implementas slugs multiidioma:
```
Español:  /blog/tecnologias-bonding-yates
Inglés:   /blog/bonding-technologies-luxury-yachts
Francés:  /blog/technologies-bonding-yachts-luxe
Alemán:   /blog/bonding-technologien-luxusyachten
```

## ✅ **Checklist para Nueva Traducción**

- [ ] Traducir `title`
- [ ] Traducir `excerpt` 
- [ ] Traducir `content` completo
- [ ] Actualizar `alt` de imágenes
- [ ] Revisar enlaces internos (#anclas)
- [ ] Probar la URL en el idioma correspondiente
- [ ] Verificar que el footer BLOG funciona

---

**El sistema está listo para recibir traducciones. Solo necesitas editarlas en `src/data/blog.js` y funcionarán automáticamente en toda la aplicación.** 🚀