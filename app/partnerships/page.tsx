import type { Metadata } from 'next'
import Image from 'next/image'
import WhatsAppFooter from '@/components/WhatsAppFooter'
import { Handshake, Globe, BarChart3, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partnerships | CNJ Safaris',
  description: 'Join our network of global travel partners. We collaborate with agents, tour operators, and conservationists to deliver world-class African safaris.',
}

export default function PartnershipsPage() {
  const benefits = [
    { title: 'Global Reach', desc: 'Partner with a brand trusted across US, Europe, and Asia.', icon: Globe },
    { title: 'Reliable Operations', desc: '5+ years of seamless ground handling and logistics.', icon: ShieldCheck },
    { title: 'Growth Potential', desc: 'Access exclusive rates and high-conversion safari packages.', icon: BarChart3 },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/handshake.jpeg"
          alt="Luxury Safari Partnership"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Partner With Us</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 font-light">
            Building sustainable and successful safari experiences together.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-leaf-green font-semibold uppercase tracking-widest text-sm">B2B Collaboration</span>
            <h2 className="font-serif text-4xl font-bold text-jungle-dark mt-4 mb-6">For Travel Agents & Operators</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We provide comprehensive ground handling services in Kenya, Tanzania, Uganda, and Rwanda. 
              Our partners benefit from our deep local knowledge, Silver/Gold certified guides, and 
              our own fleet of customized 4x4 Land Cruisers.
            </p>
            <div className="grid gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-sage-light/30 border border-gray-100">
                  <b.icon className="text-leaf-green shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-jungle-dark">{b.title}</h4>
                    <p className="text-sm text-gray-600">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-125 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/Experience an unforgettable Big 5 safari at….jpeg" 
              alt="Safari Collaboration" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-jungle-dark rounded-3xl p-12 text-center text-white">
          <Handshake size={48} className="mx-auto mb-6 text-leaf-green" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Start a Partnership</h2>
          <p className="max-w-xl mx-auto opacity-80 mb-8">
            Ready to offer your clients the adventure of a lifetime? Get in touch to discuss commission structures and tailored packages.
          </p>
          <button className="px-10 py-4 bg-leaf-green text-white font-bold rounded-lg hover:bg-green-600 transition">
            Inquire Now
          </button>
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}