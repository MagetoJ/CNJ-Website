import { defineConfig } from 'sanity'
import { structureTool } from "sanity/structure";
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'CNJ Safaris Backend',

  // Your exact successfully generated cloud credentials
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'eywse04q',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

 plugins: [
    structureTool() // Updated tool instantiation
  ],

  schema: {
    types: schemaTypes, // Now includes 'package'
  },
})