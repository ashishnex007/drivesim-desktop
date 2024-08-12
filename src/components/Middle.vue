<template>
  <h1 class="text-center text-white font-semibold text-6xl my-24 mb-12">MOBILITY DRIVING SIMULATOR</h1>

  <div id="landingFrame" class="flex justify-center items-center frame">
    <!-- <div id="landingFrame" class="flex justify-between items-center frame"> -->
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

    <div v-if="statex === 'towns'" class="wrap-home-resources">
      <h1 class="text-yellow text-4xl py-4 text-center font-semibold">SELECT YOUR TOWN</h1>
      <CCarousel v-model:active="currentSlide" transition="crossfade" controls interval="false" class="w-[40rem]">
        <CCarouselItem>
          <img class="h-[30rem] w-[60vw] px-12 justify-center object-contain" src="../assets/town_maps/town2map.png" alt="slide 1"/>
          <CCarouselCaption>
            <div class="flex flex-col items-center justify-center py-4">
              <h5 class="text-white text-4xl font-semibold">Town 2</h5>
              <p class="text-white text-2xl">This is an awesome town</p>
            </div>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <img class="h-[30rem] w-[60vw] px-12 justify-center object-contain" src="../assets/town_maps/town3map.png" alt="slide 2"/>
          <CCarouselCaption class="d-none d-md-block">
            <div class="flex flex-col items-center justify-center py-4">
              <h5 class="text-white text-4xl font-semibold">Town 3</h5>
              <p class="text-white text-2xl">This is an awesome town</p>
            </div>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <img class="h-[30rem] w-[60vw] px-12 justify-center object-contain" src="../assets/town_maps/town4map.png" alt="slide 3"/>
          <CCarouselCaption class="d-none d-md-block">
            <div class="flex flex-col items-center justify-center py-4">
              <h5 class="text-white text-4xl font-semibold">Town 4</h5>
              <p class="text-white text-2xl">This is an awesome town</p>
            </div>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <img class="h-[30rem] w-[60vw] px-12 justify-center object-contain" src="../assets/town_maps/town5map.png" alt="slide 4"/>
          <CCarouselCaption class="d-none d-md-block">
            <div class="flex flex-col items-center justify-center py-4">
              <h5 class="text-white text-4xl font-semibold">Town 5</h5>
              <p class="text-white text-2xl">This is an awesome town</p>
            </div>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <img class="h-[30rem] w-[60vw] px-12 justify-center object-contain" src="../assets/town_maps/town6map.png" alt="slide 5"/>
          <CCarouselCaption class="d-none d-md-block">
            <div class="flex flex-col items-center justify-center py-4">
              <h5 class="text-white text-4xl font-semibold">Town 6</h5>
              <p class="text-white text-2xl">This is an awesome town</p>
            </div>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>

    <!-- <div> -->
      <!-- <img src="hero.png" class="h-[35rem] px-20" /> -->
    <!-- </div> -->
  </div>
  <button @click="changeState('landing')" class="w-[20rem] bg-red-500 text-4xl text-white hover:text-5xl hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">BACK</button>
</template>

<script setup>
  import { ref } from 'vue';
  import { CCarousel } from '@coreui/vue';
  import { CCarouselItem } from '@coreui/vue';


  // states
  const difficulty = ref('');
  const currentSlide = ref(0);
  const statex = ref('landing'); // state for which view to be shown

  function chooseDifficulty(level) {
    difficulty.value = `You chose ${level}`;
    window.electronAPI.sendDifficulty(level);
  }

  function chooseTown(town) {
    window.electronAPI.sendTown(town);
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