'use client'

import HeroSection from '@/components/HeroSection'
import QuickLinks from '@/components/QuickLinks'
import TestimonialSection from '@/components/TestimonialSection'
import { useQuiz } from '@/context/QuizContext'

export default function HomePage() {
  const { openQuiz } = useQuiz()

  return (
    <main className="min-h-screen bg-deep-black">
      <HeroSection onStartQuiz={openQuiz} />
      <QuickLinks />
      <TestimonialSection />
    </main>
  )
}