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
    import type { SanityDocument } from "@sanity/client";
    import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

    const params = useRoute().params; // Parametry trasy
    const post = ref<SanityDocument | null>(null); // Ref do trzymania postu

    const { projectId, dataset } = useSanity().client.config();

    const urlFor = (source) => {
      return projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;
    };

    // Zapytanie do Sanity i ustawienie metadanych w onMounted
    onMounted(async () => {
      const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
      
      try {
        const { data } = await useSanityQuery<SanityDocument>(POST_QUERY, { slug: params.slug });

        // Przypisanie załadowanych danych do zmiennej post
        post.value = data.value;

        // Ustawienie dynamicznych metadanych
        if (post.value) {
          useHead({
            title: post.value?.title + ' - Platforma dla Energii',
            meta: [
              { name: 'description', content: post.value?.description || ''},
              { name: 'keywords', content: post.value?.keywords || '' } // W przypadku braku słów kluczowych, ustaw pustą wartość
            ]
          });
        }
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
});

</script>
  