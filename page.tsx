'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function QuizLeadsPage() {
  const [leads, setLeads] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    const fetchLeads = async () => {
      const { data, error } = await supabase
        .from('quiz_leads')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (data) setLeads(data)
    }
    fetchLeads()
  }, [])

  return (
    <div className="p-8 bg-white min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-serif font-bold mb-8">Adventure Quiz Leads</h1>
        
        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 font-semibold">Customer</th>
                <th className="p-4 font-semibold">Destination</th>
                <th className="p-4 font-semibold">Experience</th>
                <th className="p-4 font-semibold">Budget</th>
                <th className="p-4 font-semibold">Dates</th>
                <th className="p-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4">
                    <div className="font-medium">{lead.customer_name}</div>
                    <div className="text-sm text-gray-500">{lead.customer_email}</div>
                  </td>
                  <td className="p-4 capitalize">{lead.destination}</td>
                  <td className="p-4 capitalize">{lead.experience.replace('-', ' ')}</td>
                  <td className="p-4 capitalize">{lead.budget}</td>
                  <td className="p-4 text-sm text-gray-600">
                    {new Date(lead.start_date).toLocaleDateString()} - {new Date(lead.end_date).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 uppercase">
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}