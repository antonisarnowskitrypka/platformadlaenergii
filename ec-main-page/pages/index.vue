<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

useSeoMeta({
  title: 'Spółdzielnie energetyczne – Platforma dla Energii',
  ogTitle: 'Strona Główna | Platforma dla Energii - Spółdzielnie energetyczne',
  description: ' Zakładanie i obsługa spółdzielni energetycznych. Doradztwo prawne, administracyjne i techniczne – sprawdź, jak możemy pomóc.',
  ogDescription: 'Obniż koszty energii i zyskaj pełną kontrolę nad spółdzielnią energetyczną. Oferujemy kompleksowe wsparcie, automatyczne rozliczenia i nowoczesne zarządzanie. Sprawdź, jak to działa!',
  keywords: 'spółdzielnie energetyczne, energia odnawialna, wspólnota energetyczna, energetyka rozproszona, spółdzielnia energetyczna, energia lokalna, współpraca energetyczna, instalacje fotowoltaiczne, energetyka wiatrowa, zielona energia, energia słoneczna, OZE, odnawialne źródła energii, panele fotowoltaiczne, sieci energetyczne, wspólne inwestycje w energię, efektywność energetyczna, zarządzanie energią, audyt energetyczny, zrównoważony rozwój, energia dla społeczności, ekosystem energetyczny, energetyka wspólnotowa, energia geotermalna, magazynowanie energii, systemy zarządzania energią, rozwój rynku energii odnawialnej, integracja OZE, rynki energii, zmiana klimatu, zielona transformacja, alternatywne źródła energii, transformacja energetyczna, wspólne rozwiązania energetyczne, mikroinstalacje OZE, dotacje na fotowoltaikę, edukacja energetyczna, polityka energetyczna, zarządzanie zasobami energetycznymi, nowoczesne technologie energetyczne, samowystarczalność energetyczna, energooszczędność, transformacja w kierunku OZE, innowacje w energetyce, inteligentne sieci energetyczne, mikroenergetyka, zielona energia dla społeczności, lokalna produkcja energii, spółdzielnia odnawialnych źródeł energii, energetyka prosumencka, infrastruktura energetyczna, zrównoważona energia, inteligentne zarządzanie energią, inteligentne domy, przyszłość energii odnawialnej, platforma zarządzania energią, zarządzanie fakturami w spółdzielni energetycznej, platforma do rozliczeń energetycznych, rozliczenia energetyczne, fakturowanie OZE, system fakturowania w spółdzielniach energetycznych, rozliczenia za energię, zarządzanie kosztami energii, systemy rozliczeń energetycznych, fakturowanie wspólnot energetycznych, rozliczenia energii elektrycznej, automatyczne rozliczenia energii, zarządzanie fakturami OZE'
});

const currentIndex = ref(0);

const testimonials = [
  {
    text: "Wdrożenie Platformy dla Energii pozwoliło na przyspieszenie oraz zautomatyzowanie procesu rozliczeń i zastąpienie rozwiązania w postaci arkusza kalkulacyjnego na przystępną aplikację sieciową. Członkowie spółdzielni uzyskali stały dostęp do danych, w szczególności rozliczeniowych związanych z ich udziałem w spółdzielni.",
    author: "Grzegorz Horwacik - prezes SE Skawina"
  },
  {
    text: "Platforma dla Energii oraz zaproponowane przez C4E rozwiązania systemowe umożliwiły nam automatyzację wielu procesów w naszej spółdzielni. Bez tego systemu, musielibyśmy zmagać się ze znacznymi trudnościami oraz poświęcać dużo czasu na radzenie sobie z wyzwaniami, które stoją przed naszą organizacją.",
    author: "Stanisław Kracik - były prezes SE Niepołomice"
  },
  {
    text: "Dzięki Platformie dla Energii możemy łatwo przeprowadzać wewnętrzne rozliczenia oraz przejrzyście przekazywać dane członkom ze wszystkich punktów produkcji i poboru. Nasza działalność rozpoczęła się od niewielkich źródeł wytwórczych, co pozwoliło nam wypracować efektywny system rozliczeń. W najbliższych latach planujemy rozwój, opierając się na nowych źródłach wytwórczych oraz własnych inwestycjach. Wspólnie z Platformą dla Energii poszukujemy nowoczesnych rozwiązań, które umożliwią przyjazne zarządzanie energią w ramach spółdzielni energetycznych.",
    author: "Krzysztof Białas - prezes Spółdzielni Energetycznej Czerwonak"
  },
  {
    text: "Platforma dla Energii to partner, na którym można polegać w każdym aspekcie związanym z obsługą społeczności elektroenergetycznych. Firma wyróżnia się profesjonalnym podejściem do rozliczeń energii elektrycznej, co gwarantuje transparentność i rzetelność rozliczeń. Dedykowany opiekun jest zawsze dostępny pod telefonem, co sprawia, że każda kwestia czy wątpliwość zostaje szybko i indywidualnie rozwiązana. Takie podejście pozwala na elastyczne reagowanie na potrzeby klienta, a także na budowanie zaufania i długofalowej relacji. Podsumowując, Platforma dla Energii to firma, która dzięki profesjonalizmowi, innowacyjności oraz doskonałej obsłudze klienta, stanowi wzór dla branży energetycznej.",
    author: "Sylwester Sobieraj - prezes Wierzchosławickiej Spółdzielni Energetycznej"
  }
];

