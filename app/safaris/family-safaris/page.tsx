import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Child-Safe Family Safaris & Multi-Room Suites | CNJ Safaris',
  description: 'Discover tailor-made family safaris with curated child-safe tracking loops, educational junior ranger guides, and multi-room luxury canvas suites.',
  keywords: 'Family safari Africa, children safe tracking loops, multi-room safari suites, family travel Kenya',
}

export default function FamilySafarisPage() {
  const highlights = [
    {
      title: 'Child-Safe Track Loops',
      description: 'Shorter, highly engaging game drives carefully routed to avoid bumpy, exhausting terrains.',
      icon: '👶',
    },
    {
      title: 'Multi-Room Suites',
      description: 'Interconnected family canvas tents and multi-room luxury villas ensuring complete peace of mind.',
      icon: '⛺',
    },
    {
      title: 'Junior Ranger Craft',
      description: 'Educational programs tracking small wildlife, identifying footprints, and exploring local tribal folklore.',
      icon: '🏹',
    },
  ]

  const packages = [
    {
      id: 'fam-1',
      name: 'Serengeti Family Explorer',
      duration: '6 Days / 5 Nights',
      price: '$2,200 per adult',
      highlights: [
        'Interconnected premium family suites',
        'Private junior tracker guide assignments',
        'Shorter, interactive tracking schedules',
        'Child-friendly tailor-made menu options',
        'All regional park and conservation gate entries',
      ],
    },
    {
      id: 'fam-2',
      name: 'The Great African Legacy Trek',
      duration: '9 Days / 8 Nights',
      price: '$4,100 per adult',
      highlights: [
        'Private 4x4 vehicle usage exclusively for your family',
        'Interactive bush craft and bow-making with Maasai tribal elders',
        'Spacious luxury family villas with private plunge pools',
        'Dedicated on-site child minding for parents\' twilight drives',
        'Domestic flight links directly into safari hubs',
      ],
    },
  ]

  return (
    <AnimatedSection direction="none">
      <DestinationPage
        title="Family Safaris Portfolio"
        subtitle="Curated Child-Safe Tracking Loops and Multi-Room Suites"
        heroImage="/safari-park-giraffe.jpeg"
        heroGradient="bg-gradient-to-br from-neutral-900 to-emerald-950"
        bestTime="June - October & December - March"
        highlights={highlights}
        description="Our Family Safaris portfolio balances tracking pacing, secure vehicle routing, and spacious accommodations for multi-generational expeditions. Introduce young explorers to nature through customized trailing loops and educational bush-craft programs under the safe surveillance of native elder guides."
        packages={packages}
        metaDescription="Book an inspiring, safe, and premium family safari with interactive tracking loops for children."
        quickFacts={{
          bestTime: "June to August & December to February",
          difficulty: "Easy (Paced for Children & Seniors)",
          estimatedCost: "$2,200 - $4,100",
          perfectFor: "Multi-Generational Families & Nature Education Lovers"
        }}
      />
    </AnimatedSection>
  )
}