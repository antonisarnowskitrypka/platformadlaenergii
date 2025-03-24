<script setup lang="ts"></script>

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
      <button class="hidden md:flex justify-center items-center gap-2 px-4 py-2 rounded-3xl min-w-[150px] h-[48px] font-medium border-1 text-base cursor-pointer"  @click="navigateTo('/blog')">
        <span class="">Aktualności</span>
      </button>
      <button class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-3xl min-w-[150px] h-[48px] font-medium border-1 text-base cursor-pointer"  @click="navigateTo('#finish')">
        <span >Zamów demo</span>
        <img src="/images/gift.svg" class="h-[25px]" alt="gift icon" decoding="async" height="14">
      </button>
      <img src="/images/divider.svg" class="hidden sm:block h-[37px]" alt="divider" decoding="async" height="37">
      <button class="px-4 py-2 bg-black rounded-3xl text-white w-[150px] h-[48px] font-medium text-base cursor-pointer" @click="navigateTo('https://platformadlaenergii.pl/ec/login', {
  external: true
})">Zaloguj</button>

      <!-- <img src="/images/globe.svg" class="attachment-full size-full wp-image-1525" alt="lang selector" decoding="async" height="20"> -->

      

    </div>
  </div>
</header>

<div class="min-h-[800px] bg-[#FAF3EC] p-3 pt-5 sm:px-10 xl:px-15">
  <NuxtPage/>
</div>


<Footer />

</template>

<style scoped></style>
