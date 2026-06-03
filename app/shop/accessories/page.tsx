// app/shop/accessories/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, MessageCircle, ShieldCheck, Watch, Sparkles } from 'lucide-react'
import { ProductSchema } from '@/components/seo/JsonLdSchemas'

const ACCESSORIES_PRODUCTS = [
  {
    id: 'acc-001',
    name: 'Beaded Maasai Statement Choker',
    description: 'Intricately structured ceremonial glass beadwork collar handcrafted by women collectives in Narok County. Features vibrant traditional colors representing strength and hospitality.',
    price: 60,
    category: 'Artisan Jewelry',
    image: '/placeholder.jpg',
  },
  {
    id: 'acc-002',
    name: 'Hand-Carved Soapstone Soap Dish',
    description: 'Elegant personal utility dish sculpted from natural Kisii soapstone. Smoothly polished with traditional wildlife etchings.',
    price: 24,
    category: 'Safari Accents',
    image: '/placeholder.jpg',
  },
  {
    id: 'acc-003',
    name: 'Braided Organic Leather Safari Belt',
    description: 'Heavy-duty vegetable-tanned genuine leather belt with solid brass hardware buckles. Hand-braided by leatherwork masters in Nairobi.',
    price: 40,
    category: 'Leather Goods',
    image: '/placeholder.jpg',
  },
  {
    id: 'acc-004',
    name: 'Maasai Beaded Leather Cuff Bracelet',
    description: 'Premium layered cowhide leather wristband lined with hand-stitched fine colored micro-beads in striking geometric patterns.',
    price: 22,
    category: 'Artisan Jewelry',
    image: '/placeholder.jpg',
  }
]

const CATEGORIES = ['All Accessories', 'Artisan Jewelry', 'Leather Goods', 'Safari Accents']

export default function AccessoriesShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Accessories')

  const filteredProducts = selectedCategory === 'All Accessories'
    ? ACCESSORIES_PRODUCTS
    : ACCESSORIES_PRODUCTS.filter(p => p.category === selectedCategory)

  const generateWhatsAppLink = (itemName: string, itemPrice: number) => {
    const baseMessage = `Jambo CNJ Safaris! I am looking to purchase the authentic "${itemName}" ($${itemPrice}) from your Safari Accessories collection. Could you assist me with availability and global shipping details?`
    return `https://wa.me/254712345678?text=${encodeURIComponent(baseMessage)}`
  }

  return (
    <main className="bg-[#1A1A1A] text-gray-300 min-h-screen pt-28 pb-16">
      {/* Structural Schema Mapping Loops for Search Engine Crawlers */}
      {ACCESSORIES_PRODUCTS.map((product) => (
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
            <span>Ethically Sourced Local Masterpieces</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4 font-serif">
            The Safari <span className="text-[#C19A6B]">Accessories & Gems</span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Accentuate your style with unique, wearable East African heritage. Discover fine hand-beaded ornaments, premium leather accents, and decorative items that support sustainable community development.
          </p>
        </div>

        {/* Brand Value Props Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 border-y border-white/10 py-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-zinc-900 rounded-lg border border-white/5 text-[#C19A6B]"><ShieldCheck className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-white text-sm">100% Verified Provenance</h3>
              <p className="text-xs text-gray-500">Genuine materials crafted by tribal co-ops.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-zinc-900 rounded-lg border border-white/5 text-[#C19A6B]"><ShoppingBag className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-white text-sm">Insured Worldwide Air Freight</h3>
              <p className="text-xs text-gray-500">Secure tracking numbers delivered fast.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-zinc-900 rounded-lg border border-white/5 text-[#C19A6B]"><Watch className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-white text-sm">Timeless Africa Accents</h3>
              <p className="text-xs text-gray-500">Each unique item tells a heritage story.</p>
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