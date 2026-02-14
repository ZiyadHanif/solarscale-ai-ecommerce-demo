import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Quote from './pages/Quote'
import Products from './pages/Products'
import Results from './pages/Results'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/products" element={<Products />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </AnimatePresence>
          
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App