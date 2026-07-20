'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import LocalTime from '@/components/LocalTime'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/creators', label: 'Creators' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-espresso/10 bg-paper/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logos/forge-logo.png"
                alt="Forge Talent Agency"
                width={64}
                height={64}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <span className="hidden lg:block">
              <LocalTime />
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="u-link py-2 text-sm font-medium text-espresso hover:text-ember transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ember-deep"
            >
              Say hello
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="rounded text-espresso hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
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
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-4 pt-2 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-espresso transition-colors hover:bg-parchment hover:text-ember"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block rounded-full bg-ember px-4 py-2.5 text-center text-base font-semibold text-white transition-colors hover:bg-ember-deep"
              >
                Say hello
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
