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
    {
      id: 1,
      name: 'Premium Safari Jacket',
      price: 129,
      category: 'Apparel',
      image_url: '/placeholder.jpg'
    },
    {
      id: 2,
      name: 'Wide-Angle Safari Lens',
      price: 899,
      category: 'Photography',
      image_url: '/placeholder.jpg'
    },
    {
      id: 3,
      name: 'Leather Travel Duffel',
      price: 249,
      category: 'Travel Gear',
      image_url: '/placeholder.jpg'
    },
    {
      id: 4,
      name: 'Outdoor Sun Hat',
      price: 45,
      category: 'Apparel',
      image_url: '/placeholder.jpg'
    }
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
    {
      title: 'Apparel',
      icon: Shirt,
      items: 'Clothing & Footwear',
      image: '/Why you should visit Kenya — Style for Wanderlust.jpeg'
    },
    {
      title: 'Photography',
      icon: Camera,
      items: 'Lenses & Accessories',
      image: '/safari-park-giraffe.jpeg'
    },
    {
      title: 'Travel Gear',
      icon: ShoppingBag,
      items: 'Bags & Accessories',
      image: '/A Safari and Beach Getaway in One Perfect Itinerary.jpeg'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Experience an unforgettable Big 5 safari at….jpeg"
          alt="Safari Shop"
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
            Gear Up for Adventure
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Premium safari essentials curated for your East African journey.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-jungle-dark mb-4">Browse by Category</h2>
          <div className="w-20 h-1 bg-leaf-green mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-jungle-dark/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <cat.icon className="mb-2 text-leaf-green" size={32} />
                <h3 className="text-2xl font-bold">{cat.title}</h3>
                <p className="text-white/80">{cat.items}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-sage-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold text-jungle-dark mb-2">Featured Gear</h2>
              <p className="text-gray-600">Hand-picked essentials for your next safari</p>
            </div>
            <button className="text-leaf-green font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All Products <ShoppingCart size={20} />
            </button>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-leaf-green mb-4" size={48} />
              <p className="text-jungle-dark font-medium">Loading safari gear...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image_url || '/placeholder.jpg'}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-leaf-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-jungle-dark mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-serif font-bold text-leaf-green">${product.price}</span>
                      <button className="p-2 rounded-lg bg-sage-light text-jungle-dark hover:bg-leaf-green hover:text-white transition">
                        <ShoppingBag size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Promotional Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <div className="bg-jungle-dark rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Need Expert Advice?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Not sure what to pack? Our safari experts can help you choose the right gear for your specific itinerary.
            </p>
            <button className="bg-leaf-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition">
              Consult an Expert
            </button>
          </div>
          {/* Decorative icons */}
          <Map className="absolute -top-10 -left-10 text-white/5 w-64 h-64 rotate-12" />
          <Gift className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 -rotate-12" />
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}
