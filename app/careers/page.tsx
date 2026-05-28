import DestinationPage from "@/components/DestinationPage"

export const metadata = {
  title: 'Luxury Maasai Mara Safaris | CNJ Safaris',
  description: 'Track the legendary Great Migration and encounter Africa’s iconic Big Five predators from premium luxury outposts.',
}

export default function MaasaiMaraPage() {
  return (
    <DestinationPage
      title="Maasai Mara"
      subtitle="The Great Plains of Endless Drama & Wildebeest Crossings"
      heroImage="/kenya-welcome-safari.jpg"
      heroGradient="bg-gradient-to-b from-black/60 to-black/20"
      bestTime="July to October"
      metaDescription={metadata.description}
      description="The Maasai Mara National Reserve defines wild Africa. Encompassing over 1,500 square kilometers of golden horizon savanna, the reserve offers unmatched year-round big cat tracking density, cultural immersion loops with Maasai warriors, and frontline vantage setups along the Mara river curves."
      highlights={[
        { title: "The Great Migration", description: "Witness thousands of wildebeest and zebra braving crocodile waters.", icon: "🦓" },
        { title: "Big Five Tracker Loops", description: "Encounter Lions, Leopards, Rhinos, Elephants, and Cape Buffalos cleanly.", icon: "🦁" },
        { title: "Bespoke Balloon Flights", description: "Skim tree-line canopies at dawn followed by premium champagne bush setups.", icon: "🎈" }
      ]}
      packages={[
        {
          id: "signature-plains",
          name: "Signature Plains Classic",
          duration: "5 Days / 4 Nights",
          price: "From $1,200 pp",
          highlights: ["4x4 Land Cruiser Transfers", "Boutique Tented Outpost Stay", "Twice Daily Private Tracking Trackers", "All Park Conservation Entry Tariffs Included"]
        },
        {
          id: "migration-aviation",
          name: "Bespoke Migration Aviation Elite",
          duration: "7 Days / 6 Nights",
          price: "From $3,500 pp",
          highlights: ["Charter Flight Hopper Aviation Transfers", "Ultra Luxury Private Sanctuary Access", "Night Tracking Operations Permit", "Private Sundowners + Butler Care Tiers"]
        }
      ]}
      quickFacts={{
        bestTime: "July to October",
        difficulty: "Easy",
        estimatedCost: "$1,200 - $3,500",
        perfectFor: "Wildlife Lovers & Photographers"
      }}
    />
  )
}