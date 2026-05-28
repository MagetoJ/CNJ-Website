import { defineConfig } from 'sanity'
import { structureTool } from "sanity/structure";
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'CNJ Safaris Backend',

  // Your exact successfully generated cloud credentials
  projectId: 'eywse04q',
  dataset: 'production',

 plugins: [
    structureTool() // Updated tool instantiation
  ],

  schema: {
    types: schemaTypes,
  },
})