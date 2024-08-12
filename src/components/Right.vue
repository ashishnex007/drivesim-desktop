<template>
  <div class="container mx-auto">

    <div v-if="town === '2'">
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel"  data-bs-interval="2500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/town_pics/town_2/town2_1.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_2/town2_2.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_2/town2_3.png" alt="slide 1"/>
          </div>
        </div>
      </div>
    </div>

    <div v-if="town === '3'">
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel"  data-bs-interval="2500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/town_pics/town_3/town3_1.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_3/town3_2.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_3/town3_3.png" alt="slide 1"/>
          </div>
        </div>
      </div>
    </div>

    <div v-if="town === '4'">

      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel"  data-bs-interval="2500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/town_pics/town_4/town4_1.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_4/town4_2.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_4/town4_3.png" alt="slide 1"/>
          </div>
        </div>
      </div>
      
    </div>

    <div v-if="town === '5'">
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel"  data-bs-interval="2500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/town_pics/town_5/town5_1.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_5/town5_2.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_5/town5_3.png" alt="slide 1"/>
          </div>
        </div>
      </div>
    </div>

    <div v-if="town === '6'">
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel"  data-bs-interval="2500">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../assets/town_pics/town_6/town6_1.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_6/town6_2.png" alt="slide 1"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/town_pics/town_6/town6_3.png" alt="slide 1"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { CCarousel } from '@coreui/vue';
  import { CCarouselItem } from '@coreui/vue';

  const title = ref('Mobility Driving Simulator');
  const message = ref('');
  const town = ref('');

  onMounted(() => {
    window.electronAPI.onDifficultyChange((event, difficulty) => {
      message.value = `You chose ${difficulty}`;
    });

    window.electronAPI.onTownChange((event, town) => {
      town.value = town;
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