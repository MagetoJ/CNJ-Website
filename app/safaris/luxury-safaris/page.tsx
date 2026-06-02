// app/safaris/luxury-safaris/page.tsx
import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Ultra-Luxury Safaris & Private Jet Expeditions | CNJ Safaris',
  description: 'Indulge in elite private charter flights, five-star wilderness villas, personal butlers, and bespoke tailor-made African safari blueprints.',
  keywords: 'Luxury safaris, luxury tented camps, private fly-in safari, high-end Kenya safari, elite African expeditions',
}

// 1. CRITICAL FIX: Ensure this function is marked explicitly as "export default"
export default function LuxurySafarisPage() {
  const highlights = [
    {
      title: 'Private Aviation',
      description: 'Skip long drives with elite private air charters operating directly between premier wilderness runways.',
      icon: '🛩️',
    },
    {
      title: 'Five-Star Villas',
      description: 'Unwind in exclusive-use premier safari villas featuring infinity pools and dedicated personal chefs.',
      icon: '🏰',
    },
    {
      title: 'Bespoke Trackers',
      description: 'Explore exclusively alongside elite native professional guides and dedicated private conservation trackers.',
      icon: '🤠',
    },
  ]

  const packages = [
    {
      id: 'lux-1',
      name: 'Signature Royal Fly-In',
      duration: '8 Days / 7 Nights',
      price: '$8,500 per person',
      highlights: [
        'Private fly-in air transfers',
        'Ultra-exclusive permanent lodge haven',
        'Personal butler and fine bush dining ceremonies',
        'Private 4x4 custom luxury Land Cruisers',
        'All-inclusive premium beverages & spa treats',
      ],
    },
    {
      id: 'lux-2',
      name: 'The Connoisseur Wilderness Loop',
      duration: '12 Days / 11 Nights',
      price: '$14,200 per person',
      highlights: [
        'Bespoke multi-destination private flight grid',
        'Secluded Michelin-inspired bush culinary craft',
        'Private twilight and evening predator tracking',
        'Aviation-linked helicopter ridge excursions',
        'Dedicated professional wildlife photography setups',
      ],
    },
  ]

  // 2. CRITICAL FIX: Ensure valid JSX elements are returned inside the execution scope
  return (
    <AnimatedSection direction="none">
      <DestinationPage
        title="Luxury Safaris Portfolio"
        subtitle="Elite Private Charters and Five-Star Wilderness Havens"
        heroImage="/kenya-welcome-safari.jpg"
        heroGradient="bg-gradient-to-br from-neutral-900 to-amber-950"
        bestTime="Year-Round Tailored Blueprints"
        highlights={highlights}
        description="Our Luxury Safaris portfolio delivers unparalleled comfort, unmatched privacy, and extreme personalization. From the moment your private charter touches down on remote bush airstrips, every detail is handled by your personal butler. Dine under star-lit canopies on Michelin-inspired cuisine, and watch the majestic African wildlife pass by the deck of your five-star wilderness villa."
        packages={packages}
        metaDescription="Experience elite private charters and five-star wilderness villas with CNJ Safaris."
        quickFacts={{
          bestTime: "June to October & January to March",
          difficulty: "Effortless (Private Air Fly-Ins)",
          estimatedCost: "Starting from $8,500",
          perfectFor: "Discerning Travelers, Honeymooners, & Luxury Connoisseurs"
        }}
      />
    </AnimatedSection>
  )
}