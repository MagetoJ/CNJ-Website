export default {
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'mainImage', title: 'Featured Image', type: 'image', options: { hotspot: true } },
    { name: 'excerpt', title: 'Short Excerpt', type: 'text', rows: 3 },
    { name: 'body', title: 'Body Content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
  ],
};