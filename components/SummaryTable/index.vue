<script setup>
const emit = defineEmits(['edit']);

const tableData = useTableData();
const columns = [
  { key: 'actions', title: '' },
  { key: 'mainTitle', title: 'main.themes' },
  { key: 'subTitle', title: 'sub.bouquets' },
  { key: 'sermonTitle', title: 'sermon.titles' },
];

const sermonsCount = (mainTopic) => {
  return mainTopic.subBouquets.reduce((count, subBouquet) => {
    return count + subBouquet.sermonsTitles.length;
  }, 0);
};

</script>

<template>
  <div class="relative overflow-x-auto shadow-md rounded-md">
    <table class="w-full border border-collapse text-sm text-gray-600">
      <thead class="text-gray-600 uppercase bg-blue-50">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            scope="col"
            class="py-2"
          >
            <template v-if="column.key === 'actions' && tableData.length < 4">
              <v-btn
                density="comfortable"
                variant="text"
                color="success"
                icon
                @click="emit('edit', {data: null, i: null})"
              >
                <v-icon icon="mdi-plus" />
                <v-tooltip :text="$t('add')" activator="parent" location="bottom" />
              </v-btn>
            </template>
            <template v-else>
              {{ $t(column.title) }}
            </template>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in tableData">
          <template v-for="(subBouquet, i2) in item.subBouquets">
            <tr
              v-for="(sermonTitle, i3) in subBouquet.sermonsTitles"
              :key="i3"
              class="border border-gray-200"
            >
              <td
                v-if="i2 === 0 && i3 === 0"
                :rowspan="sermonsCount(item)"
                width="1"
              >
                <v-btn
                  icon="mdi-pencil"
                  density="comfortable"
                  variant="text"
                  @click.stop="emit('edit', {data: item, i})"
                />
              </td>

              <td
                v-if="i2 === 0 && i3 === 0"
                :rowspan="sermonsCount(item)"
                class="border border-red-200 pa-3"
              >
                {{ item.mainTitle }}
              </td>
              <td
                v-if="i3 === 0"
                :rowspan="subBouquet.sermonsTitles.length"
                class="border border-gray-200 pa-3"
              >
                {{ subBouquet.subTitle }}
              </td>
              <td class="border border-gray-200 pa-3">
                {{ sermonTitle }}
              </td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>
  </div>
</template>
