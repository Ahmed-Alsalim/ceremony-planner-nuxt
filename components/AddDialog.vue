<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  selectedItem: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(['update:modelValue', 'save']);

const formData = ref({
  mainTitle: '',
  subBouquets:[
    { subTitle: '',
      sermonsTitles: [''],
    }],
});

const dialogVisible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

onMounted(() => {
  if(props.selectedItem) {
    formData.value = useCloneDeep(props.selectedItem);
  }
});

const addSubBouquet = () => {
  formData.value.subBouquets.push({
    subTitle: '',
    sermonsTitles: [''],
  });
};
const addSermonTitle = (i) => {
  formData.value.subBouquets[i].sermonsTitles.push('');
};

const save = () => {
  emit('save', formData.value);
  dialogVisible.value = false;
};

</script>

<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="500px"
    scrollable
    persistent
  >
    <v-card>
      <v-card-title primary-title>
        <v-text-field
          v-model="formData.mainTitle"
          :label="$t('main.theme')"
          density="comfortable"
          variant="outlined"
          class="mt-3"
          hide-details
        />
      </v-card-title>

      <v-card-text>
        <v-expansion-panels
          v-if="formData.mainTitle"
          :model-value="[0, 1, 2, 3, 4]"
          multiple
        >
          <v-expansion-panel
            v-for="(subBouquet, i2) in formData.subBouquets"
            :key="i2"
            expand
            focusable
          >
            <v-expansion-panel-title color="blue-lighten-5">
              <v-text-field
                v-model="formData.subBouquets[i2].subTitle"
                :label="$t('sub.bouquet.title')"
                density="comfortable"
                variant="outlined"
                hide-details
                @click.stop
              />
            </v-expansion-panel-title>
            <v-expansion-panel-text v-if="formData.subBouquets[i2].subTitle">
              <v-list>
                <v-list-item
                  v-for="(sermonTitle, i3) in subBouquet.sermonsTitles"
                  :key="i3"
                >
                  <v-list-item-title>
                    <v-text-field
                      v-model="formData.subBouquets[i2].sermonsTitles[i3]"
                      :label="$t('sermon.title') + ` ${i3+1}`"
                      variant="underlined"
                      hide-details
                    />
                  </v-list-item-title>
                </v-list-item>

                <v-list-item v-if="subBouquet.sermonsTitles?.length < 4">
                  <v-btn
                    :text="$t('add.sermon')"
                    prepend-icon="mdi-plus"
                    color="success"
                    block
                    @click="addSermonTitle(i2)"
                  />
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-btn
            v-if="formData.subBouquets?.length < 4"
            :text="$t('add.bouquet')"
            prepend-icon="mdi-plus"
            color="success"
            class="mt-2"
            block
            @click="addSubBouquet"
          />
        </v-expansion-panels>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          :text="$t('cancel')"
          color="red"
          @click="dialogVisible = false"
        />

        <v-btn
          :text="$t('save')"
          color="blue"
          @click="save"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
