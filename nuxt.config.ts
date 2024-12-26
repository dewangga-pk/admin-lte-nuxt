// https://nuxt.com/docs/api/configuration/nuxt-config
import { primevueConfig } from './configs/primevue.config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: primevueConfig,
  app: {
    head: {
      link: [
          {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css'},
          {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'},
          {rel:'stylesheet', href:'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'},
          {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/icheck-bootstrap/3.0.1/icheck-bootstrap.min.css'},
          {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css'},
      ],
      script: [
        {src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', tagPosition: 'bodyClose'},
        {src:'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose'},
        {src: 'https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js', tagPosition: 'bodyClose'},
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})
