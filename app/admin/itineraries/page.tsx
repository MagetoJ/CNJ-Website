'use client'

import { useState } from 'react'
import { AdminTable } from '@/components/admin/AdminTable'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ContentForm } from '@/components/admin/ContentForm'

export default function AdminItineraries() {
  const [data, setData] = useState([
    { id: 1, title: 'Maasai Mara Classic', destination: 'Kenya', price: '$1,200', status: 'Published' },
    { id: 2, title: 'Serengeti Migration', destination: 'Tanzania', price: '$2,400', status: 'Draft' },
    { id: 3, title: 'Gorilla Trekking', destination: 'Uganda', price: '$3,200', status: 'Published' },
  ])

  const columns = ['Title', 'Destination', 'Price', 'Status']

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-jungle-dark font-serif">Manage Itineraries</h1>
          <p className="text-gray-500 mt-1">Create and edit safari packages for the website.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-leaf-green hover:bg-green-600 gap-2">
              <Plus size={18} /> New Itinerary
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Itinerary</DialogTitle>
            </DialogHeader>
            <ContentForm type="itinerary" onSubmit={(data) => console.log(data)} />
          </DialogContent>
        </Dialog>
      </div>

      <AdminTable 
        columns={columns} 
        data={data} 
        onEdit={(item) => console.log('Edit', item)} 
        onDelete={(id) => console.log('Delete', id)} 
      />
    </div>
  )
}
