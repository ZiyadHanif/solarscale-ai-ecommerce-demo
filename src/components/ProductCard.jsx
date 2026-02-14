import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Star, Zap } from 'lucide-react'

export default function ProductCard({ product, onAddToCart }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 dark:border-gray-700"
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="text-6xl"
        >
          ☀️
        </motion.div>
        <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
          AI Powered
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < 4 ? 'fill-secondary text-secondary' : 'text-gray-300'}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">(245 reviews)</span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>

        {/* Specs */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Capacity:</span>
            <span className="font-semibold text-gray-900 dark:text-white">{product.capacity} kW</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Panels:</span>
            <span className="font-semibold text-gray-900 dark:text-white">{product.panels}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Warranty:</span>
            <span className="font-semibold text-gray-900 dark:text-white">{product.warranty}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-primary">${product.price.toLocaleString()}</span>
          <span className="text-sm text-gray-500 line-through">${(product.price * 1.2).toLocaleString()}</span>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAddToCart(product)}
          className="w-full btn-primary flex items-center justify-center gap-2"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  )
}