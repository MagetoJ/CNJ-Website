'use client'

import React, { createContext, useContext, useState } from 'react'

// Define a type for the quiz answers state
export interface QuizAnswers {
  destination?: string
  experience?: string
  budget?: string
  startDate?: string
  endDate?: string
  [key: string]: any // Fallback for extra dynamic values
}

interface QuizContextType {
  isOpen: boolean
  openQuiz: () => void
  closeQuiz: () => void
  answers: QuizAnswers
  updateAnswer: (key: keyof QuizAnswers, value: any) => void
  resetQuiz: () => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [answers, setAnswers] = useState<QuizAnswers>({})

  const openQuiz = () => setIsOpen(true)
  const closeQuiz = () => setIsOpen(false)

  const updateAnswer = (key: keyof QuizAnswers, value: any) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  const resetQuiz = () => {
    setAnswers({})
    setIsOpen(false)
  }

  return (
    <QuizContext.Provider value={{ isOpen, openQuiz, closeQuiz, answers, updateAnswer, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider')
  }
  return context
}
