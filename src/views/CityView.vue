<template>
  <div>
    <router-link to="/" class="px-4 py-2 rounded-xl text-white bg-custom-green flex items-center gap-2 w-fit"> <i class="fa-solid fa-chevron-left"></i> back</router-link>
    <Suspense>
      <CityViewDetails />
      <template #fallback class="flex justify-center">
        <div class="w-full h-[50vh] flex items-center justify-center">
          <div class="loading"></div>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import CityViewDetails from '../components/CityViewDetails.vue';
</script>

<style>
.loading {
  border: 3px solid hsla(174, 100%, 33%, 0.2);
  border-top-color: hsl(174, 100%, 33%);
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
