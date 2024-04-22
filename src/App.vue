<template>
  <!-- Component for defining number N -->
  <DefineNumber24 ref="numberN" />
  <!-- Component for inserting n numbers -->
  <NumberInput ref="valueGuess" />
  <!-- Button component to submit -->
  <div class="card flex justify-content-center" v-if="!showResult">
    <!-- When showResult is false button should be disabled -->
    <Button label="Submit" v-model="showResult" @click="toggleAndLoad" :loading="loading"/>
  </div>
  <!-- Component to show result -->
  <ResultMessage
    :show="showResult"
    :valueN="numberN.value"
    :valueGuess="valueGuess.value"
    :result="results"
  />
  <!-- Debug Component -->
  <!-- <pre>{{ valueGuess }}</pre>
  <pre>{{ results }}</pre> -->
</template>

<script setup>
import DefineNumber24 from "./components/DefineNumber24.vue";
import NumberInput from "./components/NumberInput.vue";
import Button from "primevue/button";
import ResultMessage from "./components/ResultMessage.vue";
import { generatePermutations, generateCombinations } from "./logic/logic.js";
import { ref, watch, computed } from "vue";

const numberN = ref(24);
const valueGuess = ref("");
const showResult = ref(false);
const results = ref([]);
const loading = ref(false);
const permutations = ref(0);

const computedValueGuess = computed(() => valueGuess.value.value);
const computedNumberN = computed(() => numberN.value.value);

// Whenever valueGuess or numberN changes, update showResult to false
watch([computedValueGuess, computedNumberN], async () => {
  showResult.value = false;
  loading.value = false;
});

async function toggleAndLoad() {
  loading.value = true;
  // update virtual dom immediately
  await new Promise(resolve => setTimeout(resolve, 0));
  toggle();
}

async function generateAllCombinations(numbers, target) {
  permutations.value = generatePermutations(numbers);
  const results = [];
  for (const permutation of permutations.value) {
    results.push(...generateCombinations(permutation, target));
    await new Promise(resolve => setTimeout(resolve, 0));
  }
  showResult.value = !showResult.value;
  return results;
}

async function toggle() {
  // Wait until generateAllCombinations is done before assigning the value to results
  results.value = await generateAllCombinations(valueGuess.value.value, numberN.value.value);
  console.log("results", results.value);
}
</script>

<style scoped>
.custom-otp-input {
  width: 40px;
  font-size: 36px;
  border: 0 none;
  appearance: none;
  text-align: center;
  transition: all 0.2s;
  background: transparent;
  border-bottom: 2px solid var(--surface-500);
}

.custom-otp-input:focus {
  outline: 0 none;
  border-bottom-color: var(--primary-color);
}
</style>
