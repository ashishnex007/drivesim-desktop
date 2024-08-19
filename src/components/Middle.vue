<template>
  
  <div id="landingFrame" class="flex justify-center items-center frame">

    <div v-if="statex === 'main'" class="h-screen">
      <h1 class="text-5xl pt-6 font-bold uppercase text-center">Welcome to</h1>
      <h1 class="text-6xl font-bold uppercase text-center text-white">Mobility Driving Simulator</h1>
      <div class="py-20">
        <h1 class="text-4xl font-semibold text-yellow text-center">CHOOSE YOUR ROLE</h1>
        <div class="flex justify-around py-12">
          <button class="btn btn-primary flex flex-col w-[20rem] h-[20rem]" @click="handleInstructor">
            <h1 class="text-4xl">
              INSTRUCTOR
            </h1>
            <img class="w-[8rem]" src="../assets/svg/instructor.svg" />
          </button>
          <button class="btn btn-accent flex flex-col w-[20rem] h-[20rem]" @click="handleDriver">
            <h1 class="text-4xl">
              DRIVER
            </h1>
            <img class="w-[8rem]" src="../assets/svg/steer_wheel.svg" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="statex === 'landing'" class="flex flex-col h-screen w-1/2 items-center gap-y-8">

      <h1 class="text-center text-white font-semibold text-6xl my-24 mb-12">MOBILITY DRIVING SIMULATOR</h1>
      
      <button class="p-4 btn btn-error flex items-center absolute top-[100px] left-[40px]" @click="changeState('main')">
        <img src="../assets/svg/back.svg" />
      </button>

      <div v-if="role === 'driver'" class="flex items-center gap-x-12">

        <div>
          <div class="label">
            <span class="label-text">What is your name?</span>
          </div>
          <input type="text" class="p-4 rounded w-[25rem]" placeholder="Enter your name" v-model="name" />
        </div>

        <div>
          <label class="cursor-pointer label">
            <span class="label-text">Do you want a report of your performance in the end?</span>
            <input type="checkbox" v-model="isReportChecked" class="checkbox checkbox-success" />
          </label>
        </div>

      </div>
      
      <button @click="changeState('practice')" class="w-[20rem] flex items-center gap-x-4 bg-white text-4xl text-darkBlue hover:bg-yellow  hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">
        <img :src="prac" />
        PRACTICE
      </button>
      <button @click="changeState('play')" class="w-[20rem] flex items-center gap-x-4 bg-white text-4xl text-darkBlue hover:bg-[#F9AF06]  hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-steering-wheel"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 14l0 7" /><path d="M10 12l-6.75 -2" /><path d="M14 12l6.75 -2" /></svg>
        PLAY
      </button>
      <button v-if="role === 'instructor'" @click="changeState('settings')" class="w-[20rem] flex items-center gap-x-4 bg-white text-4xl text-darkBlue hover:bg-[#F9AF06]  hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-settings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>
        SETTINGS
      </button>
      <button @click="changeState('explore')" class="w-[20rem] flex items-center gap-x-4 bg-white text-4xl text-darkBlue hover:bg-[#F9AF06]  hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
        EXPLORE
      </button>
      <button @click="exitApp" class="w-[20rem] flex items-center gap-x-4 bg-red-500 text-4xl text-white  hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
        EXIT
      </button>

    </div>

    <div v-if="statex === 'play'" class="flex flex-col w-full h-screen items-center gap-y-8">
    <h1 class="text-yellow text-4xl py-4 text-center font-semibold">SELECT DIFFICULTY</h1>
    <div class="flex w-full justify-around">
      <!-- EASY -->
      <div
        :class="['w-40 h-40 rounded-xl flex flex-col items-center py-6 transition duration-300', selectedDifficulty === 'easy' ? 'bg-green-500 text-white' : 'bg-white hover:bg-green-500 hover:text-white']"
        @click="selectDifficulty('easy')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icon-tabler-star">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"/>
        </svg>
        <h1 class="text-4xl font-semibold">EASY</h1>
      </div>

      <!-- intermediate -->
      <div
        :class="['w-40 h-40 rounded-xl flex flex-col items-center py-6 transition duration-300', selectedDifficulty === 'intermediate' ? 'bg-orange-500 text-white' : 'bg-white hover:bg-orange-500 hover:text-white']"
        @click="selectDifficulty('intermediate')"
      >
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icon-tabler-star">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icon-tabler-star">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"/>
          </svg>
        </div>
        <h1 class="text-xl py-4 font-semibold">INTERMEDIATE</h1>
      </div>

      <!-- HARD -->
      <div
        :class="['w-40 h-40 rounded-xl flex flex-col items-center py-6 transition duration-300', selectedDifficulty === 'hard' ? 'bg-red-500 text-white' : 'bg-white hover:bg-red-500 hover:text-white']"
        @click="selectDifficulty('hard')"
      >
        <svg  xmlns="http://www.w3.org/2000/svg"  width="80"  height="80"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-stars"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17.657 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.907 -.278l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.773l-.143 .007z" /><path d="M6.057 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.324 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z" /><path d="M11.857 2.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.894l1.709 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.892l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z" /></svg>
        <h1 class="text-4xl font-semibold">HARD</h1>
      </div>
    </div>

    <h1 class="text-yellow text-4xl py-4 text-center font-semibold">SELECT SCENARIO</h1>
    <div class="flex w-full justify-around">
      <button
        v-if="selectedDifficulty === 'easy' || selectedDifficulty"
        @click="selectScenario('scene1')"
        :class="['w-[20rem] text-4xl text-darkBlue font-bold py-8 px-8 rounded transition-all', selectedScenario === 'scene1' ? 'bg-[#F9D949] text-black hover:bg-[#ffcb00]' : 'bg-[#E5BA73] text-black hover:bg-[#F9D949] hover:text-black']"
      >
        SCENE 1
      </button>
      <button
        v-if="selectedDifficulty === 'easy' || selectedDifficulty"
        @click="selectScenario('scene2')"
        :class="['w-[20rem] text-4xl text-darkBlue font-bold py-8 px-8 rounded transition-all', selectedScenario === 'scene2' ? 'bg-[#F9D949] text-black hover:bg-[#ffcb00]' : 'bg-[#E5BA73] text-black hover:bg-[#F9D949] hover:text-black']"
      >
        SCENE 2
      </button>
      <button
        v-if="selectedDifficulty === 'intermediate' || selectedDifficulty === 'hard'"
        @click="selectScenario('scene3')"
        :class="['w-[20rem] text-4xl text-darkBlue font-bold py-8 px-8 rounded transition-all', selectedScenario === 'scene3' ? 'bg-[#F9D949] text-black hover:bg-[#ffcb00]' : 'bg-[#E5BA73] text-black hover:bg-[#F9D949] hover:text-black']"
      >
        SCENE 3
      </button>
    </div>

    <div class="flex w-full justify-around">
      <button
        @click="changeState('landing')"
        :class="['mt-8 w-48 py-4 text-2xl font-semibold rounded-lg transition bg-red-500 hover:bg-red-600 text-white']"
      >
        BACK
      </button>
      <button
        @click="handleTowns"
        :class="['mt-8 w-48 py-4 text-2xl font-semibold rounded-lg transition', selectedDifficulty && selectedScenario ? 'bg-blue-600 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed']"
        :disabled="!selectedDifficulty || !selectedScenario"
      >
        NEXT
      </button>
    </div>
    </div>

    <div v-if="statex === 'explore'" class="h-screen">
      <h1 class="text-yellow text-4xl py-4 text-center font-semibold">WELCOME TO THE EXPLORE PAGE</h1>
      <h1 class="text-white text-4xl py-4 text-center font-semibold">You can now view all our assets, towns and scenarios</h1>

      <div class="py-20 flex flex-col h-[80vh] gap-y-8 items-center">
        <button @click="changeState('towns')" class="w-[20rem] flex items-center gap-x-4 bg-white text-4xl text-darkBlue hover:bg-yellow  hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">
          TOWNS
        </button>

        <button @click="changeState('viewScenarios')" class="w-[20rem] flex items-center gap-x-4 bg-white text-4xl text-darkBlue hover:bg-yellow  hover:text-[#fbfbfb] font-bold py-8 px-8 rounded transition-all">
          SCENARIOS
        </button>
      </div>
      
      <div>
        <button @click="changeState('landing')" class="btn btn-error">back</button>
      </div>

    </div>

    <div v-if="statex === 'towns'" class="h-screen">

      <h1 v-if="previousState === 'play'" class="text-4xl text-center py-8 font-bold text-yellow">SELECT A TOWN</h1>
      <h1 v-if="previousState === 'explore'" class="text-4xl text-center py-8 font-bold text-yellow">YOU ARE VIEWING TOWNS</h1>

      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img
            src="../assets/town_maps/town2map.png"
            class="max-h-[60vh] w-full object-contain" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide5" @click="updateTownNumber(6)" class="btn btn-circle">❮</a>SELECT
            <a href="#slide2" @click="updateTownNumber(3)" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="../assets/town_maps/town3map.png"
            class="max-h-[60vh] w-full object-contain" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" @click="updateTownNumber(2)" class="btn btn-circle">❮</a>
            <a href="#slide3" @click="updateTownNumber(4)" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="../assets/town_maps/town4map.png"
            class="max-h-[60vh] w-full object-contain" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" @click="updateTownNumber(3)" class="btn btn-circle">❮</a>
            <a href="#slide4" @click="updateTownNumber(5)" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img
            src="../assets/town_maps/town5map.png"
            class="max-h-[60vh] w-full object-contain" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" @click="updateTownNumber(4)" class="btn btn-circle">❮</a>
            <a href="#slide5" @click="updateTownNumber(6)" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" class="carousel-item relative w-full">
          <img
            src="../assets/town_maps/town6map.png"
            class="max-h-[60vh] w-full object-contain" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" @click="updateTownNumber(5)" class="btn btn-circle">❮</a>
            <a href="#slide1" @click="updateTownNumber(2)" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      <h5 class="text-white text-center text-4xl font-semibold py-4">You are viewing Town {{ townNumber }}</h5>
      
      <div class="flex justify-between pt-20">
        <div class="px-20">
          <button @click="goBack()" class="w-[20rem] flex gap-x-8 items-center bg-red-500 text-4xl text-white hover:text-5xl hover:bg-red-600 font-bold py-8 px-8 rounded transition-all">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 7l-5 5l5 5" /><path d="M17 7l-5 5l5 5" /></svg>
            BACK
          </button>
        </div>
        <div v-if="previousState === 'play'" class="px-20">
          <button
            @click="runPythonScript()"
            class="w-[20rem] flex gap-x-12 items-center bg-green-500 text-4xl text-white hover:text-5xl hover:bg-green-600 font-bold py-8 px-8 rounded transition-all"
          >
            <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
            PLAY
          </button>
        </div>
      </div>

    </div>
    
    <div v-if="statex === 'viewScenarios'" class="w-full h-screen">
      

      <div>
        <button @click="changeState('explore')" class="btn btn-error">back</button>
      </div>
    </div>

    <div v-if="statex === 'townsx'" class="w-full h-screen">
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
            <button
              @click="runPythonScript()"
              class="w-[20rem] flex gap-x-12 items-center bg-green-500 text-4xl text-white hover:text-5xl hover:bg-green-600 font-bold py-8 px-8 rounded transition-all"
            >
              <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
              PLAY
            </button>
          </div>
        </div>
  
    </div>

    <div v-if="statex === 'settings'" class="w-full h-screen">

      <div class="p-8">
        <button class="btn btn-error" @click="changeState('landing')">back</button>
      </div>

      <div class="flex w-full justify-evenly">

        <div class="w-[20rem]">
          <h1 class="text-center">Select weather</h1>
          <div class="text-center py-4">
            <img :src="currentWeather.svg" alt="Weather Icon" class="weather-icon mx-auto" />
            <h2>{{ currentWeather.name }}</h2>
          </div>
          <input
            type="range"
            min="0"
            max="96"
            v-model="sliderValue"
            class="range"
            step="16"
          />
          <div class="flex w-full justify-between px-2 text-xs"> <span>|</span> <span>|</span> <span>|</span> <span>|</span> <span>|</span> <span>|</span> <span>|</span> </div>
        </div>
        
        <div class="w-[20rem]">
          <h1 class="text-center">Select Time</h1>
          <div class="text-center py-4">
            <img :src="currentTime.svg" alt="Time Icon" class="weather-icon mx-auto" />
            <h2>{{ currentTime.name }}</h2>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            v-model="timeSliderValue"
            class="range"
            step="50"
          />
          <div class="flex w-full justify-between px-2 text-xs"> <span>|</span> <span>|</span> <span>|</span> </div>
        </div>

      </div>

      <div class="flex w-full justify-evenly py-20">
        
        <div>
          <label class="input input-bordered flex items-center gap-2">
            <input v-model="walkers" type="text" class="w-[10rem]" placeholder="Walkers" />
          </label>
        </div>
        
        <div>
          <label class="input input-bordered flex items-center gap-2">
            <input v-model="twoWheelers" type="text" class="w-[10rem]" placeholder="Two wheeler Vehicles" />
          </label>
        </div>

        <div>
          <label class="input input-bordered flex items-center gap-2">
            <input v-model="heavyVehicles" type="text" class="w-[10rem]" placeholder="Heavy Vehicles" />
          </label>
        </div>

        <div>
          <label class="input input-bordered flex items-center gap-2">
            <input v-model="threeWheelers" type="text" class="w-[10rem]" placeholder="Three wheeler Vehicles" />
          </label>
        </div>

        <div>
          <label class="input input-bordered flex items-center gap-2">
            <input v-model="nanoVehicles" type="text" class="w-[10rem]" placeholder="Nano Vehicles" />
          </label>
        </div>

        <div>
          <label class="input input-bordered flex items-center gap-2">
            <input v-model="cars" type="text" class="w-[10rem]" placeholder="Cars" />
          </label>
        </div>

      </div>

      <div class="flex justify-evenly">
        <button class="btn btn-error" @click="clearSettings">Clear settings</button>
        <button class="btn btn-accent" @click="saveSettings">Save settings</button>
      </div>
    </div>

  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
  import prac from "../assets/svg/prac.svg";
  import clearSvg from "../assets/weather_svg/clear.svg";
  import cloudySvg from "../assets/weather_svg/cloudy.svg";
  import hardRainSvg from "../assets/weather_svg/heavy_rain.svg";
  import midRainSvg from "../assets/weather_svg/mid_rain.svg";
  import softRainSvg from "../assets/weather_svg/soft_rain.svg";
  import wetCloudySvg from "../assets/weather_svg/wet_cloudy.svg";
  import wetSvg from "../assets/weather_svg/wet.svg";

  import sunny from "../assets/time_svg/sunny.svg";
  import night from "../assets/time_svg/night.svg";
  import sunset from "../assets/time_svg/sunset.svg";

  // states
  const role = ref(null);
  const name = ref('');
  const isReportChecked = ref(true);
  const selectedDifficulty = ref(null);
  const selectedScenario = ref(null);
  const difficulty = ref('');
  const currentSlide = ref(0);
  const townNumber = ref(2);
  const statex = ref('main'); // state for which view to be shown
  const previousState = ref(''); // store the previous state

  // settings states
  const walkers = ref('');
  const twoWheelers = ref('');
  const heavyVehicles = ref('');
  const threeWheelers = ref('');
  const nanoVehicles = ref('');
  const cars = ref('');

  function saveSettings() {
    console.log(currentWeather.value.name);
    console.log(currentTime.value.name);
    console.log(walkers.value);
    console.log(twoWheelers.value);
    console.log(heavyVehicles.value);
    console.log(threeWheelers.value);
    console.log(nanoVehicles.value);
    console.log(cars.value);
    console.log('Settings saved');
  }

  function clearSettings() {
    walkers.value = '';
    twoWheelers.value = '';
    heavyVehicles.value = '';
    threeWheelers.value = '';
    nanoVehicles.value = '';
    cars.value = '';
  }

  const weatherOptions = [
    { name: 'Clear', svg: clearSvg },
    { name: 'Cloudy', svg: cloudySvg },
    { name: 'Hard Rain', svg: hardRainSvg },
    { name: 'Mid Rain', svg: midRainSvg },
    { name: 'Soft Rain', svg: softRainSvg },
    { name: 'Wet Cloudy', svg: wetCloudySvg },
    { name: 'Wet', svg: wetSvg },
  ];

  const sliderValue = ref(0); // * for weather slider

  const currentWeather = computed(() => {
    const index = sliderValue.value / 16;
    return weatherOptions[index];
  });

  const timeOptions = [
    { name: 'Noon', svg: sunny },
    { name: 'Sunset', svg: sunset },
    { name: 'Night', svg: night },
  ];

  const timeSliderValue = ref(0);

  const currentTime = computed(() => {
    const index = timeSliderValue.value / 50;
    return timeOptions[index];
  });
  
  function handleInstructor() {
    role.value = "instructor";
    statex.value = "landing";
  }
  
  function handleDriver() {
    role.value = "driver";
    statex.value = "landing";
  }

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

  function updateTownNumber(number) {
    townNumber.value = number;
    window.electronAPI.sendRightState('towns');
    window.electronAPI.sendTown(number);
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
    window.electronAPI.sendTown(townNumber.value);
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

    const weather = currentWeather.value?.name;
    const time = currentTime.value?.name;
    let weather_param;
    let num_walkers;
    let num_vehicles_foreign;
    let num_vehicles_Indic_TwoWheeler;
    let num_vehicles_Indic_HeavyVehicle;
    let num_vehicles_Indic_ThreeWheeler;
    let num_vehicles_Indic_FourWheeler;

    num_walkers = walkers?.value ? parseInt(walkers.value) : null;
    num_vehicles_foreign = cars?.value ? parseInt(cars.value) : null;
    num_vehicles_Indic_TwoWheeler = twoWheelers?.value ? parseInt(twoWheelers.value) : null;
    num_vehicles_Indic_HeavyVehicle = heavyVehicles?.value ? parseInt(heavyVehicles.value) : null;
    num_vehicles_Indic_ThreeWheeler = threeWheelers?.value ? parseInt(threeWheelers.value) : null;
    num_vehicles_Indic_FourWheeler = nanoVehicles?.value ? parseInt(nanoVehicles.value) : null;

    if(weather == "Mid Rain" && time == "Night"){
      weather_param = "Mid Rainy Night";
    }else if(weather == "Mid Rain" && time == "Noon"){
      weather_param = "Mid Rainy Noon";
    }else{
      if(weather && time){
        weather_param = weather + ' ' + time;
      }else{
        weather_param = null;
      }
    }

    console.log(level, scene, town, weather_param, num_walkers, num_vehicles_foreign, num_vehicles_Indic_TwoWheeler, num_vehicles_Indic_HeavyVehicle, num_vehicles_Indic_ThreeWheeler, num_vehicles_Indic_FourWheeler);

    if(level && scene && town && !weather){
      window.electronAPI.runPython(level, scene, town - 2);
      console.log("Iam running the basic version");
    }else if(level && scene && town && weather){
      console.log("did I work?")
      // window.electronAPI.runPythonAdv(level, scene, town - 2, `"${weather_param}"` );
      window.electronAPI.runPythonAdv(level, scene, town - 2, `"${weather_param}"` , num_walkers, num_vehicles_foreign, num_vehicles_Indic_TwoWheeler, num_vehicles_Indic_HeavyVehicle, num_vehicles_Indic_ThreeWheeler, num_vehicles_Indic_FourWheeler);
      console.log("Iam");
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
  .weather-icon {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
  }
</style>