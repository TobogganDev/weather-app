<template>
  <div class="py-6 px-8 bg-[#202020] w-fit rounded-2xl">
    <p class="uppercase text-gray-500 text-xs mb-1">{{ cardTitle }}</p>
    <p class="text-right text-5xl">{{ data }}</p>
  </div>
</template>

<script setup>
defineProps({
  cardTitle: String,
  data: String,
})
</script>