'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FloatingWhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'
  
  return (
    <>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello CNJ Safaris,\n\nI am browsing your website and would like assistance planning my safari.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center gap-2 group"
        >
          <div className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Need Help Planning?
          </div>
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
            Chat with an Expert
          </span>
        </a>
    </>
  )
}