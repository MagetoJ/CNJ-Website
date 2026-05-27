'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppFooter() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000'
  
  return (
    <footer className="bg-earth-brown border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-warm-beige/60 text-sm tracking-widest uppercase mb-4">Experience the Wild</p>
        <h2 className="font-serif text-3xl font-bold text-white mb-8 italic">Ready to begin your private odyssey?</h2>
        
        {/* Sticky Floating WhatsApp (Simple implementation) */}
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center gap-2 group"
        >
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
            Chat with an Expert
          </span>
        </a>
        <p className="text-gray-500 text-xs uppercase tracking-widest">© {new Date().getFullYear()} CNJ Safaris. All Rights Reserved.</p>
      </div>
    </footer>
  )
}