'use client'

import { useQuiz } from '@/context/QuizContext'

const experiences = [
  {
    id: 'luxury-safari',
    name: 'Luxury Safari',
    description: 'Five-star lodges, private game drives, boutique glamping tent outposts.',
  },
  {
    id: 'adventure-trek',
    name: 'Adventure Trekking',
    description: 'Active exploration, mountain climbing, rugged landscape tracking.',
  },
  {
    id: 'beach-escape',
    name: 'Coastal Beach Escape',
    description: 'Zanzibar or Kenyan coast relaxation, private villas, ocean activities.',
  },
  {
    id: 'cultural-immersion',
    name: 'Cultural Immersion',
    description: 'Deep engagement loops with tribal communities and native preservation heritages.',
  },
]

export default function QuizStep2() {
  const { answers, updateAnswer } = useQuiz()
  const currentValue = answers?.experience || ''

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-serif font-bold text-white mb-2">
          What is your ideal travel style?
        </h3>
        <p className="text-gray-400">
          Select the core theme of your custom journey
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {experiences.map(exp => (
          <button
            key={exp.id}
            onClick={() => updateAnswer('experience', exp.id)}
            className={`p-4 rounded-xl text-left transition border-2 ${
              currentValue === exp.id
                ? 'border-safari-gold bg-white/5'
                : 'border-white/10 hover:border-safari-gold bg-black/20'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 ${
                  currentValue === exp.id
                    ? 'border-safari-gold bg-safari-gold'
                    : 'border-white/30'
                }`}
              />
              <div>
                <h4 className="font-semibold text-white">
                  {exp.name}
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  {exp.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}