<script setup>

onBeforeRouteUpdate(() => {
  useHead({
        title: 'Platforma dla Energii - Kompleksowe rozwiązania dla spółdzielni energetycznych',
        meta: [
          { name: 'description', content: 'Platforma dla Energii oferuje eksperckie analizy i innowacyjne rozwiązania dla zrównoważonej energii w Polsce. Odkryj technologie odnawialnych źródeł energii, aktualności z branży i zasoby dla czystszego, ekologicznego jutra.' },
          { name: 'keywords', content: '' } // W przypadku braku słów kluczowych, ustaw pustą wartość
        ]
      });
});

onMounted(() => {
  useHead({
        title: 'Platforma dla Energii - Kompleksowe rozwiązania dla spółdzielni energetycznych',
        meta: [
          { name: 'description', content: 'Platforma dla Energii oferuje eksperckie analizy i innowacyjne rozwiązania dla zrównoważonej energii w Polsce. Odkryj technologie odnawialnych źródeł energii, aktualności z branży i zasoby dla czystszego, ekologicznego jutra.' },
          { name: 'keywords', content: '' } // W przypadku braku słów kluczowych, ustaw pustą wartość
        ]
      });
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
    text: "Platforma dla Energii oraz zaproponowane przez C4E rozwiązania systemowe umożliwiły nam automatyzację wielu procesów w naszej spółdzielni. Bez tego systemu, musielibyśmy zmagać się ze znacznymi trudnościami oraz poświęcać dużo czasu na radzenie sobie z wyzwaniami, które stoją przed naszą organizacją.",
    author: "Stanisław Kracik - były prezes SE Niepołomice"
  }
];

const articles = [
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


</script>

<template>

<div id="ticker" class="w-full p-3 bg-[#3453CD] text-white sm:text-center">
    <span>
      📣 Zarejestruj spółdzielnie energetyczną do 31.12.2025 w KOWR i skorzystaj z preferencyjnych warunków rozliczania energii
    </span>
</div>

<header>

  

<Navbar/>

  <div id="hero" class="relative w-full overflow-hidden sm:!pt-4 sm:p-10 bg-[#FAF3EC] xl:p-15">
    <div id="heroImg" class="min-w-[800px] sm:min-w-min h-[730px] !bg-[center_right_50px] sm:!bg-center sm:rounded-4xl relative p-10">
      <div class="hidden sm:flex absolute bottom-0 left-0 3xl:p-20 p-10 2xl:p-15 w-full">
        <div class="w-full bg-white/65  flex flex-col gap-10 justify-between rounded-3xl py-10 px-14">
          <h1 class="text-[30px] lg:text-[40px] font-medium">Kompleksowe rozwiązania dla spółdzielni energetycznych</h1>
          <p class="text-lg lg:text-2xl pb-10">Oferujemy pełne wsparcie w zakładaniu spółdzielni energetycznych, nowoczesny system do rozliczeń oraz sprawne zarządzanie spółdzielnią</p>
        </div>
    </div>
    </div>
    <div class="absolute sm:hidden bottom-0 bg-white/65 min-h-1/2  p-4 py-10 flex flex-col gap-10 justify-between items-center text-center">
      <h1 class="text-3xl font-medium">Kompleksowe rozwiązania dla spółdzielni energetycznych</h1>
      <p>Oferujemy pełne wsparcie w zakładaniu spółdzielni energetycznych, nowoczesny system do rozliczeń oraz sprawne zarządzanie spółdzielnią</p>
      <div class="flex gap-2">
            <button class="flex justify-center items-center gap-2 px-4 py-2 rounded-3xl min-w-[170px] h-[48px] font-medium border-1"  @click="navigateTo('#finish')">
              <span class="text-base">Zamów demo</span>
              <img src="/images/gift.svg" class="h-[18px]" alt="gift icon" decoding="async" height="14">
            </button>
            <button class="px-4 py-2 bg-black rounded-3xl text-white w-[150px] h-[48px] font-medium text-base ursor-pointer" @click="navigateTo('https://platformadlaenergii.pl/ec/login', {
        external: true
      })">Zaloguj</button>
      </div>
    </div>

  </div>
</header>

