// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lodash',
  ],
  build: {
    transpile: ['vuetify'],
  },
  css: [
    'vuetify/lib/styles/main.sass',
  ],
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
    jwtSecret: process.env.JWT_SECRET,
  },
  nitro: {
    plugins: [
      '~/server/mongoConnection.ts',
    ],
  },
  // devtools:{
  //   enabled: true
  // },
});
