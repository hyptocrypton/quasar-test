<script setup>
import { ref } from 'vue'

const pagename = "Testseite"

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ pagename }}</h1>
  <div>
       <q-card class="my-card">
      <q-card-section>
        {{ pagename }}
      </q-card-section>
    </q-card>

  </div>



 
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
