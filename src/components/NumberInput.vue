<!-- OtpInput.vue -->
<template>
  <div class="card flex justify-content-center">
    <InputOtp v-model="value" :length="5">
      <template #default="{ attrs, events }">
        <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
      </template>
    </InputOtp>
  </div>
  <div v-if="value.length < 3" class="card p-text-center p-text-danger flex justify-content-center">
      Please enter at least 3 numbers
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
  width: 44px;
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

.card {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

</style>
