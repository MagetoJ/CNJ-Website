import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, ShieldCheck, Compass, ArrowRight, Clock, DollarSign, Sparkles, Phone } from 'lucide-react'
import { affordableSafariPackages } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Affordable East Africa Safaris & Value Packages | CNJ Safaris',
  description: 'Explore highly curated, cost-effective safari packages across Kenya and Tanzania. Experience top-tier wildlife tracking and premium camps at a comfortable value.',
  keywords: ['Affordable Kenya Safaris', 'Budget African Safaris', 'Maasai Mara Value Tours']
}

export default function AffordableSafarisPage() {
  // Safe fallback to prevent rendering crashes if data array is modified
  const packages = affordableSafariPackages || []

  return (
    <main className="min-h-screen bg-neutral-950 text-zinc-100 antialiased overflow-x-hidden selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* 1. Hero Header Optimized for Value Branding */}
      <section className="relative h-[65vh] flex items-center justify-center bg-zinc-900">
        <div className="absolute inset-0 z-0">
        <Image
            src="/Enjoying an evening cruise searching for hippos in .jpeg"
            alt="Affordable Premium East African Safaris"
          fill
          priority
            className="object-cover brightness-[0.35] scale-101 transition-all duration-700"
          sizes="100vw"
        />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/60 to-neutral-950" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles size={14} className="text-amber-400 animate-pulse" />
            <span className="text-amber-400 uppercase tracking-widest font-mono text-xs font-semibold">
            Bespoke Value Collection
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Affordable Safari Packages in East Africa
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Incredible wildlife adventures designed for every budget. Experience the magic of the savanna with uncompromising safety and guiding standards.
          </p>
        </div>
      </section>

      {/* 2. Value Philosophy Content Matrix */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center lg:text-left border-b border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-amber-500 font-mono text-xs uppercase tracking-widest block">Intelligent Luxury</span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Incredible Adventures for Every Budget
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              Many assume that witnesssing the majesty of the Great Migration or tracking the Big Five requires an unapproachable luxury package budget. At CNJ Safaris, we configure our options to break down financial barriers while strictly preserving safety, comfort, and transit excellence.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              By coordinating strategic group departures, establishing trusted long-term wilderness camp partnerships, and mapping out smart regional travel routes, we deliver the same spellbinding encounters at a reasonable cost.
            </p>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900/80 to-zinc-900/20 p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-sm shadow-xl space-y-6">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase border-b border-zinc-800 pb-3">
              What is Included?
            </h3>
            <ul className="space-y-4 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-100 block font-medium">Uncompromised Sightings</strong>
                  <span className="text-xs text-zinc-400">Identical park configurations and tracking paths as luxury cruisers.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-100 block font-medium">Elite Safari Trackers</strong>
                  <span className="text-xs text-zinc-400">Accompanied exclusively by certified, multi-lingual naturalist local drivers.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-100 block font-medium">Comfortable Bush Camps</strong>
                  <span className="text-xs text-zinc-400">En-suite wilderness lodging, fresh meals, and continuous running water.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Elegant Package Presentation Cards Catalog */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-widest">Transparent Rates</span>
          <h2 className="font-serif text-4xl font-bold text-white">Value Safari Blueprints</h2>
          <p className="text-zinc-500 text-sm max-w-md mx-auto font-light">
            Fully customizable packages utilizing shared transit matrices and strategic low-season adjustments.
          </p>
        </div>

        {packages.length === 0 ? (
          <p className="text-center text-zinc-500 italic text-sm">Loading custom package directory parameters...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg._id} className="bg-zinc-900/20 border border-zinc-900 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-zinc-800 hover:bg-zinc-900/30 transition-all duration-300 group shadow-lg">
                <div>
                  {/* Photo Framework wrapper */}
                  <div className="relative h-56 w-full bg-zinc-950 overflow-hidden">
                  <Image
                      src={pkg.image || "/placeholder.jpg"}
                    alt={pkg.title}
                    fill
                      className="object-cover group-hover:scale-102 transition-transform duration-700 brightness-[0.85]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                    <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-mono border border-zinc-800/80 text-zinc-300 flex items-center gap-1">
                      <Clock size={12} className="text-amber-500" /> {pkg.durationDays} Days
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <span className="inline-block text-[10px] uppercase font-mono tracking-widest text-amber-500 font-semibold">
                        {pkg.category || 'Affordable Safari Packages'}
                      </span>
                      <h3 className="text-xl font-bold text-white leading-snug group-hover:text-amber-400 transition-colors duration-300">
                        {pkg.title}
                      </h3>
                    </div>

                    {/* Dynamic Bullet Parameters */}
                    <div className="space-y-2 pt-2 border-t border-zinc-900">
                      {pkg.highlights?.map((high: string, i: number) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-400">
                          <div className="h-1 w-1 rounded-full bg-amber-500" />
                          <span>{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Pricing Core */}
                <div className="p-6 pt-4 border-t border-zinc-900/80 bg-zinc-950/40 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500 block font-mono">Rates From</span>
                    <div className="flex items-baseline text-amber-500 font-mono">
                      <span className="text-2xl font-bold">${pkg.basePrice}</span>
                      <span className="text-[10px] text-zinc-500 ml-1">/USD</span>
                    </div>
                  </div>
                  
                  <a 
                    href={`https://wa.me/254721246414?text=Hi%20CNJ%20Safaris,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-colors duration-300 font-mono shadow-md"
                  >
                    Inquire <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Brand Safety Reassurance CTA Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center space-y-6 border-t border-zinc-900">
        <div className="inline-flex p-4 rounded-full bg-zinc-900 border border-zinc-800 text-amber-500 shadow-inner">
          <ShieldCheck size={36} />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight">
          Secure Your Dream African Safari Route
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
          An elite safari experience shouldn&apos;t depend on an unapproachable budget layout. Contact our planning managers today to arrange a customized, value-driven pathway matching your parameters perfectly.
        </p>
        <div className="pt-4">
          <a
            href="https://wa.me/254721246414?text=Hi%20CNJ%20Safaris,%20I%20would%20like%20to%20request%20a%20custom%20affordable%20safari%20itinerary%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-widest text-zinc-950 bg-amber-500 hover:bg-amber-400 px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-[1.02]"
          >
            Connect on WhatsApp <Phone size={14} className="fill-current" />
          </a>
                </div>
      </section>
    </main>
  )
}