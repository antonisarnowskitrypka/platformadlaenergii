// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
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
        { property: 'og:description', content: 'Platforma dla Energii oferuje eksperckie analizy i innowacyjne rozwiązania dla zrównoważonej energii w Polsce. Odkryj technologie odnawialnych źródeł energii, aktualności z branży i zasoby dla czystszego, ekologicznego jutra.' }
      ]
    }
  }
})
