'use client'

import Header from './Header'
import WhatsAppFooter from './WhatsAppFooter'
import { CheckCircle2, AlertCircle, Scale, Camera, Car } from 'lucide-react'

interface ComparisonPageProps {
  title: string
  metadata: {
    title: string
    description: string
  }
  quickFacts: {
    bestTime: string
    difficulty: string
    estimatedCost: string
    perfectFor: string
  }
  detailedContent: {
    h2_1: string
    content_1: string
    h2_2: string
    content_2: string
    h3_1: string
    content_3: string
  }
  trustSection: string
  internalLinking: string[]
}

export default function ComparisonPage({
  title,
  quickFacts,
  detailedContent,
  trustSection,
  internalLinking
}: ComparisonPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-jungle-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm opacity-90">
            <span className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-2">
              <Scale size={16} /> Comparison Guide
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-2">
              <Camera size={16} /> 2026 Updated
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-sage-light border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(quickFacts).map(([key, value]) => (
            <div key={key} className="text-center">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{key.replace(/([A-Z])/g, ' $1')}</p>
              <p className="font-bold text-jungle-dark">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-serif font-bold text-jungle-dark">{detailedContent.h2_1}</h2>
          <p className="text-gray-700 leading-relaxed mb-10">{detailedContent.content_1}</p>
          
          <h2 className="text-3xl font-serif font-bold text-jungle-dark">{detailedContent.h2_2}</h2>
          <p className="text-gray-700 leading-relaxed mb-10">{detailedContent.content_2}</p>
          
          <div className="bg-leaf-green/10 p-8 rounded-2xl border border-leaf-green/20 my-12">
            <h3 className="text-2xl font-serif font-bold text-jungle-dark mt-0">{detailedContent.h3_1}</h3>
            <p className="text-gray-700 mb-0">{detailedContent.content_3}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 border-y">
        <div className="max-w-3xl mx-auto flex items-start gap-4">
          <div className="bg-leaf-green p-2 rounded-full text-white">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h4 className="font-bold text-jungle-dark text-lg mb-2">Why Trust CNJ Safaris?</h4>
            <p className="text-gray-600 italic">{trustSection}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h4 className="font-bold text-gray-400 uppercase tracking-widest text-sm mb-6 text-center">Related Guides</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {internalLinking.map(link => (
              <a key={link} href={link} className="text-leaf-green hover:underline font-medium">
                {link.split('/').pop()?.replace(/-/g, ' ')}
              </a>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}
