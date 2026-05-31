export default {
  name: 'experience',
  title: 'Experiences & Activities',
  type: 'document',
  fields: [
    { name: 'title', title: 'Experience Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'image', title: 'Showcase Image', type: 'image', options: { hotspot: true } },
    { name: 'summary', title: 'Quick Summary Description', type: 'text' },
    { name: 'pricePerPerson', title: 'Price Add-on Amount ($)', type: 'number' },
  ],
};