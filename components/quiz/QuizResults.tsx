'use client'

import React, { useState } from 'react'
import { FileDown, Loader2 } from 'lucide-react'
import { generateCustomSafariPDF } from '@/lib/itinerary-generator'

interface QuizResultsProps {
  userSelections?: {
    destination?: string
    duration?: string
    luxuryLevel?: string
    travelersCount?: string
  }
}

export default function QuizResults({ userSelections = {} }: QuizResultsProps) {
  const [isCompiling, setIsCompiling] = useState(false)

  // Provide robust safe fallback variables if context values are undefined
  const destination = userSelections?.destination || 'East Africa'
  const duration = userSelections?.duration || 'Bespoke Duration'
  const luxuryLevel = userSelections?.luxuryLevel || 'Premium Luxury'
  const travelersCount = userSelections?.travelersCount || 'Private Group'

  const handleDownload = async () => {
    setIsCompiling(true)
    try {
      // Build a verified clean payload for our itinerary engine safely
      await generateCustomSafariPDF({
        destination,
        duration,
        luxuryLevel,
        travelersCount
      })
    } catch (error) {
      console.error('PDF Trigger Failure:', error)
    } finally {
      setIsCompiling(false)
    }
  }

  return (
    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-xl mx-auto text-center text-white my-8">
      <h3 className="text-xl font-serif font-bold text-safari-gold mb-2">
        Your Dream Safari Route is Ready!
      </h3>
      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
        We have customized a premium itinerary matching your criteria details for a{' '}
        <span className="text-safari-gold font-semibold">{duration}</span> stay in{' '}
        <span className="text-safari-gold font-semibold">{destination}</span>.
      </p>

      <div className="bg-black/40 border border-white/5 rounded-xl p-4 text-left text-xs space-y-2 text-gray-400 mb-6">
        <div>
          <span className="text-white font-medium">Accommodation Tier:</span> {luxuryLevel}
        </div>
        <div>
          <span className="text-white font-medium">Traveler Setup:</span> {travelersCount}
        </div>
      </div>

      <button
        onClick={handleDownload}
        disabled={isCompiling}
        className="w-full inline-flex items-center justify-center gap-3 bg-safari-gold hover:bg-opacity-90 disabled:bg-zinc-800 text-white font-bold uppercase tracking-widest text-xs py-4 px-6 transition-all active:scale-[0.98]"
      >
        {isCompiling ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Compiling High-Res PDF Assets...</span>
          </>
        ) : (
          <>
            <FileDown className="w-4 h-4" />
            <span>Download PDF Itinerary</span>
          </>
        )}
      </button>
    </div>
  )
}