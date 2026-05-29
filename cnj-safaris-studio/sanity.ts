import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'eywse04q', // Use provided projectId or fallback
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // Use provided dataset or fallback
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  useCdn: true, // set to `false` to bypass the edge cache
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getDestinationBySlug(slug: string) {
  const query = `*[_type == "destination" && slug.current == $slug][0]{
    title,
    subtitle,
    "slug": slug.current,
    heroImage{
      asset->{
        _id,
        url
      }
    },
    heroGradient,
    bestTime,
    description, // This is Portable Text (blockContent)
    highlights[]{title, description, icon},
    packages[]->{ // Fetch package details for summary on destination page
      _id,
      name,
      slug,
      startingPrice,
      currency,
      duration,
      quickHighlights,
    },
    quickFacts{bestTime, difficulty, estimatedCost, perfectFor},
    trustSection, // This is Portable Text (blockContent)
    internalLinking,
    seo{metaTitle, metaDescription, keywords}
  }`;
  return client.fetch(query, { slug });
}