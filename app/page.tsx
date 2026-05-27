'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import AdventureQuiz from '@/components/AdventureQuiz'
import QuickLinks from '@/components/QuickLinks'
import TestimonialSection from '@/components/TestimonialSection'
import WhatsAppFooter from '@/components/WhatsAppFooter'
import { Compass, Map, Shield, Users, ArrowRight } from 'lucide-react'
import { useQuiz } from '@/context/QuizContext'

export default function HomePage() {
  const { isOpen: isQuizOpen, openQuiz, closeQuiz } = useQuiz()

  return (
    <main className="min-h-screen bg-transparent selection:bg-leaf-green/30">
      
      {/* Hero Section with refined branding */}
      <HeroSection 
        onStartQuiz={openQuiz} 
      />

      {/* Trust & Stats Bar - Eye-catching Social Proof */}
      <section className="relative z-10 -mt-12 max-w-6xl mx-auto px-4">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Happy Travelers', value: '500+', icon: Users },
            { label: 'Safari Routes', value: '45+', icon: Map },
            { label: 'Expert Guides', value: '12', icon: Compass },
            { label: 'Safety Rating', value: '100%', icon: Shield },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <stat.icon className="w-6 h-6 text-leaf-green mb-3" />
              <p className="text-3xl font-serif font-bold text-white">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The "CNJ Difference" - Unique Value Proposition */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-leaf-green font-semibold uppercase tracking-widest text-sm">Why CNJ Safaris</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Crafting Stories, Not Just Itineraries
          </h2>
          <p className="text-gray-300 text-lg">
            We go beyond the standard tourist trails to offer authentic, 
            private, and sustainable wildlife encounters in the heart of East Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="group p-8 rounded-3xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-leaf-green/40 hover:bg-black/40 hover:shadow-2xl transition-all duration-500">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-leaf-green transition-colors duration-500">
              <Compass className="text-leaf-green group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Tailor-Made Design</h3>
            <p className="text-gray-400 leading-relaxed">
              No two travelers are the same. Our AI-powered engine and human experts craft 
              plans that match your exact pace and passions.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-leaf-green/40 hover:bg-black/40 hover:shadow-2xl transition-all duration-500">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-leaf-green transition-colors duration-500">
              <Users className="text-leaf-green group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Local Heritage</h3>
            <p className="text-gray-400 leading-relaxed">
              Based in Nairobi, we live and breathe these lands. You get insider access 
              and local knowledge that global agencies simply can&apos;t reach.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-leaf-green/40 hover:bg-black/40 hover:shadow-2xl transition-all duration-500">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-leaf-green transition-colors duration-500">
              <Shield className="text-leaf-green group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Carbon Neutral</h3>
            <p className="text-gray-400 leading-relaxed">
              Every booking contributes to conservation. We partner with local 
              communities to ensure your adventure protects the wild for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Destinations - Already Dark, refined for consistency */}
      <section className="py-24 bg-jungle-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-leaf-green font-semibold uppercase tracking-widest text-sm">Signature Locations</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 leading-tight">
                The Jewels of East Africa
              </h2>
            </div>
            <button 
              onClick={openQuiz}
              className="flex items-center gap-2 text-leaf-green font-bold hover:gap-4 transition-all group"
            >
              EXPLORE ALL SAFARIS <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <QuickLinks />
        </div>
      </section>

      {/* Quiz Callout Section - "The Hook" */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform translate-x-20" />
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Design Your <span className="text-leaf-green">Legacy Adventure?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Answer 4 simple questions about your dream trip, and our system will generate 
              a personalized itinerary with real-time pricing and seasonal recommendations.
            </p>
            <button 
              onClick={openQuiz}
              className="bg-leaf-green text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-jungle-green transition-all shadow-xl shadow-leaf-green/20"
            >
              Start Your 60-Second Quiz
            </button>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="aspect-square bg-black/40 backdrop-blur-md rounded-[40px] shadow-2xl p-4 rotate-3 hover:rotate-0 transition-transform duration-700 border border-white/10">
              <div className="w-full h-full bg-white/5 rounded-4xl flex items-center justify-center p-8 text-center border-2 border-dashed border-leaf-green/30">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center mx-auto shadow-lg border border-white/10">
                    <Compass className="w-8 h-8 text-leaf-green" />
                  </div>
                  <p className="font-bold text-white text-xl italic font-serif">Your custom plan is waiting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <WhatsAppFooter />

    </main>
  )
}