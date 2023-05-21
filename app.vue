<script setup>
const { locale } = useI18n();

</script>

<template>
  <NuxtLayout>
    <v-app class="pb-4">
      <NavBar />

      <v-main>
        <v-locale-provider :locale="locale">
          <v-container>
            <NuxtPage />
          </v-container>
        </v-locale-provider>
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

