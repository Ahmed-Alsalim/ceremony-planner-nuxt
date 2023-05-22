<template>
  <NuxtLayout>
    <v-app class="pb-4">
      <NavBar />

      <v-main>
        <v-locale-provider :locale="$i18n.locale">
          <v-container>
            <NuxtPage />
          </v-container>
        </v-locale-provider>
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

