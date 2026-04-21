'use client'

import Header from './Header'
import WhatsAppFooter from './WhatsAppFooter'
import { BookOpen, Calendar, ShieldCheck, Map } from 'lucide-react'

interface BlogPageProps {
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

export default function BlogPage({
  title,
  quickFacts,
  detailedContent,
  trustSection,
  internalLinking
}: BlogPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article>
        <header className="bg-sage-light py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-6">
              <span className="text-leaf-green font-bold uppercase tracking-widest text-sm">2026 Travel Hub</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-jungle-dark mb-8 leading-tight">
              {title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> Updated April 2026</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 8 min read</span>
            </div>
          </div>
        </header>

        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
               <div>
                  <p className="text-sm text-gray-400 mb-1">Perfect For</p>
                  <p className="font-bold text-jungle-dark">{quickFacts.perfectFor}</p>
               </div>
               <div>
                  <p className="text-sm text-gray-400 mb-1">Difficulty</p>
                  <p className="font-bold text-jungle-dark">{quickFacts.difficulty}</p>
               </div>
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
              <h2 className="text-2xl font-serif font-bold text-jungle-dark">{detailedContent.h2_1}</h2>
              <p className="text-gray-700 leading-relaxed mb-10">{detailedContent.content_1}</p>
              
              <h2 className="text-2xl font-serif font-bold text-jungle-dark">{detailedContent.h2_2}</h2>
              <p className="text-gray-700 leading-relaxed mb-10">{detailedContent.content_2}</p>
              
              <div className="my-12 border-l-4 border-leaf-green pl-6 py-2 italic text-gray-600 bg-sage-light/30">
                <h3 className="text-xl font-bold text-jungle-dark not-italic mb-2">{detailedContent.h3_1}</h3>
                {detailedContent.content_3}
              </div>
            </div>

            <div className="mt-16 p-8 bg-jungle-dark text-white rounded-3xl shadow-xl">
              <div className="flex items-center gap-4 mb-4 text-leaf-green">
                <ShieldCheck size={32} />
                <h4 className="text-xl font-bold">Expert Local Insight</h4>
              </div>
              <p className="text-gray-200 leading-relaxed">{trustSection}</p>
            </div>

            <div className="mt-20 border-t pt-12">
              <h4 className="font-bold text-jungle-dark mb-6 flex items-center gap-2">
                <Map size={20} className="text-leaf-green" /> Explore More in East Africa
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {internalLinking.map(link => (
                  <li key={link}>
                    <a href={link} className="block p-4 rounded-lg border border-gray-200 hover:border-leaf-green hover:bg-sage-light/10 transition group">
                      <span className="capitalize text-gray-700 group-hover:text-leaf-green transition">
                        {link.split('/').pop()?.replace(/-/g, ' ')}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </article>

      <WhatsAppFooter />
    </main>
  )
}
