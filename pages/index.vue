<script setup>
definePageMeta({ middleware: 'auth' });

import { useDisplay } from 'vuetify';
const { xs } = useDisplay();

const tableData = useTableData();

const dialogVisible = ref(false);
const selectedItem = ref({ data: null, i: null });

watch (dialogVisible, (val) => {
  if (!val) {
    selectedItem.value = { data: null, i: null };
  }
});

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
  <SummaryList
    v-if="xs"
    @edit="editItem"
  />

  <SummaryTable
    v-else
    @edit="editItem"
  />

  <LazyAddDialog
    v-if="dialogVisible"
    v-model="dialogVisible"
    :selected-item="selectedItem.data"
    @save="save"
  />
</template>
