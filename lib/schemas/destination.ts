export default {
  name: 'destination',
  title: 'Destinations',
  type: 'document',
  fields: [
    { name: 'name', title: 'Destination Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'country', title: 'Country Location', type: 'string' },
    { name: 'coverImage', title: 'Cover Background Image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Detailed Overview Text', type: 'text' },
  ],
};