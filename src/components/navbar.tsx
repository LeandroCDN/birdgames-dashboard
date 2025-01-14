"use client"

import * as React from "react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Bird Games Dashboard
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/memerace" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              MemeRace
            </Link>
            <Link 
              href="/link2"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Link 2
            </Link>
            <Link 
              href="/link3"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Link 3
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Abrir menú principal</span>
            {/* Hamburger Icon */}
            <svg
              className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close Icon */}
            <svg
              className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/link1"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Link 1
            </Link>
            <Link
              href="/link2"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Link 2
            </Link>
            <Link
              href="/link3"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Link 3
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

