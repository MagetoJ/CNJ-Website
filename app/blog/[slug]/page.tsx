'use client'

import { useEffect, useState, use } from 'react'
import { client, urlFor, sanityFetch } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Calendar, Clock, User, Share2, MapPin, Star, Info } from 'lucide-react'

async function getPostData(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    body,
    mainImage,
    publishedAt,
    "author": author->name,
    "category": categories[0]->title,
    "readingTime": round(length(pt::text(body)) / 5 / 180),
    quickFacts {
      location,
      bestTime,
      duration,
      famousFor
    }
  }`;
  return await sanityFetch<any>({ query, params: { slug }, tags: ['post'] })
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [post, setPost] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostData(slug)
      if (!data) return notFound()
      setPost(data)
      setIsLoading(false)
    }
    fetchData()
  }, [slug])

  if (isLoading) return <div className="min-h-screen bg-deep-black" />

  const components = {
    types: {
      image: ({ value }: any) => (
        <figure className="my-12 relative group">
          <div className="overflow-hidden rounded-2xl border border-white/5">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || 'Safari imagery'}
              width={1200}
              height={800}
              className="w-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-4 text-center text-sm text-gray-500 font-sans italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      ),
    },
    block: {
      blockquote: ({ children }: any) => (
        <div className="relative py-8 my-12 px-12 border-l-2 border-safari-gold bg-zinc-900/30 rounded-r-2xl italic font-serif text-2xl text-gray-200">
          <span className="absolute top-4 left-4 text-6xl text-safari-gold/20 font-serif">"</span>
          {children}
        </div>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-16 mb-8 tracking-tight">
          {children}
        </h2>
      ),
    },
  }

  return (
    <main className="min-h-screen bg-deep-black text-gray-200 selection:bg-safari-gold/30">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-safari-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section with Parallax */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover brightness-75 scale-110"
              priority
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-safari-gold font-sans tracking-[0.3em] text-xs uppercase mb-6 font-bold"
            >
              {post.category || 'Destination Guide'}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-sans tracking-widest uppercase"
            >
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-safari-gold" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-safari-gold" />
                {post.readingTime || 8} Min Read
              </span>
              <span className="flex items-center gap-2">
                <User size={14} className="text-safari-gold" />
                By {post.author || 'CNJ Safaris'}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 py-20 relative">
        {/* Main Content Area */}
        <article className="lg:col-span-8">
          <div className="prose prose-invert prose-safari max-w-none 
            prose-headings:font-serif prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg
            prose-strong:text-white prose-strong:font-bold prose-a:text-safari-gold prose-a:no-underline">
            <PortableText value={post.body} components={components} />
          </div>

          {/* Enhanced Inquiry CTA */}
          <section className="mt-24 p-12 bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-safari-gold/5 blur-[100px] rounded-full" />
            <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-serif text-3xl text-white font-bold mb-4">Ready for your own journey?</h3>
                <p className="text-gray-400 max-w-md">Our expert consultants are ready to tailor your perfect 2026 East African safari itinerary.</p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <Star size={14} className="text-safari-gold" /> Award-winning Private Guides
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <Star size={14} className="text-safari-gold" /> Hand-picked Luxury Lodges
                  </li>
                </ul>
              </div>
              <button className="whitespace-nowrap bg-safari-gold text-deep-black font-bold px-10 py-5 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-xl">
                Plan My Journey
              </button>
            </div>
          </section>
        </article>

        {/* Sticky Quick Facts Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-8">
            <div className="p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 backdrop-blur-sm">
              <h4 className="font-serif text-xl text-white font-bold mb-6 flex items-center gap-3">
                <Info size={20} className="text-safari-gold" />
                Safari Quick Facts
              </h4>
              <div className="space-y-6">
                {[
                  { label: 'Location', value: post.quickFacts?.location || 'Serengeti, Tanzania', icon: MapPin },
                  { label: 'Best Time', value: post.quickFacts?.bestTime || 'June - October', icon: Clock },
                  { label: 'Recommended Stay', value: post.quickFacts?.duration || '3 - 5 Days', icon: Calendar },
                  { label: 'Famous For', value: post.quickFacts?.famousFor || 'The Great Migration', icon: Star },
                ].map((fact, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-safari-gold">
                      <fact.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{fact.label}</p>
                      <p className="text-gray-200 font-medium">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-safari-gold rounded-2xl text-deep-black">
              <h4 className="font-bold text-lg mb-2">Expert Consultation</h4>
              <p className="text-sm opacity-80 mb-6 font-medium">Have questions about planning your safari? Chat with our experts on WhatsApp.</p>
              <button className="w-full bg-deep-black text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition-colors">
                Chat Now
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom Share Section */}
      <div className="border-t border-zinc-900 py-12 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-safari-gold">
              <Share2 size={20} />
            </div>
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold">Spread the wonder</span>
          </div>
        </div>
      </div>
    </main>
  )
}