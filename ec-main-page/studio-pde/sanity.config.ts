import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Platforma dla Energii',

  projectId: 'g2jhiv3d',
  dataset: 'blog_posts',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
