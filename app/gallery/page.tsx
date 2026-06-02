import type { Metadata } from 'next'
import Image from 'next/image'
import WhatsAppFooter from '@/components/WhatsAppFooter'
import { getGalleryImages } from '@/lib/api-client' // Fetches the live data from Sanity

export const metadata: Metadata = {
  title: 'Gallery | CNJ Safaris',
  description: 'Explore our collection of live tour images and safari packages. See the beauty of East Africa through our lens.',
}

// Changing the component to an async function allows server-side fetching from Sanity
export default async function GalleryPage() {
  // 1. Fetch live images uploaded from Sanity Studio (The old hardcoded tourImages list is now completely removed)
  const tourImages = await getGalleryImages();

  const packages = [
    {
      title: 'Ultimate Kenya Safari',
      description: '8 Days of adventure through Maasai Mara, Amboseli, and Lake Nakuru.',
      image: '/kenya-welcome-safari.jpg',
      price: 'From $2,450',
    },
    {
      title: 'Tanzania Serengeti Explorer',
      description: 'Experience the great migration in the heart of the Serengeti.',
      image: '/📍Serengeti National Park on days 2 & 3 of the….jpeg',
      price: 'From $3,100',
    },
    {
      title: 'Rwanda Gorilla Trek',
      description: 'A once-in-a-lifetime encounter with the mountain gorillas.',
      image: '/gorilla.jpeg',
      price: 'From $1,800',
    },
  ]

  return (
    <main className="min-h-screen bg-transparent selection:bg-amber-500/30 selection:text-amber-200">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Why you should visit Kenya — Style for Wanderlust.jpeg"
          alt="Gallery Hero"
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            A visual journey through the most breathtaking landscapes and wildlife on Earth.
          </p>
        </div>
      </section>

      {/* Tour Images Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">Visual Journey</span>
          <h2 className="font-serif text-4xl font-bold text-white mt-4">Tour Highlights</h2>
        </div>
        
        {/* If no images have been uploaded/published in Sanity yet, show a clean message */}
        {tourImages.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-700 rounded-2xl max-w-md mx-auto">
            <p className="text-gray-400 font-medium mb-2">Your Gallery is empty</p>
            <p className="text-sm text-gray-500 px-4">
              Upload and click "Publish" on your image assets inside Sanity Studio to see them appear here instantly!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourImages.map((img, i) => (
              <div key={img._id || i} className="group relative h-80 rounded-2xl overflow-hidden shadow-md bg-zinc-900">
                {img.src && (
                  <Image
                    src={img.src}
                    alt={img.alt || img.caption || 'CNJ Safaris Gallery Asset'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-medium text-lg">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">Curated Experiences</span>
            <h2 className="font-serif text-4xl font-bold text-white mt-4">Featured Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg, i) => (
              <div key={i} className="glass-panel glass-card-hover rounded-3xl overflow-hidden flex flex-col h-full">
                <div className="relative h-64 w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.title}</h3>
                  <p className="text-gray-300 mb-6 flex-grow">{pkg.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-leaf-green font-bold text-xl">{pkg.price}</span>
                    <button className="text-white font-semibold hover:text-amber-500 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFooter />
    </main>
  )
}
