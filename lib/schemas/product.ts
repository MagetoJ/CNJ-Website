import { Rule } from 'sanity';

export default {
  name: 'product',
  title: 'Marketplace Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'id',
      title: 'Unique Product ID (SKU)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Sub-Headline Description',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Full Product Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: (rule: Rule) => rule.required().min(0),
    },
    {
      name: 'category',
      title: 'Category Type',
      type: 'string',
      options: {
        list: [
          { title: 'Apparel (Hoodies/Caps)', value: 'Apparel' },
          { title: 'Travel Gear & Bags', value: 'Travel Gear' },
          { title: 'Accessories Essentials', value: 'Accessories' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Product Image File',
      type: 'image',
      options: { hotspot: true },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'reviews',
      title: 'Customer Product Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'review',
          fields: [
            { name: 'reviewerName', title: 'Reviewer Name', type: 'string' },
            { name: 'rating', title: 'Stars (1-5)', type: 'number', validation: (rule: Rule) => rule.min(1).max(5) },
            { name: 'comment', title: 'Review Commentary Text', type: 'text' },
            { name: 'reviewDate', title: 'Date Submitted', type: 'date' }
          ]
        }
      ]
    }
  ],
};