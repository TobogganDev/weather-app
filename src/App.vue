<template>
  <div class="font-Lexend">
    <HomeHero />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HomeHero from './components/HomeHero.vue';
</script>

<style lang="scss" scoped>

</style>