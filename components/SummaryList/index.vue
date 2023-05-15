<script setup>
defineProps({
  tableData: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['edit']);

const expanded = ref();
onMounted(() => expanded.value = [0, 1, 2, 3, 4]);
</script>

<template>
  <v-no-ssr>
    <v-expansion-panels v-model="expanded" multiple>
      <v-expansion-panel
        v-for="(item, i) in tableData"
        :key="i"
        focusable
      >
        <v-expansion-panel-title color="blue-lighten-4">
          {{ item.mainTitle }}
          <v-spacer />
          <v-btn
            icon="mdi-pencil"
            variant="text"
            @click.stop="emit('edit', {data: item, i})"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-expansion-panels :model-value="[0, 1, 2, 3, 4]" multiple>
            <v-expansion-panel
              v-for="(subBouquet, i2) in item.subBouquets"
              :key="i2"
              expand
              focusable
            >
              <v-expansion-panel-title>
                {{ subBouquet.subTitle }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list density="compact">
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
