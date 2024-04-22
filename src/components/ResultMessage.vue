<!-- ResultMessage.vue -->
<template>
  <div class="card" v-if="show">
    <Message severity="info" :closable="false">
      Number of solutions: {{ result.length }}
    </Message>
    <div for="result" v-for="item in result" :key="item">
      <Message severity="secondary" icon="pi pi-equals" :closable="false">
      <!-- remove first and last char -->
        {{ item[0].slice(1, -1)}}
      </Message>
    </div>
  </div>
</template>

<script setup>
import Message from "primevue/message";
import "primeicons/primeicons.css";
import { defineProps, onUpdated } from "vue";

// Call function when created
onUpdated(() => {
  console.log("propst", props);
})

const props = defineProps({
  show: Boolean,
  valueN: Number,
  valueGuess: String,
  result: {
    type: Array,
    default: () => []
  }
});
</script>
