<script setup>
definePageMeta({ middleware: 'auth' });

import { useDisplay } from 'vuetify';

const tableData = useTableData();
const columns = [
  { key: 'i', title: '#' },
  { key: 'date', title: 'date' },
  { key: 'sermonTitl', title: 'sermon.title' },
];

const fridaysInYear = computed(() => {
  const year = new Date().getFullYear();
  const fridays = [];
  const date = new Date(year, 0, 1);
  while (date.getDay() !== 5) {
    date.setDate(date.getDate() + 1);
  }
  while (date.getFullYear() === year) {
    fridays.push(new Date(date).toLocaleDateString('tr-TR'));
    date.setDate(date.getDate() + 7);
  }

  return fridays;
});

const sermonsTitles = computed(() => {
  return tableData.value.flatMap((item) => {
    return item.subBouquets.flatMap((subBouquet) => {
      return subBouquet.sermonsTitles;
    });
  }).map((sermonTitle, i) => {
    return {
      i: i + 1,
      date: fridaysInYear.value[i] || '',
      sermonTitle,
    };
  });
});

const { name: screenSize } = useDisplay();
const chunks = computed(() => {
  const chunkCount = { xs: 1, sm: 1, md: 2, lg: 3 };
  const chunks = [];
  let chunkSize = Math.ceil(sermonsTitles.value.length / (chunkCount[(screenSize.value)] || 3));

  chunkSize = chunkSize < 3 ? 3 : chunkSize;

  for (let i = 0; i < sermonsTitles.value.length; i += chunkSize) {
    chunks.push(sermonsTitles.value.slice(i, i + chunkSize));
  }

  return chunks;
});

</script>

<template>
  <v-row wrap class="mt-2 shadow-md">
    <v-col
      v-for="(chunk, i) in chunks"
      :key="i"
      cols="12" md="6" lg="4"
      class="ma-0 pa-0 relative overflow-x-auto"
    >
      <table
        fixed-header
        density="comfortable"
        class="w-full border-collapse border text-sm"
      >
        <thead class="text-gray-600 uppercase bg-blue-50">
          <tr>
            <th
              v-for="(column) in columns"
              :key="column.key"
              scope="col"
              class="text-start pa-3"
            >
              {{ $t(column.title) }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in chunk"
            :key="item.i"
            class="border"
          >
            <td class="text-gray-500 pa-3">{{ item.i }}</td>
            <td class="pa-3">{{ item.date }}</td>
            <td class="pa-3">{{ item.sermonTitle }}</td>
          </tr>
        </tbody>
      </table>
    </v-col>
  </v-row>
</template>
