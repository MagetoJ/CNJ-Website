'use client'

import { motion, Variants } from 'framer-motion'
import Footer from './Footer'
import BlogCard from './BlogCard'

interface BlogClientLayoutProps {
  posts: any[]
}

export default function BlogClientLayout({ posts }: BlogClientLayoutProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className="bg-deep-black min-h-screen text-gray-100 selection:bg-amber-500 selection:text-black">
      <header className="relative max-w-6xl mx-auto pt-40 pb-16 px-4 text-center overflow-hidden">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.span 
            variants={itemVariants}
            className="text-amber-500 font-sans tracking-[0.4em] text-xs uppercase block font-semibold"
          >
            The CNJ Safaris Journal
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-serif font-black text-white tracking-tight leading-none"
          >
            Stories From <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              The Wild Heart
            </span>
          </motion.h1>
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />
      </header>

      <main className="max-w-7xl mx-auto pb-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}