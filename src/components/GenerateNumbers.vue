<!-- GenerateNumbers.vue -->
<template>
  <div class="card flex justify-content-center" style="margin-bottom: 10px;">
    <Button label="Generate Numbers" @click="generateNumbers" />
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import { generateAllCombinations } from '../logic/logic.js';
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['numbersGenerated']);

const props = defineProps({
  valueN: Number
});

async function generateNumbers() {
  const count = Math.floor(Math.random() * 3) + 3; // Generate a random count between 3 and 5
  let numbers = '';

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * 9) + 1; // Generate a random number between 1 and 9
    numbers = numbers + String(randomNumber);
  }

  console.log('Generated numbers:', numbers);

  // if no valid combinations are found, try again
  const combs = await generateAllCombinations(numbers, props.valueN, true);
  console.log('Checking for valid combinations', combs)
  if (combs.length === 0) {
    console.log('No valid combinations found, trying again')
    return generateNumbers();
  }

  emit('numbersGenerated', numbers); // Emit the generated numbers as a string
}
</script>
