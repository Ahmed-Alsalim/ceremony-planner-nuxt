<script setup>
import { mdiDotsVertical, mdiTable, mdiCalendar, mdiLogout } from '@mdi/js';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const toggleLocale = () => {
  locale.value = locale.value === 'ar' ? 'en' : 'ar';
};

import { useDisplay } from 'vuetify';
const { xs, width } = useDisplay();

const router = useRouter();
const { currentRoute } = router;

const drawer = ref(false);
</script>

<template>
  <v-app-bar scroll-behavior="elevate">
    <v-app-bar-nav-icon
      v-if="width && xs"
      @click="drawer = !drawer"
    />

    <v-app-bar-title :text="$t('annual.sermon.plan')" />

    <template v-if="width && !xs">
      <nuxtLink to="/">
        <v-btn :text="$t('summary.table')" />
      </nuxtLink>

      <nuxtLink to="/dateSheet">
        <v-btn :text="$t('date.sheet')" />
      </nuxtLink>

      <v-btn :icon="mdiDotsVertical" />
    </template>

    <v-btn
      :text="locale === 'ar' ? 'EN' : 'ع'"
      color="success"
      @click="toggleLocale"
    />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list-item
      title="User Name"
    />
    <v-divider class="border-opacity-100" />

    <v-list v-model="currentRoute" nav>
      <v-list-item
        :title="$t('summary.table')"
        :prepend-icon="mdiTable"
        to="/"
      />

      <v-list-item
        :title="$t('date.sheet')"
        :prepend-icon="mdiCalendar"
        to="/dateSheet"
      />
    </v-list>
    <template #append>
      <div v-if="false" class="ma-2">
        <v-btn
          :text="$t('logout')"
          :prepend-icon="mdiLogout"
          color="red-darken-1"
          block
        />
      </div>
    </template>
  </v-navigation-drawer>
</template>