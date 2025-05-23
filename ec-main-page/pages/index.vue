<script setup>

useSeoMeta({
    title: 'Strona Główna',
    ogTitle: 'Strona Główna | Platforma dla Energii - Spółdzielnie energetyczne',
    description: 'Obniż koszty energii i zyskaj pełną kontrolę nad spółdzielnią energetyczną. Oferujemy kompleksowe wsparcie, automatyczne rozliczenia i nowoczesne zarządzanie. Sprawdź, jak to działa!',
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