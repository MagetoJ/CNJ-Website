'use client'

import WhatsAppFooter from './WhatsAppFooter'
import Image from 'next/image'
import { MapPin, Users, Clock, DollarSign, ChevronRight } from 'lucide-react'
import { generateTouristTripSchema, SITE_CONFIG } from '@/lib/seo'

interface Highlight {
  title: string
  description: string
  icon: React.ReactNode
}

interface Package {
  id: string
  name: string
  duration: string
  price: string
  highlights: string[]
}

interface DestinationPageProps {
  title: string
  subtitle: string
  heroImage?: string
  heroGradient: string
  bestTime: string
  highlights: Highlight[]
  description: string
  packages: Package[]
  metaDescription: string
  quickFacts?: {
    bestTime: string
    difficulty: string
    estimatedCost: string
    perfectFor: string
  }
  trustSection?: string
}

export default function DestinationPage({
  title,
  subtitle,
  heroImage,
  heroGradient,
  bestTime,
  highlights,
  description,
  packages,
  metaDescription,
  quickFacts,
  trustSection,
}: DestinationPageProps) {
  // Generate International SEO Schema for the destination
  const jsonLd = generateTouristTripSchema({
    name: title,
    description: metaDescription,
    image: heroImage,
    url: `${SITE_CONFIG.url}/safaris/${title.toLowerCase().replace(/\s+/g, '-')}`,
    destinationName: title,
    offers: packages.map(pkg => ({
      name: pkg.name,
      price: pkg.price,
      currency: 'USD'
    }))
  })

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className={`relative w-full h-96 flex items-center justify-center overflow-hidden ${heroGradient}`}>
        {heroImage ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              priority
              className="object-cover brightness-50"
              sizes="100vw"
            />
          </div>
        ) : (
          <div className="absolute inset-0 opacity-30"></div>
        )}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-4xl sm:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-sage-light py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <Clock size={24} className="mx-auto mb-2 text-leaf-green" />
            <p className="text-sm text-gray-600">Best Time</p>
            <p className="font-semibold text-jungle-dark">{quickFacts?.bestTime || bestTime}</p>
          </div>
          <div>
            <MapPin size={24} className="mx-auto mb-2 text-leaf-green" />
            <p className="text-sm text-gray-600">Perfect For</p>
            <p className="font-semibold text-jungle-dark">{quickFacts?.perfectFor || 'All Levels'}</p>
          </div>
          <div>
            <Users size={24} className="mx-auto mb-2 text-leaf-green" />
            <p className="text-sm text-gray-600">Difficulty</p>
            <p className="font-semibold text-jungle-dark">{quickFacts?.difficulty || 'Moderate'}</p>
          </div>
          <div>
            <DollarSign size={24} className="mx-auto mb-2 text-leaf-green" />
            <p className="text-sm text-gray-600">Starting From</p>
            <p className="font-semibold text-jungle-dark">{quickFacts?.estimatedCost || '$1,200'}</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-jungle-dark mb-6">
            About This Destination
          </h2>
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
          
          {trustSection && (
            <div className="mt-12 p-6 bg-sage-light/30 border-l-4 border-leaf-green rounded-r-xl">
              <h3 className="text-xl font-bold text-jungle-dark mb-2">Why Book With Us?</h3>
              <p className="text-gray-700 italic">{trustSection}</p>
            </div>
          )}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sage-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-jungle-dark mb-12 text-center">
            Why Visit Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-leaf-green transition"
              >
                <div className="w-12 h-12 bg-leaf-green rounded-lg flex items-center justify-center mb-4 text-white text-xl">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-jungle-dark mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-jungle-dark mb-12 text-center">
            Our Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-leaf-green transition hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-jungle-dark mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-4">{pkg.duration}</p>
                <p className="text-3xl font-bold text-leaf-green mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-2 mb-8">
                  {pkg.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <ChevronRight size={20} className="text-leaf-green shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition">
                  Book This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-jungle text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready for Your Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Our travel experts are ready to customize the perfect safari experience for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition">
              Chat with an Expert
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Build Custom Itinerary
            </button>
          </div>
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}
