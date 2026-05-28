import { defineType, defineField } from 'sanity'

export const safariSchema = defineType({
  name: 'safari',
  title: 'Safari Packages',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Package Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'subcategory',
      title: 'Subcategory Type',
      type: 'string',
      options: {
        list: [
          { title: 'Luxury Safaris', value: 'luxury-safaris' },
          { title: 'Family Safaris', value: 'family-safaris' },
          { title: 'Couples Safaris', value: 'couples-safaris' },
          { title: 'Group Tours', value: 'group-tours' },
          { title: 'Migration Safaris', value: 'migration-safaris' },
        ],
      },
    }),
    defineField({ name: 'bannerImage', title: 'Hero Banner Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'price', title: 'Starting Price (e.g., $1,500 pp)', type: 'string' }),
    defineField({ name: 'overview', title: 'Detailed Overview Text', type: 'text' }),
    defineField({ name: 'highlights', title: 'Itinerary Highlights Array', type: 'array', of: [{ type: 'string' }] }),
  ],
})