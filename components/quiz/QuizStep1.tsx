'use client'

import { useQuiz } from '@/context/QuizContext'

const destinations = [
  {
    id: 'kenya',
    name: 'Kenya',
    description: 'Iconic Maasai Mara, Mount Kenya, coastal beaches',
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    description: 'Serengeti, Mount Kilimanjaro, Zanzibar',
  },
  {
    id: 'uganda',
    name: 'Uganda',
    description: 'Mountain gorillas, Queen Elizabeth, Pearl of Africa',
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    description: 'Volcanoes National Park, Gorilla trekking capital',
  },
]

export default function QuizStep1() {
  const { answers, updateAnswer } = useQuiz()
  const currentValue = answers?.destination || ''

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-serif font-bold text-white mb-2">
          Where do you want to explore?
        </h3>
        <p className="text-gray-400">
          Choose your preferred East African destination
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {destinations.map(destination => (
          <button
            key={destination.id}
            onClick={() => updateAnswer('destination', destination.id)}
            className={`p-4 rounded-xl text-left transition border-2 ${
              currentValue === destination.id
                ? 'border-safari-gold bg-white/5'
                : 'border-white/10 hover:border-safari-gold bg-black/20'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 ${
                  currentValue === destination.id
                    ? 'border-safari-gold bg-safari-gold'
                    : 'border-white/30'
                }`}
              />
              <div>
                <h4 className="font-semibold text-white">
                  {destination.name}
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  {destination.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
