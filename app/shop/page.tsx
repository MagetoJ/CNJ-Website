'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, Camera, Shirt, Map, Gift, ShoppingCart, Loader2, Star, ArrowRight, MessageCircle } from 'lucide-react'
import Footer from '@/components/Footer'
import { getProducts, submitInquiry } from '@/lib/api-client'
import { getWhatsAppInquiryLink } from '@/lib/whatsapp'

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  
  // State for quick-order selections (normally handled in a Product Detail view, but here for the grid)
  const [selections, setSelections] = useState<Record<string, { size: string, color: string, qty: number }>>({})
  
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'

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
          // Initialize selections
          const initial: any = {}
          data.forEach((p: any) => {
            initial[p.id] = { size: 'Medium', color: 'Safari Khaki', qty: 1 }
          })
          setSelections(initial)
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

  const handleOrder = async (product: any) => {
    const sel = selections[product.id] || { size: 'M', color: 'Default', qty: 1 };
    
    const orderMessage = `Hello CNJ Safaris,\n\nI want to purchase the following marketplace item from your website:\n• *Product Name:* ${product.name}\n• *Price:* $${product.price}\n• *Size:* ${sel.size}\n• *Color:* ${sel.color}\n• *Quantity:* ${sel.qty}\n\nPlease assist me with processing my checkout order options!`;

    await submitInquiry({
      name: "Customer Order Inquiry",
      email: "guest@cnjsafaris.com",
      interestType: 'product',
      details: `Ordering ${product.name}`,
      whatsappMessage: orderMessage,
    });

    window.open(getWhatsAppInquiryLink(orderMessage), '_blank');
  };

  const getAverageRating = (reviews?: any[]) => {
    if (!reviews || reviews.length === 0) return 5;
    const sum = reviews.reduce((acc, r) => acc + (r.rating || 0), 0);
    return Math.round(sum / reviews.length);
  }

  const updateSelection = (id: string, field: string, value: any) => {
    setSelections(prev => ({
      ...prev,
      [id]: { ...prev[id], [field]: value }
    }));
  }

  const collections = [
    { title: 'Maasai Mara Collection', desc: 'Inspired by Kenya\'s heart', image: '/Why you should visit Kenya — Style for Wanderlust.jpeg' },
    { title: 'Serengeti Collection', desc: 'The spirit of endless plains', image: '/📍Serengeti National Park on days 2 & 3 of the….jpeg' },
    { title: 'Big Five Collection', desc: 'Icons of the wilderness', image: '/Experience an unforgettable Big 5 safari at….jpeg' },
    { title: 'Limited Edition', desc: 'Exclusive heritage pieces', image: '/South African Safari _ GORAH ELEPHANT CAMP, Addo….jpeg' }
  ]

  return (
    <main className="min-h-screen bg-[#1A1A1A]">
      {/* Immersive Dark Hero Overlay */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Enjoying an evening cruise searching for hippos in….jpeg"
          alt="Safari Shop"
          fill
          priority
          className="object-cover brightness-[0.35]"
          sizes="100vw"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-[#C19A6B] font-semibold uppercase tracking-[0.3em] text-sm mb-4 block">CNJ Safari Collection</span>
          <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Take a Piece of <span className="text-[#C19A6B]">Africa</span> Home
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-light tracking-wide">
            Curated safari merchandise inspired by the world&apos;s most iconic wildlife destinations.
          </p>
          <button className="mt-10 bg-[#C19A6B] hover:bg-[#D6C6A8] text-[#1A1A1A] font-bold uppercase tracking-widest text-xs px-10 py-5 rounded-full transition-all shadow-2xl">
            Shop Collection
          </button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold text-white tracking-tight">Featured Collections</h2>
          <div className="w-20 h-1 bg-[#C19A6B] mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((col, i) => (
            <div key={i} className="group relative h-[450px] overflow-hidden cursor-pointer rounded-sm">
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                <h3 className="text-2xl font-serif font-bold mb-2">{col.title}</h3>
                <p className="text-[#D6C6A8] text-sm font-light mb-4">{col.desc}</p>
                <span className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C19A6B] group-hover:gap-4 transition-all">
                  Explore <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="font-serif text-4xl font-bold text-white tracking-tight uppercase">Best Sellers</h2>
              <p className="text-gray-400 mt-2 font-light">The most loved pieces by our global community of explorers.</p>
            </div>
            <button className="text-[#C19A6B] font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider text-sm">
              View Full Catalog <ArrowRight size={16} />
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
                      <span className="bg-black/80 backdrop-blur-md text-[#C19A6B] border border-[#C19A6B]/30 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-black/40 border-t border-white/5">
                    <h3 className="text-lg font-serif font-bold text-white tracking-tight mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-[#C19A6B] text-xl font-bold mb-4">${product.price}</p>
                    
                    {/* Quick Selection Controls */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <select 
                        aria-label="Select size"
                        title="Select size"
                        value={selections[product.id]?.size || 'Medium'}
                        onChange={(e) => updateSelection(product.id, 'size', e.target.value)}
                        className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-xs text-gray-300 outline-hidden focus:border-[#C19A6B]"
                      >
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>XL</option>
                      </select>
                      <select 
                        aria-label="Select color"
                        title="Select color"
                        value={selections[product.id]?.color || 'Safari Khaki'}
                        onChange={(e) => updateSelection(product.id, 'color', e.target.value)}
                        className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-xs text-gray-300 outline-hidden focus:border-[#C19A6B]"
                      >
                        <option>Safari Khaki</option>
                        <option>Rich Black</option>
                        <option>Sand Beige</option>
                      </select>
                    </div>

                    <div className="flex justify-between items-center">
                      <button 
                        onClick={() => handleOrder(product)}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#C19A6B] hover:bg-[#D6C6A8] text-[#1A1A1A] font-bold uppercase tracking-widest text-[10px] py-3 rounded-lg transition-all"
                      >
                        Order via WhatsApp
                        <MessageCircle size={14} className="fill-current" />
                      </button>
                      <button 
                        aria-label="Add to cart"
                        title="Add to cart"
                        className="ml-2 p-3 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors border border-white/10"
                      >
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <a
                        href={getWhatsAppInquiryLink(`Hello CNJ Safaris Customer Support,\n\nI want to submit a product review for the *${product.name}*:\n\n• *My Name:* [Your Name]\n• *Rating:* [Choose 1 to 5 Stars]\n• *Feedback:* [Write your review message here]`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-zinc-500 underline hover:text-safari-gold transition"
                      >
                        Submit a Verified Review via WhatsApp
                      </a>
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

      <Footer />
    </main>
  )
}
