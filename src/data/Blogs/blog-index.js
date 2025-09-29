/**
 * ÍNDICE CENTRAL DE BLOGS
 * Importa y combina todos los blogs individuales
 * Sistema modular y escalable
 */

import { bondingBlogPost } from './blog-bonding';
import { starlinkBlogPost } from './blog-Starlink';
import { cybersecurityBlogPost } from './blog-cybersecurity';

/**
 * Array principal de todos los blogs
 * Cada blog es un objeto independiente importado desde su archivo
 */
export const BLOG_POSTS = [
  bondingBlogPost,
  starlinkBlogPost,
  cybersecurityBlogPost,
];

/**
 * Funciones auxiliares para gestión de blogs
 */

// Obtener blogs por categoría
export const getBlogsByCategory = (category) => {
  return BLOG_POSTS.filter(post => post.category === category);
};

// Obtener blogs destacados
export const getFeaturedBlogs = () => {
  return BLOG_POSTS.filter(post => post.featured === true);
};

// Obtener blog por ID
export const getBlogById = (id) => {
  return BLOG_POSTS.find(post => post.id === id);
};

// Obtener blogs recientes (por fecha)
export const getRecentBlogs = (limit = 5) => {
  return BLOG_POSTS
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
};

// Buscar blogs por texto
export const searchBlogs = (query, locale = 'es') => {
  const searchTerm = query.toLowerCase();
  return BLOG_POSTS.filter(post => {
    const content = post.locales[locale];
    if (!content) return false;
    
    return (
      content.title.toLowerCase().includes(searchTerm) ||
      content.excerpt.toLowerCase().includes(searchTerm) ||
      post.category.toLowerCase().includes(searchTerm)
    );
  });
};

/**
 * Funciones de localización existentes (mantenidas para compatibilidad)
 */

export const getLocalizedBlogPosts = (locale = 'es') => {
  if (!BLOG_POSTS || BLOG_POSTS.length === 0) {
    return [];
  }
  
  return BLOG_POSTS.map(post => ({
    ...post,
    ...post.locales[locale],
    slug: post.slug[locale] || post.slug.es
  }));
};

export const getLocalizedBlogPostBySlug = (slug, locale = 'es') => {
  const post = BLOG_POSTS.find(post => post.slug[locale] === slug);
  if (!post) return null;
  
  return {
    ...post,
    ...post.locales[locale],
    slug: post.slug // Mantener el objeto completo de slugs
  };
};

export const getRelatedPosts = (currentPostId, locale = 'es', limit = 3) => {
  const currentPost = BLOG_POSTS.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  return BLOG_POSTS
    .filter(post => post.id !== currentPostId && post.category === currentPost.category)
    .slice(0, limit)
    .map(post => ({
      ...post,
      ...post.locales[locale],
      slug: post.slug[locale] || post.slug.es
    }));
};

export const getLocalizedContent = (postId, locale = 'es') => {
  const post = BLOG_POSTS.find(post => post.id === postId);
  if (!post || !post.locales[locale]) return null;
  
  return {
    ...post,
    ...post.locales[locale],
    slug: post.slug[locale] || post.slug.es
  };
};