import type { Metadata } from 'next'
import Image from 'next/image'
import WhatsAppFooter from '@/components/WhatsAppFooter'
import { Briefcase, Map, Heart, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | CNJ Safaris',
  description: 'Join the pride. Explore career opportunities in safari guiding, travel design, and wildlife conservation with CNJ Safaris.',
}

export default function CareersPage() {
  const positions = [
    { title: 'Safari Travel Designer', type: 'Full-time', location: 'Nairobi' },
    { title: 'Senior Wildlife Guide', type: 'Contract', location: 'Maasai Mara' },
    { title: 'Conservation Coordinator', type: 'Full-time', location: 'Remote/Field' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/careers.jpeg"
          alt="Working at CNJ Safaris"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Join the Pride</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 font-light">
            Turn your passion for Africa into a world-class career.
          </p>
        </div>
      </section>

      {/* Life at CNJ Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1 relative h-125 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/Why you should visit Kenya — Style for Wanderlust.jpeg" 
              alt="Adventure Careers" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-leaf-green font-semibold uppercase tracking-widest text-sm">Our Culture</span>
            <h2 className="font-serif text-4xl font-bold text-jungle-dark mt-4 mb-6">Work Where Others Vacation</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Since 2019, CNJ Safaris has been built by individuals who don&apos;t just see Africa as a destination, 
              but as a home. We value authenticity, expertise, and a relentless commitment to guest satisfaction.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-4 py-2 bg-sage-light rounded-full text-jungle-dark text-sm font-semibold flex items-center gap-2">
                <Heart size={16} /> Heart of Africa
              </div>
              <div className="px-4 py-2 bg-sage-light rounded-full text-jungle-dark text-sm font-semibold flex items-center gap-2">
                <Map size={16} /> Expert Guided
              </div>
              <div className="px-4 py-2 bg-sage-light rounded-full text-jungle-dark text-sm font-semibold flex items-center gap-2">
                <Compass size={16} /> Purpose Driven
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-jungle-dark">Open Positions</h2>
          <p className="text-gray-600 mt-4">We&apos;re always looking for talented explorers.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {positions.map((job, i) => (
            <div key={i} className="group p-6 border border-gray-200 rounded-2xl flex items-center justify-between hover:border-leaf-green hover:shadow-md transition cursor-pointer">
              <div>
                <h4 className="text-xl font-bold text-jungle-dark group-hover:text-leaf-green transition">{job.title}</h4>
                <p className="text-gray-500 text-sm">{job.location} • {job.type}</p>
              </div>
              <Briefcase className="text-gray-300 group-hover:text-leaf-green" />
            </div>
          ))}
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}