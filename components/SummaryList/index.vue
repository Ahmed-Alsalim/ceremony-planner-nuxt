<script setup>
defineProps({
  tableData: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <v-expansion-panels multiple>
    <v-expansion-panel
      v-for="(item, i) in tableData"
      :key="i"
      expand
      focusable
    >
      <v-expansion-panel-title>
        {{ item.mainTitle }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-expansion-panels multiple>
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
              <v-list>
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
</template>