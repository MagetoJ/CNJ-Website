'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { FooterLink } from '@/lib/api-client'

interface FooterProps {
  initialLinks: FooterLink[]
}

export default function Footer({ initialLinks }: FooterProps) {
  // Use links passed from the server with a fallback to avoid empty screens
  const linksToRender = initialLinks && initialLinks.length > 0 ? initialLinks : [];

  const groupedLinks = linksToRender.reduce((acc, link) => {
    const category = link.category.charAt(0).toUpperCase() + link.category.slice(1);
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
              <Image src="/Cnj new logo.jpg" alt="CNJ Safaris Logo" width={50} height={50} className="rounded-lg object-contain" />
              <span className="font-serif font-bold text-white text-2xl">CNJ Safaris</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Curating bespoke luxury safari experiences across East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/cnjsafaris" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C19A6B] transition-colors"><Facebook size={20} /></a>
              <a href="https://instagram.com/cnjsafaris" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C19A6B] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Dynamic Link Categories */}
          {Object.entries(groupedLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link._id}>
                    <Link href={link.slug ? `/${link.slug}` : link.url || '#'} className="text-gray-400 hover:text-[#C19A6B] transition-colors text-sm">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Shop Column */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-4">CNJ Safari Shop</h3>
            <ul className="space-y-2.5">
              <li><Link href="/shop/souvenirs" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors">Authentic Souvenirs</Link></li>
              <li><Link href="/safaris/luxury-safaris" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors">Premium Safari Packages</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@cnjsafaris.com" className="flex items-center gap-2 text-gray-400 hover:text-[#C19A6B] transition-colors text-sm"><Mail size={16} /> info@cnjsafaris.com</a></li>
              <li><a href="tel:+254768396296" className="flex items-center gap-2 text-gray-400 hover:text-[#C19A6B] transition-colors text-sm"><Phone size={16} /> +254 768 396 296</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}