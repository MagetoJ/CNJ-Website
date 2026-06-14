'use client'

import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Download, Calendar, MapPin, DollarSign } from 'lucide-react'
import { toast } from 'sonner'

// Structured Array based directly on your corporate master document portfolio
const SAMPLE_ITINERARIES = [
  {
    id: "pkg-1",
    title: "3-Day Maasai Mara Wildlife Blitz",
    location: "Maasai Mara National Reserve",
    duration: "3 Days / 2 Nights",
    pricing: 1350,
    pricingLabel: "$1,350",
    tags: ["Big Five", "Migration", "Cultural"],
    description: "Endless golden savannah famous for lions, leopards, cheetahs & the Great Wildebeest Migration. Includes game drives via Sekenani Gate + Maasai Boma cultural visit.",
    pdfPath: "/documents/cnj-safaris-master-catalog.pdf" 
  },
  {
    id: "pkg-5",
    title: "7-Day Kenya Bush to Diani Beach Escape",
    location: "Maasai Mara & Diani Beach",
    duration: "7 Days / 6 Nights",
    pricing: 4500,
    pricingLabel: "Custom Tier",
    tags: ["Beach", "Ocean", "Big Five"],
    description: "3 nights high-octane game tracking then fly-in to Ukunda Airstrip for 3 nights of premium Indian Ocean relaxation & marine snorkeling.",
    pdfPath: "/documents/cnj-safaris-master-catalog.pdf"
  },
  {
    id: "pkg-25",
    title: "14-Day Ultimate Africa Icons",
    location: "Kenya, Tanzania & Uganda",
    duration: "14 Days / 13 Nights",
    pricing: 7950,
    pricingLabel: "$7,950",
    tags: ["Pinnacle", "Gorillas", "Aviation"],
    description: "The absolute pinnacle: full Big Five tracking across Kenya & Tanzania, followed by a regional flight to Uganda for a breathtaking gorilla trekking finale.",
    pdfPath: "/documents/cnj-safaris-master-catalog.pdf"
  }
]

