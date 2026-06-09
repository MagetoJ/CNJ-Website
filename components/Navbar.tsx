// components/Navbar.tsx
'use client'

import * as React from 'react';
import Link from 'next/link'
import { Menu, X, ChevronDown, HelpCircle, BookOpen, Layers, Image as ImageIcon, Users2, ShoppingBag } from 'lucide-react';
import { useQuiz } from '@/context/QuizContext'
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isDesktopShopOpen, setIsDesktopShopOpen] = React.useState(false)
  const [isDesktopAboutOpen, setIsDesktopAboutOpen] = React.useState(false)
  const [isDesktopResourcesOpen, setIsDesktopResourcesOpen] = React.useState(false)
  
  const [isMobileShopOpen, setIsMobileShopOpen] = React.useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = React.useState(false)
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = React.useState(false)
  
  const { openQuiz } = useQuiz()

  const shopLinks = [
    { name: 'Souvenirs', href: '/shop/souvenirs' },
    { name: 'Apparel', href: '/shop/apparel' },
    { name: 'Accessories', href: '/shop/accessories' },
    { name: 'Luxury Accommodations', href: '/destinations/accommodations' },
  ]

  const aboutLinks = [
    { name: 'Our Story', href: '/about', icon: Users2 },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
    { name: 'Partnerships', href: '/partnerships', icon: Layers },
  ]

  const resourceLinks = [
    { name: 'Services', href: '/services', icon: Layers },
    { name: 'Safari Blog', href: '/blog', icon: BookOpen },
    { name: 'Help & FAQ', href: '/faq', icon: HelpCircle },
  ]

  // Prevent background body scrolling loops while mobile menu drawer is open
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
            <button className="hover:text-safari-gold transition-colors flex items-center gap-1.5 uppercase font-semibold tracking-widest outline-none">
              <span>Shop</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isDesktopShopOpen ? 'rotate-180 text-safari-gold' : ''}`} />
            </button>

            <AnimatePresence>
              {isDesktopShopOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-[84px] left-1/2 -translate-x-1/2 w-52 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 p-2 flex flex-col shadow-2xl rounded-xl"
                >
                  <Link href="/shop" onClick={() => setIsDesktopShopOpen(false)} className="px-4 py-2.5 text-xs font-bold tracking-widest border-b border-white/5 text-safari-gold hover:bg-white/5 transition-colors rounded-t-lg">
                    All Collections
                  </Link>
                  {shopLinks.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setIsDesktopShopOpen(false)} className="px-4 py-3 text-xs tracking-widest text-zinc-300 hover:text-white hover:bg-white/5 transition-colors last:rounded-b-lg">
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop About Dropdown */}
          <div 
            className="relative h-24 flex items-center"
            onMouseEnter={() => setIsDesktopAboutOpen(true)}
            onMouseLeave={() => setIsDesktopAboutOpen(false)}
          >
            <button className="hover:text-safari-gold transition-colors flex items-center gap-1.5 uppercase font-semibold tracking-widest outline-none">
              <span>About</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isDesktopAboutOpen ? 'rotate-180 text-safari-gold' : ''}`} />
            </button>

            <AnimatePresence>
              {isDesktopAboutOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-[84px] left-1/2 -translate-x-1/2 w-48 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 p-2 flex flex-col shadow-2xl rounded-xl"
                >
                  {aboutLinks.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setIsDesktopAboutOpen(false)} className="px-4 py-3 text-xs tracking-widest text-zinc-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg flex items-center gap-2">
                      <item.icon size={12} className="text-safari-gold/50" />
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Resources Dropdown */}
          <div 
            className="relative h-24 flex items-center"
            onMouseEnter={() => setIsDesktopResourcesOpen(true)}
            onMouseLeave={() => setIsDesktopResourcesOpen(false)}
          >
            <button className="hover:text-safari-gold transition-colors flex items-center gap-1.5 uppercase font-semibold tracking-widest outline-none">
              <span>Resources</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isDesktopResourcesOpen ? 'rotate-180 text-safari-gold' : ''}`} />
            </button>

            <AnimatePresence>
              {isDesktopResourcesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-[84px] left-1/2 -translate-x-1/2 w-52 bg-zinc-950/95 backdrop-blur-2xl border border-white/10 p-2 flex flex-col shadow-2xl rounded-xl"
                >
                  {resourceLinks.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setIsDesktopResourcesOpen(false)} className="px-4 py-3 text-xs tracking-widest text-zinc-300 hover:text-white hover:bg-white/5 transition-colors rounded-lg flex items-center gap-2">
                      <item.icon size={12} className="text-safari-gold/50" />
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
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
            className="xl:hidden p-2 text-zinc-300 hover:text-safari-gold transition-colors duration-200 outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 📱 TRUE SLIDE-OUT SIDEBAR SIDE DRAWER FOR MOBILE & TABLETS */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Smooth Dimming Background Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="xl:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Right-Side Elegant Sidebar Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="xl:hidden fixed right-0 top-0 bottom-0 w-full max-w-sm sm:max-w-md bg-zinc-950 border-l border-white/10 z-50 p-6 pt-28 flex flex-col justify-between shadow-2xl overflow-y-auto h-screen"
            >
              {/* Main Links List Navigation Container */}
              <div className="flex flex-col text-zinc-200 font-serif font-medium tracking-[0.12em] text-xl divide-y divide-white/5">
                <Link href="/safaris" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-4 block transition-colors">
                  Safaris
                </Link>
                
                {/* Mobile Accordion Component: Shop */}
                <div className="py-2">
                  <button
                    onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                    className="w-full py-3 flex items-center justify-between text-left hover:text-safari-gold transition-colors"
                  >
                    <span>Shop</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 text-zinc-400 ${isMobileShopOpen ? 'rotate-180 text-safari-gold' : ''}`} />
                  </button>
                  {isMobileShopOpen && (
                    <div className="bg-white/5 rounded-xl my-2 p-2 flex flex-col gap-1 border border-white/5 font-sans text-sm tracking-wider">
                      <Link href="/shop" onClick={() => setIsOpen(false)} className="py-2.5 text-xs uppercase font-bold text-safari-gold border-b border-white/5 flex items-center gap-2">
                        <ShoppingBag size={14} /> View All Shop
                      </Link>
                      {shopLinks.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="py-3 pl-2 text-zinc-400 hover:text-white transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Accordion Component: About */}
                <div className="py-2">
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className="w-full py-3 flex items-center justify-between text-left hover:text-safari-gold transition-colors"
                  >
                    <span>About</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 text-zinc-400 ${isMobileAboutOpen ? 'rotate-180 text-safari-gold' : ''}`} />
                  </button>
                  {isMobileAboutOpen && (
                    <div className="bg-white/5 rounded-xl my-2 p-2 flex flex-col gap-1 border border-white/5 font-sans text-sm tracking-wider">
                      {aboutLinks.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="py-3 pl-2 text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                          <item.icon size={14} className="text-safari-gold/70" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Accordion Component: Resources */}
                <div className="py-2">
                  <button
                    onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                    className="w-full py-3 flex items-center justify-between text-left hover:text-safari-gold transition-colors"
                  >
                    <span>Resources</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 text-zinc-400 ${isMobileResourcesOpen ? 'rotate-180 text-safari-gold' : ''}`} />
                  </button>
                  {isMobileResourcesOpen && (
                    <div className="bg-white/5 rounded-xl my-2 p-2 flex flex-col gap-1 border border-white/5 font-sans text-sm tracking-wider">
                      {resourceLinks.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="py-3 pl-2 text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                          <item.icon size={14} className="text-safari-gold/70" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-4 block transition-colors">
                  Contact
                </Link>
              </div>
              
              {/* Drawer Footer CTA */}
              <div className="pt-8 border-t border-white/5 mt-auto">
                <button 
                  onClick={() => { openQuiz(); setIsOpen(false); }}
                  className="w-full py-4 bg-safari-gold text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-safari-gold/10"
                >
                  Plan Your Route
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}