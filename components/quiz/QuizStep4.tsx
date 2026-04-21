'use client'

import { Calendar } from 'lucide-react'

interface QuizStep4Props {
  startDate: string
  endDate: string
  onStartDateChange: (value: string) => void
  onEndDateChange: (value: string) => void
}

export default function QuizStep4({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: QuizStep4Props) {
  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]

  // Calculate trip duration
  const getDuration = () => {
    if (!startDate || !endDate) return 0
    const start = new Date(startDate)
    const end = new Date(endDate)
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
    return Math.max(0, days)
  }

  const duration = getDuration()

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-serif font-bold text-jungle-dark mb-2">
          When do you want to go?
        </h3>
        <p className="text-gray-600">
          Choose your travel dates (minimum 3 nights)
        </p>
      </div>

      <div className="space-y-6">
        {/* Start Date */}
        <div>
          <label className="block text-sm font-semibold text-jungle-dark mb-2">
            Start Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="date"
              value={startDate}
              onChange={(e) => onStartDateChange(e.target.value)}
              min={today}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-leaf-green focus:ring-2 focus:ring-leaf-green/20"
            />
          </div>
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-semibold text-jungle-dark mb-2">
            End Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="date"
              value={endDate}
              onChange={(e) => onEndDateChange(e.target.value)}
              min={startDate || today}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-leaf-green focus:ring-2 focus:ring-leaf-green/20"
            />
          </div>
        </div>

        {/* Trip Duration */}
        {duration > 0 && (
          <div className="p-4 bg-sage-light rounded-lg border border-leaf-green">
            <p className="text-sm text-gray-600 mb-1">Trip Duration</p>
            <p className="text-2xl font-bold text-jungle-dark">
              {duration} {duration === 1 ? 'night' : 'nights'}
            </p>
          </div>
        )}

        {/* Seasonal Info */}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900 font-semibold mb-2">
            Seasonal Pricing
          </p>
          <p className="text-sm text-blue-800">
            <strong>Peak Season (Jul-Oct):</strong> Best wildlife viewing, higher prices
          </p>
          <p className="text-sm text-blue-800 mt-1">
            <strong>Green Season (Nov-Jun):</strong> Lush landscapes, fewer tourists, lower prices
          </p>
        </div>
      </div>
    </div>
  )
}
