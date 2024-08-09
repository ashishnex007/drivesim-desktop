<template>
  <h1 class="text-center text-white font-semibold text-6xl my-24 mb-28">MOBILITY DRIVING SIMULATOR</h1>
  
  <div id="landingFrame" class="flex justify-between items-center frame">

    <div class="flex flex-col w-1/2 items-center gap-y-8">
        <button onclick="" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">PRACTICE</button>
        <button onclick="" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">PLAY</button>
        <button onclick="" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SETTINGS</button>
        <button onclick="" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">EXPLORE</button>
        <button onclick="" class="w-[20rem] bg-red-500 text-4xl text-white hover:text-5xl hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">EXIT</button>        
    </div>

    <div>
        <!-- <img src="hero.png" class="h-[35rem] px-20" /> -->
    </div>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  
  const difficulty = ref('');
  
  function chooseDifficulty(level) {
    difficulty.value = `You chose ${level}`;
    window.electronAPI.sendDifficulty(level);
  }
  </script>
  
  <style scoped>
  </style>
  