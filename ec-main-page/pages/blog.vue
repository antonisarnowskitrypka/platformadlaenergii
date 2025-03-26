<script setup lang="ts">

import type { SanityDocument } from "@sanity/client";

const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

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

onBeforeMount(fetchPosts);


</script>

<template>

<div id="ticker" class="w-full p-3 bg-[#3453CD] text-white sm:text-center">
    <span>
      📣 Zarejestruj spółdzielnie energetyczną do 31.12.2025 w KOWR i skorzystaj z preferencyjnych warunków rozliczania energii
    </span>
</div>

<header>

  

  <div id="menu" class="w-full flex justify-between items-center bg-[#FAF3EC] p-3 pt-5 sm:px-10 xl:px-15">
    <img src="/images/logo.svg"  alt="logo" decoding="async" height="90" class="h-[55px] xl:h-[75px] cursor-pointer" @click="navigateTo('/')">
    <div id="menuButtons" class="flex flex-1 gap-3 justify-end items-center">
      <button class="hidden sm:flex justify-center items-center gap-2 px-4 py-2 rounded-3xl min-w-[150px] h-[48px] font-medium border-1 text-base cursor-pointer"  @click="navigateTo('/blog')">
        <span class="">Blog</span>
      </button>
      <button class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-3xl min-w-[150px] h-[48px] font-medium border-1 text-base cursor-pointer"  @click="navigateTo('#finish')">
        <span >Zamów demo</span>
        <img src="/images/gift.svg" class="h-[14px]" alt="gift icon" decoding="async" height="14">
      </button>
      <img src="/images/divider.svg" class="hidden md:block h-[37px]" alt="divider" decoding="async" height="37">
      <button class="px-4 py-2 bg-black rounded-3xl text-white w-[150px] h-[48px] font-medium text-base cursor-pointer" @click="navigateTo('https://platformadlaenergii.pl/ec/login', {
  external: true
})">Zaloguj</button>

      <!-- <img src="/images/globe.svg" class="attachment-full size-full wp-image-1525" alt="lang selector" decoding="async" height="20"> -->

      

    </div>
  </div>
</header>

<div class="min-h-[600px] bg-[#FAF3EC] p-3 pt-5 sm:px-10 xl:px-15">
  <NuxtPage/>

  <div class="flex flex-col gap-5 justify-center items-center mb-15">
    <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">Wszystkie posty</h2>
    <p class="text-center">Dowiedz się więcej o Spółdzielniach Energetycznych, naszym oprogramowaniu, a także nowinkach w świecie OZE.</p>
  </div>


  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 max-w-7xl mx-auto gap-8 p-8" v-if="posts && posts.length">
      <div v-for="post in posts" :key="post._id" class="hover:underline border rounded-2xl border-gray-300 p-8 flex">
        <nuxt-link :to="`/blog/${post.slug.current}`">
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
        </nuxt-link>
      </div>
    </div>
    <UProgress animation="swing" v-else/>
</div>


<Footer />

</template>

<style scoped></style>