<div id="offer" class="bg-[#D0E1FF] flex flex-col gap-9 py-10 px-5 sm:p-15 xl:p-20 sm:gap-16">
  <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">Spółdzielnia energetyczna - jakie korzyści i dla kogo?</h2>
  <p class="sm:font-medium">Członkowie spółdzielni energetycznych zyskują przede wszystkim niższe i stabilne koszty energii dzięki wykorzystaniu lokalnych źródeł odnawialnych i zwolnieniu z części opłat dystrybucyjnych. To zwiększa bezpieczeństwo energetyczne i niezależność energetyczną społeczności. Dodatkowo, mają realny wpływ na ceny i sposób rozliczeń, a także przyczyniają się do ochrony środowiska, aktywizując jednocześnie lokalną społeczność.</p>

  <div class="grid gap-9 grid-cols-1 lg:grid-cols-2 sm:gap-12">

    <div class="bg-[#F2F7FF] flex flex-col p-8 gap-8 rounded-xl">
      <div class="flex items-center gap-4">
        <img src="/images/icon1.svg" class="h-[40px] sm:h-[60px]" alt="logo" decoding="async" height="50">
        <span class="font-medium sm:text-2xl">Przedsiębiorcy</span>
      </div>
      <p class="text-[18px] sm:text-xl">Obniż koszty energii i zwiększ konkurencyjność firmy. Dzięki spółdzielni energetycznej masz dostęp do tańszej, stabilnej energii z OZE i unikasz wahań cen prądu.</p>
    </div>

    <div class="bg-[#F2F7FF] flex flex-col p-8 gap-8 rounded-xl">
      <div class="flex items-center gap-4">
        <img src="/images/icon2.svg" class="h-[40px] sm:h-[60px]" alt="logo" decoding="async" height="50">
        <span class="font-medium sm:text-2xl">Rolnicy</span>
      </div>
      <p class="text-[18px] sm:text-xl">Zmniejsz rachunki za prąd, a dodatkowo skorzystaj z dostępnych dofinansowań. Spółdzielnia energetyczna to tańsza energia dla gospodarstwa.</p>
    </div>

    <div class="bg-[#F2F7FF] flex flex-col p-8 gap-8 rounded-xl">
      <div class="flex items-center gap-4">
        <img src="/images/icon3.svg" class="h-[40px] sm:h-[60px]" alt="logo" decoding="async" height="50">
        <span class="font-medium sm:text-2xl">Gminy i samorządy</span>
      </div>
      <p class="text-[18px] sm:text-xl">Zadbaj o budżet gminy i rozwój lokalnej energetyki. Spółdzielnia energetyczna pozwala na obniżenie kosztów prądu dla szkół, urzędów i instytucji publicznych, a także wspiera rozwój regionu.</p>
    </div>

    <div class="bg-[#F2F7FF] flex flex-col p-8 gap-8 rounded-xl">
      <div class="flex items-center gap-4">
        <img src="/images/icon4.svg" class="h-[40px] sm:h-[60px]" alt="logo" decoding="async" height="50">
        <span class="font-medium sm:text-2xl">Osoby fizyczne</span>
      </div>
      <p class="text-[18px] sm:text-xl">Płać mniej za energię i korzystaj z zielonej energii. Dołączając do spółdzielni energetycznej, zyskujesz dostęp do tańszego prądu i wspierasz transformację energetyczną w swoim otoczeniu.</p>
    </div>

    </div>
