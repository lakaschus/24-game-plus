<!-- GenerateNumbers.vue -->
<template>
  <div class="card flex justify-content-center" style="margin-bottom: 10px;">
    <Button label="Generate Numbers" @click="generateNumbers" />
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import { defineEmits } from 'vue';

const emit = defineEmits(['numbersGenerated']);

function generateNumbers() {
  const count = Math.floor(Math.random() * 3) + 3; // Generate a random count between 3 and 5
  const numbers = [];

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * 9) + 1; // Generate a random number between 1 and 9
    numbers.push(randomNumber);
  }

  emit('numbersGenerated', numbers.join('')); // Emit the generated numbers as a string
}
</script>
