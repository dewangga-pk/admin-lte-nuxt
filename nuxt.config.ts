// https://nuxt.com/docs/api/configuration/nuxt-config
import { primevueConfig } from './configs/primevue.config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: primevueConfig,
  app: {
    head: {
      link: [
          {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'},
          {rel:'stylesheet', href:'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'},
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})