</div>


  <div class="bg-[#FAFAFA] flex flex-col gap-9 py-10 px-5 sm:p-15 xl:p-20 items-center">
    <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">Oferta dla spółdzielni energetycznej</h2>

    <div class="flex flex-wrap justify-evenly items-center gap-2 md:justify-center md:border border-[#DADEE3] p-1 rounded-full w-fit">
      <button @click='currentIndex = 0' :class="`py-2 px-5 rounded-3xl w-fit text-sm font-medium border sm:border-0 transition cursor-pointer ${currentIndex === 0 ? 'bg-[#3453CD] text-white' : 'border-[#3453CD] text-[#3453CD] sm:text-inherit' }`">Zakładnie Spółdzielni</button>
      <button @click='currentIndex = 1' :class="`py-2 px-5 rounded-3xl w-fit text-sm font-medium border sm:border-0 transition cursor-pointer ${currentIndex === 1 ? 'bg-[#3453CD] text-white' : 'border-[#3453CD] text-[#3453CD] sm:text-inherit' }`">Zarządzanie Spółdzielnią</button>
      <button @click='currentIndex = 2' :class="`py-2 px-5 rounded-3xl w-fit text-sm font-medium border sm:border-0 transition cursor-pointer ${currentIndex === 2 ? 'bg-[#3453CD] text-white' : 'border-[#3453CD] text-[#3453CD] sm:text-inherit' }`">System rozliczeniowy</button>

    </div>

    <div class="bg-white p-5 sm:p-0 gap-5 flex flex-col lg:flex-row rounded-3xl sm:items-center lg:justify-between overflow-hidden w-full max-w-[1200px]" v-if="currentIndex === 0">
      <div class="flex flex-col gap-5 sm:p-8 xl:p-11">
        <h3 class="font-medium leading-8">Jak założyć spółdzielnię energetyczną?</h3>
        <ul>
              <li>Ocena możliwości założenia spółdzielni</li>
              <li>Analiza bilansu energetycznego spółdzielni</li>
              <li>Obsługa formalności i rejestracji w KOWR i KRS</li>
              <li>Negocjacje ze sprzedawcą energii</li>
              <li>Opracowanie strategii rozwoju spółdzielni energetycznej</li>
              <li>Przygotowanie wniosków wraz z załącznikami o dofinansowanie dla spółdzielni</li>
        </ul>
      </div>
      <img src="/images/handshake.jpeg" class='flex lg:hidden rounded-3xl w-full sm:w-[500px] h-fit' alt="Handshake img"/>
      <div class="w-[400px] bg-[url(/images/handshake.jpeg)] bg-cover self-stretch"/>
    </div>

    <div class="bg-white p-5 sm:p-0 gap-5 flex flex-col lg:flex-row rounded-3xl sm:items-center lg:justify-between overflow-hidden w-full max-w-[1200px]" v-if="currentIndex === 1">
      <div class="flex flex-col gap-5 sm:p-8 xl:p-11">
        <h3 class="font-medium leading-8">Ułatwiamy codzienną obsługę</h3>
        <ul >
              <li>Obsługa rozliczeń członków i fakturowanie</li>
              <li>Obsługa reklamacji do Spółki Obrotu Energią</li>
              <li>Konsultacje z ekspertami i rekomendacje rozwoju spółdzielni</li>
              <li>Analiza doboru nowych członków spółdzielni energetycznej</li>
              <li>Wsparcie w spełnianiu wymogów prawnych, pomagamy dbać o zgodność z przepisami</li>
              <li>Przygotowanie comiesięcznych raportów i sprawozdania rocznego do KOWR</li>
        </ul>
      </div>
      <img src="/images/laptop.webp" class='flex lg:hidden rounded-3xl w-full sm:w-[500px] h-fit' alt="Handshake img"/>
      <div class="w-[400px] bg-[url(/images/laptop.webp)] bg-cover self-stretch bg-right"/>
    </div>

    <div class="bg-white p-5 sm:p-0 gap-5 flex flex-col lg:flex-row rounded-3xl sm:items-center lg:justify-between overflow-hidden w-full max-w-[1200px]" v-if="currentIndex === 2">
      <div class="flex flex-col gap-5 sm:p-8 xl:p-11">
        <h3 class="font-medium leading-8">Pełna automatyzacja i wygoda</h3>
        <ul >
              <li>Dostęp 24/7 – zarządzanie spółdzielnią energetyczną z każdego miejsca</li>
              <li>Automatyczne pobieranie danych i fakturowanie energii</li>
              <li>Precyzyjne rozliczenia i bezpieczeństwo danych</li>
              <li>Zarządzanie członkami i umowami</li>
              <li>Intuicyjny interfejs i prosta obsługa</li>
        </ul>
      </div>
      <img src="/images/tablety.svg" class='flex rounded-3xl w-full sm:w-[500px] h-fit' alt="Handshake img"/>
    </div>
  </div>


  <div id="benefits" class="bg-[#3453CD] flex flex-col gap-9 py-10 px-5 sm:p-15 xl:p-20">
    <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10 text-white">System do rozliczeń spółdzielni energetycznych – nr 1 w Polsce!
    </h2>
    <p class="text-[18px] sm:text-xl sm:font-medium leading-8 text-justify text-white">Bez względu na wielkość Twojej spółdzielni, nasza platforma zapewnia elastyczne rozliczenia spółdzielni energetycznych, ułatwiając zarządzanie produkcją i zużyciem energii oraz kontrolę nad bilansowaniem energii. To kompleksowe rozwiązanie dla firm, przedsiębiorstw i gmin, które chcą efektywnie zarządzać spółdzielnią energetyczną i optymalizować koszty energii. Dzięki nowoczesnym technologiom możesz skupić się na rozwoju swojej społeczności energetycznej, zapewniając jej niezależność energetyczną, stabilność oraz maksymalną efektywność. Jeśli zastanawiasz się, jak rozliczać spółdzielnię energetyczną, nasza platforma automatyzuje fakturowanie, raportowanie i analizy zużycia energii, gwarantując przejrzyste i zgodne z przepisami rozliczenia energii odnawialnej.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">
      
      <div class="p-8 min-h-[200px] flex flex-col justify-center bg-[#F2F7FF] w-full rounded-3xl gap-6">
        <div class="flex items-center gap-4 ">
          <img src="/images/icon5.svg" class="h-[40px]" alt="logo" decoding="async" height="50">
          <span class="font-medium">Raportowanie</span>
        </div>
        <p class="tex-[18px]">Tworzenie raprtów dotyczących rozliczeń spółdzielni.</p>
      </div>

      <div class="p-8 min-h-[200px] flex flex-col justify-center bg-white w-full rounded-3xl gap-6">
        <div class="flex items-center gap-4 ">
          <img src="/images/icon6.svg" class="h-[40px]" alt="logo" decoding="async" height="50">
          <span class="font-medium">Aktywacja członków</span>
        </div>
        <p class="tex-[18px]">Proces dołączania i aktywowania członków  w spółdzielni.</p>
      </div>

      <div class="p-8 min-h-[200px] flex flex-col justify-center bg-[#F2F7FF] w-full rounded-3xl gap-6">
        <div class="flex items-center gap-4 ">
          <img src="/images/icon7.svg" class="h-[40px]" alt="logo" decoding="async" height="50">
          <span class="font-medium">Fakturowanie</span>
        </div>
        <p class="tex-[18px]">Obsługa fakturowania i samofakturowania w spółdzielni energetycznej.</p>
      </div>

      <div class="p-8 min-h-[200px] flex flex-col justify-center bg-white w-full rounded-3xl gap-6">
        <div class="flex items-center gap-4 ">
          <img src="/images/icon8.svg" class="h-[40px]" alt="logo" decoding="async" height="50">
          <span class="font-medium">Automatyczne pobieranie danych</span>
        </div>
        <p class="tex-[18px]">Zautomatyzowany proces pobierania danych pomiarowych.</p>
      </div>

      <div class="p-8 min-h-[200px] flex flex-col justify-center bg-[#F2F7FF] w-full rounded-3xl gap-6">
        <div class="flex items-center gap-4 ">
          <img src="/images/icon9.svg" class="h-[40px]" alt="logo" decoding="async" height="50">
          <span class="font-medium">Precyzyjne rozliczanie</span>
        </div>
        <p class="tex-[18px]">Precyzyjne rozliczanie energii na poziomie spółdzielni energetycznej i PPE.</p>
      </div>

      <div class="p-8 min-h-[200px] flex flex-col justify-center bg-white w-full rounded-3xl gap-6">
        <div class="flex items-center gap-4 ">
          <img src="/images/icon10.svg" class="h-[40px]" alt="logo" decoding="async" height="50">
          <span class="font-medium">Grupowanie członków</span>
        </div>
        <p class="tex-[18px]">Tworzenie elastycznych grup rozliczeniowych i transparentne rozliczenia między członkami.</p>
      </div>

    </div>
    
    <div class="hidden lg:flex w-full lg:p-10 xl:p-14 bg-white rounded-3xl max-w-[1300px] mx-auto">
      <img src="/images/funkcje.png" alt="funkcjonalnosci" decoding="async" class="w-full">
    </div>

  </div>

  <div id="howItWorks" class="bg-white flex flex-col gap-9 py-10 px-5 sm:p-15 xl:p-20">
    <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">Jak działa precyzyjne rozliczanie?</h2>
    <div class="flex flex-col gap-1 sm:gap-3">
      <div class="flex flex-col font-medium p-8 gap-2 sm:gap-4 sm:items-center bg-[#F2F7FF] md:bg-white rounded-3xl items-start sm:text-center">
        <img src="/images/number1.svg" class="h-[36px]" alt="number1" decoding="async" height="36">
        <p>Spółka Obrotu Energią wysyła dane pomiarowe do Spółdzielni</p> 
      </div>
      <div class="flex flex-col font-medium p-8 gap-2 sm:gap-4 sm:items-center rounded-3xl items-start sm:text-center">
        <img src="/images/number2.svg" class="h-[36px]" alt="number2" decoding="async" height="36">
        <p>Spółdzielnia przekazuje dane pomiarowe do Platformy</p>
      </div>
      <div class="flex flex-col font-medium p-8 gap-2 sm:gap-4 sm:items-center bg-[#F2F7FF] md:bg-white rounded-3xl items-start sm:text-center">
        <img src="/images/number3.svg" class="h-[36px]" alt="number3" decoding="async" height="36">
        <p>Platforma rozlicza członków Spółdzielni za pobraną i wyprodukowaną energię wewnętrzną spółdzielni</p>
      </div>
    </div>
    <img src="/images/linkedPC.webp" alt="PC linked to energy sources image" class="max-w-[660px] mx-auto w-full"/>

  </div>

  <div id="opinions" class="bg-[#FAF3EC] flex flex-col gap-9 py-10 px-5 sm:p-15 xl:p-20">
    <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10 mb-5">Co o nas mówią?</h2>
    <UCarousel
      v-slot="{ item }"
      loop
      dots
      arrows
      :autoplay="{ delay: 5000 }"
      :items="testimonials"
      :ui="{
         item: 'basis-full md:basis-1/3',
         controls: 'absolute -top-8 inset-x-12',
          dots: '-top-7',
          dot: 'w-6 h-1'
          }"
      class="max-w-full"
    >
      <div class=" bg-white rounded-3xl p-8 gap-6 flex flex-col w-full sm:max-w-[590px]">
        <p class="italic text-[18px]">{{ item.text }}</p>
        <span class="font-medium">{{ item.author }}</span>
      </div>

    </UCarousel>
  </div>


