import type { Metadata } from 'next'
import WhatsAppFooter from '@/components/WhatsAppFooter'
import { Handshake, Globe, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partnerships | CNJ Safaris',
  description: 'Partner with East Africa\'s leading boutique safari operator. We offer competitive rates for travel agents and unique collaborations for influencers.',
}

export default function PartnershipPage() {
  const benefits = [
    {
      title: 'Competitive Commissions',
      desc: 'Industry-leading rates for travel agents and tour operators globally.',
      icon: TrendingUp,
    },
    {
      title: 'Local Ground Handling',
      desc: 'White-label ground handling services in Kenya, Tanzania, and Uganda.',
      icon: Globe,
    },
    {
      title: 'Dedicated Support',
      desc: '24/7 concierge support for your clients while they are on the ground.',
      icon: Users,
    },
  ]

  return (
    <main className="bg-white">
      
      <section className="bg-jungle-dark py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex p-3 bg-leaf-green/20 rounded-full text-leaf-green mb-6">
            <Handshake size={32} />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Partner With Us</h1>
          <p className="text-xl text-white opacity-80 leading-relaxed">
            Expand your portfolio with high-end, sustainable East African safaris. 
            We partner with travel agencies, lifestyle brands, and influencers to bring the magic of Africa to more people.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-2xl bg-cream/30 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-jungle-dark text-white rounded-lg flex items-center justify-center mb-6">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-jungle-dark mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-sage-light px-4">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-sm text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-jungle-dark mb-6">Start a Collaboration</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Interested in working together? Drop us a line with your proposal or company profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:partners@cnjsafaris.com" 
              className="px-8 py-4 bg-jungle-dark text-white font-bold rounded-lg hover:bg-black transition shadow-lg"
            >
              Agent Inquiries
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-jungle-dark text-jungle-dark font-bold rounded-lg hover:bg-jungle-dark hover:text-white transition"
            >
              Influencer Media Kit
            </a>
          </div>
        </div>
      </section>
      <WhatsAppFooter />
    </main>
  )
}
