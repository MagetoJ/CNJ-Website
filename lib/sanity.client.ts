import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'missing-project-id';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-05-31';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN to prevent network-heavy live listeners in the browser
});

// Helper for compiling Sanity asset image nodes to absolute URLs
const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}