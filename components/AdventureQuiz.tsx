// components/AdventureQuiz.tsx
/* cspell:ignore Nakuru Tsavo Diani Tarangire Manyara Kibale Nyungwe Akagera Kivu */
'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { X, ArrowLeft, ArrowRight, Check, Compass } from 'lucide-react'
import QuizResults from './quiz/QuizResults'
import { useQuiz } from '@/context/QuizContext'

interface AdventureQuizProps {
  isOpen?: boolean
  onClose?: () => void
}

const LOCATION_DATABASE = {
  Kenya: [
    'Masai Mara National Reserve',
    'Amboseli National Park',
    'Lake Nakuru National Park',
    'Tsavo East & West',
    'Diani Beach (Mombasa Coast)'
  ],
  Tanzania: [
    'Serengeti National Park',
    'Ngorongoro Conservation Area',
    'Tarangire National Park',
    'Lake Manyara',
    'Zanzibar Archipelago'
  ],
  Uganda: [
    'Bwindi Impenetrable Forest (Gorillas)',
    'Queen Elizabeth National Park',
    'Murchison Falls',
    'Kibale National Park'
  ],
  Rwanda: [
    'Volcanoes National Park',
    'Nyungwe Forest',
    'Akagera National Park',
    'Lake Kivu'
  ]
}

