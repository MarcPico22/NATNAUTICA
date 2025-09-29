# 📝 GUÍA PARA AÑADIR NUEVOS BLOGS - NETNAUTICA

Esta guía te explica paso a paso cómo añadir nuevas entradas al blog de Netnautica.

## 📍 UBICACIÓN DE ARCHIVOS

El archivo principal donde debes añadir nuevos blogs es:
```
src/data/blog.js
```

## 🏗️ ESTRUCTURA DE UN BLOG

Cada entrada de blog debe seguir esta estructura:

```javascript
{
  id: 'slug-unico-del-blog',                    // 🔑 ID único (usado en URL)
  slug: 'slug-unico-del-blog',                  // 🔗 Slug para URL (/blog/slug-unico-del-blog)
  title: 'Título del Blog',                     // 📰 Título principal
  excerpt: 'Resumen corto del artículo...',     // 📄 Descripción breve (máx 160 caracteres)
  content: `Contenido completo del blog...`,    // 📝 Contenido HTML completo
  author: 'Netnautica Team',                    // ✍️ Autor del artículo
  publishedAt: '2024-01-15',                    // 📅 Fecha publicación (YYYY-MM-DD)
  readingTime: 8,                               // ⏱️ Tiempo lectura estimado (minutos)
  category: 'Conectividad',                     // 🏷️ Categoría principal
  tags: ['conectividad', 'tecnología', 'yates'], // 🏷️ Tags para filtros
  featuredImage: {
    src: '/images/blog/nombre-imagen.jpg',      // 🖼️ Imagen destacada
    alt: 'Descripción de la imagen',            // ♿ Texto alternativo
    width: 1200,                                // 📐 Ancho imagen
    height: 630                                 // 📐 Alto imagen
  },
  seo: {
    metaTitle: 'Título SEO (máx 60 caracteres)', // 🔍 Título para buscadores
    metaDescription: 'Descripción SEO...',       // 🔍 Descripción para buscadores
    keywords: ['keyword1', 'keyword2']          // 🔍 Palabras clave
  }
}
```

## 📋 PASOS PARA AÑADIR UN NUEVO BLOG

### 1. Abre el archivo de datos
```bash
src/data/blog.js
```

### 2. Ve al array `BLOG_POSTS`
Encontrarás una estructura como esta:
```javascript
export const BLOG_POSTS = [
  // ... blogs existentes
];
```

### 3. Añade tu nuevo blog
Añade tu nuevo objeto de blog al **INICIO** del array para que aparezca primero:

```javascript
export const BLOG_POSTS = [
  {
    // 👈 TU NUEVO BLOG AQUÍ
    id: 'nuevo-blog',
    slug: 'nuevo-blog',
    title: 'Mi Nuevo Blog',
    // ... resto de propiedades
  },
  // ... blogs existentes
];
```

### 4. Genera un slug único
El slug debe ser:
- Todo en minúsculas
- Sin espacios (usar guiones `-`)
- Sin caracteres especiales
- Descriptivo del contenido

**Ejemplos:**
- "Tecnologías Bonding para Yates" → `tecnologias-bonding-yates`
- "Conectividad en Alta Mar" → `conectividad-alta-mar`
- "IoT Náutico 2024" → `iot-nautico-2024`

### 5. Añade imágenes (opcional)
Si tu blog tiene imágenes:
1. Coloca las imágenes en: `public/images/blog/`
2. Usa rutas como: `/images/blog/nombre-imagen.jpg`

### 6. Verifica que funciona
1. Guarda el archivo
2. El blog aparecerá automáticamente en `/blog`
3. La URL será `/blog/tu-slug-unico`

## 🎨 CONTENIDO HTML

El contenido puede incluir HTML básico:

```javascript
content: `
  <h2>Título de Sección</h2>
  <p>Párrafo normal con <strong>texto en negrita</strong>.</p>
  
  <h3>Subsección</h3>
  <ul>
    <li>Lista item 1</li>
    <li>Lista item 2</li>
  </ul>
  
  <blockquote>
    <p>Cita importante o destacada</p>
  </blockquote>
  
  <p>Párrafo con <a href="https://ejemplo.com">enlace externo</a>.</p>
`
```

## 🏷️ CATEGORÍAS Y TAGS RECOMENDADOS

### Categorías comunes:
- `"Conectividad"`
- `"Tecnología"`
- `"Navegación"`
- `"Seguridad"`
- `"Mantenimiento"`
- `"Innovación"`

### Tags comunes:
- `"yates"`, `"embarcaciones"`, `"nautica"`
- `"conectividad"`, `"internet"`, `"wifi"`
- `"starlink"`, `"peplink"`, `"unifi"`
- `"iot"`, `"sensores"`, `"monitoreo"`
- `"seguridad"`, `"backup"`, `"redundancia"`

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] ✅ ID y slug únicos
- [ ] 📰 Título claro y atractivo
- [ ] 📄 Excerpt de máximo 160 caracteres
- [ ] 📝 Contenido completo y bien estructurado
- [ ] 📅 Fecha correcta (YYYY-MM-DD)
- [ ] ⏱️ Tiempo de lectura estimado
- [ ] 🏷️ Categoría y tags apropiados
- [ ] 🖼️ Imagen destacada (si aplica)
- [ ] 🔍 SEO optimizado
- [ ] 🧪 Probado en `/blog/tu-slug`

## 🚀 EJEMPLO COMPLETO

```javascript
{
  id: 'tecnologias-bonding-yates',
  slug: 'tecnologias-bonding-yates',
  title: 'Tecnologías Bonding para Yates: Conectividad Sin Límites',
  excerpt: 'Descubre cómo las tecnologías bonding revolucionan la conectividad en yates, combinando múltiples conexiones para garantizar internet estable.',
  content: `
    <h2>¿Qué es el Bonding?</h2>
    <p>El bonding es una tecnología que combina múltiples conexiones de internet...</p>
    
    <h3>Ventajas del Bonding</h3>
    <ul>
      <li>Mayor ancho de banda</li>
      <li>Redundancia y confiabilidad</li>
      <li>Conectividad ininterrumpida</li>
    </ul>
  `,
  author: 'Netnautica Team',
  publishedAt: '2024-03-15',
  readingTime: 6,
  category: 'Conectividad',
  tags: ['bonding', 'conectividad', 'yates', 'tecnología'],
  featuredImage: {
    src: '/images/blog/bonding-yates.jpg',
    alt: 'Tecnologías bonding en yates de lujo',
    width: 1200,
    height: 630
  },
  seo: {
    metaTitle: 'Bonding para Yates: Conectividad Náutica Avanzada',
    metaDescription: 'Tecnologías bonding para yates: combina conexiones 4G/5G y Starlink para internet estable en alta mar. Guía completa.',
    keywords: ['bonding', 'yates', 'conectividad náutica', 'internet embarcaciones']
  }
}
```

---

¡Listo! Con esta guía podrás añadir tantos blogs como necesites de forma sencilla y consistente. 🚀