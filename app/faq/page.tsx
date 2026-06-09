import { Metadata } from 'next'
import { faqData } from '@/lib/data'
import { FAQSchema, BreadcrumbSchema, OrganizationSchema } from '@/components/seo/JsonLdSchemas'
import FAQClient from './FAQClient'

// Advanced Server-Side Meta Tags for Enhanced SEO Crawling
export const metadata: Metadata = {
  title: 'Frequently Asked Safari Questions | CNJ Safaris',
  description: 'Planning an African safari? Find answers regarding bookings, seasonal migration times, packing checklists, visa guidelines, and tourist safety metrics for Kenya and Tanzania.',
  alternates: {
    canonical: 'https://cnjsafaris.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Safari Questions | CNJ Safaris',
    description: 'Expert advice on planning your dream East African getaway. Read comprehensive guides on safety, vehicles, booking deposits, and clothing.',
    url: 'https://cnjsafaris.com/faq',
    type: 'website',
    images: [
      {
        url: 'https://cnjsafaris.com/kenya-welcome-safari.jpg',
        width: 1200,
        height: 630,
        alt: 'CNJ Safaris Wild Adventures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Safari Questions | CNJ Safaris',
    description: 'Everything you need to know about preparing for an unforgettable East African safari adventure.',
  },
}

export default function FAQPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ]

  return (
    <>
      {/* Search Engine Structured JSON-LD Injections */}
      <OrganizationSchema />
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Interactive Interface */}
      <FAQClient faqs={faqData} />
    </>
  )
}