'use client'

interface QuizStep2Props {
  value: string
  onChange: (value: string) => void
}

const experiences = [
  {
    id: 'big-five',
    name: 'Big Five Safari',
    description: 'Classic wildlife viewing experience',
    icon: '🦁',
  },
  {
    id: 'gorilla-trekking',
    name: 'Gorilla Trekking',
    description: 'Trek mountain gorillas in their natural habitat',
    icon: '🦍',
  },
  {
    id: 'beach-escape',
    name: 'Beach Escape',
    description: 'Relax on pristine Indian Ocean beaches',
    icon: '🏖️',
  },
  {
    id: 'mountain-climb',
    name: 'Mountain Climbing',
    description: 'Conquer Kilimanjaro or Mount Kenya',
    icon: '⛰️',
  },
]

export default function QuizStep2({ value, onChange }: QuizStep2Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-serif font-bold text-jungle-dark mb-2">
          What's your adventure style?
        </h3>
        <p className="text-gray-600">
          Select the experience type you're most interested in
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {experiences.map(experience => (
          <button
            key={experience.id}
            onClick={() => onChange(experience.id)}
            className={`p-4 rounded-xl text-center transition border-2 ${
              value === experience.id
                ? 'border-leaf-green bg-sage-light'
                : 'border-gray-200 hover:border-leaf-green'
            }`}
          >
            <div className="text-4xl mb-3">{experience.icon}</div>
            <h4 className="font-semibold text-jungle-dark mb-1">
              {experience.name}
            </h4>
            <p className="text-sm text-gray-600">
              {experience.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
