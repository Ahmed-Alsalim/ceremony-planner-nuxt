// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sfxcode/nuxt-primevue',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  build: {
    transpile: ['primevue']
  },
  css: [
    'primevue/resources/primevue.css',
    'primevue/resources/themes/saga-blue/theme.css',
    'primeicons/primeicons.css',
  ],
  primevue: {
    config: {
      ripple: true
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts'  
  },
  devtools:{
    enabled: true
  },
})
