<template>
<div id="app">
  <div class="app-container">
    <h1 class="app-title">Number Game 24+</h1>
    <DefineNumber24 ref="numberN" class="large-component" />
    <NumberInput ref="valueGuess" class="large-component" />
    <div class="card flex justify-content-center" v-if="!showResult">
      <Button label="Submit" v-model="showResult" @click="toggleAndLoad" :loading="loading" class="large-button" />
    </div>
    <ResultMessage
      :show="showResult"
      :valueN="numberN.value"
      :valueGuess="valueGuess.value"
      :result="results"
      :time="time"
      class="result-section"
    />
  </div>
  </div>
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
const time = ref(0);
const start = ref(0);
const end = ref(0);

const computedValueGuess = computed(() => valueGuess.value.value);
const computedNumberN = computed(() => numberN.value.value);

// Whenever valueGuess or numberN changes, update showResult to false
watch([computedValueGuess, computedNumberN], async () => {
  showResult.value = false;
  loading.value = false;
  // end.value = performance.now();
  // time.value = end.value - start.value;
  // console.log("Time taken: ", time.value);
  // console.log("start", start.value);
  // console.log("end", end.value);
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
  // Measure time ...
  start.value = performance.now();
  results.value = await generateAllCombinations(valueGuess.value.value, numberN.value.value);
  end.value = performance.now();
  time.value = end.value - start.value;
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

.app-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.8);
  
}

#app {
  background-image: url('./assets/backgroundImage.svg');
  background-repeat: repeat;
  background-size: cover;
  background-size: 30%; /* Adjust the size to your desired percentage */
  min-height: 90vh;
}

.app-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.large-component {
  font-size: 44px;
  margin-bottom: 20px;
}

.large-button {
  font-size: 28px;
  padding: 10px 20px;
}

.result-section {
  margin-top: 30px;
}
</style>
