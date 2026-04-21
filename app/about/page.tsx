import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, ShieldCheck, TreePine, Award, Users, Map, Target } from 'lucide-react'
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
    { label: 'Global Travelers', value: '5000+', icon: Award },
    { label: 'Countries Covered', value: '4 Countries', icon: Map },
    { label: 'Expert Guides', value: '25+', icon: Users },
    { label: 'Trust Rating', value: '4.9/5', icon: Heart },
  ]

  return (
    <main className="min-h-screen bg-white selection:bg-leaf-green/30">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Enjoying an evening cruise searching for hippos in….jpeg"
          alt="African Sunset"
          fill
          priority
          className="object-cover brightness-[0.45] scale-105 transition-transform duration-1000"
          sizes="100vw"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 justify-center w-full">
            <div className="h-px w-8 bg-leaf-green"></div>
            <span className="text-leaf-green font-semibold text-sm uppercase tracking-[0.3em]">Globally Trusted Since 2004</span>
            <div className="h-px w-8 bg-leaf-green"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
            World-Class Safaris
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-95 max-w-2xl mx-auto font-light leading-relaxed">
            Providing European and American standard luxury with the authentic heart of Africa.
          </p>
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/10"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-leaf-green font-semibold uppercase tracking-widest text-sm">Who We Are</span>
          <h2 className="font-serif text-4xl font-bold text-jungle-dark mt-4 mb-6">Pioneering Personal Safaris</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              CNJ Safaris was born out of a deep-seated passion for the wild landscapes and rich cultures of East Africa. 
              What started as a small family-run guide service in Nairobi has grown into a leading boutique safari operator.
            </p>
            <p>
              We believe that every journey should be as unique as the traveler. Our goal is not just to show you wildlife, 
              but to connect you with the soul of the savannah through expert storytelling and seamless logistics.
            </p>
          </div>
        </div>
        <div className="relative h-100 rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="/South African Safari _ GORAH ELEPHANT CAMP, Addo….jpeg" 
            alt="Safari Guide" 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-jungle-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-leaf-green/20 rounded-lg flex items-center justify-center text-leaf-green group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-sage-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-jungle-dark mb-16">The Values That Guide Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-16 h-16 bg-jungle-dark text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <v.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-jungle-dark mb-4">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}
