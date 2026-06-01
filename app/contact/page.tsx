'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/contact/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input name="name" type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-leaf-green" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input name="email" type="email" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-leaf-green" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" rows={4} required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-leaf-green" placeholder="How can we help?"></textarea>
              </div>
              
              {status === 'success' && <p className="text-sm text-green-600">Your message has been sent successfully!</p>}
              {status === 'error' && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}

              <button 
                type="submit" 
                disabled={loading} 
                className="w-full py-3 bg-leaf-green text-white font-bold rounded-lg hover:bg-green-600 transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
