'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import AdminSidebar from '@/components/admin/AdminSidebar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Dark mode initialization
    const theme = localStorage.getItem('theme')
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    }

    // Simple authentication check using localStorage
    const auth = localStorage.getItem('cnj_admin_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
      if (pathname !== '/admin/login') {
        router.push('/admin/login')
      }
    }
  }, [router, pathname])

  // Don't render protected content while verifying
  if (isAuthenticated === null && pathname !== '/admin/login') {
    return <div className="min-h-screen flex items-center justify-center bg-background-alt-light dark:bg-slate-950 text-primary-dark dark:text-gray-200 font-serif text-xl transition-colors">Verifying Access...</div>
  }

  // Hide sidebar on the login page
  if (pathname === '/admin/login') {
    return <div className="dark:bg-slate-950 min-h-screen transition-colors">{children}</div>
  }

  return (
    <div className="flex min-h-screen bg-background-alt-light/30 dark:bg-slate-950 transition-colors">
      <AdminSidebar />
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}