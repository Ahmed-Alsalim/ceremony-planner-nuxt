export default defineI18nConfig(nuxt => ({
  legacy: false,
  locale: 'ar',
  missingWarn: false,
  messages: {
    en: {
      test: 'Test',
    },
    ar: {
      test: 'تجربة',
    },
  },
}),
);