<div id="articles" class="bg-[#FAFAFA] flex flex-col gap-9 py-10 px-5 sm:p-15 xl:p-20">
  <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">Artykuły</h2>
  <div class="hidden 2xl:flex gap-5 2xl:justify-center ">
    <a class="w-[300px] shrink-0 rounded-3xl bg-white flex flex-col gap-3 p-0 overflow-hidden" 
    id="item-1" href="https://swiatoze.pl/nowe-technologie-otwieraja-droge-do-innowacji-w-zarzadzaniu-energia/">
        <div class="h-[160px] w-full bg-[url(/images/article1.webp)] bg-cover bg-bottom"/>
        <p class="p-6 pt-3 font-medium">Nowe technologie otwierają drogę do innowacji w zarządzaniu energią</p>
      </a>
      <a class="w-[300px] shrink-0 rounded-3xl bg-white flex flex-col gap-3 p-0 overflow-hidden" 
      id="item-2" href="https://wysokienapiecie.pl/100890-rewolucja-w-zarzadzaniu-energia/">
        <div class="h-[160px] w-full bg-[url(/images/article2.webp)] bg-cover bg-bottom"/>
        <p class="p-6 pt-3 font-medium">Rewolucja w zarządzaniu energią</p>
      </a>
      <a class="w-[300px] shrink-0 rounded-3xl bg-white flex flex-col gap-3 p-0 overflow-hidden" 
      id="item-3" href="https://www.gramwzielone.pl/trendy/20206639/spoldzielnie-energetyczne-nowe-mozliwosci">
        <div class="h-[160px] w-full bg-[url(/images/article3.webp)] bg-cover bg-bottom"/>
        <p class="p-6 pt-3 font-medium">Spółdzielnie energetyczne: nowe możliwości</p>
      </a>
      <a class="w-[300px] shrink-0 rounded-3xl bg-white flex flex-col gap-3 p-0 overflow-hidden" 
      href="https://www.gramwzielone.pl/trendy/20211640/spoldzielnie-energetyczne-nizsze-ceny-pradu-dla-spolecznosci">
        <div class="h-[160px] w-full bg-[url(/images/article4.webp)] bg-cover bg-bottom"/>
        <p class="p-6 pt-3 font-medium">Spółdzielnie energetyczne: Niższe ceny prądu dla społeczności</p>
      </a>
    </div>
    <UCarousel
      v-slot="{ item }"
      loop
      dots
      arrows
      :autoplay="{ delay: 5000 }"
      :items="articles"
      :ui="{
         item: 'basis-full sm:basis-1/2 xl:basis-1/4',
         controls: 'absolute -top-8 inset-x-12 xl:hidden',
         dots: '-top-7 xl:hidden',
         dot: 'w-6 h-1'
      }"
      class="max-w-full flex 2xl:hidden mt-5"
    >
      <a :href="item.link" target="_blank" class="w-full shrink-0 rounded-3xl bg-white flex flex-col gap-3 p-0 overflow-hidden">
        <div :style="{ backgroundImage: `url(${item.image})` }" class="h-[200px] xl:h-[160px] w-full bg-cover bg-bottom"/>
        <p class="p-6 pt-3 font-medium">{{ item.title }}</p>
      </a>
    </UCarousel>
    <button class="md:hidden justify-center items-center gap-2 px-4 py-2 rounded-3xl min-w-[150px] h-[48px] font-medium border-1 text-base cursor-pointer"  @click="navigateTo('/blog')">
        <span class="">Blog</span>
      </button>
