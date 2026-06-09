'use client'

import HeroSection from '@/components/HeroSection'
import QuickLinks from '@/components/QuickLinks'
import TestimonialSection from '@/components/TestimonialSection'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useQuiz } from '@/context/QuizContext'
import { faqData } from '@/lib/data'
import { FAQSchema, OrganizationSchema } from '@/components/seo/JsonLdSchemas'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ShieldCheck, Map, Users, Clock, Leaf, CreditCard } from 'lucide-react'

export default function HomePage() {
  const { openQuiz } = useQuiz()

  return (
    <main className="bg-deep-black text-white min-h-screen">
      <OrganizationSchema />
      <FAQSchema faqs={faqData} />
      <HeroSection onStartQuiz={openQuiz} />
      
      {/* Trust Bar / As Seen In */}
      <section className="bg-zinc-950 py-8 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-zinc-500 text-xs uppercase tracking-widest mb-6 font-semibold">
            Certified Member & Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Placeholder for Trust Logos */}
            <span className="text-xl font-bold text-zinc-400">KATO MEMBER</span>
            <span className="text-xl font-bold text-zinc-400">TRA LICENSED</span>
            <span className="text-xl font-bold text-zinc-400">SafariBookings</span>
            <span className="text-xl font-bold text-zinc-400">TripAdvisor</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Differentiators */}
      <section className="py-24 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-500">Why Choose CNJ Safaris?</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              Experience the difference of a locally-owned safari operator that combines native wisdom with international luxury standards.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Local Expertise', desc: '100% Kenyan-owned with native guides who know every secret trail.', icon: Map },
              { title: 'Tailor-Made Only', desc: 'No cookie-cutter tours. Every itinerary is crafted for your specific interests.', icon: Users },
              { title: '24/7 Global Support', desc: 'On-call support for our international guests across all time zones.', icon: Clock },
              { title: 'Sustainable Travel', desc: 'We reinvest in local communities and wildlife conservation projects.', icon: Leaf },
              { title: 'Safety First', desc: 'TRA licensed with comprehensive insurance and modern, safe 4x4 vehicles.', icon: ShieldCheck },
              { title: 'Flexible Payments', desc: 'Secure online payments with flexible booking and cancellation plans.', icon: CreditCard },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/50 transition-colors">
                <item.icon className="text-amber-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={openQuiz}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            >
              Get My Custom Safari Quote
            </button>
          </div>
        </div>
      </section>

      <QuickLinks />
      <TestimonialSection />

      {/* Call to Action Banner */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Plan Your Dream Safari?</h2>
          <p className="text-amber-100 mb-8 text-lg">Our experts are ready to design an itinerary that matches your budget and style.</p>
          <button onClick={openQuiz} className="bg-white text-amber-600 px-10 py-4 rounded-full font-black text-lg hover:bg-zinc-100 transition-colors">
            Speak With A Safari Expert
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-amber-500 sm:text-4xl mb-4">
            Frequently Asked Safari Questions
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Planning your dream African getaway? Find quick answers here regarding bookings, local climates, gear packing, and safety to prepare for your journey with CNJ Safaris.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              value={`faq-${index}`} 
              key={index} 
              className="border border-zinc-800 bg-zinc-900/50 rounded-lg px-4 transition-all hover:border-zinc-700"
            >
              <AccordionTrigger className="text-zinc-200 hover:text-amber-500 hover:no-underline font-semibold py-4 text-base text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 text-sm leading-relaxed pb-4 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Footer />
    </main>
  )
}