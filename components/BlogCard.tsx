'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface BlogCardProps {
  post: {
    title: string
    excerpt: string
    mainImage: any
    slug: string
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }}
      className="group bg-[#0d0e12] border border-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-amber-600/30"
    >
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative h-72 sm:h-96 w-full">
        <motion.div 
          className="w-full h-full"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {post.mainImage && (
            <Image 
              src={urlFor(post.mainImage).url()} 
              alt={post.title} 
              fill 
              className="object-cover brightness-[0.85] group-hover:brightness-100 transition-all duration-700"
            />
          )}
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-90" />
      </Link>

      <div className="p-8 sm:p-10 relative -mt-10 bg-[#0d0e12] rounded-t-2xl mx-4 z-10 border-t border-gray-900">
        <span className="text-amber-500 font-sans tracking-[0.2em] text-xs uppercase block mb-3 font-medium">
          Safari Journal
        </span>
        
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 leading-tight tracking-wide group-hover:text-amber-400 transition-colors duration-300">
          {post.title}
        </h2>
        
        <p className="text-gray-400 line-clamp-3 mb-6 leading-relaxed font-sans text-sm sm:text-base">
          {post.excerpt || "Discover an unforgettable world where vast golden plains melt into blazing horizons..."}
        </p>

        <Link 
          href={`/blog/${post.slug}`} 
          className="relative inline-flex items-center gap-3 text-white font-sans text-xs uppercase tracking-[0.25em] font-semibold group/btn"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-amber-400">
            Explore Journey
          </span>
          <motion.span 
            className="inline-block transition-transform duration-300 group-hover/btn:translate-x-2 text-amber-500"
          >
            →
          </motion.span>
          <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover/btn:w-full" />
        </Link>
      </div>
    </motion.div>
  )
}