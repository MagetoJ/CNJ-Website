'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import QuickLinks from '@/components/QuickLinks'
import TestimonialSection from '@/components/TestimonialSection'
import AdventureQuiz from '@/components/AdventureQuiz'
import WhatsAppFooter from '@/components/WhatsAppFooter'

export default function HomePage() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <HeroSection onStartQuiz={() => setIsQuizOpen(true)} />
      
      <div id="explore">
        <QuickLinks />
      </div>

      <TestimonialSection />

      {isQuizOpen && (
        <AdventureQuiz onClose={() => setIsQuizOpen(false)} />
      )}

      <WhatsAppFooter />
    </main>
  )
}