const articles = [
  {
    title: "Spółdzielnie energetyczne – potencjał, wyzwania i zasady rozliczeń",
    link: "https://www.portalsamorzadowy.pl/gospodarka-komunalna/spoldzielnie-energetyczne-potencjal-wyzwania-i-zasady-rozliczen,613786.html?mp=promo",
    image: "/images/article5.webp"
  },
  {
    title: "Nowe technologie otwierają drogę do innowacji w zarządzaniu energią",
    link: "https://swiatoze.pl/nowe-technologie-otwieraja-droge-do-innowacji-w-zarzadzaniu-energia/",
    image: "/images/article1.webp"
  },
  {
    title: "Rewolucja w zarządzaniu energią",
    link: "https://wysokienapiecie.pl/100890-rewolucja-w-zarzadzaniu-energia/",
    image: "/images/article2.webp"
  },
  {
    title: "Spółdzielnie energetyczne: nowe możliwości",
    link: "https://www.gramwzielone.pl/trendy/20206639/spoldzielnie-energetyczne-nowe-mozliwosci",
    image: "/images/article3.webp"
  },
  {
    title: "Spółdzielnie energetyczne: Niższe ceny prądu dla społeczności",
    link: "https://www.gramwzielone.pl/trendy/20211640/spoldzielnie-energetyczne-nizsze-ceny-pradu-dla-spolecznosci",
    image: "/images/article4.webp"
  }
];

const movies = [
  {
    title: "Czym jest spółdzielnia energetyczna i jak ją założyć?",
    link: "https://www.youtube.com/watch?v=0hi3uEHom_E",
    image: "/images/yt-ss1.webp"
  },
  {
    title: "Jakie korzyści wynikają z założenia spółdzielni energetycznej?",
    link: "https://www.youtube.com/watch?v=xX0wv2LUCKE",
    image: "/images/yt-ss1.webp"
  },
  {
    title: "Zasady rozliczania energii elektrycznej w spółdzielni energetycznej",
    link: "https://www.youtube.com/watch?v=67VVQyUGOCA",
    image: "/images/yt-ss1.webp"
  }
];

const trustedLogos = [
  { name: 'Eisall Energy', imageSrc: '/images/eisall-energy.svg' }, // Corresponds to the first logo in your screenshot
  { name: 'Niepołomice', imageSrc: '/images/niepolomice.svg' },
  { name: 'SEC Spółdzielnia Energetyczna Czerwonak', imageSrc: '/images/SEC.svg' },
  { name: 'Wierzchosławice', imageSrc: '/images/wierzchoslawice.svg' },
  { name: 'Żerkowska', imageSrc: '/images/zerkowska.svg' },
  { name: 'Skawina', imageSrc: '/images/skawina.svg' },
  { name: 'Lokalna', imageSrc: '/images/lokalna.svg' },
  { name: 'Krajna', imageSrc: '/images/krajna.jpg' }
];

const isKowrPopupVisible = ref(true);

const hideKowrPopup = () => {
  isKowrPopupVisible.value = false;
};

const showKowrPopup = () => {
  isKowrPopupVisible.value = true;
};

const testimonialCurrentIndex = ref(0);
const numTestimonials = computed(() => testimonials.length);
const visibleSlots = ref(3); // Default to 3 for desktop

const updateVisibleSlots = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 768) { // Tailwind's 'md' breakpoint
      visibleSlots.value = 1;
    } else {
      visibleSlots.value = 3;
    }
  }
  // Ensure testimonialCurrentIndex is valid after visibleSlots change
  if (testimonialCurrentIndex.value > numTestimonials.value - visibleSlots.value && numTestimonials.value > visibleSlots.value) {
    testimonialCurrentIndex.value = numTestimonials.value - visibleSlots.value;
  } else if (numTestimonials.value <= visibleSlots.value) {
    testimonialCurrentIndex.value = 0;
  }
  // Ensure testimonialCurrentIndex is not negative if all items fit
  if (testimonialCurrentIndex.value < 0) {
    testimonialCurrentIndex.value = 0;
  }
};

onMounted(() => {
  updateVisibleSlots();
  window.addEventListener('resize', updateVisibleSlots);
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateVisibleSlots);
  }
});

const canGoPrevTestimonial = computed(() => testimonialCurrentIndex.value > 0 && numTestimonials.value > 0); // Renamed
const canGoNextTestimonial = computed(() => numTestimonials.value > 0 && testimonialCurrentIndex.value < numTestimonials.value - visibleSlots.value); // Renamed

const prevTestimonial = () => {
  if (canGoPrevTestimonial.value) { // Renamed
    testimonialCurrentIndex.value--; // Renamed
  }
};

const nextTestimonial = () => {
  if (canGoNextTestimonial.value) { // Renamed
    testimonialCurrentIndex.value++; // Renamed
  }
};

