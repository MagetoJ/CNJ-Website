// components/Navbar.tsx
'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useQuiz } from '@/context/QuizContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isDesktopShopOpen, setIsDesktopShopOpen] = React.useState(false)
  const [isMobileShopOpen, setIsMobileShopOpen] = React.useState(false)
  const { openQuiz } = useQuiz()

  // Pre-configured shop sub-routes mapping exactly to your application's pages
  const shopLinks = [
    { name: 'Souvenirs', href: '/shop/souvenirs' },
    { name: 'Apparel', href: '/shop/apparel' },
    { name: 'Accessories', href: '/shop/accessories' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Luxury Brand Typography Logo */}
        <Link href="/" className="flex flex-col text-white tracking-wider">
          <span className="font-serif font-black text-2xl uppercase tracking-[0.2em]">CNJ</span>
          <span className="text-[9px] uppercase tracking-[0.45em] text-safari-gold -mt-1">Luxury Safaris</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-8 text-sm uppercase font-semibold tracking-widest text-gray-200">
          <Link href="/" className="hover:text-safari-gold transition-colors">Home</Link>
          <Link href="/safaris" className="hover:text-safari-gold transition-colors">Safaris</Link>
          <Link href="/services" className="hover:text-safari-gold transition-colors">Services</Link>
          
          {/* Shop Hover/Click Dropdown Container */}
          <div 
            className="relative h-24 flex items-center"
            onMouseEnter={() => setIsDesktopShopOpen(true)}
            onMouseLeave={() => setIsDesktopShopOpen(false)}
          >
            <button 
              onClick={() => setIsDesktopShopOpen(!isDesktopShopOpen)}
              className="hover:text-safari-gold transition-colors flex items-center gap-1.5 uppercase font-semibold tracking-widest outline-none"
            >
              <span>Shop</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 ${isDesktopShopOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Desktop Dropdown Flyout Menu */}
            {isDesktopShopOpen && (
              <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-48 bg-black/95 backdrop-blur-2xl border border-white/10 p-2 flex flex-col shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                <Link 
                  href="/shop"
                  onClick={() => setIsDesktopShopOpen(false)}
                  className="px-4 py-2 text-xs font-bold tracking-widest border-b border-white/5 text-safari-gold hover:bg-white/5 transition-colors"
                >
                  All Collections
                </Link>
                {shopLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsDesktopShopOpen(false)}
                    className="px-4 py-3 text-xs tracking-widest text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-safari-gold transition-colors">About Us</Link>
          <Link href="/gallery" className="hover:text-safari-gold transition-colors">Gallery</Link>
          <Link href="/blog" className="hover:text-safari-gold transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-safari-gold transition-colors">Contact</Link>
        </div>

        {/* Cinematic Call To Action Button trigger */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => { console.log('Navbar: Plan Your Route button clicked, calling openQuiz()'); openQuiz(); }}
            className="px-8 py-3 bg-safari-gold text-white text-xs font-bold tracking-widest uppercase rounded-none hover:bg-olive-green transition-all shadow-lg active:scale-95"
          >
            Plan Your Route
          </button>

          <button
            className="xl:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle structural layout navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay navigation */}
      {isOpen && (
        <div className="xl:hidden fixed inset-x-0 top-24 bottom-0 bg-black/95 backdrop-blur-2xl border-t border-white/10 p-6 flex flex-col gap-3 overflow-y-auto font-medium tracking-widest text-lg text-white">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Home</Link>
          <Link href="/safaris" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Safaris</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Services</Link>
          
          {/* Mobile Accordion Shop Navigation Control */}
          <div className="w-full border-y border-white/5 py-1">
            <button
              onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
              className="w-full py-2 flex items-center justify-center gap-2 hover:text-safari-gold text-center font-medium tracking-widest"
            >
              <span>Shop</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${isMobileShopOpen ? 'rotate-180 text-safari-gold' : ''}`} 
              />
            </button>
            
            {/* Mobile Dropdown Sub-Links Tree */}
            {isMobileShopOpen && (
              <div className="bg-white/5 rounded-none my-1 py-1 flex flex-col gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                <Link 
                  href="/shop"
                  onClick={() => {
                    setIsMobileShopOpen(false);
                    setIsOpen(false);
                  }}
                  className="py-2.5 text-sm tracking-widest text-safari-gold text-center font-bold"
                >
                  View All Shop
                </Link>
                {shopLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setIsMobileShopOpen(false);
                      setIsOpen(false);
                    }}
                    className="py-2.5 text-sm tracking-widest text-gray-300 hover:text-white text-center"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">About Us</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Gallery</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Contact</Link>
          <button 
            onClick={() => { // Mobile menu button
              console.log('Navbar (Mobile): Plan Your Route button clicked, calling openQuiz()');
              openQuiz();
              setIsOpen(false);
            }}
            className="w-full mt-4 py-4 bg-safari-gold text-white text-xs font-bold uppercase tracking-widest"
          >
            Plan Your Route
          </button>
        </div>
      )}
    </nav>
  )
}