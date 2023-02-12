<template>
  <div>
    <h1 class="text-xl font-bold text-gray-500 m">{{ form.title }}</h1>
    <p class="text-gray-500 mb-3">{{ form.subTitle }}</p>
  </div>
  <div class="flex flex-col gap-3 my-3" v-if="form?.blocks">
    <div v-for="f of form.blocks" :key="f.id" :class="f.class">
      <q-input
        v-if="f.type == 'text' || f.type == 'textarea' || f.type == 'number'"
        outlined
        dense
        :label="f.props.title"
        v-model="formData[f.token]"
        @update:modelValue="onUpdate"
        v-bind="f.props"
      />
      <q-checkbox
        v-if="f.type == 'checkbox'"
        :label="f.props.title"
        v-model="formData[f.token]"
        @update:modelValue="onUpdate"
        v-bind="f.props"
      />
      <q-toggle
        v-if="f.type == 'toggle'"
        :label="f.props.title"
        v-model="formData[f.token]"
        @update:modelValue="onUpdate"
        v-bind="f.props"
      />
      <q-input
        v-if="f.type === 'date'"
        :label="f.props.title"
        outlined
        dense
        v-model="formData[f.token]"
        @update:modelValue="onUpdate"
        mask="date"
        v-bind="f.props"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="formData[f.token]" @update:modelValue="onUpdate">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <slot name="custom" :field="f" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: "myForm",
  },
  modelValue: {
    type: Object,
    default() {
      return {};
    },
  },
  form: {
    type: Object,
    default() {
      return {};
    },
  },
});
const emits = defineEmits(["update:modelValue", "change"]);
const formData = ref({});

onMounted(() => {
  formData.value = { ...props.modelValue };
});

const onUpdate = () => {
  emits("update:modelValue", formData.value);
};

watch(
  () => props.modelValue,
  () => (formData.value = { ...props.modelValue }),
  { deep: true }
);
</script>