const displayedTestimonials = computed(() => {
  if (numTestimonials.value === 0) return [];
  const end = testimonialCurrentIndex.value + visibleSlots.value; // Renamed
  return testimonials.slice(testimonialCurrentIndex.value, end); // Renamed
});


// ARTICLES
const articleCurrentIndex = ref(0);
const articlesConstArray = articles;
const numArticles = computed(() => articlesConstArray.length);
const articleVisibleSlots = ref(3);

const updateArticleVisibleSlots = () => {
  let count = 3;
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 768) {
      count = 1;
    }
  }
  articleVisibleSlots.value = count;

  const maxIndex = Math.max(0, numArticles.value - articleVisibleSlots.value);
  if (articleCurrentIndex.value > maxIndex) {
    articleCurrentIndex.value = maxIndex;
  }
  if (articleCurrentIndex.value < 0) {
    articleCurrentIndex.value = 0;
  }
};

onMounted(() => {
  updateArticleVisibleSlots();
  window.addEventListener('resize', updateArticleVisibleSlots);
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateArticleVisibleSlots);
  }
});

const canGoPrevArticle = computed(() => {
  return articleCurrentIndex.value > 0;
});

const canGoNextArticle = computed(() => {
  return articleCurrentIndex.value < (numArticles.value - articleVisibleSlots.value);
});

const prevArticle = () => {
  if (canGoPrevArticle.value) {
    articleCurrentIndex.value--;
  }
};

const nextArticle = () => {
  if (canGoNextArticle.value) {
    articleCurrentIndex.value++;
  }
};

const displayedArticles = computed(() => {
  if (numArticles.value === 0) {
    return [];
  }
  const start = articleCurrentIndex.value;
  const end = start + articleVisibleSlots.value;
  return articlesConstArray.slice(start, end);
});

const gridContainerClasses = computed(() => {
  const classes = ['grid', 'gap-4', 'grid-cols-1']; // Base classes that are always applied
  if (articleVisibleSlots.value === 3) {
    classes.push('md:grid-cols-3');
  }
  return classes;
});

function getBackgroundImagePositionClass(index) {
  if (index === 0) {
    return 'bg-right';
  } else if (index === 1) {
    return 'bg-bottom';
  } else {
    return 'bg-center';
  }
}

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
};

</script>

