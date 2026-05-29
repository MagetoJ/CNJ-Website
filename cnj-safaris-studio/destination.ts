import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Display Title',
      type: 'string',
      description: 'Main title for the destination page (e.g., Maasai Mara National Reserve).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'A catchy tagline for the destination.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main image for the hero section of the destination page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroGradient',
      title: 'Hero Gradient CSS Classes',
      type: 'string',
      description: 'Tailwind CSS classes for the hero section gradient (e.g., bg-gradient-to-br from-blue-900 to-indigo-900).',
    }),
    defineField({
      name: 'bestTime',
      title: 'Best Time to Visit',
      type: 'string',
      description: 'Concise text on the best season to visit (e.g., June - October).',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent', // Assuming you have a 'blockContent' type defined for rich text
      description: 'Detailed introduction and overview of the destination.',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Highlight Title' }),
            defineField({ name: 'description', type: 'text', title: 'Highlight Description' }),
            defineField({ name: 'icon', type: 'string', title: 'Icon (Emoji or URL)' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'packages',
      title: 'Packages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'package' }] }], // Reference to a 'package' document type
      description: 'Featured packages related to this destination.',
    }),
    defineField({
      name: 'quickFacts',
      title: 'Quick Facts',
      type: 'object',
      fields: [
        defineField({ name: 'bestTime', type: 'string', title: 'Best Time' }),
        defineField({ name: 'difficulty', type: 'string', title: 'Difficulty' }),
        defineField({ name: 'estimatedCost', type: 'string', title: 'Estimated Cost' }),
        defineField({ name: 'perfectFor', type: 'string', title: 'Perfect For' }),
      ],
    }),
    defineField({
      name: 'trustSection',
      title: 'Trust Section',
      type: 'blockContent',
      description: 'Content for the trust/credibility section on the page.',
    }),
    defineField({
      name: 'internalLinking',
      title: 'Internal Linking Suggestions',
      type: 'array',
      of: [{ type: 'url' }],
      description: 'URLs for related pages to link internally (e.g., /safaris/maasai-mara).',
    }),
    defineField({
      name: 'category',
      title: 'Destination Category',
      type: 'string',
      options: {
        list: [
          { title: 'National Park / Reserve', value: 'park' },
          { title: 'Beach / Coastal', value: 'beach' },
          { title: 'City / Urban', value: 'city' },
          { title: 'Niche / Experience', value: 'niche' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Optimized for "Money Keywords" (Max 60 chars).',
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Include long-tail keywords and a CTA (Max 160 chars).',
          validation: (Rule) => Rule.max(160),
        }),
        defineField({
          name: 'keywords',
          title: 'Target Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of primary and long-tail keywords for this page.',
        }),
      ],
    }),
  ],
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
});