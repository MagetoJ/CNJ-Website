'use client'

import React from 'react'
import Image from 'next/image'
import { Heart, Sparkles, Compass, Moon } from 'lucide-react'
import WhatsAppFooter from '@/components/WhatsAppFooter'

export default function HoneymoonSafarisPage() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Immersive Cinematic Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/South African Safari _ GORAH ELEPHANT CAMP, Addo….jpeg"
          alt="Luxury Honeymoon Safari"
          fill
          priority
          className="object-cover brightness-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
            <Heart size={12} className="fill-current" /> Romantic Expeditions
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-white tracking-tight uppercase">
            Unforgettable <span className="text-amber-500">Honeymoons</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            Private candlelight dinners in the bush, luxurious plunge pools overlooking the savanna, and bespoke romantic encounters.
          </p>
        </div>
      </section>

      {/* Package Breakdown section */}
      <section className="py-24 max-w-6xl mx-auto px-4 relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 grid md:grid-cols-2 gap-8 items-center shadow-2xl">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-white/5">
            <Image
              src="/A Safari and Beach Getaway in One Perfect Itinerary.jpeg"
              alt="Bush and Beach layout"
              fill
              className="object-cover"
              sizes="(max-w-7xl) 50vw, 100vw"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">The Signature Romance Journey</span>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-white uppercase tracking-tight">10-Day Bush & Exotic Beach Elegance</h2>
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              Spend 5 days tracking apex predators in the Maasai Mara from your private luxury outpost, followed by a chartered flight to an exclusive private villa on the sands of Zanzibar or Diani Beach.
            </p>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li className="flex items-center gap-2"><Sparkles size={14} className="text-amber-500" /> Private sunrise hot-air balloon with champagne breakfast</li>
              <li className="flex items-center gap-2"><Sparkles size={14} className="text-amber-500" /> Dedicated luxury safari vehicle and private naturalist guide</li>
            </ul>
            <div className="pt-4">
              <a 
                href={`https://wa.me/+254721246414?text=${encodeURIComponent("Hi CNJ Safaris, I would like to inquire about the luxury 10-Day Bush & Beach Honeymoon Package!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-black uppercase tracking-wider text-xs px-8 py-4 rounded-xl transition-all shadow-lg"
              >
                Inquire About Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}