import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Gorilla Trekking Permits 2026 | Bwindi & Volcanoes National Park',
  description: 'Secure your 2026 Gorilla Trekking permits for Uganda and Rwanda. Expert-led treks in Bwindi Impenetrable Forest and Volcanoes National Park. Limited availability.',
  keywords: 'Gorilla trekking 2026, Bwindi permits, Volcanoes National Park Rwanda, mountain gorillas Uganda, gorilla safari',
}

export default function GorillaTrekkingPage() {
  const highlights = [
    {
      title: 'Gorilla Encounters',
      description: 'Spend a magical hour with mountain gorillas in their natural habitat.',
      icon: '🦍',
    },
    {
      title: 'Misty Forests',
      description: 'Trek through ancient, high-altitude rainforests of Uganda and Rwanda.',
      icon: '🌫️',
    },
    {
      title: 'Primate Diversity',
      description: 'See golden monkeys, chimpanzees, and various forest bird species.',
      icon: '🐵',
    },
  ]

  const packages = [
    {
      id: 'gor-1',
      name: 'Primate Odyssey',
      duration: '5 Days / 4 Nights',
      price: '$3,200 per person',
      highlights: [
        'Gorilla permit included',
        'Golden monkey trek',
        'Eco-luxury lodge',
        'Professional park rangers',
      ],
    },
  ]

  return (
    <AnimatedSection direction="none">
      <DestinationPage
        title="Gorilla Trekking Expedition"
        subtitle="Bwindi & Volcanoes - Face-to-Face with Great Apes"
        heroImage="/gorilla-trekking.jpg" // Assuming you have a gorilla-trekking.jpg in public folder
        heroGradient="bg-gradient-to-br from-green-900 to-emerald-900"
        bestTime="June - August"
        highlights={highlights}
        description="Trek through the ancient, misty forests of Uganda. Bwindi is home to half of the world's remaining mountain gorillas. For a more accessible yet luxury experience, Rwanda's Volcanoes National Park offers world-class lodges and shorter treks. Our team handles the entire permit application process to guarantee your spot in 2026."
        packages={packages}
        metaDescription="Secure your 2026 Gorilla Trekking permits for Bwindi and Volcanoes. Expert-led safaris."
        quickFacts={{
          bestTime: "June to August & December to February",
          difficulty: "Challenging (High Altitude Trekking)",
          estimatedCost: "Starting from $1,500 (Permit only: $700-$1,500)",
          perfectFor: "Primate Lovers, Active Travelers, Conservationists"
        }}
      />
    </AnimatedSection>
  )
}