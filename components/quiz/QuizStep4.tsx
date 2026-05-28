'use client'

import { useQuiz } from '@/context/QuizContext'

export default function QuizStep4() {
  const { answers, updateAnswer } = useQuiz()

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-serif font-bold text-white mb-2">
          When are you planning to travel?
        </h3>
        <p className="text-gray-400">
          Pick your estimated arrival timeline below
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-300">Target Arrival Date</label>
          <input 
            type="date" 
            value={answers?.startDate || ''} 
            onChange={(e) => updateAnswer('startDate', e.target.value)}
            className="w-full p-3 bg-black/40 border border-white/10 text-white rounded-xl focus:outline-none focus:border-safari-gold"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-300">Target Departure Date (Optional)</label>
          <input 
            type="date" 
            value={answers?.endDate || ''} 
            onChange={(e) => updateAnswer('endDate', e.target.value)}
            className="w-full p-3 bg-black/40 border border-white/10 text-white rounded-xl focus:outline-none focus:border-safari-gold"
          />
        </div>
      </div>
    </div>
  )
}