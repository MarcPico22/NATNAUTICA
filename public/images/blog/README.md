# 📁 Carpeta de Imágenes del Blog

Esta carpeta almacena todas las imágenes utilizadas en las entradas del blog.

## 📐 Especificaciones de Imágenes

### Imagen Destacada (Featured Image)
- **Tamaño recomendado:** 1200 x 630 px
- **Ratio:** 1.91:1 (optimizado para redes sociales)
- **Formato:** JPG o PNG
- **Peso máximo:** 200KB (optimizado para web)

### Imágenes en Contenido
- **Ancho máximo:** 800px
- **Formato:** JPG, PNG o WebP
- **Peso máximo:** 150KB por imagen

## 📝 Convención de Nombres

Usa nombres descriptivos y consistentes:
- `bonding-yates.jpg` - Para el blog de tecnologías bonding
- `navegacion-moderna-dashboard.jpg` - Para imágenes de navegación
- `conectividad-superyate.png` - Para temas de conectividad

## 🔗 Uso en el Blog

Para usar una imagen en tu blog:

```javascript
// En featuredImage
featuredImage: {
  src: '/images/blog/nombre-imagen.jpg',
  alt: 'Descripción de la imagen',
  width: 1200,
  height: 630
}

// En contenido HTML
content: `
  <img src="/images/blog/imagen-contenido.jpg" alt="Descripción" />
`
```

## ♿ Accesibilidad

Siempre incluye texto alternativo descriptivo en el campo `alt` para mejorar la accesibilidad y SEO.

---

**Nota:** Las imágenes se sirven desde la carpeta `public`, por lo que las rutas deben comenzar con `/images/blog/`