<template>
  
  <div class="w-[1rem] h-[1rem] bg-white absolute"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute top-0 right-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute bottom-0 right-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute bottom-0 left-0"></div>
  <div class="w-[1rem] h-[1rem] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

  <div v-if="rightState === 'landing'" class="w-full h-screen flex justify-center">
    <img :src="steering_wheel" />
  </div>

  <div v-if="rightState === 'diff_sce'">
    <h1 class="text-3xl text-white text-center">You are choosing{{ selectedDifficulty }}</h1>
    <h1 class="text-3xl text-white text-center">You are choosing{{ selectedScenario }}</h1>
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
