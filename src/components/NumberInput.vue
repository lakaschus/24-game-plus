<!-- OtpInput.vue -->
<template>
  <div class="card flex justify-content-center">
    <InputOtp v-model="value" :length="6">
      <template #default="{ attrs, events }">
        <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
      </template>
    </InputOtp>
    <div v-if="value.length < 3" class="p-text-center p-text-danger">
      Please enter at least 3 numbers, currently value: {{ value }}
    </div>
  </div>
</template>

<script setup>
import InputOtp from "primevue/inputotp";
import { ref, defineExpose } from "vue";

const value = ref("");

defineExpose({
  value,
});
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
