<template>
  
  <div id="landingFrame" class="flex justify-center items-center frame">
    <!-- <div id="landingFrame" class="flex justify-between items-center frame"> -->
      <div v-if="statex === 'landing'" class="flex flex-col w-1/2 items-center gap-y-8">
      <h1 class="text-center text-white font-semibold text-6xl my-24 mb-12">MOBILITY DRIVING SIMULATOR</h1>
      <button @click="changeState('practice')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-yellow hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">PRACTICE</button>
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
      <button @click="changeState('towns')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SCENE 1</button>
      <button @click="changeState('towns')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SCENE 2</button>
      <button @click="changeState('play')" class="w-[20rem] bg-red-500 text-4xl text-white hover:text-5xl hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">BACK</button>
    </div>

    <div v-if="statex === 'medium-hard-scenes'" class="flex flex-col w-1/2 items-center gap-y-8">
      <button @click="changeState('towns')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SCENE 1</button>
      <button @click="changeState('towns')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SCENE 2</button>
      <button @click="changeState('towns')" class="w-[20rem] bg-white text-4xl text-darkBlue hover:bg-[#F9AF06] hover:text-5xl hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">SCENE 3</button>
      <button @click="changeState('play')" class="w-[20rem] bg-red-500 text-4xl text-white hover:text-5xl hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">BACK</button>
    </div>

    <div v-if="statex === 'towns'" class="w-full h-screen">
      <h1 class="text-yellow text-4xl py-4 text-center font-semibold">SELECT YOUR TOWN</h1>

        <div class="h-4/5">
          <div class="w-full flex justify-center">
            <div class="w-[45rem]">
              <img v-if="townNumber === '2'" src="../assets/town_maps/town2map.png" class="h-[45rem] justify-center object-contain" />
              <img v-if="townNumber === '3'" src="../assets/town_maps/town3map.png" class="h-[45rem] justify-center object-contain" />
              <img v-if="townNumber === '4'" src="../assets/town_maps/town4map.png" class="h-[45rem] justify-center object-contain" />
              <img v-if="townNumber === '5'" src="../assets/town_maps/town5map.png" class="h-[45rem] justify-center object-contain" />
              <img v-if="townNumber === '6'" src="../assets/town_maps/town6map.png" class="h-[45rem] justify-center object-contain" />
            </div>
          </div>
          <h5 class="text-white text-center text-4xl font-semibold">Town {{ townNumber }}</h5> 
              
          <div>
            <svg @click="changeTown(-1)" xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="currentColor"  class="absolute cursor-pointer top-1/2 left-[20rem] text-white transform -translate-y-1/2 icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm1.707 6.293a1 1 0 0 0 -1.414 0l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l3 3l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" fill="currentColor" stroke-width="0" /></svg>
            <svg @click="changeTown(-1)" xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="currentColor"  class="absolute cursor-pointer top-1/2 right-[20rem] text-white transform -translate-y-1/2 icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm-1.707 6.293a1 1 0 0 1 1.32 -.083l.094 .083l3 3a1 1 0 0 1 .083 1.32l-.083 .094l-3 3a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293l-2.292 -2.293a1 1 0 0 1 -.083 -1.32l.083 -.094z" fill="currentColor" stroke-width="0" /></svg>
          </div>
        </div>

        <div class="flex justify-between">
          <div class="px-20">
            <button @click="goBack()" class="w-[20rem] flex gap-x-8 items-center bg-red-500 text-4xl text-white hover:text-5xl hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 7l-5 5l5 5" /><path d="M17 7l-5 5l5 5" /></svg>
              BACK
            </button>
          </div>
          <div class="px-20">
            <button @click="changeState('play')" class="w-[20rem] flex gap-x-12 items-center bg-green-500 text-4xl text-white hover:text-5xl hover:bg-green-600 font-bold py-8 px-8 rounded transition-all">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
              PLAY
            </button>
          </div>
        </div>
  
    </div>

  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // states
  const difficulty = ref('');
  const currentSlide = ref(0);
  const townNumber = ref('2');
  const statex = ref('landing'); // state for which view to be shown
  const previousState = ref(''); // store the previous state

  function chooseDifficulty(level) {
    window.electronAPI.sendDifficulty(level);
  }

  function chooseTown(town) {
    window.electronAPI.sendTown(town);
  }

  function changeTown(direction) {
    const towns = ['2', '3', '4', '5', '6'];
    const currentIndex = towns.indexOf(townNumber.value);
    const nextIndex = currentIndex + direction;
    if (nextIndex < 0) {
      townNumber.value = towns[towns.length - 1];
      chooseTown(townNumber.value);
    } else if (nextIndex >= towns.length) {
      townNumber.value = towns[0];
      chooseTown(townNumber.value);
    } else {
      townNumber.value = towns[nextIndex];
      chooseTown(townNumber.value);
    }
  }

  function changeState(state) {
    previousState.value = statex.value;
    statex.value = state;
    if(state === 'towns') {
      chooseTown(townNumber.value);
    }
  }

  function goBack() {
    statex.value = previousState.value;
  }

  function exitApp() {
    window.electronAPI.exitApp(); // Trigger the Electron API to exit the app
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  .svg-scale svg {
    transition: transform 0.3s ease-in-out;
  }
  
  .hover\\:svg-scale:hover svg {
    transform: scale(1.25);
  }
</style>