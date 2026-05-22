'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Map, 
  Briefcase, 
  ShoppingBag, 
  Home,
  LogOut
} from 'lucide-react'
import { cn } from '../lib/utils'

const navItems = [
  { name: 'Overview', href: '/admin', icon: LayoutDashboard },
  { name: 'Itineraries', href: '/admin/itineraries', icon: Map },
  { name: 'Careers', href: '/admin/careers', icon: Briefcase },
  { name: 'Marketplace', href: '/admin/market', icon: ShoppingBag },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-jungle-dark text-white min-h-screen flex flex-col shadow-xl">
      <div className="p-6 border-b border-white/10">
        <h2 className="font-serif font-bold text-2xl">CNJ Admin</h2>
        <p className="text-xs text-white/50 uppercase tracking-widest mt-1">Management Portal</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-leaf-green text-white shadow-lg" 
                  : "hover:bg-white/10 text-white/70 hover:text-white"
              )}
            >
              <Icon size={20} className={isActive ? "text-white" : "text-leaf-green group-hover:text-white"} />
              <span className="font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-2">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white transition-colors">
          <Home size={20} />
          <span>View Website</span>
        </Link>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}