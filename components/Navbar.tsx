'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useQuiz } from '@/context/QuizContext'
import AdventureQuiz from './AdventureQuiz'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { isOpen: isQuizOpen, openQuiz, closeQuiz } = useQuiz()

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Luxury Brand Typography Logo */}
        <Link href="/" className="flex flex-col text-white tracking-wider">
          <span className="font-serif font-black text-2xl uppercase tracking-[0.2em]">CNJ</span>
          <span className="text-[9px] uppercase tracking-[0.45em] text-safari-gold -mt-1">Luxury Safaris</span>
        </Link>

        {/* Desktop Navigation Links map */}
        <div className="hidden xl:flex items-center gap-8 text-sm uppercase font-semibold tracking-widest text-gray-200">
          <Link href="/" className="hover:text-safari-gold transition-colors">Home</Link>
          <Link href="/safaris" className="hover:text-safari-gold transition-colors">Safaris</Link>
          <Link href="/destinations" className="hover:text-safari-gold transition-colors">Destinations</Link>
          <Link href="/experiences" className="hover:text-safari-gold transition-colors">Experiences</Link>
          <Link href="/about" className="hover:text-safari-gold transition-colors">About Us</Link>
          <Link href="/gallery" className="hover:text-safari-gold transition-colors">Gallery</Link>
          <Link href="/blog" className="hover:text-safari-gold transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-safari-gold transition-colors">Contact</Link>
        </div>

        {/* Cinematic Call To Action Button trigger */}
        <div className="flex items-center gap-4">
          <button 
            onClick={openQuiz}
            className="px-8 py-3 bg-safari-gold text-white text-xs font-bold tracking-widest uppercase rounded-none hover:bg-olive-green transition-all shadow-lg active:scale-95"
          >
            Plan Your Route
          </button>

          <button
            className="xl:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay navigation */}
      {isOpen && (
        <div className="xl:hidden fixed inset-x-0 top-24 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 text-center font-medium tracking-widest text-lg text-white">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Home</Link>
          <Link href="/safaris" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Safaris</Link>
          <Link href="/destinations" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Destinations</Link>
          <Link href="/experiences" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Experiences</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">About Us</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Gallery</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-safari-gold py-2">Contact</Link>
          <button 
            onClick={() => {
              openQuiz();
              setIsOpen(false);
            }}
            className="w-full mt-4 py-4 bg-safari-gold text-white text-xs font-bold uppercase tracking-widest"
          >
            Plan Your Route
          </button>
        </div>
      )}

      <AdventureQuiz isOpen={isQuizOpen} onClose={closeQuiz} />
    </nav>
  )
}