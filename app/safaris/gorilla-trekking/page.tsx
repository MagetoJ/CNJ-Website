import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Gorilla Trekking Uganda & Rwanda | CNJ Safaris',
  description: 'Encounter the endangered mountain gorillas in their natural habitat. Expert-led trekking tours in Bwindi and Volcanoes National Park.',
}

export default function GorillaTrekkingPage() {
  const highlights = [
    {
      title: 'Face-to-Face Encounters',
      description: 'Spend an unforgettable hour with a habituated mountain gorilla family.',
      icon: '🦍',
    },
    {
      title: 'Misty Rain Forests',
      description: 'Trek through the ancient, biodiverse Bwindi Impenetrable Forest.',
      icon: '🌿',
    },
    {
      title: 'Primate Diversity',
      description: 'See golden monkeys, chimpanzees, and various bird species.',
      icon: '🐒',
    },
  ]

  const packages = [
    {
      id: 'gor-1',
      name: 'Bwindi Essential',
      duration: '3 Days / 2 Nights',
      price: '$1,500 per person',
      highlights: [
        '1 Gorilla tracking permit',
        'Mountain lodge stay',
        'Professional guide/tracker',
        'Local village walk',
      ],
    },
    {
      id: 'gor-2',
      name: 'Primate Double',
      duration: '5 Days / 4 Nights',
      price: '$2,800 per person',
      highlights: [
        'Gorilla & Chimp tracking',
        'Kibale Forest visit',
        'Scenic crater lake tours',
        'Boutique eco-lodges',
      ],
    },
    {
      id: 'gor-3',
      name: 'Rwanda Luxury Trek',
      duration: '4 Days / 3 Nights',
      price: '$4,200 per person',
      highlights: [
        'Volcanoes National Park',
        'Ultra-luxury lodge stay',
        'Helicopter transfers',
        'Private porter services',
      ],
    },
  ]

  return (
    <DestinationPage
      title="Gorilla Trekking Adventures"
      subtitle="A Once-in-a-Lifetime Primate Encounter"
      heroGradient="bg-gradient-to-br from-emerald-900 to-jungle-dark"
      bestTime="June to August & December to February"
      highlights={highlights}
      description="Trekking mountain gorillas is a truly unique experience. Bwindi Impenetrable National Park in Uganda and Volcanoes National Park in Rwanda are the premier destinations for this adventure. Walking through the dense, mist-covered forests to find a family of gorillas is physically demanding but immensely rewarding, offering a rare glimpse into the lives of our closest relatives."
      packages={packages}
      metaDescription="Book your Gorilla trekking permit and safari with CNJ Safaris. Professional guides for Uganda and Rwanda."
    />
  )
}