import type { Metadata } from 'next'
import DestinationTemplate from '@/components/DestinationTemplate'

export const metadata: Metadata = {
  title: 'Serengeti Safari Tours | CNJ Safaris',
  description: 'Witness the Great Migration in Tanzania\'s Serengeti National Park. Explore vast plains and incredible wildlife with our luxury safari packages.',
}

export default function SerengetiPage() {
  return (
    <DestinationTemplate
      title="Serengeti National Park"
      subtitle="The Endless Plains of Tanzania"
      heroBanner="/📍Serengeti National Park on days 2 & 3 of the….jpeg"
      overviewText="Explore the vast savannas of Serengeti National Park, a UNESCO World Heritage Site famed for the legendary Great Migration. As millions of wildebeest and zebras traverse the 'endless plains', visitors witness nature's most dramatic spectacle. From the majestic Big Five to the sprawling herds of antelope, the Serengeti provides an unparalleled wildlife experience in the heart of Tanzania."
      highlights={[
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
      ]}
      packages={[
        {
          title: 'Serengeti Explorer',
          duration: '6 Days / 5 Nights',
          price: '$1,800 per person',
          specs: [
            'Central Serengeti game drives',
            'Ngorongoro Crater tour',
            'Full board accommodation',
            'Park entrance fees',
          ],
        },
        {
          title: 'Ultimate Tanzania',
          duration: '12 Days / 11 Nights',
          price: '$6,500 per person',
          specs: [
            'Serengeti & Manyara',
            'Zanzibar beach extension',
            'Internal regional flights',
            'Premium luxury lodges',
          ],
        },
      ]}
    />
  )
}