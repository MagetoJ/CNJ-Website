'use client'

import React, { useState } from 'react'
import { X, ArrowLeft, ArrowRight } from 'lucide-react'
import { useQuiz } from '@/context/QuizContext'
import QuizStep1 from './quiz/QuizStep1'
import QuizStep2 from './quiz/QuizStep2'
import QuizStep3 from './quiz/QuizStep3'
import QuizStep4 from './quiz/QuizStep4'
import QuizResults from './quiz/QuizResults'

export default function AdventureQuiz() {
  const { isOpen, closeQuiz, answers } = useQuiz()
  const [currentStep, setCurrentStep] = useState(1)

  if (!isOpen) return null

  // Determine if the current step has a valid answer to enable the "Next" button
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!answers?.destination
      case 2:
        return !!answers?.experience
      case 3:
        return !!answers?.budget
      case 4:
        // Adjust this depending on your date validations (e.g., checking if startDate exists)
        return !!answers?.startDate
      default:
        return true
    }
  }

  const handleNext = () => {
    if (isStepValid() && currentStep < 5) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

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
            onClick={closeQuiz}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all active:scale-90"
            aria-label="Close Modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Progress Bar indicator */}
        {currentStep <= 4 && (
          <div className="w-full h-1 bg-white/5">
            <div 
              className="h-full bg-safari-gold transition-all duration-300 ease-out" 
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-white flex-1">
          {currentStep === 1 && <QuizStep1 />}
          {currentStep === 2 && <QuizStep2 />}
          {currentStep === 3 && <QuizStep3 />}
          {currentStep === 4 && <QuizStep4 />}
          {currentStep === 5 && <QuizResults />}
        </div>

        {/* Dynamic Footer Controls */}
        {currentStep < 5 && (
          <div className="flex items-center justify-between p-4 sm:p-6 border-t border-white/10 bg-black/40">
            {/* Back Button */}
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all rounded-md ${
                currentStep === 1
                  ? 'text-gray-600 cursor-not-allowed opacity-30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5 active:scale-95'
              }`}
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>

            {/* Steps Visual Indicator */}
            <span className="text-xs text-gray-500 font-mono">
              Step {currentStep} of 4
            </span>

            {/* Next / Submit Button */}
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white uppercase tracking-wider transition-all bg-safari-gold hover:bg-safari-gold/90 active:scale-95 ${
                !isStepValid()
                  ? 'opacity-40 cursor-not-allowed bg-neutral-700 hover:bg-neutral-700 text-gray-400'
                  : ''
              }`}
            >
              <span>{currentStep === 4 ? 'Generate Blueprint' : 'Next'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}