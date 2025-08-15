'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-32">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logos/forge-logo.png"
                alt="Forge Talent Agency"
                width={500}
                height={150}
                className="h-28 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-forge-charcoal hover:text-forge-orange px-3 py-2 text-sm font-semibold transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-forge-charcoal hover:text-forge-orange px-3 py-2 text-sm font-semibold transition-colors">
              About
            </Link>
            <Link href="/clients" className="text-forge-charcoal hover:text-forge-orange px-3 py-2 text-sm font-semibold transition-colors">
              Clients
            </Link>
            <Link href="/contact" className="bg-forge-orange text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-forge-orange-dark transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block text-forge-charcoal hover:text-forge-orange px-3 py-2 text-base font-semibold transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-forge-charcoal hover:text-forge-orange px-3 py-2 text-base font-semibold transition-colors">
                About
              </Link>
              <Link href="/clients" className="block text-forge-charcoal hover:text-forge-orange px-3 py-2 text-base font-semibold transition-colors">
                Clients
              </Link>
              <Link href="/contact" className="block bg-forge-orange text-white px-3 py-2 rounded-md text-base font-semibold hover:bg-forge-orange-dark transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}