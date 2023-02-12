<template>
  <q-page class="p-6">
    <div class="text-lg font-bold px-5">User List</div>
    <q-table :rows="rows" :filter="filter" class="shadow-sm border px-2">
      <template #top-left>
        <q-input dense v-model="filter" outlined placeholder="Search.......">
          <template #prepend>
            <q-icon name="eva-search" />
          </template>
        </q-input>
      </template>
      <template #top-right>
        <q-btn
          label="Add User"
          color="primary"
          no-caps
          icon="eva-plus"
          unelevated
          :ripple="false"
          to="/adduser"
        />
      </template>
      <template #body-cell-address="{ value }">
        <q-td>
          {{ `${value?.street}, ${value?.city}, ${value?.zipcode}` }}
        </q-td>
      </template>
      <template #body-cell-company="props">
        <q-td>
          {{ props.row.company?.name }}
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { api } from "boot/axios";
import { onMounted, ref } from "vue";
const filter = ref("");
const rows = ref([]);
onMounted(async () => {
  let res = await api.get("/users");
  if (res.data) {
    rows.value = res.data;
  }
});
</script>
