import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk'; // Or 'sanity/structure' depending on version package installs
import { schemaTypes } from './lib/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_fallback_id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'cnj-safaris-studio',
  title: 'CNJ Safaris Content Studio',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});