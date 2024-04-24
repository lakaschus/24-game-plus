<!-- RulesDialog.vue -->
<template>
  <Button icon="pi pi-info-circle" @click="showRules = true" class="p-button-text"/>
  <Dialog v-model:visible="showRules" position="top" modal header="Game Rules" :style="{ width: '50vw' }"  class="card flex justify-content-center">
    <p>This is an extended variant of the <a href="https://en.wikipedia.org/wiki/24_(puzzle)" target="_blank">24 Puzzle</a>.</p>
    <ul>
      <li>Generate a set of numbers or come up with your own; Possible numbers are integers from 1 to 9; there should be at least three numbers up to five numbers</li>
      <li>Manipulate these integers in any order so that they yield 24 - or any other number that you specify in the UI;</li>
      <li>If you play with friends: Whoever comes up with a valid arithmetic sequence first wins</li>
      <li>Playing alone: Try to come up with as many different valid solutions as possible!</li>
    </ul>

    <p>If you want to see how it works (Mostly bruteforce) or want to modify this game further, checkout the <a href="https://github.com/lakaschus/24-game-plus" target="_blank">github repo</a>. </p>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const showRules = ref(false);
</script>

<style scoped>

.card {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

</style>