export default function ItineraryCatalog({ allPackages }: { allPackages?: any[] }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [tierFilter, setTierFilter] = useState<'ALL' | 'VALUE' | 'LUXURY'>('ALL')

  // Combine built-in samples with dynamic packages passed as props
  const displayPackages = useMemo(() => {
    const base = [...SAMPLE_ITINERARIES]
    if (allPackages) {
      allPackages.forEach(pkg => {
        if (!base.find(b => b.id === pkg._id)) {
          base.push({
            id: pkg._id,
            title: pkg.title,
            location: pkg.destinationName,
            duration: `${pkg.durationDays} Days`,
            pricing: pkg.basePrice,
            pricingLabel: `$${pkg.basePrice.toLocaleString()}`,
            tags: [pkg.category],
            description: pkg.days?.[0]?.description || pkg.highlights.join(", "),
            pdfPath: "#"
          })
        }
      })
    }
    return base
  }, [allPackages])

  // Extract all unique tags for your quick-filter system layout
  const allTags = Array.from(new Set(displayPackages.flatMap(item => item.tags)))

  const filteredItineraries = displayPackages.filter(item => {
    const matchesTag = selectedTag ? item.tags.includes(selectedTag) : true
    const matchesTier = tierFilter === 'ALL' 
      ? true 
      : tierFilter === 'VALUE' ? item.pricing <= 1300 : item.pricing > 1300
    return matchesTag && matchesTier
  })

  const handleDownloadNotification = (title: string) => {
    toast.success(`Downloading itinerary: ${title}`)
  }

  return (
    <section className="py-12 bg-stone-50/5 rounded-3xl px-6 my-12 border border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Badge variant="outline" className="border-safari-gold/30 text-safari-gold bg-safari-gold/5 mb-3 px-3 py-1 uppercase tracking-tighter">
          Ready-Made Master Guides
        </Badge>
        <h2 className="text-3xl font-serif font-bold text-white tracking-tight uppercase">
          Explore & Download Curated Itineraries
        </h2>
        <p className="text-gray-400 mt-2">
          Save our expertly constructed routes directly to your device. Bring them along or use them to inspire your custom planning adjustments.
        </p>
      </div>

      {/* Interactive Tier Switch Filter Row */}
      <div className="flex justify-center gap-4 bg-zinc-900/60 p-2 rounded-2xl border border-zinc-800/40 max-w-md mx-auto mb-8">
        <button
          onClick={() => setTierFilter('ALL')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${tierFilter === 'ALL' ? 'bg-safari-gold text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-zinc-200'}`}
        >
          All Tours
        </button>
        <button
          onClick={() => setTierFilter('VALUE')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${tierFilter === 'VALUE' ? 'bg-safari-gold text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-zinc-200'}`}
        >
          Value Collection
        </button>
        <button
          onClick={() => setTierFilter('LUXURY')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${tierFilter === 'LUXURY' ? 'bg-safari-gold text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-zinc-200'}`}
        >
          Premium Elite
        </button>
      </div>

      {/* Dynamic Visual Navigation Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <Button 
          variant={selectedTag === null ? "default" : "outline"}
          onClick={() => setSelectedTag(null)}
          className={`rounded-full px-4 text-xs transition-all ${selectedTag === null ? 'bg-safari-gold text-black hover:bg-safari-gold/90' : 'border-white/10 text-gray-300 hover:border-safari-gold'}`}
        >
          All Adventures
        </Button>
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            onClick={() => setSelectedTag(tag)}
            className={`rounded-full px-4 text-xs transition-all ${selectedTag === tag ? 'bg-safari-gold text-black hover:bg-safari-gold/90' : 'border-white/10 text-gray-300 hover:border-safari-gold'}`}
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* Interactive Safari Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItineraries.map((safari) => (
          <Card key={safari.id} className="border-white/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between bg-black/40 overflow-hidden group">
            <div>
              <div className="h-1 bg-safari-gold/0 group-hover:bg-safari-gold/100 transition-all" />
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-wrap gap-1">
                  {safari.tags.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-semibold bg-white/5 text-gray-400 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                  </div>
                  <span className="bg-zinc-950/80 border border-white/5 backdrop-blur-md px-2 py-0.5 rounded text-[8px] uppercase font-mono tracking-tighter text-safari-gold font-bold">
                    {safari.pricing <= 1300 ? "Value Collection" : "Bespoke Premium"}
                  </span>
                </div>
                <CardTitle className="text-xl font-serif text-white group-hover:text-safari-gold transition-colors uppercase">
                  {safari.title}
                </CardTitle>
                <CardDescription className="flex items-center text-xs text-gray-500 mt-1">
                  <MapPin className="h-3 w-3 mr-1 text-safari-gold" /> {safari.location}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-sm text-gray-300 space-y-3">
                <p className="line-clamp-3 text-xs leading-relaxed">{safari.description}</p>
                
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-xs text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
                    <span>{safari.duration}</span>
                  </div>
                  <div className="flex items-center font-medium text-emerald-500">
                    <DollarSign className="h-3.5 w-3.5 mr-0.5 text-emerald-500" />
                    <span>{safari.pricingLabel} <span className="text-[10px] text-gray-500 font-normal">/pp</span></span>
                  </div>
                </div>
              </CardContent>
            </div>

            <CardFooter className="pt-3 border-t border-white/5 bg-white/5">
              <Button asChild className="w-full bg-white text-black hover:bg-safari-gold transition-all text-xs font-bold uppercase" variant="default">
                <a 
                  href={safari.pdfPath} 
                  download={`${safari.title.replace(/\s+/g, '_')}_Itinerary.pdf`}
                  onClick={() => handleDownloadNotification(safari.title)}
                >
                  <Download className="mr-2 h-3.5 w-3.5" /> Download PDF Blueprint
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}