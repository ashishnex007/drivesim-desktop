<template>

  <div class="w-[1rem] h-[1rem] bg-white absolute"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute top-0 right-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute bottom-0 right-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute bottom-0 left-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

  
</template>

<script setup>
  import { ref } from 'vue';
  import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
  import prac from "../assets/svg/prac.svg";

  // states
  const selectedDifficulty = ref(null);
  const selectedScenario = ref(null);
  const difficulty = ref('');
  const currentSlide = ref(0);
  const townNumber = ref('2');
  const statex = ref('landing'); // state for which view to be shown
  const previousState = ref(''); // store the previous state

  const weatherOptions = [
    { name: 'Wet' },
    { name: 'Cloudy' },
    { name: 'Noon' },
  ];
  const selectedWeather = ref(weatherOptions[0])

  function selectDifficulty(difficulty) {
    selectedDifficulty.value = difficulty;
    window.electronAPI.sendDifficulty(difficulty); // * for IPC
    window.electronAPI.sendRightState('diff_sce');
  }

  function selectScenario(scenario) {
    selectedScenario.value = scenario;
    window.electronAPI.sendScenario(scenario); // * for IPC
    window.electronAPI.sendRightState('diff_sce');
  }

  function proceedToNext() {
    if (selectedDifficulty.value && selectedScenario.value) {
      console.log(`Proceeding with ${selectedDifficulty.value} difficulty and ${selectedScenario.value}`);
    }
  }

  function changeTown(direction) {
    const towns = ['2', '3', '4', '5', '6'];
    const currentIndex = towns.indexOf(townNumber.value);
    const nextIndex = currentIndex + direction;
    if (nextIndex < 0) {
      townNumber.value = towns[towns.length - 1];
      window.electronAPI.sendTown(townNumber.value);
    } else if (nextIndex >= towns.length) {
      townNumber.value = towns[0];
      window.electronAPI.sendTown(townNumber.value);
    } else {
      townNumber.value = towns[nextIndex];
      window.electronAPI.sendTown(townNumber.value);
    }
    window.electronAPI.sendRightState('towns');
  }

  function handleTowns(){
    changeState('towns');
    window.electronAPI.sendRightState('towns');
  }

  function handlePlay(){
    changeState('play');
    window.electronAPI.sendRightState('diff_sce');
  }

  function changeState(state) {
    previousState.value = statex.value;
    statex.value = state;
    if(state === 'towns') {
      window.electronAPI.sendTown(townNumber.value);
    }
  }

  function goBack() {
    statex.value = previousState.value;
  }

  function runPythonScript() {
    const level = selectedDifficulty.value;
    const scene = selectedScenario.value.slice(5, 6);
    const town = townNumber.value;
    console.log(level, scene, town);

    console.log(typeof level, typeof scene, typeof town);

    if(level && scene && town){
      window.electronAPI.runPython(level, scene, town);
    }else{
      console.log('Please select a difficulty, scenario, and town before playing.');
      alert("are u dumb ?");
    }
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