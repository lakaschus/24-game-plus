<!-- ResultMessage.vue -->
<template>
  <div class="card" v-if="show">
    <Message severity="secondary" icon="pi pi-equals" :closable="false">
      Info Message: {{ valueN }}, {{ valueGuess }}
    </Message>
  </div>
</template>

<script setup>
import Message from "primevue/message";
import "primeicons/primeicons.css";
import { defineProps } from "vue";

defineProps({
  show: Boolean,
  valueN: Number,
  valueGuess: String,
});
</script>
