'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, Camera, Shirt, Map, Gift, ShoppingCart, Loader2 } from 'lucide-react'
import WhatsAppFooter from '@/components/WhatsAppFooter'
import { getProducts } from '@/lib/api-client'

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fallbackProducts = [
    { id: 1, name: 'Premium Safari Jacket', price: 129, category: 'Apparel', image_url: '/placeholder.jpg' },
    { id: 2, name: 'Wide-Angle Safari Lens', price: 899, category: 'Photography', image_url: '/placeholder.jpg' },
    { id: 3, name: 'Leather Travel Duffel', price: 249, category: 'Travel Gear', image_url: '/placeholder.jpg' },
    { id: 4, name: 'Outdoor Sun Hat', price: 45, category: 'Apparel', image_url: '/placeholder.jpg' }
  ]

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts()
        if (data && data.length > 0) {
          setProducts(data)
        } else {
          setProducts(fallbackProducts)
        }
      } catch (error) {
        console.error("Failed to fetch products:", error)
        setProducts(fallbackProducts)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const categories = [
    { title: 'Apparel', icon: Shirt, items: 'Clothing & Footwear', image: '/Why you should visit Kenya — Style for Wanderlust.jpeg' },
    { title: 'Photography', icon: Camera, items: 'Lenses & Accessories', image: '/safari-park-giraffe.jpeg' },
    { title: 'Travel Gear', icon: ShoppingBag, items: 'Bags & Accessories', image: '/A Safari and Beach Getaway in One Perfect Itinerary.jpeg' }
  ]

  return (
    <main className="min-h-screen bg-transparent">
      {/* Immersive Dark Hero Overlay */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Experience an unforgettable Big 5 safari at….jpeg"
          alt="Safari Shop"
          fill
          priority
          className="object-cover brightness-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight uppercase">
            Gear Up For The <span className="text-amber-500">Wild</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-light tracking-wide">
            Premium travel equipment and clothing explicitly curated for your East African journey.
          </p>
        </div>
      </section>

      {/* Categories Layer */}
      <section className="py-20 max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-black text-white uppercase tracking-tight">Browse By Category</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-white/10">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white z-10">
                <cat.icon className="mb-2 text-amber-500" size={32} />
                <h3 className="text-2xl font-bold tracking-tight">{cat.title}</h3>
                <p className="text-gray-300 text-sm">{cat.items}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Gear Section (Glassmorphism layout matching all subpages) */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="font-serif text-4xl font-bold text-white tracking-tight uppercase">Featured Equipment</h2>
              <p className="text-gray-400 mt-1">Hand-picked essentials built to endure rugged safaris.</p>
            </div>
            <button className="text-amber-500 font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider text-sm bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20">
              View All Catalog <ShoppingCart size={16} />
            </button>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 glass-panel rounded-2xl">
              <Loader2 className="animate-spin text-amber-500 mb-4" size={44} />
              <p className="text-gray-300 font-medium tracking-wide">Assembling safari warehouse gear...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="glass-panel glass-card-hover rounded-xl overflow-hidden shadow-xl group">
                  <div className="relative h-64 overflow-hidden bg-black/40">
                    <Image
                      src={product.image_url || '/placeholder.jpg'}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/70 backdrop-blur-md text-amber-500 border border-amber-500/30 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-black/20">
                    <h3 className="text-lg font-bold text-white tracking-tight mb-3 line-clamp-1">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-serif font-black text-amber-500">${product.price}</span>
                      <button 
                        className="p-2.5 rounded-xl bg-white/5 text-amber-500 hover:bg-amber-500 hover:text-black transition-all border border-white/5"
                        title={`Add ${product.name} to inquiry bag`}
                      >
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Expert Advice (Glass Panel Block) */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center relative z-10">
        <div className="glass-panel rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">Need Expert Packing Advice?</h2>
            <p className="text-gray-300 mb-8 font-light leading-relaxed">
              Not sure what lenses or weather gear to select? Our team naturalists can map out precisely what you need for your chosen terrain.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-black uppercase tracking-wider text-sm px-8 py-4 rounded-xl transition-all shadow-lg">
              Consult an Expert
            </button>
          </div>
          <Map className="absolute -top-10 -left-10 text-white/2 w-64 h-64 rotate-12 pointer-events-none" />
          <Gift className="absolute -bottom-10 -right-10 text-white/2 w-64 h-64 -rotate-12 pointer-events-none" />
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}
