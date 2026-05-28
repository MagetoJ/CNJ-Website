'use client'

import { useQuiz } from '@/context/QuizContext'

const budgets = [
  {
    id: 'value',
    name: 'Classic Luxury Tier',
    description: 'Premium curated boutique accommodations with comprehensive game driver outings.',
  },
  {
    id: 'signature',
    name: 'Signature Elite Tier',
    description: 'Private reserve entry, fine dining configurations, and charter flight transfers.',
  },
  {
    id: 'ultra',
    name: 'Ultra-Luxury Private Estate',
    description: 'Exclusively private sanctuaries, fully dedicated butler teams, and absolute custom itineraries.',
  },
]

export default function QuizStep3() {
  const { answers, updateAnswer } = useQuiz()
  const currentValue = answers?.budget || ''

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-serif font-bold text-white mb-2">
          Select your targeted tier scale
        </h3>
        <p className="text-gray-400">
          This helps calibrate lodge allocations and transport configurations
        </p>
      </div>

      <div className="space-y-4">
        {budgets.map(tier => (
          <button
            key={tier.id}
            onClick={() => updateAnswer('budget', tier.id)}
            className={`w-full p-5 rounded-xl text-left transition border-2 ${
              currentValue === tier.id
                ? 'border-safari-gold bg-white/5'
                : 'border-white/10 hover:border-safari-gold bg-black/20'
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 ${
                  currentValue === tier.id
                    ? 'border-safari-gold bg-safari-gold'
                    : 'border-white/30'
                }`}
              />
              <div>
                <h4 className="font-semibold text-white text-lg">
                  {tier.name}
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  {tier.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}