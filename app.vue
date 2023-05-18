<script setup>
const { locale, setLocale } = useI18n();

const toggleLocale = () => {
  setLocale(locale.value === 'ar' ? 'en' : 'ar');
};

</script>

<template>
  <NuxtLayout>
    <v-toolbar :elevation="2">
      <v-app-bar-nav-icon />

      <v-toolbar-title>{{ $t('annual.sermon.plan') }}</v-toolbar-title>
      <v-spacer />

      <nuxtLink to="/">
        <v-btn text>{{ $t('summary.table') }}</v-btn>
      </nuxtLink>

      <nuxtLink to="/dateSheet">
        <v-btn text>{{ $t('date.sheet') }}</v-btn>
      </nuxtLink>

      <v-btn icon="mdi-dots-vertical" />

      <v-btn size="small" color="success" @click="toggleLocale">{{ locale }}</v-btn>
    </v-toolbar>

    <v-locale-provider :locale="locale">
      <v-container>
        <NuxtPage />
      </v-container>
    </v-locale-provider>
  </NuxtLayout>
</template>