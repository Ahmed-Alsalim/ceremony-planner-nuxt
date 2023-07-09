// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lodash',
    '@sidebase/nuxt-auth',
  ],
  auth: {
    globalAppMiddleware: true,
    origin: process.env.AUTH_ORIGIN,
  },
  build: {
    transpile: ['vuetify'],
  },
  css: [
    'vuetify/lib/styles/main.sass',
  ],
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
    authSecret: process.env.NEXTAUTH_SECRET,
    origin: process.env.AUTH_ORIGIN,
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