export default function AdventureQuiz({ isOpen: propIsOpen, onClose: propOnClose }: AdventureQuizProps) {
  const { isOpen: contextIsOpen, closeQuiz } = useQuiz()
  
  // Map props or context to unified variables to fix ReferenceErrors
  const isOpen = propIsOpen ?? contextIsOpen
  const onClose = propOnClose ?? closeQuiz

  // 1. ALL HOOKS MUST LIVE UNCONDITIONALLY AT THE TOP
  const [step, setStep] = useState(1)
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [duration, setDuration] = useState('')
  const [luxuryLevel, setLuxuryLevel] = useState('')
  const [travelersCount, setTravelersCount] = useState('')

  // CRITICAL FIX: Declaring useEffect above early returns to comply with React hook rules
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // 2. NOW INDEPENDENT CONDITIONAL EARLY RETURNS CAN RUN SAFELY
  if (!isOpen) {
    return null
  }

  // Collect destinations matching all countries checked by the traveler
  const getDynamicLocations = () => {
    let combined: string[] = []
    selectedCountries.forEach((country) => {
      const paths = LOCATION_DATABASE[country as keyof typeof LOCATION_DATABASE]
      if (paths) combined = [...combined, ...paths]
    })
    return combined
  }

  // Fix ReferenceError: dynamicLocations is used in JSX but was never declared
  const dynamicLocations = getDynamicLocations()

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country))
      const remainingLocations = selectedLocations.filter(
        (loc) => !LOCATION_DATABASE[country as keyof typeof LOCATION_DATABASE]?.includes(loc)
      )
      setSelectedLocations(remainingLocations)
    } else {
      setSelectedCountries([...selectedCountries, country])
    }
  }

  const toggleLocation = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((l) => l !== location))
    } else {
      setSelectedLocations([...selectedLocations, location])
    }
  }

  const handleNext = () => setStep((p) => p + 1)
  const handleBack = () => setStep((p) => p - 1)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-[#1A1A1A] border border-white/10 w-full max-w-2xl rounded-2xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto text-gray-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          aria-label="Close quiz"
          title="Close quiz"
        >
          <X size={20} />
        </button>

        {/* Step Indicator Headers */}
        {step <= 5 && (
          <div className="mb-8">
            <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500 mb-2">
              <span>Step {step} of 5</span>
              <span>{Math.round((step / 5) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className={`bg-[#C19A6B] h-full transition-all duration-300 ${step === 1 ? 'w-1/5' : step === 2 ? 'w-2/5' : step === 3 ? 'w-3/5' : step === 4 ? 'w-4/5' : 'w-full'}`}
              />
            </div>
          </div>
        )}

        {/* STEP 1: Multiple Country Picker */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-2">Which countries are on your bucket list?</h2>
            <p className="text-sm text-gray-400 mb-6">Select all destinations you wish to include in this custom crossing itinerary.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.keys(LOCATION_DATABASE).map((country) => {
                const isChecked = selectedCountries.includes(country)
                return (
                  <button
                    key={country}
                    onClick={() => toggleCountry(country)}
                    className={`p-5 text-left border rounded-xl flex items-center justify-between transition-all ${
                      isChecked 
                        ? 'border-[#C19A6B] bg-[#C19A6B]/10 text-white shadow-lg' 
                        : 'border-white/5 bg-zinc-900/50 text-gray-300 hover:border-white/20'
                    }`}
                  >
                    <span className="font-medium tracking-wide">{country}</span>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                      isChecked ? 'bg-[#C19A6B] border-[#C19A6B]' : 'border-gray-600'
                    }`}>
                      {isChecked && <Check size={12} className="text-black stroke-[3]" />}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Multi-Select Locations */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-2">Select your ideal parks & landmarks</h2>
            <p className="text-sm text-gray-400 mb-6">Showing premium reserves available across: {selectedCountries.join(', ') || 'East Africa'}</p>
            
            {dynamicLocations.length === 0 ? (
              <div className="text-center py-8 text-gray-500 text-sm">
                Please go back and select at least one country to populate regional routes.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {dynamicLocations.map((loc) => {
                  const isChecked = selectedLocations.includes(loc)
                  return (
                    <button
                      key={loc}
                      onClick={() => toggleLocation(loc)}
                      className={`p-4 text-left border rounded-xl flex items-center justify-between text-xs transition-all ${
                        isChecked 
                          ? 'border-[#C19A6B] bg-[#C19A6B]/10 text-white' 
                          : 'border-white/5 bg-zinc-900/50 text-gray-300 hover:border-white/10'
                      }`}
                    >
                      <span className="font-medium leading-tight">{loc}</span>
                      <div className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 ml-3 ${
                        isChecked ? 'bg-[#C19A6B] border-[#C19A6B]' : 'border-gray-600'
                      }`}>
                        {isChecked && <Check size={10} className="text-black stroke-[3]" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* STEP 3: Duration Selection */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">What is your ideal window of travel?</h2>
            <div className="space-y-3">
              {['4-7 Days (Express Safari)', '8-11 Days (Classic Explorer)', '12-15 Days (Grand Rift Crossing)', '16+ Days (In-Depth Expedition)'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => { setDuration(opt); handleNext(); }}
                  className={`w-full p-4 text-left border rounded-xl transition-all ${
                    duration === opt ? 'border-[#C19A6B] bg-[#C19A6B]/10 text-white' : 'border-white/5 bg-zinc-900/50 text-gray-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: Luxury Tier Selection */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Select your accommodation standard</h2>
            <div className="space-y-3">
              {['Ultra-Luxury Lodges & Villas', 'Premium Classic Tented Camps', 'Comfort Boutique Retreats'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => { setLuxuryLevel(opt); handleNext(); }}
                  className={`w-full p-4 text-left border rounded-xl transition-all ${
                    luxuryLevel === opt ? 'border-[#C19A6B] bg-[#C19A6B]/10 text-white' : 'border-white/5 bg-zinc-900/50 text-gray-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: Travel Configuration */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Who is traveling?</h2>
            <div className="space-y-3 mb-6">
              {['Solo Adventurer', 'Honeymoon Couple', 'Family with Children', 'Private Group / Friends'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => { setTravelersCount(opt); handleNext(); }}
                  className={`w-full p-4 text-left border rounded-xl transition-all ${
                    travelersCount === opt ? 'border-[#C19A6B] bg-[#C19A6B]/10 text-white' : 'border-white/5 bg-zinc-900/50 text-gray-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 6: Final Dynamic PDF Stage */}
        {step === 6 && (
          <QuizResults 
            userSelections={{
              destination: selectedLocations.length > 0 ? selectedLocations.slice(0, 3).join(', ') : selectedCountries.join(' & '),
              duration,
              luxuryLevel,
              travelersCount
            }} 
          />
        )}

        {/* Navigation Control Footer Bar */}
        {step <= 5 && (
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-white/5">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-white disabled:opacity-0 transition-all"
            >
              <ArrowLeft size={14} /> Back
            </button>
            
            {step < 3 && (
              <button
                onClick={handleNext}
                disabled={(step === 1 && selectedCountries.length === 0) || (step === 2 && selectedLocations.length === 0)}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#C19A6B] disabled:bg-zinc-800 disabled:text-gray-600 text-black text-xs font-bold uppercase tracking-widest transition-all"
              >
                Continue <ArrowRight size={14} />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  )
}