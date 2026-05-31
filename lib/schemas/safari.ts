export default {
  name: 'safari',
  title: 'Safaris & Itineraries',
  type: 'document',
  fields: [
    { name: 'title', title: 'Safari Package Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'destination', title: 'Primary Destination', type: 'reference', to: [{ type: 'destination' }] },
    { name: 'basePrice', title: 'Estimated Base Price ($)', type: 'number' },
    { name: 'durationDays', title: 'Duration (Days)', type: 'number' },
    { name: 'featuredImage', title: 'Featured Image', type: 'image', options: { hotspot: true } },
    {
      name: 'days',
      title: 'Itinerary Days Breakdown',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'dayNumber', title: 'Day Number', type: 'number' },
            { name: 'title', title: 'Day Title', type: 'string' },
            { name: 'description', title: 'Day Description', type: 'text' },
            { name: 'activities', title: 'Activities', type: 'array', of: [{ type: 'string' }] }
          ]
        }
      ]
    }
  ],
};