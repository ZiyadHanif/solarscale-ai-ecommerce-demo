import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, CheckCircle, Loader } from 'lucide-react'
import { calculateSystemSize, estimatePrice } from '../utils/calculations'

export default function Quote() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(12)
  const [formData, setFormData] = useState({
    roofType: 'asphalt',
    location: 'California',
    energyUsage: 1000,
    homeSize: 2000
  })

  // Countdown timer
  useEffect(() => {
    if (loading && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
    if (timeLeft === 0 && loading) {
      setLoading(false)
      setCompleted(true)
    }
  }, [loading, timeLeft])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: isNaN(value) ? value : parseInt(value)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      setLoading(true)
      setTimeLeft(12)
    }
  }

  const systemSize = calculateSystemSize(formData.energyUsage)
  const price = estimatePrice(systemSize)

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12"
      >
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <motion.div
                animate={{
                  scale: step === s ? 1.2 : 1,
                  backgroundColor: step >= s ? '#FB8500' : '#E5E7EB'
                }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
                onClick={() => s <= step && setStep(s)}
              >
                {s}
              </motion.div>
              {s < 3 && <div className="h-1 flex-1 mx-2 bg-gray-300" />}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8"
      >
        {/* Step 1: Roof Type */}
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What's your roof type?</h2>
            <select
              name="roofType"
              value={formData.roofType}
              onChange={handleInputChange}
              className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:border-primary focus:outline-none text-lg"
            >
              <option value="asphalt">Asphalt Shingles</option>
              <option value="metal">Metal Roof</option>
              <option value="tile">Tile Roof</option>
              <option value="flat">Flat Roof</option>
            </select>
          </div>
        )}

        {/* Step 2: Location & Energy */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Tell us about your home</h2>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:border-primary focus:outline-none"
              >
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="Florida">Florida</option>
                <option value="New York">New York</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Monthly Energy Usage (kWh)
              </label>
              <input
                type="number"
                name="energyUsage"
                value={formData.energyUsage}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:border-primary focus:outline-none"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Average: 500-1500 kWh</p>
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Home Size (sq ft)
              </label>
              <input
                type="number"
                name="homeSize"
                value={formData.homeSize}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:border-primary focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && !loading && !completed && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Review Your Quote</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300 mb-2">Recommended System Size</p>
                <p className="text-4xl font-bold text-primary mb-4">{systemSize} kW</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Based on your {formData.energyUsage} kWh monthly usage</p>
              </div>

              <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300 mb-2">Estimated System Price</p>
                <p className="text-4xl font-bold text-secondary mb-4">${price.toLocaleString()}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Before incentives & rebates</p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-gray-700 border-l-4 border-yellow-400 p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                💡 <span className="font-semibold">Pro tip:</span> With federal tax credits (30%) and state rebates, you could save ${Math.round(price * 0.35).toLocaleString()}.
              </p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 border-4 border-gray-300 border-t-primary rounded-full mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Generating Your Quote</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Our AI is analyzing your home...</p>
            <div className="text-5xl font-bold text-secondary">{timeLeft}s</div>
          </div>
        )}

        {/* Completed State */}
        {completed && (
          <div className="text-center py-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle size={48} className="text-green-600" />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Quote Generated!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Your personalized solar quote is ready</p>

            {/* PDF Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 mb-8 text-left max-w-2xl mx-auto border-2 border-dashed border-gray-300 dark:border-gray-600"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText size={32} className="text-primary" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Your Solar Quote</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Generated {new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b pb-2 border-gray-300 dark:border-gray-600">
                  <span className="text-gray-600 dark:text-gray-300">System Size:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{systemSize} kW</span>
                </div>
                <div className="flex justify-between border-b pb-2 border-gray-300 dark:border-gray-600">
                  <span className="text-gray-600 dark:text-gray-300">Panel Count:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{Math.ceil(systemSize * 3)} panels</span>
                </div>
                <div className="flex justify-between border-b pb-2 border-gray-300 dark:border-gray-600">
                  <span className="text-gray-600 dark:text-gray-300">System Price:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">${price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2">
                  <span className="text-gray-900 dark:text-white">After Incentives:</span>
                  <span className="text-green-600">${Math.round(price * 0.65).toLocaleString()}</span>
                </div>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn-primary inline-flex items-center gap-2 mb-4"
            >
              <Download size={20} />
              Download PDF Quote
            </motion.button>

            <p className="text-gray-600 dark:text-gray-300 text-sm">
              A solar consultant will contact you within 24 hours
            </p>
          </div>
        )}

        {/* Action Buttons */}
        {!loading && !completed && (
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Back
              </button>
            )}
            <button
              onClick={handleSubmit}
              className="flex-1 btn-primary"
            >
              {step === 3 ? 'Generate Quote' : 'Next'}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  )
}