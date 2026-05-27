'use client'

import { useState } from 'react'
import { X, ChevronRight, ChevronLeft } from 'lucide-react'
import QuizStep1 from './quiz/QuizStep1'
import QuizStep2 from './quiz/QuizStep2'
import QuizStep3 from './quiz/QuizStep3'
import QuizStep4 from './quiz/QuizStep4'
import QuizResults from './quiz/QuizResults'

export interface QuizData {
  destination: string
  experience: string
  budget: string
  startDate: string
  endDate: string
}

interface AdventureQuizProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdventureQuiz({ isOpen, onClose }: AdventureQuizProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [quizData, setQuizData] = useState<QuizData>({
    destination: '',
    experience: '',
    budget: '',
    startDate: '',
    endDate: '',
  })
  const [showResults, setShowResults] = useState(false)

  const updateQuizData = (field: keyof QuizData, value: string) => {
    setQuizData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const isStepComplete = () => {
    switch (currentStep) {
      case 1:
        return quizData.destination !== ''
      case 2:
        return quizData.experience !== ''
      case 3:
        return quizData.budget !== ''
      case 4:
        return quizData.startDate !== '' && quizData.endDate !== ''
      default:
        return false
    }
  }

  if (!isOpen) return null;

  if (showResults) {
    return <QuizResults quizData={quizData} onClose={onClose} />
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-transparent">
          <div>
            <h2 className="text-2xl font-serif font-bold text-white">Build Your Safari</h2>
            <p className="text-sm text-gray-400 mt-1">Step {currentStep} of 4</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition"
            aria-label="Close quiz"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4 pb-6">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map(step => (
              <div
                key={step}
                className={`h-2 flex-1 rounded-full transition ${
                  step <= currentStep ? 'bg-leaf-green' : 'bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 min-h-96">
          {currentStep === 1 && (
            <QuizStep1
              value={quizData.destination}
              onChange={(value) => updateQuizData('destination', value)}
            />
          )}
          {currentStep === 2 && (
            <QuizStep2
              value={quizData.experience}
              onChange={(value) => updateQuizData('experience', value)}
            />
          )}
          {currentStep === 3 && (
            <QuizStep3
              value={quizData.budget}
              onChange={(value) => updateQuizData('budget', value)}
            />
          )}
          {currentStep === 4 && (
            <QuizStep4
              startDate={quizData.startDate}
              endDate={quizData.endDate}
              onStartDateChange={(value) => updateQuizData('startDate', value)}
              onEndDateChange={(value) => updateQuizData('endDate', value)}
            />
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-white/10 bg-white/5">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition ${
              currentStep === 1
                ? 'text-white/20 cursor-not-allowed'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!isStepComplete()}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition ${
              isStepComplete()
                ? 'bg-leaf-green text-white hover:bg-green-600'
                : 'bg-white/10 text-white/30 cursor-not-allowed'
            }`}
          >
            {currentStep === 4 ? 'Get Your Quote' : 'Next'}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
