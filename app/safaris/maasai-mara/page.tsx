import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'
import { Zap, Eye, Compass } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Maasai Mara Safari Packages 2026 | Private & Luxury Kenya Tours',
  description: 'Witness the Great Migration and the Big Five with our premier Maasai Mara safari packages. Expert native guides, luxury tented camps, and custom itineraries for US & UK travelers.',
  keywords: 'Maasai Mara safari, Kenya safari packages, Great Migration 2026, luxury safari Kenya, private Maasai Mara tour',
}

export default function MaasaiMaraPage() {
  const highlights = [
    {
      title: 'Big Five Wildlife',
      description: 'Encounter lions, elephants, buffalo, leopards, and rhinos in their natural habitat.',
      icon: '🦁',
    },
    {
      title: 'Endless Savannas',
      description: 'Experience vast golden plains and stunning sunsets in one of Africa\'s most photographed locations.',
      icon: '🌅',
    },
    {
      title: 'Maasai Culture',
      description: 'Visit Maasai villages and learn about the traditions of Kenya\'s most famous indigenous people.',
      icon: '👥',
    },
  ]

  const packages = [
    {
      id: '1',
      name: 'Classic Safari',
      duration: '5 Days / 4 Nights',
      price: '$1,200 per person',
      highlights: [
        'Daily game drives',
        '4-star lodge accommodation',
        'All meals included',
        'Professional guide',
        'Airport transfers',
      ],
    },
    {
      id: '2',
      name: 'Premium Escape',
      duration: '7 Days / 6 Nights',
      price: '$2,500 per person',
      highlights: [
        'Twice-daily game drives',
        '5-star resort stay',
        'Premium meals & drinks',
        'Private guide',
        'Maasai village visit',
        'Hot air balloon safari',
      ],
    },
    {
      id: '3',
      name: 'Luxury Expedition',
      duration: '10 Days / 9 Nights',
      price: '$4,500 per person',
      highlights: [
        'Private game drives',
        'Luxury tented camp',
        'Michelin-inspired cuisine',
        'Dedicated guide & tracker',
        'Multiple cultural experiences',
        'Photography workshops',
      ],
    },
  ]

  return (
    <AnimatedSection direction="none">
    <DestinationPage
      title="Maasai Mara National Reserve"
      subtitle="Where the Wild Roam Free - Experience Kenya's Most Iconic Safari"
      heroImage="/kenya-welcome-safari.jpg"
      heroGradient="bg-gradient-to-br from-jungle-dark to-jungle-green"
      bestTime="June - October"
      highlights={highlights}
      description="The Maasai Mara National Reserve is one of the world's most renowned safari destinations. Famous for its exceptional wildlife viewing, particularly the Big Five, and the annual wildebeest migration, the Mara offers an unforgettable East African experience. Spanning 1,500 square kilometers of pristine wilderness in southwestern Kenya, this reserve showcases vast grasslands, acacia forests, and the life-giving Mara River."
      packages={packages}
      metaDescription="Book your Maasai Mara safari with CNJ Safaris. See the Big Five and witness the migration with expert guides."
      // Note: If DestinationPage is updated to support images, pass the URL here
    />
    </AnimatedSection>
  )
}
