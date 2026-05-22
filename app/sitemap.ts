import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://cnjsafaris.com'

  // In the implementation phase, we will fetch these from your API:
  // const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`).then(res => res.json())
  // const itineraries = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/itineraries`).then(res => res.json())

  const productEntries = [].map((product: any) => ({
    url: `${baseUrl}/shop`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const safariEntries = [].map((safari: any) => ({
    url: `${baseUrl}/safaris/${safari.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const staticEntries = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/safaris/maasai-mara`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/safaris/serengeti`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/safaris/gorilla-trekking`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  return [...staticEntries, ...productEntries, ...safariEntries]
}
