export default {
  name: 'galleryItem',
  title: 'Gallery Assets',
  type: 'document',
  fields: [
    { name: 'caption', title: 'Photo Caption / Location Tag', type: 'string' },
    { name: 'image', title: 'High Resolution Photo Asset', type: 'image', options: { hotspot: true } },
    { name: 'category', title: 'Filter Category Tag', type: 'string', options: { list: ['Wildlife', 'Landscapes', 'Lodges', 'Cultural'] } },
  ],
};