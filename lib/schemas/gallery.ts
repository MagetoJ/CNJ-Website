export default {
  name: 'galleryItem',
  title: 'Location Gallery Hubs',
  type: 'document',
  icon: () => '📸', // Displays a camera emblem in the Studio sidebar for easy navigation
  fields: [
    {
      name: 'locationName',
      title: 'Location / Landmark Name',
      type: 'string',
      description: 'e.g., Mara River Crossing, Central Serengeti Plains, Gorah Elephant Camp.',
      // Safeguard: Enforces that this can never be left empty, preventing future Next.js "missing alt" errors
      validation: (Rule: any) => Rule.required().min(3).error('A descriptive location name is strictly required to protect the live layout.')
    },
    {
      name: 'destination',
      title: 'Link to Destination Ecosystem',
      type: 'reference',
      description: 'Link this entire photo chapter collection to a master destination park asset.',
      to: [{ type: 'destination' }]
    },
    {
      name: 'category',
      title: 'Filter Category Tag',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('A category selection is required to power the frontend page filter buttons.'),
      options: {
        list: [
          { title: 'Wildlife Canvas', value: 'WILDLIFE' },
          { title: 'Scenic Landscapes', value: 'LANDSCAPES' },
          { title: 'Exclusive Lodges', value: 'LODGES' },
          { title: 'Cultural Tracking', value: 'CULTURAL' }
        ],
        layout: 'radio' // Converts standard boring dropdowns into simple one-tap selection bubbles
      }
    },
    {
      name: 'images',
      title: 'Photos Collection Inside This Location',
      type: 'array',
      description: 'Drag and drop multiple images at once from your computer. The first image in this grid sequence will automatically serve as the layered album cover on your website.',
      validation: (Rule: any) => Rule.required().min(1).error('You must drop at least one high-resolution canvas capture to save this chapter.'),
      options: {
        layout: 'grid' // MAGIC TRICK: Converts a vertical text list into a beautiful drag-and-drop thumbnail workspace!
      },
      of: [
        {
          type: 'object',
          title: 'Gallery Image Entry Card',
          fields: [
            {
              name: 'image',
              title: 'Photo Asset File',
              type: 'image',
              options: {
                hotspot: true // Enables the circular focal target mask tool for clean mobile device crops
              },
              validation: (Rule: any) => Rule.required().error('An image file selection node is required.')
            },
            {
              name: 'caption',
              title: 'Caption / Wildlife Note',
              type: 'string',
              description: 'This contextual storytelling line will elegantly fade in at the bottom of the full-screen photo book reader view.'
            }
          ],
          // Configures nested thumbnail previews inside the grid array cards
          preview: {
            select: {
              title: 'caption',
              media: 'image'
            },
            prepare(selection: any) {
              const { title, media } = selection
              return {
                title: title && title.trim() !== "" ? title : 'Untitled Photo Page Card',
                media: media
              }
            }
          }
        }
      ]
    }
  ],

  // Master Studio Dashboard List Preview Configuration
  // This ensures the main document overview directory displays thumbnails and category flags visually
  preview: {
    select: {
      title: 'locationName',
      subtitle: 'category',
      media: 'images.0.image' // Grabs the very first photo item from the array for the list view icon
    },
    prepare(selection: any) {
      const { title, subtitle, media } = selection
      return {
        title: title || 'New Location Chapter Hub (Draft)',
        subtitle: subtitle ? `📖 Book Category: ${subtitle}` : '⚠️ Missing Selection Category Tag',
        media: media
      }
    }
  }
};