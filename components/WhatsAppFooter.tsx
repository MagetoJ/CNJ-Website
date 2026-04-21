'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react'

export default function WhatsAppFooter() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+254721246414'
  const whatsappMessage = 'Hi CNJ Safaris, I would like to book a safari adventure!'
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      {/* Sticky WhatsApp & Build Trip Buttons - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 p-3 space-y-2 z-40">
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition text-center items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          WhatsApp Chat
        </a>
        <button className="w-full px-4 py-3 bg-leaf-green text-white font-semibold rounded-lg hover:bg-green-600 transition">
          Build Your Trip
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-jungle-dark text-white pt-20 pb-8 md:pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/Cnj new logo.jpg"
                  alt="CNJ Safaris Logo"
                  width={40}
                  height={40}
                  className="rounded-lg object-contain bg-white p-0.5"
                />
                <span className="font-serif font-bold text-xl">CNJ Safaris</span>
              </div>
              <p className="text-gray-400 text-sm">
                The world is a book, discover every page.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Explore</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/safaris/maasai-mara" className="hover:text-leaf-green transition">
                    Maasai Mara Safaris
                  </Link>
                </li>
                <li>
                  <Link href="/safaris/serengeti" className="hover:text-leaf-green transition">
                    Serengeti Tours
                  </Link>
                </li>
                <li>
                  <Link href="/safaris/gorilla-trekking" className="hover:text-leaf-green transition">
                    Gorilla Trekking
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-leaf-green transition">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-leaf-green transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-leaf-green transition">
                    Visa & Travel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-leaf-green transition">
                    Packing Guide
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="hover:text-leaf-green transition">
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-leaf-green transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Get in Touch</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-1 shrink-0 text-leaf-green" />
                  <span>0768 396 296 / 0721 246 414</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="mt-1 shrink-0 text-leaf-green" />
                  <span>info@cnjsafaris.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 shrink-0 text-leaf-green" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm pt-8">
            <p>
              &copy; 2024 CNJ Safaris. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-leaf-green transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-leaf-green transition">
                Terms of Service
              </Link>
              <div className="flex gap-4">
                <a href="#" className="hover:text-leaf-green transition">Facebook</a>
                <a href="#" className="hover:text-leaf-green transition">Instagram</a>
                <a href="#" className="hover:text-leaf-green transition">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Spacing for Sticky Buttons */}
        <div className="h-32 md:h-0"></div>
      </footer>
    </>
  )
}
