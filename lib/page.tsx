'use client'

import { useEffect, useState } from 'react'
import { getQuizLeads } from '@/lib/api-client'
import { Users, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CMSPage() {
  const [leadCount, setLeadCount] = useState(0)

  useEffect(() => {
    getQuizLeads().then(data => setLeadCount(data.length)).catch(() => {})
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-serif font-bold text-jungle-dark">Management Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back. Here is what is happening with CNJ Safaris today.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Quiz Leads</p>
            <p className="text-2xl font-bold text-gray-900">{leadCount}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-12 h-12 bg-green-50 text-leaf-green rounded-xl flex items-center justify-center">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Active Itineraries</p>
            <p className="text-2xl font-bold text-gray-900">12</p>
          </div>
        </div>
      </div>

      <div className="bg-jungle-dark rounded-3xl p-10 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-md">
          <h2 className="text-2xl font-serif font-bold mb-4">Manage Adventure Leads</h2>
          <p className="text-gray-300 mb-6">Review the latest custom safari requests and generated itineraries from the website quiz.</p>
          <Link href="/cms/leads" className="inline-flex items-center gap-2 bg-leaf-green px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition">
            Go to Leads <ArrowRight size={18} />
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-64 h-full bg-white/5 -skew-x-12 translate-x-10" />
      </div>
    </div>
  )
}