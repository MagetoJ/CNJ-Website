'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Cnj new logo.jpg"
            alt="CNJ Safaris Logo"
            width={40}
            height={40}
            className="rounded-lg object-contain"
          />
          <span className="hidden sm:inline font-serif font-bold text-jungle-dark text-xl">
            CNJ Safaris
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#explore" className="text-jungle-dark hover:text-leaf-green transition">
            Explore Safaris
          </Link>
          <Link href="/about" className="text-jungle-dark hover:text-leaf-green transition">
            About Us
          </Link>
          <Link href="/partnerships" className="text-jungle-dark hover:text-leaf-green transition">
            Partnerships
          </Link>
          <Link href="/shop" className="text-jungle-dark hover:text-leaf-green transition font-semibold">
            Shop Gear
          </Link>
          <Link href="/contact" className="text-jungle-dark hover:text-leaf-green transition">
            Contact
          </Link>
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="px-4 sm:px-6 py-2 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition text-sm sm:text-base">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-jungle-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          <Link href="/#explore" className="block text-jungle-dark hover:text-leaf-green transition">
            Explore Safaris
          </Link>
          <Link href="/about" className="block text-jungle-dark hover:text-leaf-green transition">
            About Us
          </Link>
          <Link href="/partnerships" className="block text-jungle-dark hover:text-leaf-green transition">
            Partnerships
          </Link>
          <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="block text-jungle-dark hover:text-leaf-green transition font-semibold">
            Shop Gear
          </Link>
          <Link href="/contact" className="block text-jungle-dark hover:text-leaf-green transition">
            Contact
          </Link>
          <button className="w-full px-6 py-2 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition">
            Book Now
          </button>
        </div>
      )}
    </header>
  )
}
