'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Compass, 
  ConciergeBell, 
  Sparkles, 
  Heart, 
  Users, 
  Camera, 
  Palmtree, 
  Briefcase, 
  ShoppingBag, 
  Award, 
  Gift, 
  CheckCircle, 
  ArrowRight,
  PhoneCall
} from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="bg-[#0c0c0e] text-white min-h-screen font-sans">
      
      {/* Cinematic Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/South African Safari _ GORAH ELEPHANT CAMP, Addo….jpeg"
            alt="Luxury CNJ Safari Service Experience"
            fill
            priority
            className="object-cover opacity-40 brightness-75 transform scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-black/50" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <span className="text-safari-gold font-serif text-xs uppercase tracking-[0.4em] block mb-4">
            Beyond the Ordinary Game Drive
          </span>
          <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider mb-6">
            Our Bespoke Services
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            A luxury, personalized East African safari company creating unforgettable wildlife, culture, and adventure experiences across Kenya and Tanzania.
          </p>
        </div>
      </section>

      {/* 12. Featured Signature Experience Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-24">
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-safari-gold/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-safari-gold/5 rounded-full blur-3xl group-hover:bg-safari-gold/10 transition-colors duration-500" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-safari-gold mb-3">
                <Award size={20} className="animate-pulse" />
                <span className="text-xs uppercase font-bold tracking-widest">Highly Recommended</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider mb-4 text-white">
                The CNJ Signature Safari Experience
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                Our ultimate all-inclusive touchpoint that redefines exploration. When comparing operators, this is the definitive signature differentiator that sets your journey into an elite tier.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs uppercase tracking-wider font-semibold text-gray-300">
                <div className="flex items-center gap-2"><CheckCircle size={14} className="text-safari-gold" /> Airport Meet & Greet</div>
                <div className="flex items-center gap-2"><CheckCircle size={14} className="text-safari-gold" /> Welcome Luxury Gift</div>
                <div className="flex items-center gap-2"><CheckCircle size={14} className="text-safari-gold" /> Professional Briefing</div>
                <div className="flex items-center gap-2"><CheckCircle size={14} className="text-safari-gold" /> Custom Itinerary</div>
                <div className="flex items-center gap-2"><CheckCircle size={14} className="text-safari-gold" /> Private Bush Breakfast</div>
                <div className="flex items-center gap-2"><CheckCircle size={14} className="text-safari-gold" /> Bush Sundowner</div>
              </div>
            </div>
            <Link 
              href="/contact" 
              className="w-full lg:w-auto px-8 py-4 bg-safari-gold hover:bg-olive-green text-white text-xs font-bold tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-2 shrink-0 active:scale-95"
            >
              Secure Signature Journey <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Core Architecture (The Grid of Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-widest mb-4">
            Curated Offerings & Add-Ons
          </h2>
          <div className="w-24 h-[1px] bg-safari-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Core Safari Packages */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 transition-all hover:border-safari-gold/30">
            <div className="text-safari-gold mb-6"><Compass size={32} /></div>
            <h3 className="font-serif text-xl uppercase tracking-wider mb-4">Core Safari Packages</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Our flagship custom expeditions taking you into the raw heart of Kenya and Tanzania.
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wide text-gray-300 font-medium">
              <li>• Luxury Kenya & Tanzania Combined</li>
              <li>• Great Migration & Big Five Safaris</li>
              <li>• Solo, Group & Family Journeys</li>
              <li>• Elite Fly-in Safaris</li>
            </ul>
          </div>

          {/* 2. Premium Concierge Services */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 transition-all hover:border-safari-gold/30">
            <div className="text-safari-gold mb-6"><ConciergeBell size={32} /></div>
            <h3 className="font-serif text-xl uppercase tracking-wider mb-4">Premium Concierge</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Seamless travel management for international travelers from the US, UK, and Europe.
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wide text-gray-300 font-medium">
              <li>• VIP Airport Meet & Greet</li>
              <li>• Domestic Flight Bookings</li>
              <li>• Visa & Travel Documentation Assistance</li>
              <li>• Luxury Nairobi City Stays</li>
            </ul>
          </div>

          {/* 3. Luxury Upgrades */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 transition-all hover:border-safari-gold/30">
            <div className="text-safari-gold mb-6"><Sparkles size={32} /></div>
            <h3 className="font-serif text-xl uppercase tracking-wider mb-4">Luxury Upgrades</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium experiential extensions designed to increase the margin of your baseline itinerary.
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wide text-gray-300 font-medium">
              <li>• Hot Air Balloon over Maasai Mara/Serengeti</li>
              <li>• Private Wild Wilderness Bush Breakfasts</li>
              <li>• Iconic Sundowner Sunset Experiences</li>
              <li>• Exclusive Private Vehicle & Guide Drives</li>
            </ul>
          </div>

          {/* 4. Honeymoon Experiences */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 transition-all hover:border-safari-gold/30">
            <div className="text-safari-gold mb-6"><Heart size={32} /></div>
            <h3 className="font-serif text-xl uppercase tracking-wider mb-4">Romance & Honeymoons</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A dedicated &quot;Romance in Africa&quot; suite for couples looking to spend on premier luxury.
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wide text-gray-300 font-medium">
              <li>• Private Romantic Bush Dinners</li>
              <li>• Couples&apos; Wilderness Photography Sessions</li>
              <li>• Champagne Welcome & Flower Decor</li>
              <li>• Custom Honeymoon Certificates</li>
            </ul>
          </div>

          {/* 5. Family Experiences */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 transition-all hover:border-safari-gold/30">
            <div className="text-safari-gold mb-6"><Users size={32} /></div>
            <h3 className="font-serif text-xl uppercase tracking-wider mb-4">Family Expeditions</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Carefully formatted itineraries to entertain both adults and children seamlessly.
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wide text-gray-300 font-medium">
              <li>• Handpicked Child-Friendly Luxury Lodges</li>
              <li>• Educational Wildlife Track & Learn Programs</li>
              <li>• Relaxed, Flexible Itinerary Pacing</li>
              <li>• Multi-generational Comfort Accommodation</li>
            </ul>
          </div>

          {/* 6. Photography Packages */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 transition-all hover:border-safari-gold/30">
            <div className="text-safari-gold mb-6"><Camera size={32} /></div>
            <h3 className="font-serif text-xl uppercase tracking-wider mb-4">Photography Focus</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Targeted for enthusiast and professional wildlife photographers globally.
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wide text-gray-300 font-medium">
              <li>• Specialized Wildlife Tracking Guides</li>
              <li>• Golden Hour Sunrise & Sunset Extended Drives</li>
              <li>• Expert Vehicle Positioning & Advice</li>
              <li>• Custom Equipment Accommodations</li>
            </ul>
          </div>

          {/* 7. Beach + Safari Packages */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 transition-all hover:border-safari-gold/30">
            <div className="text-safari-gold mb-6"><Palmtree size={32} /></div>
            <h3 className="font-serif text-xl uppercase tracking-wider mb-4">Beach Extensions</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The ultimate balance: Bush game drives integrated smoothly with Indian Ocean relaxation.
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wide text-gray-300 font-medium">
              <li>• Safari + Diani Beach Luxury Resorts</li>
              <li>• Safari + Zanzibar Exotic Retreats</li>
              <li>• Safari + Watamu Marine Hideaways</li>
              <li>• Seamless Domestic Flight Connections</li>
            </ul>
          </div>

          {/* 8. Corporate & Team Building */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 transition-all hover:border-safari-gold/30">
            <div className="text-safari-gold mb-6"><Briefcase size={32} /></div>
            <h3 className="font-serif text-xl uppercase tracking-wider mb-4">Corporate Travel</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              High-value organizational accounts, high-stakes incentive bookings, and retreats.
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wide text-gray-300 font-medium">
              <li>• Executive Wilderness Leadership Retreats</li>
              <li>• High-End Incentive Travel Packages</li>
              <li>• Strategic Team-Building Safaris</li>
              <li>• Fully Catered Remote Conference Setups</li>
            </ul>
          </div>

          {/* 9. Merchandise Collection */}
          <div className="bg-neutral-900/50 border border-white/5 p-8 transition-all hover:border-safari-gold/30">
            <div className="text-safari-gold mb-6"><ShoppingBag size={32} /></div>
            <h3 className="font-serif text-xl uppercase tracking-wider mb-4">The CNJ Collection</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium memorabilia and gear curated to serve as authentic, timeless African travel souvenirs.
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wide text-gray-300 font-medium">
              <li>• Branded Premium Caps & Hoodies</li>
              <li>• High-Grade Insulated Travel Mugs & Flasks</li>
              <li>• Handcrafted Leather Safari Journals</li>
              <li>• High-End Technical Travel Bags</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 10. Exclusive Membership Block */}
      <section className="bg-neutral-950 py-20 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 bg-neutral-900 border border-safari-gold/20 rounded-none mb-6">
            <Award size={36} className="text-safari-gold" />
          </div>
          <h2 className="font-serif text-3xl uppercase tracking-[0.2em] mb-4">
            The CNJ Explorer Club
          </h2>
          <p className="text-safari-gold text-xs uppercase tracking-[0.3em] mb-6 font-semibold">
            Exclusive Return Guest Loyalty Membership
          </p>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            We value long-term loyalty. Repeat safari guests gain automated tier entry to exclusive perks designed to make subsequent returns back to East Africa effortless and highly rewarded.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-bold uppercase tracking-wider text-gray-300 max-w-4xl mx-auto">
            <div className="bg-neutral-900/60 p-4 border border-white/5">Priority Booking Control</div>
            <div className="bg-neutral-900/60 p-4 border border-white/5">Complimentary Airport Runs</div>
            <div className="bg-neutral-900/60 p-4 border border-white/5">Return Guest Reductions</div>
            <div className="bg-neutral-900/60 p-4 border border-white/5">Early Promotion Access</div>
          </div>
        </div>
      </section>

      {/* 11. Complimentary Value Adds Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="text-safari-gold font-serif text-xs uppercase tracking-[0.3em] block mb-2">Included In Every Journey</span>
          <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-widest">
            Complimentary Premium Value Adds
          </h2>
          <p className="text-gray-400 text-sm mt-2">No extra charge—standard baseline care for all CNJ guests.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          
          <div className="p-6 bg-neutral-900/30 border border-white/5">
            <div className="text-safari-gold flex justify-center mb-4"><PhoneCall size={24} /></div>
            <h4 className="font-serif text-xs uppercase tracking-wider font-bold mb-2">15-30 Min Safari Plan Call</h4>
            <p className="text-gray-500 text-xs">Direct consultation with local deployment specialists.</p>
          </div>

          <div className="p-6 bg-neutral-900/30 border border-white/5">
            <div className="text-safari-gold flex justify-center mb-4"><Compass size={24} /></div>
            <h4 className="font-serif text-xs uppercase tracking-wider font-bold mb-2">Customized Itineraries</h4>
            <p className="text-gray-500 text-xs">Tailored to your specific timeline and cadence.</p>
          </div>

          <div className="p-6 bg-neutral-900/30 border border-white/5">
            <div className="text-safari-gold flex justify-center mb-4"><Gift size={24} /></div>
            <h4 className="font-serif text-xs uppercase tracking-wider font-bold mb-2">Branded Packing Guide</h4>
            <p className="text-gray-500 text-xs">An elegant corporate PDF guide prepared for tracking luggage rules.</p>
          </div>

          <div className="p-6 bg-neutral-900/30 border border-white/5">
            <div className="text-safari-gold flex justify-center mb-4"><CheckCircle size={24} /></div>
            <h4 className="font-serif text-xs uppercase tracking-wider font-bold mb-2">Wildlife Checklists</h4>
            <p className="text-gray-500 text-xs">Track and check off your Big Five encounters live in the field.</p>
          </div>

          <div className="p-6 bg-neutral-900/30 border border-white/5">
            <div className="text-safari-gold flex justify-center mb-4"><Sparkles size={24} /></div>
            <h4 className="font-serif text-xs uppercase tracking-wider font-bold mb-2">Pre-Arrival Digital Kit</h4>
            <p className="text-gray-500 text-xs">Comprehensive health, safety, and cultural parameters overview.</p>
          </div>

        </div>
      </section>

      {/* Action CTA Section */}
      <section className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 py-16 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-serif text-2xl uppercase tracking-widest mb-4">Let&apos;s Design Your Tailored Route</h3>
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-8 font-medium">No Generic Routes. Fully Personalized Experiences Only.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-4 bg-safari-gold text-white text-xs font-bold tracking-widest uppercase hover:bg-olive-green transition-all"
            >
              Contact Our Consultants
            </Link>
            <Link 
              href="/safaris" 
              className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/30 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/5 transition-all"
            >
              Explore Safaris Base Routes
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}