<script setup lang="ts">

import type { SanityDocument } from "@sanity/client";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

  useSeoMeta({
            title: 'Blog',
            ogTitle: 'Blog | Platforma dla Energii - Spółdzielnie energetyczne',
            description: 'Obniż koszty energii i zyskaj pełną kontrolę nad spółdzielnią energetyczną. Oferujemy kompleksowe wsparcie, automatyczne rozliczenia i nowoczesne zarządzanie. Sprawdź, jak to działa!',
            ogDescription: 'Obniż koszty energii i zyskaj pełną kontrolę nad spółdzielnią energetyczną. Oferujemy kompleksowe wsparcie, automatyczne rozliczenia i nowoczesne zarządzanie. Sprawdź, jak to działa!',
            keywords: 'blog energetyczny, spółdzielnia energetyczna, energia odnawialna, OZE, zarządzanie energią, rozliczenia energetyczne, fakturowanie OZE, technologie OZE, zarządzanie energią w spółdzielniach, energia dla wspólnot, ekosystem energetyczny, efektywność energetyczna, zrównoważony rozwój, energia słoneczna, fotowoltaika, energia wiatrowa, rozliczenia energii, zarządzanie kosztami energii'
          });




const { projectId, dataset } = useSanity().client.config();
const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, image, publishedAt}`;

const posts = ref<SanityDocument[]>([]);

const maxRetries = 3;
let attempt = 0;

async function fetchPosts() {
  try {
    const { data } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY);

    if (data.value) {
      posts.value = data.value;
    } else if (attempt < maxRetries) {
      attempt++;
      setTimeout(fetchPosts, 500); // Retry after 500ms
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
}

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

onBeforeMount(fetchPosts);

</script>

<template>

<div id="ticker" class="w-full p-3 bg-[#3453CD] text-white sm:text-center">
    <span>
      📣 Zarejestruj spółdzielnie energetyczną do 31.12.2025 w KOWR i skorzystaj z preferencyjnych warunków rozliczania energii
    </span>
</div>

<header>
  <Navbar/>
</header>

<div class="min-h-[600px] bg-[#FAF3EC] p-3 pt-5 sm:px-10 xl:px-15">
  <NuxtPage/>

  <div class="flex flex-col gap-5 justify-center items-center mb-15">
    <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">Wszystkie posty</h2>
    <p class="text-center">Dowiedz się więcej o Spółdzielniach Energetycznych, naszym oprogramowaniu, a także nowinkach w świecie OZE.</p>
  </div>


  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 max-w-7xl mx-auto gap-8 p-8" v-if="posts && posts.length">
      <nuxt-link :to="`/blog/${post.slug.current}`" v-for="post in posts" :key="post._id" class="hover:underline border rounded-2xl border-gray-300 p-8 flex flex-col gap-3">
        <img
          v-if="post.image"
          :src="urlFor(post.image)!.url()"
          :alt="post?.title"
          class="aspect-video rounded-xl w-full"
        />
        <div>
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
        </div>
      </nuxt-link>
    </div>
    <UProgress animation="swing" v-else/>
</div>


<Footer />

</template>

<style scoped></style>
