'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Users, Calendar } from 'lucide-react'

const quickLinks = [
  {
    id: 1,
    title: '8-Day Ultimate East Africa',
    description: 'Our most selected traveler\'s choice: A comprehensive 8-day journey through the heart of the savannah.',
    icon: Users, // Changed icon to Users as it's a popular choice
    image: '/kenya-welcome-safari.jpg',
    href: '/safaris/maasai-mara',
    badge: 'Most Popular',
    price: '$1,500',
  },
  {
    id: 2,
    title: 'Gorilla Trekking',
    description: 'Trek through mist-covered mountains to encounter endangered mountain gorillas',
    icon: Users,
    image: '/gorilla.jpeg',
    href: '/safaris/gorilla-trekking',
  },
  {
    id: 3,
    title: 'Serengeti Migration',
    description: 'Witness the greatest spectacle on Earth - the annual wildebeest migration',
    icon: Calendar,
    image: '/Why you should visit Kenya — Style for Wanderlust.jpeg',
    href: '/safaris/serengeti',
  },
]

export default function QuickLinks() {
  return (
    <section id="explore" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-leaf-green font-semibold text-sm uppercase tracking-widest">
            Popular Destinations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-jungle-dark mt-4 mb-6">
            Explore Our Top Safaris
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From the legendary Maasai Mara to the misty gorilla forests, discover the safaris that capture hearts
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickLinks.map(link => {
            const Icon = link.icon
            return (
              <Link
                key={link.id}
                href={link.href}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-leaf-green transition hover:shadow-xl flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={link.image}
                    alt={link.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {link.badge && (
                    <div className="absolute top-4 right-4 bg-leaf-green text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10 animate-pulse">
                      {link.badge}
                    </div>
                  )}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center text-jungle-dark shadow-sm group-hover:bg-leaf-green group-hover:text-white transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                
                <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-jungle-dark mb-3">
                  {link.title}
                </h3>
                {link.price && (
                  <p className="text-leaf-green font-bold text-lg mb-2">{link.price} per person</p>
                )}
                <p className="text-gray-600 mb-4">
                  {link.description}
                </p>
                <div className="flex items-center gap-2 text-leaf-green font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <span className="text-xl">→</span>
                </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Don&apos;t see what you&apos;re looking for?
          </p>
          <button className="px-8 py-3 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition">
            Create Custom Safari
          </button>
        </div>
      </div>
    </section>
  )
}
