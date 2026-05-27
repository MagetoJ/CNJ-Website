import type { Metadata } from 'next'
import Image from 'next/image'
import WhatsAppFooter from '@/components/WhatsAppFooter'

export const metadata: Metadata = {
  title: 'Gallery | CNJ Safaris',
  description: 'Explore our collection of tour images and safari packages. See the beauty of East Africa through our lens.',
}

export default function GalleryPage() {
  const tourImages = [
    {
      src: '/📍Serengeti National Park on days 2 & 3 of the….jpeg',
      alt: 'Serengeti National Park',
      caption: 'Serengeti Wildlife',
    },
    {
      src: '/A Safari and Beach Getaway in One Perfect Itinerary.jpeg',
      alt: 'Safari and Beach',
      caption: 'Luxury Getaway',
    },
    {
      src: '/Experience an unforgettable Big 5 safari at….jpeg',
      alt: 'Big 5 Safari',
      caption: 'Big 5 Encounters',
    },
    {
      src: '/gorilla.jpeg',
      alt: 'Gorilla Trekking',
      caption: 'Mountain Gorillas',
    },
    {
      src: '/safari-park-giraffe.jpeg',
      alt: 'Giraffe in Safari Park',
      caption: 'Graceful Giraffes',
    },
    {
      src: '/South African Safari _ GORAH ELEPHANT CAMP, Addo….jpeg',
      alt: 'Gorah Elephant Camp',
      caption: 'Elephant Camp',
    },
  ]

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tourImages.map((img, i) => (
            <div key={i} className="group relative h-80 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-jungle-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-medium text-lg">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
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
