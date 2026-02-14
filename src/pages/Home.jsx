import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import ChatWidget from '../components/ChatWidget'
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

export default function Home() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
    // Show toast notification
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-20 text-9xl"
          >
            ☀️
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-96">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Solar Energy Made <span className="text-secondary">Smart</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                AI-powered solar solutions that save you money and reduce your carbon footprint. Get an instant quote in 12 seconds.
              </p>
              <div className="flex gap-4">
                <Link to="/quote" className="btn-primary inline-flex items-center gap-2">
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link to="/products" className="btn-outline text-white border-white hover:bg-white hover:text-primary">
                  View Products
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-9xl text-center"
            >
              ☀️
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: TrendingUp, label: '68% Support Cost Reduction', value: '$2,400/month saved' },
              { icon: CheckCircle, label: '41% Conversion Increase', value: '312 AI-handled inquiries' },
              { icon: Zap, label: '4.8s → 1.2s Load Time', value: '75% faster performance' },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className="text-center p-8 bg-white dark:bg-gray-700 rounded-xl shadow-md"
                >
                  <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.value}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Solar Kits
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            AI-powered sizing recommendations for every home. Get instant pricing and technical specifications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-8"
        >
          {mockProducts.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Use our AI-powered sizing tool to get an instant quote. No obligations.
            </p>
            <Link to="/quote" className="btn-primary bg-secondary hover:bg-orange-600 inline-block">
              Get Your Free Quote Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}