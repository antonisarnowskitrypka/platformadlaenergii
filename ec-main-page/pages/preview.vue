<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <div v-html="post.body"></div>
  </div>
  <div v-else>
    <p>Loading preview...</p>
  </div>
</template>

<script setup>
const preview = useContentPreview()
const route = useRoute()

// Fetch the post based on the preview slug from query
const post = await preview.fetch({ slug: route.query.slug })
</script>