</div>

<div id="movies" class="bg-[#FAFAFA] flex flex-col gap-9 py-10 px-5 sm:p-15 xl:p-20 !pt-0">
  <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">Filmy szkoleniowe</h2>
  <div class="hidden lg:flex gap-5 justify-center">
    <a class="w-[300px] shrink-0 rounded-3xl bg-white flex flex-col gap-3 p-0 overflow-hidden" 
    id="movie-1" href="https://www.youtube.com/watch?v=0hi3uEHom_E">
      <div class="h-[160px] w-full bg-[url(/images/yt-ss1.webp)] bg-cover bg-bottom"/>
      <p class="p-6 pt-3 font-medium">Czym jest spółdzielnia energetyczna i jak ją założyć?</p>
    </a>
    <a class="w-[300px] shrink-0 rounded-3xl bg-white flex flex-col gap-3 p-0 overflow-hidden" 
    id="movie-2" href="https://www.youtube.com/watch?v=xX0wv2LUCKE">
      <div class="h-[160px] w-full bg-[url(/images/yt-ss1.webp)] bg-cover bg-bottom"/>
      <p class="p-6 pt-3 font-medium">Jakie korzyści wynikają z założenia spółdzielni energetycznej?</p>
    </a>
    <a class="w-[300px] shrink-0 rounded-3xl bg-white flex flex-col gap-3 p-0 overflow-hidden" 
    id="movie-3" href="https://www.youtube.com/watch?v=67VVQyUGOCA">
      <div class="h-[160px] w-full bg-[url(/images/yt-ss1.webp)] bg-cover bg-bottom"/>
      <p class="p-6 pt-3 font-medium">Zasady rozliczania energii elektrycznej w spółdzielni energetycznej</p>
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

<Footer />


</template>

<style>

#heroImg {
  background: url('/images/hero.webp');
  background-size: cover;
}

