// app/shop/apparel/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, MessageCircle, ShieldCheck, Shirt, Sparkles } from 'lucide-react'
import { ProductSchema } from '@/components/seo/JsonLdSchemas'

const APPAREL_PRODUCTS = [
  {
    id: 'app-001',
    name: 'Authentic Maasai Shúkà Blanket',
    description: 'Traditional vibrant geometric protective wraps worn by the Maasai community around the Great Rift Valley. High-density weave, perfect as warm blankets or outdoor travel shawls.',
    price: 45,
    category: 'Traditional Wraps',
    image: '/placeholder.jpg',
  },
  {
    id: 'app-002',
    name: 'Hand-Woven Sisal Kiondo Basket Bag',
    description: 'Durable eco-friendly utility tote bag tightly hand-woven with organic local sisal fibers and finished with premium vegetable-tanned organic leather shoulder straps.',
    price: 55,
    category: 'Bags & Totes',
    image: '/placeholder.jpg',
  },
  {
    id: 'app-003',
    name: 'CNJ Safaris Explorer Canvas Hat',
    description: 'Premium wide-brimmed cotton canvas safari field hat. Designed with breathable vents and adjustable chin strap for maximum sun protection out on game drives.',
    price: 35,
    category: 'Headwear',
    image: '/placeholder.jpg',
  },
  {
    id: 'app-004',
    name: 'Kikoy Hand-Woven Cotton Wrap',
    description: 'Lightweight, ultra-soft combed cotton rectangular fabric garment woven along the East African coast. Versatile use as a beach sarong, scarf, or light throw.',
    price: 32,
    category: 'Traditional Wraps',
    image: '/placeholder.jpg',
  }
]

const CATEGORIES = ['All Apparel', 'Traditional Wraps', 'Bags & Totes', 'Headwear']

export default function ApparelShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Apparel')

  const filteredProducts = selectedCategory === 'All Apparel'
    ? APPAREL_PRODUCTS
    : APPAREL_PRODUCTS.filter(p => p.category === selectedCategory)

  const generateWhatsAppLink = (itemName: string, itemPrice: number) => {
    const baseMessage = `Jambo CNJ Safaris! I am looking to purchase the authentic "${itemName}" ($${itemPrice}) from your Safari Apparel collection. Could you assist me with size selections and international shipping options?`
    return `https://wa.me/254712345678?text=${encodeURIComponent(baseMessage)}`
  }

  return (
    <main className="bg-[#1A1A1A] text-gray-300 min-h-screen pt-28 pb-16">
      {/* Structural Schema Mapping Loops for Search Engine Crawlers */}
      {APPAREL_PRODUCTS.map((product) => (
        <ProductSchema
          key={product.id}
          name={product.name}
          description={product.description}
          image={`https://cnjsafaris.com${product.image}`}
          price={product.price}
          category={product.category}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C19A6B]/10 border border-[#C19A6B]/20 text-[#C19A6B] text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Ethically Made Sustainable Textiles</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4 font-serif">
            The Safari <span className="text-[#C19A6B]">Apparel & Textiles</span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Gear up for the wilderness or bring the colorful textures of East African fashion into your everyday wardrobe. Every piece is hand-woven or tailored by independent artisan collectives.
          </p>
        </div>

        {/* Brand Value Props Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 border-y border-white/10 py-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-zinc-900 rounded-lg border border-white/5 text-[#C19A6B]"><ShieldCheck className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-white text-sm">Premium Local Craftsmanship</h3>
              <p className="text-xs text-gray-500">Pure combed cotton and organic dyes.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-zinc-900 rounded-lg border border-white/5 text-[#C19A6B]"><ShoppingBag className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-white text-sm">Insured Global Transit</h3>
              <p className="text-xs text-gray-500">Secure delivery trackable to your doorstep.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-zinc-900 rounded-lg border border-white/5 text-[#C19A6B]"><Shirt className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-white text-sm">Supporting Communities</h3>
              <p className="text-xs text-gray-500">Sales directly empower localized tailoring groups.</p>
            </div>
          </div>
        </div>

        {/* Dynamic Category Filtering Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C19A6B] text-black border-[#C19A6B] shadow-lg shadow-[#C19A6B]/20'
                  : 'bg-zinc-900 text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Layout Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-[#222222] rounded-2xl border border-white/5 p-5 flex flex-col group hover:border-white/10 transition-all duration-300"
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-black mb-4">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-w-7xl) 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <span className="absolute top-3 left-3 bg-[#1A1A1A]/90 border border-white/5 text-[#C19A6B] text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md">
                  {product.category}
                </span>
              </div>

              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="font-bold text-base text-white group-hover:text-[#C19A6B] transition-colors">
                  {product.name}
                </h3>
                <span className="text-[#C19A6B] font-extrabold text-base">
                  ${product.price}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {product.description}
              </p>

              <a
                href={generateWhatsAppLink(product.name, product.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1A1A1A] border border-white/5 text-gray-300 hover:bg-[#C19A6B] hover:text-black hover:border-[#C19A6B] font-medium py-3 rounded-xl transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span className="text-sm tracking-wide">Inquire via WhatsApp</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}