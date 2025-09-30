// ========================================
// 💀 COMPONENTES SKELETON LOADING
// ========================================
// Componentes de skeleton para mejorar perceived performance
// Animaciones suaves con Framer Motion para loading states
// Reutilizables en blog, páginas y componentes

import { motion } from 'framer-motion';

// ========================================
// 🎯 ANIMACIÓN BASE PARA SKELETONS
// ========================================

const skeletonVariants = {
  animate: {
    background: [
      'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
      'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)'
    ],
    backgroundSize: '200% 100%',
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// ========================================
// 📝 SKELETON PARA POST DEL BLOG
// ========================================

export function BlogPostSkeleton() {
  return (
    <motion.article
      className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Tags skeleton */}
      <div className="mb-6 flex flex-wrap gap-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="h-6 w-16 rounded-full"
            variants={skeletonVariants}
            animate="animate"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

      {/* Title skeleton */}
      <motion.div
        className="mb-4 h-12 w-3/4 rounded"
        variants={skeletonVariants}
        animate="animate"
      />

      {/* Meta info skeleton */}
      <div className="mb-8 flex items-center gap-4">
        <motion.div className="h-4 w-24 rounded" variants={skeletonVariants} animate="animate" />
        <motion.div className="h-4 w-20 rounded" variants={skeletonVariants} animate="animate" />
        <motion.div className="h-4 w-16 rounded" variants={skeletonVariants} animate="animate" />
      </div>

      {/* Content skeleton */}
      <div className="space-y-4">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`h-4 rounded ${i % 3 === 0 ? 'w-full' : i % 3 === 1 ? 'w-5/6' : 'w-4/6'}`}
            variants={skeletonVariants}
            animate="animate"
            style={{ animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>
    </motion.article>
  );
}

// ========================================
// 📄 SKELETON PARA CONTENIDO DE POST
// ========================================

export function BlogPostContentSkeleton() {
  return (
    <motion.div
      className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <motion.div
        className="mb-4 h-10 w-4/5 rounded"
        variants={skeletonVariants}
        animate="animate"
      />

      {/* Meta */}
      <div className="mb-8 flex gap-4">
        <motion.div className="h-4 w-20 rounded" variants={skeletonVariants} animate="animate" />
        <motion.div className="h-4 w-16 rounded" variants={skeletonVariants} animate="animate" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`h-4 rounded ${i % 4 === 0 ? 'w-full' : i % 4 === 1 ? 'w-3/4' : i % 4 === 2 ? 'w-5/6' : 'w-2/3'}`}
            variants={skeletonVariants}
            animate="animate"
            style={{ animationDelay: `${i * 0.03}s` }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ========================================
// 📚 SKELETON PARA LISTA DE POSTS DEL BLOG
// ========================================

export function BlogListSkeleton() {
  return (
    <div className="space-y-8">
      {[...Array(5)].map((_, i) => (
        <motion.article
          key={i}
          className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {/* Tags */}
          <div className="mb-3 flex gap-2">
            {[...Array(2)].map((_, j) => (
              <motion.div
                key={j}
                className="h-5 w-12 rounded-full"
                variants={skeletonVariants}
                animate="animate"
                style={{ animationDelay: `${(i * 5 + j) * 0.02}s` }}
              />
            ))}
          </div>

          {/* Title */}
          <motion.div
            className="mb-3 h-6 w-4/5 rounded"
            variants={skeletonVariants}
            animate="animate"
            style={{ animationDelay: `${i * 0.1 + 0.1}s` }}
          />

          {/* Excerpt */}
          <div className="mb-4 space-y-2">
            {[...Array(3)].map((_, j) => (
              <motion.div
                key={j}
                className={`h-4 rounded ${j === 0 ? 'w-full' : j === 1 ? 'w-5/6' : 'w-3/4'}`}
                variants={skeletonVariants}
                animate="animate"
                style={{ animationDelay: `${i * 0.1 + 0.2 + j * 0.05}s` }}
              />
            ))}
          </div>

          {/* Meta */}
          <div className="flex items-center justify-between">
            <motion.div className="h-4 w-20 rounded" variants={skeletonVariants} animate="animate" />
            <motion.div className="h-8 w-24 rounded" variants={skeletonVariants} animate="animate" />
          </div>
        </motion.article>
      ))}
    </div>
  );
}

// ========================================
// 🔗 SKELETON PARA POSTS RELACIONADOS
// ========================================

export function RelatedPostsSkeleton() {
  return (
    <motion.section
      className="border-t border-slate-200 bg-slate-100 py-16 dark:border-slate-700 dark:bg-slate-900"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-8 h-8 w-48 rounded" variants={skeletonVariants} animate="animate" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="rounded-lg bg-white p-6 shadow-sm dark:bg-slate-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div className="mb-3 h-5 w-16 rounded" variants={skeletonVariants} animate="animate" />
              <motion.div className="mb-2 h-6 w-full rounded" variants={skeletonVariants} animate="animate" />
              <motion.div className="h-4 w-3/4 rounded" variants={skeletonVariants} animate="animate" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}