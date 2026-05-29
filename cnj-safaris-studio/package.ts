import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'package',
  title: 'Safari Package',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      description: 'e.g., 7-Day Luxury Kenya Safari',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroMedia',
      title: 'Hero Image/Video',
      type: 'array',
      of: [
        { type: 'image', options: { hotspot: true } },
        { type: 'file', title: 'Video File', options: { accept: 'video/*' } } // For video uploads
      ],
      description: 'Main visual for the package page. Can be an image or a video.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'startingPrice',
      title: 'Starting Price (per person)',
      type: 'number',
      description: 'e.g., 2450 (USD). Displayed as "Starting from $X per person".',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: ['USD', 'EUR', 'GBP', 'KES'],
        layout: 'dropdown',
      },
      initialValue: 'USD',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., 7 Days / 6 Nights',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quickHighlights',
      title: 'Quick Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short, bullet-point highlights (e.g., Luxury accommodations, Big Five game drives).',
    }),
    defineField({
      name: 'emotionalDescription',
      title: 'Emotional Description',
      type: 'blockContent', // Rich text for storytelling
      description: 'Paint the experience with evocative language.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'itinerary',
      title: 'Daily Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'day',
          title: 'Day',
          fields: [
            defineField({ name: 'dayNumber', type: 'number', title: 'Day Number', validation: (Rule) => Rule.required().min(1) }),
            defineField({ name: 'title', type: 'string', title: 'Day Title', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', type: 'blockContent', title: 'Day Description' }),
            defineField({ name: 'activities', type: 'array', of: [{ type: 'string' }], title: 'Activities' }),
            defineField({ name: 'accommodation', type: 'string', title: 'Accommodation' }),
            defineField({ name: 'meals', type: 'string', title: 'Meals' }),
          ],
          preview: {
            select: {
              dayNumber: 'dayNumber',
              title: 'title',
            },
            prepare(selection) {
              const { dayNumber, title } = selection;
              return {
                title: `Day ${dayNumber}: ${title}`,
              };
            },
          },
        },
      ],
      description: 'Detailed daily breakdown of the safari.',
    }),
    defineField({
      name: 'accommodations',
      title: 'Accommodation Showcase',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'lodge',
          title: 'Lodge/Camp',
          fields: [
            defineField({ name: 'name', type: 'string', title: 'Name', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', type: 'text', title: 'Description' }),
            defineField({ name: 'images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }], title: 'Images' }),
            defineField({ name: 'website', type: 'url', title: 'Website URL' }),
          ],
        },
      ],
      description: 'Details and visuals of the accommodations used in this package.',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }], // Assuming a 'testimonial' schema exists
      description: 'Select relevant testimonials for this package.',
    }),
    defineField({
      name: 'included',
      title: 'What\'s Included',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of inclusions (e.g., Park fees, All meals, Expert guide).',
    }),
    defineField({
      name: 'notIncluded',
      title: 'What\'s Not Included',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of exclusions (e.g., International flights, Visa fees, Tips).',
    }),
    defineField({
      name: 'callToActionText',
      title: 'Call to Action Text',
      type: 'string',
      description: 'Text for the main CTA button (e.g., Plan This Safari, Get Custom Quote).',
      initialValue: 'Plan This Safari',
    }),
    defineField({
      name: 'relatedDestinations',
      title: 'Related Destinations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'destination' }] }],
      description: 'Link to destinations featured in this package.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string', description: 'Optimized for "Money Keywords" (Max 60 chars).', validation: (Rule) => Rule.max(60) }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, description: 'Include long-tail keywords and a CTA (Max 160 chars).', validation: (Rule) => Rule.max(160) }),
        defineField({ name: 'keywords', title: 'Target Keywords', type: 'array', of: [{ type: 'string' }], description: 'List of primary and long-tail keywords for this page.' }),
      ],
    }),
  ],
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'itineraryDetails', title: 'Itinerary & Accommodations' },
    { name: 'inclusionsExclusions', title: 'Inclusions & Exclusions' },
    { name: 'seo', title: 'SEO' },
  ],
});