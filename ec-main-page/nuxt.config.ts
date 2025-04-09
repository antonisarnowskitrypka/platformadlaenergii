// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
import { fetchPosts } from './composables/usePosts'; // Załóżmy, że masz funkcję `fetchPosts` w komponencie



export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['/assets/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' }, // PNG favicon
      ],
      title: 'Platforma dla Energii - Kompleksowe rozwiązania dla spółdzielni energetycznych',
      meta: [
        { name: 'description', content: 'Platforma dla Energii oferuje eksperckie analizy i innowacyjne rozwiązania dla zrównoważonej energii w Polsce. Odkryj technologie odnawialnych źródeł energii, aktualności z branży i zasoby dla czystszego, ekologicznego jutra.' },
        { property: 'og:title', content: 'Platforma dla Energii - Kompleksowe rozwiązania dla spółdzielni energetycznych' },
        { property: 'og:description', content: 'Platforma dla Energii oferuje eksperckie analizy i innowacyjne rozwiązania dla zrównoważonej energii w Polsce. Odkryj technologie odnawialnych źródeł energii, aktualności z branży i zasoby dla czystszego, ekologicznego jutra.' },
        { name: 'keywords', content: 'spółdzielnie energetyczne, energia odnawialna, wspólnota energetyczna, energetyka rozproszona, spółdzielnia energetyczna, energia lokalna, współpraca energetyczna, instalacje fotowoltaiczne, energetyka wiatrowa, zielona energia, energia słoneczna, OZE, odnawialne źródła energii, panele fotowoltaiczne, sieci energetyczne, wspólne inwestycje w energię, efektywność energetyczna, zarządzanie energią, audyt energetyczny, zrównoważony rozwój, energia dla społeczności, ekosystem energetyczny, energetyka wspólnotowa, energia geotermalna, magazynowanie energii, systemy zarządzania energią, rozwój rynku energii odnawialnej, integracja OZE, rynki energii, zmiana klimatu, zielona transformacja, alternatywne źródła energii, transformacja energetyczna, wspólne rozwiązania energetyczne, mikroinstalacje OZE, dotacje na fotowoltaikę, edukacja energetyczna, polityka energetyczna, zarządzanie zasobami energetycznymi, nowoczesne technologie energetyczne, samowystarczalność energetyczna, energooszczędność, transformacja w kierunku OZE, innowacje w energetyce, inteligentne sieci energetyczne, mikroenergetyka, zielona energia dla społeczności, lokalna produkcja energii, spółdzielnia odnawialnych źródeł energii, energetyka prosumencka, infrastruktura energetyczna, zrównoważona energia, inteligentne zarządzanie energią, inteligentne domy, przyszłość energii odnawialnej, platforma zarządzania energią, zarządzanie fakturami w spółdzielni energetycznej, platforma do rozliczeń energetycznych, rozliczenia energetyczne, fakturowanie OZE, system fakturowania w spółdzielniach energetycznych, rozliczenia za energię, zarządzanie kosztami energii, systemy rozliczeń energetycznych, fakturowanie wspólnot energetycznych, rozliczenia energii elektrycznej, automatyczne rozliczenia energii, zarządzanie fakturami OZE'}
      ]
    }
  },

  modules: ['@nuxtjs/sanity', '@nuxt/ui'],

  sanity: {
    projectId: "g2jhiv3d",
    dataset: "blog_posts",
  },

  ssr: false, // Zmieniamy na SPA/SSG
  generate: {
    routes: ['/', '/blog']
  }
})