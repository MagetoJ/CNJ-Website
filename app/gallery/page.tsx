import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Compass } from 'lucide-react'
import WhatsAppFooter from '@/components/WhatsAppFooter'
import GalleryView from '@/components/GalleryView'
import { getGalleryImages } from '@/lib/api-client'

export const metadata: Metadata = {
  title: 'Bespoke Wildlife & Location Photo Books | CNJ Safaris',
  description: 'Explore live curated digital galleries and immersive wildlife location photo records from across the East African savannas.',
}

export default async function GalleryPage() {
  const CMSLocationHubs = await getGalleryImages()

  return (
    <main className="min-h-screen bg-zinc-950 text-gray-100 selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Editorial Chapter Header */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
        <Image
            src="/Why you should visit Kenya — Style for Wanderlust.jpeg"
            alt="Luxury East African Safaris Photo Book Portfolio"
          fill
          priority
            className="object-cover brightness-[0.35]"
          sizes="100vw"
        />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full backdrop-blur-sm">
            <BookOpen size={12} className="text-amber-400" />
            <span className="text-amber-400 font-mono text-[10px] tracking-widest font-bold uppercase">Dynamic Portfolio</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tight">
            The Wild Canvas
          </h1>
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-amber-500/90 italic font-light tracking-wide">
            &quot;The world is a book, Discover Every page.&quot;
          </p>
        </div>
      </section>

      {/* The Interactive Book Matrix */}
      <section className="py-20">
        <GalleryView initialHubs={CMSLocationHubs} />
      </section>

      {/* Conversion CTA */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center space-y-6 border-t border-white/5">
        <h3 className="font-serif text-3xl font-bold text-white tracking-tight">Inspired by our Captures?</h3>
        <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed font-light">
          Every chapter recorded here corresponds to custom routes mapped out by our travel planners. Let us write your custom itinerary page today.
        </p>
        <div className="pt-2">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-950 bg-amber-500 hover:bg-amber-400 px-8 py-4 rounded-xl transition-all shadow-lg"
          >
            Plan Your Expedition Route <Compass size={14} />
          </Link>
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}
