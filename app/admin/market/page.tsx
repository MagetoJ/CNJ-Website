'use client'

import { useState, useEffect } from 'react'
import { AdminTable } from '@/components/admin/AdminTable'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ContentForm } from '@/components/admin/ContentForm'

export default function AdminMarket() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const apiUrl = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001').replace(/\/$/, '')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/products`)
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  const columns = ['Name', 'Category', 'Price', 'Stock_Status']

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-jungle-dark font-serif">Marketplace Manager</h1>
          <p className="text-gray-500 mt-1">Update shop inventory and branded gear.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-leaf-green hover:bg-green-600 gap-2">
              <Plus size={18} /> Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Gear</DialogTitle>
            </DialogHeader>
            <ContentForm type="market" onSubmit={(data) => console.log('Submit Product', data)} />
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="h-64 flex items-center justify-center">Loading inventory...</div>
      ) : (
        <AdminTable 
          columns={columns} 
          data={products} 
          onEdit={(item) => console.log('Edit Product', item)} 
          onDelete={(id) => console.log('Delete Product', id)} 
        />
      )}
    </div>
  )
}