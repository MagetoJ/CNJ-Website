// components/AdventureQuiz.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { X, ArrowLeft, ArrowRight, Compass, Send, MessageSquare } from 'lucide-react'
import { useQuiz } from '@/context/QuizContext'
import QuizStep1 from './quiz/QuizStep1'
import QuizStep2 from './quiz/QuizStep2'
import QuizStep3 from './quiz/QuizStep3'
import QuizStep4 from './quiz/QuizStep4'
import QuizResults from './quiz/QuizResults'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog'
import { toast } from 'sonner'

export default function AdventureQuiz() {
  const { isOpen, closeQuiz, answers, resetQuiz } = useQuiz()
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false)

  // Form State
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' })
  const [customItinerary, setCustomItinerary] = useState({
    destinations: '',
    duration: '',
    activities: '',
    specialRequests: '',
    budget: ''
  })

  // CRITICAL FIX: Lock body scrolling when modal triggers active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset' // Clean-up safeguard
    }
  }, [isOpen])

  if (!isOpen) return null

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return !!answers?.destination
      case 2: return !!answers?.experience
      case 3: return !!answers?.budget
      case 4: return !!answers?.startDate
      default: return true
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })
  }

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomItinerary({ ...customItinerary, [e.target.name]: e.target.value })
  }

  const generateSummaryText = (isCustomRequest = false) => {
    let summary = `*CNJ SAFARIS - NEW TRIP INQUIRY*\n\n`
    summary += `👤 *Client Name:* ${contactInfo.name}\n`
    summary += `📧 *Email:* ${contactInfo.email}\n`
    summary += `📞 *Phone:* ${contactInfo.phone}\n\n`

    if (isCustomRequest) {
      summary += `🗺️ *Type:* Custom Suggestive Itinerary\n`
      summary += `📍 *Destinations:* ${customItinerary.destinations || 'Not specified'}\n`
      summary += `⏱️ *Duration:* ${customItinerary.duration || 'Not specified'}\n`
      summary += `🦁 *Activities:* ${customItinerary.activities || 'Not specified'}\n`
      summary += `💰 *Est. Budget:* ${customItinerary.budget || 'Not specified'}\n`
      summary += `📝 *Notes:* ${customItinerary.specialRequests || 'None'}`
    } else {
      summary += `🗺️ *Type:* Quiz Recommendation\n`
      summary += `🌍 *Destination Preference:* ${answers.destination || 'Flexible'}\n`
      summary += `🎒 *Experience Preference:* ${answers.experience || 'Flexible'}\n`
      summary += `💰 *Budget Tier:* ${answers.budget || 'Flexible'}\n`
    }
    return summary
  }

  const handleFinalSubmit = async (e: React.FormEvent, isCustomRequest = false) => {
    e.preventDefault()
    if (!contactInfo.name || !contactInfo.email || !contactInfo.phone) {
      toast.error("Please fill in all contact details.")
      return
    }

    setLoading(true)
    const rawSummary = generateSummaryText(isCustomRequest)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          message: rawSummary,
          subject: isCustomRequest ? "New Custom Itinerary Request" : "New Quiz Trip Planning Inquiry"
        })
      })

      if (!response.ok) throw new Error("Failed to send email.")
      toast.success("Inquiry sent successfully!")

      const encodedMessage = encodeURIComponent(rawSummary)
      const whatsappUrl = `https://wa.me/254700000000?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank')

      if (isCustomRequest) setIsCustomModalOpen(false)
      resetQuiz()
      setCurrentStep(1)
    } catch (error) {
      toast.error("An error occurred. Opening WhatsApp...")
      window.open(`https://wa.me/254700000000?text=${encodeURIComponent(rawSummary)}`, '_blank')
    } finally {
      setLoading(false)
    }
  }

  const handleNext = () => {
    if (isStepValid() && currentStep < 4) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    // fixed inset-0 z-[100] captures the absolute viewport top to bottom safely
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      
      {/* Blurring Frosted Glass Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={closeQuiz} 
      />

      {/* Modal Content Window */}
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-none overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/40">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-safari-gold">CNJ Expedition Blueprint</span>
            <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">Plan Your Custom Route</h3>
          </div>
          <button
            onClick={closeQuiz}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all active:scale-90"
            aria-label="Close Modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Progress Bar indicator */}
        {currentStep <= 4 && (
          <div className="w-full h-1 bg-white/5">
            <div 
              className="h-full bg-safari-gold transition-all duration-300 ease-out" 
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-white flex-1">
          {currentStep === 1 && <QuizStep1 />}
          {currentStep === 2 && <QuizStep2 />}
          {currentStep === 3 && <QuizStep3 />}
          {currentStep === 4 && (
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <QuizResults />
              </div>
              <div className="md:col-span-2">
                <Card className="bg-white/5 border-white/10 text-white sticky top-0">
                  <CardHeader>
                    <CardTitle className="text-safari-gold text-lg">Secure Your Blueprint</CardTitle>
                    <CardDescription className="text-gray-400 text-xs">
                      Connect with our experts to finalize these details and receive your formal itinerary.
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={(e) => handleFinalSubmit(e, false)}>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <Label className="text-xs">Full Name *</Label>
                        <Input name="name" required value={contactInfo.name} onChange={handleInputChange} className="bg-black/20 border-white/10 h-9" />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Email Address *</Label>
                        <Input name="email" required type="email" value={contactInfo.email} onChange={handleInputChange} className="bg-black/20 border-white/10 h-9" />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">WhatsApp Number *</Label>
                        <Input name="phone" required type="tel" value={contactInfo.phone} onChange={handleInputChange} className="bg-black/20 border-white/10 h-9" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" disabled={loading} className="w-full bg-safari-gold hover:bg-safari-gold/90 text-black font-bold h-11">
                        <Send size={16} className="mr-2" />
                        {loading ? 'Sending...' : 'Connect to Expert'}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Footer Controls */}
        {currentStep < 4 && (
          <div className="flex items-center justify-between p-4 sm:p-6 border-t border-white/10 bg-black/40">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all rounded-md ${
                currentStep === 1
                  ? 'text-gray-600 cursor-not-allowed opacity-30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5 active:scale-95'
              }`}
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>

            <span className="text-xs text-gray-500 font-mono">
              Step {currentStep} of 3
            </span>

            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white uppercase tracking-wider transition-all bg-safari-gold hover:bg-safari-gold/90 active:scale-95 ${
                !isStepValid()
                  ? 'opacity-40 cursor-not-allowed bg-neutral-700 hover:bg-neutral-700 text-gray-400'
                  : ''
              }`}
            >
              <span>{currentStep === 3 ? 'Generate Blueprint' : 'Next'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}