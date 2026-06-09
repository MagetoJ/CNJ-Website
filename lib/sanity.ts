import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '20hv68ch',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-05-31', 
  useCdn: true, // true enables faster, cached responses and avoids SSE timeout issues
})

/**
 * Helper function to fetch data with a query
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags,
}: { query: string; params?: Record<string, unknown>; tags?: string[] }): Promise<T> {
  return client.fetch<T>(query, params, { 
    next: { 
      tags: tags,
      revalidate: 60 // <-- Add this: Revalidates the cache at most every 60 seconds
    } 
  })
}

// Helper function for generating image URLs
const builder = createImageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}