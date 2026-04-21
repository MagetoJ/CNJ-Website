import type { Metadata } from 'next'
import Image from 'next/image'
import { Briefcase, MapPin, Clock, Users, Globe, Rocket, Heart } from 'lucide-react'
import WhatsAppFooter from '@/components/WhatsAppFooter'

export const metadata: Metadata = {
  title: 'Careers | CNJ Safaris',
  description: 'Join our team at CNJ Safaris and help us create unforgettable East African safari experiences. Explore our open positions and start your adventure today.',
}

export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Safari Consultant',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      category: 'Operations',
      description: 'Expert in crafting bespoke safari itineraries and managing complex travel logistics across East Africa.',
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Remote / Nairobi',
      type: 'Full-time',
      category: 'Marketing',
      description: 'Lead our digital growth strategies, managing social media, SEO, and content marketing.',
    },
    {
      title: 'Lead Safari Guide',
      location: 'Arusha, Tanzania',
      type: 'Contract',
      category: 'Field Operations',
      description: 'Experienced guide with deep knowledge of Serengeti biodiversity and exceptional guest service skills.',
    },
  ]

  const benefits = [
    {
      title: 'Adventure First',
      desc: 'Regular opportunities to experience our safari products firsthand.',
      icon: Globe,
    },
    {
      title: 'Growth Mindset',
      desc: 'Professional development budget and mentorship programs.',
      icon: Rocket,
    },
    {
      title: 'Health & Wellness',
      desc: 'Comprehensive medical cover and mental health support.',
      icon: Heart,
    },
    {
      title: 'Global Community',
      desc: 'Work with a diverse team passionate about African conservation.',
      icon: Users,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-jungle-dark">
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-leaf-green font-semibold text-sm uppercase tracking-widest mb-4 block">Join Our Pride</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">Build the Future of African Travel</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            We're looking for passionate explorers and innovators to help us share the magic of East Africa with the world.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-jungle-dark">Why Work at CNJ Safaris?</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Beyond the breathtaking landscapes, we offer a culture built on trust, innovation, and a shared love for our heritage.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-sage-light text-jungle-dark rounded-lg flex items-center justify-center mb-6 group-hover:bg-jungle-dark group-hover:text-white transition">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-jungle-dark mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-sage-light">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-serif text-4xl font-bold text-jungle-dark">Open Positions</h2>
              <p className="text-gray-600 mt-2">Find your next adventure with us.</p>
            </div>
            <div className="flex gap-4">
              <span className="px-4 py-1 bg-white rounded-full text-xs font-semibold text-gray-500 border border-gray-200 uppercase tracking-wider">All Locations</span>
              <span className="px-4 py-1 bg-white rounded-full text-xs font-semibold text-gray-500 border border-gray-200 uppercase tracking-wider">All Departments</span>
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-transparent hover:border-leaf-green/30 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-leaf-green text-xs font-bold uppercase tracking-wider">{job.category}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">{job.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-jungle-dark mb-3 group-hover:text-leaf-green transition">{job.title}</h3>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        Full-time
                      </div>
                    </div>
                  </div>
                  <button className="px-8 py-3 bg-jungle-dark text-white font-semibold rounded-xl hover:bg-jungle-green transition self-start md:self-center">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Don't see a role that fits? We're always looking for talent.</p>
            <button className="text-jungle-dark font-bold hover:text-leaf-green transition flex items-center gap-2 mx-auto">
              Send us an open application <Briefcase size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-jungle-dark mb-6">A Culture of Purpose</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              At CNJ Safaris, we believe that travel has the power to change lives—both for our guests and for the communities we visit. Our team is united by this purpose.
            </p>
            <p>
              We foster a collaborative environment where every voice is heard, from our junior designers to our most senior guides. We value curiosity, integrity, and a relentless pursuit of excellence.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-leaf-green">40+</p>
                <p className="text-sm uppercase tracking-wider font-semibold">Team Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-leaf-green">12+</p>
                <p className="text-sm uppercase tracking-wider font-semibold">Nationalities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}
