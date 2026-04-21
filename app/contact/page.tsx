import type { Metadata } from 'next'
import WhatsAppFooter from '@/components/WhatsAppFooter'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | CNJ Safaris',
  description: 'Get in touch with CNJ Safaris to start planning your dream East African safari adventure.',
  icons: {
    icon: '/Cnj new logo.jpg',
  },
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="bg-jungle-dark py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white opacity-80 leading-relaxed">
            Have questions about our safaris? We're here to help you plan the perfect journey.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-jungle-dark mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage-light rounded-lg flex items-center justify-center text-jungle-dark shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-gray-600">info@cnjsafaris.com</p>
                  <p className="text-gray-600">bookings@cnjsafaris.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage-light rounded-lg flex items-center justify-center text-jungle-dark shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-xs text-leaf-green font-semibold uppercase mb-1">Available 24/7 for International Clients</p>
                  <p className="text-gray-600">0768 396 296</p>
                  <p className="text-gray-600">0721 246 414</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage-light rounded-lg flex items-center justify-center text-jungle-dark shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Our Office</h3>
                  <p className="text-gray-600">Karen Road, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-sage-light/30 p-8 rounded-2xl border border-gray-100">
            <h2 className="font-serif text-2xl font-bold text-jungle-dark mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-leaf-green" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-leaf-green" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-leaf-green" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-leaf-green text-white font-bold rounded-lg hover:bg-green-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <WhatsAppFooter />
    </main>
  )
}
