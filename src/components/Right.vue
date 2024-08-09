<template>
  <div class="container mx-auto">
    <h1>oi i am left</h1>
    <h1>{{ title }}</h1>
    <h1 class="text-center text-4xl">{{ message }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const title = ref('Mobility Driving Simulator');
const message = ref('');

onMounted(() => {
  window.electronAPI.onDifficultyChange((event, difficulty) => {
    message.value = `You chose ${difficulty}`;
  });
});
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>