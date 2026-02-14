import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Clock } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    title: '68% Support Cost Reduction',
    value: '$2,400/month',
    description: 'Automated AI handling customer inquiries 24/7'
  },
  {
    icon: Users,
    title: '41% Conversion Increase',
    value: '312 leads',
    description: 'First month AI-handled customer inquiries'
  },
  {
    icon: Zap,
    title: 'Page Load Improvement',
    value: '4.8s → 1.2s',
    description: '75% faster loading with Vite optimization'
  },
  {
    icon: Clock,
    title: 'Quote Generation Time',
    value: '12 seconds',
    description: 'Instant AI-powered quoting system'
  }
]

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

export default function Results() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Hero */}
      <section className="hero-gradient text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Study Results</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              How AI-powered solar e-commerce transformed customer experience and increased revenue
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-secondary"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-12 h-12 text-secondary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                      {stat.title}
                    </h3>
                    <p className="text-4xl font-bold text-primary dark:text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* Implementation Timeline */}
      <section className="bg-light dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Implementation Timeline
          </h2>

          <div className="space-y-8">
            {[
              { phase: 'Phase 1', title: 'Chatbot Integration', time: 'Week 1-2', status: 'Complete' },
              { phase: 'Phase 2', title: 'Quote Generator Setup', time: 'Week 3-4', status: 'Complete' },
              { phase: 'Phase 3', title: 'Analytics & Testing', time: 'Week 5-6', status: 'Complete' },
              { phase: 'Phase 4', title: 'Full Deployment', time: 'Week 7', status: 'Complete' },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{p.phase}</p>
                  <div className="flex gap-4">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      ⏱️ {p.time}
                    </span>
                    <span className="text-sm font-semibold text-green-600">✓ {p.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'React 18', icon: '⚛️' },
            { name: 'Vite', icon: '⚡' },
            { name: 'Tailwind CSS', icon: '🎨' },
            { name: 'Framer Motion', icon: '🎬' },
          ].map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h3 className="font-bold text-gray-900 dark:text-white">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready for a Consultation?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how AI can transform your business
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-primary bg-secondary hover:bg-orange-600"
          >
            Schedule a Call
          </motion.button>
        </div>
      </section>
    </div>
  )
}