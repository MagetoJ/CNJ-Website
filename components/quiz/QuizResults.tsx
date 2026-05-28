'use client'

import { useQuiz } from '@/context/QuizContext'
import { CheckCircle2 } from 'lucide-react'

export default function QuizResults() {
  const { answers, closeQuiz } = useQuiz()

  return (
    <div className="text-center py-8 max-w-xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-center">
        <CheckCircle2 size={64} className="text-safari-gold" />
      </div>
      
      <div>
        <h3 className="font-serif text-3xl font-bold text-white mb-2">
          Blueprint Generated!
        </h3>
        <p className="text-gray-400">
          Your tailored East African expedition template has been generated successfully.
        </p>
      </div>

      {/* Selected Summary Details */}
      <div className="p-6 bg-white/5 border border-white/10 text-left rounded-xl space-y-3">
        <h4 className="text-xs uppercase font-bold text-safari-gold tracking-widest border-b border-white/10 pb-2 mb-2">
          Submission Review
        </h4>
        <p className="text-sm text-gray-300"><span className="text-gray-500">Destination:</span> <span className="capitalize font-medium text-white">{answers?.destination || 'Not Specified'}</span></p>
        <p className="text-sm text-gray-300"><span className="text-gray-500">Travel Style:</span> <span className="capitalize font-medium text-white">{answers?.experience?.replace('-', ' ') || 'Not Specified'}</span></p>
        <p className="text-sm text-gray-300"><span className="text-gray-500">Comfort Level:</span> <span className="capitalize font-medium text-white">{answers?.budget || 'Not Specified'}</span></p>
        <p className="text-sm text-gray-300"><span className="text-gray-500">Target Launch:</span> <span className="font-medium text-white">{answers?.startDate || 'Not Specified'}</span></p>
      </div>

      <div className="pt-4">
        <button
          onClick={closeQuiz}
          className="w-full sm:w-auto px-8 py-3 bg-safari-gold hover:bg-safari-gold/90 text-white font-semibold transition-all uppercase tracking-wider text-sm rounded-none"
        >
          Close and View Custom Dashboard
        </button>
      </div>
    </div>
  )
}