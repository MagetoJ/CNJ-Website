'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react'
import { getFooterLinks, FooterLink } from '@/lib/api-client'

export default function Footer() {
  const [footerLinks, setFooterLinks] = useState<FooterLink[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLinks() {
      const links = await getFooterLinks()
      setFooterLinks(links)
      setLoading(false)
    }
    fetchLinks()
  }, [])

  const groupedLinks = footerLinks.reduce((acc, link) => {
    const category = link.category.charAt(0).toUpperCase() + link.category.slice(1); // Capitalize category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(link)
    return acc
  }, {} as Record<string, FooterLink[]>)

  return (
    <footer className="bg-[#1A1A1A] text-gray-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/Cnj new logo.jpg"
                alt="CNJ Safaris Logo"
                width={50}
                height={50}
                className="rounded-lg object-contain"
              />
              <span className="font-serif font-bold text-white text-2xl">
                CNJ Safaris
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Curating bespoke luxury safari experiences across East Africa.
              From the vast plains of the Maasai Mara to the misty forests of Uganda,
              we craft unforgettable journeys.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/cnjsafaris" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C19A6B] transition-colors" aria-label="Facebook profile">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/cnjsafaris" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C19A6B] transition-colors" aria-label="Instagram profile">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/cnjsafaris" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C19A6B] transition-colors" aria-label="Twitter profile">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/cnjsafaris" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C19A6B] transition-colors" aria-label="LinkedIn profile">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Dynamic Link Categories */}
          {loading ? (
            <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx}>
                  <div className="h-4 w-24 bg-gray-700 rounded mb-4 animate-pulse"></div>
                  <ul className="space-y-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <li key={i} className="h-3 w-20 bg-gray-800 rounded animate-pulse"></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <>
              {Object.entries(groupedLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                  <ul className="space-y-2">
                    {links.map(link => (
                      <li key={link._id}>
                        <Link
                          href={link.slug ? `/${link.slug}` : link.url || '#'}
                          className="text-gray-400 hover:text-[#C19A6B] transition-colors text-sm"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}

          {/* Shop Column */}
         <div>
  <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-4">
    CNJ Safari Shop
  </h3>
  <ul className="space-y-2.5">
    <li>
      <Link 
        href="/shop/souvenirs" 
        className="text-sm text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-2"
      >
        Authentic Souvenirs
      </Link>
    </li>
    <li>
      <Link 
        href="/safaris/luxury-safaris" 
        className="text-sm text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-2"
      >
        Premium Safari Packages
      </Link>
    </li>
    <li>
      <Link 
        href="/faq" 
        className="text-sm text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-2 font-medium"
      >
        Help & Safari FAQs
      </Link>
    </li>
    <li>
      <Link 
        href="/destinations" 
        className="text-sm text-zinc-400 hover:text-amber-500 transition-colors flex items-center gap-2"
      >
        Travel Gear & Guide Maps
      </Link>
    </li>
  </ul>
</div>
          {/* Contact Info (Static for now, could be dynamic) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@cnjsafaris.com" className="flex items-center gap-2 text-gray-400 hover:text-[#C19A6B] transition-colors text-sm">
                  <Mail size={16} /> info@cnjsafaris.com
                </a>
              </li>
              <li>
                <a href="tel:+254712345678" className="flex items-center gap-2 text-gray-400 hover:text-[#C19A6B] transition-colors text-sm">
                  <Phone size={16} /> +254 768 396 296
                </a>
              </li>
              {/* Add physical address if applicable */}
              <li className="text-gray-400 text-sm">
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} CNJ Safaris. All Rights Reserved.</p>
          <p className="mt-1">Crafted with passion for the wild heart of Africa.</p>
        </div>
      </div>
    </footer>
  )
}