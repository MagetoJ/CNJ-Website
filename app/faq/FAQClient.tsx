'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Search, HelpCircle, Compass, ArrowRight } from 'lucide-react'
import { useQuiz } from '@/context/QuizContext'

interface FAQItem {
  question: string
  answer: string
}

interface FAQClientProps {
  faqs: FAQItem[]
}

export default function FAQClient({ faqs }: FAQClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const { openQuiz } = useQuiz()

  // High performance real-time text matching
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="bg-deep-black text-white min-h-screen flex flex-col justify-between">
      {/* Header Banner */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-900">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-amber-500 font-sans tracking-[0.3em] text-xs uppercase mb-3 block font-bold">
            Planning Resources
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight mb-6">
            Help Center & FAQs
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Everything you need to know about tailoring your iconic African journey. Find clear answers about seasons, logistics, gear, and pricing models.
          </p>

          {/* Fully Responsive Live Search Bar Wrapper */}
          <div className="max-w-xl mx-auto mt-10 relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-500">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search your question (e.g., 'Big Five', 'Visa', 'Best time')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-4 pl-12 pr-6 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* Accordion Content Layout */}
      <section className="max-w-4xl w-full mx-auto px-4 py-16 sm:px-6 lg:px-8 flex-grow">
        {filteredFaqs.length > 0 ? (
          <Accordion type="single" collapsible className="w-full space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                value={`faq-${index}`}
                key={index}
                className="border border-zinc-900 bg-zinc-900/30 rounded-xl px-4 sm:px-6 transition-all hover:border-zinc-800 hover:bg-zinc-900/50"
              >
                <AccordionTrigger className="text-zinc-200 hover:text-amber-500 hover:no-underline font-semibold py-5 text-base sm:text-lg text-left gap-4">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={20} className="text-amber-500/70 shrink-0 mt-1" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-sm sm:text-base leading-relaxed pb-5 pl-8 whitespace-pre-line border-t border-zinc-900/50 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="text-center py-16 border border-dashed border-zinc-800 rounded-2xl bg-zinc-950/40">
            <Compass className="mx-auto text-zinc-600 mb-4 animate-spin [animation-duration:10s]" size={40} />
            <h3 className="text-lg font-bold text-zinc-300">No matches found</h3>
            <p className="text-zinc-500 text-sm mt-1 max-w-xs mx-auto">
              We couldn't find an answer matching "{searchQuery}". Try using simpler search keywords.
            </p>
          </div>
        )}
      </section>

      {/* Premium CTA Block */}
      <section className="bg-gradient-to-br from-zinc-950 to-black border-t border-zinc-900 py-16 px-4">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-amber-600 to-amber-700 p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Still Have Unanswered Questions?</h2>
            <p className="text-amber-100 font-light text-sm sm:text-base max-w-xl">
              Our direct safari specialists are ready to tailor individual frameworks suited to your exact travel parameters.
            </p>
          </div>
          <button
            onClick={openQuiz}
            className="w-full md:w-auto bg-white text-amber-700 hover:bg-zinc-100 font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2 shrink-0"
          >
            Consult An Expert <ArrowRight size={16} />
          </button>
          </div>
      </section>

      <Footer />
    </main>
  )
}