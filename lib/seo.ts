/**
 * SEO Utilities for CNJ Safaris
 */

export const SITE_CONFIG = {
  name: 'CNJ Safaris',
  description: 'Discover Kenya, Tanzania, Uganda & Rwanda with CNJ Safaris. Custom safari itineraries, real-time pricing, and seamless bookings for unforgettable East African adventures.',
  url: 'https://cnjsafaris.com',
  image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&h=630&auto=format&fit=crop',
  twitterHandle: '@cnjsafaris',
}

export const destinations = [
  {
    id: 'kenya',
    name: 'Kenya',
    slug: 'kenya',
    title: 'Kenya Safari Tours | CNJ Safaris',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    slug: 'tanzania',
    title: 'Tanzania Safari Tours | CNJ Safaris',
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
    openGraph: {
      title: props.title,
      description: props.description,
      images: [
        {
          url: props.image || SITE_CONFIG.image,
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
