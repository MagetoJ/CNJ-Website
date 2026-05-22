'use client'

import { useState, useEffect } from 'react'
import { AdminTable } from '@/components/admin/AdminTable'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ContentForm } from '@/components/admin/ContentForm'

export default function AdminCareers() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const apiUrl = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001').replace(/\/$/, '')

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/jobs`)
      const data = await res.json()
      setJobs(data)
    } catch (error) {
      console.error("Error fetching jobs:", error)
    } finally {
      setLoading(false)
    }
  }

  const columns = ['Title', 'Department', 'Location', 'Type', 'Status']

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-jungle-dark font-serif">Careers Portal</h1>
          <p className="text-gray-500 mt-1">Manage open safari positions and recruitment.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-leaf-green hover:bg-green-600 gap-2">
              <Plus size={18} /> Post Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Post New Position</DialogTitle>
            </DialogHeader>
            <ContentForm type="careers" onSubmit={(data) => console.log('Submit Job', data)} />
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="h-64 flex items-center justify-center">Loading jobs...</div>
      ) : (
        <AdminTable 
          columns={columns} 
          data={jobs} 
          onEdit={(item) => console.log('Edit Job', item)} 
          onDelete={(id) => console.log('Delete Job', id)} 
        />
      )}
    </div>
  )
}