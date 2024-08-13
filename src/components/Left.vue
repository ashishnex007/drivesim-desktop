<template>
  
  <div class="w-[1rem] h-[1rem] bg-white absolute"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute top-0 right-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute bottom-0 right-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute bottom-0 left-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

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