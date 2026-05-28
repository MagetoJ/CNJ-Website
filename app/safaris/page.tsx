import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const collections = [
  { slug: 'luxury-safaris', title: 'Luxury Safaris', desc: 'Elite private charter flights and five-star wilderness villas.', img: '/kenya-welcome-safari.jpg' },
  { slug: 'family-safaris', title: 'Family Safaris', desc: 'Curated child-safe tracking loops and multi-room suites.', img: '/safari-park-giraffe.jpeg' },
  { slug: 'migration-safaris', title: 'Great Migration Safaris', desc: 'Front-row river crossing tracking at the Mara & Serengeti plains.', img: '/Why you should visit Kenya — Style for Wanderlust.jpeg' },
]

export default function SafarisMasterPage() {
  return (
    <main className="min-h-screen bg-deep-black text-white pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs text-safari-gold font-bold tracking-[0.3em] uppercase">Expeditions Portfolio</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold uppercase tracking-tight">Our Safari Collections</h1>
          <p className="text-gray-400 text-lg font-light">Select a tailored category signature style. Every blueprint is highly customizable.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item) => (
            <Link key={item.slug} href={`/safaris/${item.slug}`} className="group relative h-[450px] flex flex-col justify-end p-8 border border-white/10 overflow-hidden bg-neutral-950">
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 space-y-3">
                <h3 className="font-serif text-3xl font-bold tracking-wide group-hover:text-safari-gold transition-colors">{item.title}</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed line-clamp-2">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-safari-gold font-semibold pt-2">
                  View Collection <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}