li {
  padding-left: 40px; /* Create space for the image */
  position: relative;
  min-height: 30px;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px; /* 160% */
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



<!-- <style>




/*
    GLOBAL
 */

    * {
      box-sizing: border-box;

      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    body {
      font-family: "TT Hoves", sans-serif;
      margin: 0;
      padding: 0;
      background-color: #ffffff; /* White background */
      color: #212121;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .button {
      display: flex;
      min-width: 150px;
      height: 48px;
      padding: 10px 22px;
      justify-content: center;
      align-items: center;
      gap: 7px;
      font-size: 16px;
      transition: all 0.2s;
    }

    .button:hover {
      box-shadow: 2px 2px 2px 2px gray;
      cursor: pointer;
    }

    .bigButton {
      padding: 10px 200px !important;
    }

    @media screen and (width <= 1050px) {
      .bigButton {
        padding: 10px !important;
        align-self: stretch;
      }
    }

    .rnd {
      border-radius: 28px;
    }

    .black {
      background: #212121;
      color: #FFF;
      font-weight: 700;
      border: 0;
    }

    .white {
      background: white;
    }

    .borderOnly {
      border: 1px solid #3453cd;
      color: #3453cd;
      background: none;
    }

    h1 {
      text-align: center;
      font-size: 40px;
      font-weight: 500;
      margin: 0;
      width: 100%;
    }

    h2 {
      text-align: center;
      font-size: 40px;
      font-weight: 500;
      line-height: 50px; /* 125% */
      margin: 0;
      width: 100%;
    }

    h3 {
      font-size: 40px;
      font-style: italic;
      font-weight: 400;
      margin: 0;
    }

    h4 {
      font-size: 32px;
      font-weight: 400;
      margin: 0;
    }

    h5 {
      color: #3453CD;
      font-size: 24px;
      font-weight: 500;
      line-height: 32px; /* 133.333% */
      margin: 0;
    }

    small {
      font-size: 16px;
      font-weight: 400;
    }

ul {
  flex: 1 1;
  list-style: none;
  padding-left: 0;
}

li {
  padding-left: 54px; /* Create space for the image */
  position: relative;
  min-height: 30px;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px; /* 160% */
}

li::before {
  content: url('/images/check.svg'); /* Custom image */
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%); /* Vertically centers the image */
  height: 30px; /* Adjust this based on your image size */
  width: 30px;
}

/*

HEADER

 */

    header {
      display: flex;
      width: 100%;
      padding: 20px 56px;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      background: url('/images/heronew.png') lightgray no-repeat;
      background-size: cover;
        }

    #ticker {
      width: 100%;
      padding: 15px 10px;
      display: flex;
      justify-content: center;
      background: #3453cd;
      color: white;
    }

    #ticker span {
      margin: 0 5px;
font-size: 20px;;
    }

    #menu {
      display: flex;
      width: 100%;
      padding: 8px 0;
      justify-content: space-between;
      align-items: center;
    }
    #menuButtons {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    #hero {
      width: 100%;
      height: 1000px;
      flex-shrink: 0;
      border-radius: 20px;
      /* background: url(<path-to-image>) lightgray  no-repeat; */

      position: relative;
    }



    #heroTile {
      position: absolute;
      display: flex;
      width: 85%;
      left: 0;
      top: 0;
      max-width: 800px;
      padding: 40px 15px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      border-radius: 20px;
      background: rgba(27, 27, 27, 0.192);
      color: white;
      text-align: c;
    }

    header p {
      font-size: 20px;
      font-weight: 500;
      text-align: center;
    }


@media screen and (width <= 620px) {
  #menu {
    flex-direction: column;
    gap: 30px;
  }
}

    @media screen and (width <= 550px) {
      #heroTile {
        width: 91%;
        left: 15px;
        bottom: 15px;
        padding: 15px
      }

      #heroTile h2 {
        font-size: 32px;
      }

      header {
        padding: 20px;
      }
    }

    /* GIFT */

    #gift {
      display: flex;
      padding: 80px 106px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      align-self: stretch;
      width: 100%;
      background: #FAF3EC;
    }

    #giftInner {
      width: 100%;
      display: flex;
      padding: 32px 60px;
      align-items: center;
      gap: 64px;
      align-self: stretch;
      border-radius: 20px;
      background: #3453CD;
      color: white;
      justify-content: center;
    }

    #giftInner div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 29px;
    }

    @media screen and (width <= 970px) {
      #gift {
        padding: 60px 40px;
      }
    }

    @media screen and (width <= 780px) {
      #giftInner {
        flex-direction: column-reverse;
      }

      #giftInner h3 {
        font-size: 32px;
      }
      #giftInner h4 {
        font-size: 28px;
      }
    }

    /* OFFER */

    #offer {
      display: flex;
      padding: 80px 106px;
      flex-direction: column;
      align-items: flex-start;
      gap: 64px;
      align-self: stretch;
      background: #effafd;
      width: 100%;
    }

    #offer .tile {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 20px;
      background: white;
    }


    #offer .row {
      display: flex;
      padding: 64px 56px;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
      gap: 64px;
    }

    #offer .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }

    #offer .text p {
      font-size: 20px;
      font-weight: 400;
      line-height: 32px; /* 160% */
    }

    #offer .row img {
      border-radius: 20px;
      max-width: 380px;
