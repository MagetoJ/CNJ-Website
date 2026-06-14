'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, MessageCircle, ShieldCheck, Truck, Sparkles } from 'lucide-react'
import { ProductSchema } from '@/components/seo/JsonLdSchemas'
import Footer from '@/components/Footer'

// Seed collection of premium authentic East African items
const SOUVENIR_PRODUCTS = [
  {
    id: 'sov-001',
    name: 'Hand-Carved Ebony Wood Elephant',
    description: 'Masterfully detailed wildlife sculpture sculpted from sustainable native Tanzanian Ebony hardwood by local Akamba artisans.',
    price: 85,
    category: 'Carvings & Sculptures',
    image: '/Fabriqué à la main aux États-Unis_ Les options de….jpeg', // Leveraging your asset portfolio
  },
  {
    id: 'sov-002',
    name: 'Authentic Maasai Shúkà Blanket',
    description: 'Traditional vibrant geometric protective wraps worn by the Maasai community around the Great Rift Valley. Perfect as warm home throws.',
    price: 45,
    category: 'Apparel & Textiles',
    image: '/placeholder.jpg',
  },
  {
    id: 'sov-003',
    name: 'Premium Kenyan AA Wildlife Coffee Blend',
    description: 'Single-origin, freshly medium-roasted premium AA grade coffee beans sourced directly from independent volcanic slopes farms around Mt. Kenya.',
    price: 28,
    category: 'Gourmet Treats',
    image: '/placeholder.jpg',
  },
  {
    id: 'sov-004',
    name: 'Beaded Maasai Statement Choker',
    description: 'Intricately structured ceremonial glass beadwork collar handmade by women collectives in Narok, supporting community economic growth.',
    price: 60,
    category: 'Jewelry & Accessories',
    image: '/placeholder.jpg',
  },
  {
    id: 'sov-005',
    name: 'Hand-Woven Sisal Kiondo Basket',
    description: 'Durable eco-friendly utility tote basket tightly hand-woven with organic local sisal fibers and finished with premium organic leather straps.',
    price: 55,
    category: 'Apparel & Textiles',
    image: '/placeholder.jpg',
  }
]

const CATEGORIES = ['All Treasures', 'Carvings & Sculptures', 'Apparel & Textiles', 'Jewelry & Accessories', 'Gourmet Treats']

export default function SouvenirsShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Treasures')

  const filteredProducts = selectedCategory === 'All Treasures'
    ? SOUVENIR_PRODUCTS
    : SOUVENIR_PRODUCTS.filter(p => p.category === selectedCategory)

  // Handshake routing directly to WhatsApp business agent
  const generateWhatsAppLink = (itemName: string, itemPrice: number) => {
    const baseMessage = `Jambo CNJ Safaris! I am looking to purchase the authentic "${itemName}" ($${itemPrice}) from your Souvenirs Shop collection. Could you assist me with availability and international shipping configurations?`
    return `https://wa.me/254712345678?text=${encodeURIComponent(baseMessage)}`
  }

  return (
    <main className="bg-deep-black text-white min-h-screen pt-24 pb-16">
      {/* Dynamic SEO Product Injector loop */}
      {SOUVENIR_PRODUCTS.map((product) => (
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
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Supporting Native Artisans & Fair Trade</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100 mb-4">
            The East African <span className="text-amber-500">Souvenir Collection</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Bring home a piece of your wild adventure. We partner directly with indigenous craft communities across Kenya and Tanzania to bring you authentic, meticulously selected hand-made memorabilia.
          </p>
        </div>

        {/* Value Props Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 border-y border-zinc-800 py-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-amber-500"><ShieldCheck className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-zinc-200 text-sm">100% Authentic Provenance</h3>
              <p className="text-xs text-zinc-500">Ethically sourced, verified artisan pieces.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-amber-500"><Truck className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-zinc-200 text-sm">Global Doorstep Shipping</h3>
              <p className="text-xs text-zinc-500">Insured international parcel delivery tracking.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-amber-500"><ShoppingBag className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-zinc-200 text-sm">Empowerment Initiatives</h3>
              <p className="text-xs text-zinc-500">Direct splits fund localized bush communities.</p>
            </div>
          </div>
        </div>

        {/* Categories Tab Layout */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Catalog Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-zinc-900/40 rounded-2xl border border-zinc-800 p-5 flex flex-col group hover:border-zinc-700 transition-all duration-300"
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 mb-4">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <span className="absolute top-3 left-3 bg-zinc-900/90 border border-zinc-800 text-amber-500 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md">
                  {product.category}
                </span>
              </div>

              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="font-bold text-lg text-zinc-200 group-hover:text-amber-500 transition-colors">
                  {product.name}
                </h3>
                <span className="text-amber-500 font-extrabold text-lg">
                  ${product.price}
                </span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                {product.description}
              </p>

              <a
                href={generateWhatsAppLink(product.name, product.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-950 border border-zinc-800 text-zinc-200 hover:bg-amber-500 hover:text-black hover:border-amber-500 font-medium py-3 rounded-xl transition-all duration-300 group/btn"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none group-hover/btn:animate-pulse" />
                <span className="text-sm tracking-wide">Inquire via WhatsApp</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
