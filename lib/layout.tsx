import Link from 'next/link'
import { LayoutDashboard, Users, FileText, Briefcase, ShoppingBag, Image as ImageIcon, Settings } from 'lucide-react'

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { href: '/cms', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/cms/leads', icon: Users, label: 'Quiz Leads' },
    { href: '/cms/blog', icon: FileText, label: 'Blog Posts' },
    { href: '/cms/careers', icon: Briefcase, label: 'Careers' },
    { href: '/cms/shop', icon: ShoppingBag, label: 'Shop' },
    { href: '/cms/gallery', icon: ImageIcon, label: 'Gallery' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* CMS Sidebar */}
      <aside className="w-64 bg-jungle-dark text-white fixed h-full hidden md:block">
        <div className="p-6">
          <Link href="/cms" className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 bg-leaf-green rounded-lg flex items-center justify-center font-bold text-white">C</div>
            <span className="font-serif font-bold text-xl tracking-tight">Admin Panel</span>
          </Link>
          
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors group"
              >
                <item.icon size={20} className="text-gray-400 group-hover:text-leaf-green" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-full p-6 border-t border-white/10">
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 min-h-screen">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}