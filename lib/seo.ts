/**
 * SEO Utilities for CNJ Safaris
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL 
  || (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'https://cnjsafaris.com')

export const SITE_CONFIG = {
  name: 'CNJ Safaris',
  description: 'Premium East African Safari Tours for International Travelers. Award-winning custom itineraries to Kenya, Tanzania, & Uganda. Trusted by travelers from USA, Europe, and Asia for safe, luxury, and authentic wildlife adventures.',
  url: siteUrl,
  image: `${siteUrl}/Cnj%20new%20logo.jpg`, // Ensure this matches your production logo path
  twitterHandle: '@cnjsafaris',
}

export const destinations = [
  {
    id: 'kenya',
    name: 'Kenya',
    slug: 'kenya',
    title: 'Best Kenya Safari Tours 2026 | Top Rated for US & EU Travelers',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    slug: 'tanzania',
    title: 'Luxury Tanzania Safaris | Serengeti & Ngorongoro Expedition',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'uganda',
    name: 'Uganda',
    slug: 'uganda',
    title: 'Uganda Safari Tours | CNJ Safaris',
    image: 'https://images.unsplash.com/photo-1581281863883-2469417a1668?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    slug: 'rwanda',
    title: 'Rwanda Safari Tours | CNJ Safaris',
    image: 'https://images.unsplash.com/photo-1534149043227-14639f2935a2?q=80&w=800&auto=format&fit=crop',
  },
]

export const experiences = [
  {
    id: 'big-five',
    name: 'Big Five Safari',
  },
  {
    id: 'gorilla-trekking',
    name: 'Gorilla Trekking',
  },
  {
    id: 'beach-escape',
    name: 'Beach Escape',
  },
  {
    id: 'mountain-climb',
    name: 'Mountain Climbing',
  },
]

/**
 * Generate meta tags for a page
 */
export function generateMetaTags(props: {
  title: string
  description: string
  image?: string
  url?: string
}) {
  return {
    title: props.title,
    description: props.description,
    icons: {
      icon: '/Cnj new logo.jpg',
    },
    openGraph: {
      title: props.title,
      description: props.description,
      images: [
        {
          url: props.image ? (props.image.startsWith('http') ? props.image : `${SITE_CONFIG.url}${props.image}`) : SITE_CONFIG.image,
          width: 1200,
          height: 630,
        },
      ],
      url: props.url || SITE_CONFIG.url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: props.title,
      description: props.description,
      images: [props.image || SITE_CONFIG.image],
      creator: SITE_CONFIG.twitterHandle,
    },
  }
}

/**
 * Generate International TouristTrip JSON-LD
 */
export function generateTouristTripSchema(props: {
  name: string
  description: string
  image?: string
  url: string
  destinationName: string
  offers?: { name: string; price: string; currency: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": props.name,
    "description": props.description,
    "image": props.image || SITE_CONFIG.image,
    "url": props.url,
    "touristType": ["International Travelers", "Luxury Wildlife Enthusiasts", "Eco-Tourists from USA, Europe, and Asia"],
    "itinerary": {
      "@type": "City",
      "name": props.destinationName
    },
    "offers": props.offers?.map(offer => ({
      "@type": "Offer",
      "name": offer.name,
      "price": offer.price.replace(/[^0-9.]/g, ''),
      "priceCurrency": offer.currency,
      "availability": "https://schema.org/InStock",
      "url": props.url,
      "eligibleRegion": ["US", "GB", "EU", "AS"],
      "offeredBy": {
        "@type": "Organization",
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.url
      }
    }))
  }
}

/**
 * Common FAQs for East African safaris
 */
export const commonFAQs = [
  {
    question: 'What is the best time to visit East Africa?',
    answer:
      'The best time for wildlife viewing is June to October (dry season). However, the green season (November to May) offers lush landscapes and fewer tourists at lower prices.',
  },
  {
    question: 'Do I need a visa for East Africa?',
    answer:
      'Visa requirements vary by nationality. Most visitors can obtain visas on arrival or through e-visa systems. We recommend checking your specific country requirements.',
  },
  {
    question: 'What vaccinations do I need?',
    answer:
      'Yellow fever vaccination is recommended. Consult with a travel clinic about malaria prophylaxis and other recommended vaccinations.',
  },
  {
    question: 'How physically demanding are safari activities?',
    answer:
      'Game drives are suitable for all fitness levels. Gorilla trekking requires moderate fitness. We offer options for different activity levels.',
  },
  {
    question: 'What should I pack for a safari?',
    answer:
      'Pack neutral-colored clothing, comfortable walking shoes, sunscreen, binoculars, and a camera. We provide detailed packing lists with all bookings.',
  },
  {
    question: 'Is it safe to travel to East Africa?',
    answer:
      'East Africa is generally safe for tourists. Our guides follow strict safety protocols. We stay updated on travel advisories and ensure guest security.',
  },
]
