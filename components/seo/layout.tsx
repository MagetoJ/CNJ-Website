import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Official Safari Gear | CNJ Safaris Marketplace',
  description: 'Shop branded CNJ Safaris hoodies, jackets, and caps. High-quality gear for your next African adventure.',
}

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}