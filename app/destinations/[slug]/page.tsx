import { sanityFetch } from '@/lib/sanity'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import DestinationClientPage from '@/components/DestinationClientPage'

interface DestinationPageProps {
  params: { slug: string };
}

async function getDestinationData(slug: string) {
  const query = `*[_type == "destination" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    title,
    description,
    mainImage,
    body,
    "quickFacts": {
      "location": coalesce(quickFacts.location, "Tanzania"),
      "bestTime": coalesce(quickFacts.bestTime, "June - October"),
      "duration": coalesce(quickFacts.duration, "4 - 7 Days"),
      "difficulty": coalesce(quickFacts.difficulty, "Easy")
    }
  }`
  return await sanityFetch<any>({ query, params: { slug }, tags: ['destination'] })
}

export default async function IndividualDestinationPage({ params }: DestinationPageProps) {
  const destination = await getDestinationData(params.slug)

  if (!destination) {
    notFound()
  }

  return (
    <DestinationClientPage destination={destination} />
  )
}