width: 100%;
      min-width: 240px;
    }

    #offer .tile2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 20px;
      background: white;
      padding: 55px;
    }

    #offer .tile2 p {
      font-size: 20px;
      font-weight: 500;
      line-height: 32px; /* 160% */
    }

    #offer .lists {
      display: flex;
      gap: 32px;
      width: 100%;
      justify-content: space-between;
      margin: 50px 0;
    }

    @media screen and (width <= 600px) {
      #offer {
        padding: 60px 15px;
      }
    }

    @media screen and (width <= 1050px) {
      #offer .row {
        flex-direction: column;
        gap: 20px;
        padding: 25px;
      }

      #offer .rev {
        flex-direction: column-reverse;
      }

      #offer .lists {
        flex-direction: column;
        gap: 0;
      }
      #offer .text {
        gap: 10px;
      }

      #offer .text p {
        font-size: 18px;
      }

      #offer h5 {
        font-size: 20px;
      }
    }



    /* BENEFITS */

    #benefits {
      display: flex;
      padding: 80px 106px;
      flex-direction: column;
      align-items: flex-start;
      gap: 64px;
      background: #3453CD;
      width: 100%;
    }

    #benefits h2 {
      color: white;
    }

    #innerBenefits {
      display: flex;
      align-items: center;
      gap: 48px;
      align-self: stretch;
      flex-wrap: wrap;
      justify-content: center;
      color: white;
      font-size: 18px;
    }

    #innerBenefits .tile {
      display: flex;
      flex-direction: column;
      width: 380px;
      padding: 32px 32px 40px 32px;
      align-items: flex-start;
      gap: 24px;
      border-radius: 20px;
      background: #F2F7FF;
      justify-content: flex-start;
      height: 340px;
    }

    #innerBenefits .tile .row {
      display: flex;
      height: 100px;
      align-items: center;
      gap: 16px;
      align-self: stretch;
    }

    #innerBenefits p {
      font-size: 20px;
      font-weight: 400;
      line-height: 32px; /* 160% */
      margin: 0;
    }

    @media screen and (width <= 1020px) {
      #benefits {
        padding: 60px 40px;
      }
    }

    @media screen and (width <= 880px) {
      #innerBenefits .tile {
        min-width: 340px;
        align-self: stretch;
      }
      #benefits {
        padding: 60px 15px;
      }
    }

    /* TABS */

    #tabsContainer {
      display: flex;
      padding: 80px 106px;
      flex-direction: column;
      align-items: center;
      gap: 64px;
      align-self: stretch;
      background: #FAFAFA;

    }

    #tabs {
      display: flex;
      width: 664px;
      height: 48px;
      align-items: center;
      border-radius: 24px;
      border: 1px solid #DADEE3;
    }

    #tabs button {
      display: flex;
      padding: 10px 12px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex: 1 0 0;
      align-self: stretch;
      border-radius: 24px;
      margin: 4px;
      background: none;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
    }

    #tabs button:not(.active):hover {
      background: white;
    }

    #tabs .active  {
      background: #3453CD;
      color: white;
    }

    .ecTile {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 64px 0;
      align-items: center;
      background: white;
      border-radius: 20px;
      overflow: hidden;
    }

    .ecTile .inner {
      display: flex;
      flex: 1 1;
      padding: 44px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 40px;
      flex-shrink: 0;
    }

    .ecTile p {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px; /* 133.333% */
    }

    .ecTile .img {
      width: 25%;
align-self: stretch;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    @media screen and (width <= 700px) {
      #tabs {
        width: 100%;
        height: auto;
      }
      #tabs button {
        padding: 15px 12px;
      }
    }

    @media screen and (width <= 880px) {
      #tabsContainer {
        padding: 60px 15px;
      }
    }

    @media screen and (width <= 1140px) {
      .ecTile {
        margin: 30px 0;
        flex-direction: column;
      }

      .ecTile .img {
        width: 100%;
        height: 260px;
        align-self: stretch;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    }

    /* HOW IT WORKS */

    #howItWorks {
      display: flex;
      width: 100%;
      padding: 80px 106px;
      flex-direction: column;
      align-items: center;
      gap: 64px;
    }

    #howItWorks .inner {
      display: flex;
      max-width: 560px;
      align-self: stretch;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      margin: 0 auto;
    }

    #howItWorks p {
      text-align: center;
      font-size: 20px;
      font-weight: 500;
      line-height: 32px; /* 160% */
      margin-bottom: 32px;
      margin-top: 0;
    }

    #howItWorks img {
      width: 100%;
    }


    @media screen and (width <= 880px) {
      #howItWorks {
        padding: 60px 15px;
      }
    }

    /* OPINIONS */

    #opinions {
      display: flex;
      padding: 80px 26px;
      flex-direction: column;
      align-items: flex-start;
      gap: 48px;
      align-self: stretch;
      width: 100%;
      background: #FAF3EC;
    }

    #opinions .inner {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 48px;
      flex-wrap: wrap;
    }

    #opinions .tile {
      display: flex;
      flex-direction: column;
      min-width: 320px;
      max-width: 590px;
      flex: 1 1;
      align-self: stretch;
      justify-content: space-between;
      padding: 64px 56px;
      align-items: flex-start;
      gap: 64px;
      border-radius: 20px;
      background: #FFF;
    }

    #opinions .tile p {
      font-size: 20px;
      font-style: italic;
      font-weight: 400;
      line-height: 32px; /* 160% */
    }

    #opinions .tile span {
      font-size: 20px;
      font-weight: 500;
      line-height: 32px; /* 160% */
    }

    @media screen and (width <= 740px) {
      #opinions .tile {
        padding: 30px;
      }

      #opinions .inner {
        flex-wrap: initial;
        overflow: scroll;
        justify-content: flex-start;
      }
    }

    /* CLIENTS */

    #clients {
      display: flex;
      padding: 80px 106px;
      flex-direction: column;
      align-items: center;
      gap: 64px;
      align-self: stretch;
      width: 100%;
      background: #D0E1FF;
    }

    #logoGallery {
      display: flex;
      align-items: center;
      gap: 55px;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }

    .logoTile {
      width: 200px;
      height:200px;
      padding: 25px;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      flex-shrink: 0;
    }

    .logoTile img {
      width: 100%;
    }

    @media screen and (width <= 1435px) {
      #logoGallery {
        gap: 15px;
      }
    }

    @media screen and (width <= 1280px) {
      .logoTile {
        width: 140px;
        height: 140px;
      }

      #clients {
        padding: 80px 25px;
      }
    }

    @media screen and (width <= 815px) {
      #logoGallery {
        overflow: scroll;
        flex-wrap: initial;
        justify-content: flex-start;
      }
    }

    /* FOOTER */

    footer {
      display: flex;
      width: 100%;
      padding: 80px 106px;
      flex-direction: column;
      align-items: center;
      gap: 92px;
      background: #0D2170;
    }

    footer .footerDiv {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 67px;
      flex: 1 1;
      align-self: stretch;
    }

    footer h2 {
      color: #FFF;
      text-align: center;
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 20px;

    }

    footer small {
      color: #FFF;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    footer b {
      color: #A2C6FF;
      font-weight: 500;
      line-height: normal;
      text-decoration-line: underline;
      cursor: pointer;
    }

    form {
      display: flex;
      align-items: flex-start;
      gap: 163px;
      align-self: stretch;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
    }

    @media screen and (width <= 1075px) {
      form {
        gap: 10px;
        flex-direction: column;
      }
    }

    .formRow {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      align-self: stretch;
      margin-bottom: 20px;
      min-width: 350px;

    }

    .formRow:not(.area) {
      border-bottom: 1px solid #E0E0E0;
      margin-bottom: 32px;

    }

    .formRow label {
      color: #F2F7FF;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .formRow label span {
      color: #CF2626;
    }

    .formRow input:not(#terms) {
      display: flex;
      width: 100%;
      padding: 10px;
      align-items: center;
      gap: 10px;
      align-self: stretch;
      background: none;
      border: none;
      color: #E0E0E0;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
    }

    .formRow textarea {
      border-radius: 4px;
      border: 1px solid #A2C6FF;
      display: flex;
      height: 125px;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      align-self: stretch;
      color: #E0E0E0;
      font-size: 14px;
      font-weight: 400;
      background: none;
    }

    #finish {
      color: #FFF;
      font-size: 16px;
      font-weight: 400;
      line-height: 100%; /* 16px */
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
    }

    #terms {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
      position: relative;
    }

    #terms input[type="checkbox"] {
      display: block;
      width: 1px;
      position: absolute;
      z-index: -1;
    }

    /* Style the checkbox container */
    #terms span {
      width: 22px;
      height: 22px;
      border-radius: 4px;
      border: 2px solid #a2c6ff;
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.3s, border-color 0.3s;
    }

    /* Style when the checkbox is checked */
    #terms input[type="checkbox"]:checked + span {
      background: #A2C6FF;
      border-color: #A2C6FF;
    }

    /* Adding the checkmark when the checkbox is checked */
    #terms input[type="checkbox"]:checked + span::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      background-color: white;
      border-radius: 2px;
    }

    /* Optional: hover effect */
    #terms span:hover {
      border-color: #7FAFFF;
    }

    #sender {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    #sender button {
      min-width: 230px;
    }

    #sender p {
      color: #F2F7FF;
      font-size: 16px;
      font-weight: 400;
      margin: 0;
    }

    #sender span {
      font-weight: 500;
    }


