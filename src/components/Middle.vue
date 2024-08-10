<template>
  <h1 class="text-center text-white font-semibold text-6xl my-24 mb-28">MOBILITY DRIVING SIMULATOR</h1>

  <div id="landingFrame" class="flex justify-between items-center frame">

    <div v-if="statex === 'landing'" class="flex flex-col w-1/2 items-center gap-y-8">
      <button @click="changeState('practice')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">PRACTICE</button>
      <button @click="changeState('play')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">PLAY</button>
      <button @click="changeState('settings')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SETTINGS</button>
      <button @click="changeState('explore')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">EXPLORE</button>
      <button @click="exitApp" class="w-[20rem] bg-red-500 text-4xl text-white hover:text-5xl hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">EXIT</button>
    </div>

    <div v-if="statex === 'play'" class="flex flex-col w-1/2 items-center gap-y-8">
      <button @click="changeState('easy-scenes')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">EASY</button>
      <button @click="changeState('medium-hard-scenes')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">INTERMEDIATE</button>
      <button @click="changeState('medium-hard-scenes')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">HARD</button>
      <button @click="changeState('landing')" class="w-[20rem] bg-red-500 text-4xl text-white hover:text-5xl hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">BACK</button>
    </div>

    <div v-if="statex === 'easy-scenes'" class="flex flex-col w-1/2 items-center gap-y-8">
      <button @click="" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SCENE 1</button>
      <button @click="" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SCENE 2</button>
      <button @click="changeState('play')" class="w-[20rem] bg-red-500 text-4xl text-white hover:text-5xl hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">BACK</button>
    </div>

    <div v-if="statex === 'medium-hard-scenes'" class="flex flex-col w-1/2 items-center gap-y-8">
      <button @click="changeState('towns')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SCENE 1</button>
      <button @click="changeState('towns')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SCENE 2</button>
      <button @click="changeState('towns')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SCENE 3</button>
      <button @click="changeState('play')" class="w-[20rem] bg-red-500 text-4xl text-white hover:text-5xl hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">BACK</button>
    </div>

    <div v-if="statex === 'towns'" class="flex flex-col w-1/2 items-center gap-y-8">
      <button @click="" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">TOWN 2</button>
      <button @click="" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">TOWN 3</button>
      <button @click="" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">TOWN 4</button>
      <button @click="" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">TOWN 5</button>
      <button @click="changeState('landing')" class="w-[20rem] bg-red-500 text-4xl text-white hover:text-5xl hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">BACK</button>
    </div>

    <div>
      <!-- <img src="hero.png" class="h-[35rem] px-20" /> -->
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // states
  const difficulty = ref('');
  const statex = ref('landing'); // state for which view to be shown

  function chooseDifficulty(level) {
    difficulty.value = `You chose ${level}`;
    window.electronAPI.sendDifficulty(level);
  }

  function changeState(state) {
    statex.value = state;
  }

  function exitApp() {
    window.electronAPI.exitApp(); // Trigger the Electron API to exit the app
  }
</script>

<style scoped>
</style>