<template>
  <q-form @submit.prevent="onSubmit" class="p-6">
    <RForm :form="form" v-model="userInfo" />
    <q-btn
      type="submit"
      label="Add User"
      color="primary"
      no-caps
      icon="eva-plus"
      unelevated
      :ripple="false"
    />
  </q-form>

  <q-dialog v-model="showPopup" size="lg">
    <div class="bg-white p-6">
      <h1 class="text-xl font-bold text-gray-500 mb-3">User Info</h1>
      <pre>{{ userInfo }}</pre>
    </div>
  </q-dialog>
</template>
<script setup>
import form from "./form";
import RForm from "src/components/RForm.vue";
import { ref } from "vue";

const showPopup = ref(false);
const userInfo = ref({});

const onSubmit = () => {
  console.log("submit form", userInfo.value);
  showPopup.value = true;
};
</script>
