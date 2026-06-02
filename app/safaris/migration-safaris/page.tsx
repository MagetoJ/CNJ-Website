import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Great Migration Safaris | Front-Row River Crossings | CNJ Safaris',
  description: 'Witness the iconic wildebeest river crossings at the Mara & Serengeti plains with front-row tracking and mobile luxury migration camps.',
  keywords: 'Great migration safari, wildebeest river crossing, Serengeti migration tracking, Maasai Mara migration tour',
}

export default function MigrationSafarisPage() {
  const highlights = [
    {
      title: 'Front-Row Crossings',
      description: 'Expertly timed positioning near legendary Mara and Sand river crossing vantage points.',
      icon: '🐊',
    },
    {
      title: 'Mobile Luxury Camps',
      description: 'Elegant canvas camps that intelligently relocate throughout the year to follow the mega-herd.',
      icon: '⛺',
    },
    {
      title: 'Mega-Herd Vistas',
      description: 'Witness millions of wildebeest, zebras, and gazelles spanning across infinite horizons.',
      icon: '🦓',
    },
  ]

  const packages = [
    {
      id: 'mig-1',
      name: 'The Epic Crossing Chase',
      duration: '7 Days / 6 Nights',
      price: '$3,800 per person',
      highlights: [
        'Premium mobile migration luxury tented camp accommodation',
        'Expert trackers tracking crossing paths in real-time',
        'Unlimited game-drive fuel allocations for prolonged tracking',
        'All conservation, reserve ecosystem, and camp fees',
        'Picnic lunches packed for all-day savanna standouts',
      ],
    },
    {
      id: 'mig-2',
      name: 'Mara & Serengeti Dual Megalith',
      duration: '11 Days / 10 Nights',
      price: '$6,950 per person',
      highlights: [
        'Cross-border regional flight links between Kenya & Tanzania',
        'Premium permanent luxury lodge access paired with mobile setups',
        'Twice-daily tracking targeting apex river crossing activity',
        'Inclusive hot-air balloon flight above the herd migration path',
        'Dedicated 4x4 tracking setups featuring window row guarantees',
      ],
    },
  ]

  return (
    <AnimatedSection direction="none">
      <DestinationPage
        title="Great Migration Portfolio"
        subtitle="Front-Row River Crossing Tracking at the Mara & Serengeti Plains"
        heroImage="/Why you should visit Kenya — Style for Wanderlust.jpeg"
        heroGradient="bg-gradient-to-br from-neutral-900 to-yellow-950"
        bestTime="July - October (Mara River) & January - March (Calving)"
        highlights={highlights}
        description="The Great Wildebeest Migration is the largest terrestrial mammal show on Earth. Our Great Migration collection puts you precisely where the action unfolds. Utilizing luxury mobile camps that shift position according to seasonal movements, alongside premium spots at major migration arteries, we guarantee breathtaking front-row access to high-stakes river crossings and vast savanna movements."
        packages={packages}
        metaDescription="Witness millions of animals on the move with our elite Great Migration safari packages."
        quickFacts={{
          bestTime: "July to October (River Crossings) or January to March (Calving)",
          difficulty: "Moderate (Longer Savanna Outings)",
          estimatedCost: "$3,800 - $6,950",
          perfectFor: "Avid Wildlife Photographers, Action Seekers, & Group Safari Enthusiasts"
        }}
      />
    </AnimatedSection>
  )
}