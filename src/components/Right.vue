<template>

<div class="w-[1rem] h-[1rem] bg-white absolute"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute top-0 right-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute bottom-0 right-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute bottom-0 left-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

  
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import steering_wheel from '../assets/steering_wheel.png';

  import CSC from "../assets/scenes/Construction_Setup_Crossing.gif";
  import CL from "../assets/scenes/Control_Loss.gif";
  import DOC from "../assets/scenes/Dynamic_Object_Crossing.gif";
  import FLV from "../assets/scenes/Follow_Leading_Vehicle.gif";
  import NSLT from "../assets/scenes/Non_Signalized_Left_Turn.gif";
  import OVRRL from "../assets/scenes/Opposite_Vehicle_Running_Red_Light.gif";
  import UT from "../assets/scenes/Uphill_Traffic.gif";

  const rightState = ref('landing');
  const selectedDifficulty = ref('');
  const selectedTown = ref('');
  const selectedScenario = ref('');

  onMounted(() => {
    window.electronAPI.onRightStateChange((event, state) => {
      rightState.value = state;
    });

    window.electronAPI.onDifficultyChange((event, difficulty) => {
      selectedDifficulty.value = difficulty;
    });

    window.electronAPI.onScenarioChange((event, scenario) => {
      selectedScenario.value = scenario;
    });

    window.electronAPI.onTownChange((event, town) => {
      selectedTown.value = town;
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
