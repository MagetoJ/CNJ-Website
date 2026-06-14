'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, BookOpen, Layers, Eye, SlidersHorizontal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryImage {
  src: string
  caption?: string
}

interface LocationHub {
  _id: string
  locationName: string
  category: string
  destinationName?: string
  images: GalleryImage[]
}

interface GalleryViewProps {
  initialHubs: LocationHub[]
}

export default function GalleryView({ initialHubs }: GalleryViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL')
  const [activeAlbum, setActiveAlbum] = useState<LocationHub | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)

  const categories = ['ALL', 'WILDLIFE', 'LANDSCAPES', 'LODGES', 'CULTURAL']

  const filteredHubs = (initialHubs || []).filter(hub => {
    if (activeCategory === 'ALL') return true
    return hub.category?.toUpperCase() === activeCategory
  })

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!activeAlbum) return
    setLightboxIndex((prev) => (prev === 0 ? activeAlbum.images.length - 1 : prev - 1))
  }

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!activeAlbum) return
    setLightboxIndex((prev) => (prev === activeAlbum.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-16">
      
      {/* 1. Filtering Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5 max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 text-zinc-400 text-xs tracking-widest uppercase font-mono">
          <SlidersHorizontal size={14} className="text-amber-500" /> Filter Chapters
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 bg-zinc-900/40 p-1.5 rounded-xl border border-white/5 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-lg shadow-amber-500/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat === 'ALL' ? 'All Pages' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Location Album Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredHubs.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-3xl max-w-md mx-auto">
            <BookOpen className="mx-auto text-zinc-600 mb-4" size={32} />
            <p className="text-zinc-400 text-sm font-light">This folder chapter is currently unwritten.</p>
            <p className="text-zinc-600 text-xs mt-1">Check back soon for seasonal migrations updates.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredHubs.map((hub, hubIdx) => {
              const primaryImage = hub.images?.[0]?.src || '/placeholder.jpg'
              const totalPages = hub.images?.length || 0
              const safeAltText = hub.locationName && hub.locationName.trim() !== "" 
                ? hub.locationName 
                : "CNJ Safaris Expedition Location Hub Portfolio Asset"

              return (
                <motion.div
                  layout
                  key={hub._id || hubIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: hubIdx * 0.05 }}
                  onClick={() => {
                    if (totalPages > 0) {
                      setActiveAlbum(hub)
                      setLightboxIndex(0)
                    }
                  }}
                  className="group relative cursor-pointer flex flex-col space-y-4"
                >
                  <div className="relative aspect-[4/3] w-full rounded-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-zinc-800 rounded-2xl translate-x-2 translate-y-2 opacity-40 scale-[0.98] blur-[1px] transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
                    <div className="absolute inset-0 bg-zinc-900 rounded-2xl translate-x-1 translate-y-1 opacity-80 scale-[0.99] border border-white/5 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                    
                    <div className="absolute inset-0 bg-zinc-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10">
                      <Image
                        src={primaryImage}
                        alt={hub.locationName && hub.locationName.trim() !== "" ? hub.locationName : "CNJ Safaris Expedition Location Hub Portfolio Asset"}
                        fill
                        className="object-cover transition-transform duration-700 brightness-90 group-hover:scale-105 group-hover:brightness-75"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <div className="flex items-center gap-2 bg-zinc-950/80 border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-amber-400 font-mono">
                          <Eye size={14} /> Open Photo Book
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 z-20 bg-zinc-950/80 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 shadow-lg">
                        <Layers size={12} className="text-amber-500" />
                        <span>{totalPages} Pages</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 px-1 flex flex-col justify-between items-start">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500/80 font-bold">
                        {hub.category || "Safari"}
                      </span>
                      {hub.destinationName && (
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
                          📍 {hub.destinationName}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mt-1 group-hover:text-amber-400 transition-colors duration-300">
                      {hub.locationName || "Unnamed Sanctuary"}
                    </h3>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>

      {/* 3. Immersive Lightbox Reader */}
      <AnimatePresence>
        {activeAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveAlbum(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          >
            <div className="w-full flex items-center justify-between z-10 max-w-7xl mx-auto">
              <div>
                <span className="text-xs text-amber-500 font-mono uppercase tracking-widest block">CNJ Media Reader</span>
                <h4 className="text-lg font-serif font-bold text-white">{activeAlbum.locationName || "Safari Album"}</h4>
              </div>
              
              <button
                onClick={() => setActiveAlbum(null)}
                title="Close photo viewer"
                aria-label="Close photo book viewer modal overlay"
                className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-full text-zinc-400 hover:text-white transition-all shadow-md focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] md:max-h-[65vh] flex items-center justify-center my-auto">
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 z-30 p-3 bg-zinc-950/80 hover:bg-zinc-900 border border-white/10 rounded-full text-zinc-300 hover:text-amber-400 transition-all shadow-xl backdrop-blur-sm"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-zinc-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full"
                  >
                    {activeAlbum.images?.[lightboxIndex]?.src && (
                      <Image
                        src={activeAlbum.images[lightboxIndex].src}
                        alt={
                          activeAlbum.images[lightboxIndex].caption && activeAlbum.images[lightboxIndex].caption!.trim() !== ""
                            ? activeAlbum.images[lightboxIndex].caption!
                            : `${activeAlbum.locationName || "Safari Gallery"} - Image ${lightboxIndex + 1}`
                        }
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={handleNextPhoto}
                className="absolute right-4 z-30 p-3 bg-zinc-950/80 hover:bg-zinc-900 border border-white/10 rounded-full text-zinc-300 hover:text-amber-400 transition-all shadow-xl backdrop-blur-sm"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="w-full text-center z-10 max-w-2xl mx-auto space-y-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={lightboxIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-zinc-300 font-light min-h-[1.5rem] leading-relaxed"
                >
                  {activeAlbum.images?.[lightboxIndex]?.caption || 'Captured live inside the ecosystem sanctuary limits.'}
                </motion.p>
              </AnimatePresence>

              <div className="flex justify-center items-center gap-1.5 overflow-x-auto max-w-full py-1">
                {activeAlbum.images?.map((_, idx) => (
                  /* ACCESSIBILITY FIX: Added explicit title and structural aria-label keys to tracking array loop button elements */
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation()
                      setLightboxIndex(idx)
                    }}
                    title={`Jump directly to portfolio photo slide index item page ${idx + 1}`}
                    aria-label={`Navigate directly to photo page slider marker step ${idx + 1}`}
                    className="h-1.5 transition-all rounded-full focus:outline-none"
                    style={{
                      width: idx === lightboxIndex ? '1.5rem' : '0.375rem',
                      backgroundColor: idx === lightboxIndex ? '#f59e0b' : '#3f3f46'
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}