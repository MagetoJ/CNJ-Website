'use client'

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

interface ContentFormProps {
  type: 'itinerary' | 'careers' | 'market';
  initialData?: any;
  onSubmit: (data: any) => void;
}

export function ContentForm({ type, initialData, onSubmit }: ContentFormProps) {
  return (
    <form className="space-y-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm" onSubmit={(e) => { e.preventDefault(); /* Logic here */ }}>
      <div className="space-y-2">
        <Label htmlFor="title">Title / Name</Label>
        <Input id="title" placeholder={type === 'market' ? "e.g. CNJ Logo Hoodie" : "e.g. Serengeti Explorer"} defaultValue={initialData?.title} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="desc">Description</Label>
        <Textarea id="desc" rows={4} placeholder="Write compelling details for the website..." defaultValue={initialData?.description} />
      </div>
      {type === 'market' && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price">Price ($)</Label>
            <Input id="price" type="number" defaultValue={initialData?.price} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Product Image</Label>
            <Input id="image" type="file" accept="image/*" />
          </div>
        </div>
      )}
      <Button type="submit" className="w-full bg-jungle-dark hover:bg-jungle-green h-12 text-lg font-semibold rounded-xl transition-all">
        Save Changes
      </Button>
    </form>
  );
}