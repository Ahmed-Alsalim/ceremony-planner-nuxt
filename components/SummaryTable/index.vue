<script setup>
defineProps({
  columns: {
    type: Array,
    required: true,
  },
  tableData: {
    type: Array,
    required: true,
  },
})

const sermonsCount = (mainTopic) => {
  return mainTopic.subBouquets.reduce((count, subBouquet) => {
    return count + subBouquet.sermonsTitles.length
  }, 0)
}

</script>

<template>
  <div class="relative overflow-x-auto shadow-md rounded-md">
    <table class="w-full border border-collapse text-sm text-gray-600">
      <thead class="text-gray-600 uppercase bg-blue-50">
        <tr>
          <th
            v-for="column in columns"
            :key="column.field"
            scope="col"
            class="py-2"
          >
            {{ column.header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in tableData">
          <template v-for="(subBouquet, i2) in item.subBouquets">
            <tr
              v-for="(sermonTitle, i3) in subBouquet.sermonsTitles"
              :key="i3"
              class="border border-gray-200"
            >
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
