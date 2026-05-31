import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-05-30', // Use the current date to guarantee API version lock
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN, // Use read token for public views
})

/**
 * Helper function to fetch data with a query
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags,
}: { query: string; params?: Record<string, unknown>; tags?: string[] }): Promise<T> {
  return client.fetch<T>(query, params, { next: { tags: tags } })
}

// Helper function for generating image URLs
const builder = createImageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}