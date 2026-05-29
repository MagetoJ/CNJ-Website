import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'safari',
  title: 'Safari Packages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startingPrice',
      title: 'Starting Price (USD)',
      type: 'string',
      description: 'e.g., Starting from $2,450 per person',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., 7 Days / 6 Nights',
    }),
    defineField({
      name: 'emotionalHeadline',
      title: 'Emotional Section Headline',
      type: 'string',
    }),
    defineField({
      name: 'emotionalDescription',
      title: 'Emotional Experience Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'quickHighlights',
      title: 'Value Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'itineraryTimeline',
      title: 'Day-by-Day Expandable Journey',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'dayNumber', title: 'Day Mapping (e.g. Day 1 & 2)', type: 'string' },
            { name: 'title', title: 'Daily Dynamic Title', type: 'string' },
            { name: 'storytellingText', title: 'Activity Text', type: 'text', rows: 3 },
            { name: 'lodgeShowcase', title: 'Overnight Luxury Stay Name', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'bannerImage',
      title: 'Hero Banner Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})