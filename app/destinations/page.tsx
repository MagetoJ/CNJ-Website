import Image from 'next/image';
import Link from 'next/link'
import { sanityFetch } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

// 1. Define the TypeScript type for your destination
interface Destination {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: any;
  description?: string;
}

export default async function DestinationsPage() {
  // 2. Fetch the data cleanly without embedded chat notes
  const destinations: Destination[] = await sanityFetch({
    query: `*[_type == "destination" && !(_id in path("drafts.**"))] {
      _id,
      title,
      slug,
      mainImage,
      description
    }`,
    tags: ['destination'] // Add tag for revalidation
  });

  return (
    <div className="bg-deep-black min-h-screen text-gray-100 pt-32 pb-24">
      <header className="max-w-6xl mx-auto px-4 text-center mb-16">
        <span className="text-amber-500 tracking-[0.4em] text-xs uppercase font-semibold block mb-2">
          Explore luxury
        </span>
        <h1 className="text-5xl font-serif font-bold text-white tracking-wide">
          OUR DESTINATIONS
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mt-4 font-light">
          Explore premium safaris across boundless horizons.
        </p>
      </header>

      {/* 3. Render the destinations grid layout */}
      <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {destinations.length === 0 ? (
          <div className="text-gray-500 text-center col-span-full py-12">
            No destinations published yet.
          </div>
        ) : (
          destinations.map((dest) => (
            <div 
              key={dest._id} 
              className="bg-[#0d0e12] border border-gray-900 rounded-xl overflow-hidden hover:border-amber-600/30 transition-all duration-300"
            >
              {dest.mainImage && (
                <div className="relative h-60 w-full">
                  <Image 
                    src={urlFor(dest.mainImage).url()} 
                    alt={dest.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-serif font-bold text-white mb-2">
                  {dest.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                  {dest.description || "Experience the timeless beauty of this iconic sanctuary."}
                </p>
                <Link 
                  href={`/destinations/${dest.slug.current}`}
                  className="text-amber-500 text-xs tracking-widest uppercase font-semibold hover:underline"
                >
                  Discover More →
                </Link>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  )
}