// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lodash',
    '@sidebase/nuxt-auth',
  ],
  auth: {
    provider: {
      type: 'authjs',
      addDefaultCallbackUrl: true,
    },
    baseURL: process.env.AUTH_ORIGIN,
    globalAppMiddleware: true,
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
