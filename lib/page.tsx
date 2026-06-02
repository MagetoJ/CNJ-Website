import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Luxury Serengeti Safaris | Tanzania Migration Expedition | CNJ Safaris',
  description: 'Explore the vast plains of the Serengeti. Experience the Great Migration, big cat sightings, and luxury bush camps in Tanzania\'s premier national park.',
  keywords: 'Serengeti safari, Tanzania wildlife tour, Great Migration Serengeti, luxury Serengeti camp, Ngorongoro Crater tour',
}

export default function SerengetiPage() {
  const highlights = [
    {
      title: 'Endless Plains',
      description: 'Traverse the vast horizons of the Serengeti, home to the highest concentration of large mammals on Earth.',
      icon: '🌍',
    },
    {
      title: 'Big Cat Haven',
      description: 'Unrivaled opportunities to see lions, leopards, and cheetahs hunting in their natural territory.',
      icon: '🐾',
    },
    {
      title: 'Balloon Safaris',
      description: 'Float silently over the migration herds at sunrise for a unique aerial perspective.',
      icon: '🎈',
    },
  ]

  const packages = [
    {
      id: 'ser-1',
      name: 'Serengeti Explorer',
      duration: '6 Days / 5 Nights',
      price: '$2,850 per person',
      highlights: [
        'Luxury tented camp stay',
        'Full-day game drives in Central Serengeti',
        'Domestic flight to Serengeti included',
        'Sundowner drinks in the bush',
        'Professional Tanzanian guide',
      ],
    },
  ]

  return (
    <AnimatedSection direction="none">
      <DestinationPage
        title="Serengeti National Park"
        subtitle="The Heart of the Wild - Tanzania's Crown Jewel"
        heroImage="/📍Serengeti National Park on days 2 & 3 of the….jpeg"
        heroGradient="bg-gradient-to-br from-amber-800 to-amber-950"
        bestTime="June - October"
        highlights={highlights}
        description="A UNESCO World Heritage site, the Serengeti is the quintessential African safari destination. Its name, derived from the Maasai word 'Siringet', means 'endless plains'. Stretching across 14,750 square kilometers, the park is famous for the Great Migration and its exceptional predator population. From the granite kopjes of the central plains to the Mara River in the north, the Serengeti offers a primal and awe-inspiring landscape."
        packages={packages}
        metaDescription="Book your Tanzania safari in the Serengeti. Experience the migration and big cat sightings with expert guides."
        quickFacts={{
          bestTime: "June to October & January to March",
          difficulty: "Easy to Moderate",
          estimatedCost: "Starting from $2,500 per person",
          perfectFor: "Wildlife Enthusiasts, Photographers, Luxury Seekers"
        }}
      />
    </AnimatedSection>
  )
}