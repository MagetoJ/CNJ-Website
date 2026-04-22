'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface HeroSectionProps {
  onStartQuiz: () => void
}

export default function HeroSection({ onStartQuiz }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-jungle-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Experience an unforgettable Big 5 safari at….jpeg"
          alt="African Safari Landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-jungle-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-block">
          <span className="text-leaf-green font-semibold text-sm uppercase tracking-widest">
            The world is a book, discover every page
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Unforgettable Safari Adventures
        </h1>

        {/* Subheading */}
        <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto mb-8 opacity-95">
          Custom-crafted itineraries. Real-time pricing. Book your East African adventure in minutes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onStartQuiz}
            className="px-8 py-4 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition flex items-center gap-2 text-lg"
          >
            Build Your Trip
            <ArrowRight size={20} />
          </button>
          <a 
            href="#explore"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition text-lg text-center"
          >
            Explore Destinations
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white text-sm">
          <div className="flex items-center gap-2">
            <span className="text-leaf-green text-2xl font-bold">500+</span>
            <span>Happy Travelers</span>
          </div>
          <div className="hidden sm:block h-6 border-r border-white/30"></div>
          <div className="flex items-center gap-2">
            <span className="text-leaf-green text-2xl font-bold">4.8★</span>
            <span>Average Rating</span>
          </div>
          <div className="hidden sm:block h-6 border-r border-white/30"></div>
          <div className="flex items-center gap-2">
            <span className="text-leaf-green text-2xl font-bold">5+</span>
            <span>Years Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
