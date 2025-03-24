<template>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <div v-html="post.body"></div>
    </div>
    <div v-else>
      <p>Loading post...</p>
    </div>
  </template>
  
  <script setup>
  const { slug } = useRoute().params
  
  const post = await useContent().fetch({ slug })
  </script>
  