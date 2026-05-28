'use client'

import HeroSection from '@/components/HeroSection'
import QuickLinks from '@/components/QuickLinks'
import TestimonialSection from '@/components/TestimonialSection'
import { useQuiz } from '@/context/QuizContext'
import WhatsAppFooter from '@/components/WhatsAppFooter'

export default function HomePage() {
  const { openQuiz } = useQuiz()

  return (
    <main className="bg-deep-black">
      <HeroSection onStartQuiz={openQuiz} />
      <QuickLinks />
      <TestimonialSection />
      <WhatsAppFooter />
    </main>
  )
}