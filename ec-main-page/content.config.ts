import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  preview: {
    enabled: true,
  },
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
