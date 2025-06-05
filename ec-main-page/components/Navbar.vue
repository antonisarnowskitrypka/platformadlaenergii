<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
};

const isLangDropdownOpen = ref(false);
const languages = [
  { code: 'pl', name: 'Polski' },
  { code: 'en', name: 'English (soon)' },
  { code: 'de', name: 'Deutsch (bald)' },
];

const globeIconRef = ref<HTMLImageElement | null>(null);
const dropdownMenuRef = ref<HTMLDivElement | null>(null);

const toggleLangDropdown = () => {
  isLangDropdownOpen.value = !isLangDropdownOpen.value;
};

const selectLanguage = (langCode: string) => {
  isLangDropdownOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (isLangDropdownOpen.value) {
    const target = event.target as Node;
    const clickedOnGlobe = globeIconRef.value?.contains(target);
    const clickedOnDropdown = dropdownMenuRef.value?.contains(target);

    if (!clickedOnGlobe && !clickedOnDropdown) {
      isLangDropdownOpen.value = false;
    }
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});

</script>


<template>
  <div id="menu" class="w-full flex justify-between items-center pt-5 pb-8 px-4 sm:px-10 xl:px-15">

    <div @click="navigateTo('/')" class="flex items-center cursor-pointer group transition duration-300 ease-in-out transform hover:scale-105" title="Przejdź na stronę główną">
      <img src="/images/logoBlack.svg" alt="Logo - część tekstowa" decoding="async" class="h-[24px] sm:h-[28px] lg:h-[40px] xl:h-[55px]">
      <img src="/images/owlLogo.svg" alt="Logo - sowa" decoding="async" class="h-[24px] sm:h-[28px] lg:h-[40px] xl:h-[55px] ml-0.5">
    </div>

    <div id="menuButtons" class="flex flex-1 gap-2 sm:gap-3 md:gap-4 justify-end items-center">
      <div class="relative mr-1 sm:mr-0 md:mr-3">
        <img
            ref="globeIconRef" src="/images/globe.svg"
            alt="Wybierz język"
            decoding="async"
            class="h-[24px] sm:h-[28px] cursor-pointer"
            title="Wybierz język"
            @click="toggleLangDropdown"
        />
        <div
            ref="dropdownMenuRef" v-if="isLangDropdownOpen"
            class="absolute top-full right-0 mt-2 w-[175px] bg-white rounded-lg shadow-xl z-50 py-1 origin-top-right"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu-button"
        >
          <ul class="language-list list-none p-0 m-0">
            <li
                v-for="lang in languages"
                :key="lang.code"
                @click="selectLanguage(lang.code)"
                class="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
            >
              {{ lang.name }}
            </li>
          </ul>
        </div>
      </div>
      <img
          src="/images/envelope.svg"
          alt="Kontakt"
          decoding="async"
          class="h-[24px] sm:h-[28px] cursor-pointer mr-1 sm:mr-0 md:mr-3"
          title="Kontakt"
          @click="scrollToBottom"
      />
      <button
          class="flex justify-center items-center w-20 sm:w-[150px] h-[42px] sm:h-[48px] px-3 sm:px-4 rounded-3xl font-medium border-2 border-black text-sm sm:text-base cursor-pointer"
          @click="navigateTo('/blog')">
        <span>Blog</span>
      </button>
      <img src="/images/divider.svg" class="hidden md:block h-[37px]" alt="divider" decoding="async">
      <button
          class="flex justify-center items-center w-20 sm:w-[150px] h-[42px] sm:h-[48px] px-3 sm:px-4 bg-black rounded-3xl text-white font-medium text-sm sm:text-base cursor-pointer"
          @click="navigateTo('https://platformadlaenergii.pl/ec/login', {external: true})">
        Zaloguj
      </button>
    </div>

  </div>
</template>

<style scoped>

img.cursor-pointer:hover {
  opacity: 0.5;
}

.language-list li::before {
  content: none !important;
}

</style>
