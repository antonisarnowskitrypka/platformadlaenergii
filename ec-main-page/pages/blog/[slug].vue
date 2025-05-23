<template>
<main
    v-if="post"
    class="container mx-auto w-full p-8 flex flex-col gap-4 max-w-7xl"
  >
    <NuxtLink to="/blog" class="hover:underline">&larr; Powrót</NuxtLink>
    <img
      v-if="post.image"
      :src="urlFor(post.image)!.url()"
      :alt="post?.title"
      class="aspect-video rounded-xl w-full"

    />
    <div class="flex flex-col mb-8">
      <h1 v-if="post.title" class="text-4xl font-bold">{{ post.title }}</h1>
      <p v-if="post.publishedAt" class="text-sm mt-2">
          Opublikowano: {{ new Date(post.publishedAt).toLocaleDateString() }}
        </p>
      </div>
    <div class="prose">

      <SanityContent v-if="post.body" :blocks="post.body" />
    </div>

    <USeparator class="my-10"/>

  </main>

  </template>
  
  <script setup lang="ts">

    import imageUrlBuilder from '@sanity/image-url';
    

    const route = useRoute(); // Parametry trasy

    const { projectId, dataset } = useSanity().client.config();

    const urlFor = (source) => {
      return projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;
    };

    const { data: post } = await useAsyncData(`post-${route.params.slug}`, () =>
      $fetch(`/api/post/${route.params.slug}`)
    );

    useSeoMeta({
      title: post.value?.title ?? 'Platforma dla energii - Spółdzielnie Energetyczne',
      description: post.value?.description ?? '',
      ogTitle: post.value?.title ?? 'Platforma dla energii - Spółdzielnie Energetyczne',
      ogDescription: post.value?.description,
      ogImage: urlFor(post.value?.image)!.url(),
      twitterCard: 'summary_large_image',
      keywords: post.value?.keywords ?? ''
    });

</script>
  