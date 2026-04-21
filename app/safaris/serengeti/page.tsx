import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Serengeti Safari Tours | CNJ Safaris',
  description: 'Witness the Great Migration in Tanzania\'s Serengeti National Park. Explore vast plains and incredible wildlife with our luxury safari packages.',
}

export default function SerengetiPage() {
  const highlights = [
    {
      title: 'The Great Migration',
      description: 'Witness over two million herbivores move across the plains in a seasonal cycle.',
      icon: '🦓',
    },
    {
      title: 'Ngorongoro Crater',
      description: 'Visit the world\'s largest inactive volcanic caldera, home to dense wildlife populations.',
      icon: '🌋',
    },
    {
      title: 'Luxury Tented Camps',
      description: 'Stay in high-end camps that bring you closer to nature without sacrificing comfort.',
      icon: '⛺',
    },
  ]

  const packages = [
    {
      id: 'ser-1',
      name: 'Serengeti Explorer',
      duration: '6 Days / 5 Nights',
      price: '$1,800 per person',
      highlights: [
        'Central Serengeti game drives',
        'Ngorongoro Crater tour',
        'Full board accommodation',
        'Park entrance fees',
      ],
    },
    {
      id: 'ser-2',
      name: 'Migration Special',
      duration: '8 Days / 7 Nights',
      price: '$3,200 per person',
      highlights: [
        'Northern Serengeti focus',
        'River crossing sightings',
        'Private 4x4 vehicle',
        'Luxury bush meals',
      ],
    },
    {
      id: 'ser-3',
      name: 'Ultimate Tanzania',
      duration: '12 Days / 11 Nights',
      price: '$6,500 per person',
      highlights: [
        'Serengeti & Manyara',
        'Zanzibar beach extension',
        'Internal regional flights',
        'Premium luxury lodges',
      ],
    },
  ]

  return (
    <DestinationPage
      title="Serengeti National Park"
      subtitle="The Endless Plains of Tanzania"
      heroImage="/📍Serengeti National Park on days 2 & 3 of the….jpeg"
      heroGradient="bg-gradient-to-br from-jungle-dark to-amber-900"
      bestTime="Late June to October"
      highlights={highlights}
      description="Explore the vast savannas of Serengeti National Park, a UNESCO World Heritage Site famed for the legendary Great Migration. As millions of wildebeest and zebras traverse the 'endless plains', visitors witness nature's most dramatic spectacle. From the majestic Big Five to the sprawling herds of antelope, the Serengeti provides an unparalleled wildlife experience in the heart of Tanzania."
      packages={packages}
      metaDescription="Experience the magic of Tanzania with a Serengeti safari. Book your migration tour today."
    />
  )
}