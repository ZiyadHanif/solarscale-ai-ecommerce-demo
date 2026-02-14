import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white dark:bg-gray-900 dark:border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="text-xl font-bold">SolarScale</h3>
            </div>
            <p className="text-blue-100 text-sm">AI-powered solar solutions for modern homes.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition">Solar Kits</a></li>
              <li><a href="#" className="hover:text-white transition">Batteries</a></li>
              <li><a href="#" className="hover:text-white transition">Inverters</a></li>
              <li><a href="#" className="hover:text-white transition">Monitoring</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>1-800-SOLAR-99</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@solarscale.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-900 dark:border-gray-800 pt-8 flex justify-between items-center">
          <p className="text-sm text-blue-100">© 2024 SolarScale. All rights reserved.</p>
          <div className="flex gap-4">
            <Facebook size={20} className="hover:text-secondary cursor-pointer transition" />
            <Twitter size={20} className="hover:text-secondary cursor-pointer transition" />
            <Instagram size={20} className="hover:text-secondary cursor-pointer transition" />
          </div>
        </div>
      </div>
    </footer>
  )
}