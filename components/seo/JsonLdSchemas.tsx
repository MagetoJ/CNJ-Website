/**
 * JSON-LD Schema Components for SEO
 * These components embed structured data in HTML for search engines
 */

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CNJ Safaris',
    url: 'https://cnjsafaris.com',
    logo: 'https://cnjsafaris.com/logo.png',
    description: 'Premium East African safari tours and custom travel experiences',
    sameAs: [
      'https://www.facebook.com/cnjsafaris',
      'https://www.instagram.com/cnjsafaris',
      'https://www.twitter.com/cnjsafaris',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+254-712-345-678',
      email: 'info@cnjsafaris.com',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'CNJ Safaris',
    image: 'https://cnjsafaris.com/logo.png',
    description: 'East African safari tour operator based in Nairobi, Kenya',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nairobi Safari Plaza',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      postalCode: '00100',
      addressCountry: 'KE',
    },
    telephone: '+254-712-345-678',
    email: 'info@cnjsafaris.com',
    priceRange: '$1200-$5000',
    areaServed: ['KE', 'TZ', 'UG', 'RW'],
    openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:00',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function TouristTripSchema({
  destination,
  title,
  description,
  price,
  startDate,
  endDate,
  duration,
}: {
  destination: string
  title: string
  description: string
  price: number
  startDate: string
  endDate: string
  duration: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: title,
    description: description,
    destination: {
      '@type': 'Place',
      name: destination,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'KE',
      },
    },
    startDate: startDate,
    endDate: endDate,
    duration: duration,
    priceRange: `$${price}`,
    offers: {
      '@type': 'Offer',
      price: price.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://cnjsafaris.com',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://cnjsafaris.com${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ReviewSchema({
  destination,
  rating,
  reviewCount,
  author,
}: {
  destination: string
  rating: number
  reviewCount: number
  author: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: `Outstanding experience at ${destination}. Highly recommended!`,
    author: {
      '@type': 'Person',
      name: author,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
