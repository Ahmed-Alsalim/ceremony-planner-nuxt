<script setup>
import { mdiPlus, mdiPencil } from '@mdi/js';

const tableData = useTableData();

const emit = defineEmits(['edit']);

const expanded = ref();
onMounted(() => expanded.value = [0, 1, 2, 3, 4]);
</script>

<template>
  <v-no-ssr>
    <v-expansion-panels v-model="expanded" multiple>
      <v-btn
        v-if="tableData.length < 4"
        :text="$t('add.bouquet')"
        :prepend-icon="mdiPlus"
        color="success"
        class="mb-2"
        block
        @click="emit('edit', {data: null, i: null})"
      />

      <v-expansion-panel
        v-for="(item, i) in tableData"
        :key="i"
        focusable
      >
        <v-expansion-panel-title
          color="blue-lighten-4"
          class="py-0"
        >
          {{ item.mainTitle }}
          <v-spacer />
          <v-btn
            :icon="mdiPencil"
            variant="text"
            @click.stop="emit('edit', {data: item, i})"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-expansion-panels :model-value="[0, 1, 2, 3, 4]" multiple>
            <v-expansion-panel
              v-for="(subBouquet, i2) in item.subBouquets"
              :key="i2"
              focusable
            >
              <v-expansion-panel-title color="blue-lighten-5">
                {{ subBouquet.subTitle }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list density="comfortable" class="py-0">
                  <v-list-item
                    v-for="(sermonTitle, i3) in subBouquet.sermonsTitles"
                    :key="i3"
                  >
                    <v-list-item-title>
                      {{ sermonTitle }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-no-ssr>
</template>

<style>
  .v-expansion-panel--active > .v-expansion-panel-title {
    min-height: 52px;
  }

  .v-expansion-panel-title__overlay {
    background-color: unset;
  }
</style>