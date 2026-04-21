'use client'

import * as React from 'react'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <NavigationMenu.Root className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-jungle-dark rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">CNJ</span>
          </div>
          <span className="hidden sm:inline font-serif font-bold text-jungle-dark text-xl">
            CNJ Safaris
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu.List className="hidden md:flex list-none items-center gap-8">
          <NavigationMenu.Item>
            <Link href="/#explore" className="text-jungle-dark hover:text-leaf-green transition font-medium">
              Explore Safaris
            </Link>
          </NavigationMenu.Item>
          
          <NavigationMenu.Item>
            <Link href="/about" className="relative group text-jungle-dark hover:text-leaf-green transition font-medium">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-leaf-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item className="relative">
            <NavigationMenu.Trigger className="group flex items-center gap-1 text-jungle-dark hover:text-leaf-green transition font-medium outline-none">
              Destinations <ChevronDown size={16} className="transition-transform group-data-[state=open]:rotate-180" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white p-2 shadow-lg border border-gray-100">
              <ul className="flex flex-col gap-1">
                <li><Link href="/safaris/maasai-mara" className="block p-2 hover:bg-sage-light rounded text-sm">Maasai Mara</Link></li>
                <li><Link href="/safaris/serengeti" className="block p-2 hover:bg-sage-light rounded text-sm">Serengeti</Link></li>
                <li><Link href="/safaris/gorilla-trekking" className="block p-2 hover:bg-sage-light rounded text-sm">Gorilla Trekking</Link></li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link href="/partnerships" className="text-jungle-dark hover:text-leaf-green transition font-medium">
              Partnerships
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link href="/contact" className="text-jungle-dark hover:text-leaf-green transition font-medium">
              Contact
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <button className="px-6 py-2 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition">
              Book Now
            </button>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-jungle-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          <Link href="/#explore" className="block text-jungle-dark hover:text-leaf-green transition">Explore Safaris</Link>
          <Link href="/about" className="block text-jungle-dark hover:text-leaf-green transition">About Us</Link>
          <Link href="/partnerships" className="block text-jungle-dark hover:text-leaf-green transition">Partnerships</Link>
          <Link href="/contact" className="block text-jungle-dark hover:text-leaf-green transition">Contact</Link>
          <button className="w-full px-6 py-2 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition">
            Book Now
          </button>
        </div>
      )}
    </NavigationMenu.Root>
  )
}