@media screen and (width <= 600px) {
  footer {
    padding: 60px 15px;
  }
  #sender, #finish {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
    /* CAROUSEL */



.carousel {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%; /* Total 5 items, each 50% of container width */
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.carousel-item {
  max-width: 400px; /* 20% width of the carousel (5 items total in 100%) */
  min-width: 320px;
  flex: 1 1;
  height: 360px;
  flex-shrink: 0;
  background-color: white;
  text-align: justify;
  font-size: 20px;
  font-weight: 500;
  line-height: 33px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
}

.carousel-item img {
  min-width: 100%;
  min-height: 220px; /* Adjust the max height as needed */
}

.notcenter {
  object-fit: cover;  /* Ensures the image fills the container */
  object-position: bottom right;
}

.carousel-item p {
  padding: 24px 24px 44px;
}

.prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  z-index: 10;
  cursor: pointer;
}

.next {
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  right: 50px;
  z-index: 10;
  cursor: pointer;

}


@media screen and (width <= 910px) {

  .carousel {
    flex-wrap: initial;
    overflow-x: scroll;
    scroll-behavior: smooth; /* Optional, for smooth scrolling */
    padding: 0;
    margin: 0;            /* Removes any margin */
    box-sizing: border-box;
    justify-content: flex-start;
  }

}
/* ARTICLES */

  #articles {
    position: relative;
    padding: 80px 108px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 64px;
    background: #fafafa;
  }

  #movies {
    position: relative;
    padding: 80px 108px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 64px;
    background: #fafafa;
  }

  @media screen and (width <= 600px) {
    #articles, #movies, #clients {
      padding: 60px 20px;
    }
  }

  #contactSuccess {
    display: none;
    color: white;
    font-size: 24px;
  }

  */

  </style> -->
