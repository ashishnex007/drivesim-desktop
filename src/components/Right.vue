<template>

  <div v-if="rightState === 'landing'" class="w-full h-screen flex justify-center">
    <img :src="steering_wheel" />
  </div>

  <div v-if="rightState === 'diff_sce'" class="w-full h-[5000px]">

    <div class="flex flex-col items-center gap-y-4 py-12">
      <div v-if="selectedDifficulty" class="flex gap-x-2">
        <h1 class="text-4xl text-white text-center uppercase font-semibold">You are choosing the difficulty: </h1>
        <h1 class="text-4xl text-white text-center font-semibold uppercase">{{ selectedDifficulty }}</h1>
      </div>
      <div v-if="selectedScenario" class="flex gap-x-2">
        <h1 class="text-4xl text-white text-center uppercase font-semibold">You are choosing the scenario: </h1>
        <h1 class="text-4xl text-white text-center font-semibold uppercase">{{ selectedScenario }}</h1> 
      </div>
    </div>

    <!-- easy scene 1: CL, FLV, DOC -->
    <div v-if="selectedDifficulty === 'easy' && selectedScenario === 'scene1'" class="flex">

      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Speed Breaker</h1>
      </div>

      <div>
        <img :src="FLV" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Follow Leading Vehicle</h1>
      </div>

      <div>
        <img :src="DOC" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Dynamic Object Crossing</h1>
      </div>

    </div>

    <!-- easy scene 2: CL, FLV, SCO -->
    <div v-if="selectedDifficulty === 'easy' && selectedScenario === 'scene2'" class="grid grid-cols-3 gap-4">

      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Speed Breaker</h1>
      </div>

      <div>
        <img :src="FLV" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Follow Leading Vehicle</h1>
      </div>

      <!-- add SCO here -->

    </div>

    <!-- intermediate scene 1: CL, FLV, DOC, VTR -->
    <div v-if="selectedDifficulty === 'intermediate' && selectedScenario === 'scene1'" class="grid grid-cols-3 gap-4">

      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Speed Breaker</h1>
      </div>

      <div>
        <img :src="FLV" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Follow Leading Vehicle</h1>
      </div>

      <div>
        <img :src="DOC" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Dynamic Object Crossing</h1>
      </div>
      
      <!-- add VTR here -->
    </div>

    <!-- intermediate scene 2: CL, SCO, MOD, OVRRL -->
    <div v-if="selectedDifficulty === 'intermediate' && selectedScenario === 'scene2'" class="grid grid-cols-3 gap-4">
      
      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Speed Breaker</h1>
      </div>

      <!-- add SCO here -->

      <!-- add MOD here -->

      <div>
        <img :src="OVRRL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Opposite Vehicle Running Red Light</h1>
      </div>

    </div>

    <!-- intermediate scene 3: CL, SCO, SJLRT -->
    <div v-if="selectedDifficulty === 'intermediate' && selectedScenario === 'scene3'" class="grid grid-cols-3 gap-4">

      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Speed Breaker</h1>
      </div>

      <!-- add SCO here -->
      <!-- add SJLRT here -->

    </div>

    <!-- hard scene 1: CL, FLV, DOC, VTR, SCO, MOD, OVRRL -->
    <div v-if="selectedDifficulty === 'hard' && selectedScenario === 'scene1'" class="grid grid-cols-3 gap-4">
        
      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Speed Breaker</h1>
      </div>

      <div>
        <img :src="FLV" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Follow Leading Vehicle</h1>
      </div>

      <div>
        <img :src="DOC" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Dynamic Object Crossing</h1>
      </div>

      <!-- add VTR here -->
      <!-- add SCO here -->
      <!-- add MOD here -->

      <div>
        <img :src="OVRRL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Opposite Vehicle Running Red Light</h1>
      </div>

    </div>

    <!-- hard scene 2: CL, SCO, SJLRT, NSJC, FLVWO -->
    <div v-if="selectedDifficulty === 'hard' && selectedScenario === 'scene2'" class="grid grid-cols-3 gap-4">
        
      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Speed Breaker</h1>
      </div>

      <!-- add SCO here -->
      <!-- add SJLRT here -->
      <!-- add NSJC here -->
      <!-- add FLVWO here -->
    </div>
    
    <!-- hard scene 3: CL, SFLVWO, CI, ChL -->
    <div v-if="selectedDifficulty === 'hard' && selectedScenario === 'scene3'" class="grid grid-cols-3 gap-4">
      
      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4 uppercase font-semibold">Speed Breaker</h1>
      </div>

      <!-- add SFLVWO here -->
      <!-- add CI here -->
      <!-- add ChL here -->
    </div>

  </div>

  <div class="h-screen" v-if="rightState === 'towns'">

    <h1 class="text-6xl text-yellow font-bold text-center py-8">SUMMARY</h1>

    <div v-if="selectedTown === 2"> 
      <div class="py-10">
        <h1 class="text-white text-center font-bold text-3xl">TYPE: SMALL URBAN CITY</h1>
        <h1 class="text-white text-center font-bold text-3xl">EXPECTED GAME TIME: 2 MINS.</h1>
      </div>
      <div class="flex justify-center">
        <img class="object-contain h-[60vh]" src="../assets/town_gifs/town 2.gif" alt="slide 1"/>
      </div>
    </div>

    <div v-if="selectedTown === 3">
      <div class="py-10">
        <h1 class="text-white text-center font-bold text-3xl">TYPE: LARGE URBAN CITY</h1>
        <h1 class="text-white text-center font-bold text-3xl">EXPECTED GAME TIME: 2 MINS.</h1>
      </div>
      <div class="flex justify-center">
        <img class="object-contain h-[60vh]" src="../assets/town_gifs/town 3.gif" alt="slide 1"/>
      </div>
    </div>

    <div v-if="selectedTown === 4">
      <div class="py-10">
        <h1 class="text-white text-center font-bold text-3xl">TYPE: HIGHWAY</h1>
        <h1 class="text-white text-center font-bold text-3xl">EXPECTED GAME TIME: 3 MINS.</h1>
      </div>
      <div class="flex justify-center">
        <img class="object-contain h-[60vh]" src="../assets/town_gifs/town 4.gif" alt="slide 1"/>
      </div>
    </div>

    <div v-if="selectedTown === 5">
      <div class="py-10">
        <h1 class="text-white text-center font-bold text-3xl">TYPE: METRO CITY</h1>
        <h1 class="text-white text-center font-bold text-3xl">EXPECTED GAME TIME: 2 MINS.</h1>
      </div>
      <div class="flex justify-center">
        <img class="object-contain h-[60vh]" src="../assets/town_gifs/town 5.gif" alt="slide 1"/>
      </div>
    </div>

    <div v-if="selectedTown === 6">
      <div class="py-10">
        <h1 class="text-white text-center font-bold text-3xl">TYPE: SUB URBAN CITY</h1>
        <h1 class="text-white text-center font-bold text-3xl">EXPECTED GAME TIME: 2 MINS.</h1>
      </div>
      <div class="flex justify-center">
        <img class="object-contain h-[60vh]" src="../assets/town_gifs/town 6.gif" alt="slide 1"/>
      </div>
    </div>

  </div>

  <div class="h-screen" v-if="rightState === 'viewScenarios'">
    <div class="h-screen flex flex-col justify-center items-center">
      <h1 class="text-4xl text-white p-4 font-bold">
        You are viewing {{ sceneName }}
      </h1>
      <h1 class="text-2xl px-8 font-bold">
        You are viewing the scenario {{ sceneDescription }}
      </h1>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue';
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
  const selectedScene = ref('');

  const sceneNames = [
    { name: 'Construction Setup Crossing', description: 'Construction Setup Crossing is a scenario where the player has to navigate through a construction site.'},
    { name: 'Control Loss', description: 'Control Loss is a scenario where the player has to regain control of the vehicle after losing it.'},
    { name: 'Dynamic Object Crossing', description: 'Dynamic Object Crossing is a scenario where the player has to navigate through a road with dynamic objects crossing.'},
    { name: 'Follow Leading Vehicle', description: 'Follow Leading Vehicle is a scenario where the player has to follow a leading vehicle.'},
    { name: 'Non Signalized Left Turn', description: 'Non Signalized Left Turn is a scenario where the player has to make a left turn without any signals.'},
    { name: 'Opposite Vehicle Running Red Light', description: 'Opposite Vehicle Running Red Light is a scenario where the player has to avoid a vehicle running a red light.'},
    { name: 'Uphill Traffic', description: 'Uphill Traffic is a scenario where the player has to navigate through uphill traffic.'}
  ];

  const sceneName = computed(() => sceneNames[selectedScene.value - 1].name);
  const sceneDescription = computed(() => sceneNames[selectedScene.value - 1].description);

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

    window.electronAPI.onSceneChange((event, scene) => { // for explore page
      selectedScene.value = scene;
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
