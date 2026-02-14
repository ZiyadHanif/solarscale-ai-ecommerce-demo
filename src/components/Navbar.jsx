import React from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar({ darkMode, setDarkMode }) {
  const [cartCount, setCartCount] = React.useState(0)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">☀️</span>
            </div>
            <span className="text-xl font-bold text-primary dark:text-white hidden sm:inline">SolarScale</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Home</Link>
            <Link to="/products" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Products</Link>
            <Link to="/quote" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Get Quote</Link>
            <Link to="/results" className="text-gray-700 dark:text-gray-300 hover:text-primary transition">Results</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="relative">
              <ShoppingCart size={24} className="text-primary cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}