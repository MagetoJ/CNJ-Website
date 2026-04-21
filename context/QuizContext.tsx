'use client'

import React, { createContext, useContext, useState } from 'react'

interface QuizContextType {
  isOpen: boolean
  openQuiz: () => void
  closeQuiz: () => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openQuiz = () => setIsOpen(true)
  const closeQuiz = () => setIsOpen(false)

  return (
    <QuizContext.Provider value={{ isOpen, openQuiz, closeQuiz }}>
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
