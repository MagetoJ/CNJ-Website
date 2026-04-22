'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { ChevronDown, Menu, X } from 'lucide-react'
import AdventureQuiz from './AdventureQuiz'
import { useQuiz } from '@/context/QuizContext'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { isOpen: isQuizOpen, openQuiz, closeQuiz } = useQuiz()

  return (
    <NavigationMenu.Root className="sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/Cnj new logo.jpg"
            alt="CNJ Safaris Logo"
            width={40}
            height={40}
            className="rounded-lg object-contain w-10 h-10"
          />
          <span className="hidden lg:inline font-serif font-bold text-jungle-dark text-xl">
            CNJ Safaris
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu.List className="hidden md:flex list-none items-center gap-6 lg:gap-8 text-sm lg:text-base">
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

          <NavigationMenu.Item>
            <Link href="/careers" className="relative group text-jungle-dark hover:text-leaf-green transition font-medium">
              Careers
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
                <li><Link href="/safaris/amboseli-national-park" className="block p-2 hover:bg-sage-light rounded text-sm">Amboseli</Link></li>
                <li><Link href="/safaris/serengeti-ngorongoro-tanzania" className="block p-2 hover:bg-sage-light rounded text-sm">Serengeti</Link></li>
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

        </NavigationMenu.List>

        {/* CTA Button & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={openQuiz}
            className="px-4 sm:px-6 py-2 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition text-sm sm:text-base"
          >
            Book Now
          </button>

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
        <div className="md:hidden bg-white border-t border-gray-100 flex flex-col p-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <Link href="/#explore" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-jungle-dark hover:text-leaf-green">Explore Safaris</Link>
          <Link href="/safaris/maasai-mara" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-jungle-dark hover:text-leaf-green">Maasai Mara</Link>
          <Link href="/safaris/amboseli-national-park" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-jungle-dark hover:text-leaf-green">Amboseli</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-jungle-dark hover:text-leaf-green">About Us</Link>
          <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-jungle-dark hover:text-leaf-green">Careers</Link>
          <Link href="/partnerships" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-jungle-dark hover:text-leaf-green">Partnerships</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-jungle-dark hover:text-leaf-green">Contact</Link>
          <button 
            onClick={() => {
              openQuiz()
              setMobileMenuOpen(false)
            }}
            className="w-full px-6 py-2 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition"
          >
            Book Now
          </button>
        </div>
      )}

      {isQuizOpen && (
        <AdventureQuiz onClose={closeQuiz} />
      )}
    </NavigationMenu.Root>
  )
}