'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react'

export default function WhatsAppFooter() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+254721246414'
  const whatsappMessage = 'Hi CNJ Safaris, I would like to book a safari adventure!'
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 md:bottom-10"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Sticky Bottom Buttons - Mobile (Styled Modern Black & Glass) */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 p-3 space-y-2 z-40">
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition text-center items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          WhatsApp Chat
        </a>
        <button className="w-full px-4 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-600 transition">
          Build Your Trip
        </button>
      </div>

      {/* Footer (Styled Deep Matte Black) */}
      <footer className="bg-black/90 border-t border-white/5 text-gray-300 pt-20 pb-8 md:pb-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/Cnj new logo.jpg"
                  alt="CNJ Safaris Logo"
                  width={40}
                  height={40}
                  className="rounded-lg object-contain bg-white/10 backdrop-blur-sm p-0.5 border border-white/10"
                />
                <span className="font-serif font-bold text-xl text-white">CNJ Safaris</span>
              </div>
              <p className="text-gray-400 text-sm">
                The world is a book, discover every page.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg text-white">Explore</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/safaris/maasai-mara" className="hover:text-amber-500 transition">
                    Maasai Mara Safaris
                  </Link>
                </li>
                <li>
                  <Link href="/safaris/serengeti" className="hover:text-amber-500 transition">
                    Serengeti Tours
                  </Link>
                </li>
                <li>
                  <Link href="/safaris/gorilla-trekking" className="hover:text-amber-500 transition">
                    Gorilla Trekking
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-amber-500 transition font-semibold text-amber-500">
                    Shop Gear
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-500 transition">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg text-white">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-amber-500 transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-500 transition">
                    Visa & Travel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-500 transition">
                    Packing Guide
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="hover:text-amber-500 transition">
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-500 transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg text-white">Get in Touch</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-1 shrink-0 text-amber-500" />
                  <span>0768 396 296 / 0721 246 414</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="mt-1 shrink-0 text-amber-500" />
                  <span>info@cnjsafaris.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 shrink-0 text-amber-500" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm pt-4">
            <p>
              &copy; 2026 CNJ Safaris. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-leaf-green transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-leaf-green transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="h-32 md:h-0"></div>
      </footer>
    </>
  )
}
