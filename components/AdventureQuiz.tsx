'use client'

import React from 'react'
import { X } from 'lucide-react'
import { useQuiz } from '@/context/QuizContext'
import QuizStep1 from './quiz/QuizStep1'
import QuizStep2 from './quiz/QuizStep2'
import QuizStep3 from './quiz/QuizStep3'
import QuizStep4 from './quiz/QuizStep4'
import QuizResults from './quiz/QuizResults'

export default function AdventureQuiz() {
  const { currentStep, isOpen, closeQuiz } = useQuiz()

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Blurring Frosted Glass Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={closeQuiz} 
      />

      {/* Modal Content Window */}
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-none overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/40">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-safari-gold">CNJ Expedition Blueprint</span>
            <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">Plan Your Custom Route</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all active:scale-90"
            aria-label="Close Modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-white flex-1">
          {currentStep === 1 && (
            <QuizStep1
              // value={quizData.destination} // These props are now handled internally by QuizContext
              // onChange={(value) => updateQuizData('destination', value)}
            />
          )}
          {currentStep === 2 && (
            <QuizStep2
              // value={quizData.experience}
              // onChange={(value) => updateQuizData('experience', value)}
            />
          )}
          {currentStep === 3 && (
            <QuizStep3
              // value={quizData.budget}
              // onChange={(value) => updateQuizData('budget', value)}
            />
          )}
          {currentStep === 4 && (
            <QuizStep4
              // startDate={quizData.startDate}
              // endDate={quizData.endDate}
              // onStartDateChange={(value) => updateQuizData('startDate', value)}
              // onEndDateChange={(value) => updateQuizData('endDate', value)}
            />
          )}
          {currentStep === 5 && <QuizResults />}
        </div>
      </div>
    </div>
  )
}
