<!-- NumberInput.vue -->
<template>
  <div class="card flex justify-content-center">
    <InputNumber
      v-model="value"
      showButtons
      buttonLayout="vertical"
      style="width: 3rem"
      :min="12"
      :max="99"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>
  </div>
</template>

<script setup>
import InputNumber from "primevue/inputnumber";
import { ref, defineExpose } from "vue";

const value = ref(24);

defineExpose({
  value,
});
</script>
