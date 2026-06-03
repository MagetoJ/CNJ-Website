import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, ShieldCheck, TreePine, Award, Users, Map } from 'lucide-react'
import WhatsAppFooter from '@/components/WhatsAppFooter'

export const metadata: Metadata = {
  title: 'About Us | CNJ Safaris',
  description: 'Learn about the story behind CNJ Safaris. We are dedicated to providing authentic, sustainable, and unforgettable East African safari experiences.',
  icons: {
    icon: '/Cnj new logo.jpg',
  },
}

export default function AboutPage() {
  const values = [
    {
      title: 'Authenticity',
      desc: 'We go beyond the tourist trails to show you the real heart of Africa.',
      icon: Heart,
    },
    {
      title: 'Sustainability',
      desc: 'Committed to conservation and supporting local communities.',
      icon: TreePine,
    },
    {
      title: 'Reliability',
      desc: 'Decades of experience ensuring your safety and comfort at every step.',
      icon: ShieldCheck,
    },
  ]

  const stats = [
    { label: 'Years Experience', value: '5+', icon: Award },
    { label: 'Countries Covered', value: '4 Countries', icon: Map },
    { label: 'Expert Guides', value: '25+', icon: Users },
    { label: 'Trust Rating', value: '4.9/5', icon: Heart },
  ]

  const team = [
    {
      name: 'James Mwangi',
      role: 'Head Guide & Founder',
      image: '/safari-park-giraffe.jpeg',
    },
    {
      name: 'Sarah Chen',
      role: 'Travel Consultant',
      image: '/South African Safari _ GORAH ELEPHANT CAMP, Addo….jpeg',
    },
    {
      name: 'David Ochieng',
      role: 'Lead Tracker',
      image: '/gorilla.jpeg',
    },
    {
      name: 'Linda Mbeki',
      role: 'Customer Success',
      image: '/Enjoying an evening cruise searching for hippos in….jpeg',
    },
  ]

  return (
    <main className="min-h-screen bg-[#1A1A1A] text-gray-300 selection:bg-[#C19A6B]/30 pt-24">
      
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <Image
          src="/Enjoying an evening cruise searching for hippos in….jpeg"
          alt="African Sunset"
          fill
          priority
          className="object-cover brightness-[0.35] scale-105 transition-transform duration-1000"
          sizes="100vw"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 justify-center w-full">
            <div className="h-px w-8 bg-[#C19A6B]"></div>
            <span className="text-[#C19A6B] font-semibold text-xs uppercase tracking-[0.3em]">Globally Trusted Since 2019</span>
            <div className="h-px w-8 bg-[#C19A6B]"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            World-Class Safaris
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Providing European and American standard luxury wrapped inside the authentic heart of Africa.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]"></div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#C19A6B] font-semibold uppercase tracking-widest text-xs">Who We Are</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-6">Pioneering Personal Safaris</h2>
          <div className="space-y-5 text-gray-400 leading-relaxed text-base">
            <p>
              CNJ Safaris was born out of a deep-seated passion for the wild landscapes and rich cultures of East Africa. 
              What started as a small boutique guide network in Nairobi has grown into a premier luxury custom tour operator.
            </p>
            <p>
              We believe that every wild expedition should be as distinct as the traveler undertaking it. Our mission extends far beyond typical game tracking—we connect you intimately to the soul of the savannah through professional local storytelling, luxury logistics, and native preservation stewardship.
            </p>
          </div>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
          <Image 
            src="/South African Safari _ GORAH ELEPHANT CAMP, Addo….jpeg" 
            alt="Safari Guide Layout" 
            fill 
            className="object-cover opacity-90" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#222222] border-y border-white/5 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#C19A6B]/10 rounded-lg border border-[#C19A6B]/20 flex items-center justify-center text-[#C19A6B] group-hover:scale-110 transition-transform">
                  <stat.icon size={22} />
                </div>
                <p className="text-3xl md:text-4xl font-bold mb-1 font-serif text-white">{stat.value}</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#C19A6B] font-semibold uppercase tracking-widest text-xs block mb-3">Our Core Pillars</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-16">The Values That Guide Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-[#222222] border border-white/5 p-10 rounded-2xl shadow-xl transition-all duration-300 hover:border-white/10 group">
                <div className="w-14 h-14 bg-[#1A1A1A] border border-white/5 text-[#C19A6B] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C19A6B] group-hover:text-black transition-all duration-300">
                  <v.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#222222] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#C19A6B] font-semibold uppercase tracking-widest text-xs">Our People</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mt-4">Meet Our Expert Team</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Behind every memorable safari route is a team of certified professionals and generational trackers who understand every corridor of the East African wilderness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 p-4 transition-all duration-300 hover:border-white/10">
                <div className="relative h-72 w-full mb-5 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#C19A6B] transition-colors">{member.name}</h3>
                <p className="text-[#C19A6B] font-semibold uppercase tracking-wider text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}
