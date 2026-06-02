'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Compass, Send } from 'lucide-react'
import { toast } from 'sonner'

export default function PlanYourRoutePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destinations: '',
    days: '',
    notes: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please complete the required contact items.")
      return
    }

    setLoading(true)

    const structuredSummary = `*CNJ SAFARIS - CUSTOM ROUTE INQUIRY*\n\n` +
      `👤 *Client Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📞 *Phone/WA:* ${formData.phone}\n\n` +
      `📍 *Target Parks/Destinations:* ${formData.destinations || 'Flexible'}\n` +
      `⏱️ *Planned Duration:* ${formData.days || 'Flexible'} Days\n` +
      `📝 *Special Requests/Flights:* ${formData.notes || 'None'}`

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: 'Custom Route Blueprint Planning Request',
          message: structuredSummary
        })
      })

      if (!res.ok) throw new Error("API dispatch dropped.")

      toast.success("Blueprint securely logged to CNJ Desk!")

      const companyWhatsAppNumber = "254700000000" // Replace with your corporate number
      const encodedText = encodeURIComponent(structuredSummary)
      window.open(`https://wa.me/${companyWhatsAppNumber}?text=${encodedText}`, '_blank')

      setFormData({ name: '', email: '', phone: '', destinations: '', days: '', notes: '' })
      setIsOpen(false)
    } catch (err) {
      console.error(err)
      toast.error("Network slow, launching WhatsApp fallback window directly...")
      window.open(`https://wa.me/254700000000?text=${encodeURIComponent(structuredSummary)}`, '_blank')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="fixed bottom-6 left-6 z-50 bg-safari-gold hover:bg-olive-green text-white rounded-full shadow-2xl px-5 py-6 font-medium tracking-wide animate-bounce group border border-white/10"
          style={{ animationDuration: '3s' }}
        >
          <Compass className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
          Plan My Route
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] max-h-[92vh] overflow-y-auto bg-neutral-900 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-safari-gold flex items-center gap-2 uppercase tracking-wider">
            Custom Route Planner
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Tell us where you want to venture. This creates a dedicated blueprint mapped straight to our expert desk layout via email and WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-3 border-b border-white/5 pb-3">
            <div>
              <Label htmlFor="popup-name" className="text-xs uppercase tracking-widest text-safari-gold">Your Name *</Label>
              <Input id="popup-name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="bg-black/20 border-white/10 mt-1" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="popup-email" className="text-xs uppercase tracking-widest text-safari-gold">Email Address *</Label>
                <Input id="popup-email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className="bg-black/20 border-white/10 mt-1" />
              </div>
              <div>
                <Label htmlFor="popup-phone" className="text-xs uppercase tracking-widest text-safari-gold">WhatsApp Phone *</Label>
                <Input id="popup-phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+254..." className="bg-black/20 border-white/10 mt-1" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <Label htmlFor="popup-destinations" className="text-xs uppercase tracking-widest text-safari-gold">Target Parks / Highlights</Label>
              <Input id="popup-destinations" name="destinations" value={formData.destinations} onChange={handleChange} placeholder="e.g. Maasai Mara, Serengeti" className="bg-black/20 border-white/10 mt-1" />
            </div>
            <div>
              <Label htmlFor="popup-notes" className="text-xs uppercase tracking-widest text-safari-gold">Extra Context (Group size, special needs)</Label>
              <Textarea id="popup-notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="Share any specific requests..." rows={3} className="bg-black/20 border-white/10 mt-1" />
            </div>
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-safari-gold hover:bg-olive-green text-white mt-4 py-5 font-bold uppercase tracking-widest transition-all">
            <Send className="mr-2 h-4 w-4" />
            {loading ? "Registering Blueprint..." : "Send to Expert Desk"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}