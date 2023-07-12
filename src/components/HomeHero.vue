<template>
  <header class="w-full h-52 flex items-center relative" title="Photo de Aleksandra Boguslawska sur Unsplash">
    <div class="relative">
      <h1 class="font-Righteous text-8xl">Weather App</h1>
    </div>
  </header>
</template>

<script setup>
  
</script>

<style>
header::before{
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url("@/assets/images/hero-background.jpg");
  filter: grayscale(100%);
  background-size: cover;
  background-position: center;
}
</style>