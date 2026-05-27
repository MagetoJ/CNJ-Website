'use client'

import React from 'react'
import { HelpCircle, DollarSign, ShieldAlert, Sparkles } from 'lucide-react'
import SafariQuiz from '@/components/SafariQuiz'
import TrustBadges from '@/components/TrustBadges'

export default function SafariCostPage() {
  return (
    <main className="min-h-screen bg-transparent py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Editorial Headline */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">2026 Insider Planning Guide</span>
          <h1 className="font-serif text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
            Understanding the Cost of a <span className="text-amber-500">Luxury Safari</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            A transparent analysis of custom high-end travel allocations across East Africa.
          </p>
        </div>

        {/* Informative Price Matrix Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-panel rounded-2xl p-6 border border-white/5 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-white font-bold text-lg">The Signature Wilderness tier</h3>
              <span className="text-amber-500 font-serif font-black text-xl">$650 - $950</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Includes private customized 4x4 Land Cruisers, expert naturalists, premium mid-tier tented bush camps, and all park conservation fees.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-amber-500/20 bg-amber-500/5 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-white font-bold text-lg">The Ultra-Luxury Sanctuary tier</h3>
              <span className="text-amber-500 font-serif font-black text-xl">$1,200 - $2,500+</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Includes all-inclusive fly-in aviation transfers, ultra-exclusive properties (like Singita or Angama Mara), private valets, and premium vintage sundowners.
            </p>
          </div>
        </div>

        {/* Dynamic Quiz Funnel Integration */}
        <div className="pt-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Calculate Your Custom Route Blueprint</h2>
            <p className="text-gray-400 text-xs mt-1">Answer 4 simple questions to receive a line-by-line itemized itinerary proposal.</p>
          </div>
          <SafariQuiz />
        </div>

        <TrustBadges />
      </div>
    </main>
  )
}