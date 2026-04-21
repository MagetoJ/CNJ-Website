'use client'

interface QuizStep3Props {
  value: string
  onChange: (value: string) => void
}

const budgetTiers = [
  {
    id: 'budget',
    name: 'Budget',
    description: 'Comfortable accommodations and meals',
    range: '$800 - $1,500 per person',
    features: ['Standard lodges', 'Group tours', 'Local transport'],
  },
  {
    id: 'mid-range',
    name: 'Mid-Range',
    description: 'Quality hotels and experiences',
    range: '$1,500 - $3,500 per person',
    features: ['4-star lodges', 'Small groups', 'Guiding included'],
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Premium accommodations and exclusive access',
    range: '$3,500+ per person',
    features: ['5-star resorts', 'Private guides', 'VIP experiences'],
  },
]

export default function QuizStep3({ value, onChange }: QuizStep3Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-serif font-bold text-jungle-dark mb-2">
          What's your budget range?
        </h3>
        <p className="text-gray-600">
          Prices are per person for 5-7 day trips (peak season)
        </p>
      </div>

      <div className="space-y-3">
        {budgetTiers.map(tier => (
          <button
            key={tier.id}
            onClick={() => onChange(tier.id)}
            className={`w-full p-4 rounded-xl text-left transition border-2 ${
              value === tier.id
                ? 'border-leaf-green bg-sage-light'
                : 'border-gray-200 hover:border-leaf-green'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 ${
                  value === tier.id
                    ? 'border-leaf-green bg-leaf-green'
                    : 'border-gray-300'
                }`}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-jungle-dark">
                    {tier.name}
                  </h4>
                  <span className="text-leaf-green font-semibold">
                    {tier.range}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {tier.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tier.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
