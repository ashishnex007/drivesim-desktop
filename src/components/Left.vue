<template>
  <div class="h-screen w-full flex justify-center items-center">
    <img src="../assets/logo.svg" class="h-[40rem]" />
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
</style>