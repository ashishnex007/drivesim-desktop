<template>

  <div v-if="rightState === 'landing'" class="w-full h-screen flex justify-center">
    <img :src="steering_wheel" />
  </div>

  <div v-if="rightState === 'diff_sce'" class="w-full h-[5000px]">

    <div class="flex flex-col items-center gap-y-4 py-12">
      <div v-if="selectedDifficulty" class="flex gap-x-2">
        <h1 class="text-4xl text-white text-center">You are choosing the difficulty: </h1>
        <h1 class="text-4xl text-white text-center capitalize font-semibold">{{ selectedDifficulty }}</h1>
      </div>
      <div v-if="selectedScenario" class="flex gap-x-2">
        <h1 class="text-4xl text-white text-center">You are choosing the scenario: </h1>
        <h1 class="text-4xl text-white text-center capitalize font-semibold">{{ selectedScenario }}</h1> 
      </div>
    </div>

    <!-- easy scene 1: CL, FLV, DOC -->
    <div v-if="selectedDifficulty === 'easy' && selectedScenario === 'scene1'" class="flex">

      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Control Loss</h1>
      </div>

      <div>
        <img :src="FLV" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Follow Leading Vehicle</h1>
      </div>

      <div>
        <img :src="DOC" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Dynamic Object Crossing</h1>
      </div>

    </div>

    <!-- easy scene 2: CL, FLV, SCO -->
    <div v-if="selectedDifficulty === 'easy' && selectedScenario === 'scene2'" class="grid grid-cols-3 gap-4">

      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Control Loss</h1>
      </div>

      <div>
        <img :src="FLV" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Follow Leading Vehicle</h1>
      </div>

      <!-- add SCO here -->

    </div>

    <!-- intermediate scene 1: CL, FLV, DOC, VTR -->
    <div v-if="selectedDifficulty === 'intermediate' && selectedScenario === 'scene1'" class="grid grid-cols-3 gap-4">

      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Control Loss</h1>
      </div>

      <div>
        <img :src="FLV" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Follow Leading Vehicle</h1>
      </div>

      <div>
        <img :src="DOC" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Dynamic Object Crossing</h1>
      </div>
      
      <!-- add VTR here -->
    </div>

    <!-- intermediate scene 2: CL, SCO, MOD, OVRRL -->
    <div v-if="selectedDifficulty === 'intermediate' && selectedScenario === 'scene2'" class="grid grid-cols-3 gap-4">
      
      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Control Loss</h1>
      </div>

      <!-- add SCO here -->

      <!-- add MOD here -->

      <div>
        <img :src="OVRRL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Opposite Vehicle Running Red Light</h1>
      </div>

    </div>

    <!-- intermediate scene 3: CL, SCO, SJLRT -->
    <div v-if="selectedDifficulty === 'intermediate' && selectedScenario === 'scene3'" class="grid grid-cols-3 gap-4">

      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Control Loss</h1>
      </div>

      <!-- add SCO here -->
      <!-- add SJLRT here -->

    </div>

    <!-- hard scene 1: CL, FLV, DOC, VTR, SCO, MOD, OVRRL -->
    <div v-if="selectedDifficulty === 'hard' && selectedScenario === 'scene1'" class="grid grid-cols-3 gap-4">
        
      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Control Loss</h1>
      </div>

      <div>
        <img :src="FLV" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Follow Leading Vehicle</h1>
      </div>

      <div>
        <img :src="DOC" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Dynamic Object Crossing</h1>
      </div>

      <!-- add VTR here -->
      <!-- add SCO here -->
      <!-- add MOD here -->

      <div>
        <img :src="OVRRL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Opposite Vehicle Running Red Light</h1>
      </div>

    </div>

    <!-- hard scene 2: CL, SCO, SJLRT, NSJC, FLVWO -->
    <div v-if="selectedDifficulty === 'hard' && selectedScenario === 'scene2'" class="grid grid-cols-3 gap-4">
        
      <div>
        <img :src="CL" class="w-[40rem]" />
        <h1 class="text-4xl text-yellow text-center py-4">Control Loss</h1>
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
        <h1 class="text-4xl text-yellow text-center py-4">Control Loss</h1>
      </div>

      <!-- add SFLVWO here -->
      <!-- add CI here -->
      <!-- add ChL here -->
    </div>

  </div>

  <div class="container mx-auto" v-if="rightState === 'towns'">

    <div v-if="selectedTown === '2'">
      <div id="carouselExample2" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/town_pics/town_2/town2_1.png" alt="slide 1"/>
          </div>
          <!-- <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_2/town2_2.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_2/town2_3.png" alt="slide 1"/>
          </div> -->
        </div>
      </div>
    </div>

    <div v-if="selectedTown === '3'">
      <div id="carouselExample3" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/town_pics/town_3/town3_1.png" alt="slide 1"/>
          </div>
          <!-- <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_3/town3_2.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_3/town3_3.png" alt="slide 1"/>
          </div> -->
        </div>
      </div>
    </div>

    <div v-if="selectedTown === '4'">
      <div id="carouselExample4" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/town_pics/town_4/town4_1.png" alt="slide 1"/>
          </div>
          <!-- <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_4/town4_2.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_4/town4_3.png" alt="slide 1"/>
          </div> -->
        </div>
      </div>
    </div>

    <div v-if="selectedTown === '5'">
      <div id="carouselExample5" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/town_pics/town_5/town5_1.png" alt="slide 1"/>
          </div>
          <!-- <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_5/town5_2.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_5/town5_3.png" alt="slide 1"/>
          </div> -->
        </div>
      </div>
    </div>

    <div v-if="selectedTown === '6'">
      <div id="carouselExample6" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/town_pics/town_6/town6_1.png" alt="slide 1"/>
          </div>
          <!-- <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_6/town6_2.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_6/town6_3.png" alt="slide 1"/>
          </div> -->
        </div>
      </div>
    </div>

  </div>
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
