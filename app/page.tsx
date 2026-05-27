import Link from 'next/link'
import Image from 'next/image'

const spots = [
  { slug: 'maasai-mara', title: 'Maasai Mara', region: 'Kenya', img: '/kenya-welcome-safari.jpg' },
  { slug: 'serengeti', title: 'Serengeti', region: 'Tanzania', img: '/📍Serengeti National Park on days 2 & 3 of the….jpeg' },
  { slug: 'amboseli', title: 'Amboseli', region: 'Kenya', img: '/South African Safari _ GORAH ELEPHANT CAMP, Addo….jpeg' },
  { slug: 'samburu', title: 'Samburu National Reserve', region: 'Kenya', img: '/safari-park-giraffe.jpeg' },
  { slug: 'tsavo', title: 'Tsavo Wilderness', region: 'Kenya', img: '/Experience an unforgettable Big 5 safari at….jpeg' },
  { slug: 'diani', title: 'Diani Beach Extension', region: 'Coastal East Africa', img: '/A Safari and Beach Getaway in One Perfect Itinerary.jpeg' },
]

export default function DestinationsHub() {
  return (
    <main className="min-h-screen bg-deep-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-safari-gold">Wilderness Map</span>
          <h1 className="font-serif text-4xl md:text-6xl font-black uppercase">Iconic Ecosystems</h1>
          <div className="w-16 h-0.5 bg-safari-gold mx-auto mt-2"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {spots.map((dest) => (
            <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="group relative h-[380px] overflow-hidden border border-white/10 flex items-center justify-center text-center">
              <Image 
                src={dest.img} 
                alt={dest.title} 
                fill 
                className="object-cover brightness-[0.4] group-hover:brightness-[0.25] group-hover:scale-102 transition-all duration-500"
              />
              <div className="relative z-10 p-6 space-y-2">
                <span className="text-xs uppercase tracking-widest text-safari-gold font-bold">{dest.region}</span>
                <h2 className="font-serif text-4xl font-bold tracking-tight uppercase group-hover:tracking-wider transition-all">{dest.title}</h2>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-light pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore Route Blueprint →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}