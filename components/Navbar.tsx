// components/Navbar.tsx
'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useQuiz } from '@/context/QuizContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isDesktopShopOpen, setIsDesktopShopOpen] = React.useState(false)
  const [isDesktopAboutOpen, setIsDesktopAboutOpen] = React.useState(false)
  const [isDesktopResourcesOpen, setIsDesktopResourcesOpen] = React.useState(false)
  const [isMobileShopOpen, setIsMobileShopOpen] = React.useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = React.useState(false)
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = React.useState(false)
  const { openQuiz } = useQuiz()

  // Pre-configured global routing tree array matching your website paths
  const shopLinks = [
    { name: 'Souvenirs', href: '/shop/souvenirs' },
    { name: 'Apparel', href: '/shop/apparel' },
    { name: 'Accessories', href: '/shop/accessories' },
    { name: 'Luxury Accommodations', href: '/destinations/accommodations' },
  ]

  const aboutLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Partnerships', href: '/partnerships' },
  ]

  const resourceLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Safari Blog', href: '/blog' },
    { name: 'Help & FAQ', href: '/faq' },
  ]

  // Prevent background body bouncing loops while mobile menu drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Luxury Brand Typography Logo */}
        <Link href="/" className="flex flex-col text-white tracking-wider animate-fade-in" onClick={() => setIsOpen(false)}>
          <span className="font-serif font-black text-2xl uppercase tracking-[0.2em] text-white">CNJ</span>
          <span className="text-[9px] uppercase tracking-[0.45em] text-safari-gold -mt-1 font-semibold">Luxury Safaris</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-8 text-sm uppercase font-semibold tracking-widest text-zinc-300">
          <Link href="/safaris" className="hover:text-safari-gold transition-colors duration-200">Safaris</Link>
          
          {/* Desktop Shop Dropdown Trigger */}
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
                className={`transition-transform duration-300 ${isDesktopShopOpen ? 'rotate-180 text-safari-gold' : ''}`} 
              />
            </button>

            {isDesktopShopOpen && (
              <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-52 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 p-2 flex flex-col shadow-2xl rounded-xl animate-in fade-in slide-in-from-top-2 duration-200">
                <Link 
                  href="/shop"
                  onClick={() => setIsDesktopShopOpen(false)}
                  className="px-4 py-2.5 text-xs font-bold tracking-widest border-b border-white/5 text-safari-gold hover:bg-white/5 transition-colors rounded-t-lg"
                >
                  All Collections
                </Link>
                {shopLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsDesktopShopOpen(false)}
                    className="px-4 py-3 text-xs tracking-widest text-zinc-300 hover:text-white hover:bg-white/5 transition-colors last:rounded-b-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Desktop About Dropdown */}
          <div 
            className="relative h-24 flex items-center"
            onMouseEnter={() => setIsDesktopAboutOpen(true)}
            onMouseLeave={() => setIsDesktopAboutOpen(false)}
          >
            <button className="hover:text-safari-gold transition-colors flex items-center gap-1.5 uppercase font-semibold tracking-widest outline-none">
              <span>About</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 ${isDesktopAboutOpen ? 'rotate-180 text-safari-gold' : ''}`} 
              />
            </button>

            {isDesktopAboutOpen && (
              <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-48 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 p-2 flex flex-col shadow-2xl rounded-xl animate-in fade-in slide-in-from-top-2 duration-200">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsDesktopAboutOpen(false)}
                    className="px-4 py-3 text-xs tracking-widest text-zinc-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Resources Dropdown */}
          <div 
            className="relative h-24 flex items-center"
            onMouseEnter={() => setIsDesktopResourcesOpen(true)}
            onMouseLeave={() => setIsDesktopResourcesOpen(false)}
          >
            <button className="hover:text-safari-gold transition-colors flex items-center gap-1.5 uppercase font-semibold tracking-widest outline-none">
              <span>Resources</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 ${isDesktopResourcesOpen ? 'rotate-180 text-safari-gold' : ''}`} 
              />
            </button>

            {isDesktopResourcesOpen && (
              <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-52 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 p-2 flex flex-col shadow-2xl rounded-xl animate-in fade-in slide-in-from-top-2 duration-200">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsDesktopResourcesOpen(false)}
                    className="px-4 py-3 text-xs tracking-widest text-zinc-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-safari-gold transition-colors duration-200">Contact</Link>
        </div>

        {/* Dynamic Action Buttons Trigger wrappers */}
        <div className="flex items-center gap-4">
          <button 
            onClick={openQuiz}
            className="px-6 sm:px-8 py-3 bg-safari-gold text-white text-xs font-bold tracking-widest uppercase hover:bg-zinc-900 border border-safari-gold hover:border-white/20 transition-all duration-300 shadow-lg shadow-safari-gold/10 active:scale-95"
          >
            Plan Your Route
          </button>

          <button
            className="xl:hidden p-2 text-zinc-300 hover:text-safari-gold transition-colors duration-200 outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle structural layout navigation drawer panel context"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 📱 OPTIMIZED HIGH CONTRAST MOBILE NAVIGATION MENU */}
      {isOpen && (
        <div className="xl:hidden fixed inset-x-0 top-24 bottom-0 z-50 bg-zinc-950/98 backdrop-blur-3xl px-6 py-8 flex flex-col max-h-[calc(100vh-6rem)] overflow-y-auto">
          
          {/* Main Links Container Section */}
          <div className="flex flex-col text-zinc-200 font-serif font-medium tracking-[0.15em] text-xl divide-y divide-white/5">
            <Link href="/safaris" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-4 text-center transition-colors">Safaris</Link>
            
            {/* Mobile Expandable Category Accordion block */}
            <div className="py-2 w-full">
              <button
                onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                className="w-full py-2 flex items-center justify-center gap-2 hover:text-safari-gold font-serif text-center font-medium tracking-[0.15em] transition-colors"
              >
                <span>Shop</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 text-zinc-400 ${isMobileShopOpen ? 'rotate-180 text-safari-gold' : ''}`} 
                />
              </button>
              
              {isMobileShopOpen && (
                <div className="bg-white/5 rounded-xl my-2 p-2 flex flex-col gap-1 border border-white/5 animate-in fade-in slide-in-from-top-1 duration-200 font-sans tracking-widest">
                  <Link 
                    href="/shop"
                    onClick={() => { setIsMobileShopOpen(false); setIsOpen(false); }}
                    className="py-2.5 text-xs uppercase font-bold text-safari-gold text-center border-b border-white/5"
                  >
                    View All Shop
                  </Link>
                  {shopLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => { setIsMobileShopOpen(false); setIsOpen(false); }}
                      className="py-3 text-sm text-zinc-300 hover:text-white text-center transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile About Accordion */}
            <div className="py-2 w-full">
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className="w-full py-2 flex items-center justify-center gap-2 hover:text-safari-gold font-serif text-center font-medium tracking-[0.15em] transition-colors"
              >
                <span>About</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 text-zinc-400 ${isMobileAboutOpen ? 'rotate-180 text-safari-gold' : ''}`} 
                />
              </button>
              
              {isMobileAboutOpen && (
                <div className="bg-white/5 rounded-xl my-2 p-2 flex flex-col gap-1 border border-white/5 animate-in fade-in slide-in-from-top-1 duration-200 font-sans tracking-widest text-sm">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="py-3 text-zinc-300 hover:text-white text-center transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Resources Accordion */}
            <div className="py-2 w-full">
              <button
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                className="w-full py-2 flex items-center justify-center gap-2 hover:text-safari-gold font-serif text-center font-medium tracking-[0.15em] transition-colors"
              >
                <span>Resources</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 text-zinc-400 ${isMobileResourcesOpen ? 'rotate-180 text-safari-gold' : ''}`} 
                />
              </button>
              
              {isMobileResourcesOpen && (
                <div className="bg-white/5 rounded-xl my-2 p-2 flex flex-col gap-1 border border-white/5 animate-in fade-in slide-in-from-top-1 duration-200 font-sans tracking-widest text-sm">
                  {resourceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="py-3 text-zinc-300 hover:text-white text-center transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-4 text-center transition-colors">Contact</Link>
          </div>
          
          {/* Action Trigger in Drawer Footer block */}
          <div className="pt-8 border-t border-white/5 mt-auto">
            <button 
              onClick={() => { openQuiz(); setIsOpen(false); }}
              className="w-full py-4.5 bg-safari-gold text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-safari-gold/10"
            >
              Plan Your Route
            </button>
          </div>

        </div>
      )}
    </nav>
  )
}