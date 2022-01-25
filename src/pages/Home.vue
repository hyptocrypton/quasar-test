<script setup>
import DataService from "../services/data-service";
import { Loading } from "quasar";
import { onMounted, ref } from "vue";

const pageName = "Main Page";

const companies = ref([]);
const loading = ref(true);

async function getCompanies() {
  try {
    loading.value = true;
    const { data: rawCompanies } = await DataService.getCompanies();

    companies.value = rawCompanies.map((company) => ({
      name: company.name,
      kontaktzentrum: company.city,
      kontaktperson: company.contact,
      technologien: company.techs,
      dienstleistungen: company.products,
      weKnow: company.weKnow,
      projectDone: company.projectDone,
      rating: company.rating,
    }));
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => getCompanies());

const columns = [
  {
    name: "desc",
    required: true,
    label: "Name",
    align: "left",
    field: "name",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "kontaktzentrum",
    align: "center",
    label: "Kontaktzentrum",
    field: "kontaktzentrum",
    sortable: true,
  },
  {
    name: "kontaktperson",
    align: "center",
    label: "Kontaktperson",
    field: "kontaktperson",
    sortable: true,
  },
  {
    name: "technologien",
    label: "Technologien",
    field: "technologien",
    sortable: true,
  },
  {
    name: "dienstleistungen",
    label: "Dienstleistungen",
    field: "dienstleistungen",
  },
  { name: "weKnow", label: "Kennen wir", field: "weKnow" },
  {
    name: "projectDone",
    label: "Projekt durchgeführt",
    field: "projectDone",
  },
  {
    name: "rating",
    label: "Rating",
    field: "rating",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const selected = ref([]);

function getSelectedString() {
  return selected.value.length === 0
    ? ""
    : `${selected.value.length} record${
        selected.value.length > 1 ? "s" : ""
      } selected of ${companies.value.length}`;
}
</script>

<template>
  <h1>{{ pageName }}</h1>

  <!-- Data Table -->
  <div class="q-pa-md">
    <div class="q-pa-md">
      <q-table
        title="Firmen"
        :rows="companies"
        :columns="columns"
        row-key="name"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        separator="none"
        v-model:selected="selected"
        :loading="loading"
      >
        <template v-slot:body-cell-technologien="props">
          <q-td :props="props">
            <div v-for="tech in props.value" :key="tech.children">
              <q-chip square>{{ tech.children }}</q-chip>
              <!-- <div>
                <q-badge color="black" :label="tech.children" />
              </div>
              <div class="table-chips">{{ tech.children }}</div> -->
            </div>
          </q-td>
        </template>
      </q-table>
    </div>

    <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
  </div>
</template>

<style scoped>
table-chips {
  font-size: 0.85em;
  font-style: italic;
  max-width: 200px;
  white-space: normal;
  color: #555;
  margin-top: 4px;
}
</style>
