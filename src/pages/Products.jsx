import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { mockProducts } from '../utils/mockData'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Products() {
  const [cartItems, setCartItems] = useState([])
  const [filter, setFilter] = useState('all')

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
    alert(`${product.name} added to cart!`)
  }

  const filteredProducts = filter === 'all' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === filter)

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Solar Products Catalog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our complete range of solar kits, batteries, and inverters
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex gap-4 mb-12 flex-wrap justify-center"
      >
        {['all', 'starter', 'professional', 'premium'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === f
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Products Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-3 gap-8"
      >
        {filteredProducts.map((product) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </motion.div>
        ))}
      </motion.div>

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 bg-primary text-white p-6 rounded-lg shadow-xl"
        >
          <h3 className="font-bold mb-2">Cart ({cartItems.length} items)</h3>
          <p className="text-sm text-blue-100">Total: ${cartItems.reduce((sum, p) => sum + p.price, 0).toLocaleString()}</p>
        </motion.div>
      )}
    </div>
  )
}