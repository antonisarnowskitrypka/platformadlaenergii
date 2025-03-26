<template>
<main
    v-if="post"
    class="container mx-auto w-full p-8 flex flex-col gap-4 max-w-7xl"
  >
    <a href="/blog" class="hover:underline">&larr; Powrót</a>
    <img
      v-if="post.image"
      :src="urlFor(post.image)!.url()"
      :alt="post?.title"
      class="aspect-video rounded-xl w-full"

    />
    <div class="flex flex-col mb-8">
      <h1 v-if="post.title" class="text-4xl font-bold">{{ post.title }}</h1>
      <p v-if="post.publishedAt" class="text-sm">
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

import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
const { params } = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);
const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

</script>
  