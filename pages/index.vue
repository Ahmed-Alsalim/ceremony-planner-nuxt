<script setup>
import { useDisplay } from 'vuetify';

const { xs } = useDisplay();

const locale = ref('en');
const columns = [
  { field: 'actions' },
  { field: 'mainTitle', header: 'Main Topic' },
  { field: 'subTitle', header: 'Sub Topic' },
  { field: 'sermonTitle', header: 'Sermon Title' },
];
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
    ],
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
]);
const formData = ref({
  mainTitle: '',
  subBouquets:[
    { subTitle: '',
      sermonsTitles: [''],
    }],
});


const dialogVisible = ref(false);
const selectedItem = ref({ data: null, i: null });

watch (dialogVisible, (val) => {
  if (!val) {
    selectedItem.value = { data: null, i: null };
  }
});

const setLocale = () => {
  locale.value = locale.value === 'en' ? 'ar' : 'en';
};
const editItem = ({ data, i }) => {
  dialogVisible.value = true;
  selectedItem.value.data = data;
  selectedItem.value.i = i;
};

const save = (data) => {
  if (selectedItem.value.data) {
    tableData.value[selectedItem.value.i] = data;
  } else {
    tableData.value.push(data);
  }
};

</script>

<template>
  <v-container>
    <v-locale-provider :locale="locale">
      <v-btn @click="dialogVisible = true">edit</v-btn>
      <v-btn color="success" @click="setLocale">{{ locale }}</v-btn>

      <SummaryList
        v-if="xs"
        :table-data="tableData"
        @edit="editItem"
      />

      <SummaryTable
        v-else
        :columns="columns"
        :table-data="tableData"
        @edit="editItem"
      />

      <br><br><br><br>
      {{ tableData }}

      <LazyAddDialog
        v-if="dialogVisible"
        v-model="dialogVisible"
        :selected-item="selectedItem.data"
        @save="save"
      />
    </v-locale-provider>
  </v-container>
</template>

<style>
 .v-expansion-panel-title__overlay {
  background-color: #035fff45 !important;
 }
</style>