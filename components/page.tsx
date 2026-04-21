import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, ShieldCheck, TreePine, Award, Users, Map, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | CNJ Safaris',
  description: 'Learn about the story behind CNJ Safaris. We are dedicated to providing authentic, sustainable, and unforgettable East African safari experiences.',
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

  const team = [
    {
      name: 'Samuel Kipchumba',
      role: 'Lead Safari Guide',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop',
      bio: 'Sam has over 15 years of experience tracking the Big Five across the Maasai Mara and Serengeti.',
    },
    {
      name: 'Florence Atieno',
      role: 'Travel Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=500&auto=format&fit=crop',
      bio: 'Florence specializes in crafting bespoke luxury itineraries that blend adventure with relaxation.',
    },
    {
      name: 'David Omondi',
      role: 'Conservation Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop',
      bio: 'David ensures our tours support local biodiversity and community-led conservation projects.',
    },
  ]

  const stats = [
    { label: 'Years Experience', value: '20+', icon: Award },
    { label: 'Destinations', value: '4 Countries', icon: Map },
    { label: 'Expert Guides', value: '25+', icon: Users },
    { label: 'Happy Travelers', value: '5000+', icon: Heart },
  ]

  return (
    <main className="min-h-screen bg-white selection:bg-leaf-green/30">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000&auto=format&fit=crop"
          alt="African Sunset"
          fill
          priority
          className="object-cover brightness-[0.45] scale-105 transition-transform duration-1000"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 justify-center w-full">
            <div className="h-px w-8 bg-leaf-green"></div>
            <span className="text-leaf-green font-semibold text-sm uppercase tracking-[0.3em]">Since 2004</span>
            <div className="h-px w-8 bg-leaf-green"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Our Journey
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-95 max-w-2xl mx-auto font-light leading-relaxed">
            Crafting soul-stirring East African adventures for two decades.
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
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop" 
            alt="Safari Guide" 
            fill 
            className="object-cover" 
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

      {/* Team Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-leaf-green font-semibold uppercase tracking-widest text-sm">Expert Guidance</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-jungle-dark mt-4">Meet Our Safari Experts</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our passion for Africa is matched only by our expertise in sharing it with you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" 
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-jungle-dark mb-1">{member.name}</h3>
              <p className="text-leaf-green font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed px-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}