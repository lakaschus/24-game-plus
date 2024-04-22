<template>
  <!-- Component for defining number N -->
  <DefineNumber24 ref="numberN" />
  <!-- Component for inserting n numbers -->
  <NumberInput ref="valueGuess" />
  <!-- Button component to submit -->
  <div class="card flex justify-content-center">
    <Button label="Submit" v-model="showResult" @click="toggle" />
  </div>
  <!-- Component to show result -->
  <ResultMessage
    :show="showResult"
    :valueN="numberN.value"
    :valueGuess="valueGuess.value"
  />
  <!-- Debug Component -->
  <pre>{{ valueGuess }}{{ permutations }}</pre>
</template>

<script setup>
import DefineNumber24 from "./components/DefineNumber24.vue";
import NumberInput from "./components/NumberInput.vue";
import Button from "primevue/button";
import ResultMessage from "./components/ResultMessage.vue";
import { generatePermutations } from "./logic/logic.js";
import { ref } from "vue";

const numberN = ref(24);
const valueGuess = ref("");
const showResult = ref(false);
const permutations = ref([]);

function toggle() {
  showResult.value = !showResult.value;
  console.log("valueGuess.value", valueGuess.value.value);
  permutations.value = generatePermutations(valueGuess.value.value);
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
