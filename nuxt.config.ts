import { resolve } from 'node:path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lodash',
    '@hebilicious/authjs-nuxt',
  ],
  authJs: {
    guestRedirectTo: '/auth/login',
    baseUrl: 'http://localhost:3000',
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
    public: {
      authJs: {
        baseURL: process.env.AUTH_ORIGIN,
      },
    },
  },
  nitro: {
    plugins: [
      '~/server/mongoConnection.ts',
    ],
  },
  alias: {
    'cookie': resolve(__dirname, 'node_modules/cookie'),
    'jose': resolve(__dirname, 'node_modules/jose/dist/browser/index.js'),
    '@panva/hkdf': resolve(__dirname, 'node_modules/@panva/hkdf/dist/web/index.js'),
  },
  // devtools:{
  //   enabled: true
  // },
});
