'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContentFormProps {
  type: 'itinerary' | 'careers' | 'market';
  initialData?: any;
  onSubmit: (data: any) => void;
}

export function ContentForm({ type, initialData, onSubmit }: ContentFormProps) {
  return (
    <form className="space-y-6 bg-background-light dark:bg-slate-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm" onSubmit={(e) => { e.preventDefault(); /* Logic here */ }}>
      <div className="space-y-2">
        <Label htmlFor="title" className="dark:text-gray-300 text-text-default">Title / Name</Label>
        <Input id="title" className="dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200" placeholder={type === 'market' ? "e.g. CNJ Logo Hoodie" : "e.g. Serengeti Explorer"} defaultValue={initialData?.title} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="desc" className="dark:text-gray-300 text-text-default">Description</Label>
        <Textarea id="desc" className="dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200" rows={4} placeholder="Write compelling details for the website..." defaultValue={initialData?.description} />
      </div>
      {type === 'market' && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price" className="dark:text-gray-300 text-text-default">Price ($)</Label>
            <Input id="price" type="number" className="dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200" defaultValue={initialData?.price} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image" className="dark:text-gray-300 text-text-default">Product Image</Label>
            <Input id="image" type="file" accept="image/*" className="dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200" />
          </div>
        </div>
      )}
      <Button type="submit" className="w-full bg-primary-dark hover:bg-primary-light h-12 text-lg font-semibold rounded-xl transition-all">
        Save Changes
      </Button>
    </form>
  );
}