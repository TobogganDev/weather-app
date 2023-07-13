<template>
  <div class="font-Lexend flex flex-col min-h-screen bg-custom-black ">
    <HomeHero />
    <Suspense>
      <RouterView class="py-10 px-4"/>
    </Suspense>
    
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HomeHero from './components/HomeHero.vue';
</script>
