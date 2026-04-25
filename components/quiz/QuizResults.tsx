'use client'

import { useState, useEffect } from 'react'
import { X, Download, Loader2, AlertCircle, MessageCircle, Mail } from 'lucide-react'
import { QuizData } from '../AdventureQuiz'
import { generateItinerary, generatePDF } from '@/lib/api-client'

interface QuizResultsProps {
  quizData: QuizData
  onClose: () => void
}

interface ItineraryDay {
  day: number
  title: string
  description: string
  activities: string[]
}

interface ItineraryResponse {
  title: string
  days: ItineraryDay[]
  estimatedPrice: number
  priceBreakdown: {
    accommodation: number
    activities: number
    transport: number
    parkFees: number
  }
}

export default function QuizResults({ quizData, onClose }: QuizResultsProps) {
  const [itinerary, setItinerary] = useState<ItineraryResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [downloadingPDF, setDownloadingPDF] = useState(false)
  const [proposedBudget, setProposedBudget] = useState<string>('')

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        setLoading(true)
        const result = await generateItinerary(quizData)
        setItinerary(result)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to generate itinerary')
        console.error('Error fetching itinerary:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchItinerary()
  }, [quizData])

  const handleDownloadPDF = async () => {
    if (!itinerary) return
    
    try {
      setDownloadingPDF(true)
      const blob = await generatePDF(quizData, itinerary)
      
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `cnj-safari-itinerary-${new Date().toISOString().split('T')[0]}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (err) {
      console.error('Error downloading PDF:', err)
      setError('Failed to download PDF. Please try again.')
    } finally {
      setDownloadingPDF(false)
    }
  }

  const getTripDuration = () => {
    const start = new Date(quizData.startDate)
    const end = new Date(quizData.endDate)
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"> {/* Overlay */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-screen flex flex-col"> {/* Modal content, now a flex container */}
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-serif font-bold text-jungle-dark">
            Your Safari Itinerary
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition shrink-0"
          >
            <X size={24} className="text-jungle-dark" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-leaf-green animate-spin mb-4" />
              <p className="text-gray-600">Crafting your perfect safari...</p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3 mb-6">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900">Error</h3>
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          )}

          {itinerary && (
            <div className="p-6 grow overflow-y-auto"> {/* This div will now scroll */}
              {/* Trip Summary */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-jungle-dark mb-4">
                  {itinerary.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-leaf-green">
                      {getTripDuration()}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Days</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-jungle-dark">
                      {quizData.destination.charAt(0).toUpperCase() + quizData.destination.slice(1)}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Destination</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-leaf-green">
                      ${Math.round(itinerary.estimatedPrice).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Est. Total</p>
                  </div>
                </div>
              </div>

              {/* Proposed Budget */}
              <div className="mb-8 p-4 bg-jungle-dark/5 rounded-lg border border-jungle-dark/10">
                <label className="block text-sm font-semibold text-jungle-dark mb-2">
                  Have a specific budget in mind?
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                    <input
                      type="number"
                      value={proposedBudget}
                      onChange={(e) => setProposedBudget(e.target.value)}
                      placeholder="Enter your proposed budget"
                      className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-leaf-green"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  This helps us tailor the experience to your specific needs.
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="bg-sage-light p-4 rounded-lg mb-8">
                <h4 className="font-semibold text-jungle-dark mb-4">
                  Price Breakdown (per person)
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Accommodation</span>
                    <span className="font-semibold text-jungle-dark text-right">
                      ${Math.round(itinerary.priceBreakdown.accommodation).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Activities & Guides</span>
                    <span className="font-semibold text-jungle-dark text-right">
                      ${Math.round(itinerary.priceBreakdown.activities).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Transport</span>
                    <span className="font-semibold text-jungle-dark text-right">
                      ${Math.round(itinerary.priceBreakdown.transport).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Park Fees</span>
                    <span className="font-semibold text-jungle-dark text-right">
                      ${Math.round(itinerary.priceBreakdown.parkFees).toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex justify-between items-center font-bold">
                    <span className="text-jungle-dark">Total per person</span>
                    <span className="text-leaf-green text-lg text-right">
                      ${Math.round(itinerary.estimatedPrice).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Itinerary Days */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-jungle-dark">Day-by-Day Itinerary</h4>
                {itinerary.days.map(day => (
                  <details
                    key={day.day}
                    className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-leaf-green transition"
                  >
                    <summary className="font-semibold text-jungle-dark flex items-center gap-2">
                      <span>Day {day.day}:</span>
                      <span className="text-gray-600 font-normal">{day.title}</span>
                    </summary>
                    <div className="mt-4 space-y-2 text-sm text-gray-700">
                      <p>{day.description}</p>
                      {day.activities.length > 0 && (
                        <div>
                          <p className="font-semibold text-jungle-dark mt-3 mb-2">
                            Activities:
                          </p>
                          <ul className="list-disc list-inside space-y-1">
                            {day.activities.map((activity, idx) => (
                              <li key={idx} className="text-gray-600">
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons - Only visible when itinerary is loaded */}
          {itinerary && (
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownloadPDF}
                  disabled={downloadingPDF}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition flex-1 ${
                    !downloadingPDF
                      ? 'bg-sage-light text-jungle-dark hover:bg-sage-light/80'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {downloadingPDF ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Generating PDF...
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      Download PDF
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+254721246414'}?text=${encodeURIComponent(
                    `Hi CNJ Safaris,\n\nI've just built a custom safari itinerary on your website!\n\n` +
                    `*Trip Details:*\n` +
                    `- Destination: ${quizData.destination.charAt(0).toUpperCase() + quizData.destination.slice(1)}\n` +
                    `- Experience: ${quizData.experience.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}\n` + 
                    `- Budget Tier: ${quizData.budget.charAt(0).toUpperCase() + quizData.budget.slice(1)}\n` +
                    `- Dates: ${quizData.startDate} to ${quizData.endDate}\n\n` +
                    `*Pricing:*\n` +
                    `- Estimated Total: $${Math.round(itinerary.estimatedPrice).toLocaleString()}\n` +
                    (proposedBudget ? `- My Proposed Budget: $${proposedBudget}\n\n` : `\n`) +
                    `Can we finalize this adventure?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#22c35e] transition"
                >
                  <MessageCircle size={20} />
                  Book via WhatsApp
                </a>
                
                <a
                  href={`mailto:info@cnjsafaris.com?subject=Safari Booking Inquiry: ${quizData.destination}&body=${encodeURIComponent(
                    `Hi CNJ Safaris,\n\nI'm interested in booking a safari to ${quizData.destination}.\n\nTrip Details:\n- Destination: ${quizData.destination}\n- Experience: ${quizData.experience}\n- Proposed Budget: $${proposedBudget || Math.round(itinerary.estimatedPrice)}\n- Dates: ${quizData.startDate} to ${quizData.endDate}\n\nPlease let me know the next steps.\n\nBest regards.`
                  )}`}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition"
                >
                  <Mail size={20} />
                  Book via Email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
