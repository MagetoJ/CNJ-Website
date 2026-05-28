import type { Metadata } from 'next'
import DestinationPage from '@/components/DestinationPage'

export const metadata: Metadata = {
  title: 'Serengeti Safari Tours | CNJ Safaris',
  description: 'Experience the endless plains of the Serengeti, witness the Great Migration, and enjoy premium luxury tented camps.',
}

export default function SerengetiPage() {
  return (
    <DestinationPage
      title="Serengeti"
      subtitle="The Endless Plains of Iconic Wildlife and Spectacular Migration Loops"
      heroImage="/serengeti-safari.jpg" 
      heroGradient="bg-gradient-to-b from-black/60 to-black/20"
      bestTime="January to March or June to October"
      metaDescription={metadata.description || ''}
      description="Serengeti National Park offers the quintessential African safari experience. Famous for its vast open plains and hosting the largest terrestrial mammal migration in the world, this UNESCO World Heritage Site provides exceptional opportunities to spot big predators on the hunt."
      highlights={[
        { title: "The Migration Cycle", description: "Follow hundreds of thousands of wildebeest across the legendary savanna.", icon: "🦓" },
        { title: "Predator Densities", description: "Incredible year-round opportunities to photograph lions, cheetahs, and leopards.", icon: "🐆" },
        { title: "Ngorongoro Crater Add-on", description: "Seamlessly connect your safari into the world's largest intact volcanic caldera.", icon: "🌋" }
      ]}
      packages={[
        {
          id: 'serengeti-explorer',
          name: 'Serengeti Explorer', // Fixed: 'title' changed to 'name'
          duration: '6 Days / 5 Nights',
          price: '$1,800 per person',
          highlights: [ // Fixed: 'specs' changed to 'highlights'
            '4x4 Custom Land Cruiser Private Outings',
            'Luxury Tented Migration Camp Accommodation',
            'Experienced Native Professional Trackers',
            'All Serengeti Park Conservation & Entry Fees'
          ]
        },
        {
          id: 'serengeti-luxury-fly-in',
          name: 'Serengeti Luxury Fly-In Elite', // Fixed: 'title' changed to 'name'
          duration: '5 Days / 4 Nights',
          price: '$3,900 per person',
          highlights: [ // Fixed: 'specs' changed to 'highlights'
            'Aviation Fly-in / Fly-out Private Air Charters',
            'Ultra-Luxury Five-Star Permanent Lodge Haven',
            'Private All-Inclusive Evening Game Drives',
            'Personal Butler and Fine Bush Dining Ceremonies'
          ]
        }
      ]}
      quickFacts={{
        bestTime: "January to March or June to October",
        difficulty: "Easy",
        estimatedCost: "$1,800 - $3,900",
        perfectFor: "Classic Safari Enthusiasts & Families"
      }}
    />
  )
}