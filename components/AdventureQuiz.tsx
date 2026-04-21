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
  onClose: () => void
}

export default function AdventureQuiz({ onClose }: AdventureQuizProps) {
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

  if (showResults) {
    return <QuizResults quizData={quizData} onClose={onClose} />
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
          <div>
            <h2 className="text-2xl font-serif font-bold text-jungle-dark">
              Build Your Safari
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Step {currentStep} of 4
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={24} className="text-jungle-dark" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4 pb-6">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map(step => (
              <div
                key={step}
                className={`h-2 flex-1 rounded-full transition ${
                  step <= currentStep ? 'bg-leaf-green' : 'bg-gray-200'
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
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition ${
              currentStep === 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-jungle-dark hover:bg-gray-200'
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
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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
