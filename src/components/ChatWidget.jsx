import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

const demoMessages = [
  {
    id: 1,
    text: "What size system do I need for a 2000 sq ft home?",
    sender: 'user',
    timestamp: new Date(Date.now() - 5000)
  },
  {
    id: 2,
    text: "Based on average energy usage of 900-1000 kWh/month, I recommend a 6kW system. This will cover approximately 80% of your annual energy needs.",
    sender: 'ai',
    timestamp: new Date(Date.now() - 3000)
  },
  {
    id: 3,
    text: "How much would that cost?",
    sender: 'user',
    timestamp: new Date(Date.now() - 1000)
  },
  {
    id: 4,
    text: "A 6kW system typically costs $12,000-$15,000 before incentives. With federal tax credits and state rebates, you'd pay around $7,000-$9,000. Your ROI would be 5-7 years.",
    sender: 'ai',
    timestamp: new Date(Date.now() - 500)
  }
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(demoMessages)
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date()
      }
      setMessages([...messages, newMessage])
      setInputValue('')

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: "I'm an AI assistant. In a production environment, this would connect to OpenAI API. How else can I help you with your solar needs?",
          sender: 'ai',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiResponse])
      }, 1500)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-20 right-4 w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col z-40 border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
              <div>
                <h3 className="font-bold">AI Solar Consultant</h3>
                <p className="text-xs text-green-200">🟢 Available 24/7</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-700 p-1 rounded"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t dark:border-gray-700 p-4 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:border-primary"
              />
              <button
                onClick={handleSend}
                className="bg-primary text-white p-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition z-40"
      >
        <MessageCircle size={24} />
      </motion.button>
    </>
  )
}