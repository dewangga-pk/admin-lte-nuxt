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
    '@primevue/nuxt-module',
    '@sidebase/nuxt-auth',
    '@pinia/nuxt'
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
  auth: {
    baseURL: 'https://dummyjson.com/',
    globalAppMiddleware: true,
    provider: {
      type: 'local',
      endpoints:{
        signIn: { path: 'auth/login', method: 'post'},
        getSession: { path: 'auth/me', method: 'get'},
        signOut: false,
      },
      token: {
        signInResponseTokenPointer: '/accessToken',
        type: 'Bearer',
        cookieName: 'auth.token',
        headerName: 'Authorization',
        maxAgeInSeconds: 1800,
      },
      pages: {
        login: '/login'
      }
    },
  }
})
