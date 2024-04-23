<!-- ResultMessage.vue -->
<template>
  <div class="card" v-if="show">
    <Message severity="info" :closable="false">
      <b>{{ result.length }}</b> solutions found in <b>{{ String(time).slice(0, 6) }}</b> ms
    </Message>
    <div for="result" v-for="item in result" :key="item">
      <Message severity="secondary" icon="pi pi-equals" :closable="false" style="backgroundColor: var(--primary-color)">
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
  time: Number,
  result: {
    type: Array,
    default: () => []
  }
});
</script>
