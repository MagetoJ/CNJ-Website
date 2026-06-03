import { createClient, type SanityClient } from 'next-sanity';
import { cache } from 'react';

// Ensure these environment variables are set in your .env file
// NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
// NEXT_PUBLIC_SANITY_DATASET="your-dataset-name"
// SANITY_API_READ_TOKEN="your-read-token" (optional, for authenticated reads)

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-01'; // Use current date for latest API version
const useCdn = process.env.NODE_ENV === 'production'; // Use CDN in production for faster queries

if (!projectId || !dataset) {
  console.error('Sanity Project ID and Dataset are required. Please check your environment variables.');
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  // token: process.env.SANITY_API_READ_TOKEN, // Uncomment if you need authenticated reads
});

// Helper function to fetch data from Sanity
// Uses React's `cache` to deduplicate requests and Next.js revalidation by tags
export const sanityFetch = cache(async <QueryResponse>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, any>;
  tags?: string[];
}): Promise<QueryResponse> => {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      tags,
    },
  });
});

export default client; // Export client for direct use if needed