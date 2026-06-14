// app/destinations/[slug]/page.tsx
'use client'

import { useEffect, useState, use } from 'react'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { sanityFetch, urlFor } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Calendar, Star, Clock, ChevronRight } from 'lucide-react'

async function getDestinationData(slug: string) {
  const query = `*[_type == "destination" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    title,
    description,
    mainImage,
    body,
    "quickFacts": {
      "location": coalesce(quickFacts.location, "Tanzania"),
      "bestTime": coalesce(quickFacts.bestTime, "June - October"),
      "duration": coalesce(quickFacts.duration, "4 - 7 Days"),
      "difficulty": coalesce(quickFacts.difficulty, "Easy")
    }
  }`
  return await sanityFetch<any>({ query, params: { slug }, tags: ['destination'] })
}

export default function IndividualDestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [destination, setDestination] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Configure viewport scroll trackers for luxury parallax header animation
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -250])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDestinationData(slug)
      if (!data) return notFound()
      setDestination(data)
      setIsLoading(false)
    }
    fetchData()
  }, [slug])

  if (isLoading) return <div className="min-h-screen bg-deep-black" />

  return (
    <main className="bg-deep-black min-h-screen text-gray-200 selection:bg-safari-gold/30">
      {/* Parallax Hero Section */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
          {destination.mainImage && (
            <Image
              src={urlFor(destination.mainImage).url()}
              alt={destination.title || "CNJ Safaris Destination Canvas Portfolio"}
              fill
              priority
              className="object-cover brightness-50"
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-black/20 z-1" />
        
        <motion.div 
          style={{ opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-safari-gold font-sans tracking-[0.5em] text-xs uppercase mb-4 block font-bold">
            Iconic Destinations
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black text-white leading-none tracking-tight">
            {destination.title}
          </h1>
          <div className="w-24 h-1 bg-safari-gold mx-auto mt-8" />
        </motion.div>
      </header>

      {/* Luxury Stats Bar */}
      <section className="relative z-20 -mt-24 px-4 max-w-6xl mx-auto">
        <div className="bg-zinc-900/80 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Location', value: destination.quickFacts?.location, icon: MapPin },
            { label: 'Best Time', value: destination.quickFacts?.bestTime, icon: Clock },
            { label: 'Duration', value: destination.quickFacts?.duration, icon: Calendar },
            { label: 'Experience', value: 'High Luxury', icon: Star },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left flex flex-col md:flex-row items-center gap-4">
              <div className="w-12 h-12 bg-safari-gold/10 rounded-full flex items-center justify-center text-safari-gold shrink-0">
                <stat.icon size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{stat.label}</p>
                <p className="text-white font-medium text-sm">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Content Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-safari lg:prose-xl max-w-none 
              prose-p:text-gray-400 prose-p:leading-relaxed prose-p:font-light
              prose-headings:font-serif prose-headings:font-bold prose-headings:text-white"
          >
            <h2 className="text-4xl md:text-5xl mb-8">Unveiling the Timeless Savannah</h2>
            {destination.body ? (
              <PortableText value={destination.body} />
            ) : (
              <p className="text-xl leading-relaxed">{destination.description}</p>
            )}
          </motion.div>
        </div>

        {/* Classy Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-10">
            <div className="p-10 bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-safari-gold/5 blur-3xl rounded-full" />
              <h3 className="font-serif text-2xl text-white mb-6">Expert Insight</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8 italic">
                "The {destination.title} isn't just a place to visit; it's a sensory symphony of the wild. Our private guides ensure you are always at the center of the action, away from the crowds."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-safari-gold flex items-center justify-center text-white font-serif italic text-xl">
                  C
                </div>
                <div>
                  <p className="text-white font-bold text-sm">CNJ Safaris</p>
                  <p className="text-safari-gold text-xs uppercase tracking-tighter">Elite Specialists</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold px-2">Related Experiences</h4>
              <div className="grid grid-cols-1 gap-3">
                {['Private Aerial Charters', 'Migration Tracking', 'Bush Dining'].map((exp, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer">
                    <span className="text-sm font-medium text-gray-200">{exp}</span>
                    <ChevronRight size={16} className="text-safari-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Classy Book Optimization CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto rounded-[3rem] bg-safari-gold p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl md:text-7xl font-black text-deep-black mb-8 leading-tight">
              Craft Your Private <br /> Odyssey in the Wild.
            </h2>
            <p className="text-deep-black/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
              Let our specialists engineer a bespoke {destination.title} experience that defies expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-deep-black text-white font-bold rounded-full hover:scale-105 transition-transform shadow-2xl">
                Enquire Now
              </button>
              <button className="px-12 py-5 border-2 border-deep-black text-deep-black font-bold rounded-full hover:bg-deep-black hover:text-white transition-all">
                View Itineraries
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}