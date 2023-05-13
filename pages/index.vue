<script setup>
import { useDisplay } from 'vuetify'

const columns = [
  { field: 'mainTitle', header: 'Main Topic' },
  { field: 'subTitle', header: 'Sub Topic' },
  { field: 'sermonTitle', header: 'Sermon Title' },
]
const tableData = ref([
  {
    mainTitle: 'Main Topic 1',
    subBouquets: [
      { subTitle: 'Sub bouquet 1',
        sermonsTitles: [
          'sermon 1',
          'sermon 2',
          'sermon 3',
        ],
      },
      { subTitle: 'Sub bouquet 2',
        sermonsTitles: [
          'sermon 1',
          'sermon 2',
          'sermon 3',
        ],
      },
    ]
  },
  {
    mainTitle: 'Main Topic 2',
    subBouquets: [
      { subTitle: 'Sub bouquet 1',
        sermonsTitles: [
          'sermon 1',
          'sermon 2',
        ],
      },
    ],
  },
])


const formData = ref({
  mainTitle: '',
  subBouquets:[
    { subTitle: '',
      sermonsTitles: [''],
    }],
})

const { xs } = useDisplay()

const dialogVisible = ref(false)

const print = (x) => {
  console.debug('print', x)
}

const save = (data) => {
  dialogVisible.value = false
}

</script>

<template>
  <v-container>
    <v-btn @click="dialogVisible = true">edit</v-btn>

    <SummaryList v-if="xs" :table-data="tableData" />

    <SummaryTable
      v-else
      :columns="columns"
      :table-data="tableData"
    />

    <br><br><br><br>
    {{ tableData }}

    <v-dialog
      v-model:visible="dialogVisible"
    />
  </v-container>
</template>