<template>

  <header class="bg-[#F3F5F7]">
    <Navbar/>

    <div class="bg-white w-full rounded-t-[60px]">
      <div class="max-w-[1680px] mx-auto flex flex-col lg:flex-row items-center lg:justify-start lg:gap-x-32 pt-28 lg:pt-[140px] pb-28 lg:pb-[145px] px-6 sm:px-12 md:px-[106px] min-h-[auto] lg:min-h-[809px]">

        <div class="lg:w-[800px] text-center lg:text-left mb-10 lg:mb-0">
          <h2 class="text-4xl xl:text-5xl font-semibold text-gray-800 mb-6">
            Zakładamy, zarządzamy, rozliczamy spółdzielnie energetyczne!
          </h2>
          <p class="text-2xl xl:text-3xl text-gray-600 mb-8">
            Energia dla członków, administracja dla nas - kompleksowa obsługa spółdzielni
          </p>
          <button
              class="bg-[#212121] hover:bg-neutral-700 text-white font-medium py-3 px-14 rounded-3xl text-lg transition duration-300 ease-in-out transform hover:scale-105"
              @click="scrollToBottom">
            Dowiedz się Więcej
          </button>
        </div>

        <div class="flex-1 flex justify-center lg:justify-end">
          <img src="/images/owl-on-solar-farm.png" alt="Sowa na farmie fotowoltaicznej"
               class="w-full max-w-lg xl:max-w-2xl h-auto max-h-[400px] lg:max-h-[500px] xl:max-h-[550px] object-contain"/>
        </div>

      </div>
    </div>
  </header>

  <div id="benefits-detailed" class="w-full min-h-[902px] py-[80px] px-6 sm:px-12 md:px-[106px] flex flex-col items-center"
       style="background: linear-gradient(180deg, #FFFFFF 0%, #F2F9FF 26.67%, #FFFFFF 100%);">

    <div class="flex flex-col items-center text-center gap-6 sm:gap-8 lg:gap-10 max-w-6xl lg:max-w-7xl mx-auto">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-gray-900">
        Spółdzielnia energetyczna - jakie korzyści i dla kogo?
      </h2>
      <p class="text-base sm:text-lg lg:text-xl lg:text-left text-gray-700">
        Członkowie spółdzielni energetycznych zyskują przede wszystkim niższe i stabilne koszty energii dzięki wykorzystaniu lokalnych źródeł odnawialnych i zwolnieniu z części opłat dystrybucyjnych. To zwiększa bezpieczeństwo energetyczne i niezależność energetyczną społeczności. Dodatkowo, mają oni realny wpływ na ceny i sposób rozliczeń, a także przyczyniają się do ochrony środowiska, aktywizując jednocześnie lokalną społeczność.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-4 lg:gap-y-6 mt-12 sm:mt-16 w-full max-w-6xl lg:max-w-7xl mx-auto">

      <div class="flex items-start gap-4 lg:gap-5 p-4 sm:p-6 lg:p-8">
        <img src="/images/icon11.svg" alt="Niższe koszty energii ikona" class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-blue-600 shrink-0 mt-1 lg:mt-2">
        <div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2 lg:mb-3">Niższe i stabilne koszty energii</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-700">Dzięki wykorzystaniu lokalnych źródeł odnawialnych i zwolnieniu z części opłat dystrybucyjnych</p>
        </div>
      </div>

      <div class="flex items-start gap-4 lg:gap-5 p-4 sm:p-6 lg:p-8">
        <img src="/images/icon12.svg" alt="Bezpieczeństwo energetyczne ikona" class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-blue-600 shrink-0 mt-1 lg:mt-2">
        <div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2 lg:mb-3">Większe bezpieczeństwo energetyczne</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-700">Uniezależnienie społeczności od zewnętrznych dostawców i wahań cen energii</p>
        </div>
      </div>

      <div class="flex items-start gap-4 lg:gap-5 p-4 sm:p-6 lg:p-8">
        <img src="/images/icon13.svg" alt="Wpływ na ceny ikona" class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-blue-600 shrink-0 mt-1 lg:mt-2">
        <div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2 lg:mb-3">Realny wpływ na ceny i sposób rozliczeń</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-700">Członkowie spółdzielni mają możliwość współdecydowania o działaniu spółdzielni energetycznej</p>
        </div>
      </div>

      <div class="flex items-start gap-4 lg:gap-5 p-4 sm:p-6 lg:p-8">
        <img src="/images/icon14.svg" alt="Ochrona środowiska ikona" class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-blue-600 shrink-0 mt-1 lg:mt-2">
        <div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2 lg:mb-3">Ochrona środowiska</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-700">Zmniejszenie emisji CO₂ i rozwój energetyki odnawialnej w regionie</p>
        </div>
      </div>

      <div class="flex items-start gap-4 lg:gap-5 p-4 sm:p-6 lg:p-8">
        <img src="/images/icon15.svg" alt="Aktywizacja społeczności ikona" class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-blue-600 shrink-0 mt-1 lg:mt-2">
        <div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2 lg:mb-3">Aktywizacja lokalnej społeczności</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-700">Wspólne działania na rzecz zrównoważonego rozwoju i integracji mieszkańców</p>
        </div>
      </div>

      <div class="flex items-start gap-4 lg:gap-5 p-4 sm:p-6 lg:p-8">
        <img src="/images/icon16.svg" alt="Dofinansowania ikona" class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-blue-600 shrink-0 mt-1 lg:mt-2">
        <div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2 lg:mb-3">Dofinansowania i wsparcie</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-700">Skorzystaj ze wsparcia finansowego na rozwój swojej spółdzielni energetycznej</p>
        </div>
      </div>

    </div>
  </div>

  <div class="bg-[#FFFFFF] flex flex-col gap-9 lg:gap-12 py-10 px-5 sm:p-15 lg:p-20 items-center">
    <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">Oferta dla spółdzielni energetycznej</h2>

    <div class="flex flex-wrap justify-evenly items-center gap-2 lg:gap-3 md:justify-center md:border border-[#DADEE3] p-1 lg:p-2 rounded-full w-fit">
      <button @click='currentIndex = 0' :class="`py-2 px-5 lg:py-3 lg:px-6 rounded-3xl w-fit text-sm lg:text-base font-medium border sm:border-0 transition cursor-pointer ${currentIndex === 0 ? 'bg-[#212121] text-white' : 'border-[#3453CD] text-[#3453CD] sm:text-inherit' }`">Zakładnie Spółdzielni</button>
      <button @click='currentIndex = 1' :class="`py-2 px-5 lg:py-3 lg:px-6 rounded-3xl w-fit text-sm lg:text-base font-medium border sm:border-0 transition cursor-pointer ${currentIndex === 1 ? 'bg-[#212121] text-white' : 'border-[#3453CD] text-[#3453CD] sm:text-inherit' }`">Zarządzanie Spółdzielnią</button>
      <button @click='currentIndex = 2' :class="`py-2 px-5 lg:py-3 lg:px-6 rounded-3xl w-fit text-sm lg:text-base font-medium border sm:border-0 transition cursor-pointer ${currentIndex === 2 ? 'bg-[#212121] text-white' : 'border-[#3453CD] text-[#3453CD] sm:text-inherit' }`">System rozliczeniowy</button>
    </div>

    <div class="bg-white p-5 sm:p-0 gap-5 lg:gap-8 flex flex-col lg:flex-row rounded-3xl sm:items-center lg:justify-between overflow-hidden w-full max-w-[1200px] lg:max-w-[1400px] lg:min-h-[464px]" v-if="currentIndex === 0">
      <div class="flex flex-col gap-5 sm:p-8 lg:p-10 xl:p-11">
        <h3 class="font-medium leading-8 text-2xl lg:text-3xl">Jak założyć spółdzielnię energetyczną</h3>
        <ul class="text-xl leading-8 lg:text-2xl lg:leading-9">
          <li>Ocena możliwości założenia spółdzielni</li>
          <li>Analiza bilansu energetycznego spółdzielni</li>
          <li>Obsługa formalności i rejestracji w KOWR i KRS</li>
          <li>Negocjacje ze sprzedawcą energii</li>
          <li>Opracowanie strategii rozwoju spółdzielni energetycznej</li>
          <li>Przygotowanie wniosków wraz z załącznikami o dofinansowanie dla spółdzielni</li>
        </ul>
      </div>
      <img src="/images/handshake.jpeg" class='flex lg:hidden rounded-3xl w-full sm:w-[500px] h-fit' alt="Uścisk dłoni symbolizujący zakładanie spółdzielni"/>
      <div class="w-[400px] lg:w-[480px] bg-[url(/images/handshake.jpeg)] bg-cover self-stretch hidden lg:block"/>
    </div>

    <div class="bg-white p-5 sm:p-0 gap-5 lg:gap-8 flex flex-col lg:flex-row rounded-3xl sm:items-center lg:justify-between overflow-hidden w-full max-w-[1200px] lg:max-w-[1400px] lg:min-h-[464px]" v-if="currentIndex === 1">
      <div class="flex flex-col gap-5 sm:p-8 lg:p-10 xl:p-11">
        <h3 class="font-medium leading-8 text-2xl lg:text-3xl">Ułatwiamy codzienną obsługę</h3>
        <ul class="text-xl leading-8 lg:text-2xl lg:leading-9">
          <li>Obsługa rozliczeń członków i fakturowanie</li>
          <li>Obsługa reklamacji do Spółki Obrotu Energią</li>
          <li>Konsultacje z ekspertami i rekomendacje rozwoju spółdzielni</li>
          <li>Analiza doboru nowych członków spółdzielni energetycznej</li>
          <li>Wsparcie w spełnianiu wymogów prawnych, pomagamy dbać o zgodność z przepisami</li>
          <li>Przygotowanie comiesięcznych raportów i sprawozdania rocznego do KOWR</li>
        </ul>
      </div>
      <img src="/images/laptop.webp" class='flex lg:hidden rounded-3xl w-full sm:w-[500px] h-fit' alt="Laptop symbolizujący zarządzanie spółdzielnią"/>
      <div class="w-[400px] lg:w-[480px] bg-[url(/images/laptop.webp)] bg-cover self-stretch bg-right hidden lg:block"/>
    </div>

    <div class="bg-white p-5 sm:p-0 gap-5 lg:gap-8 flex flex-col lg:flex-row rounded-3xl sm:items-center lg:justify-between overflow-hidden w-full max-w-[1200px] lg:max-w-[1400px] lg:min-h-[464px]" v-if="currentIndex === 2">
      <div class="flex flex-col gap-5 sm:p-8 lg:p-10 xl:p-11">
        <h3 class="font-medium leading-8 text-2xl lg:text-3xl">Pełna automatyzacja i wygoda</h3>
        <ul class="text-xl leading-8 lg:text-2xl lg:leading-9">
          <li>Dostęp 24/7 – zarządzanie spółdzielnią energetyczną z każdego miejsca</li>
          <li>Automatyczne pobieranie danych i fakturowanie energii</li>
          <li>Precyzyjne rozliczenia i bezpieczeństwo danych</li>
          <li>Zarządzanie członkami i umowami</li>
          <li>Intuicyjny interfejs i prosta obsługa</li>
        </ul>
      </div>
      <img src="/images/tablety.svg" class="block rounded-3xl w-full sm:w-[500px] lg:w-[600px] h-fit object-contain" alt="Tablety symbolizujące system rozliczeniowy"/>
    </div>

  </div>

  <div id="benefits" class="w-full min-h-[1172px] py-[80px] px-6 sm:px-12 md:px-[106px] flex flex-col items-center"
       style="background: linear-gradient(180deg, #FFFFFF 0%, #F2F9FF 26.67%, #FFFFFF 100%);">

    <div class="flex flex-col items-center text-center gap-6 sm:gap-12 lg:gap-14 max-w-6xl lg:max-w-7xl mx-auto">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-gray-900">
        System do rozliczeń spółdzielni energetycznych – nr 1 w Polsce!
      </h2>
      <p class="text-base sm:text-lg lg:text-xl lg:text-left text-gray-700">
        Zautomatyzuj rozliczanie energii w spółdzielni energetycznej! Nasz system automatycznie pobiera dane pomiarowe, generuje raporty i obsługuje fakturowanie,
        zapewniając precyzyjne i zgodne z przepisami rozliczenia. Proste i intuicyjne procesy powodują, że nie potrzebujesz specjalistycznej wiedzy, aby korzystać z systemu do rozliczeń spółdzielni energetycznej.
      </p>
    </div>

    <div class="mt-12 sm:mt-16 w-full max-w-6xl lg:max-w-7xl mx-auto flex flex-col gap-4 lg:gap-8">

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg lg:max-w-6xl mx-auto">
        <div class="bg-[#A0DAED] p-4 sm:p-6 lg:p-8 rounded-4xl text-left flex flex-col h-auto sm:h-[300px] lg:h-auto border border-[#DADEE3] w-full mx-auto">
          <div class="w-12 h-12 mb-3 sm:w-16 sm:h-16 sm:mb-4 lg:w-20 lg:h-20 lg:mb-5 rounded-full flex items-center justify-center">
            <img src="/images/icon17.svg" alt="Raportowanie ikona" class="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain">
          </div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Raportowanie</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600">Tworzenie raportów dotyczących rozliczeń spółdzielni.</p>
        </div>

        <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-4xl text-left border border-gray-200 shadow-sm flex flex-col h-auto sm:h-[300px] lg:h-auto w-full mx-auto">
          <div class="w-12 h-12 mb-3 sm:w-16 sm:h-16 sm:mb-4 lg:w-20 lg:h-20 lg:mb-5 rounded-full flex items-center justify-center">
            <img src="/images/icon18.svg" alt="Aktywacja członków ikona" class="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain text-gray-800">
          </div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Aktywacja członków</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600">Proces dołączania i aktywowania członków w spółdzielni.</p>
        </div>

        <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-4xl text-left border border-gray-200 shadow-sm flex flex-col h-auto sm:h-[300px] lg:h-auto w-full mx-auto">
          <div class="w-12 h-12 mb-3 sm:w-16 sm:h-16 sm:mb-4 lg:w-20 lg:h-20 lg:mb-5 rounded-full flex items-center justify-center">
            <img src="/images/icon19.svg" alt="Fakturowanie ikona" class="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain text-gray-800">
          </div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Fakturowanie</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600">Obsługa fakturowania i samofakturowania w spółdzielni energetycznej.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-2 lg:gap-4">
        <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-4xl text-left border border-gray-200 shadow-sm flex flex-col h-auto sm:h-[360px] lg:h-auto">
          <div class="w-12 h-12 mb-3 sm:w-16 sm:h-16 sm:mb-4 lg:w-20 lg:h-20 lg:mb-5 rounded-full flex items-center justify-center">
            <img src="/images/icon20.svg" alt="Automatyczne pobieranie danych ikona" class="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain text-gray-800">
          </div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Automatyczne pobieranie danych</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600">Zautomatyzowany proces pobierania danych pomiarowych.</p>
        </div>

        <div class="bg-[#A0DAED] p-4 sm:p-6 lg:p-8 rounded-4xl text-left flex flex-col h-auto sm:h-[360px] lg:h-auto border border-[#DADEE3]">
          <img src="/images/icon21.svg" alt="Precyzyjne rozliczanie ikona" class="w-12 h-12 mb-3 sm:w-16 sm:h-16 sm:mb-4 lg:w-16 lg:h-16 lg:mb-5 object-contain">
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Precyzyjne rozliczanie</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600">Precyzyjne rozliczanie energii na poziomie spółdzielni energetycznej i PPE.</p>
        </div>

        <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-4xl text-left border border-gray-200 shadow-sm flex flex-col h-auto sm:h-[360px] lg:h-auto">
          <div class="w-12 h-12 mb-3 sm:w-16 sm:h-16 sm:mb-4 lg:w-20 lg:h-20 lg:mb-5 rounded-full flex items-center justify-center">
            <img src="/images/icon22.svg" alt="Grupowanie członków ikona" class="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain text-gray-800">
          </div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Grupowanie członków</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600">Tworzenie elastycznych grup rozliczeniowych i transparentne rozliczenia między członkami.</p>
        </div>

        <div class="bg-[#A0DAED] p-4 sm:p-6 lg:p-8 rounded-4xl text-left flex flex-col h-auto sm:h-[360px] lg:h-auto border border-[#DADEE3]">
          <img src="/images/icon23.svg" alt="Zgodność z przepisami ikona" class="w-12 h-12 mb-3 sm:w-16 sm:h-16 sm:mb-4 lg:w-16 lg:h-16 lg:mb-5 object-contain">
          <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Zgodność z przepisami</h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600">System działa zgodnie z obowiązującymi regulacjami prawnymi dotyczącymi rozliczeń energii.</p>
        </div>
      </div>
    </div>
  </div>

  <div id="opinions" class="bg-[#FFFFFF] flex flex-col items-center gap-16 lg:gap-20 py-[30px] lg:py-[50px] px-6 sm:px-12 md:px-[106px]">
    <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">Co o nas mówią</h2>
    <div class="relative w-full max-w-6xl lg:max-w-7xl">
      <button
          @click="prevTestimonial"
          :disabled="!canGoPrevTestimonial"
          aria-label="Poprzednia opinia"
          class="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-7 md:-left-14 lg:-left-22 transform w-12 h-12 lg:w-14 lg:h-14 rounded-full text-gray-700 flex items-center
         justify-center z-20 cursor-pointer transition-all duration-150 ease-in-out hover:text-gray-900 hover:scale-160 disabled:text-gray-300 disabled:opacity-25 disabled:cursor-not-allowed disabled:scale-100">
        <img src="/images/arrowleft.svg" alt="Poprzednia" class="w-8 h-8 lg:w-10 lg:h-10" />
      </button>

      <div class="w-full overflow-hidden">
        <div class="flex flex-row -mx-2">
          <div
              v-for="(item, index) in displayedTestimonials"
              :key="testimonialCurrentIndex + index"
              class="w-full flex-shrink-0 transition-all duration-300 ease-in-out px-2 box-border"
              :class="{
          'md:w-1/3': visibleSlots === 3,
          'sm:w-full w-full': visibleSlots === 1
        }">
            <div class="bg-[#F3F5F7] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col h-full min-h-[300px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[420px]">
              <p class="italic text-[15px] sm:text-[16px] lg:text-lg flex-grow text-gray-700 leading-relaxed">{{ item.text }}</p>
              <span class="font-medium mt-4 lg:mt-5 text-gray-800 text-sm sm:text-base lg:text-lg">{{ item.author }}</span>
            </div>
          </div>
        </div>
      </div>

      <button
          @click="nextTestimonial"
          :disabled="!canGoNextTestimonial"
          aria-label="Następna opinia"
          class="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 md:-right-16 lg:-right-24 transform w-12 h-12 lg:w-14 lg:h-14 rounded-full text-gray-700 flex items-center
         justify-center z-20 cursor-pointer transition-all duration-150 ease-in-out hover:text-gray-900 hover:scale-160 disabled:text-gray-300 disabled:opacity-25 disabled:cursor-not-allowed disabled:scale-100">
        <img src="/images/arrowright.svg" alt="Następnaa" class="w-8 h-8 lg:w-10 lg:h-10" />
      </button>
    </div>
  </div>

  <div id="articles" class="bg-[#FAFAFA] flex flex-col gap-9 py-10 px-5 sm:p-15 xl:p-40">
    <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">Artykuły</h2>

    <div class="relative w-full max-w-screen-2xl mx-auto mt-5">
      <button
          @click="prevArticle"
          :disabled="!canGoPrevArticle"
          aria-label="Poprzedni artykuł"
          class="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-8 md:-left-16 lg:-left-24 transform w-12 h-12 rounded-full text-gray-700 flex items-center justify-center z-20 cursor-pointer transition-all duration-150 ease-in-out hover:text-gray-900 hover:scale-110 disabled:text-gray-300 disabled:opacity-25 disabled:cursor-not-allowed disabled:scale-100"
      >
        <img src="/images/arrowleft.svg" alt="Poprzedni" class="w-8 h-8" />
      </button>

      <div class="w-full overflow-hidden">
        <div :class="gridContainerClasses">
          <div
              v-for="(item, index) in displayedArticles"
              :key="item.link"
              class="flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <a :href="item.link" target="_blank" class="w-full h-full flex flex-col">
              <div
                  :style="{ backgroundImage: `url(${item.image})` }"
                  :class="['h-[250px] sm:h-[300px] w-full bg-cover flex-shrink-0', getBackgroundImagePositionClass(index)]"
              >
              </div>
              <div class="p-4 sm:p-5 flex flex-col flex-grow">
                <p class="font-medium text-gray-800 flex-grow">
                  {{ item.title }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <button
          @click="nextArticle"
          :disabled="!canGoNextArticle"
          aria-label="Następny artykuł"
          class="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 md:-right-16 lg:-right-24 transform w-12 h-12 rounded-full text-gray-700 flex items-center justify-center z-20 cursor-pointer transition-all duration-150 ease-in-out hover:text-gray-900 hover:scale-110 disabled:text-gray-300 disabled:opacity-25 disabled:cursor-not-allowed disabled:scale-100"
      >
        <img src="/images/arrowright.svg" alt="Następny" class="w-8 h-8" />
      </button>
    </div>

  </div>

  <div id="movies" class="bg-[#FAFAFA] flex flex-col gap-9 xl:gap-12 py-10 px-5 sm:p-15 xl:p-24 !pt-0">
    <h2 class="text-3xl sm:text-4xl xl:text-5xl font-medium text-center leading-10">Filmy szkoleniowe</h2>
    <div class="hidden lg:flex gap-5 xl:gap-6 justify-center">
      <a class="w-[400px] xl:w-[480px] shrink-0 rounded-3xl bg-white flex flex-col gap-3 xl:gap-4 p-0 overflow-hidden"
         id="movie-1" href="https://www.youtube.com/watch?v=0hi3uEHom_E">
        <div class="h-[210px] xl:h-[250px] w-full bg-[url(/images/yt-ss1.webp)] bg-cover bg-bottom"/>
        <p class="p-6 pt-3 xl:p-7 xl:pt-4 font-medium xl:text-lg">Czym jest spółdzielnia energetyczna i jak ją założyć?</p>
      </a>
      <a class="w-[400px] xl:w-[480px] shrink-0 rounded-3xl bg-white flex flex-col gap-3 xl:gap-4 p-0 overflow-hidden"
         id="movie-2" href="https://www.youtube.com/watch?v=xX0wv2LUCKE">
        <div class="h-[210px] xl:h-[250px] w-full bg-[url(/images/yt-ss1.webp)] bg-cover bg-bottom"/>
        <p class="p-6 pt-3 xl:p-7 xl:pt-4 font-medium xl:text-lg">Jakie korzyści wynikają z założenia spółdzielni energetycznej?</p>
      </a>
      <a class="w-[400px] xl:w-[480px] shrink-0 rounded-3xl bg-white flex flex-col gap-3 xl:gap-4 p-0 overflow-hidden"
         id="movie-3" href="https://www.youtube.com/watch?v=67VVQyUGOCA">
        <div class="h-[210px] xl:h-[250px] w-full bg-[url(/images/yt-ss1.webp)] bg-cover bg-bottom"/>
        <p class="p-6 pt-3 xl:p-7 xl:pt-4 font-medium xl:text-lg">Zasady rozliczania energii elektrycznej w spółdzielni energetycznej</p>
      </a>
    </div>
    <UCarousel
        v-slot="{ item }"
        loop
        dots
        arrows
        :autoplay="{ delay: 5000 }"
        :items="movies"
        :ui="{
       item: 'basis-full sm:basis-1/2',
       controls: 'absolute -top-8 inset-x-12',
       dots: '-top-7',
       dot: 'w-6 h-1'
    }"
        class="max-w-full lg:hidden mt-5"
    >
      <a :href="item.link" target="_blank" class="w-full shrink-0 rounded-3xl bg-white flex flex-col gap-3 p-0 overflow-hidden">
        <div :style="{ backgroundImage: `url(${item.image})` }" class="h-[200px] w-full bg-cover bg-bottom"/>
        <p class="p-6 pt-3 font-medium">{{ item.title }}</p>
      </a>
    </UCarousel>
  </div>

  <div id="trusted-us" class="py-12 sm:py-16 xl:py-20 bg-gradient-to-b from-white to-sky-50">
    <div class="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-medium text-center text-neutral-800 leading-tight mb-12 sm:mb-16">
        Zaufali nam
      </h2>

      <div class="flex items-center justify-center overflow-x-auto pb-4 -mb-4 gap-x-10 sm:gap-x-4 md:gap-x-4 lg:gap-x-20 px-2"> <img
          v-for="logo in trustedLogos"
          :key="logo.name"
          :src="logo.imageSrc"
          :alt="logo.name + ' logo'"
          class="h-30 sm:h-36 md:h-42 lg:h-48 xl:h-54 object-contain flex-shrink-0" loading="lazy"
      />
      </div>
    </div>
  </div>

  <button
      @click="navigateTo('#finish')"
      aria-label="Przejdź do formularza"
      :class="[
      'fixed right-4 w-12 h-12 sm:w-19 sm:h-19 cursor-pointer z-50 transition-all duration-200 ease-in-out hover:opacity-90 drop-shadow-lg',
      isKowrPopupVisible ? 'bottom-[204px] sm:bottom-[267px]' : 'bottom-[72px] sm:bottom-[104px]'
  ]">
    <img src="/images/chat.svg" alt="Przejdź do formularza na dole strony" class="w-full h-full" />
  </button>

  <img v-if="!isKowrPopupVisible"
       src="/images/present.svg"
       alt="Pokaż informacje"
       @click="showKowrPopup"
       class="fixed bottom-4 right-4 w-12 h-12 sm:w-18 sm:h-18 cursor-pointer z-50 transition-opacity hover:opacity-90 drop-shadow-lg" />

  <div v-if="isKowrPopupVisible"
       class="fixed bottom-4 right-4 left-4 sm:left-auto bg-[#F7F7F7] pt-3 px-3 pb-1 sm:pt-5 sm:px-5 sm:pb-3 rounded-[30px] shadow-xl sm:w-[430px] h-[180px] sm:h-[235px] z-50 border border-gray-200 flex flex-col">
    <div class="flex items-start justify-between">
      <div class="flex items-center gap-2 sm:gap-3">
        <span class="text-2xl sm:text-3xl">📣</span>
        <h3 class="font-semibold text-lg sm:text-[22px] leading-tight sm:leading-[32px] tracking-normal">Zarejestruj spółdzielnię</h3>
      </div>
      <button @click="hideKowrPopup"
              aria-label="Zamknij powiadomienie"
              class="text-gray-400 hover:text-gray-600 transition-colors p-1 -ml-1 -mr-1 shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <p class="mt-2 sm:mt-3 font-medium text-base sm:text-[20px] leading-normal sm:leading-[32px] tracking-normal text-gray-700 flex-grow overflow-y-auto">
      Zarejestruj spółdzielnię energetyczną do 31.12.2025 w KOWR i skorzystaj z preferencyjnych warunków rozliczania energii.
    </p>
  </div>

  <Footer />

</template>


<style>

li {
  padding-left: 40px;
  position: relative;
  min-height: 30px;
  margin-bottom: 12px;
  font-weight: 400;
}

li::before {
  content: url('/images/check.svg'); /* Custom image */
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%); /* Vertically centers the image */
  height: 24px; /* Adjust this based on your image size */
  width: 24px;
}

</style>